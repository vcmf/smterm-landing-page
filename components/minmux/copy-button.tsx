"use client"

import { useState } from "react"
import { IconCheck, IconCopy } from "./icons"

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText(text).then(
      () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1400)
      },
      () => {},
    )
  }
  return (
    <button
      type="button"
      className="mm-icon-btn"
      onClick={copy}
      aria-label={copied ? "Copied" : "Copy command"}
      data-copied={copied}
    >
      {copied ? <IconCheck /> : <IconCopy />}
    </button>
  )
}
