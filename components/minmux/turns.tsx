import type { CSSProperties, ReactNode } from "react"
import { CHAPTERS, INSTALL_PS, INSTALL_SH, GITHUB, THEME_TURN, type Status } from "./data"
import { CopyButton } from "./copy-button"
import { IconGlobe } from "./icons"

const d = (s: number): CSSProperties => ({ animationDelay: `${s}s` })

/** One chapter of the page. On desktop only the active one shows; on phones they stack. */
function Turn({ i, active, children }: { i: number; active: boolean; children: ReactNode }) {
  return (
    <section
      id={CHAPTERS[i].id}
      className="mm-turn"
      data-active={active}
      data-theme-local={i === THEME_TURN ? "tokyo" : undefined}
      aria-labelledby={`${CHAPTERS[i].id}-h`}
    >
      {children}
    </section>
  )
}

/** The narration: a shell-comment headline + one paragraph. Real h2/p for SEO. */
function Band({ i, title, children }: { i: number; title: string; children: ReactNode }) {
  return (
    <header className="mm-band a-in">
      <span className="mm-band-n">
        {String(i).padStart(2, "0")} · {CHAPTERS[i].id}
      </span>
      <h2 id={`${CHAPTERS[i].id}-h`}>
        <span className="c-faint"># </span>
        {title}
      </h2>
      <p>{children}</p>
    </header>
  )
}

function PaneHead({
  name,
  status,
  right,
  shell = "ZSH",
}: {
  name: string
  status: Status
  right?: ReactNode
  shell?: string | null
}) {
  return (
    <div className="mm-pane-head">
      <span className="mm-dot" data-s={status} />
      <span className="mm-pane-name">{name}</span>
      {shell && <span className="mm-badge">{shell}</span>}
      <span className="mm-grow" />
      {right}
    </div>
  )
}

const Prompt = ({ cwd, cmd }: { cwd: string; cmd: string }) => (
  <>
    <span className="c-accent">{cwd}</span> <span className="c-blue">main</span> ❯ {cmd}
  </>
)
const Tool = ({ name, arg }: { name: string; arg: string }) => (
  <>
    <span className="c-accent">●</span> {name} <span className="c-dim">{arg}</span>
  </>
)
const Working = ({ text, time }: { text: string; time?: string }) => (
  <>
    <span className="a-spin">✻</span> {text}
    {time && <span className="c-faint"> ({time})</span>}
  </>
)

const LOGO_MIN = [
  "███╗   ███╗██╗███╗   ██╗",
  "████╗ ████║██║████╗  ██║",
  "██╔████╔██║██║██╔██╗ ██║",
  "██║╚██╔╝██║██║██║╚██╗██║",
  "██║ ╚═╝ ██║██║██║ ╚████║",
  "╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝",
]
const LOGO_MUX = [
  "███╗   ███╗██╗   ██╗██╗  ██╗",
  "████╗ ████║██║   ██║╚██╗██╔╝",
  "██╔████╔██║██║   ██║ ╚███╔╝ ",
  "██║╚██╔╝██║██║   ██║ ██╔██╗ ",
  "██║ ╚═╝ ██║╚██████╔╝██╔╝ ██╗",
  "╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝",
]

/** Runs of full blocks per row, as [x, width]; the box-drawing shadow is redrawn as an offset copy. */
function blockRuns(row: string): [number, number][] {
  const runs: [number, number][] = []
  ;[...row].forEach((ch, x) => {
    if (ch !== "█") return
    const last = runs[runs.length - 1]
    if (last && last[0] + last[1] === x) last[1]++
    else runs.push([x, 1])
  })
  return runs
}
const SPLIT = LOGO_MIN[0].length
const LOGO = LOGO_MIN.map((row, r) => blockRuns(row + LOGO_MUX[r]))
const CELL_H = 2 // a terminal cell is ~2x taller than wide

/** The ANSI-shadow wordmark, drawn as SVG so it never depends on font glyph coverage. */
export function Wordmark() {
  const cols = SPLIT + LOGO_MUX[0].length
  return (
    <svg
      className="mm-logo"
      viewBox={`0 0 ${cols + 0.5} ${LOGO.length * CELL_H + 0.6}`}
      aria-hidden="true"
    >
      {LOGO.map((runs, r) => (
        <g key={r} className="mm-logo-row" style={d(0.35 + r * 0.06)}>
          {runs.map(([x, w]) => (
            <rect
              key={`s${x}`}
              className="mm-logo-shadow"
              x={x + 0.4}
              y={r * CELL_H + 0.6}
              width={w}
              height={CELL_H}
            />
          ))}
          {runs.map(([x, w]) => (
            <rect
              key={x}
              className={x >= SPLIT ? "mm-logo-mux" : "mm-logo-min"}
              x={x}
              y={r * CELL_H}
              width={w}
              height={CELL_H}
            />
          ))}
        </g>
      ))}
    </svg>
  )
}

