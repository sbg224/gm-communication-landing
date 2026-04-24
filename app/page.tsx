import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import AuditForm from "@/components/AuditForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
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
