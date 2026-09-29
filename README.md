# minmux landing page

Marketing site for [minmux](https://github.com/vcmf/minmux), a minimal terminal for agentic
coding. Built with Next.js (App Router) and exported as a static site.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # static site written to out/
```

`next.config.mjs` sets `output: "export"`, so the build is a fully static site in `out/` that
you can host anywhere: GitHub Pages, Vercel, Netlify, Cloudflare Pages, S3, and so on.

Other scripts: `npm run lint`, `npm run format` (Prettier), `npm run format:check`.

## Structure

```
app/
  layout.tsx        metadata (title, description, Open Graph) + globals import
  page.tsx          composes the section components in order
  globals.css       reset, design tokens (.dc-root), base styles
  _fonts.css        bundled @font-face rules (generated; not hand-edited)
components/
  effects.tsx       client behaviour: canvas background, scroll reveal, hover
  sections/         one component per page section
    background-fx.tsx  animated phosphor cell-field + gradients
    nav.tsx
    hero.tsx
    hero-screenshot.tsx
    problem.tsx
    features.tsx
    agents-board.tsx
    why.tsx
    themes.tsx
    install.tsx
    faq.tsx
    final-cta.tsx
    footer.tsx
public/
  fonts/            Geist Mono, JetBrains Mono, Phosphor icons (woff2/woff/ttf)
  media/            screenshots (from the app README), logo, icon
```

Each section is a plain component. Styling is inline (the design's original approach) and reads
from CSS-variable tokens defined on `.dc-root` in `globals.css`, so re-theming happens in one
place. Icons are the [Phosphor](https://phosphoricons.com) font (`<i class="ph ...">`).

### Interactivity (`components/effects.tsx`)

- **Background** — a canvas of monospace cells that ignite and decay (the phosphor field).
- **Scroll reveal** — elements marked `data-reveal` fade in via `IntersectionObserver`.
- **Hover** — elements with a `data-hover="css;decls"` attribute apply those declarations on
  pointer enter and revert on leave. The FAQ uses native `<details>`, so it needs no JS.

## Screenshots

The hero and feature images live in `public/media/` and are referenced by plain `<img>` tags in
the section components. To swap one, drop a new file in `public/media/` and update the matching
`src`. Current images: `screenshot.jpg` (hero), `feat-notifications.png`, `feat-changes.jpg`,
`feat-files.jpg`, `feat-sessions.jpg`.

## Notes

`app/_fonts.css` and `public/fonts/*` were extracted from the original design bundle and are not
meant to be hand-edited. Everything else is normal, editable source.