export function Turns({ turn, onNext }: { turn: number; onNext: () => void }) {
  return (
    <>
      {/* 0 · welcome */}
      <Turn i={0} active={turn === 0}>
        <PaneHead
          name="welcome"
          status="running"
          right={<span className="c-faint mm-small">~/minmux · main</span>}
        />
        <div className="mm-hero">
          <div className="mm-term-line a-type" aria-hidden="true">
            <Prompt cwd="~/minmux" cmd="minmux --hello" />
          </div>
          <Wordmark />
          <div className="mm-hero-copy a-in" style={d(0.8)}>
            <span className="mm-eyebrow"># a terminal for agentic coding</span>
            <h1 id="welcome-h">
              You run the agents. You still read the code.
              <span className="mm-caret a-caret" aria-hidden="true" />
            </h1>
            <p>
              A fast, cross-platform terminal with tabs, split panes and real shells, for people who
              run coding agents all day. It stays out of your way like any terminal, then adds the
              panels that show what your agents actually did.
            </p>
          </div>
          <div className="mm-hero-install a-in" style={d(1.05)}>
            <div className="mm-cmd">
              <span className="c-accent">$</span>
              <code>{INSTALL_SH}</code>
              <CopyButton text={INSTALL_SH} />
            </div>
            <div className="mm-platforms">
              <span>macOS</span>
              <span className="c-faint">·</span>
              <span>Linux</span>
              <span className="c-faint">·</span>
              <span>Windows and WSL</span>
              <span className="c-faint">|</span>
              <span>MIT, open source</span>
              <span className="c-faint">|</span>
              <a href="#install" className="c-accent">
                PowerShell one-liner
              </a>
            </div>
          </div>
          <span className="mm-grow" />
          <button type="button" className="mm-cue a-in" style={d(1.4)} onClick={onNext}>
            <span className="mm-key">↓</span>
            <span>scroll to watch it run, or pick a session on the left</span>
          </button>
        </div>
      </Turn>

      {/* 1 · run the agents */}
      <Turn i={1} active={turn === 1}>
        <Band i={1} title="Launch as many agents as you like.">
          Each one gets a real shell, in its own tab or pane. Your shell, your prompt, your
          directory: minmux is a normal terminal first.
        </Band>
        <div className="mm-panes">
          <div className="mm-pane">
            <PaneHead name="✻ api" status="running" />
            <div className="mm-term" aria-hidden="true">
              <div className="a-type">
                <Prompt cwd="~/api" cmd="claude" />
              </div>
              <div className="mm-cc a-in" style={d(0.9)}>
                <b>✻ Claude Code</b>
                <span className="c-dim">~/api</span>
              </div>
              <div className="a-in mm-ask" style={d(1.3)}>
                <span className="c-faint">&gt;</span> add rate limiting to the auth routes
              </div>
              <div className="a-in" style={d(1.7)}>
                <Tool name="Read" arg="src/auth/routes.ts" />
              </div>
              <div className="a-in mm-out" style={d(1.8)}>
                ⎿ 142 lines
              </div>
              <div className="a-in" style={d(2.2)}>
                <Tool name="Write" arg="src/auth/limits.ts" />
              </div>
              <div className="a-in mm-out" style={d(2.3)}>
                ⎿ <span className="c-accent">+38</span> lines
              </div>
              <div className="a-in c-amber" style={d(2.7)}>
                <Working
                  text="Wiring the limiter into three routes…"
                  time="14s · esc to interrupt"
                />
              </div>
            </div>
          </div>
        </div>
      </Turn>

      {/* 2 · split panes */}
      <Turn i={2} active={turn === 2}>
        <Band i={2} title="Split, and put another one to work.">
          Resizable splits and tabs, drag a pane anywhere. A split opens in the same directory, so
          the next agent starts where you are.
        </Band>
        <div className="mm-panes">
          <div className="mm-pane">
            <PaneHead name="✻ api" status="running" />
            <div className="mm-term" aria-hidden="true">
              <div className="c-dim">
                <span className="c-faint">&gt;</span> add rate limiting to the auth routes
              </div>
              <div>
                <Tool name="Update" arg="src/auth/routes.ts" />
              </div>
              <div className="mm-out">
                ⎿ <span className="c-accent">+6</span> <span className="c-red">−2</span>
              </div>
              <div>
                <Tool name="Bash" arg="npm test -- auth" />
              </div>
              <div className="c-amber">
                <Working text="Running the auth suite…" time="31s" />
              </div>
            </div>
          </div>
          <div className="mm-pane a-grow">
            <PaneHead name="✻ web" status="running" />
            <div className="mm-term" aria-hidden="true">
              <div className="a-type" style={d(0.45)}>
                <Prompt cwd="~/web" cmd="claude" />
              </div>
              <div className="a-in" style={d(1.2)}>
                <span className="c-faint">&gt;</span> write e2e tests for the login form
              </div>
              <div className="a-in" style={d(1.6)}>
                <Tool name="Read" arg="app/login/page.tsx" />
              </div>
              <div className="a-in" style={d(2)}>
                <Tool name="Write" arg="e2e/login.spec.ts" />
              </div>
              <div className="a-in c-amber" style={d(2.4)}>
                <Working text="Writing tests…" time="6s" />
              </div>
            </div>
          </div>
        </div>
      </Turn>

      {/* 3 · notifications */}
      <Turn i={3} active={turn === 3}>
        <Band i={3} title="The pane that needs you, tells you.">
          Working, waiting for input, or done. It shows as a dot on the tab and a line in the
          sidebar, and a background pane that asks a question sends a native notification.
        </Band>
        <div className="mm-panes">
          <div className="mm-pane mm-pane-dim">
            <PaneHead name="✻ api" status="running" />
            <div className="mm-term" aria-hidden="true">
              <div>
                <Tool name="Bash" arg="npm test -- auth" />
              </div>
              <div className="mm-out">⎿ 24 passed</div>
              <div className="c-amber">
                <Working text="Checking the limiter headers…" />
              </div>
            </div>
          </div>
          <div className="mm-pane mm-pane-wait">
            <PaneHead
              name="✻ web"
              status="waiting"
              right={<span className="c-amber mm-small">needs input</span>}
            />
            <div className="mm-term" aria-hidden="true">
              <div>
                <Tool name="Write" arg="e2e/login.spec.ts" />
              </div>
              <div className="mm-permission a-in" style={d(0.3)}>
                <b>Bash command</b>
                <span className="c-dim">npx prisma migrate dev --name add_sessions</span>
                <span className="mm-gap">Do you want to proceed?</span>
                <span className="c-accent">❯ 1. Yes</span>
                <span className="c-dim"> 2. Yes, and don't ask again this session</span>
                <span className="c-dim"> 3. No, and tell Claude what to do differently</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mm-toast a-toast" style={d(0.6)} aria-hidden="true">
          <img src="/media/icon.png" alt="" width={30} height={30} />
          <div>
            <b>web needs input</b>
            <span className="c-dim">
              Claude wants to run a migration. Click to jump to the pane.
            </span>
          </div>
          <span className="c-faint mm-small">now</span>
        </div>
      </Turn>

      {/* 4 · changes (the diff lives in the right panel) */}
      <Turn i={4} active={turn === 4}>
        <Band i={4} title="Read what changed, without leaving the terminal.">
          A git diff for the focused pane's directory: per-file counts and the full unified diff.
          Branch and ahead/behind sit in the status bar.
        </Band>
        <div className="mm-panes">
          <div className="mm-pane">
            <PaneHead
              name="✻ api"
              status="done"
              right={<span className="c-dim mm-small">done</span>}
            />
            <div className="mm-term" aria-hidden="true">
              <div>
                <span className="c-accent">●</span> Added a token-bucket limiter to /login, /refresh
                and /reset.
              </div>
              <div className="mm-out">3 files changed. The auth suite passes (24 tests).</div>
              <div className="mm-out">Limits are read from AUTH_RATE_LIMIT, default 10/min.</div>
            </div>
            <div className="mm-changes-inline">
              <Changes />
            </div>
          </div>
        </div>
      </Turn>

      {/* 5 · agents board */}
      <Turn i={5} active={turn === 5}>
        <Band i={5} title="Every agent and sub-agent, on one board.">
          It reads Claude Code's own hook events, so there is no setup and no global config to edit.
          Click an agent to jump to its pane.
        </Band>
        <div className="mm-panes">
          <div className="mm-pane">
            <PaneHead name="✻ api" status="running" />
            <div className="mm-term" aria-hidden="true">
              <div className="c-dim">
                <span className="c-faint">&gt;</span> find every place we call the old limiter and
                migrate it
              </div>
              <div className="a-in" style={d(0.4)}>
                <Tool name="Task" arg="Explore: find rateLimit( call sites" />
              </div>
              <div className="a-in" style={d(0.7)}>
                <Tool name="Task" arg="Bash: run the full test suite" />
              </div>
              <div className="a-in c-amber" style={d(1)}>
                <Working text="2 agents running…" />
              </div>
            </div>
          </div>
        </div>
      </Turn>

      {/* 6 · ssh */}
      <Turn i={6} active={turn === 6}>
        <Band i={6} title="Your ~/.ssh/config, one keystroke away.">
          Every host in one picker, recent first. Open one in a tab or a split, and splits stay on
          the host. It runs your own ssh, so keys, agents and 2FA prompts work as usual.
        </Band>
        <div className="mm-panes">
          <div className="mm-pane mm-pane-overlay">
            <PaneHead name="zsh" status="idle" shell={null} />
            <div className="mm-term" aria-hidden="true">
              <div>
                <span className="c-accent">~</span> ❯ <span className="mm-block a-caret" />
              </div>
            </div>
            <div className="mm-scrim" />
            <div className="mm-hosts a-pop" style={d(0.2)} aria-hidden="true">
              <div className="mm-hosts-q">
                <IconGlobe />
                <span className="a-type" style={d(0.4)}>
                  Connect to host… prod
                </span>
                <span className="mm-grow" />
                <span className="mm-kbd">esc</span>
              </div>
              <div className="mm-hosts-list">
                <div className="mm-host is-sel">
                  <b>prod-api</b>
                  <span className="c-dim mm-grow">deploy@10.0.4.12</span>
                  <span className="c-accent mm-small">recent</span>
                  <span className="c-faint mm-small">↵ tab · ⌘↵ split</span>
                </div>
                <div className="mm-host">
                  <b>prod-worker</b>
                  <span className="c-dim mm-grow">deploy@10.0.4.19</span>
                  <span className="c-accent mm-small">recent</span>
                </div>
                <div className="mm-host">
                  <b>prod-db-replica</b>
                  <span className="c-dim mm-grow">admin@db-2.internal</span>
                </div>
              </div>
              <div className="mm-hosts-foot">
                3 of 9 hosts · from ~/.ssh/config, watched for changes
              </div>
            </div>
          </div>
        </div>
      </Turn>

      {/* 7 · themes (the whole page switches to Tokyo Night) */}
      <Turn i={7} active={turn === 7}>
        <Band i={7} title="Four families, light and dark. One JSON file.">
          This page just switched to Tokyo Night. Settings live in ~/.config/minmux/settings.json,
          and a watcher re-applies them as you save.
        </Band>
        <div className="mm-themes">
          <div className="mm-theme-grid">
            {THEMES.map((t, i) => (
              <div
                key={t.name}
                className={`mm-theme a-in${i === 1 ? " is-sel" : ""}`}
                style={d(0.1 + i * 0.08)}
              >
                <div className="mm-swatch">
                  <span style={{ background: t.dark }}>
                    <i style={{ background: t.a1 }} />
                    <i style={{ background: t.a2 }} />
                  </span>
                  <span style={{ background: t.light }}>
                    <i style={{ background: t.b1 }} />
                    <i style={{ background: t.b2 }} />
                  </span>
                </div>
                <b>{t.name}</b>
                <span className="c-dim mm-small">{t.pair}</span>
              </div>
            ))}
          </div>
          <pre className="mm-code a-in" style={d(0.5)} aria-hidden="true">
            <span className="c-faint">{"// ~/.config/minmux/settings.json"}</span>
            {"\n{\n  "}
            <span className="c-blue">"theme"</span>: <span className="c-accent">"tokyo-night"</span>
            {",\n  "}
            <span className="c-blue">"appearance"</span>: <span className="c-accent">"system"</span>
            {",\n  "}
            <span className="c-blue">"fontFamily"</span>:{" "}
            <span className="c-accent">"JetBrains Mono"</span>
            {",\n  "}
            <span className="c-blue">"cursorBlink"</span>: <span className="c-magenta">true</span>
            {"\n}"}
          </pre>
        </div>
      </Turn>

      {/* 8 · install */}
      <Turn i={8} active={turn === 8}>
        <Band i={8} title="Install it in one line.">
          macOS, Linux, Windows and WSL. MIT licensed: clone it, read it, fork it, ship your own
          version.
        </Band>
        <div className="mm-install">
          <div className="a-in mm-install-block">
            <span className="c-dim"># macOS and Linux</span>
            <div className="mm-cmd">
              <span className="c-accent">$</span>
              <code>{INSTALL_SH}</code>
              <CopyButton text={INSTALL_SH} />
            </div>
          </div>
          <div className="a-in mm-install-block" style={d(0.15)}>
            <span className="c-dim"># Windows, in PowerShell</span>
            <div className="mm-cmd">
              <span className="c-accent">&gt;</span>
              <code>{INSTALL_PS}</code>
              <CopyButton text={INSTALL_PS} />
            </div>
          </div>
          <div className="a-in mm-install-src" style={d(0.3)}>
            <span className="c-dim"># or build it from source</span>
            <code>git clone {GITHUB} &amp;&amp; cd minmux</code>
            <code>
              make install <span className="c-faint"># deps, native rebuild, hooks</span>
            </code>
            <code>
              make build <span className="c-faint"> # package for your OS</span>
            </code>
          </div>
          <div className="a-in mm-ctas" style={d(0.45)}>
            <a href={GITHUB} className="mm-btn mm-btn-solid">
              Star on GitHub
            </a>
            <a href={`${GITHUB}/tree/main/docs`} className="mm-btn">
              Read the docs
            </a>
            <a href={`${GITHUB}/issues`} className="mm-btn">
              Open an issue
            </a>
          </div>
          <span className="mm-grow" />
          <p className="mm-credit">
            © 2026 minmux · MIT · built in the open by <a href="https://dim0.net">dim0 team</a>
          </p>
        </div>
      </Turn>
    </>
  )
}

