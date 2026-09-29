import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://minmux.dev"),
  title: "minmux — a minimal terminal for agentic coding",
  description:
    "A fast, cross-platform terminal for people who run coding agents all day. Tabs, split panes, real shells, plus panels that show what the agents are doing: git diffs, files, and a live agents board. macOS, Linux, Windows and WSL.",
  icons: { icon: "/media/icon.png" },
  openGraph: {
    title: "minmux — a minimal terminal for agentic coding",
    description:
      "You run the agents. You still read the code. A cross-platform terminal with an agents board, git diffs, and a files browser.",
    images: ["/media/screenshot.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "minmux — a minimal terminal for agentic coding",
    description: "You run the agents. You still read the code.",
    images: ["/media/screenshot.jpg"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
