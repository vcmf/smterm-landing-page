import fs from "node:fs"
import path from "node:path"
import { Effects } from "@/components/effects"

// The page markup is the design's exact HTML (inline-styled), read at build time and
// injected as-is. Interactivity (canvas background, scroll reveal, hover) is layered on
// by the Effects client component. Refactor sections into components over time as needed.
export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), "app/content.html"), "utf-8")
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Effects />
    </>
  )
}
