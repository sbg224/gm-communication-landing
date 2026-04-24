"use client";

const ITEMS = [
  "Audit IA en 15 minutes",
  "PageSpeed Analysis",
  "Google My Business",
  "YouTube Analytics",
  "Instagram Insights",
  "TikTok Performance",
  "Facebook Reach",
  "Rapport PDF automatisé",
  "Stratégie 90 jours",
  "Pipeline n8n actif",
  "WeasyPrint · SendGrid",
  "Claude AI · Anthropic",
];

export default function Marquee() {
  // Double le tableau pour boucle infinie seamless
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-outer" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
