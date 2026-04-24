"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    q: "Pourquoi pas un freelance classique ?",
    a: "Un bon freelance social media coûte entre 1 500 et 3 000 €/mois pour un volume de contenus moindre, sans veille active 24/7 ni reporting automatisé. Chez GM Communication, l'IA ne prend pas de congés, ne tombe pas malade et produit à un coût incomparable — tout en conservant votre ton et votre identité.",
  },
  {
    q: "Est-ce que ça ne fait pas trop « robot » ?",
    a: "Non, et c'est là toute la différence. L'IA apprend votre registre éditorial, vos mots récurrents, vos sujets interdits. Vous validez chaque post avant publication. Le résultat, c'est votre voix amplifiée par une vitesse machine.",
  },
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "Les premières évolutions sont mesurables à J+30 : engagement, avis Google, cohérence de marque. Les résultats nets (followers, trafic entrant) apparaissent à M+3. Le ROI est généralement atteint entre M+4 et M+6 selon le secteur.",
  },
  {
    q: "Et si ça ne marche pas ?",
    a: "L'offre Starter est sur 3 mois, sans frais de sortie ensuite. Si à M+2 vous n'êtes pas satisfait des résultats, on rembourse le 3e mois. Sans conditions, sans justification.",
  },
  {
    q: "Comment se passe l'onboarding ?",
    a: "Tout démarre par votre audit gratuit (reçu en 15 min). Si vous souhaitez aller plus loin, un appel de 15 min avec l'équipe suffit pour cadrer votre offre, vos réseaux prioritaires et votre ligne éditoriale. Démarrage effectif sous 48h.",
  },
  {
    q: "Mon secteur est-il compatible ?",
    a: "Oui. Le système a été calibré sur des dizaines de secteurs : restauration, e-commerce, immobilier, santé, services B2B, artisanat, coaching. L'audit initial identifie les angles et formats les plus performants pour votre niche.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: listRef, inView: listVisible } = useInView({ threshold: 0.05 });

  return (
    <section id="faq" style={{ background: "var(--bg)", padding: "120px 0", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }} className="grid-1-on-mobile">
          {/* Left */}
          <div ref={headerRef} style={{ position: "sticky", top: 100 }}>
            <div className={`label-mono reveal ${headerVisible ? "visible" : ""}`} style={{ marginBottom: 20 }}>
              — FAQ
            </div>
            <h2
              className={`display reveal reveal-delay-1 ${headerVisible ? "visible" : ""}`}
              style={{ fontSize: "clamp(32px, 3.5vw, 52px)", marginBottom: 24 }}
            >
              Questions
              <br />
              <span className="display-italic" style={{ color: "var(--coral)" }}>fréquentes.</span>
            </h2>
            <p
              className={`reveal reveal-delay-2 ${headerVisible ? "visible" : ""}`}
              style={{ fontSize: 14, fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 32 }}
            >
              Une autre question ? On vous répond sous 24h.
            </p>
            <a
              href="mailto:contact@gm-communication.fr"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "var(--coral)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <span style={{ display: "inline-block", width: 20, height: 1, background: "var(--coral)" }} />
              contact@gm-communication.fr
            </a>
          </div>

          {/* Right — accordion */}
          <div ref={listRef}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`reveal ${listVisible ? "visible" : ""}`}
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "24px 0",
                    textAlign: "left",
                    gap: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      fontWeight: 400,
                      color: open === i ? "var(--text)" : "var(--text-muted)",
                      lineHeight: 1.4,
                      transition: "color 0.2s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      border: "1px solid var(--border-mid)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "background 0.2s, border-color 0.2s",
                      background: open === i ? "var(--coral)" : "transparent",
                      borderColor: open === i ? "var(--coral)" : "var(--border-mid)",
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{
                        color: "var(--text)",
                        transform: open === i ? "rotate(45deg)" : "none",
                        transition: "transform 0.25s",
                      }}
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: open === i ? "600px" : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 300,
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                      paddingBottom: 24,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-1-on-mobile {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
