"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import {
  AGENTS_TURN,
  CHANGES_TURN,
  CHAPTERS,
  FILES_TURN,
  GITHUB,
  NOTIFY_TURN,
  STATUS_LABEL,
  THEME_TURN,
  TURNS,
  type Appearance,
  agentsAt,
  chapterStatus,
  countsAt,
  tabsAt,
} from "./data"
import { Changes, FilePreview, FilesPanel, Turns } from "./turns"
import { ClaudeIcon, Ph, type IconName } from "./icons"

/** The app's right-panel toggles; each jumps to the turn that shows its panel. */
const PANEL_BUTTONS: { turn: number; icon: IconName; label: string }[] = [
  { turn: FILES_TURN, icon: "folder-open", label: "Files" },
  { turn: CHANGES_TURN, icon: "git-diff", label: "Changes" },
  { turn: AGENTS_TURN, icon: "tree-structure", label: "Agents" },
]

/** Stage mode (sticky window, scroll = turns). Must match the media query in globals.css. */
const STAGE_MQ = "(min-width: 960px) and (min-height: 600px)"
/** Wide enough to keep the Agents panel open on every turn; narrower, only on its own turn. */
const WIDE_MQ = "(min-width: 1200px)"
/** How long the files turn shows the tree before the preview opens. */
const PREVIEW_DELAY_MS = 1100

/** A media query as state (true on the server: the static export renders the desktop stage). */
function useMedia(query: string): boolean {
  const [matches, setMatches] = useState(true)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const sync = () => setMatches(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [query])
  return matches
}
const clamp = (n: number) => Math.max(0, Math.min(TURNS - 1, n))
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

