import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — GM Communication",
  description: "Politique de confidentialité et traitement des données personnelles — GM Communication.",
  alternates: { canonical: "https://gm-communication-landing.vercel.app/confidentialite" },
};

export default function Confidentialite() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: 68 }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 32px" }}>

        <div className="mono-label" style={{ marginBottom: 20 }}>— Confidentialité</div>

        <h1 className="display" style={{ fontSize: "clamp(32px, 4vw, 52px)", marginBottom: 48 }}>
          Politique de confidentialité
        </h1>

        <Section title="Responsable du traitement">
          <p>3M SERVICES 31 SASU — GM Communication</p>
          <p>Toulouse, France</p>
          <p><strong>Contact :</strong> contact@gm-communication.fr</p>
        </Section>

        <Section title="Données collectées">
          <p>Lors de la demande d&apos;audit gratuit, nous collectons :</p>
          <ul style={{ paddingLeft: 20, marginTop: 8 }}>
            <li>Prénom et nom</li>
            <li>Adresse email</li>
            <li>URL du site web (optionnel)</li>
            <li>URLs des réseaux sociaux (optionnel)</li>
          </ul>
          <p style={{ marginTop: 8 }}>Aucune donnée bancaire n&apos;est collectée sur ce site.</p>
        </Section>

        <Section title="Finalité du traitement">
          <p>Les données collectées sont utilisées exclusivement pour :</p>
          <ul style={{ paddingLeft: 20, marginTop: 8 }}>
            <li>Générer et envoyer votre rapport d&apos;audit PDF</li>
            <li>Vous recontacter dans le cadre de votre demande</li>
          </ul>
          <p style={{ marginTop: 8 }}>
            Aucune donnée n&apos;est transmise à des tiers à des fins commerciales.
          </p>
        </Section>

        <Section title="Base légale">
          <p>
            Le traitement est fondé sur votre consentement explicite (article 6.1.a du RGPD),
            exprimé lors de la soumission du formulaire d&apos;audit.
          </p>
        </Section>

        <Section title="Durée de conservation">
          <p>
            Vos données sont conservées pendant 12 mois à compter de votre demande,
            puis supprimées automatiquement, sauf obligation légale contraire.
          </p>
        </Section>

        <Section title="Vos droits">
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul style={{ paddingLeft: 20, marginTop: 8 }}>
            <li><strong>Accès</strong> — consulter les données vous concernant</li>
            <li><strong>Rectification</strong> — corriger des données inexactes</li>
            <li><strong>Suppression</strong> — demander l&apos;effacement de vos données</li>
            <li><strong>Portabilité</strong> — recevoir vos données dans un format structuré</li>
            <li><strong>Opposition</strong> — vous opposer à un traitement</li>
          </ul>
          <p style={{ marginTop: 8 }}>
            Pour exercer ces droits : <strong>contact@gm-communication.fr</strong>
          </p>
          <p>
            Vous pouvez également introduire une réclamation auprès de la{" "}
            <strong>CNIL</strong> (cnil.fr).
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            Ce site n&apos;utilise pas de cookies de tracking ou publicitaires.
            Aucun outil d&apos;analyse tiers (Google Analytics, etc.) n&apos;est actif.
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
