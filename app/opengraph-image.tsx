import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GM Communication — Agence IA-First · Toulouse";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#F2F0E8",
          padding: "64px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blob vert — haut droite */}
        <div style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(107,155,78,0.18) 0%, transparent 70%)",
          display: "flex",
        }} />
        {/* Blob ocre — bas gauche */}
        <div style={{
          position: "absolute",
          bottom: -80,
          left: -60,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197,169,106,0.14) 0%, transparent 70%)",
          display: "flex",
        }} />

        {/* ── Ligne du haut : logo + nom ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 56 }}>
          {/* Logo mark 3M */}
          <svg
            viewBox="0 0 252 161"
            width={130}
            height={83}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86.8545 148.708L87.7275 29.2561C87.7275 29.2561 105.921 39.984 129.48 39.984C158.48 39.984 173.29 29.2561 173.29 29.2561"
              stroke="#2A5218"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M175.428 148.984L175.428 44.4639"
              stroke="#6B9B4E"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M104.48 25.984V138.367C104.48 143.4 111.019 148.355 128.019 148.984C145.019 148.355 155.48 143.4 155.48 138.367V115.284"
              stroke="#C5A96A"
              strokeWidth="11"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Séparateur vertical */}
          <div style={{
            width: 1,
            height: 48,
            background: "rgba(42,82,24,0.2)",
            display: "flex",
          }} />

          {/* Nom + label */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{
              fontFamily: "sans-serif",
              fontSize: 22,
              fontWeight: 700,
              color: "#080C07",
              letterSpacing: "-0.01em",
            }}>
              GM Communication
            </span>
            <span style={{
              fontFamily: "monospace",
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "rgba(42,82,24,0.50)",
              textTransform: "uppercase",
            }}>
              Toulouse · IA-First · Digital
            </span>
          </div>
        </div>

        {/* ── Titre principal ── */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{
            fontFamily: "serif",
            fontSize: 78,
            fontWeight: 400,
            color: "#080C07",
            lineHeight: 1.05,
            marginBottom: 10,
            display: "flex",
          }}>
            Votre présence en ligne,
          </div>
          <div style={{
            fontFamily: "serif",
            fontSize: 78,
            fontWeight: 400,
            fontStyle: "italic",
            color: "#6B9B4E",
            lineHeight: 1.05,
            marginBottom: 44,
            display: "flex",
          }}>
            enfin pilotée.
          </div>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: 20,
            fontWeight: 300,
            color: "rgba(42,82,24,0.60)",
            lineHeight: 1.6,
            display: "flex",
          }}>
            Audit PDF gratuit · Rapport en 15 min · Stratégie 90 jours automatisée
          </div>
        </div>

        {/* ── Barre du bas ── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 28,
          borderTop: "1px solid rgba(42,82,24,0.14)",
          marginTop: 40,
        }}>
          <span style={{
            fontFamily: "monospace",
            fontSize: 13,
            color: "rgba(42,82,24,0.38)",
            letterSpacing: "0.08em",
          }}>
            gm-communication.fr
          </span>

          {/* Pill CTA */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "#6B9B4E",
            padding: "10px 22px",
            borderRadius: 100,
          }}>
            <div style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#F2F0E8",
              display: "flex",
            }} />
            <span style={{
              fontFamily: "monospace",
              fontSize: 12,
              color: "#F2F0E8",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}>
              Audit gratuit →
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
