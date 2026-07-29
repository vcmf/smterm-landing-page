export function BackgroundFx() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: "0",
          zIndex: "0",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "radial-gradient(ellipse 90% 55% at 50% -8%, rgba(255,255,255,0.055), transparent 70%)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 42%, color-mix(in srgb, var(--bg) 88%, transparent) 100%)",
          }}
        ></div>

        <canvas
          id="dc-cells"
          style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
        ></canvas>
      </div>
    </>
  )
}
