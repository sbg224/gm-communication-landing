import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGU — GM Communication",
  description: "Conditions Générales d'Utilisation du site GM Communication.",
  alternates: { canonical: "https://gm-communication-landing.vercel.app/cgu" },
};

export default function CGU() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: 68 }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 32px" }}>

        <div className="mono-label" style={{ marginBottom: 20 }}>— CGU</div>

        <h1 className="display" style={{ fontSize: "clamp(32px, 4vw, 52px)", marginBottom: 48 }}>
          Conditions générales d&apos;utilisation
        </h1>

        <Section title="Objet">
          <p>
            Les présentes CGU régissent l&apos;utilisation du site{" "}
            <strong>gm-communication-landing.vercel.app</strong>, édité par 3M SERVICES 31 SASU
            (ci-après « GM Communication »). En accédant au site, vous acceptez sans réserve les
            présentes conditions.
          </p>
        </Section>

        <Section title="Accès au site">
          <p>
            Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès internet.
            GM Communication se réserve le droit de suspendre ou modifier l&apos;accès au site sans
            préavis, notamment pour maintenance.
          </p>
        </Section>

        <Section title="Audit gratuit">
          <p>
            Le service d&apos;audit gratuit est proposé sans engagement. En soumettant le formulaire,
            l&apos;utilisateur accepte de recevoir un rapport PDF à l&apos;adresse email fournie.
            Ce service est limité à un audit par entreprise. GM Communication se réserve le droit
            de refuser toute demande abusive ou frauduleuse.
          </p>
        </Section>

        <Section title="Propriété intellectuelle">
          <p>
            L&apos;ensemble des éléments du site (textes, visuels, logo, code) sont protégés par le
            droit de la propriété intellectuelle et appartiennent à 3M SERVICES 31 SASU.
            Toute reproduction sans autorisation écrite est strictement interdite.
          </p>
        </Section>

        <Section title="Responsabilité">
          <p>
            GM Communication met tout en œuvre pour assurer l&apos;exactitude des informations
            publiées, mais ne saurait être tenu responsable des erreurs, de l&apos;indisponibilité
            du site ou de l&apos;utilisation des informations fournies.
          </p>
          <p>
            Les liens externes présents sur le site pointent vers des ressources tierces sur
            lesquelles GM Communication n&apos;a aucun contrôle.
          </p>
        </Section>

        <Section title="Droit applicable">
          <p>
            Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux
            compétents de <strong>Toulouse</strong> seront seuls habilités à statuer.
          </p>
        </Section>

        <Section title="Modification des CGU">
          <p>
            GM Communication se réserve le droit de modifier les présentes CGU à tout moment.
            Les modifications prennent effet dès leur publication sur le site.
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
