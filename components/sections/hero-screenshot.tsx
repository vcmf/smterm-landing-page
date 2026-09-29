export function HeroScreenshot() {
  return (
    <>
      <div
        style={{
          position: "relative",
          zIndex: "1",
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "clamp(24px,4vw,34px) clamp(18px,4vw,28px) 0",
        }}
      >
        <div
          style={{
            position: "relative",
            border: "1px solid var(--border2)",
            borderRadius: "14px",
            overflow: "hidden",
            background: "var(--panel)",
            boxShadow: "0 60px 120px -50px rgba(0,0,0,0.95)",
          }}
        >
          <div
            style={{
              height: "34px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "0 13px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#3a3a40",
                }}
              ></span>
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#3a3a40",
                }}
              ></span>
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#3a3a40",
                }}
              ></span>
            </div>
            <span
              style={{
                fontSize: "10.5px",
                color: "var(--faint)",
                fontFamily: "'JetBrains Mono',monospace",
              }}
            >
              minmux
            </span>
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 10",
              background: "var(--bg)",
            }}
          >
            <img
              src="/media/screenshot.jpg"
              alt="hero shot"
              loading="lazy"
              style={{
                position: "absolute",
                inset: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "16px",
            fontSize: "12px",
            color: "var(--faint)",
          }}
        >
          minmux running four agent sessions in split panes, with the Agents board on the right.
        </div>
      </div>
    </>
  )
}
