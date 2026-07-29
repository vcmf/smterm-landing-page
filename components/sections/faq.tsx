export function Faq() {
  return (
    <>
      <div
        id="faq"
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
          FAQ
        </div>
        <h2
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontWeight: "700",
            fontSize: "clamp(26px,3.6vw,44px)",
            lineHeight: "1.14",
            letterSpacing: "-0.025em",
            margin: "0 0 40px",
            maxWidth: "22ch",
          }}
        >
          Questions I get asked.
        </h2>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          <details style={{ borderBottom: "1px solid var(--border)", padding: "0" }}>
            <summary
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "22px 4px",
                cursor: "pointer",
                listStyle: "none",
                fontSize: "15.5px",
                fontWeight: "500",
                color: "var(--text)",
              }}
            >
              <span style={{ flex: "1", textWrap: "pretty" }}>
                How is this different from tmux or a normal terminal?
              </span>
              <i
                className="ph ph-plus"
                style={{ fontSize: "15px", color: "var(--faint)", flexShrink: "0" }}
              ></i>
            </summary>
            <p
              style={{
                margin: "0",
                padding: "0 clamp(4px,6vw,60px) 24px 4px",
                fontSize: "14px",
                color: "var(--dim)",
                lineHeight: "1.7",
                textWrap: "pretty",
              }}
            >
              smterm is a normal terminal first. Tabs, resizable splits, your own shell, your own
              directory. What it adds is a small set of panels that answer what happened while an
              agent was working: Changes, Files, and the Agents board. Nothing replaces the shell
              you already use.
            </p>
          </details>
          <details style={{ borderBottom: "1px solid var(--border)", padding: "0" }}>
            <summary
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "22px 4px",
                cursor: "pointer",
                listStyle: "none",
                fontSize: "15.5px",
                fontWeight: "500",
                color: "var(--text)",
              }}
            >
              <span style={{ flex: "1", textWrap: "pretty" }}>
                Does it actually work on Windows?
              </span>
              <i
                className="ph ph-plus"
                style={{ fontSize: "15px", color: "var(--faint)", flexShrink: "0" }}
              ></i>
            </summary>
            <p
              style={{
                margin: "0",
                padding: "0 clamp(4px,6vw,60px) 24px 4px",
                fontSize: "14px",
                color: "var(--dim)",
                lineHeight: "1.7",
                textWrap: "pretty",
              }}
            >
              Yes, on Windows and inside WSL, alongside macOS and Linux. That was the reason I
              started it, since my work moves between the three. Windows and WSL are the newest of
              the three targets, so they have seen less real-world use so far.
            </p>
          </details>
          <details style={{ borderBottom: "1px solid var(--border)", padding: "0" }}>
            <summary
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "22px 4px",
                cursor: "pointer",
                listStyle: "none",
                fontSize: "15.5px",
                fontWeight: "500",
                color: "var(--text)",
              }}
            >
              <span style={{ flex: "1", textWrap: "pretty" }}>Which agents does it support?</span>
              <i
                className="ph ph-plus"
                style={{ fontSize: "15px", color: "var(--faint)", flexShrink: "0" }}
              ></i>
            </summary>
            <p
              style={{
                margin: "0",
                padding: "0 clamp(4px,6vw,60px) 24px 4px",
                fontSize: "14px",
                color: "var(--dim)",
                lineHeight: "1.7",
                textWrap: "pretty",
              }}
            >
              The Agents board reads Claude Code hook events, so Claude Code is what it understands
              today. The code underneath makes no assumption about which agent is running, so other
              agents can plug in later. Any agent CLI still runs fine in a pane, it just will not
              show up on the board.
            </p>
          </details>
          <details style={{ borderBottom: "1px solid var(--border)", padding: "0" }}>
            <summary
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "22px 4px",
                cursor: "pointer",
                listStyle: "none",
                fontSize: "15.5px",
                fontWeight: "500",
                color: "var(--text)",
              }}
            >
              <span style={{ flex: "1", textWrap: "pretty" }}>
                Do I have to configure hooks or edit a global config?
              </span>
              <i
                className="ph ph-plus"
                style={{ fontSize: "15px", color: "var(--faint)", flexShrink: "0" }}
              ></i>
            </summary>
            <p
              style={{
                margin: "0",
                padding: "0 clamp(4px,6vw,60px) 24px 4px",
                fontSize: "14px",
                color: "var(--dim)",
                lineHeight: "1.7",
                textWrap: "pretty",
              }}
            >
              No. smterm wires the panes it launches itself, so there is nothing to install and no
              global config to edit. It also means an agent you started in some other terminal will
              not appear on the board.
            </p>
          </details>
          <details style={{ borderBottom: "1px solid var(--border)", padding: "0" }}>
            <summary
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "22px 4px",
                cursor: "pointer",
                listStyle: "none",
                fontSize: "15.5px",
                fontWeight: "500",
                color: "var(--text)",
              }}
            >
              <span style={{ flex: "1", textWrap: "pretty" }}>Where do settings live?</span>
              <i
                className="ph ph-plus"
                style={{ fontSize: "15px", color: "var(--faint)", flexShrink: "0" }}
              ></i>
            </summary>
            <p
              style={{
                margin: "0",
                padding: "0 clamp(4px,6vw,60px) 24px 4px",
                fontSize: "14px",
                color: "var(--dim)",
                lineHeight: "1.7",
                textWrap: "pretty",
              }}
            >
              In one JSON file that is the source of truth: ~/.config/smterm/settings.json on macOS
              and Linux, %APPDATA%\smterm\settings.json on Windows. Edit it by hand or through the
              in-app panel. A watcher re-applies changes as you save.
            </p>
          </details>
          <details style={{ borderBottom: "1px solid var(--border)", padding: "0" }}>
            <summary
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "22px 4px",
                cursor: "pointer",
                listStyle: "none",
                fontSize: "15.5px",
                fontWeight: "500",
                color: "var(--text)",
              }}
            >
              <span style={{ flex: "1", textWrap: "pretty" }}>Is it free, and can I fork it?</span>
              <i
                className="ph ph-plus"
                style={{ fontSize: "15px", color: "var(--faint)", flexShrink: "0" }}
              ></i>
            </summary>
            <p
              style={{
                margin: "0",
                padding: "0 clamp(4px,6vw,60px) 24px 4px",
                fontSize: "14px",
                color: "var(--dim)",
                lineHeight: "1.7",
                textWrap: "pretty",
              }}
            >
              It is MIT licensed and open source. Clone it, read it, fork it, ship your own version.
              If it turns out useful to you, a star helps other people find it.
            </p>
          </details>
        </div>
        <div
          style={{
            marginTop: "26px",
            display: "flex",
            alignItems: "center",
            gap: "11px",
            fontSize: "13px",
            color: "var(--dim)",
            flexWrap: "wrap",
          }}
        >
          <i
            className="ph ph-chat-circle-dots"
            style={{ fontSize: "16px", color: "var(--faint)" }}
          ></i>
          Something else on your mind?{" "}
          <a href="https://github.com/vcmf/smterm/issues">Open an issue.</a>
          <span style={{ color: "var(--faint)" }}>
            What you did, what happened, and what you expected is enough.
          </span>
        </div>
      </div>
    </>
  )
}
