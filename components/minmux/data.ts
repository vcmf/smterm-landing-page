/** Scripted content for the landing page: chapters (= sidebar sessions) and per-turn demo state. */

export type Appearance = "light" | "dark"

export type Status = "idle" | "running" | "waiting" | "done"

export const STATUS_LABEL: Record<Status, string> = {
  idle: "idle",
  running: "running",
  waiting: "needs input",
  done: "done",
}

/** Claude Code `/color` names (src/lib/session-color.ts); swatches are `--cc-<name>` tokens. */
export type ClaudeColor =
  "red" | "blue" | "green" | "yellow" | "purple" | "orange" | "pink" | "cyan"

const CHAPTER_IDS = [
  "welcome",
  "run-agents",
  "split-panes",
  "notifications",
  "changes",
  "files",
  "agents-board",
  "ssh",
  "themes",
  "install",
] as const
export type ChapterId = (typeof CHAPTER_IDS)[number]

export interface Chapter {
  id: ChapterId
  sub: string
  /** Agent-centred chapters show the Claude mark in their colour; the rest a terminal icon. */
  claude?: ClaudeColor
}

const CHAPTER_META: Record<ChapterId, Omit<Chapter, "id">> = {
  welcome: { sub: "~/minmux · main" },
  "run-agents": { sub: "tabs · real shells", claude: "orange" },
  "split-panes": { sub: "splits keep your cwd", claude: "purple" },
  notifications: { sub: "tells you when it asks", claude: "pink" },
  changes: { sub: "git diff, per file" },
  files: { sub: "browse · preview" },
  "agents-board": { sub: "hooks · sub-agents", claude: "blue" },
  ssh: { sub: "~/.ssh/config" },
  themes: { sub: "4 families × light/dark" },
  install: { sub: "one line · MIT" },
}

/** One chapter per turn, in order; the sidebar lists them as sessions. */
export const CHAPTERS: Chapter[] = CHAPTER_IDS.map((id) => ({ id, ...CHAPTER_META[id] }))
export const TURNS = CHAPTERS.length

/** The turn a chapter plays at — the only way turn numbers are derived. */
export const turnOf = (id: ChapterId): number => CHAPTER_IDS.indexOf(id)
export const NOTIFY_TURN = turnOf("notifications")
export const CHANGES_TURN = turnOf("changes")
export const FILES_TURN = turnOf("files")
export const AGENTS_TURN = turnOf("agents-board")
export const THEME_TURN = turnOf("themes")

/** Status of chapter `i` while turn `turn` is showing: behind = done, current = running. */
export function chapterStatus(i: number, turn: number): Status {
  if (i < turn) return "done"
  if (i > turn) return "idle"
  return turn === NOTIFY_TURN ? "waiting" : "running"
}

/** What the two demo agents (api, web) are doing on each chapter. Keyed by id, so a new
 *  chapter without an entry is a type error rather than an `undefined` at runtime. */
const DEMO: Record<ChapterId, { api: Status; apiLast: string; web: Status; webLast: string }> = {
  welcome: {
    api: "idle",
    apiLast: "Waiting for a prompt",
    web: "idle",
    webLast: "Waiting for a prompt",
  },
  "run-agents": {
    api: "running",
    apiLast: "Wiring the limiter into three routes",
    web: "idle",
    webLast: "Waiting for a prompt",
  },
  "split-panes": {
    api: "running",
    apiLast: "Running the auth suite",
    web: "running",
    webLast: "Writing tests for the login form",
  },
  notifications: {
    api: "running",
    apiLast: "Checking the limiter headers",
    web: "waiting",
    webLast: "Wants to run a migration",
  },
  changes: {
    api: "done",
    apiLast: "Added a limiter to 3 routes",
    web: "running",
    webLast: "Running e2e/login.spec.ts",
  },
  files: {
    api: "done",
    apiLast: "Added a limiter to 3 routes",
    web: "running",
    webLast: "Running e2e/login.spec.ts",
  },
  "agents-board": {
    api: "running",
    apiLast: "Migrating old limiter call sites",
    web: "done",
    webLast: "6 login tests pass",
  },
  ssh: {
    api: "done",
    apiLast: "Migrated 7 call sites",
    web: "done",
    webLast: "6 login tests pass",
  },
  themes: {
    api: "done",
    apiLast: "Migrated 7 call sites",
    web: "done",
    webLast: "6 login tests pass",
  },
  install: {
    api: "done",
    apiLast: "Migrated 7 call sites",
    web: "done",
    webLast: "6 login tests pass",
  },
}
const demoAt = (turn: number) => DEMO[CHAPTER_IDS[turn]]

export interface AgentCard {
  group: string
  cwd: string
  status: Status
  tokens: string
  last: string
  kids: { kind: string; what: string }[]
}

/** The agents panel for a given turn. */
export function agentsAt(turn: number): AgentCard[] {
  const d = demoAt(turn)
  return [
    {
      group: "api",
      cwd: "~/api",
      status: d.api,
      tokens: turn ? "↑42k ↓18k" : "",
      last: d.apiLast,
      kids:
        turn === AGENTS_TURN
          ? [
              { kind: "Explore", what: "rateLimit( call sites" },
              { kind: "Bash", what: "npm test" },
            ]
          : [],
    },
    {
      group: "web",
      cwd: "~/web",
      status: d.web,
      tokens: turn >= turnOf("split-panes") ? "↑31k ↓9k" : "",
      last: d.webLast,
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
  claude: boolean
}

/** Top-bar tabs for a given turn. */
export function tabsAt(turn: number): DemoTab[] {
  const d = demoAt(turn)
  return [
    {
      name: "minmux",
      count: "",
      status: "running",
      active: turn === 0 || turn > AGENTS_TURN,
      claude: false,
    },
    {
      name: "api",
      count: turn >= AGENTS_TURN ? "3" : "",
      status: d.api,
      active: turn >= 1 && turn <= AGENTS_TURN && turn !== NOTIFY_TURN,
      claude: true,
    },
    { name: "web", count: "", status: d.web, active: turn === NOTIFY_TURN, claude: true },
    { name: "docs", count: "", status: "done", active: false, claude: true },
  ]
}

export function countsAt(turn: number): { running: number; waiting: number } {
  const d = demoAt(turn)
  const s = [d.api, d.web]
  return {
    running: s.filter((x) => x === "running").length,
    waiting: s.filter((x) => x === "waiting").length,
  }
}

export const INSTALL_SH =
  "curl -fsSL https://raw.githubusercontent.com/vcmf/minmux/main/install.sh | sh"
export const INSTALL_PS = "irm https://raw.githubusercontent.com/vcmf/minmux/main/install.ps1 | iex"
export const GITHUB = "https://github.com/vcmf/minmux"
