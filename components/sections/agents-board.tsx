export function AgentsBoard() {
  return (
    <>
      <div
        id="agents"
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
            border: "1px solid var(--border2)",
            borderRadius: "16px",
            background: "color-mix(in srgb, var(--panel) 90%, transparent)",
            overflow: "hidden",
          }}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))" }}
          >
            <div
              style={{ padding: "clamp(26px,4vw,44px)", borderRight: "1px solid var(--border)" }}
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
                Agents board
              </div>
              <h2
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontWeight: "700",
                  fontSize: "clamp(24px,2.9vw,36px)",
                  lineHeight: "1.14",
                  letterSpacing: "-0.025em",
                  margin: "0 0 18px",
                }}
              >
                Run <span style={{ color: "var(--accent)" }}>claude</span> in a pane and the board
                lights up.
              </h2>
              <p
                style={{
                  margin: "0 0 20px",
                  fontSize: "14.5px",
                  color: "var(--dim)",
                  lineHeight: "1.66",
                }}
              >
                A live view of the Claude Code agents you launched inside smterm. The root session,
                its sub-agents, what each one is doing, its working directory, and the files it
                touched. Click one to jump to its pane.
              </p>
              <p
                style={{
                  margin: "0 0 26px",
                  fontSize: "13.5px",
                  color: "var(--dim)",
                  lineHeight: "1.66",
                }}
              >
                It reads Claude Code's own hook events, so there is no setup and no global config to
                edit. smterm only wires the panes it launches, which also means agents you started
                somewhere else stay out of the board.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--dim)",
                  }}
                >
                  <i
                    className="ph-bold ph-check"
                    style={{ fontSize: "14px", color: "var(--accent)" }}
                  ></i>
                  Zero setup, no global hooks to install
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--dim)",
                  }}
                >
                  <i
                    className="ph-bold ph-check"
                    style={{ fontSize: "14px", color: "var(--accent)" }}
                  ></i>
                  Sub-agents shown under the session that spawned them
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--dim)",
                  }}
                >
                  <i
                    className="ph-bold ph-check"
                    style={{ fontSize: "14px", color: "var(--accent)" }}
                  ></i>
                  Recent files per agent, so you know where to look
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "clamp(22px,3.4vw,34px)",
                background: "var(--bg)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  fontWeight: "600",
                }}
              >
                <span>Agents</span>
                <span style={{ color: "var(--dim)" }}>3 active</span>
              </div>

              <div
                style={{
                  border: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
                  borderRadius: "11px",
                  background: "var(--panel)",
                  padding: "14px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "9px" }}
                >
                  <i
                    className="ph-fill ph-robot"
                    style={{ fontSize: "15px", color: "var(--accent)" }}
                  ></i>
                  <span style={{ fontSize: "12.5px", fontWeight: "600", flex: "1" }}>claude</span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "10.5px",
                      color: "var(--accent)",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        animation: "pulse 1.6s ease-in-out infinite",
                      }}
                    ></span>
                    working
                  </span>
                </div>
                <div style={{ fontSize: "11.5px", color: "var(--dim)", marginBottom: "4px" }}>
                  editing session handling, running the auth suite
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "10.5px",
                    color: "var(--faint)",
                    marginBottom: "10px",
                  }}
                >
                  ~/api-refactor
                </div>
                <div
                  style={{
                    height: "3px",
                    borderRadius: "2px",
                    background: "var(--elev)",
                    overflow: "hidden",
                    marginBottom: "11px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      background: "var(--accent)",
                      animation: "barfill 6s ease-in-out infinite alternate",
                    }}
                  ></div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                    paddingLeft: "11px",
                    borderLeft: "1px dashed var(--border2)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "11px",
                      color: "var(--dim)",
                    }}
                  >
                    <span style={{ color: "var(--faint)" }}>↳</span>
                    <i className="ph ph-flow-arrow" style={{ fontSize: "12px" }}></i>
                    <span style={{ flex: "1" }}>writing tests</span>
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        animation: "pulse 1.6s ease-in-out infinite",
                      }}
                    ></span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "11px",
                      color: "var(--dim)",
                    }}
                  >
                    <span style={{ color: "var(--faint)" }}>↳</span>
                    <i className="ph ph-flow-arrow" style={{ fontSize: "12px" }}></i>
                    <span style={{ flex: "1" }}>reading the prisma schema</span>
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--faint)",
                      }}
                    ></span>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px" }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "9.5px",
                      color: "var(--dim)",
                      border: "1px solid var(--border)",
                      borderRadius: "5px",
                      padding: "2px 6px",
                    }}
                  >
                    session.ts
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "9.5px",
                      color: "var(--dim)",
                      border: "1px solid var(--border)",
                      borderRadius: "5px",
                      padding: "2px 6px",
                    }}
                  >
                    tokens.ts
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "9.5px",
                      color: "var(--dim)",
                      border: "1px solid var(--border)",
                      borderRadius: "5px",
                      padding: "2px 6px",
                    }}
                  >
                    auth.test.ts
                  </span>
                </div>
              </div>

              <div
                style={{
                  border: "1px solid color-mix(in srgb, var(--amber) 40%, transparent)",
                  borderRadius: "11px",
                  background: "var(--panel)",
                  padding: "14px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "9px" }}
                >
                  <i
                    className="ph-fill ph-robot"
                    style={{ fontSize: "15px", color: "var(--amber)" }}
                  ></i>
                  <span style={{ fontSize: "12.5px", fontWeight: "600", flex: "1" }}>claude</span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "10.5px",
                      color: "var(--amber)",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--amber)",
                      }}
                    ></span>
                    waiting for input
                  </span>
                </div>
                <div style={{ fontSize: "11.5px", color: "var(--dim)", marginBottom: "4px" }}>
                  asking before it runs the migration
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "10.5px",
                    color: "var(--faint)",
                  }}
                >
                  ~/api-refactor/db
                </div>
              </div>

              <div
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "11px",
                  background: "var(--panel)",
                  padding: "14px",
                  opacity: ".8",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "9px" }}
                >
                  <i
                    className="ph-fill ph-robot"
                    style={{ fontSize: "15px", color: "var(--faint)" }}
                  ></i>
                  <span
                    style={{
                      fontSize: "12.5px",
                      fontWeight: "600",
                      flex: "1",
                      color: "var(--dim)",
                    }}
                  >
                    claude
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "10.5px",
                      color: "var(--faint)",
                    }}
                  >
                    <i className="ph-bold ph-check" style={{ fontSize: "11px" }}></i>done
                  </span>
                </div>
                <div style={{ fontSize: "11.5px", color: "var(--faint)", marginBottom: "4px" }}>
                  docs rewritten, 4 files changed
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "10.5px",
                    color: "var(--faint)",
                  }}
                >
                  ~/api-refactor/docs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
