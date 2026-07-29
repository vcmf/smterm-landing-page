"use client"

import { useEffect } from "react"

/**
 * Client-side behaviour ported from the original design:
 *  - the phosphor cell-field canvas background (cells ignite and decay)
 *  - progressive reveal of [data-reveal] sections on scroll
 *  - per-element hover styling driven by the `data-hover` attribute
 * FAQ uses native <details>, so no JS is needed for it.
 */
export function Effects() {
  useEffect(() => {
    const root = document.getElementById("dc-root")
    const cv = document.getElementById("dc-cells") as HTMLCanvasElement | null
    const cleanups: Array<() => void> = []

    // ── phosphor cell field ────────────────────────────────────────────────
    if (cv) {
      const ctx = cv.getContext("2d")
      if (ctx) {
        const glyphs = "$~/01●+−↳▏⏎_{}();#*".split("")
        const CW = 17,
          CH = 26
        let cols = 0,
          rows = 0,
          cells: Array<{
            x: number
            y: number
            g: string
            life: number
            speed: number
            weight: number
          }> = [],
          dpr = 1,
          accent = "#4ec97a"

        const readAccent = () => {
          if (root) accent = getComputedStyle(root).getPropertyValue("--accent").trim() || accent
        }
        const seed = () => {
          dpr = Math.min(window.devicePixelRatio || 1, 2)
          const w = cv.clientWidth,
            h = cv.clientHeight
          cv.width = w * dpr
          cv.height = h * dpr
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
          cols = Math.ceil(w / CW)
          rows = Math.ceil(h / CH)
          cells = []
          for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
              const density = 0.42 - (y / Math.max(rows, 1)) * 0.26
              if (Math.random() > density) continue
              cells.push({
                x: x * CW + 3,
                y: y * CH + 18,
                g: glyphs[(Math.random() * glyphs.length) | 0],
                life: Math.random(),
                speed: 0.0018 + Math.random() * 0.0055,
                weight: 0.35 + (1 - y / Math.max(rows, 1)) * 0.65,
              })
            }
          }
        }

        readAccent()
        seed()
        let raf = 0,
          last = 0
        const draw = (t: number) => {
          if (t - last > 40) {
            last = t
            ctx.clearRect(0, 0, cv.clientWidth, cv.clientHeight)
            ctx.font = "13px 'JetBrains Mono', monospace"
            for (const c of cells) {
              c.life += c.speed
              if (c.life >= 1) {
                c.life = 0
                c.g = glyphs[(Math.random() * glyphs.length) | 0]
                c.speed = 0.0018 + Math.random() * 0.0055
              }
              const a =
                (c.life < 0.12 ? c.life / 0.12 : 1 - (c.life - 0.12) / 0.88) * 0.15 * c.weight
              if (a <= 0.004) continue
              ctx.globalAlpha = a
              ctx.fillStyle = c.life < 0.2 ? accent : "#ffffff"
              ctx.fillText(c.g, c.x, c.y)
            }
            ctx.globalAlpha = 1
          }
          raf = requestAnimationFrame(draw)
        }
        raf = requestAnimationFrame(draw)

        let rt = 0
        const onResize = () => {
          clearTimeout(rt)
          rt = window.setTimeout(seed, 180)
        }
        window.addEventListener("resize", onResize)
        cleanups.push(() => {
          cancelAnimationFrame(raf)
          window.removeEventListener("resize", onResize)
        })
      }
    }

    // ── progressive reveal ─────────────────────────────────────────────────
    if (root && typeof IntersectionObserver !== "undefined") {
      const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"))
      nodes.forEach((n) => {
        n.style.opacity = "0"
        n.style.transform = "translateY(18px)"
        n.style.transition =
          "opacity .7s cubic-bezier(.2,.7,.3,1), transform .7s cubic-bezier(.2,.7,.3,1)"
      })
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const el = e.target as HTMLElement
              el.style.opacity = "1"
              el.style.transform = "none"
              io.unobserve(el)
            }
          })
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.06 },
      )
      nodes.forEach((n) => io.observe(n))
      cleanups.push(() => io.disconnect())
    }

    // ── per-element hover from the `style-hover` attribute ──────────────────
    if (root) {
      const parseDecls = (s: string): Array<[string, string]> =>
        s
          .split(";")
          .map((d) => d.trim())
          .filter(Boolean)
          .map((d) => {
            const i = d.indexOf(":")
            return [d.slice(0, i).trim(), d.slice(i + 1).trim()] as [string, string]
          })

      const hoverEls = Array.from(root.querySelectorAll<HTMLElement>("[data-hover]"))
      const detach: Array<() => void> = []
      hoverEls.forEach((el) => {
        const decls = parseDecls(el.getAttribute("data-hover") || "")
        const prev = new Map<string, string>()
        const enter = () => {
          decls.forEach(([p, v]) => {
            prev.set(p, el.style.getPropertyValue(p))
            el.style.setProperty(p, v)
          })
        }
        const leave = () => {
          decls.forEach(([p]) => {
            const old = prev.get(p)
            if (old) el.style.setProperty(p, old)
            else el.style.removeProperty(p)
          })
        }
        el.addEventListener("pointerenter", enter)
        el.addEventListener("pointerleave", leave)
        detach.push(() => {
          el.removeEventListener("pointerenter", enter)
          el.removeEventListener("pointerleave", leave)
        })
      })
      cleanups.push(() => detach.forEach((fn) => fn()))
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return null
}
