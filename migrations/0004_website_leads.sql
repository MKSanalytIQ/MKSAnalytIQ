-- Website enquiries belong to the private MKSAnalytIQ workspace and remain
-- separate from opted-in marketing subscribers.
create table if not exists website_leads (
  id text primary key,
  workspace_id text not null references marketing_workspaces(id) on delete cascade,
  name text not null,
  business text not null default '',
  phone text not null default '',
  email text not null default '',
  website text not null default '',
  service text not null,
  budget text not null default '',
  timeline text not null default '',
  preferred_reply text not null default '',
  message text not null default '',
  source text not null default '',
  status text not null default 'new'
    check (status in ('new', 'contacted', 'qualified', 'closed')),
  notification_status text not null default 'pending'
    check (notification_status in ('pending', 'sent', 'failed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists website_leads_workspace_status_created_idx
  on website_leads(workspace_id, status, created_at desc);
