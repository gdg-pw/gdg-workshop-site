<div align="center">
  <img src="assets/logo.webp" alt="GDG on Campus PW" width="140" />

  <h1>Warsztaty GDG</h1>
  <p>Jedna strona na każde warsztaty. Zmieniasz jeden plik, reszta się układa.</p>

  <img src="https://img.shields.io/badge/szablon-js%2Fdata.js-FBBC04?style=for-the-badge&labelColor=181818" alt="Szablon: js/data.js" />

  <br/><br/>

  <img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white&labelColor=181818" alt="HTML" />
  <img src="https://img.shields.io/badge/CSS-663399?style=flat-square&logo=css&logoColor=white&labelColor=181818" alt="CSS" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black&labelColor=181818" alt="JavaScript" />
  <img src="https://img.shields.io/badge/nginx-009639?style=flat-square&logo=nginx&logoColor=white&labelColor=181818" alt="nginx" />
</div>

---

<table>
  <tr>
    <td align="center"><img src=".github/readme/soon.webp" alt="Strona między warsztatami" /><br/><sub>Między warsztatami</sub></td>
    <td align="center"><img src=".github/readme/live.webp" alt="Strona w dniu warsztatów" /><br/><sub>W dniu warsztatów (dane przykładowe)</sub></td>
  </tr>
</table>

Strona, którą pokazujemy na warsztatach [GDG on Campus PW](https://gdg.community.dev/gdg-on-campus-politechnika-warszawska-warsaw-poland/): temat, kiedy i gdzie, co przygotować, linki do materiałów i ankieta na koniec. Między warsztatami sama przechodzi w tryb „Następne już wkrótce” z linkiem do Discorda.

---

## 🧩 Wszystko z jednego pliku

<div align="center">
  <img src=".github/readme/materials.webp" alt="Karty z materiałami" width="900" />
</div>

Przed warsztatem zmieniasz tylko `js/data.js`. Puste pole chowa swoją sekcję razem z linkiem w menu.

| W `js/data.js` | Na stronie |
|----------------|------------|
| `WORKSHOP` | Temat, opis, kiedy i gdzie |
| `TERMINAL` | Linijki w terminalu pod logo |
| `PREP` | Sekcja „Zanim zaczniemy” |
| `MATERIALS` | Karty z linkami, ramki w kolorach GDG po kolei |
| `SURVEY_URL` | Ankieta na koniec |

Po warsztacie wyczyść pola, a w `TERMINAL` przywróć teksty „wkrótce”.

<details>
<summary><b>Przykład: warsztat Flutter + Gemini</b></summary>

```js
const WORKSHOP = {
  title: "Flutter + Gemini",
  desc:  "Zrobisz pierwszą aplikację we Flutterze, podłączysz do niej Gemini i wytrenujesz agenta do gry.",
  date:  "19 maja 2026, 18:00",
  place: "Politechnika Warszawska",
};

const TERMINAL = [
  ["INIT", "green",  "Witaj na warsztacie GDG on Campus PW!"],
  ["INFO", "blue",   "Poniżej znajdziesz wszystkie potrzebne linki"],
  ["TODO", "yellow", "Zacznij od instalacji Fluttera na swoim urządzeniu ↓"],
];

const PREP = [
  "Weź laptopa z ładowarką.",
  "Zainstaluj Fluttera według <a href=\"https://github.com/gdg-pw/workshop-flutter\" target=\"_blank\" rel=\"noopener\">instrukcji</a>.",
  "Sprawdź instalację: <code>flutter doctor</code>.",
];

const MATERIALS = [
  { tag: "GIT", label: "Flutter Installation", title: "Jak pobrać Fluttera?",               desc: "Instrukcja instalacji na różne systemy (w README)",         url: "https://github.com/gdg-pw/workshop-flutter" },
  { tag: "LAB", label: "Codelab #1",           title: "Pierwsza aplikacja we Flutterze",    desc: "Podstawy Fluttera na przykładzie pierwszej aplikacji",     url: "https://codelabs.developers.google.com/codelabs/flutter-codelab-first?hl=pl#0" },
  { tag: "LAB", label: "Codelab #2",           title: "Łączymy Gemini z Flutterem",         desc: "Narzędzie, które dobiera kolory na podstawie opisu",       url: "https://codelabs.developers.google.com/codelabs/flutter-gemini-colorist?hl=pl#0" },
  { tag: "LAB", label: "Codelab #3",           title: "Uczymy agenta do rozwiązywania gry", desc: "Gra podobna do Bitwy morskiej i agent, z którym zagramy", url: "https://codelabs.developers.google.com/tfagents-flutter/?hl=pl#0" },
];
```

Data i miejsce są przykładowe.

</details>

---

## 📱 Na telefonie

<table>
  <tr>
    <td align="center"><img src=".github/readme/mobile.webp" alt="Start na telefonie" width="260" /></td>
    <td align="center"><img src=".github/readme/mobile-materials.webp" alt="Materiały na telefonie" width="260" /></td>
  </tr>
</table>

---

## Pod maską

- Czysty HTML, CSS i JS. Bez buildów i zależności. Wygląd jak w [gdg-jam-jar](https://github.com/gdg-pw/gdg-jam-jar).
- Podgląd linku (OG tagi i `assets/og.jpg`) jest ogólny, więc nie trzeba go zmieniać co warsztat.
- Lokalnie: `python3 -m http.server` albo `docker compose up --build` i http://localhost:8098.
- Easter eggi: kliknij logo 5 razy albo wpisz `↑ ↑ ↓ ↓ ← → ← → B A`.

---

<div align="center">
  <sub><a href="https://gdg.community.dev/gdg-on-campus-politechnika-warszawska-warsaw-poland/">GDG on Campus PW</a> &nbsp;·&nbsp; <a href="https://discord.com/invite/vNW4vXVwqH">Discord</a></sub>
</div>
