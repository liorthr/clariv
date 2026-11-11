# Clariv — AI Income Accelerator

Quiz « Challenge IA 28 jours », migré depuis Base44.

- **Frontend** : React + Vite + Tailwind + Framer Motion
- **Base de données** : Supabase (table `quiz_leads`)
- **Paiement** : grille de prix Stripe (`stripe-pricing-table`)

## Lancer en local

```bash
npm install
cp .env.example .env   # puis remplir les clés Supabase
npm run dev
```

## Base de données

Exécuter `supabase/schema.sql` dans Supabase (SQL Editor).
Les visiteurs ne peuvent qu'ajouter des prospects ; la consultation se fait depuis le tableau de bord Supabase (Table Editor → `quiz_leads`).

## Mise en ligne

Compatible Vercel, Netlify ou tout hébergement statique (`npm run build` → dossier `dist/`).
Variables d'environnement à définir : `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`.

## Pages

- `/` : le quiz complet (10 étapes)
- `/merci` : page de remerciement (à utiliser comme URL de retour après paiement dans Stripe)
