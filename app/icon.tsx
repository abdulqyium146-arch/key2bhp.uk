import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Mirrors the actual logo: dark grey bg (#545454), white text, car silhouette style
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 4,
          background: "#545454",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: 11,
            fontWeight: 900,
            letterSpacing: "-0.3px",
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1,
          }}
        >
          K2BHP
        </span>
        <span
          style={{
            color: "#cccccc",
            fontSize: 5.5,
            fontWeight: 600,
            letterSpacing: "0.5px",
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
