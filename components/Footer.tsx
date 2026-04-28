"use client";

const LogoMark = ({ size = 40 }: { size?: number }) => (
  <svg viewBox="0 0 252 161" width={size * 1.6} height={size} xmlns="http://www.w3.org/2000/svg">
    <path d="M86.8545 148.708L87.7275 29.2561C87.7275 29.2561 105.921 39.984 129.48 39.984C158.48 39.984 173.29 29.2561 173.29 29.2561"
      stroke="#2A5218" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M175.428 148.984L175.428 44.4639"
      stroke="#6B9B4E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M104.48 25.984V138.367C104.48 143.4 111.019 148.355 128.019 148.984C145.019 148.355 155.48 143.4 155.48 138.367V115.284"
      stroke="#C5A96A" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      {/* Pre-footer CTA */}
      <div style={{ borderBottom: "1px solid var(--border)", padding: "80px 0", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div className="label-mono" style={{ marginBottom: 24 }}>
            — Prêt à automatiser ?
          </div>
          <h2
            className="display"
            style={{ fontSize: "clamp(32px, 5vw, 72px)", marginBottom: 32, lineHeight: 1.05 }}
          >
            Votre présence en ligne,
            <br />
            <span className="display-italic" style={{ color: "var(--coral)" }}>enfin pilotée.</span>
          </h2>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#audit" className="btn-coral">
              Demander mon audit gratuit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#offres" className="btn-outline">
              Voir les offres
            </a>
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 64,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <LogoMark size={36} />
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em" }}>
                  GM <span style={{ color: "var(--coral)" }}>Communication</span>
                </div>
                <div className="label-mono" style={{ marginTop: 2 }}>TOULOUSE · WEB · DIGITAL</div>
              </div>
            </div>
            <p style={{ fontSize: 13, fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 280 }}>
              L&apos;agence de communication entièrement automatisée par IA. Stratégie, contenu et reporting — sans répétition manuelle.
            </p>
            <div style={{ marginTop: 24 }}>
              <div className="label-mono" style={{ marginBottom: 6, color: "var(--text-dim)" }}>3M SERVICES 31 SASU</div>
              <div className="label-mono" style={{ color: "var(--text-dim)" }}>Toulouse, France</div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="label-mono" style={{ marginBottom: 20, color: "var(--coral)" }}>Navigation</div>
            {[
              { label: "Méthode", href: "#comment-ca-marche" },
              { label: "Offres", href: "#offres" },
              { label: "Studio", href: "#pourquoi-nous" },
              { label: "FAQ", href: "#faq" },
              { label: "Audit gratuit", href: "#audit" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 300,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  marginBottom: 12,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Offres */}
          <div>
            <div className="label-mono" style={{ marginBottom: 20, color: "var(--coral)" }}>Offres</div>
            {[
              { label: "Starter — 490 €/mois", href: "#offres" },
              { label: "Growth — 990 €/mois", href: "#offres" },
              { label: "Scale — 2 400 €/mois", href: "#offres" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 300,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  marginBottom: 12,
                  transition: "color 0.2s",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="label-mono" style={{ marginBottom: 20, color: "var(--coral)" }}>Contact</div>
            <a
              href="mailto:contact@gm-communication.fr"
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 300,
                color: "var(--text-muted)",
                textDecoration: "none",
                marginBottom: 12,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--coral)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              contact@gm-communication.fr
            </a>
            <div style={{ fontSize: 13, fontWeight: 300, color: "var(--text-dim)", marginBottom: 24 }}>
              Toulouse, France
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="hr-dark"
          style={{ marginBottom: 24 }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span className="label-mono" style={{ color: "var(--text-dim)" }}>
            © {year} GM Communication · 3M SERVICES 31 SASU
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "Mentions légales", href: "/mentions-legales" },
              { label: "Confidentialité",  href: "/confidentialite"  },
              { label: "CGU",              href: "/cgu"              },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="label-mono"
                style={{
                  color: "var(--text-dim)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
