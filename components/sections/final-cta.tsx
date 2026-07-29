export function FinalCta() {
  return (
    <>
      <div
        data-reveal="1"
        style={{
          position: "relative",
          zIndex: "1",
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "clamp(70px,10vw,120px) clamp(18px,4vw,28px) 0",
        }}
      >
        <div
          style={{
            position: "relative",
            border: "1px solid var(--border2)",
            borderRadius: "18px",
            background: "color-mix(in srgb, var(--panel) 88%, transparent)",
            padding: "clamp(40px,6vw,64px) clamp(22px,4vw,40px)",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "0",
              background:
                "radial-gradient(ellipse 62% 74% at 50% 0%, color-mix(in srgb, var(--accent) 9%, transparent), transparent 72%)",
            }}
          ></div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "13px",
                color: "var(--accent)",
                marginBottom: "20px",
              }}
            >
              <span style={{ color: "var(--faint)" }}>$</span> smterm
              <span
                style={{
                  display: "inline-block",
                  width: "0.5em",
                  height: "1em",
                  background: "var(--accent)",
                  marginLeft: "0.3em",
                  verticalAlign: "-0.12em",
                  animation: "blink 1.1s step-end infinite",
                }}
              ></span>
            </div>
            <h2
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontWeight: "700",
                fontSize: "clamp(26px,3.8vw,46px)",
                lineHeight: "1.12",
                letterSpacing: "-0.03em",
                margin: "0 auto 18px",
                maxWidth: "22ch",
                textWrap: "balance",
              }}
            >
              Stay in the loop with your agents.
            </h2>
            <p
              style={{
                maxWidth: "52ch",
                margin: "0 auto 32px",
                fontSize: "15px",
                color: "var(--dim)",
                lineHeight: "1.66",
              }}
            >
              Free, MIT, and yours to fork. If smterm turns out useful to you, a star helps other
              people find it.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#install"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                  height: "44px",
                  padding: "0 22px",
                  background: "var(--accent)",
                  borderRadius: "10px",
                  color: "#08080a",
                  fontSize: "13.5px",
                  fontWeight: "600",
                }}
                data-hover="filter:brightness(1.1);"
              >
                <i className="ph-bold ph-download-simple" style={{ fontSize: "16px" }}></i>Install
                smterm
              </a>
              <a
                href="https://github.com/vcmf/smterm"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                  height: "44px",
                  padding: "0 22px",
                  border: "1px solid var(--border2)",
                  borderRadius: "10px",
                  color: "var(--dim)",
                  fontSize: "13.5px",
                }}
                data-hover="color:var(--text);border-color:var(--accent);"
              >
                <i className="ph ph-github-logo" style={{ fontSize: "16px" }}></i>Star on GitHub
              </a>
            </div>
            <div
              style={{
                marginTop: "26px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                fontSize: "11.5px",
                color: "var(--faint)",
                flexWrap: "wrap",
              }}
            >
              <span>MIT licensed</span>
              <span>·</span>
              <span>macOS, Linux, Windows and WSL</span>
              <span>·</span>
              <span>open source on GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