/** The whole page: a minmux window whose turns are driven by scroll position. */
export function Landing() {
  const [turn, setTurn] = useState(0)
  const [sidebar, setSidebar] = useState(true)
  const [palette, setPalette] = useState(false)
  const [preview, setPreview] = useState(false)
  const [appearance, setAppearance] = useState<Appearance>("light")
  // false until the saved appearance is read, so the first effect can't overwrite the
  // pre-paint script's palette with the default (a light flash for dark visitors)
  const [appearanceLoaded, setAppearanceLoaded] = useState(false)
  const stageMode = useMedia(STAGE_MQ)
  const wide = useMedia(WIDE_MQ)

  const goTo = useCallback((i: number, instant = false) => {
    const t = clamp(i)
    const behavior: ScrollBehavior = instant || reducedMotion() ? "auto" : "smooth"
    if (window.matchMedia(STAGE_MQ).matches)
      window.scrollTo({ top: t * window.innerHeight, behavior })
    else document.getElementById(CHAPTERS[t].id)?.scrollIntoView({ behavior })
  }, [])

  // scroll position → turn (stage mode only), rAF-throttled
  useEffect(() => {
    const mq = window.matchMedia(STAGE_MQ)
    let raf = 0
    const read = () => {
      raf = 0
      if (mq.matches) setTurn(clamp(Math.round(window.scrollY / window.innerHeight)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read)
    }
    read()
    // deep links (#files) and in-page anchors (the hero's #install) go to their turn
    const toHash = (instant: boolean) => {
      const i = CHAPTERS.findIndex((c) => `#${c.id}` === window.location.hash)
      if (i >= 0) goTo(i, instant)
    }
    const onHash = () => toHash(false)
    toHash(true)
    window.addEventListener("hashchange", onHash)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    mq.addEventListener("change", onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("hashchange", onHash)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      mq.removeEventListener("change", onScroll)
    }
  }, [goTo])

  // one palette for the page: theme family × appearance, like the app's activeTheme().
  // The themes turn switches the whole stage to Tokyo Night (Day in light, Night in dark).
  useEffect(() => {
    if (!appearanceLoaded) return
    const family = stageMode && turn === THEME_TURN ? "tokyo" : "minimal"
    document.documentElement.dataset.palette = `${family}-${appearance}`
  }, [turn, appearance, appearanceLoaded, stageMode])

  // light by default; a dark choice is remembered per browser
  useEffect(() => {
    try {
      const saved = localStorage.getItem("mm-appearance")
      if (saved === "dark") setAppearance("dark")
    } catch {}
    setAppearanceLoaded(true)
  }, [])
  const toggleAppearance = () => {
    const next: Appearance = appearance === "dark" ? "light" : "dark"
    setAppearance(next)
    try {
      localStorage.setItem("mm-appearance", next)
    } catch {}
  }

  // the file preview opens (once the tree has shown) each time the files turn is entered;
  // it only exists while visible, so nothing invisible can swallow clicks. Esc / outside / ✕ close it.
  useEffect(() => {
    if (turn !== FILES_TURN) {
      setPreview(false)
      return
    }
    const t = setTimeout(() => setPreview(true), PREVIEW_DELAY_MS)
    return () => clearTimeout(t)
  }, [turn])

  // ⌘K / Ctrl+K opens the section palette; Esc closes the file preview
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !(e.target as Element | null)?.closest?.(".mm-palette")) {
        setPreview(false)
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setPalette((p) => !p)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const agents = useMemo(() => agentsAt(turn), [turn])
  // Changes / Files on their own turns; otherwise Agents, unless the window is too narrow
  const rightPanel =
    turn === CHANGES_TURN || turn === FILES_TURN
      ? turn
      : wide || turn === AGENTS_TURN
        ? AGENTS_TURN
        : null
  const tabs = useMemo(() => tabsAt(turn), [turn])
  const counts = countsAt(turn)
  const label = `${String(turn).padStart(2, "0")} / ${String(TURNS - 1).padStart(2, "0")}`

  return (
    <div className="mm-scroller" style={{ ["--turns" as string]: TURNS }}>
      <div className="mm-stage">
        <div className="mm-window" data-sidebar={sidebar}>
          {/* ── top bar ── */}
          <header className="mm-top">
            <button
              type="button"
              className="mm-icon-btn mm-filled mm-only-stage"
              aria-label="Toggle sidebar"
              aria-pressed={sidebar}
              onClick={() => setSidebar((s) => !s)}
            >
              <Ph name="sidebar-simple" size={16} />
            </button>
            <a href="#welcome" className="mm-brand" onClick={(e) => (e.preventDefault(), goTo(0))}>
              <img src="/media/icon.png" alt="" width={20} height={20} />
              <span>minmux</span>
            </a>
            <span className="mm-vr mm-only-stage" />
            <div className="mm-tabs mm-only-stage" aria-hidden="true">
              {tabs.map((t) => (
                <div key={t.name} className="mm-tab" data-active={t.active}>
                  <span className="mm-dot" data-s={t.status} />
                  <span>
                    {t.claude && <span className="c-subtle">✻ </span>}
                    {t.name}
                  </span>
                  {t.count && <span className="c-subtle mm-small">{t.count}</span>}
                </div>
              ))}
            </div>
            <span className="mm-grow" />
            <span className="mm-bell mm-only-stage" aria-hidden="true">
              <Ph name="bell" fill size={17} />
              {turn === NOTIFY_TURN && <span className="mm-bell-n a-pop">1</span>}
            </span>
            <button
              type="button"
              className="mm-search mm-only-stage"
              onClick={() => setPalette(true)}
            >
              <Ph name="magnifying-glass" size={14} />
              <span className="mm-grow">Jump to a section</span>
              <span className="mm-kbd">⌘K</span>
            </button>
            <span className="mm-vr mm-only-stage" />
            {PANEL_BUTTONS.map((b) => (
              <button
                key={b.turn}
                type="button"
                className="mm-icon-btn mm-panel-btn mm-only-stage"
                aria-label={b.label}
                aria-pressed={rightPanel === b.turn}
                onClick={() => goTo(b.turn)}
              >
                <Ph name={b.icon} size={17} />
              </button>
            ))}
            <button
              type="button"
              className="mm-icon-btn"
              aria-label="Toggle light and dark"
              onClick={toggleAppearance}
            >
              <Ph name={appearance === "dark" ? "sun" : "moon"} size={17} />
            </button>
            <span className="mm-vr mm-only-stage" />
            <a href={`${GITHUB}/tree/main/docs`} className="mm-link mm-only-stage">
              Docs
            </a>
            <a href={GITHUB} className="mm-btn mm-btn-solid mm-btn-sm">
              <Ph name="star" fill size={13} />
              <span>
                Star<span className="mm-only-stage"> on GitHub</span>
              </span>
            </a>
          </header>

          <div className="mm-body">
            {/* ── sidebar: sessions = sections ── */}
            <aside className="mm-side" aria-label="Sections">
              <div className="mm-side-head">
                <span className="mm-label">SESSIONS</span>
                <span className="c-subtle mm-small">{label}</span>
              </div>
              <nav className="mm-side-list">
                {CHAPTERS.map((c, i) => {
                  const s = chapterStatus(i, turn)
                  return (
                    <a
                      key={c.id}
                      href={`#${c.id}`}
                      className="mm-session"
                      data-s={s}
                      aria-current={i === turn ? "step" : undefined}
                      onClick={(e) => {
                        e.preventDefault()
                        goTo(i)
                      }}
                    >
                      {c.claude ? (
                        <ClaudeIcon size={15} color={`var(--cc-${c.claude})`} />
                      ) : (
                        <Ph name="terminal-window" fill size={16} />
                      )}
                      <span className="mm-session-txt">
                        <span className="mm-session-name">{c.id}</span>
                        <span className="mm-session-sub">{c.sub}</span>
                      </span>
                      <span className="mm-session-st">
                        {STATUS_LABEL[s]}
                        <span className="mm-dot" data-s={s} />
                      </span>
                    </a>
                  )
                })}
              </nav>
              <div className="mm-legend" aria-hidden="true">
                <span>
                  <span className="mm-dot" data-s="running" />
                  running
                </span>
                <span>
                  <span className="mm-dot" data-s="waiting" />
                  needs input
                </span>
                <span>
                  <span className="mm-dot" data-s="idle" />
                  idle
                </span>
              </div>
            </aside>

            {/* ── panes ── */}
            <main className="mm-main">
              <Turns turn={turn} onNext={() => goTo(turn + 1)} appearance={appearance} />
            </main>

            {/* ── right panel: Changes / Files on their turns, Agents otherwise ── */}
            {rightPanel === CHANGES_TURN && (
              <aside key="changes" className="mm-right mm-right-wide a-panel" aria-hidden="true">
                <div className="mm-side-head">
                  <span className="mm-label">CHANGES</span>
                  <span className="c-subtle mm-small">~/api · main ↑2</span>
                </div>
                <Changes />
              </aside>
            )}
            {rightPanel === FILES_TURN && (
              <aside key="files" className="mm-right mm-right-files a-panel-files">
                <div className="mm-side-head">
                  <span className="mm-label">FILES</span>
                  <Ph name="x" size={14} className="c-muted" />
                </div>
                <FilesPanel onOpen={() => setPreview(true)} />
              </aside>
            )}
            {rightPanel === AGENTS_TURN && (
              <aside key="agents" className="mm-right" aria-hidden="true">
                <div className="mm-side-head">
                  <span className="mm-label">
                    AGENTS <span className="c-subtle">3 sessions · {counts.running} working</span>
                  </span>
                </div>
                <div className="mm-agents">
                  {agents.map((a) => (
                    <div key={a.group} className="mm-agent">
                      <span className="mm-agent-group">
                        <Ph name="tree-structure" size={13} />✻ {a.group}
                      </span>
                      <div className="mm-tree-row mm-tree-parent">
                        <span className="mm-dot" data-s={a.status} />
                        <div className="mm-tree-labels">
                          <b>session</b>
                          <span className="c-subtle mm-small">{a.cwd}</span>
                        </div>
                        <div className="mm-tree-right">
                          <span className="mm-st" data-s={a.status}>
                            {STATUS_LABEL[a.status]}
                          </span>
                          <span className="c-subtle mm-small">{a.tokens}</span>
                        </div>
                      </div>
                      {a.kids.map((k) => (
                        <div key={k.kind} className="mm-tree-row mm-tree-child through a-in">
                          <span className="mm-dot" data-s="running" />
                          <div className="mm-tree-labels">
                            <b>
                              agent <span className="c-subtle">·</span> {k.kind}
                            </b>
                            <span className="c-subtle mm-small">{k.what}</span>
                          </div>
                          <div className="mm-tree-right">
                            <span className="mm-st" data-s="running">
                              working
                            </span>
                          </div>
                        </div>
                      ))}
                      <div className="mm-tree-row mm-tree-child">
                        <span className="mm-dot mm-dot-msg" />
                        <div className="mm-tree-labels">
                          <span className="c-muted mm-ellipsis">{a.last}</span>
                        </div>
                        <div className="mm-tree-right">
                          <span className="c-muted">
                            {a.status === "running" || a.status === "waiting" ? "…" : "done"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            )}

            {/* the file preview opens over the whole window, like the app's dialog */}
            {turn === FILES_TURN && preview && (
              <div className="mm-preview-scrim a-blur" onClick={() => setPreview(false)}>
                <div
                  className="mm-preview-wrap a-pop"
                  role="dialog"
                  aria-label="limits.ts preview"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FilePreview onClose={() => setPreview(false)} />
                </div>
              </div>
            )}
          </div>

          {/* ── status bar ── */}
          <footer className="mm-status">
            <span className="mm-only-stage">macOS · Linux · Windows</span>
            <span className="mm-only-stage">⎇ main</span>
            <span className="mm-grow" />
            <span className="mm-only-stage mm-count">
              <span className="mm-dot" data-s="running" />
              {counts.running} running
            </span>
            <span className="mm-only-stage mm-count">
              <span className="mm-dot" data-s="waiting" />
              {counts.waiting} waiting
            </span>
            <span className="mm-vr mm-only-stage" />
            <div className="mm-scrub mm-only-stage">
              <button type="button" aria-label="Previous section" onClick={() => goTo(turn - 1)}>
                ◀
              </button>
              <span>turn {label}</span>
              <button type="button" aria-label="Next section" onClick={() => goTo(turn + 1)}>
                ▶
              </button>
            </div>
            <span className="mm-vr mm-only-stage" />
            <span>UTF-8 · MIT</span>
          </footer>
        </div>
      </div>

      {/* scroll snap targets, one viewport per turn (stage mode) */}
      <div className="mm-steps" aria-hidden="true">
        {CHAPTERS.map((c) => (
          <div key={c.id} className="mm-step" />
        ))}
      </div>

      {/* phones: a tmux-style section strip */}
      <nav className="mm-strip" aria-label="Sections">
        {CHAPTERS.map((c, i) => (
          <a key={c.id} href={`#${c.id}`}>
            {i}:{c.id}
          </a>
        ))}
      </nav>

      {palette && (
        <Palette
          onClose={() => setPalette(false)}
          onPick={(i) => {
            setPalette(false)
            goTo(i)
          }}
        />
      )}
    </div>
  )
}

/** ⌘K palette: filter the sections, Enter jumps. */
function Palette({ onClose, onPick }: { onClose: () => void; onPick: (i: number) => void }) {
  const [q, setQ] = useState("")
  const [sel, setSel] = useState(0)
  const hits = CHAPTERS.map((c, i) => ({ ...c, i })).filter(
    (c) => c.id.includes(q.toLowerCase()) || c.sub.toLowerCase().includes(q.toLowerCase()),
  )
  const cur = Math.min(sel, Math.max(0, hits.length - 1))
  return (
    <div className="mm-palette-scrim" onClick={onClose}>
      <div
        className="mm-palette a-pop"
        role="dialog"
        aria-modal="true"
        aria-label="Jump to a section"
        onClick={(e) => e.stopPropagation()}
      >
        <label className="mm-palette-q">
          <Ph name="magnifying-glass" size={15} />
          <input
            autoFocus
            value={q}
            placeholder="Jump to a section…"
            aria-label="Section"
            onChange={(e) => {
              setQ(e.target.value)
              setSel(0)
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") onClose()
              else if (e.key === "ArrowDown") (e.preventDefault(), setSel(cur + 1))
              else if (e.key === "ArrowUp") (e.preventDefault(), setSel(Math.max(0, cur - 1)))
              else if (e.key === "Enter" && hits[cur]) onPick(hits[cur].i)
            }}
          />
          <span className="mm-kbd">esc</span>
        </label>
        <div className="mm-palette-list">
          {hits.map((c, k) => (
            <button
              type="button"
              key={c.id}
              className="mm-palette-item"
              data-sel={k === cur}
              onMouseEnter={() => setSel(k)}
              onClick={() => onPick(c.i)}
            >
              <span className="c-subtle">{String(c.i).padStart(2, "0")}</span>
              <b className="mm-grow">{c.id}</b>
              <span className="c-muted mm-small">{c.sub}</span>
            </button>
          ))}
          {hits.length === 0 && <div className="mm-palette-empty">No section matches.</div>}
        </div>
      </div>
    </div>
  )
}
