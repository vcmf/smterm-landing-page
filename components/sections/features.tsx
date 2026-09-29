export function Features() {
  return (
    <>
      <div
        id="features"
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
          Features
        </div>
        <h2
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontWeight: "700",
            fontSize: "clamp(26px,3.6vw,44px)",
            lineHeight: "1.14",
            letterSpacing: "-0.025em",
            margin: "0 0 18px",
            maxWidth: "26ch",
          }}
        >
          A normal terminal, plus the panels you keep wishing for.
        </h2>
        <p
          style={{
            maxWidth: "60ch",
            margin: "0 0 46px",
            fontSize: "15px",
            color: "var(--dim)",
            lineHeight: "1.68",
          }}
        >
          Nothing here gets in the way of the shell. The panels sit next to it and answer one
          question: what happened, not just that something did.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "18px",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "14px",
              background: "var(--panel)",
              padding: "26px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "11px" }}
              >
                <i
                  className="ph-fill ph-bell-ringing"
                  style={{ fontSize: "19px", color: "var(--amber)" }}
                ></i>
                <span style={{ fontSize: "15.5px", fontWeight: "600" }}>
                  Notifications when a session needs you
                </span>
              </div>
              <p
                style={{ margin: "0", fontSize: "13.5px", color: "var(--dim)", lineHeight: "1.65" }}
              >
                Working, waiting for input, or done. It shows as a dot on the tab and in the
                sidebar, and a background pane that wants you sends a native OS notification.
              </p>
            </div>

            <div
              style={{
                marginTop: "auto",
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                overflow: "hidden",
                background: "var(--bg)",
              }}
            >
              <img
                src="/media/feat-notifications.png"
                alt="feat notifications"
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
              border: "1px solid var(--border)",
              borderRadius: "14px",
              background: "var(--panel)",
              padding: "26px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "11px" }}
              >
                <i
                  className="ph-fill ph-git-diff"
                  style={{ fontSize: "19px", color: "var(--accent)" }}
                ></i>
                <span style={{ fontSize: "15.5px", fontWeight: "600" }}>Changes panel</span>
              </div>
              <p
                style={{ margin: "0", fontSize: "13.5px", color: "var(--dim)", lineHeight: "1.65" }}
              >
                A git diff for the focused pane's working directory, with per-file counts and the
                full unified diff. Branch and ahead/behind sit in the status bar.
              </p>
            </div>
            <div
              style={{
                marginTop: "auto",
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 10",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                overflow: "hidden",
                background: "var(--bg)",
              }}
            >
              <img
                src="/media/feat-changes.jpg"
                alt="feat changes"
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
              border: "1px solid var(--border)",
              borderRadius: "14px",
              background: "var(--panel)",
              padding: "26px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "11px" }}
              >
                <i
                  className="ph-fill ph-globe"
                  style={{ fontSize: "19px", color: "var(--blue)" }}
                ></i>
                <span style={{ fontSize: "15.5px", fontWeight: "600" }}>SSH sessions</span>
              </div>
              <p
                style={{ margin: "0", fontSize: "13.5px", color: "var(--dim)", lineHeight: "1.65" }}
              >
                Your ~/.ssh/config hosts in one picker, recent first. Open one in a tab or a split,
                and splits stay on the host. It runs your own ssh, so keys, agents and 2FA prompts
                work as usual.
              </p>
            </div>
            <div
              style={{
                marginTop: "auto",
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 11",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                overflow: "hidden",
                background: "var(--bg)",
              }}
            >
              <img
                src="/media/feat-ssh.jpg"
                alt="Connect to host picker listing hosts from ~/.ssh/config"
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
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "18px",
          }}
        >
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "14px",
              background: "var(--panel)",
              padding: "26px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "11px" }}
              >
                <i
                  className="ph-fill ph-folder-open"
                  style={{ fontSize: "19px", color: "var(--blue)" }}
                ></i>
                <span style={{ fontSize: "15.5px", fontWeight: "600" }}>Files browser</span>
              </div>
              <p
                style={{ margin: "0", fontSize: "13.5px", color: "var(--dim)", lineHeight: "1.65" }}
              >
                A per-folder listing rooted at the pane's directory, loaded as you open folders.
                Changed files carry git badges, folders get tinted. Click one to read it inline or
                open it in your editor.
              </p>
            </div>
            <div
              style={{
                marginTop: "auto",
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 11",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                overflow: "hidden",
                background: "var(--bg)",
              }}
            >
              <img
                src="/media/feat-files.jpg"
                alt="feat files"
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
              border: "1px solid var(--border)",
              borderRadius: "14px",
              background: "var(--panel)",
              padding: "26px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "11px" }}
              >
                <i
                  className="ph-fill ph-columns"
                  style={{ fontSize: "19px", color: "var(--text)" }}
                ></i>
                <span style={{ fontSize: "15.5px", fontWeight: "600" }}>A real multiplexer</span>
              </div>
              <p
                style={{ margin: "0", fontSize: "13.5px", color: "var(--dim)", lineHeight: "1.65" }}
              >
                Tabs and resizable splits. Split a pane and it keeps your shell and your directory.
                Quit, reopen, and your layout comes back.
              </p>
            </div>
            <div
              style={{
                marginTop: "auto",
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 11",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                overflow: "hidden",
                background: "var(--bg)",
              }}
            >
              <img
                src="/media/feat-sessions.jpg"
                alt="feat sessions"
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
              border: "1px solid var(--border)",
              borderRadius: "14px",
              background: "var(--panel)",
              padding: "26px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "11px" }}
              >
                <i
                  className="ph-fill ph-command"
                  style={{ fontSize: "19px", color: "var(--text)" }}
                ></i>
                <span style={{ fontSize: "15.5px", fontWeight: "600" }}>Command palette</span>
              </div>
              <p
                style={{ margin: "0", fontSize: "13.5px", color: "var(--dim)", lineHeight: "1.65" }}
              >
                One shortcut for new sessions, splits, theme switching and settings. Copy, paste and
                find in scrollback work the way you expect.
              </p>
            </div>
            <div
              style={{
                marginTop: "auto",
                border: "1px solid var(--border2)",
                borderRadius: "10px",
                background: "var(--elev)",
                overflow: "hidden",
                boxShadow: "0 16px 34px -18px rgba(0,0,0,0.8)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                  padding: "10px 12px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <i
                  className="ph ph-magnifying-glass"
                  style={{ fontSize: "13px", color: "var(--dim)" }}
                ></i>
                <span style={{ fontSize: "11.5px", color: "var(--dim)" }}>
                  split
                  <span
                    style={{
                      background: "var(--text)",
                      color: "var(--text)",
                      animation: "blink 1.1s step-end infinite",
                    }}
                  >
                    ▏
                  </span>
                </span>
                <div style={{ flex: "1" }}></div>
                <span
                  style={{
                    fontSize: "9.5px",
                    color: "var(--faint)",
                    border: "1px solid var(--border)",
                    borderRadius: "4px",
                    padding: "1px 5px",
                  }}
                >
                  ⌘K
                </span>
              </div>
              <div style={{ padding: "5px 0", fontSize: "11.5px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "9px",
                    padding: "6px 12px",
                    background: "color-mix(in srgb, var(--accent) 12%, transparent)",
                    borderLeft: "2px solid var(--accent)",
                  }}
                >
                  <i
                    className="ph ph-columns"
                    style={{ fontSize: "13px", color: "var(--accent)" }}
                  ></i>
                  <span style={{ flex: "1" }}>Split pane right</span>
                  <span style={{ color: "var(--faint)", fontSize: "10px" }}>⏎</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "9px",
                    padding: "6px 12px",
                    color: "var(--dim)",
                  }}
                >
                  <i className="ph ph-rows" style={{ fontSize: "13px" }}></i>
                  <span style={{ flex: "1" }}>Split pane down</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "9px",
                    padding: "6px 12px",
                    color: "var(--dim)",
                  }}
                >
                  <i className="ph ph-palette" style={{ fontSize: "13px" }}></i>
                  <span style={{ flex: "1" }}>Switch theme</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
