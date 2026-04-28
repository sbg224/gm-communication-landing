import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GM Communication — Agence Social Media IA-First";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#F2F0E8",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Vert blob */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(107,155,78,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6B9B4E" }} />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(42,82,24,0.5)",
            }}
          >
            AGENCE IA-FIRST · TOULOUSE
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 400,
            color: "#080C07",
            lineHeight: 1.05,
            marginBottom: 8,
            fontFamily: "serif",
          }}
        >
          GM Communication
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 400,
            color: "#6B9B4E",
            fontStyle: "italic",
            fontFamily: "serif",
            marginBottom: 40,
          }}
        >
          Agence Social Media IA-First.
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 300,
            color: "rgba(42,82,24,0.6)",
            fontFamily: "sans-serif",
          }}
        >
          Audit PDF gratuit · Rapport en 15 min · Pipeline n8n + Claude AI
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 13,
              color: "rgba(42,82,24,0.4)",
              letterSpacing: "0.08em",
            }}
          >
            gm-communication-landing.vercel.app
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              border: "1.5px solid #6B9B4E",
              borderRadius: "50%",
            }}
          >
            <span style={{ color: "#6B9B4E", fontSize: 18, fontStyle: "italic", fontFamily: "serif" }}>
              gm
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
