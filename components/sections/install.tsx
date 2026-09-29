export function Install() {
  return (
    <>
      <div
        id="install"
        data-reveal="1"
        style={{
          position: "relative",
          zIndex: "1",
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "clamp(64px,9vw,110px) clamp(18px,4vw,28px) 0",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--faint)",
            fontWeight: "600",
            marginBottom: "16px",
          }}
        >
          Install
        </div>
        <h2
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontWeight: "700",
            fontSize: "clamp(26px,3.6vw,44px)",
            lineHeight: "1.14",
            letterSpacing: "-0.025em",
            margin: "0 0 34px",
          }}
        >
          One line, then you are in a shell.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "18px",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "12px",
              background: "var(--panel)",
              padding: "22px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                marginBottom: "14px",
                fontSize: "13px",
                color: "var(--dim)",
              }}
            >
              <i className="ph ph-apple-logo" style={{ fontSize: "15px" }}></i>
              <i className="ph ph-linux-logo" style={{ fontSize: "15px" }}></i>
              <span style={{ color: "var(--text)", fontWeight: "500" }}>macOS and Linux</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "9px",
                padding: "12px 13px",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "11.5px",
              }}
            >
              <span style={{ color: "var(--accent)", flexShrink: "0" }}>$</span>
              <span style={{ flex: "1", overflowX: "auto", whiteSpace: "nowrap" }}>
                curl -fsSL https://raw.githubusercontent.com/vcmf/minmux/main/install.sh | sh
              </span>
              <i
                className="ph ph-copy"
                style={{
                  fontSize: "14px",
                  color: "var(--faint)",
                  cursor: "pointer",
                  flexShrink: "0",
                }}
                data-hover="color:var(--accent);"
              ></i>
            </div>
          </div>
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "12px",
              background: "var(--panel)",
              padding: "22px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                marginBottom: "14px",
                fontSize: "13px",
                color: "var(--dim)",
              }}
            >
              <i className="ph ph-windows-logo" style={{ fontSize: "15px" }}></i>
              <span style={{ color: "var(--text)", fontWeight: "500" }}>
                Windows, in PowerShell
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "9px",
                padding: "12px 13px",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "11.5px",
              }}
            >
              <span style={{ color: "var(--blue)", flexShrink: "0" }}>&gt;</span>
              <span style={{ flex: "1", overflowX: "auto", whiteSpace: "nowrap" }}>
                irm https://raw.githubusercontent.com/vcmf/minmux/main/install.ps1 | iex
              </span>
              <i
                className="ph ph-copy"
                style={{
                  fontSize: "14px",
                  color: "var(--faint)",
                  cursor: "pointer",
                  flexShrink: "0",
                }}
                data-hover="color:var(--accent);"
              ></i>
            </div>
          </div>
        </div>

        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: "12px",
            background: "var(--panel)",
            padding: "clamp(20px,3vw,26px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
            gap: "26px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "11px" }}
            >
              <i
                className="ph-fill ph-git-fork"
                style={{ fontSize: "19px", color: "var(--accent)" }}
              ></i>
              <span style={{ fontSize: "15.5px", fontWeight: "600" }}>Or build it from source</span>
            </div>
            <p
              style={{
                margin: "0 0 14px",
                fontSize: "13.5px",
                color: "var(--dim)",
                lineHeight: "1.65",
              }}
            >
              Electron, React, TypeScript, xterm.js on the WebGL renderer, and node-pty for the
              shells. Zustand for state, react-resizable-panels for the layout, Vitest for tests.
            </p>
            <p style={{ margin: "0", fontSize: "13px", color: "var(--faint)", lineHeight: "1.6" }}>
              Logic sits in small pure modules with real tests. Design notes and decisions live in{" "}
              <a href="https://github.com/vcmf/minmux/tree/main/docs">docs/</a>, starting with
              ARCHITECTURE.md and ROADMAP.md.
            </p>
          </div>
          <div
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "16px",
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "11.5px",
              lineHeight: "2",
            }}
          >
            <div>
              <span style={{ color: "var(--accent)" }}>$</span> git clone
              https://github.com/vcmf/minmux
            </div>
            <div>
              <span style={{ color: "var(--accent)" }}>$</span> cd minmux
            </div>
            <div>
              <span style={{ color: "var(--accent)" }}>$</span> make install{" "}
              <span style={{ color: "var(--faint)" }}># deps, native rebuild, hooks</span>
            </div>
            <div>
              <span style={{ color: "var(--accent)" }}>$</span> make run{" "}
              <span style={{ color: "var(--faint)" }}># dev mode</span>
            </div>
            <div>
              <span style={{ color: "var(--accent)" }}>$</span> make dist{" "}
              <span style={{ color: "var(--faint)" }}># package for your OS</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
