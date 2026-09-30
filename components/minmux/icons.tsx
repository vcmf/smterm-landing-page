import type { ReactNode } from "react"

/** Inline stroke icons (currentColor), sized for the 12.5px chrome. */
function Svg({ size = 15, children }: { size?: number; children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export const IconSidebar = () => (
  <Svg>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <line x1="9" y1="4" x2="9" y2="20" />
  </Svg>
)
export const IconBell = () => (
  <Svg size={16}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </Svg>
)
export const IconSearch = () => (
  <Svg size={13}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.6" y2="16.6" />
  </Svg>
)
export const IconStar = () => (
  <Svg size={13}>
    <polygon points="12 2 15.1 8.6 22 9.3 16.8 14 18.2 21 12 17.3 5.8 21 7.2 14 2 9.3 8.9 8.6 12 2" />
  </Svg>
)
export const IconCopy = () => (
  <Svg size={14}>
    <rect x="8" y="8" width="13" height="13" rx="2" />
    <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
  </Svg>
)
export const IconCheck = () => (
  <Svg size={14}>
    <polyline points="20 6 9 17 4 12" />
  </Svg>
)
export const IconMoon = () => (
  <Svg size={15}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </Svg>
)
export const IconSun = () => (
  <Svg size={15}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Svg>
)
export const IconGlobe = () => (
  <Svg size={15}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </Svg>
)
export const IconTerminal = () => (
  <Svg size={14}>
    <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
    <polyline points="7 10 10 12.5 7 15" />
    <line x1="12.5" y1="15" x2="16.5" y2="15" />
  </Svg>
)
