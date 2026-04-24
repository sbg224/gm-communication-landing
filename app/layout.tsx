import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "GM Communication — Agence Social Media IA-First",
  description:
    "L'agence de communication entièrement automatisée par IA. Audit PDF gratuit en 15 min. Stratégie, contenu et reporting — orchestrés par intelligence artificielle.",
  keywords: ["agence communication", "social media IA", "marketing digital", "Toulouse", "automatisation contenu"],
  authors: [{ name: "GM Communication — 3M SERVICES 31 SASU" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "GM Communication — Agence Social Media IA-First",
    description: "Audit gratuit en 15 min. Stratégie, contenu et reporting automatisés par IA.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="grain">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
