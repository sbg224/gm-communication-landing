"use client";

import { useInView } from "@/hooks/useInView";

const plans = [
  {
    name: "Starter",
    price: "490",
    tagline: "Poser les bases.",
    target: "TPE · artisan · solo-entrepreneur",
    commitment: "3 mois",
    featured: false,
    features: [
      "1 réseau social géré",
      "15 contenus / mois",
      "Captions + hashtags + visuels",
      "Fiche Google Business optimisée",
      "1 rapport PDF mensuel",
      "Support email < 24h",
    ],
  },
  {
    name: "Growth",
    price: "990",
    tagline: "Accélérer vraiment.",
    target: "PME · cabinet · marque naissante",
    commitment: "6 mois",
    featured: true,
    features: [
      "3 réseaux sociaux gérés",
      "30 contenus / mois",
      "Veille quotidienne sectorielle",
      "Stratégie éditoriale hebdo",
      "Fiche Google + réponses avis auto",
      "Espace client + validation 1 clic",
      "Rapport mensuel + 1 Zoom / mois",
      "Support prioritaire < 4h",
    ],
  },
  {
    name: "Scale",
    price: "2 400",
    tagline: "Délégation totale.",
    target: "Entreprises 20+ salariés",
    commitment: "12 mois",
    featured: false,
    features: [
      "5 réseaux sociaux gérés",
      "Contenu illimité",
      "Agents IA 24/7 (avis, messages)",
      "Veille concurrentielle avancée",
      "Dashboard KPIs live + prévisionnel",
      "Gestion ads Meta / LinkedIn",
      "Rapport hebdo + visio mensuelle 1h",
      "Slack dédié < 1h",
    ],
  },
];

const addons = [
  { name: "Réseau supplémentaire", price: "+190 €/mois" },
  { name: "Shooting photo/vidéo", price: "450 €" },
  { name: "Site vitrine IA (5 pages)", price: "1 290 €" },
  { name: "Refonte identité visuelle", price: "890 €" },
  { name: "Audit approfondi on-demand", price: "290 €" },
];

export default function Pricing() {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: cardsRef, inView: cardsVisible } = useInView({ threshold: 0.05 });

  return (
    <section
      id="offres"
      style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "120px 0" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: 72, maxWidth: 640 }}>
          <div className={`label-mono reveal ${headerVisible ? "visible" : ""}`} style={{ marginBottom: 20 }}>
            — Offres
          </div>
          <h2
            className={`display reveal reveal-delay-1 ${headerVisible ? "visible" : ""}`}
            style={{ fontSize: "clamp(36px, 5vw, 64px)", marginBottom: 20 }}
          >
            Un tarif clair.
            <br />
            <span className="display-italic" style={{ color: "var(--coral)" }}>Zéro surprise.</span>
          </h2>
          <p
            className={`reveal reveal-delay-2 ${headerVisible ? "visible" : ""}`}
            style={{ fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.7, fontSize: 15 }}
          >
            Chaque client démarre par un audit gratuit. L&apos;IA recommande l&apos;offre adaptée à votre situation.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "var(--border)", marginBottom: 32 }}
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal ${cardsVisible ? "visible" : ""}`}
              style={{
                transitionDelay: `${i * 0.12}s`,
                background: plan.featured ? "var(--bg-3)" : "var(--bg-2)",
                padding: "48px 36px",
                position: "relative",
                borderTop: plan.featured ? "2px solid var(--coral)" : "2px solid transparent",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {plan.featured && (
                <div
                  className="label-mono"
                  style={{
                    position: "absolute",
                    top: -1,
                    left: 36,
                    background: "var(--coral)",
                    color: "#fff",
                    padding: "4px 12px",
                    fontSize: 9,
                  }}
                >
                  Offre phare
                </div>
              )}

              {/* Plan header */}
              <div style={{ marginBottom: 32 }}>
                <div className="label-mono" style={{ marginBottom: 16, color: "var(--text-dim)" }}>
                  {plan.commitment} · {plan.target}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: plan.featured ? "italic" : "normal",
                    fontSize: 28,
                    fontWeight: 400,
                    color: plan.featured ? "var(--coral)" : "var(--text)",
                    marginBottom: 8,
                  }}
                >
                  {plan.name}
                </h3>
                <p style={{ fontSize: 13, fontWeight: 300, color: "var(--text-muted)", marginBottom: 20 }}>
                  {plan.tagline}
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 56,
                      fontWeight: 400,
                      lineHeight: 1,
                      color: "var(--text)",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>
                    €/mois
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="hr-dark" style={{ marginBottom: 28 }} />

              {/* Features */}
              <ul style={{ listStyle: "none", marginBottom: 40, flex: 1 }}>
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 12,
                      fontSize: 13,
                      fontWeight: 300,
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={plan.featured ? "#e74c3c" : "#6b6b7a"} strokeWidth="1.5" style={{ flexShrink: 0, marginTop: 1 }}>
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#audit"
                className={plan.featured ? "btn-coral" : "btn-outline"}
                style={{ justifyContent: "center", fontSize: 13 }}
              >
                Commencer en {plan.name}
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div style={{ marginTop: 48 }}>
          <div className="label-mono" style={{ marginBottom: 20, color: "var(--text-dim)" }}>
            Options complémentaires
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {addons.map((a) => (
              <div
                key={a.name}
                style={{
                  border: "1px solid var(--border)",
                  padding: "10px 18px",
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  background: "var(--bg)",
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 300, color: "var(--text-muted)" }}>{a.name}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--coral)" }}>{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
