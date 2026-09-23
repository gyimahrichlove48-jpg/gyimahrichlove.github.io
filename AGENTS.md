# Agent Instructions

## Project shape

- This is a React 19 app built with Vite. The main entry point is `src/main.jsx`.
- `src/App.jsx` currently owns the portfolio content, page mapping, and local navigation state. Keep page-specific rendering there unless a change clearly warrants extracting a component.
- `src/App.css` contains the portfolio design system and responsive layout. `src/index.css` still contains Vite template rules, so check for selector and variable conflicts before changing global styles.
- Static assets are served from `public/`; use root-relative paths such as `/profile.jpg` and `/resume.pdf`.

## Commands

- Install dependencies with `npm install`.
- Run development with `npm run dev`.
- Run the production build with `npm run build`.
- Run lint with `npm run lint`.
- There is no configured test framework or test script. For behavior changes, validate with lint, a production build, and focused browser checks when interaction is involved.

## Autosave and persistence

- There is currently no autosave, draft state, form state, API persistence, `localStorage`, `sessionStorage`, IndexedDB, cookie, or unload-handling implementation. Do not describe navigation or the resume download as autosave.
- Before adding autosave, identify the user-editable data and its owner in `src/App.jsx`; do not persist static portfolio content or transient UI state unless the request explicitly requires it.
- Prefer a small persistence helper or hook over spreading storage calls through render logic. Use a versioned, namespaced storage key and handle unavailable, malformed, or quota-exceeded storage without breaking the portfolio.
- Hydrate persisted data once, keep the initial render stable, and debounce writes when changes can occur rapidly. Avoid writing during render and avoid overwriting newer in-memory edits during hydration.
- Define the expected recovery behavior before implementation: restore drafts after reload, expose a saved/unsaved status if relevant, and provide a clear reset path. Do not claim data was saved unless the write succeeded.
- For autosave changes, manually verify first load, reload restoration, rapid edits, malformed stored data, cleared storage, and private or restricted-storage behavior where practical.

## Editing conventions

- Preserve the existing JavaScript/JSX style and keep changes focused.
- Use React hooks consistently with the existing ESLint configuration; do not add dependencies without a concrete need.
- Preserve the visual language in `src/App.css`: Fraunces for display text, IBM Plex families for supporting text, charcoal background, and gold accent. Check responsive behavior after layout changes.
- Update `README.md` only when user-facing setup or behavior changes; otherwise keep implementation guidance here concise and link to the relevant source files.
