// Efekty: symbole w tle + easter eggi (całość w funkcji, żeby nie mieszać zmiennych z innymi plikami)

function initEffects() {
  const canvas = document.getElementById("bg-canvas");
  const logo   = document.getElementById("main-logo");
  const termEl = document.getElementById("terminal-text");

  // Kolory bierzemy z CSS (css/variables.css), więc zmieniasz je tylko tam
  const css = getComputedStyle(document.documentElement);
  const colors = ["--blue", "--red", "--yellow", "--green"].map(v => css.getPropertyValue(v).trim());

  // ---------- Symbole w tle ----------
  const SYMBOLS = ["{ }", "< >", "[ ]", ";;", "if()", "=>", "null", "git", "gcp", "lab", "GDG"]; // dodaj swoje
  const SYMBOL_COUNT = 45;                                                                  // ile naraz

  for (let i = 0; i < SYMBOL_COUNT; i++) {
    const s = document.createElement("span");
    s.className = "code-symbol";
    s.textContent = pickRandom(SYMBOLS);
    s.style.color = pickRandom(colors);
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDuration = (Math.random() * 8 + 12) + "s";
    s.style.animationDelay = -(Math.random() * 20) + "s";
    canvas.appendChild(s);
  }

  // ---------- Easter egg 1: kliknij logo 5x ----------
  const originalText = termEl.innerHTML;
  let clicks = 0, clickTimer = null, eggActive = false;

  logo.addEventListener("click", () => {
    if (eggActive) return;
    clicks++;
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => (clicks = 0), 1800);
    if (clicks >= 5) { clicks = 0; logoEgg(); }
  });

  function logoEgg() {
    eggActive = true;
    logo.classList.remove("shaking");
    void logo.offsetWidth;
    logo.classList.add("shaking");
    logo.addEventListener("animationend", () => logo.classList.remove("shaking"), { once: true });

    termEl.innerHTML = originalText +
      `<br><span class="t-yellow">[???]</span> Ktoś tu jest ciekawski... 👀` +
      `<br><span class="t-green">[OK]</span>&nbsp; Ale Corgi to akceptuje. 🐕`;

    // spadające gwiazdki
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        const s = document.createElement("span");
        s.className = "code-symbol";
        s.textContent = pickRandom(["⭐", "🌟", "✦", "◆"]);
        s.style.color = pickRandom(colors);
        s.style.left = Math.random() * 100 + "vw";
        s.style.animation = `fallStar ${2.5 + Math.random()}s linear forwards`;
        s.style.opacity = "0.75";
        canvas.appendChild(s);
        setTimeout(() => s.remove(), 4000);
      }, i * 80);
    }

    setTimeout(() => (termEl.innerHTML = originalText), 4500);
    setTimeout(() => (eggActive = false), 4800);
  }

  // ---------- Easter egg 2: Konami code -> corgi ----------
  const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  const corgi = document.getElementById("corgi-popup");
  const woof  = document.getElementById("woof-bubble");
  let idx = 0, corgiActive = false;

  document.addEventListener("keydown", (e) => {
    if (e.key === KONAMI[idx]) {
      idx++;
      if (idx === KONAMI.length) { idx = 0; corgiEgg(); }
    } else {
      idx = e.key === KONAMI[0] ? 1 : 0;
    }
  });

  function corgiEgg() {
    if (corgiActive) return;
    corgiActive = true;
    corgi.classList.add("peeking");                              // wyjeżdża
    setTimeout(() => woof.classList.add("show"), 1050);          // woof
    setTimeout(() => woof.classList.remove("show"), 2600);       // woof znika
    setTimeout(() => corgi.classList.remove("peeking"), 3000);   // chowa się
    setTimeout(() => (corgiActive = false), 4000);
  }
}
