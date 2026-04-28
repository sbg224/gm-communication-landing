"use client";
import { useState, useEffect } from "react";

const LogoMark = () => (
  <svg viewBox="0 0 252 161" width="54" height="34" xmlns="http://www.w3.org/2000/svg">
    <path d="M86.8545 148.708L87.7275 29.2561C87.7275 29.2561 105.921 39.984 129.48 39.984C158.48 39.984 173.29 29.2561 173.29 29.2561"
      stroke="#2A5218" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M175.428 148.984L175.428 44.4639"
      stroke="#6B9B4E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M104.48 25.984V138.367C104.48 143.4 111.019 148.355 128.019 148.984C145.019 148.355 155.48 143.4 155.48 138.367V115.284"
      stroke="#C5A96A" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Méthode", href: "#comment-ca-marche" },
    { label: "Offres", href: "#offres" },
    { label: "Résultats", href: "#pourquoi-nous" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(242,240,232,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(28,28,46,0.09)" : "1px solid transparent",
      transition: "all 0.35s",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <LogoMark />
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em" }}>
              GM <span style={{ color: "var(--coral)" }}>Communication</span>

            </div>
            <div className="mono-label" style={{ marginTop: 1 }}>Toulouse · Digital · IA</div>
          </div>
        </a>

        <div className="hidden md:flex" style={{ alignItems: "center", gap: 36 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 400, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--text)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a href="#audit" className="btn-coral" style={{ fontSize: 12, padding: "9px 20px" }}>
            Audit gratuit →
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/> : <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ background: "var(--bg-3)", borderTop: "1px solid var(--border)", padding: "20px 28px" }}>
          {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: "block", fontSize: 14, color: "var(--text-muted)", textDecoration: "none", padding: "10px 0", borderBottom: "1px solid var(--border)" }}>{l.label}</a>)}
          <a href="#audit" onClick={() => setOpen(false)} className="btn-coral" style={{ marginTop: 16, display: "inline-flex", fontSize: 13 }}>Audit gratuit →</a>
        </div>
      )}
    </nav>
  );
}
