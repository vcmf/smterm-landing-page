"use client"

import { useEffect, useState } from "react"
import { AgentMark, type AgentKind } from "./icons"

/** The agents the hero cycles through, as the commands you'd type to start them. */
const AGENTS: { kind: AgentKind; cmd: string; color?: string }[] = [
  { kind: "claude", cmd: "claude", color: "var(--cc-orange)" },
  { kind: "codex", cmd: "codex" },
  { kind: "opencode", cmd: "opencode" },
]
const TYPE_MS = 85
const ERASE_MS = 45
const HOLD_MS = 1900

/** `claude` → backspace → `codex` → `opencode`, typed like a prompt. Static (all three, synopsis
 *  style) under reduced motion; paused while `active` is false. Purely visual: the heading
 *  carries the sentence for assistive tech. */
export function AgentRotator({ active }: { active: boolean }) {
  const [i, setI] = useState(0)
  const [n, setN] = useState(AGENTS[0].cmd.length) // server render: "claude", fully typed
  const [erasing, setErasing] = useState(false)
  const [still, setStill] = useState(false)

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  useEffect(() => {
    if (!active || still) return
    const len = AGENTS[i].cmd.length
    const t = setTimeout(
      () => {
        if (!erasing && n < len) setN(n + 1)
        else if (!erasing) setErasing(true)
        else if (n > 0) setN(n - 1)
        else {
          setErasing(false)
          setI((i + 1) % AGENTS.length)
        }
      },
      !erasing && n === len ? HOLD_MS : erasing ? ERASE_MS : TYPE_MS,
    )
    return () => clearTimeout(t)
  }, [active, still, i, n, erasing])

  if (still) {
    return <span className="mm-agent-cmd">&lt;{AGENTS.map((a) => a.cmd).join(" | ")}&gt;</span>
  }
  const a = AGENTS[i]
  return (
    <span className="mm-agent-cmd">
      <AgentMark kind={a.kind} color={a.color} className="mm-agent-cmd-mark" />
      <span>{a.cmd.slice(0, n)}</span>
      <span className="mm-agent-cmd-caret a-caret" />
    </span>
  )
}
