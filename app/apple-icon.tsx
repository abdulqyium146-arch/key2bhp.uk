import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Mirrors real logo style at Apple home screen size
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 24,
          background: "#545454",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: 58,
            fontWeight: 900,
            letterSpacing: "-2px",
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1,
          }}
        >
          K2BHP
        </span>
        <span
          style={{
            color: "#cccccc",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "3px",
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1,
          }}
        >
          LOCKSMITH
        </span>
      </div>
    ),
    { ...size }
  );
}
