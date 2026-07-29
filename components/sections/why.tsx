export function Why() {
  return (
    <>
      <div
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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "clamp(26px,4vw,50px)",
            alignItems: "start",
          }}
        >
          <div>
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
              Why I built this
            </div>
            <h2
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontWeight: "700",
                fontSize: "clamp(24px,3vw,38px)",
                lineHeight: "1.14",
                letterSpacing: "-0.025em",
                margin: "0",
              }}
            >
              I like reading the code an agent writes.
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              fontSize: "14.5px",
              color: "var(--dim)",
              lineHeight: "1.72",
            }}
          >
            <p style={{ margin: "0", textWrap: "pretty" }}>
              I love the terminal, and the easiest way to put an agent like Claude Code to work is
              to launch it from a CLI. My work moves between macOS and Linux a lot, and sometimes
              WSL on Windows, so a terminal that behaves the same on all three matters to me.
            </p>
            <p style={{ margin: "0", textWrap: "pretty" }}>
              The other half is that I like reading what an agent wrote and making the edits myself.
              A plain terminal makes that hard. You lose track of which session needs you, and you
              never really see what changed.
            </p>
            <p style={{ margin: "0", textWrap: "pretty" }}>
              So I built the terminal I wanted. It keeps the shell I already like and adds just
              enough to stay in the loop. The Changes, Files and Agents panels show what happened,
              not just that something did.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "11px",
                paddingTop: "6px",
                fontSize: "13px",
                color: "var(--faint)",
              }}
            >
              <span style={{ width: "26px", height: "1px", background: "var(--border2)" }}></span>
              <a href="https://github.com/vcmf" style={{ color: "var(--dim)" }}>
                vcmf
              </a>
              <span>·</span>
              <span>
                also building <a href="https://dim0.net">dim0</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
