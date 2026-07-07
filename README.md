# GM Communication — Landing page & audit IA

Site vitrine de **GM Communication**, agence de social media management "IA-first" (3M SERVICES 31 SASU). One-page marketing avec un vrai levier de génération de leads : un formulaire d'audit gratuit qui déclenche un pipeline d'analyse automatisé et renvoie un rapport PDF par email en 15 minutes.

---

## Stack technique

| Catégorie | Techno | Usage dans le projet |
|---|---|---|
| Framework | **Next.js 16** (App Router) | Route Handler pour l'API, Metadata API pour le SEO, Edge Middleware pour le rate limiting |
| UI | **React 18.3** | Composants indépendants, aucun state global (chaque section gère son propre state local) |
| Langage | **TypeScript 5** | Typage strict sur le formulaire, la route API et le middleware |
| Style | **Tailwind CSS 3.4** | Utilitaires de layout/grid/spacing uniquement — les couleurs et la typographie passent par un design system en variables CSS custom (`globals.css`), pas par la config Tailwind |
| Animations | **IntersectionObserver custom** (`hooks/useInView.ts`) + classes CSS `reveal` | Apparitions au scroll, sans librairie tierce |
| UX | **CustomCursor** | Curseur personnalisé sur desktop |
| Automatisation | **n8n** (webhook externe) | Reçoit les soumissions du formulaire, orchestre le pipeline d'analyse IA (PageSpeed, Google My Business, réseaux sociaux) et l'envoi du rapport PDF |
| Lint | **ESLint 9** + `eslint-config-next` | Qualité de code |
| Déploiement | **Vercel** | Hébergement + variables d'environnement serveur |

---

## Fonctionnalité phare : l'audit gratuit automatisé

C'est le seul point dynamique du site, pensé comme un vrai tunnel d'acquisition :

1. **`components/AuditForm.tsx`** — formulaire client (prénom, nom, email, site web, YouTube, TikTok, Instagram, Facebook), état de chargement et de succès gérés en local
2. **`app/api/audit/route.ts`** — Route Handler qui valide la requête puis la relaie vers un webhook **n8n**
3. **n8n** déclenche le pipeline d'analyse (scoring de présence en ligne, PageSpeed, Google My Business, audit des réseaux sociaux) et génère un **rapport PDF de 12 à 15 pages**, envoyé par email dans les 15 minutes

Ce flux illustre une architecture **Next.js en simple proxy sécurisé** vers une automatisation externe — le site ne fait ni scraping ni génération IA lui-même, il protège et transmet.

---

## Sécurité — deux couches distinctes

- **Edge Middleware dédié** (`proxy.ts`, matcher `/api/audit`) : rate limiting IP en amont de la route (3 requêtes / 10 min), avant même que le Route Handler ne s'exécute
- **Validation dans la route elle-même** (`app/api/audit/route.ts`), en profondeur :
  - Plafond de taille de payload (10 Ko via l'en-tête `content-length`, avant même de parser le JSON)
  - Regex email obligatoire
  - **Allowlist stricte des champs transmis** (`ALLOWED_FIELDS`) — impossible d'injecter un champ arbitraire dans le payload envoyé au webhook
  - Troncature systématique à 300 caractères par champ
- **Secret côté serveur uniquement** : `N8N_WEBHOOK_URL` n'est jamais préfixée `NEXT_PUBLIC_`, donc invisible côté client

---

## SEO & contenu

- **JSON-LD `ProfessionalService`** injecté directement dans `app/page.tsx` (nom, adresse Toulouse, zone de service France, types de prestations, raison sociale 3M SERVICES 31 SASU)
- Metadata complète dans `layout.tsx` : OpenGraph, Twitter Card, canonical, mots-clés
- `sitemap.ts`, `robots.ts`, image Open Graph générée dynamiquement (`opengraph-image.tsx`)
- Grille tarifaire éditorialisée directement dans `components/Pricing.tsx` : Starter (490€, engagement 3 mois), Growth (990€, engagement 6 mois, offre mise en avant), Scale (2400€, engagement 12 mois)

---

## Architecture

```
app/
  api/audit/route.ts       # Route Handler — validation + proxy vers n8n
  page.tsx                 # Assemble les sections + JSON-LD schema.org
  layout.tsx                # Metadata SEO globale
  mentions-legales/, cgu/, confidentialite/
  sitemap.ts / robots.ts / opengraph-image.tsx

components/
  Navbar, Hero, Marquee, HowItWorks, Pricing, WhyUs, AuditForm, FAQ, Footer
  CustomCursor.tsx

hooks/
  useInView.ts              # Détection scroll via IntersectionObserver

proxy.ts                    # Edge Middleware — rate limiting sur /api/audit
```

Ordre d'affichage des sections (`app/page.tsx`) : `Navbar → Hero → Marquee → HowItWorks → Pricing → WhyUs → AuditForm → FAQ → Footer`.

---

## Installation locale

```bash
npm install
cp .env.local.example .env.local   # renseigner N8N_WEBHOOK_URL
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### Variables d'environnement

| Variable | Description |
|---|---|
| `N8N_WEBHOOK_URL` | URL du webhook n8n qui reçoit les soumissions du formulaire d'audit. Absente → la route API répond en erreur 500. |

---

## Scripts

| Commande | Action |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Lance le build de production |
| `npm run lint` | Analyse ESLint |

---

## Roadmap

- [ ] Remplacer le domaine `gm-communication-landing.vercel.app` (encore utilisé dans `metadataBase` et le JSON-LD) par le domaine définitif `gm-communication.fr`, déjà utilisé comme adresse de contact
- [ ] Tests automatisés sur la route `/api/audit` (validation, allowlist, plafond de payload)
- [ ] CI GitHub Actions (lint + build à chaque PR)
- [ ] Migrer le rate limiting du Middleware (`Map` en mémoire) vers un store partagé si déploiement multi-instances
- [ ] Monitoring des échecs webhook n8n (actuellement seulement loggés en erreur 502 côté client)

---

## Déploiement

Déployé sur **Vercel**.

---

*Projet développé et maintenu par [MSB](https://github.com/sbg224).*
