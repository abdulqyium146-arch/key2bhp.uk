import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: "#F59E0B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#000000",
            fontSize: 15,
            fontWeight: 900,
            letterSpacing: "-0.5px",
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
