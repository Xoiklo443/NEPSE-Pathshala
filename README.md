# NEPSE Pathshala

A free, bilingual (English / Nepali) financial literacy website teaching complete
beginners how the Nepal Stock Exchange (NEPSE) works — from "what is a share?"
to reading a company's key ratios.

## Files
- `index.html` — page structure/markup
- `style.css` — all styling (light/dark theme, layout, components)
- `script.js` — app logic (routing, content data, quizzes, calculators, i18n)

## Running it
No build step or server required. Just open `index.html` in a browser,
or host all three files together on any static web host (GitHub Pages,
Netlify, Vercel, etc.).

## Notes
- All content is bilingual and stored as `{en, np}` pairs inside `script.js`.
- Progress tracking and theme preference are held in memory for the session
  (no `localStorage`/cookies are used) — swap in `localStorage` if you need
  it to persist across visits.
