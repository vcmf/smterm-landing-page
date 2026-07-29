export function Footer() {
  return (
    <>
      <div
        style={{
          position: "relative",
          zIndex: "1",
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "clamp(44px,7vw,60px) clamp(18px,4vw,28px) 46px",
        }}
      >
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "26px",
            display: "flex",
            alignItems: "center",
            gap: "clamp(12px,2vw,18px)",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <img
              src="/media/logo.png"
              alt="smterm"
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "5px",
                flexShrink: "0",
                objectFit: "contain",
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontWeight: "700",
                fontSize: "13px",
              }}
            >
              smterm
            </span>
          </div>
          <span style={{ fontSize: "12px", color: "var(--faint)" }}>
            A minimal terminal for agentic coding. Yes, we love reading the code.
          </span>
          <div style={{ flex: "1" }}></div>
          <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "12px" }}>
            <a href="https://github.com/vcmf/smterm" style={{ color: "var(--dim)" }}>
              GitHub
            </a>
            <a href="https://github.com/vcmf/smterm#readme" style={{ color: "var(--dim)" }}>
              README
            </a>
            <a href="https://github.com/vcmf/smterm/tree/main/docs" style={{ color: "var(--dim)" }}>
              Docs
            </a>
            <a href="https://github.com/vcmf/smterm/issues" style={{ color: "var(--dim)" }}>
              Issues
            </a>
            <a href="https://dim0.net" style={{ color: "var(--dim)" }}>
              dim0
            </a>
          </div>
        </div>
        <div style={{ marginTop: "18px", fontSize: "11.5px", color: "var(--faint)" }}>
          © 2026 smterm · MIT · built in the open by{" "}
          <a href="https://github.com/vcmf" style={{ color: "var(--faint)" }}>
            vcmf
          </a>
        </div>
      </div>
    </>
  )
}