/** The Changes panel body (file list + unified diff); shown in the right panel on turn 4. */
export function Changes() {
  return (
    <>
      <div className="mm-files">
        <div className="mm-file is-sel">
          <span className="mm-grow">src/auth/limits.ts</span>
          <span className="c-accent">+38</span>
          <span className="c-faint">−0</span>
        </div>
        <div className="mm-file">
          <span className="mm-grow">src/auth/routes.ts</span>
          <span className="c-accent">+6</span>
          <span className="c-red">−2</span>
        </div>
        <div className="mm-file">
          <span className="mm-grow">test/auth.spec.ts</span>
          <span className="c-accent">+21</span>
          <span className="c-red">−4</span>
        </div>
      </div>
      <pre className="mm-diff a-in" style={d(0.35)} aria-hidden="true">
        <span className="h">@@ -0,0 +1,10 @@ src/auth/limits.ts</span>
        {[
          'import { bucket } from "./bucket"',
          "",
          "const PER_MIN = Number(",
          "  process.env.AUTH_RATE_LIMIT ?? 10)",
          "",
          "export const authLimit = bucket({",
          "  capacity: PER_MIN,",
          "  refillPerSec: PER_MIN / 60,",
          "})",
        ].map((l, i) => (
          <span key={i} className="add">
            +{l}
          </span>
        ))}
        <span className="h">@@ -12,7 +12,7 @@ src/auth/routes.ts</span>
        <span> router.post("/login",</span>
        <span className="del">- handleLogin)</span>
        <span className="add">+ authLimit, handleLogin)</span>
      </pre>
    </>
  )
}

const THEMES = [
  {
    name: "Minimal",
    pair: "Dark · Light",
    dark: "#0b0b0d",
    light: "#fafafa",
    a1: "#4ec97a",
    a2: "#e0a94a",
    b1: "#1f9d55",
    b2: "#b7791f",
  },
  {
    name: "Tokyo Night",
    pair: "Night · Day",
    dark: "#1a1b26",
    light: "#e1e2e7",
    a1: "#9ece6a",
    a2: "#7aa2f7",
    b1: "#587539",
    b2: "#2e7de9",
  },
  {
    name: "Catppuccin",
    pair: "Mocha · Latte",
    dark: "#1e1e2e",
    light: "#eff1f5",
    a1: "#a6e3a1",
    a2: "#cba6f7",
    b1: "#40a02b",
    b2: "#8839ef",
  },
  {
    name: "Gruvbox",
    pair: "Dark · Light",
    dark: "#282828",
    light: "#fbf1c7",
    a1: "#b8bb26",
    a2: "#fabd2f",
    b1: "#79740e",
    b2: "#b57614",
  },
]
