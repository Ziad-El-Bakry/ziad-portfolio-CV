# Ziad El-Bakry — Portfolio (Next.js + Tailwind + TypeScript)

This repository is a personal portfolio/CV website built with Next.js, TypeScript and Tailwind CSS. It contains components for About, Contact, Projects and styling configured for a modern responsive layout.

---

## TL;DR

- Framework: Next.js (React)
- Language: TypeScript
- Styling: Tailwind CSS
- Run locally:

```powershell
# from project root (Windows PowerShell)
npm install
npm run dev
```

Open http://localhost:5555 in your browser.

---

## What’s in this repo

A minimal overview of relevant files and folders:

```
next-env.d.ts
next.config.js
package.json
postcss.config.js
tailwind.config.js
tsconfig.json
components/
  About.tsx
  Contact.tsx
  Header.tsx
  Projects.tsx
pages/
  _app.tsx
  index.tsx
public/
  README.txt
styles/
  globals.css
types/
  react-syntax-highlighter.d.ts
```

- `components/` — Reusable UI parts (About, Contact, Projects, Header).
- `pages/` — Next.js pages (index is the homepage).
- `styles/` — Global CSS and Tailwind imports.
- `public/` — Static assets.

---

## Tech stack

- Next.js (React framework)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- react-icons (icons)

Note: If you add new packages, run `npm install <pkg>` from the project root.

---

## Setup and development

Prerequisites:

- Node.js (recommended LTS >= 18)
- npm (bundled with Node) or pnpm/yarn if you prefer (project scripts assume npm)

Install dependencies:

```powershell
npm install
```

Start dev server (Hot reloading):

```powershell
npm run dev
```

Build for production:

```powershell
npm run build
npm run start
```

(If you use `next start` it serves the built app. On Vercel or other hosts, follow their deploy flow.)

---

## Common scripts (from package.json)

- `dev` — Starts Next.js dev server (localhost:3000 by default)
- `build` — Builds the app for production
- `start` — Starts built app
- `lint` — (if present) runs linters configured in the project

---

## Editing the site

- To change the About card content, edit `components/About.tsx`.
  - Example: `components/About.tsx` contains skills lists, animations (framer-motion) and an aside with language proficiency.
- To update contact/CTA: edit `components/Contact.tsx`.
- Page layout and global wrappers are in `pages/_app.tsx`.

When editing TypeScript files, VS Code + TypeScript will provide type checking and IDE help.

---

## Tailwind CSS

Tailwind is already configured via `tailwind.config.js` and `postcss.config.js`.
If you change Tailwind settings, you may need to restart the dev server to pick up new classes.

---

## Notes & Troubleshooting

- If `npm run dev` fails with missing modules, run `npm install` and verify Node version.
- If TypeScript errors block compilation, check `tsconfig.json` and run `npm run build` to see full errors.
- On Windows PowerShell, commands listed above are ready to paste.

---

## Contributing

This is a personal project but contributions are welcome:

1. Fork the repo
2. Create a feature branch
3. Commit and push
4. Open a pull request describing your change

Keep changes small and focused.

---

## License & Author

Author: Ziad El-Bakry

This repository contains personal website code; add a license file if you intend to open-source under a specific license.

---

If you'd like, I can also:

- Add a `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`.
- Generate a short deploy guide for Vercel or Netlify.
- Add a tiny Makefile or `npm` scripts to streamline common tasks.
