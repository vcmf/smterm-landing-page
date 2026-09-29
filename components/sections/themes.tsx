export function Themes() {
  return (
    <>
      <div
        id="themes"
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
          Themes and fonts
        </div>
        <h2
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontWeight: "700",
            fontSize: "clamp(26px,3.6vw,44px)",
            lineHeight: "1.14",
            letterSpacing: "-0.025em",
            margin: "0 0 18px",
            maxWidth: "24ch",
          }}
        >
          Pick the one that makes you want to open it.
        </h2>
        <p
          style={{
            maxWidth: "58ch",
            margin: "0 0 40px",
            fontSize: "15px",
            color: "var(--dim)",
            lineHeight: "1.68",
          }}
        >
          Minimal Dark, Tokyo Night, Catppuccin and Gruvbox, with bundled fonts and ligatures. Font
          family, size, line height and cursor blink all live in the settings file.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "16px",
          }}
        >
          <div
            style={{
              border: "1px solid var(--border2)",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#0f0f12",
            }}
          >
            <div
              style={{
                padding: "14px",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "11px",
                lineHeight: "1.9",
              }}
            >
              <div style={{ color: "#4ec97a" }}>
                ~/minmux <span style={{ color: "#5c5c64" }}>$</span>{" "}
                <span style={{ color: "#e8e8ea" }}>claude</span>
              </div>
              <div style={{ color: "#9a9aa2" }}>
                ● reading <span style={{ color: "#6aa0f0" }}>session.ts</span>
              </div>
              <div>
                <span style={{ color: "#4ec97a" }}>+6</span>{" "}
                <span style={{ color: "#f0625f" }}>−2</span>{" "}
                <span style={{ color: "#e0a94a" }}>1 waiting</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 14px",
                borderTop: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span style={{ display: "flex", gap: "4px" }}>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#4ec97a",
                  }}
                ></span>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#e0a94a",
                  }}
                ></span>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#6aa0f0",
                  }}
                ></span>
              </span>
              <span style={{ fontSize: "11.5px", color: "#e8e8ea", flex: "1" }}>Minimal Dark</span>
              <span
                style={{
                  fontSize: "9.5px",
                  color: "#4ec97a",
                  border: "1px solid rgba(78,201,122,0.4)",
                  borderRadius: "4px",
                  padding: "1px 5px",
                }}
              >
                default
              </span>
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#16161e",
            }}
          >
            <div
              style={{
                padding: "14px",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "11px",
                lineHeight: "1.9",
              }}
            >
              <div style={{ color: "#9ece6a" }}>
                ~/minmux <span style={{ color: "#565f89" }}>$</span>{" "}
                <span style={{ color: "#c0caf5" }}>claude</span>
              </div>
              <div style={{ color: "#7982a9" }}>
                ● reading <span style={{ color: "#7aa2f7" }}>session.ts</span>
              </div>
              <div>
                <span style={{ color: "#9ece6a" }}>+6</span>{" "}
                <span style={{ color: "#f7768e" }}>−2</span>{" "}
                <span style={{ color: "#e0af68" }}>1 waiting</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 14px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span style={{ display: "flex", gap: "4px" }}>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#9ece6a",
                  }}
                ></span>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#e0af68",
                  }}
                ></span>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#7aa2f7",
                  }}
                ></span>
              </span>
              <span style={{ fontSize: "11.5px", color: "#c0caf5", flex: "1" }}>Tokyo Night</span>
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#181825",
            }}
          >
            <div
              style={{
                padding: "14px",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "11px",
                lineHeight: "1.9",
              }}
            >
              <div style={{ color: "#a6e3a1" }}>
                ~/minmux <span style={{ color: "#6c7086" }}>$</span>{" "}
                <span style={{ color: "#cdd6f4" }}>claude</span>
              </div>
              <div style={{ color: "#a6adc8" }}>
                ● reading <span style={{ color: "#89b4fa" }}>session.ts</span>
              </div>
              <div>
                <span style={{ color: "#a6e3a1" }}>+6</span>{" "}
                <span style={{ color: "#f38ba8" }}>−2</span>{" "}
                <span style={{ color: "#f9e2af" }}>1 waiting</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 14px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span style={{ display: "flex", gap: "4px" }}>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#a6e3a1",
                  }}
                ></span>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#f9e2af",
                  }}
                ></span>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#89b4fa",
                  }}
                ></span>
              </span>
              <span style={{ fontSize: "11.5px", color: "#cdd6f4", flex: "1" }}>Catppuccin</span>
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#282828",
            }}
          >
            <div
              style={{
                padding: "14px",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "11px",
                lineHeight: "1.9",
              }}
            >
              <div style={{ color: "#b8bb26" }}>
                ~/minmux <span style={{ color: "#7c6f64" }}>$</span>{" "}
                <span style={{ color: "#ebdbb2" }}>claude</span>
              </div>
              <div style={{ color: "#a89984" }}>
                ● reading <span style={{ color: "#83a598" }}>session.ts</span>
              </div>
              <div>
                <span style={{ color: "#b8bb26" }}>+6</span>{" "}
                <span style={{ color: "#fb4934" }}>−2</span>{" "}
                <span style={{ color: "#fabd2f" }}>1 waiting</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 14px",
                borderTop: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span style={{ display: "flex", gap: "4px" }}>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#b8bb26",
                  }}
                ></span>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#fabd2f",
                  }}
                ></span>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#83a598",
                  }}
                ></span>
              </span>
              <span style={{ fontSize: "11.5px", color: "#ebdbb2", flex: "1" }}>Gruvbox</span>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
            gap: "18px",
            alignItems: "center",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            background: "var(--panel)",
            padding: "clamp(20px,3vw,26px)",
          }}
        >
          <div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "11px" }}
            >
              <i
                className="ph-fill ph-file-code"
                style={{ fontSize: "19px", color: "var(--blue)" }}
              ></i>
              <span style={{ fontSize: "15.5px", fontWeight: "600" }}>
                One settings file, no hidden state
              </span>
            </div>
            <p
              style={{
                margin: "0 0 12px",
                fontSize: "13.5px",
                color: "var(--dim)",
                lineHeight: "1.65",
              }}
            >
              Settings live in a single JSON file that is the source of truth. Edit it by hand or
              through the in-app panel. A watcher re-applies your changes as you save.
            </p>
            <div
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "11px",
                color: "var(--faint)",
                lineHeight: "1.9",
              }}
            >
              <div>macOS and Linux · ~/.config/minmux/settings.json</div>
              <div>Windows · %APPDATA%\minmux\settings.json</div>
            </div>
          </div>
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "10px",
              background: "var(--bg)",
              padding: "16px",
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "11.5px",
              lineHeight: "1.95",
              whiteSpace: "pre",
              overflowX: "auto",
            }}
          >
            <span style={{ color: "var(--dim)" }}>{"{"}</span>
            <span style={{ color: "var(--blue)" }}>"font"</span>
            <span style={{ color: "var(--dim)" }}>: {"{"}</span>{" "}
            <span style={{ color: "var(--blue)" }}>"family"</span>
            <span style={{ color: "var(--dim)" }}>:</span>{" "}
            <span style={{ color: "var(--accent)" }}>"JetBrains Mono"</span>
            <span style={{ color: "var(--dim)" }}>,</span>
            <span style={{ color: "var(--blue)" }}>"size"</span>
            <span style={{ color: "var(--dim)" }}>:</span>{" "}
            <span style={{ color: "var(--amber)" }}>13</span>
            <span style={{ color: "var(--dim)" }}>,</span>
            <span style={{ color: "var(--blue)" }}>"ligatures"</span>
            <span style={{ color: "var(--dim)" }}>:</span>{" "}
            <span style={{ color: "var(--amber)" }}>true</span>{" "}
            <span style={{ color: "var(--dim)" }}>{"}"},</span>
            <span style={{ color: "var(--blue)" }}>"theme"</span>
            <span style={{ color: "var(--dim)" }}>:</span>{" "}
            <span style={{ color: "var(--accent)" }}>"minimal-dark"</span>
            <span style={{ color: "var(--dim)" }}>,</span>
            <span style={{ color: "var(--blue)" }}>"cursorBlink"</span>
            <span style={{ color: "var(--dim)" }}>:</span>{" "}
            <span style={{ color: "var(--amber)" }}>true</span>
            <span style={{ color: "var(--dim)" }}>,</span>
            <span style={{ color: "var(--blue)" }}>"scrollback"</span>
            <span style={{ color: "var(--dim)" }}>:</span>{" "}
            <span style={{ color: "var(--amber)" }}>5000</span>
            <span style={{ color: "var(--dim)" }}>{"}"}</span>
          </div>
        </div>
      </div>
    </>
  )
}
