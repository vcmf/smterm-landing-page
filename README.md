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

The page is a scripted minmux window. On desktop it is a sticky 100vh stage: each scroll step
(snap) plays the next "turn", and the sessions sidebar is the table of contents. On phones
(or short windows) the turns stack as plain sections with a tmux-style strip at the bottom.

```
app/
  layout.tsx          metadata (title, description, Open Graph)
  page.tsx            renders <Landing />
  globals.css         tokens (the app's Minimal Light/Dark + Tokyo Night), layout, motion
  _fonts.css          bundled @font-face rules (generated; not hand-edited)
components/minmux/
  data.ts             chapters (= sidebar sessions) and per-turn demo state
  turns.tsx           the nine turns (narration + scripted panes), SVG wordmark, Changes panel
  landing.tsx         client shell: scroll → turn, ⌘K palette, light/dark toggle, panels
  copy-button.tsx     copy-to-clipboard for install commands
  icons.tsx           inline stroke icons
public/
  fonts/              Geist Mono, JetBrains Mono (woff2/woff/ttf)
  media/              icon, logo, screenshots (Open Graph image)
```

To change a turn's copy or script, edit `turns.tsx`; to change what the sidebar, tabs and
agents panel show at each turn, edit `data.ts`. All headline and paragraph copy is real HTML
(h1/h2/p) and every turn is in the static export, so it stays indexable. Motion is CSS only
and switches off under `prefers-reduced-motion`.

## Notes

`app/_fonts.css` and `public/fonts/*` were extracted from the original design bundle and are not
meant to be hand-edited. Everything else is normal, editable source.
