import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — GM Communication",
  description: "Mentions légales du site GM Communication, agence social media IA-First à Toulouse.",
  alternates: { canonical: "https://gm-communication-landing.vercel.app/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: 68 }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 32px" }}>

        <div className="mono-label" style={{ marginBottom: 20 }}>— Mentions légales</div>

        <h1 className="display" style={{ fontSize: "clamp(32px, 4vw, 52px)", marginBottom: 48 }}>
          Mentions légales
        </h1>

        <Section title="Éditeur du site">
          <p><strong>Raison sociale :</strong> 3M SERVICES 31 SASU</p>
          <p><strong>Nom commercial :</strong> GM Communication</p>
          <p><strong>Forme juridique :</strong> Société par Actions Simplifiée Unipersonnelle (SASU)</p>
          <p><strong>Capital social :</strong> [À COMPLÉTER] €</p>
          <p><strong>Siège social :</strong> Toulouse, France</p>
          <p><strong>SIREN :</strong> [À COMPLÉTER]</p>
          <p><strong>SIRET :</strong> [À COMPLÉTER]</p>
          <p><strong>Email :</strong> contact@gm-communication.fr</p>
          <p><strong>Téléphone :</strong> [À COMPLÉTER]</p>
        </Section>

        <Section title="Directeur de la publication">
          <p>Mohamed Bahlouli</p>
          <p><strong>Email :</strong> contact@gm-communication.fr</p>
        </Section>

        <Section title="Hébergement">
          <p><strong>Hébergeur :</strong> Vercel Inc.</p>
          <p><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
          <p><strong>Site :</strong> vercel.com</p>
        </Section>

        <Section title="Propriété intellectuelle">
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, visuels, logo) est la propriété exclusive
            de 3M SERVICES 31 SASU, sauf mention contraire. Toute reproduction, distribution ou
            utilisation sans autorisation écrite préalable est interdite.
          </p>
        </Section>

        <Section title="Limitation de responsabilité">
          <p>
            GM Communication s&apos;efforce de maintenir les informations de ce site à jour et exactes.
            Toutefois, l&apos;éditeur ne saurait être tenu responsable des erreurs, omissions ou résultats
            obtenus suite à une mauvaise utilisation des informations publiées.
          </p>
        </Section>

        <p style={{ marginTop: 48, fontFamily: "var(--font-mono)", fontSize: 11,
          color: "var(--text-dim)", letterSpacing: "0.06em" }}>
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
        </p>

        <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8,
          marginTop: 32, fontFamily: "var(--font-mono)", fontSize: 11,
          color: "var(--coral)", textDecoration: "none", letterSpacing: "0.08em" }}>
          ← Retour à l&apos;accueil
        </a>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid var(--border)" }}>
      <h2 style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 500,
        color: "var(--text)", marginBottom: 16, letterSpacing: "-0.01em" }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8,
        fontSize: 14, fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.7 }}>
        {children}
      </div>
    </section>
  );
}
