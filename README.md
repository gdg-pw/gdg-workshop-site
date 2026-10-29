# Warsztaty GDG on Campus PW

Strona, którą pokazujemy na warsztatach [GDG on Campus Politechnika Warszawska](https://gdg.community.dev/gdg-on-campus-politechnika-warszawska-warsaw-poland/): temat, kiedy i gdzie, co przygotować, linki do materiałów i ankieta na koniec. Jedna strona na wszystkie warsztaty: przed każdym podmieniamy tylko dane w `js/data.js`.

Czysty HTML, CSS i JS, bez buildów i zależności. Wygląd i układ plików jak w [gdg-jam-jar](https://github.com/gdg-pw/gdg-jam-jar).

## Przygotowanie strony pod warsztat

Wszystko w `js/data.js`. Puste pole albo pusta lista chowa swoją sekcję razem z linkiem w menu, więc w HTML-u nic nie trzeba usuwać.

1. `WORKSHOP`: temat, jedno zdanie opisu, kiedy i gdzie.
2. `TERMINAL`: trzy, cztery linijki w terminalu pod logo.
3. `PREP`: co zrobić przed startem (laptop, instalacje, konta).
4. `MATERIALS`: karty z linkami do repo, codelabów, slajdów.
5. `SURVEY_URL`: link do ankiety. Można dodać pod koniec warsztatu.

Po warsztacie wyczyść `WORKSHOP.title`, `PREP`, `MATERIALS` i `SURVEY_URL`, a w `TERMINAL` przywróć teksty „wkrótce”. Strona wraca wtedy do trybu „Następne już wkrótce” z przyciskiem do Discorda.

### Przykład: warsztat Flutter (maj 2026)

```js
const WORKSHOP = {
  title: "Flutter + Gemini",
  desc:  "Zrobisz pierwszą aplikację we Flutterze, podłączysz do niej Gemini i wytrenujesz agenta do gry.",
  date:  "19 maja 2026, 18:00",
  place: "Gmach Elektroniki, s. 161",
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

Daty i miejsca w przykładzie są poglądowe.

## Uruchomienie

Otwórz `index.html` w przeglądarce albo postaw prosty serwer:

```bash
python3 -m http.server 8000
```

i wejdź na http://localhost:8000.

## Gdzie co zmieniać

| Co                                                  | Plik                 |
|-----------------------------------------------------|----------------------|
| Temat, terminal, kroki, materiały, ankieta          | `js/data.js`         |
| Stałe teksty, socials, OG tagi                      | `index.html`         |
| Kolory, czcionki, zaokrąglenia                      | `css/variables.css`  |
| Przyciski, karty materiałów, plakietki, kroki       | `css/components.css` |
| Terminal, tło, logo, corgi                          | `css/effects.css`    |
| Wypełnianie strony danymi                           | `js/workshop.js`     |
| Symbole w tle, easter eggi                          | `js/effects.js`      |
| Logo, favicon, corgi, obrazek do podglądu linku     | `assets/`            |

Czcionki to Google Sans Flex (tekst) i Google Sans Code (terminal) z Google Fonts.

Obrazek podglądu linku (`assets/og.jpg`) i OG tagi są ogólne („Warsztaty GDG”), więc nie trzeba ich zmieniać co warsztat.

## Easter eggi

- Kliknij duże logo 5 razy.
- Konami code: ↑ ↑ ↓ ↓ ← → ← → B A

## Deploy

Kontener z `Dockerfile` (nginx), port `8098`. Lokalnie tak samo jak na serwerze: `docker compose up --build` i http://localhost:8098.

Każdy nowy plik w repo trafia na stronę, chyba że jest wpisany w `.dockerignore`. Portu i nazwy kontenera w `docker-compose.yml` nie zmieniaj, opiera się na nich konfiguracja serwera GDG.
