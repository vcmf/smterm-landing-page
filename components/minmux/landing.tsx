"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  CHANGES_TURN,
  CHAPTERS,
  GITHUB,
  NOTIFY_TURN,
  STATUS_LABEL,
  THEME_TURN,
  TURNS,
  agentsAt,
  chapterStatus,
  countsAt,
  tabsAt,
} from "./data"
import { Changes, Turns } from "./turns"
import {
  IconBell,
  IconMoon,
  IconSearch,
  IconSidebar,
  IconStar,
  IconSun,
  IconTerminal,
} from "./icons"

/** Stage mode (sticky window, scroll = turns). Must match the media query in minmux.css. */
const STAGE_MQ = "(min-width: 960px) and (min-height: 600px)"
const clamp = (n: number) => Math.max(0, Math.min(TURNS - 1, n))
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

type Appearance = "light" | "dark"

/** The whole page: a minmux window whose turns are driven by scroll position. */
export function Landing() {
  const [turn, setTurn] = useState(0)
  const [sidebar, setSidebar] = useState(true)
  const [palette, setPalette] = useState(false)
  const [appearance, setAppearance] = useState<Appearance | null>(null)
  const stage = useRef(true)

  const goTo = useCallback((i: number, instant = false) => {
    const t = clamp(i)
    const behavior: ScrollBehavior = instant || reducedMotion() ? "auto" : "smooth"
    if (stage.current) window.scrollTo({ top: t * window.innerHeight, behavior })
    else document.getElementById(CHAPTERS[t].id)?.scrollIntoView({ behavior })
  }, [])

  // scroll position → turn (stage mode only), rAF-throttled
  useEffect(() => {
    const mq = window.matchMedia(STAGE_MQ)
    let raf = 0
    const read = () => {
      raf = 0
      stage.current = mq.matches
      if (mq.matches) setTurn(clamp(Math.round(window.scrollY / window.innerHeight)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read)
    }
    read()
    const i = CHAPTERS.findIndex((c) => `#${c.id}` === window.location.hash)
    if (i > 0) goTo(i, true)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    mq.addEventListener("change", onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      mq.removeEventListener("change", onScroll)
    }
  }, [goTo])

  // the page itself re-themes on the themes turn (CSS scopes this to stage mode)
  useEffect(() => {
    const root = document.documentElement
    if (turn === THEME_TURN) root.dataset.turnTheme = "tokyo"
    else delete root.dataset.turnTheme
  }, [turn])

  // light/dark override, remembered per browser; null = follow the OS
  useEffect(() => {
    try {
      const saved = localStorage.getItem("mm-appearance")
      if (saved === "light" || saved === "dark") setAppearance(saved)
    } catch {}
  }, [])
  useEffect(() => {
    if (appearance) document.documentElement.dataset.appearance = appearance
  }, [appearance])
  const toggleAppearance = () => {
    const cur =
      appearance ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    const next: Appearance = cur === "dark" ? "light" : "dark"
    setAppearance(next)
    try {
      localStorage.setItem("mm-appearance", next)
    } catch {}
  }

  // ⌘K / Ctrl+K opens the section palette
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setPalette((p) => !p)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const agents = useMemo(() => agentsAt(turn), [turn])
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
              <IconSidebar />
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
                  <span>{t.name}</span>
                  {t.count && <span className="c-faint mm-small">{t.count}</span>}
                </div>
              ))}
            </div>
            <span className="mm-grow" />
            <span className="mm-bell mm-only-stage" aria-hidden="true">
              <IconBell />
              {turn === NOTIFY_TURN && <span className="mm-bell-n a-pop">1</span>}
            </span>
            <button
              type="button"
              className="mm-search mm-only-stage"
              onClick={() => setPalette(true)}
            >
              <IconSearch />
              <span className="mm-grow">Jump to a section</span>
              <span className="mm-kbd">⌘K</span>
            </button>
            <button
              type="button"
              className="mm-icon-btn"
              aria-label="Toggle light and dark"
              onClick={toggleAppearance}
            >
              <span className="mm-when-light">
                <IconMoon />
              </span>
              <span className="mm-when-dark">
                <IconSun />
              </span>
            </button>
            <span className="mm-vr mm-only-stage" />
            <a href={`${GITHUB}/tree/main/docs`} className="mm-link mm-only-stage">
              Docs
            </a>
            <a href={GITHUB} className="mm-btn mm-btn-solid mm-btn-sm">
              <IconStar />
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
                <span className="c-faint mm-small">{label}</span>
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
                      <IconTerminal />
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
              <Turns turn={turn} onNext={() => goTo(turn + 1)} />
            </main>

            {/* ── right panel: Agents, or Changes on the changes turn ── */}
            {turn === CHANGES_TURN ? (
              <aside key="changes" className="mm-right mm-right-wide a-panel" aria-hidden="true">
                <div className="mm-side-head">
                  <span className="mm-label">CHANGES</span>
                  <span className="c-faint mm-small">~/api · main ↑2</span>
                </div>
                <Changes />
              </aside>
            ) : (
              <aside key="agents" className="mm-right" aria-hidden="true">
                <div className="mm-side-head">
                  <span className="mm-label">AGENTS</span>
                  <span className="c-faint mm-small">3 sessions · {counts.running} working</span>
                </div>
                <div className="mm-agents">
                  {agents.map((a) => (
                    <div key={a.group} className="mm-agent">
                      <span className="c-faint mm-small">✻ {a.group}</span>
                      <div className="mm-agent-row">
                        <span className="mm-dot" data-s={a.status} />
                        <div className="mm-agent-body">
                          <div className="mm-between">
                            <b>session</b>
                            <span className="mm-st" data-s={a.status}>
                              {STATUS_LABEL[a.status]}
                            </span>
                          </div>
                          <div className="mm-between c-faint mm-small">
                            <span>{a.cwd}</span>
                            <span>{a.tokens}</span>
                          </div>
                          {a.kids.map((k) => (
                            <div key={k.kind} className="mm-kid a-in">
                              <span>
                                <b>agent · {k.kind}</b>
                                <span className="c-faint mm-small">{k.what}</span>
                              </span>
                              <span className="mm-st" data-s="running">
                                working
                              </span>
                            </div>
                          ))}
                          <div className="mm-between c-dim mm-small mm-agent-last">
                            <span className="mm-ellipsis">{a.last}</span>
                            <span className="c-faint">
                              {a.status === "running" || a.status === "waiting" ? "…" : "done"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
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
          <IconSearch />
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
              <span className="c-faint">{String(c.i).padStart(2, "0")}</span>
              <b className="mm-grow">{c.id}</b>
              <span className="c-dim mm-small">{c.sub}</span>
            </button>
          ))}
          {hits.length === 0 && <div className="mm-palette-empty">No section matches.</div>}
        </div>
      </div>
    </div>
  )
}
