-- ============================================================
-- Package Entitlements System
-- ============================================================

-- ── packages ─────────────────────────────────────────────────
create table if not exists packages (
  id              uuid primary key default gen_random_uuid(),
  slug            text unique not null,
  name            text not null,
  description     text,
  stripe_price_id text,
  is_active       boolean default true,
  created_at      timestamptz default now()
);

-- ── package_documents ────────────────────────────────────────
create table if not exists package_documents (
  id            uuid primary key default gen_random_uuid(),
  package_id    uuid references packages(id) on delete cascade,
  template_slug text not null,
  sort_order    int  default 0,
  unique(package_id, template_slug)
);

-- ── entitlements ─────────────────────────────────────────────
create table if not exists entitlements (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid references auth.users(id) on delete cascade,
  package_id       uuid references packages(id),
  scope            text not null check (scope in ('package', 'all')),
  source           text not null,
  stripe_reference text,
  starts_at        timestamptz default now(),
  expires_at       timestamptz,
  created_at       timestamptz default now(),
  -- scope='package' requires package_id; scope='all' must have package_id null
  constraint entitlements_scope_package_id_check check (
    (scope = 'package' and package_id is not null)
    or
    (scope = 'all' and package_id is null)
  )
);

-- ── RLS ──────────────────────────────────────────────────────
alter table packages          enable row level security;
alter table package_documents enable row level security;
alter table entitlements      enable row level security;

-- packages: readable by any authenticated user
create policy "packages_select_auth"
  on packages for select
  to authenticated
  using (true);

-- package_documents: readable by any authenticated user
create policy "package_documents_select_auth"
  on package_documents for select
  to authenticated
  using (true);

-- entitlements: users read only their own rows; writes via service role only
create policy "entitlements_select_own"
  on entitlements for select
  to authenticated
  using (user_id = auth.uid());

-- ── generated_documents ──────────────────────────────────────
-- Tracks every document a user has built from a template
create table if not exists generated_documents (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid references auth.users(id) on delete cascade,
  template_slug text not null,
  display_name  text,          -- human-readable label (e.g. "123 High St – Section 21")
  form_data     jsonb,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

alter table generated_documents enable row level security;

create policy "generated_documents_select_own"
  on generated_documents for select
  to authenticated
  using (user_id = auth.uid());

create policy "generated_documents_insert_own"
  on generated_documents for insert
  to authenticated
  with check (user_id = auth.uid());

create policy "generated_documents_update_own"
  on generated_documents for update
  to authenticated
  using (user_id = auth.uid());

-- ── Seed: Landlord package ────────────────────────────────────
insert into packages (slug, name, description, stripe_price_id, is_active)
values (
  'landlord',
  'Landlord Package',
  'Complete document toolkit for UK residential landlords — tenancy agreements, notices, inspections, and more.',
  null, -- set stripe_price_id via environment after Stripe price is created
  true
)
on conflict (slug) do nothing;

-- Landlord package documents (UK residential property templates)
with landlord_pkg as (select id from packages where slug = 'landlord')
insert into package_documents (package_id, template_slug, sort_order)
select landlord_pkg.id, t.slug, t.sort_order
from landlord_pkg, (values
  ('assured-shorthold-tenancy-agreement',        1),
  ('assured-periodic-tenancy-agreement',         2),
  ('section-13-rent-increase-notice',            3),
  ('section-21-notice',                          4),
  ('section-8-notice',                           5),
  ('tenancy-deposit-prescribed-information',     6),
  ('property-inspection-report',                 7),
  ('rent-arrears-letter',                        8),
  ('check-in-inventory',                         9),
  ('check-out-condition-report',                10),
  ('landlord-gas-safety-checklist',             11),
  ('tenancy-agreement-addendum',                12)
) as t(slug, sort_order)
on conflict (package_id, template_slug) do nothing;

-- Seed: Employer package (empty — documents added when templates are ready)
insert into packages (slug, name, description, is_active)
values (
  'employer',
  'Employer Package',
  'Employment document toolkit for UK businesses — contracts, policies, disciplinary letters, and more.',
  true
)
on conflict (slug) do nothing;

-- Seed: Business Startup package
insert into packages (slug, name, description, is_active)
values (
  'business-startup',
  'Business Startup Package',
  'Essential legal documents for new UK businesses — company policies, NDAs, service agreements, and more.',
  true
)
on conflict (slug) do nothing;
