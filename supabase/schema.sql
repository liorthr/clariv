-- Table des prospects du quiz (remplace l'entité Base44 "QuizLead")
create table if not exists public.quiz_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  used_ai text,
  age_range text,
  used_chatgpt text,
  income_goal text,
  ai_level text,
  email text not null,
  phone text,
  base44_id text unique -- identifiant d'origine, rempli uniquement pour les prospects importés depuis Base44
);

alter table public.quiz_leads enable row level security;

-- Les visiteurs du site peuvent uniquement AJOUTER un prospect (jamais lire, modifier ou supprimer).
drop policy if exists "Public can insert leads" on public.quiz_leads;
create policy "Public can insert leads"
  on public.quiz_leads
  for insert
  to anon, authenticated
  with check (true);
