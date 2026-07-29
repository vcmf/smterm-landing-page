export function Problem() {
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
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--faint)",
            fontWeight: "600",
            marginBottom: "16px",
          }}
        >
          The problem
        </div>
        <h2
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontWeight: "700",
            fontSize: "clamp(26px,3.6vw,44px)",
            lineHeight: "1.14",
            letterSpacing: "-0.025em",
            margin: "0 0 18px",
            maxWidth: "22ch",
          }}
        >
          You find the finished agent an hour late.
        </h2>
        <p
          style={{
            maxWidth: "62ch",
            margin: "0 0 44px",
            fontSize: "15px",
            color: "var(--dim)",
            lineHeight: "1.68",
            textWrap: "pretty",
          }}
        >
          Launch a few agents from a plain terminal and two things go wrong. You lose track of which
          pane is waiting on you, and you never really see what changed. So you either babysit one
          pane, or you come back later and read a diff with no idea who wrote it.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <div style={{ background: "var(--panel)", padding: "24px" }}>
            <i className="ph ph-eye-slash" style={{ fontSize: "20px", color: "var(--red)" }}></i>
            <div style={{ fontSize: "14px", fontWeight: "600", margin: "12px 0 7px" }}>
              Silent panes
            </div>
            <div style={{ fontSize: "13px", color: "var(--dim)", lineHeight: "1.6" }}>
              A background pane asked a question twenty minutes ago and nothing told you.
            </div>
          </div>
          <div style={{ background: "var(--panel)", padding: "24px" }}>
            <i
              className="ph ph-file-dashed"
              style={{ fontSize: "20px", color: "var(--amber)" }}
            ></i>
            <div style={{ fontSize: "14px", fontWeight: "600", margin: "12px 0 7px" }}>
              Invisible edits
            </div>
            <div style={{ fontSize: "13px", color: "var(--dim)", lineHeight: "1.6" }}>
              Files moved under you. Reading them means leaving the terminal and running git
              yourself.
            </div>
          </div>
          <div style={{ background: "var(--panel)", padding: "24px" }}>
            <i
              className="ph ph-arrows-split"
              style={{ fontSize: "20px", color: "var(--blue)" }}
            ></i>
            <div style={{ fontSize: "14px", fontWeight: "600", margin: "12px 0 7px" }}>
              Three different machines
            </div>
            <div style={{ fontSize: "13px", color: "var(--dim)", lineHeight: "1.6" }}>
              macOS at home, Linux at work, WSL sometimes. Every terminal behaves a bit differently.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
