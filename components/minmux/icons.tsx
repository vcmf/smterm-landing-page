import {
  ArrowSquareOut,
  Bell,
  CaretDown,
  CaretRight,
  Check,
  Copy,
  File,
  Folder,
  FolderOpen,
  GitDiff,
  Globe,
  MagnifyingGlass,
  Moon,
  PencilSimple,
  SidebarSimple,
  Star,
  Sun,
  TerminalWindow,
  TreeStructure,
  X,
  type Icon,
} from "@phosphor-icons/react"

/** The Phosphor icons the page uses (same package as the app; only these are bundled). */
const ICONS = {
  "arrow-square-out": ArrowSquareOut,
  bell: Bell,
  "caret-down": CaretDown,
  "caret-right": CaretRight,
  check: Check,
  copy: Copy,
  file: File,
  folder: Folder,
  "folder-open": FolderOpen,
  "git-diff": GitDiff,
  globe: Globe,
  "magnifying-glass": MagnifyingGlass,
  moon: Moon,
  "pencil-simple": PencilSimple,
  "sidebar-simple": SidebarSimple,
  star: Star,
  sun: Sun,
  "terminal-window": TerminalWindow,
  "tree-structure": TreeStructure,
  x: X,
} satisfies Record<string, Icon>

export type IconName = keyof typeof ICONS

/** A Phosphor icon (`regular` or `fill`), coloured by currentColor. */
export function Ph({
  name,
  fill = false,
  size = 15,
  className = "",
}: {
  name: IconName
  fill?: boolean
  size?: number
  className?: string
}) {
  const Glyph = ICONS[name]
  return (
    <Glyph
      size={size}
      weight={fill ? "fill" : "regular"}
      className={`mm-ph ${className}`}
      aria-hidden="true"
    />
  )
}

/** Claude Code's mark (the same path the app uses in src/components/claude-icon.tsx). */
export function ClaudeIcon({ size = 14, color }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ color, flex: "none" }}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.998 10.949H24v3.102h-3v3.028h-1.487V20H18v-2.921h-1.487V20H15v-2.921H9V20H7.488v-2.921H6V20H4.487v-2.921H3V14.05H0V10.95h3V5h17.998v5.949zM6 10.949h1.488V8.102H6v2.847zm10.51 0H18V8.102h-1.49v2.847z"
      />
    </svg>
  )
}
