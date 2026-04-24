"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const API_ROUTE = "/api/audit";

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  site_url: string;
  youtube: string;
  tiktok: string;
  instagram: string;
  facebook: string;
}

const INITIAL: FormData = {
  prenom: "",
  nom: "",
  email: "",
  site_url: "",
  youtube: "",
  tiktok: "",
  instagram: "",
  facebook: "",
};

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  background: "var(--bg)",
  border: "1px solid var(--border-mid)",
  borderRadius: 2,
  padding: "11px 14px",
  fontFamily: "var(--font-sans)",
  fontSize: 13,
  fontWeight: 300,
  color: "var(--text)",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: 9,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: 6,
};

export default function AuditForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { ref: sectionRef, inView: sectionVisible } = useInView();

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_ROUTE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          nom: `${form.prenom} ${form.nom}`.trim(),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Une erreur s'est produite. Réessayez ou écrivez-nous directement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="audit"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
        padding: "120px 0",
      }}
    >
      <div ref={sectionRef} style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}
          className="grid-1-on-mobile"
        >
          {/* ── Copy ── */}
          <div>
            <div className={`mono-label reveal ${sectionVisible ? "visible" : ""}`} style={{ marginBottom: 20 }}>
              — Audit gratuit
            </div>
            <h2
              className={`display reveal reveal-delay-1 ${sectionVisible ? "visible" : ""}`}
              style={{ fontSize: "clamp(32px, 4vw, 56px)", marginBottom: 24 }}
            >
              Votre rapport PDF
              <br />
              <span className="display-i" style={{ color: "var(--coral)" }}>en 15 minutes.</span>
            </h2>
            <p
              className={`reveal reveal-delay-2 ${sectionVisible ? "visible" : ""}`}
              style={{ fontSize: 15, fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 40 }}
            >
              Soumettez votre site et vos réseaux sociaux. Notre IA analyse votre présence
              complète et livre un rapport de 12–15 pages directement dans votre boîte mail.
            </p>

            <ul className={`reveal reveal-delay-3 ${sectionVisible ? "visible" : ""}`} style={{ listStyle: "none", marginBottom: 40 }}>
              {[
                "Scoring de votre présence en ligne (0–100)",
                "Analyse PageSpeed + Google My Business",
                "Audit YouTube, TikTok, Instagram, Facebook",
                "10 recommandations actionnables",
                "Plan d'action sur 90 jours",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14, fontSize: 14, fontWeight: 300, color: "var(--text-muted)" }}>
                  <span style={{ display: "inline-block", width: 16, height: 1, background: "var(--coral)", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            <div
              className={`reveal reveal-delay-4 ${sectionVisible ? "visible" : ""}`}
              style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 20px", border: "1px solid rgba(231,76,60,0.2)", background: "var(--coral-dim)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--coral)", letterSpacing: "0.08em" }}>
                100% GRATUIT · AUCUNE CARTE · AUCUN ENGAGEMENT
              </span>
            </div>
          </div>

          {/* ── Form ── */}
          <div className={`reveal reveal-delay-2 ${sectionVisible ? "visible" : ""}`}>
            {submitted ? (
              <div style={{ border: "1px solid rgba(231,76,60,0.25)", background: "var(--coral-dim)", padding: "60px 40px", textAlign: "center" }}>
                <div style={{ width: 48, height: 48, border: "1px solid var(--coral)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="1.5">
                    <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="display" style={{ fontSize: 28, marginBottom: 12, color: "var(--coral)" }}>
                  Pipeline déclenché
                </h3>
                <p style={{ fontSize: 14, fontWeight: 300, color: "var(--text-muted)" }}>
                  Votre rapport arrive à{" "}
                  <span style={{ color: "var(--text)" }}>{form.email}</span>
                  <br />dans les 15 prochaines minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: "var(--bg-3)", border: "1px solid var(--border)", padding: "40px 36px" }}>
                <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 500, color: "var(--text)", marginBottom: 28, letterSpacing: "-0.01em" }}>
                  Obtenir mon audit gratuit
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>

                  {/* Prénom + Nom */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={labelStyle}>Prénom *</label>
                      <input type="text" required value={form.prenom} onChange={set("prenom")} placeholder="Marie" style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "var(--coral)")}
                        onBlur={e => (e.target.style.borderColor = "var(--border-mid)")} />
                    </div>
                    <div>
                      <label style={labelStyle}>Nom *</label>
                      <input type="text" required value={form.nom} onChange={set("nom")} placeholder="Dupont" style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "var(--coral)")}
                        onBlur={e => (e.target.style.borderColor = "var(--border-mid)")} />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" required value={form.email} onChange={set("email")} placeholder="marie@entreprise.fr" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "var(--coral)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border-mid)")} />
                  </div>

                  {/* Site URL */}
                  <div>
                    <label style={labelStyle}>Site web</label>
                    <input type="text" value={form.site_url} onChange={set("site_url")} placeholder="https://votre-site.fr" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "var(--coral)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border-mid)")} />
                  </div>

                  {/* Séparateur réseaux */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "4px 0" }}>
                    <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)" }}>
                      Réseaux (optionnels)
                    </span>
                    <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                  </div>

                  {/* YouTube + TikTok */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={labelStyle}>
                        <span style={{ color: "#FF0000" }}>▶</span> YouTube
                      </label>
                      <input type="text" value={form.youtube} onChange={set("youtube")} placeholder="www.youtube.com/@votre-chaine" style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "var(--coral)")}
                        onBlur={e => (e.target.style.borderColor = "var(--border-mid)")} />
                    </div>
                    <div>
                      <label style={labelStyle}>
                        <span style={{ color: "#010101" }}>♪</span> TikTok
                      </label>
                      <input type="text" value={form.tiktok} onChange={set("tiktok")} placeholder="www.tiktok.com/@votre-compte" style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "var(--coral)")}
                        onBlur={e => (e.target.style.borderColor = "var(--border-mid)")} />
                    </div>
                  </div>

                  {/* Instagram + Facebook */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={labelStyle}>
                        <span style={{ color: "#E1306C" }}>◈</span> Instagram
                      </label>
                      <input type="text" value={form.instagram} onChange={set("instagram")} placeholder="instagram.com/votre-compte" style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "var(--coral)")}
                        onBlur={e => (e.target.style.borderColor = "var(--border-mid)")} />
                    </div>
                    <div>
                      <label style={labelStyle}>
                        <span style={{ color: "#1877F2" }}>f</span> Facebook
                      </label>
                      <input type="text" value={form.facebook} onChange={set("facebook")} placeholder="facebook.com/votre-page" style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "var(--coral)")}
                        onBlur={e => (e.target.style.borderColor = "var(--border-mid)")} />
                    </div>
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#E74C3C", letterSpacing: "0.04em", marginBottom: 16, padding: "10px 14px", background: "var(--coral-dim)", border: "1px solid rgba(231,76,60,0.25)" }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-coral"
                  style={{ width: "100%", justifyContent: "center", opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
                >
                  {loading ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        style={{ animation: "spin-slow 1s linear infinite" }}>
                        <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" />
                      </svg>
                      Pipeline en cours…
                    </>
                  ) : (
                    <>
                      Recevoir mon audit gratuit
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

                <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.06em", marginTop: 14, textAlign: "center", lineHeight: 1.6 }}>
                  VOS DONNÉES SONT TRAITÉES UNIQUEMENT POUR GÉNÉRER VOTRE RAPPORT.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-1-on-mobile { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 480px) {
          .form-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
