# GDG On Campus PW — Workshop Site

Strona landing page dla warsztatów GDG On Campus PW. Zawiera linki do materiałów warsztatowych oraz sociale koła.

## Stack

- Vanilla HTML/CSS/JS — `site/index.html`
- nginx:alpine w Docker
- Port: `8098:80`

## Struktura

```
site/
├── index.html        # cała strona
├── logo.svg          # logo GDG On Campus PW
├── icon.png          # favicon
├── popup.png         # corgi (easter egg)
└── socials/          # ikony SVG social mediów
    ├── discord.svg
    ├── facebook.svg
    ├── gdg.svg
    ├── instagram.svg
    └── linkedin.svg
```

## Uruchomienie

```bash
# lokalnie (Python)
cd site && python3 -m http.server 8080

# Docker
docker compose up -d
```

## Aktualizacja linków przed warsztatem

W `site/index.html` znajdź sekcję `// materiały warsztatowe` i podmień `href` w kartach:

| Klasa karty | Co linkuje              |
|-------------|-------------------------|
| `.gcp`      | instrukcja/repo startowe |
| `.lab1`     | Codelab #1              |
| `.lab2`     | Codelab #2              |
| `.lab3`     | Codelab #3              |

Tekst w `.card-title` i `.card-desc` też warto dostosować do tematu warsztatów.

## Easter eggi

- **Kliknij logo 5x** — logo drży, spadają gwiazdki
- **Konami code** (↑↑↓↓←→←→BA) — corgi wyskakuje zza terminala i szczeka
