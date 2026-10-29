// Wypełnia stronę danymi z js/data.js. Puste dane = sekcja i link w menu znikają

const CARD_COLORS = ["red", "green", "blue", "yellow"];   // kolejność ramek kart materiałów

function initWorkshop() {
  renderHero();
  renderTerminal();
  renderPrep();
  renderMaterials();
  renderSurvey();
}

function renderHero() {
  const title = document.getElementById("hero-title");
  const desc  = document.getElementById("hero-desc");
  const btn   = document.getElementById("hero-btn");

  // Tryb „wkrótce”: zostaje tekst z index.html, przycisk prowadzi na Discorda
  if (!WORKSHOP.title) {
    btn.href = DISCORD_URL;
    btn.target = "_blank";
    btn.rel = "noopener";
    return;
  }

  document.title = `${WORKSHOP.title} | Warsztaty GDG on Campus PW`;
  title.textContent = WORKSHOP.title;
  desc.textContent = WORKSHOP.desc;
  desc.hidden = !WORKSHOP.desc;

  const meta = [["kiedy", WORKSHOP.date], ["gdzie", WORKSHOP.place]].filter(([, v]) => v);
  document.getElementById("hero-meta").innerHTML = meta
    .map(([k, v]) => `<li><span class="chip-key">${k}</span> ${escapeHtml(v)}</li>`).join("");

  // Przycisk prowadzi do pierwszej sekcji, która ma treść
  if (PREP.length)           { btn.href = "#prep";      btn.textContent = "Zaczynamy"; }
  else if (MATERIALS.length) { btn.href = "#materials"; btn.textContent = "Materiały"; }
  else btn.hidden = true;
}

function renderTerminal() {
  document.getElementById("terminal-text").innerHTML = TERMINAL
    .map(([tag, color, text]) => `<span class="t-${color}">[${escapeHtml(tag)}]</span> ${escapeHtml(text)}`)
    .join("<br>");
}

// PREP to HTML z data.js (pisany przez nas, nie przez użytkowników), więc wstawiamy bez escapowania
function renderPrep() {
  if (!toggleSection("prep", PREP.length)) return;
  document.getElementById("prep-list").innerHTML = PREP.map(step => `<li>${step}</li>`).join("");
}

function renderMaterials() {
  if (!toggleSection("materials", MATERIALS.length)) return;
  document.getElementById("materials-grid").innerHTML = MATERIALS.map((m, i) => {
    const c = CARD_COLORS[i % CARD_COLORS.length];
    return `
      <a class="card link-card c-${c}" href="${escapeHtml(m.url)}" target="_blank" rel="noopener">
        <div class="card-prefix"><span class="t-${c}">[${escapeHtml(m.tag)}]</span> ${escapeHtml(m.label)}</div>
        <h3 class="card-title">${escapeHtml(m.title)} <span class="card-arrow">→</span></h3>
        <p class="card-desc">${escapeHtml(m.desc)}</p>
      </a>`;
  }).join("");
}

function renderSurvey() {
  if (!toggleSection("survey", SURVEY_URL)) return;
  document.getElementById("btn-survey").href = SURVEY_URL;
}

// Pokazuje albo chowa sekcję i jej link w menu (<a data-section="...">)
function toggleSection(id, visible) {
  const show = Boolean(visible);
  document.getElementById(id).hidden = !show;
  document.querySelectorAll(`[data-section="${id}"]`).forEach(a => (a.hidden = !show));
  return show;
}
