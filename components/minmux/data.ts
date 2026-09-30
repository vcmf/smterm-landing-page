/** Scripted content for the landing page: chapters (= sidebar sessions) and per-turn demo state. */

export type Status = "idle" | "running" | "waiting" | "done"

export const STATUS_LABEL: Record<Status, string> = {
  idle: "idle",
  running: "running",
  waiting: "needs input",
  done: "done",
}

export interface Chapter {
  id: string
  sub: string
}

/** One chapter per turn; the sidebar lists them as sessions. */
export const CHAPTERS: Chapter[] = [
  { id: "welcome", sub: "~/minmux · main" },
  { id: "run-agents", sub: "tabs · real shells" },
  { id: "split-panes", sub: "splits keep your cwd" },
  { id: "notifications", sub: "tells you when it asks" },
  { id: "changes", sub: "git diff, per file" },
  { id: "agents-board", sub: "hooks · sub-agents" },
  { id: "ssh", sub: "~/.ssh/config" },
  { id: "themes", sub: "4 families × light/dark" },
  { id: "install", sub: "one line · MIT" },
]

export const TURNS = CHAPTERS.length
export const NOTIFY_TURN = 3
export const CHANGES_TURN = 4
export const THEME_TURN = 7

/** Status of chapter `i` while turn `turn` is showing: behind = done, current = running. */
export function chapterStatus(i: number, turn: number): Status {
  if (i < turn) return "done"
  if (i > turn) return "idle"
  return turn === NOTIFY_TURN ? "waiting" : "running"
}

export interface AgentCard {
  group: string
  cwd: string
  status: Status
  tokens: string
  last: string
  kids: { kind: string; what: string }[]
}

// indexed by turn
const API: Status[] = [
  "idle",
  "running",
  "running",
  "running",
  "done",
  "running",
  "done",
  "done",
  "done",
]
const WEB: Status[] = [
  "idle",
  "idle",
  "running",
  "waiting",
  "running",
  "done",
  "done",
  "done",
  "done",
]
const API_LAST = [
  "Waiting for a prompt",
  "Wiring the limiter into three routes",
  "Running the auth suite",
  "Checking the limiter headers",
  "Added a limiter to 3 routes",
  "Migrating old limiter call sites",
  "Migrated 7 call sites",
  "Migrated 7 call sites",
  "Migrated 7 call sites",
]
const WEB_LAST = [
  "Waiting for a prompt",
  "Waiting for a prompt",
  "Writing tests for the login form",
  "Wants to run a migration",
  "Running e2e/login.spec.ts",
  "6 login tests pass",
  "6 login tests pass",
  "6 login tests pass",
  "6 login tests pass",
]

/** The agents panel for a given turn. */
export function agentsAt(turn: number): AgentCard[] {
  return [
    {
      group: "api",
      cwd: "~/api",
      status: API[turn],
      tokens: turn ? "↑42k ↓18k" : "",
      last: API_LAST[turn],
      kids:
        turn === 5
          ? [
              { kind: "Explore", what: "rateLimit( call sites" },
              { kind: "Bash", what: "npm test" },
            ]
          : [],
    },
    {
      group: "web",
      cwd: "~/web",
      status: WEB[turn],
      tokens: turn > 1 ? "↑31k ↓9k" : "",
      last: WEB_LAST[turn],
      kids: [],
    },
    {
      group: "docs",
      cwd: "~/docs",
      status: "done",
      tokens: "↑12k ↓4k",
      last: "Rewrote the install section",
      kids: [],
    },
  ]
}

export interface DemoTab {
  name: string
  count: string
  status: Status
  active: boolean
}

/** Top-bar tabs for a given turn. */
export function tabsAt(turn: number): DemoTab[] {
  return [
    { name: "minmux", count: "", status: "running", active: turn === 0 || turn >= 6 },
    {
      name: "api",
      count: turn >= 5 ? "3" : "",
      status: API[turn],
      active: turn >= 1 && turn <= 5 && turn !== NOTIFY_TURN,
    },
    { name: "web", count: "", status: WEB[turn], active: turn === NOTIFY_TURN },
    { name: "docs", count: "", status: "done", active: false },
  ]
}

export function countsAt(turn: number): { running: number; waiting: number } {
  const s = [API[turn], WEB[turn]]
  return {
    running: s.filter((x) => x === "running").length,
    waiting: s.filter((x) => x === "waiting").length,
  }
}

export const INSTALL_SH =
  "curl -fsSL https://raw.githubusercontent.com/vcmf/minmux/main/install.sh | sh"
export const INSTALL_PS = "irm https://raw.githubusercontent.com/vcmf/minmux/main/install.ps1 | iex"
export const GITHUB = "https://github.com/vcmf/minmux"
