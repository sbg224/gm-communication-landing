"use client";

import { useInView } from "@/hooks/useInView";

const advantages = [
  {
    num: "—01",
    title: "L'IA ne prend pas de congés",
    body: "Veille, contenu, avis : votre pipeline tourne 24h/24, 7j/7. Aucun freelance n'offre ça au même prix.",
  },
  {
    num: "—02",
    title: "Budget agence, prix freelance",
    body: "Un bon freelance social media coûte 1 500-3 000 €/mois. Chez nous, vous avez l'équivalent d'une équipe complète à partir de 490 €.",
  },
  {
    num: "—03",
    title: "Reporting automatisé",
    body: "PDF mensuel complet (KPIs, progression, recommandations) livré automatiquement dans votre boîte mail.",
  },
  {
    num: "—04",
    title: "Votre voix, amplifiée",
    body: "L'IA apprend votre ton éditorial. Vous validez chaque post. Humain en coulisses, vitesse machine en façade.",
  },
  {
    num: "—05",
    title: "Résultats à J+30",
    body: "Engagement visible en un mois. ROI atteint entre M+4 et M+6 selon secteur et point de départ.",
  },
  {
    num: "—06",
    title: "Satisfait ou remboursé à M+2",
    body: "Engagement 3 mois sur Starter. Si à M+2 vous n'êtes pas satisfait, on rembourse le 3e mois. Sans conditions.",
  },
];

const stats = [
  { val: "< 15", unit: "min", label: "Délai audit" },
  { val: "0,60", unit: "€", label: "Coût par rapport" },
  { val: "95", unit: "%", label: "Marge brute" },
  { val: "48", unit: "h", label: "Démarrage après signature" },
];

export default function WhyUs() {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: statsRef, inView: statsVisible } = useInView();
  const { ref: gridRef, inView: gridVisible } = useInView({ threshold: 0.05 });

  return (
    <section id="pourquoi-nous" style={{ background: "var(--bg)", padding: "120px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: 64 }}>
          <div className={`label-mono reveal ${headerVisible ? "visible" : ""}`} style={{ marginBottom: 20 }}>
            — Studio
          </div>
          <h2
            className={`display reveal reveal-delay-1 ${headerVisible ? "visible" : ""}`}
            style={{ fontSize: "clamp(36px, 5vw, 64px)", marginBottom: 0 }}
          >
            Ce que l&apos;IA change
            <br />
            <span className="display-italic" style={{ color: "var(--coral)" }}>vraiment.</span>
          </h2>
        </div>

        {/* Stats strip */}
        <div
          ref={statsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            background: "var(--border)",
            gap: 1,
            marginBottom: 64,
            border: "1px solid var(--border)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`reveal ${statsVisible ? "visible" : ""}`}
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: "var(--bg)",
                padding: "32px 28px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: 40,
                  fontWeight: 400,
                  lineHeight: 1,
                  marginBottom: 4,
                  color: i === 0 ? "var(--coral)" : "var(--text)",
                }}
              >
                {s.val}
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 18, color: "var(--text-muted)", marginLeft: 2 }}>{s.unit}</span>
              </div>
              <div className="label-mono">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Advantages grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 1,
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {advantages.map((adv, i) => (
            <div
              key={i}
              className={`reveal ${gridVisible ? "visible" : ""}`}
              style={{
                transitionDelay: `${i * 0.08}s`,
                background: "var(--bg)",
                padding: "36px 32px",
                transition: "background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-2)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg)")}
            >
              <div className="label-mono" style={{ color: "var(--coral)", marginBottom: 16 }}>
                {adv.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "var(--text)",
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {adv.title}
              </h3>
              <p style={{ fontSize: 13, fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.7 }}>
                {adv.body}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div style={{ marginTop: 64, overflowX: "auto" }}>
          <div className="label-mono" style={{ marginBottom: 24, color: "var(--text-muted)" }}>
            Comparatif — Freelance vs Agence classique vs GM Communication
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <th style={{ textAlign: "left", padding: "12px 16px", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", fontWeight: 400 }}>
                  Critère
                </th>
                {["Freelance", "Agence classique", "GM Communication"].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "center",
                      padding: "12px 16px",
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 400,
                      color: h === "GM Communication" ? "var(--navy-light)" : "var(--text-muted)",
                      background: h === "GM Communication" ? "var(--coral-dim)" : "transparent",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Contenus / mois", "8-15", "15-30", "15 → illimité"],
                ["Prix / mois", "1 500-3 000 €", "3 000-8 000 €", "490-2 400 €"],
                ["Veille quotidienne", "Non", "Partielle", "✓ Automatisée"],
                ["Rapport mensuel auto", "Non", "Oui", "✓ PDF auto"],
                ["Disponibilité", "Heures ouvrées", "Heures ouvrées", "✓ 24/7"],
                ["Délai de démarrage", "2-4 semaines", "4-8 semaines", "✓ 48h"],
              ].map(([feat, a, b, c], i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <td style={{ padding: "14px 16px", fontSize: 13, fontWeight: 300, color: "var(--text-muted)" }}>{feat}</td>
                  <td style={{ textAlign: "center", padding: "14px 16px", fontSize: 13, fontWeight: 300, color: "var(--text-muted)" }}>{a}</td>
                  <td style={{ textAlign: "center", padding: "14px 16px", fontSize: 13, fontWeight: 300, color: "var(--text-muted)" }}>{b}</td>
                  <td style={{ textAlign: "center", padding: "14px 16px", fontSize: 13, fontWeight: 500, color: "var(--navy-light)", background: "var(--coral-dim)" }}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
