"use client";
import { useEffect, useRef, useState } from "react";

const platforms = [
  { label: "PageSpeed",         icon: "⚡", color: "#F59E0B" },
  { label: "Google My Business",icon: "📍", color: "#34A853" },
  { label: "YouTube",           icon: "▶",  color: "#FF0000" },
  { label: "Instagram",         icon: "◈",  color: "#E1306C" },
  { label: "TikTok",            icon: "♪",  color: "#010101" },
  { label: "Facebook",          icon: "f",  color: "#1877F2" },
];

const STATS = [
  { val: 15,   suffix: " min",  label: "Délai de livraison",  prefix: "< " },
  { val: 6,    suffix: " src",  label: "Données analysées",   prefix: "" },
  { val: 95,   suffix: " %",    label: "Marge brute",         prefix: "" },
  { val: 0.60, suffix: " €",    label: "Coût par audit",      prefix: "" },
];

// ── Counter hook ─────────────────────────────────────────────
function useCounter(target: number, duration = 1400, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const isDecimal = target % 1 !== 0;
    const steps = 60;
    const step  = target / steps;
    let current = 0;
    let frame   = 0;
    const interval = setInterval(() => {
      frame++;
      current = Math.min(step * frame, target);
      setValue(isDecimal ? parseFloat(current.toFixed(2)) : Math.round(current));
      if (frame >= steps) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [active, target, duration]);
  return value;
}

// ── Magnetic button ───────────────────────────────────────────
function MagneticBtn({ children, className, href, strength = 0.35 }: {
  children: React.ReactNode;
  className?: string;
  href: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <div
      ref={ref}
      className="magnetic-wrap"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}
    >
      <a href={href} className={className}>
        {children}
      </a>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────
export default function Hero() {
  const blobTR  = useRef<HTMLDivElement>(null);
  const blobBL  = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [headVisible,  setHeadVisible]  = useState(false);
  const headRef = useRef<HTMLDivElement>(null);

  // Clip-reveal headings
  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setHeadVisible(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Counter trigger
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStatsVisible(true); obs.disconnect(); }
    }, { threshold: 0.6 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Parallax blobs
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (blobTR.current) blobTR.current.style.transform = `translateY(${y * 0.18}px)`;
      if (blobBL.current) blobBL.current.style.transform = `translateY(${y * 0.1}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const c0 = useCounter(STATS[0].val, 1200, statsVisible);
  const c1 = useCounter(STATS[1].val, 900,  statsVisible);
  const c2 = useCounter(STATS[2].val, 1400, statsVisible);
  const c3 = useCounter(STATS[3].val, 1100, statsVisible);
  const counters = [c0, c1, c2, c3];

  return (
    <section style={{ background: "var(--bg)", paddingTop: 68, overflow: "hidden", position: "relative" }}>

      {/* Blobs parallaxe */}
      <div ref={blobTR} style={{ position: "absolute", top: -80, right: -100, width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle, rgba(231,76,60,0.12) 0%, transparent 68%)", pointerEvents: "none", willChange: "transform" }}/>
      <div ref={blobBL} style={{ position: "absolute", bottom: -60, left: -80,  width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(242,237,228,0.9) 0%, transparent 70%)",  pointerEvents: "none", willChange: "transform" }}/>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 28px 64px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 60, alignItems: "center" }} className="hero-grid-resp">

          {/* ── Left ── */}
          <div ref={headRef}>

            {/* Eyebrow pill */}
            <div className={`reveal ${headVisible ? "visible" : ""}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--coral-dim)", border: "1px solid rgba(231,76,60,0.15)", borderRadius: 100, padding: "6px 14px", marginBottom: 32 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--coral)", animation: "pulse-coral 2s ease-in-out infinite", display: "inline-block" }}/>
              <span className="mono-label" style={{ color: "var(--coral)", fontSize: 9 }}>Agence IA-First · Toulouse · Pipeline actif</span>
            </div>

            {/* H1 — clip-path reveal */}
            <h1 style={{ fontSize: "clamp(40px,5.5vw,76px)", marginBottom: 28 }}>
              <span className={`clip-reveal ${headVisible ? "visible" : ""}`}>
                <span className="clip-reveal-inner display" style={{ color: "var(--text)", display: "block", marginBottom: 6 }}>
                  Votre présence en ligne,
                </span>
              </span>
              <span className={`clip-reveal clip-reveal-d1 ${headVisible ? "visible" : ""}`}>
                <span className="clip-reveal-inner display-i" style={{ color: "var(--coral)", display: "block" }}>
                  enfin pilotée.
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className={`reveal reveal-d2 ${headVisible ? "visible" : ""}`}
              style={{ fontSize: 16, fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 500, marginBottom: 40 }}>
              On analyse votre site, vos réseaux sociaux et votre fiche Google — puis on génère une stratégie sur 90 jours et du contenu mensuel automatisé. Tout ça en 15 minutes, sans démarche.
            </p>

            {/* CTAs magnétiques */}
            <div className={`reveal reveal-d3 ${headVisible ? "visible" : ""}`}
              style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 48 }}>
              <MagneticBtn href="#audit" className="btn-coral">
                Obtenir mon audit gratuit
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </MagneticBtn>
              <MagneticBtn href="#offres" className="btn-outline" strength={0.2}>
                Voir les offres
              </MagneticBtn>
            </div>

            {/* Platform pills */}
            <div className={`reveal reveal-d4 ${headVisible ? "visible" : ""}`}
              style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {platforms.map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, padding: "6px 12px", background: "var(--bg-3)", border: "1px solid var(--border)", borderRadius: 100, fontSize: 11, fontWeight: 400, color: "var(--text-muted)", transition: "border-color 0.2s, transform 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = p.color; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                  <span style={{ fontSize: 12, color: p.color }}>{p.icon}</span>
                  {p.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — pipeline card ── */}
          <div className={`card reveal reveal-d2 ${headVisible ? "visible" : ""}`}
            style={{ padding: "28px 24px", borderRadius: 8 }}
            onMouseMove={e => {
              const el = e.currentTarget;
              const rect = el.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 8;
              const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 8;
              el.style.transform = `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-2px)`;
            }}
            onMouseLeave={e => { e.currentTarget.style.transform = "perspective(600px) rotateX(0) rotateY(0) translateY(0)"; }}>

            {/* Mac dots */}
            <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }}/>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }}/>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }}/>
              <span className="mono-label" style={{ marginLeft: 8, fontSize: 9 }}>pipeline-audit · actif</span>
            </div>

            {/* Steps */}
            {[
              { icon: "🔗", label: "URL soumise",      sub: "site + réseaux",        done: true  },
              { icon: "⚡", label: "PageSpeed",         sub: "score mobile : 78",     done: true  },
              { icon: "📍", label: "Google Places",     sub: "4.6★ · 124 avis",       done: true  },
              { icon: "🤖", label: "Analyse IA",        sub: "Claude · en cours…",    active: true },
              { icon: "📄", label: "PDF en génération", sub: "WeasyPrint…",           pending: true },
              { icon: "📧", label: "Email livré",       sub: "SendGrid · en attente", pending: true },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < 5 ? "1px solid var(--border)" : "none" }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: s.active ? "var(--coral-dim)" : s.done ? "#F0FAF4" : "var(--bg-2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{s.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 500, color: s.active ? "var(--coral)" : s.pending ? "var(--text-dim)" : "var(--text)" }}>{s.label}</div>
                  <div style={{ fontSize: 10, color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>{s.sub}</div>
                </div>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: s.done ? "#22C55E" : s.active ? "var(--coral)" : "var(--border-mid)", animation: s.active ? "pulse-coral 1.5s ease-in-out infinite" : "none", flexShrink: 0 }}/>
              </div>
            ))}

            <div style={{ marginTop: 16, padding: "10px 14px", background: "var(--bg-2)", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Durée estimée :</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: "var(--coral)" }}>~15 minutes</span>
              <span style={{ fontSize: 11, color: "var(--text-dim)", fontFamily: "var(--font-mono)", marginLeft: "auto" }}>0,60 € / audit</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Stats band avec compteurs ── */}
      <div ref={statsRef} style={{ background: "var(--navy)", padding: "20px 28px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, textAlign: "center" }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, color: i === 0 ? "var(--coral)" : "#F5F5F0", lineHeight: 1 }}>
                {s.prefix}{counters[i]}{s.suffix}
              </div>
              <div className="mono-label" style={{ color: "rgba(245,245,240,0.4)", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid-resp { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
