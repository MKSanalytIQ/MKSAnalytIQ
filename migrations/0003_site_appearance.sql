-- Public site appearance is a single workspace-admin controlled setting.
-- Start with the requested growth homepage; owners can restore the current design.
create table if not exists site_preferences (
  id text primary key check (id = 'public-site'),
  homepage_design text not null default 'growth'
    check (homepage_design in ('current', 'growth')),
  updated_by text references "user"("id") on delete set null,
  updated_at timestamptz not null default now()
);

insert into site_preferences (id, homepage_design)
values ('public-site', 'growth')
on conflict (id) do nothing;
