export function Hero() {
  return (
    <>
      <div
        id="top"
        style={{
          position: "relative",
          zIndex: "1",
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "clamp(56px,9vw,96px) clamp(18px,4vw,28px) 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "32px",
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "11.5px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--faint)",
          }}
        >
          <span style={{ width: "34px", height: "1px", background: "var(--border2)" }}></span>
          <span>a terminal for agentic coding</span>
          <span style={{ width: "34px", height: "1px", background: "var(--border2)" }}></span>
        </div>

        <h1
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontWeight: "700",
            fontSize: "clamp(34px,5.6vw,68px)",
            lineHeight: "1.08",
            letterSpacing: "-0.03em",
            textAlign: "center",
            margin: "0 auto 26px",
            maxWidth: "15ch",
            textWrap: "balance",
          }}
        >
          You run the agents.
          <br />
          You still read the code.
          <span
            style={{
              display: "inline-block",
              width: "0.5em",
              height: "0.9em",
              background: "var(--accent)",
              marginLeft: "0.12em",
              verticalAlign: "-0.06em",
              animation: "blink 1.1s step-end infinite",
            }}
          ></span>
        </h1>

        <p
          style={{
            maxWidth: "64ch",
            margin: "0 auto 14px",
            textAlign: "center",
            fontSize: "15.5px",
            color: "var(--dim)",
            lineHeight: "1.68",
            textWrap: "pretty",
          }}
        >
          A fast, cross-platform terminal with tabs, split panes and real shells, for people who run
          coding agents all day. It stays out of your way like any terminal, then adds a few panels
          that show what the agents are actually doing.
        </p>
        <p
          style={{
            maxWidth: "60ch",
            margin: "0 auto 38px",
            textAlign: "center",
            fontSize: "13.5px",
            color: "var(--faint)",
          }}
        >
          An open-source alternative if you have been looking for Warp without the lock-in, or tmux
          that understands agents.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              maxWidth: "100%",
              padding: "13px 16px",
              background: "color-mix(in srgb, var(--panel) 88%, transparent)",
              border: "1px solid var(--border2)",
              borderRadius: "11px",
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "clamp(10.5px,2.4vw,13px)",
              boxShadow: "0 20px 50px -24px rgba(0,0,0,0.8)",
            }}
          >
            <span style={{ color: "var(--accent)" }}>$</span>
            <span style={{ color: "var(--text)", whiteSpace: "nowrap", overflowX: "auto" }}>
              curl -fsSL https://raw.githubusercontent.com/vcmf/minmux/main/install.sh | sh
            </span>
            <span style={{ width: "1px", height: "16px", background: "var(--border)" }}></span>
            <i
              className="ph ph-copy"
              style={{ fontSize: "15px", color: "var(--faint)", cursor: "pointer" }}
              data-hover="color:var(--accent);"
            ></i>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "12px",
              color: "var(--faint)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <i className="ph ph-apple-logo" style={{ fontSize: "14px" }}></i>macOS
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <i className="ph ph-linux-logo" style={{ fontSize: "14px" }}></i>Linux
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <i className="ph ph-windows-logo" style={{ fontSize: "14px" }}></i>Windows and WSL
            </span>
            <span style={{ color: "var(--border2)" }}>|</span>
            <a href="#install" style={{ color: "var(--faint)" }} data-hover="color:var(--accent);">
              PowerShell one-liner
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
