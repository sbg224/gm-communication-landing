# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Démarrage serveur de développement (port 3000)
npm run build    # Build de production
npm run start    # Démarrage en production
npm run lint     # ESLint via next lint
```

## Architecture

Landing page one-page pour **GM Communication** — agence social media IA-first. Next.js 15 App Router, TypeScript, Tailwind CSS.

### Flux de données

Le seul point d'entrée dynamique est le formulaire d'audit :

1. `components/AuditForm.tsx` — formulaire client POST vers `/api/audit`
2. `app/api/audit/route.ts` — route Next.js qui proxie la soumission vers un webhook n8n
3. n8n déclenche le pipeline IA et envoie le rapport PDF par mail

Variable d'environnement requise : `N8N_WEBHOOK_URL` (absente = erreur 500).

### Structure des composants

`app/page.tsx` assemble les sections dans l'ordre d'affichage :
`Navbar → Hero → HowItWorks → Pricing → WhyUs → AuditForm → FAQ → Footer`

Chaque section est un composant autonome dans `components/`. Aucune gestion d'état global — les composants sont indépendants les uns des autres.

### Système de design

Le design system repose **uniquement sur des variables CSS** définies dans `app/globals.css` (tokens). Tailwind sert principalement pour le layout et les utilitaires de spacing/grid. Ne pas mélanger les deux systèmes pour les couleurs et la typographie — utiliser les variables CSS (`var(--coral)`, `var(--text-muted)`, etc.) et les classes utilitaires globales.

**Classes globales clés** (définies dans `globals.css`, pas dans Tailwind) :
- `.display` / `.display-i` — titres serif (Instrument Serif)
- `.mono-label` / `.label-mono` — étiquettes monospace (Space Mono)
- `.reveal` + `.reveal-delay-{1-5}` — animations scroll-triggered via IntersectionObserver
- `.btn-coral` / `.btn-outline` — boutons
- `.card` — carte avec hover effect

### Animations scroll

`hooks/useInView.ts` expose `useInView<T>()` — retourne `{ ref, inView }`. Pattern d'utilisation : ajouter `className={`reveal ${inView ? "visible" : ""}`}` sur l'élément. L'observer se déconnecte après la première visibilité (`once: true` par défaut).

### Typographie

Trois familles chargées via Google Fonts :
- `Instrument Serif` → serif éditorial (titres)
- `DM Sans` → sans-serif (corps de texte)
- `Space Mono` → monospace (labels, UI secondaire)
