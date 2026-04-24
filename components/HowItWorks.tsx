"use client";

import { useInView } from "@/hooks/useInView";

const steps = [
  {
    num: "01",
    title: "Tu soumets ton URL",
    body: "Site web, Instagram, LinkedIn, TikTok ou fiche Google. En 30 secondes le pipeline se déclenche automatiquement.",
    tag: "IG · LN · TikTok · Google",
    time: "~30 sec",
  },
  {
    num: "02",
    title: "L'IA analyse tout",
    body: "Notre agent scrape métriques, concurrents, tendances. Il score ta présence de 0 à 100 par canal et par critère.",
    tag: "Claude API · OpenClaw",
    time: "~12 min",
  },
  {
    num: "03",
    title: "Tu reçois ton rapport PDF",
    body: "12 à 15 pages brandées : forces, faiblesses, benchmark concurrents, 10 recommandations + plan 90 jours.",
    tag: "WeasyPrint · Gmail API",
    time: "~3 min",
  },
  {
    num: "04",
    title: "On s'occupe de tout",
    body: "Si tu veux continuer : création de contenu, publication multi-réseaux, reporting mensuel automatisé — en continu.",
    tag: "Starter · Growth · Scale",
    time: "∞",
  },
];

export default function HowItWorks() {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: gridRef, inView: gridVisible } = useInView({ threshold: 0.05 });

  return (
    <section id="comment-ca-marche" style={{ background: "var(--bg)", padding: "120px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{ marginBottom: 80, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}
        >
          <div>
            <div className={`label-mono reveal ${headerVisible ? "visible" : ""}`} style={{ marginBottom: 20 }}>
              — Méthode
            </div>
            <h2
              className={`display reveal reveal-delay-1 ${headerVisible ? "visible" : ""}`}
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              De l&apos;URL au rapport<br />
              <span className="display-italic" style={{ color: "var(--coral)" }}>en 15 minutes.</span>
            </h2>
          </div>
          <p
            className={`reveal reveal-delay-2 ${headerVisible ? "visible" : ""}`}
            style={{ fontWeight: 300, color: "var(--text-muted)", maxWidth: 320, lineHeight: 1.7, fontSize: 15 }}
          >
            Pas de formulaire interminable, pas d&apos;appel commercial. Tu soumets une URL, le pipeline fait le reste.
          </p>
        </div>

        {/* Steps grid */}
        <div
          ref={gridRef}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1, border: "1px solid var(--border)", background: "var(--border)" }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className={`reveal ${gridVisible ? "visible" : ""}`}
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: "var(--bg)",
                padding: "40px 32px",
                position: "relative",
                transition: "background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-2)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg)")}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: 72,
                  lineHeight: 1,
                  color: "var(--border-mid)",
                  position: "absolute",
                  top: 24,
                  right: 24,
                  userSelect: "none",
                }}
              >
                {step.num}
              </div>

              {/* Time badge */}
              <div
                className="label-mono"
                style={{
                  display: "inline-block",
                  padding: "4px 10px",
                  border: "1px solid var(--border)",
                  marginBottom: 24,
                  color: "var(--coral)",
                  borderColor: "rgba(231,76,60,0.25)",
                  background: "var(--coral-dim)",
                }}
              >
                {step.time}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "var(--text)",
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 14, fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                {step.body}
              </p>
              <div className="label-mono" style={{ color: "var(--text-dim)" }}>
                {step.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 56, textAlign: "center" }}>
          <a href="#audit" className="btn-coral">
            Tester gratuitement →
          </a>
        </div>
      </div>
    </section>
  );
}
