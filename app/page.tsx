import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import AuditForm from "@/components/AuditForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GM Communication",
  description:
    "Agence de communication IA-First. Stratégie, contenu et reporting automatisés par intelligence artificielle.",
  url: "https://gm-communication-landing.vercel.app",
  logo: "https://gm-communication-landing.vercel.app/logo-mark.svg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toulouse",
    addressRegion: "Occitanie",
    addressCountry: "FR",
  },
  areaServed: "FR",
  serviceType: [
    "Social Media Management",
    "Marketing Digital",
    "Audit IA",
    "Création de contenu",
  ],
  priceRange: "€€",
  email: "contact@gm-communication.fr",
  legalName: "3M SERVICES 31 SASU",
  knowsLanguage: "fr",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Marquee />
      <HowItWorks />
      <Pricing />
      <WhyUs />
      <AuditForm />
      <FAQ />
      <Footer />
    </main>
  );
}
