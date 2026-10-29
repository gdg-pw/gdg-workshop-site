/* ==========================================================
   DANE WARSZTATU – przed każdym warsztatem zmieniasz tylko ten plik.
   Puste pole albo pusta lista chowa swoją sekcję, HTML-a nie trzeba ruszać.
   Pełny przykład (warsztat Flutter, maj 2026) jest w README.
   ========================================================== */

// Temat warsztatu. Pusty title = strona „następne warsztaty wkrótce”
const WORKSHOP = {
  title: "",   // np. "Flutter + Gemini"
  desc:  "",   // jedno zdanie pod tytułem
  date:  "",   // np. "19 maja 2026, 18:00"
  place: "",   // np. "Gmach Elektroniki, s. 161"
};

// Terminal w hero: [tag, kolor, tekst]. Kolory: green / blue / yellow / red
const TERMINAL = [
  ["INIT", "green",  "Witaj na warsztatach GDG on Campus PW!"],
  ["INFO", "blue",   "W dniu warsztatów znajdziesz tu wszystkie linki"],
  ["TODO", "yellow", "Wpadnij na Discorda, żeby nie przegapić kolejnych ↓"],
];

// Zanim zaczniemy: kroki do zrobienia przed startem. Można używać <strong>, <code>, <a href="...">
const PREP = [
  // "Weź laptopa z ładowarką.",
  // "Zainstaluj Fluttera według <a href=\"https://github.com/gdg-pw/workshop-flutter\">instrukcji</a>.",
];

// Materiały: { tag, label, title, desc, url }. Ramki kart idą po kolei: czerwona, zielona, niebieska, żółta
const MATERIALS = [
  // { tag: "LAB", label: "Codelab #1", title: "Pierwsza aplikacja", desc: "Jedno zdanie o tym, co zrobimy", url: "https://codelabs.developers.google.com/..." },
];

// Anonimowa ankieta po warsztacie. Pusty = sekcja ukryta
const SURVEY_URL = "";

// Discord: przycisk w trybie „wkrótce”
const DISCORD_URL = "https://discord.com/invite/vNW4vXVwqH";
