# Knead To Know — Sweet & Sour

A Vercel-ready, luxury artisan bakery demo built as a complete Next.js application. It includes a responsive menu, demo ordering flow, persistent client-side cart, forms with success states, and polished editorial styling.

## Tech stack

- Next.js 14 with App Router
- TypeScript, React, Tailwind CSS
- Local TypeScript data files and localStorage cart persistence
- No database, payment processor, or paid API required

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Production verification:

```bash
npm run lint
npm run build
npm start
```

## Project structure

- `app/` — routes, global layout, metadata, and page UI
- `components/` — reusable layout, commerce, form, and visual components
- `data/` — local products, FAQs, testimonials, gallery and site data
- `public/assets/` — safe project copy of the supplied brand asset
- `CODEX.md` / `CLAUDE.md` — detailed continuation handoffs

## Demo features

- 14 responsive pages: home, menu, order online, product collections, catering, story, gallery, FAQ, contact, cart, checkout demo, and confirmation — every page is linked from the header and/or footer, so nothing is orphaned
- 28 realistic products across six categories
- Cart add/update/remove/clear behavior persisted in `localStorage`
- Accessible accordion, mobile navigation, buttons, forms, and input labels
- Demo-only contact, catering, newsletter, and checkout confirmations
- Editorial typography via `next/font/google` (Playfair Display + Inter), and H.264 `.mp4` hero/category videos for reliable autoplay across Chrome, Edge, Firefox, and Safari

## Deployment and handoff

Deploy to Vercel as a standard Next.js app. Set no environment variables for this version. The original source logo remains untouched at the workspace root; the app uses a safe copy at `public/assets/knead-to-know-logo-v1.png`. The supplied bakery banner is safely stored at `public/assets/knead-to-know-bakery-banner.jpg` and used on the home, About, and Catering pages.

Replace or extend `public/assets/` with approved product photography as it becomes available.
