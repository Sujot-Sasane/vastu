# SUKH VASTU — Website

Premium consultancy website for SUKH VASTU (Vastu • Astrology • Aura Healing).
Built with React, Vite, Tailwind CSS and Framer Motion.

## Development

```bash
npm install
npm run dev
```

## Structure

- `src/data/` — all business content (services, pricing, packages, certifications,
  contact details, benefits). Update these files to change site content — no
  markup edits required.
- `src/components/` — reusable UI building blocks (Navbar, Hero, cards, forms, CTA).
- `src/pages/` — the three routes: Home (`/`), Services & Pricing (`/services`),
  Contact (`/contact`).

## Adding the cinematic hero video

The hero section is built to accept a cinematic background video generated
separately (e.g. via Google Flow). Drop the files in:

- `public/videos/hero-bg.mp4` — the background video (autoplay, muted, loop).
- `public/images/hero-poster.jpg` — a poster frame shown while the video loads
  and used as the fallback on very slow connections.

Until these files are added, the hero gracefully falls back to a still
gradient + geometric backdrop — nothing breaks. Visitors with
`prefers-reduced-motion` enabled are always shown the still backdrop.

## Build

```bash
npm run build
npm run preview
```
