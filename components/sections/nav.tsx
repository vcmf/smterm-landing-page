export function Nav() {
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: "0",
          zIndex: "40",
          background: "color-mix(in srgb, var(--bg) 82%, transparent)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "0 clamp(16px,4vw,28px)",
            minHeight: "60px",
            display: "flex",
            alignItems: "center",
            gap: "clamp(12px,2vw,26px)",
            flexWrap: "wrap",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          <a
            href="#top"
            style={{ display: "flex", alignItems: "center", gap: "9px", color: "var(--text)" }}
          >
            <img
              src="/media/logo.png"
              alt="minmux"
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "6px",
                flexShrink: "0",
                objectFit: "contain",
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontWeight: "700",
                fontSize: "16px",
                letterSpacing: "-0.01em",
              }}
            >
              minmux
            </span>
          </a>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(12px,1.6vw,22px)",
              fontSize: "13px",
              color: "var(--dim)",
              flexWrap: "wrap",
            }}
          >
            <a href="#features" style={{ color: "var(--dim)" }} data-hover="color:var(--text);">
              Features
            </a>
            <a href="#agents" style={{ color: "var(--dim)" }} data-hover="color:var(--text);">
              Agents
            </a>
            <a href="#themes" style={{ color: "var(--dim)" }} data-hover="color:var(--text);">
              Themes
            </a>
            <a href="#install" style={{ color: "var(--dim)" }} data-hover="color:var(--text);">
              Install
            </a>
            <a href="#faq" style={{ color: "var(--dim)" }} data-hover="color:var(--text);">
              FAQ
            </a>
          </div>
          <div style={{ flex: "1" }}></div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              href="https://github.com/vcmf/minmux"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                height: "34px",
                padding: "0 13px",
                border: "1px solid var(--border2)",
                borderRadius: "8px",
                color: "var(--dim)",
                fontSize: "12.5px",
              }}
              data-hover="color:var(--text);border-color:var(--accent);"
            >
              <i className="ph ph-star" style={{ fontSize: "14px" }}></i>
              <span>Star</span>
            </a>
            <a
              href="#install"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                height: "34px",
                padding: "0 15px",
                background: "var(--accent)",
                borderRadius: "8px",
                color: "#08080a",
                fontSize: "12.5px",
                fontWeight: "600",
              }}
              data-hover="filter:brightness(1.1);"
            >
              <i className="ph-bold ph-download-simple" style={{ fontSize: "14px" }}></i>
              <span>Install</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
