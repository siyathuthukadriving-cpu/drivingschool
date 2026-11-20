-- ================================================================
-- Learner details captured by the welcome quiz popup.
--
-- Every learner gives their name, email and phone number before practising.
-- The popup also records whether they are from Durban, how many times they
-- tried the welcome quiz, and whether they passed.
--
-- Only the server (service role) reads or writes this table: RLS is on with
-- no policies, so the browser can never see anyone else's details. Admins read
-- it through /admin/learners and download it as CSV.
-- Safe to re-run.
-- ================================================================

create table if not exists public.learner_leads (
  id          uuid primary key default gen_random_uuid(),
  name        text        not null,
  email       text        not null unique,     -- stored lower-cased
  phone       text        not null,
  from_durban boolean,
  attempts    integer     not null default 0,
  best_score  integer,
  passed      boolean     not null default false,
  passed_at   timestamptz,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists learner_leads_created_at_idx on public.learner_leads (created_at desc);

alter table public.learner_leads enable row level security;
-- (deliberately no policies — service role only)
