import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "#F59E0B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#000000",
            fontSize: 82,
            fontWeight: 900,
            letterSpacing: "-3px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          K2
        </span>
      </div>
    ),
    { ...size }
  );
}
