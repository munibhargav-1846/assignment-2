# Threadly Website

Clean runnable website package.

## Run
1. Extract this ZIP.
2. Open `index.html` directly in a modern browser.

For the most reliable local-server behavior, run from this folder:
- VS Code: use Live Server on `index.html`
- Python: `python -m http.server 5500`
- Then open `http://localhost:5500`

## Included
- `index.html` — complete Threadly application and interactions
- `assets/threadly-logo.svg` — Threadly logo asset

## Excluded
The generated color-palette/design documentation, duplicate HTML page, and screenshot/reference files are intentionally excluded.

## Note
The page currently loads Tailwind CSS, Lucide icons, and the Plus Jakarta Sans font from their public CDNs, so an internet connection is required for those external dependencies when opening the page.

## Added media posts
- All supplied images and videos are stored in `media/`.
- Each supplied media asset is published as a separate Threadly feed post.
- Each post includes one description and exactly five relevant hashtags.
