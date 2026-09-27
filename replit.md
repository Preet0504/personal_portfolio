# Preet Patel — Portfolio

## Overview
A multi-page developer portfolio built with React, React Router, and Tailwind CSS. Every major project gets its own case-study page — architecture, real benchmark numbers, and honest limitations — rather than a single scrolling résumé page.

## Tech Stack
- **Frontend Framework**: React 18
- **Routing**: React Router (client-side, multi-page)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (scroll-triggered fade-ins only — no 3D/canvas)
- **Email Service**: EmailJS

## Project Structure
```
src/
  data/          # All content: projects, experience, education, skills, etc.
  components/    # Home-page sections (Hero, About, Experience, ...)
  components/ui/ # Shared primitives (Section, ProjectCard, ProjectSection, Button, Tag)
  pages/         # Home, Projects (index + filters), ProjectDetail, NotFound
  App.jsx        # Router + layout shell (Navbar/Footer persistent)
```

## Content model
`src/data/projects.js` is the source of truth: 17 projects in reverse-chronological
order, each with `tagline`, `metrics`, `tags`, `links`, and a generic `sections`
array (paragraphs / lists / tables) rendered by `ProjectSection.jsx`. Adding a
project means adding one object to that file — no new components required.

## Pages
- `/` — hero, about, featured projects, experience, open-source contribution,
  education, skills, publications, certifications, volunteering, contact.
- `/projects` — all projects, filterable by category.
- `/projects/:slug` — full case study for one project, with prev/next nav.

## Design
Dark theme, Inter + JetBrains Mono, indigo/cyan accent. No 3D — earlier
revisions of this site used Three.js/React Three Fiber for a hero scene and
starfield background; those were removed in favor of a faster, more
professional static-content design suited to technical case studies.

## Deployment
Cloudflare Pages via `npm run deploy` (`wrangler.toml`). `public/_headers` and
`public/_redirects` handle SPA routing and cache control.

## Environment Variables
Contact form uses EmailJS:
- `VITE_APP_EMAILJS_SERVICE_ID`
- `VITE_APP_EMAILJS_TEMPLATE_ID`
- `VITE_APP_EMAILJS_PUBLIC_KEY`
