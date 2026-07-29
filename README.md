# smterm landing page

Marketing site for [smterm](https://github.com/vcmf/smterm), built with Next.js (App Router).

## Develop

```
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```
npm run build
```

`next.config.mjs` sets `output: "export"`, so `npm run build` writes a fully static site to
`out/` that you can host anywhere (GitHub Pages, Vercel, Netlify, S3, ...).

## How it is put together

- `app/page.tsx` reads `app/content.html` (the design markup, inline-styled) and renders it,
  with `components/effects.tsx` layering on the client-side behaviour.
- `app/content.html` is the landing markup. The screenshots are plain `<img>` tags pointing at
  `public/media/*` (copied from the app's README screenshots).
- `app/_fonts.css` holds the bundled `@font-face` rules (Geist Mono, JetBrains Mono, Phosphor
  icons) that resolve to `public/fonts/*`.
- `components/effects.tsx` runs the phosphor cell-field canvas background, the scroll reveal,
  and the `style-hover` behaviour. The FAQ is native `<details>`, no JS needed.

To evolve it, split `content.html` into real React sections in `app/` over time. The copy,
tokens (CSS variables on the root element), and layout are all already here.

## Replacing screenshots

Drop a new image in `public/media/` and update the matching `<img src="/media/...">` in
`app/content.html`. Current slots: `screenshot.jpg` (hero), `feat-notifications.png`,
`feat-changes.jpg`, `feat-files.jpg`, `feat-sessions.jpg`.
