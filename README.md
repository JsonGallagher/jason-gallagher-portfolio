# Jason Gallagher Portfolio

Jason Gallagher's growth marketing portfolio, built with React, Vite, Tailwind CSS, and Framer Motion.

Live site: [jasongallagher.co](https://jasongallagher.co)

## Site overview

- **Homepage (`/`):** Positioning and three selected results, marketing case studies, recent experience, Market Data Dashboard, about/capabilities, and contact links.
- **Projects (`/projects`):** “The lab.” — project screenshots, Problem / Approach / Result case studies, technology lists, and source/demo links.
- **Navigation:** Homepage section links and Projects, with desktop and mobile menus.
- **Theme:** Light and dark modes, initially based on the system preference and saved in local storage.

The design uses Instrument Serif headings, DM Sans body text, a warm neutral palette, grouped text lists for skills, and real project imagery. The acquisition case is featured in a contrasting band with larger results; supporting cases use open columns. The dashboard uses an asymmetric image-and-copy layout on desktop and a title/image/copy sequence on mobile. Section headings are left-aligned, and homepage content renders without reveal animations. Project metadata appears as plain text below titles rather than badges over screenshots.

The older `/shelf` route is retained for direct access but is no longer linked in the navigation. Its setup and data documentation are in [docs/shelf.md](docs/shelf.md).

## Local development

Requirements: npm and Node.js 20.19+ on Node 20, or Node.js 22.12+.

```bash
git clone https://github.com/JsonGallagher/jason-gallagher-portfolio.git
cd jason-gallagher-portfolio
npm ci
npm run dev
```

Vite normally serves the site at `http://localhost:5173`. Check the terminal output for the actual port.

The homepage and Projects page do not require environment variables.

## Production build

```bash
npm run build
npm run preview
```

The build writes static assets to `dist`. The preview command serves that build locally.

## Deployment

Cloudflare Workers Builds is connected to the GitHub repository. Pushing to `main` triggers an automatic production build and deployment to [jasongallagher.co](https://jasongallagher.co).

- **Build command:** `npm run build`
- **Static asset directory:** `dist`
- **Configuration:** [wrangler.jsonc](wrangler.jsonc)
- **Routing:** `assets.not_found_handling` is set to `single-page-application` for client-side routes.

Run a local build before pushing application or dependency changes. Cloudflare builds the source again during deployment; there is no need to commit or manually upload `dist`.

## Editing content

| Content | Source |
| --- | --- |
| Headline, summary, and selected results | `src/components/Hero.jsx` |
| Bio and social links | `src/components/About.jsx` |
| Marketing case studies | `src/components/Expertise.jsx` |
| Career experience | `src/components/Experience.jsx` |
| Focused capabilities and selected tools | `src/components/Skills.jsx` |
| Project descriptions, screenshots, stacks, and links | `src/data/projects.js` |
| Homepage project previews | `src/components/FeaturedProjects.jsx` |
| Project case-study presentation and carousels | `src/components/projects/ProjectCard.jsx` |
| Navigation | `src/components/Navbar.jsx` |
| Resume destination | `public/_redirects`, `src/pages/Resume.jsx` (keep destinations in sync) |

The content sources, metric scope, and pre-publication confirmation notes are recorded in [homepage content notes](docs/homepage-content.md). The older Testimonials and Values components are retained but are not rendered.

Homepage section order is defined in `src/pages/Home.jsx`; routes are defined in `src/App.jsx`.

## Styles and assets

- **Palette and font families:** `tailwind.config.js`
- **Shared styles and font declarations:** `src/styles/globals.css`
- **Fonts:** Self-hosted WOFF2 files in `public/fonts`, preloaded in `index.html`. Update the files, CSS declarations, preloads, and Tailwind font families together when changing fonts.
- **Portrait:** `src/assets/headshot.webp`
- **Project screenshots:** `public/images/projects`
- **Page metadata, font preloads, and structured data:** `index.html`
- **Social preview image and favicon:** `public/og-image.jpg`, `public/favicon.svg`

## Project structure

```text
jason-gallagher-portfolio/
├── public/                 # Fonts, project screenshots, redirects, and metadata assets
├── src/
│   ├── assets/             # Portrait
│   ├── components/         # Homepage sections and shared UI
│   │   ├── projects/       # Project cards and screenshot carousels
│   │   └── shelf/          # Retained collection components
│   ├── data/               # Projects and retained collection data
│   ├── hooks/              # Active-section tracking
│   ├── pages/              # Home, Projects, and retained Shelf route
│   ├── styles/             # Global styles and font declarations
│   ├── App.jsx             # Routes and theme state
│   └── main.jsx            # React entry point
├── docs/                   # Design audit and maintenance notes
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
└── wrangler.jsonc
```

The [design audit](docs/design-audit/audit.md) records the original visual findings, implemented refinements, screenshots, and remaining observations.

The [selected homepage refinements](docs/design-audit/selected-refinements/review.md) document the initial implementation of audit options 1, 4, and 5. The subsequent [visual rhythm pass](docs/design-audit/visual-rhythm/review.md) restores emphasis and varied composition while preserving that content structure.

## License

MIT License — feel free to use this as a template for your own portfolio.
