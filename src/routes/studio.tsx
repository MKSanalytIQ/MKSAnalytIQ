import { useCallback, useEffect, useMemo, useState, type FormEvent, type InputHTMLAttributes } from "react";
import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  CircleAlert,
  ContactRound,
  Inbox,
  MessageCircle,
  FileText,
  Mail,
  PanelsTopLeft,
  Phone,
  Plus,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  UsersRound,
  Building2,
} from "lucide-react";
import { Logo } from "@/components/site/logo";
import { authEnabled, signOut } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import {
  addMarketingSubscriber,
  getMarketingStudio,
  importMarketingSubscribers,
  saveMarketingCampaign,
  sendMarketingCampaign,
  setHomepageDesign,
  unsubscribeMarketingSubscriber,
  type HomepageDesign,
  type MarketingCampaign,
  type MarketingStudioData,
  type WebsiteLeadStatus,
  updateWebsiteLeadStatus,
} from "@/lib/marketing";
import { HomepageDesignPanel } from "@/components/studio/homepage-design";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Email Studio | MKSAnalytIQ" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: Studio,
});

type Tab = "overview" | "leads" | "audience" | "campaigns" | "website" | "settings";
type CampaignFields = { id?: string; name: string; subject: string; previewText: string; bodyText: string };

const emptyCampaign: CampaignFields = {
  name: "",
  subject: "",
  previewText: "",
  bodyText: "",
};

const navigation: { id: Tab; label: string; icon: typeof Activity }[] = [
  { id: "overview", label: "Overview", icon: Activity },
  { id: "leads", label: "Leads", icon: Inbox },
  { id: "audience", label: "Audience", icon: UsersRound },
  { id: "campaigns", label: "Campaigns", icon: Mail },
  { id: "website", label: "Website", icon: PanelsTopLeft },
  { id: "settings", label: "Setup", icon: Settings2 },
];

function Studio() {
  const { user, isPending } = useCurrentUserState();
  const userId = user?.id;
  const [tab, setTab] = useState<Tab>("overview");
  const [studio, setStudio] = useState<MarketingStudioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");
  const [notice, setNotice] = useState("");
  const [working, setWorking] = useState(false);
  const [campaign, setCampaign] = useState<CampaignFields>(emptyCampaign);

  const refresh = useCallback(async () => {
    try {
      setStudio(await getMarketingStudio());
    } catch (error) {
      setPageError(error instanceof Error ? error.message : "Couldn’t load the workspace.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isPending && userId && authEnabled) void refresh();
  }, [isPending, userId, refresh]);

  const recentCampaigns = studio?.campaigns.slice(0, 5) ?? [];
  const recentLeads = studio?.leads.slice(0, 5) ?? [];
  const activeCampaigns = studio?.campaigns.filter((item) => item.status === "draft" || item.status === "failed") ?? [];

  function editCampaign(item: MarketingCampaign) {
    setCampaign({
      id: item.id,
      name: item.name,
      subject: item.subject,
      previewText: item.preview_text,
      bodyText: item.body_text,
    });
    setTab("campaigns");
    setNotice("");
  }

  async function saveDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (working) return;
    setWorking(true);
    setPageError("");
    setNotice("");
    try {
      const result = await saveMarketingCampaign({ data: campaign });
      setCampaign({ ...campaign, id: result.id });
      setNotice("Draft saved. It will only send when you choose Send campaign.");
      await refresh();
    } catch (error) {
      setPageError(error instanceof Error ? error.message : "Couldn’t save the campaign.");
    } finally {
      setWorking(false);
    }
  }

  async function sendCampaign() {
    if (!campaign.id || working || !studio?.delivery.ready) return;
    const recipients = studio.totals.active;
    const approved = window.confirm(
      `Send “${campaign.subject}” to up to ${recipients} active contacts in the MKSAnalytIQ list? This will start a real email campaign.`,
    );
    if (!approved) return;
    setWorking(true);
    setPageError("");
    setNotice("");
    try {
      const saved = await saveMarketingCampaign({ data: campaign });
      const result = await sendMarketingCampaign({ data: { id: saved.id } });
      setNotice(`Campaign queued with Brevo for ${result.recipientCount} active contacts.`);
      setCampaign(emptyCampaign);
      await refresh();
    } catch (error) {
      setPageError(error instanceof Error ? error.message : "Couldn’t send the campaign.");
      await refresh();
    } finally {
      setWorking(false);
    }
  }

  function startCampaign() {
    setCampaign(emptyCampaign);
    setNotice("");
    setTab("campaigns");
  }

  async function chooseHomepageDesign(design: HomepageDesign) {
    if (working || !studio?.canManageSiteAppearance) return;
    setWorking(true);
    setPageError("");
    setNotice("");
    try {
      await setHomepageDesign({ data: { design } });
      setNotice(design === "growth" ? "The Growth homepage is now live for all visitors." : "The current homepage design has been restored for all visitors.");
      await refresh();
    } catch (error) {
      setPageError(error instanceof Error ? error.message : "Couldn’t update the homepage design.");
    } finally {
      setWorking(false);
    }
  }

  async function changeLeadStatus(id: string, status: WebsiteLeadStatus) {
    if (working) return;
    setWorking(true);
    setPageError("");
    setNotice("");
    try {
      await updateWebsiteLeadStatus({ data: { id, status } });
      setNotice(`Lead marked ${status}.`);
      await refresh();
    } catch (error) {
      setPageError(error instanceof Error ? error.message : "Couldn’t update the lead.");
    } finally {
      setWorking(false);
    }
  }

  if (isPending) return <StudioLoading />;
  if (!authEnabled) {
    return <div className="grid min-h-screen place-items-center bg-[#070b16] px-5 text-center text-white"><div className="max-w-md"><h1 className="text-xl font-bold">Private studio unavailable</h1><p className="mt-2 text-sm leading-relaxed text-white/55">Owner sign-in and the studio database still need to be configured for this deployment.</p></div></div>;
  }
  if (!user) return <Navigate to="/login" />;
  if (loading) return <StudioLoading />;

  return (
    <div className="min-h-screen bg-[#070b16] text-white">
      <div className="mx-auto grid min-h-screen max-w-[1500px] lg:grid-cols-[250px_1fr]">
        <aside className="border-b border-white/10 bg-[#0b1220] px-5 py-5 lg:border-b-0 lg:border-r lg:px-4 lg:py-7">
          <div className="flex items-center justify-between lg:block">
            <Logo tone="paper" />
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-medium text-white/55 hover:text-white lg:hidden">
              <ArrowLeft className="size-3.5" aria-hidden /> Website
            </Link>
          </div>
          <div className="mt-8 hidden rounded-2xl border border-white/10 bg-white/[0.035] p-3 lg:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200/80">Workspace</p>
            <p className="mt-1 text-sm font-semibold">MKSAnalytIQ</p>
            <p className="mt-0.5 text-xs text-white/45">Private email studio</p>
          </div>
          <nav className="mt-5 flex gap-2 overflow-x-auto lg:flex-col lg:gap-1" aria-label="Email studio">
            {navigation.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => { setTab(id); setNotice(""); }}
                aria-current={tab === id ? "page" : undefined}
                className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                  tab === id ? "bg-blue-500/15 text-white ring-1 ring-inset ring-blue-400/25" : "text-white/55 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className={`size-4 ${tab === id ? "text-cyan-200" : ""}`} aria-hidden />
                {label}
              </button>
            ))}
          </nav>
          <div className="mt-8 hidden border-t border-white/10 pt-5 lg:block">
            <Link to="/" className="flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white">
              <ArrowLeft className="size-3.5" aria-hidden /> Back to public website
            </Link>
            <p className="mt-6 text-[11px] leading-relaxed text-white/35">Only approved workspace members can access website leads, contacts and campaigns.</p>
          </div>
        </aside>

        <main className="min-w-0 px-4 py-5 sm:px-7 sm:py-7 lg:px-10 lg:py-9">
          <header className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/75">MKSAnalytIQ · Email Studio</p>
              <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{navigation.find((item) => item.id === tab)?.label}</h1>
              <p className="mt-1 text-sm text-white/50">Manage enquiries and email campaigns in your private workspace.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-xs font-semibold">{user.displayName ?? "Workspace owner"}</p>
                <p className="mt-0.5 text-[11px] text-white/45">{user.primaryEmail}</p>
              </div>
              {authEnabled ? (
                <button
                  type="button"
                  onClick={() => void signOut("/login")}
                  className="rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-white/70 hover:bg-white/5 hover:text-white"
                >
                  Sign out
                </button>
              ) : null}
            </div>
          </header>

          {pageError ? (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-rose-400/20 bg-rose-400/10 p-4 text-sm text-rose-100" role="alert">
              <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
              <div><p className="font-semibold">Something needs attention</p><p className="mt-1 text-rose-100/75">{pageError}</p></div>
            </div>
          ) : null}
          {notice ? (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm text-emerald-100" role="status">
              <Check className="mt-0.5 size-4 shrink-0" aria-hidden /> {notice}
            </div>
          ) : null}

          {!pageError || studio ? (
            <div className="mt-7">
              {tab === "overview" && studio ? (
                <Overview
                  studio={studio}
                  campaigns={recentCampaigns}
                  leads={recentLeads}
                  onGo={setTab}
                  onCompose={startCampaign}
                  onEdit={editCampaign}
                />
              ) : null}
              {tab === "audience" && studio ? (
                <Audience
                  studio={studio}
                  working={working}
                  onAdd={async (value) => {
                    setWorking(true); setPageError(""); setNotice("");
                    try {
                      await addMarketingSubscriber({ data: value });
                      setNotice("Contact added to your opted-in audience.");
                      await refresh();
                      return true;
                    } catch (error) {
                      setPageError(error instanceof Error ? error.message : "Couldn’t add this contact.");
                      return false;
                    } finally { setWorking(false); }
                  }}
                  onUnsubscribe={async (id) => {
                    if (!window.confirm("Remove marketing email permission for this contact?")) return;
                    setWorking(true); setPageError(""); setNotice("");
                    try {
                      await unsubscribeMarketingSubscriber({ data: { id } });
                      setNotice("Contact unsubscribed. The next provider sync will suppress this address.");
                      await refresh();
                    } catch (error) {
                      setPageError(error instanceof Error ? error.message : "Couldn’t update this contact.");
                    } finally { setWorking(false); }
                  }}
                  onImport={async (contacts) => {
                    setWorking(true); setPageError(""); setNotice("");
                    try {
                      const result = await importMarketingSubscribers({ data: { contacts, consentConfirmed: true } });
                      setNotice(`Imported ${result.imported} contacts. ${result.skipped} duplicate or already-active addresses were skipped.`);
                      await refresh();
                      return result;
                    } catch (error) {
                      setPageError(error instanceof Error ? error.message : "Couldn’t import this file.");
                      return null;
                    } finally { setWorking(false); }
                  }}
                />
              ) : null}
              {tab === "campaigns" && studio ? (
                <Campaigns
                  studio={studio}
                  campaigns={activeCampaigns}
                  campaign={campaign}
                  working={working}
                  onChange={setCampaign}
                  onSave={saveDraft}
                  onSend={() => void sendCampaign()}
                  onNew={startCampaign}
                  onEdit={editCampaign}
                />
              ) : null}
              {tab === "leads" && studio ? (
                <Leads
                  leads={studio.leads}
                  total={studio.totals.leads}
                  newTotal={studio.totals.newLeads}
                  working={working}
                  onStatusChange={changeLeadStatus}
                />
              ) : null}
              {tab === "website" && studio ? (
                <HomepageDesignPanel
                  current={studio.homepageDesign}
                  canManage={studio.canManageSiteAppearance}
                  working={working}
                  onSelect={(design) => void chooseHomepageDesign(design)}
                />
              ) : null}
              {tab === "settings" && studio ? <Setup delivery={studio.delivery} /> : null}
            </div>
          ) : null}
        </main>
      </div>
    </div>
  );
}

function Overview({
  studio,
  campaigns,
  leads,
  onGo,
  onCompose,
  onEdit,
}: {
  studio: MarketingStudioData;
  campaigns: MarketingCampaign[];
  leads: MarketingStudioData["leads"];
  onGo: (tab: Tab) => void;
  onCompose: () => void;
  onEdit: (campaign: MarketingCampaign) => void;
}) {
  const metrics = [
    { label: "Active contacts", value: studio.totals.active, icon: UsersRound, tint: "text-cyan-200 bg-cyan-300/10" },
    { label: "Unsubscribed", value: studio.totals.unsubscribed, icon: ContactRound, tint: "text-amber-200 bg-amber-300/10" },
    { label: "Website leads", value: studio.totals.leads, icon: Inbox, tint: "text-emerald-200 bg-emerald-300/10" },
    { label: "New enquiries", value: studio.totals.newLeads, icon: MessageCircle, tint: "text-orange-200 bg-orange-300/10" },
    { label: "Campaigns", value: studio.totals.campaigns, icon: Mail, tint: "text-violet-200 bg-violet-300/10" },
    { label: "Drafts", value: studio.totals.drafts, icon: FileText, tint: "text-blue-200 bg-blue-300/10" },
  ];
  return (
    <div className="space-y-7">
      {!studio.delivery.ready ? (
        <button type="button" onClick={() => onGo("settings")} className="flex w-full items-start gap-3 rounded-2xl border border-amber-300/20 bg-amber-200/[0.07] p-4 text-left hover:bg-amber-200/[0.1]">
          <CircleAlert className="mt-0.5 size-4 shrink-0 text-amber-200" aria-hidden />
          <span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-amber-100">Finish email delivery setup</span><span className="mt-1 block text-xs leading-relaxed text-white/55">Your contacts and drafts are private. Connect Brevo to start sending campaigns.</span></span>
          <ChevronRight className="mt-0.5 size-4 shrink-0 text-white/45" aria-hidden />
        </button>
      ) : (
        <div className="flex items-center gap-2 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-3 text-sm text-emerald-100"><ShieldCheck className="size-4" aria-hidden /> Delivery connected with Brevo</div>
      )}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {metrics.map(({ label, value, icon: Icon, tint }) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5">
            <div className="flex items-center justify-between"><p className="text-xs font-medium text-white/50">{label}</p><span className={`grid size-9 place-items-center rounded-xl ${tint}`}><Icon className="size-4" aria-hidden /></span></div>
            <p className="mt-5 text-3xl font-bold tracking-tight">{value.toLocaleString()}</p>
          </div>
        ))}
      </div>

      <section className="grid gap-4 xl:grid-cols-[1.2fr_1.2fr_0.75fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
          <div className="flex items-end justify-between gap-4">
            <div><h2 className="text-base font-bold">Recent enquiries</h2><p className="mt-1 text-xs text-white/45">New requests from your website.</p></div>
            <button type="button" onClick={() => onGo("leads")} className="text-xs font-semibold text-cyan-200 hover:text-white">Open inbox</button>
          </div>
          {leads.length ? (
            <ul className="mt-5 divide-y divide-white/10">
              {leads.slice(0, 4).map((lead) => <li key={lead.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-200"><Inbox className="size-4" aria-hidden /></span>
                <span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold">{lead.name}</span><span className="mt-0.5 block truncate text-xs text-white/45">{lead.business || lead.service}</span></span>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold capitalize ${lead.status === "new" ? "bg-orange-300/10 text-orange-200" : lead.status === "closed" ? "bg-white/10 text-white/50" : "bg-blue-300/10 text-blue-200"}`}>{lead.status}</span>
              </li>)}
            </ul>
          ) : <EmptyState text="Website enquiries will appear here. They stay separate from your marketing audience." />}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
          <div className="flex items-end justify-between gap-4">
            <div><h2 className="text-base font-bold">Recent campaigns</h2><p className="mt-1 text-xs text-white/45">Your saved messages and recent sends.</p></div>
            <button type="button" onClick={() => onGo("campaigns")} className="text-xs font-semibold text-cyan-200 hover:text-white">View all</button>
          </div>
          {campaigns.length ? (
            <ul className="mt-5 divide-y divide-white/10">
              {campaigns.map((item) => <li key={item.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-blue-400/10 text-blue-200"><Mail className="size-4" aria-hidden /></span>
                <span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold">{item.name}</span><span className="mt-0.5 block truncate text-xs text-white/45">{item.subject}</span></span>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold capitalize ${item.status === "queued" ? "bg-emerald-300/10 text-emerald-200" : item.status === "failed" ? "bg-rose-300/10 text-rose-200" : "bg-white/10 text-white/65"}`}>{item.status}</span>
                {(item.status === "draft" || item.status === "failed") ? <button type="button" onClick={() => onEdit(item)} className="text-xs font-semibold text-white/50 hover:text-white">Edit</button> : null}
              </li>)}
            </ul>
          ) : <EmptyState text="No campaigns yet. Start with a helpful update your clients will want to read." />}
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-violet-500/[0.06] p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/75">Next step</p>
          <h2 className="mt-3 text-xl font-bold">Make your first send useful.</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/55">Share a practical tip, a short case study, or one offer. Keep the email focused on one next step.</p>
          <button type="button" onClick={onCompose} className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-blue-500 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-400">
            <Plus className="size-4" aria-hidden /> Write a campaign <ArrowRight className="size-4" aria-hidden />
          </button>
        </div>
      </section>
    </div>
  );
}

function Leads({
  leads,
  total,
  newTotal,
  working,
  onStatusChange,
}: {
  leads: MarketingStudioData["leads"];
  total: number;
  newTotal: number;
  working: boolean;
  onStatusChange: (id: string, status: WebsiteLeadStatus) => Promise<void>;
}) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<WebsiteLeadStatus | "all">("all");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return leads.filter((lead) => {
      const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
      const searchable = [lead.name, lead.business, lead.phone, lead.email, lead.service, lead.source, lead.message]
        .join(" ")
        .toLowerCase();
      return matchesStatus && (!normalized || searchable.includes(normalized));
    });
  }, [leads, query, statusFilter]);

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-emerald-300/15 bg-gradient-to-br from-emerald-300/[0.08] to-blue-500/[0.05] p-5 sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200/80">Website enquiries</p>
            <h2 className="mt-2 text-xl font-bold">Lead inbox</h2>
            <p className="mt-1 text-sm text-white/55">Review requests, contact the person, and keep follow-up status current.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#070b16]/45 px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">New leads</p>
            <p className="mt-1 text-2xl font-bold">{newTotal.toLocaleString()}</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-bold">All website leads</h2>
            <p className="mt-1 text-xs text-white/45">{total.toLocaleString()} total · newest first{total > leads.length ? ` · showing latest ${leads.length}` : ""}</p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <label className="relative block min-w-0 flex-1 sm:w-64">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/35" aria-hidden />
              <input
                aria-label="Search website leads"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search name, service, message…"
                className="h-10 w-full rounded-xl border border-white/10 bg-[#090f1d] pl-9 pr-3 text-sm text-white placeholder:text-white/35"
              />
            </label>
            <select
              aria-label="Filter website leads by status"
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value as WebsiteLeadStatus | "all")}
              className="h-10 rounded-xl border border-white/10 bg-[#090f1d] px-3 text-sm text-white"
            >
              <option value="all">All statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        {filtered.length ? (
          <ul className="mt-5 space-y-3">
            {filtered.map((lead) => {
              const phoneDigits = lead.phone.replace(/\D/g, "");
              const statusTone = lead.status === "new"
                ? "bg-orange-300/10 text-orange-200"
                : lead.status === "closed"
                  ? "bg-white/10 text-white/55"
                  : lead.status === "qualified"
                    ? "bg-emerald-300/10 text-emerald-200"
                    : "bg-blue-300/10 text-blue-200";
              return (
                <li key={lead.id} className="rounded-2xl border border-white/10 bg-[#0a101d] p-4 sm:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-bold">{lead.name}</h3>
                        <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold capitalize ${statusTone}`}>{lead.status}</span>
                      </div>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-white/55">
                        <Building2 className="size-3.5 shrink-0" aria-hidden />{lead.business || "Business not provided"}
                      </p>
                    </div>
                    <label className="flex items-center gap-2 text-[11px] font-medium text-white/45">
                      Update status
                      <select
                        aria-label={`Status for ${lead.name}`}
                        value={lead.status}
                        disabled={working}
                        onChange={(event) => void onStatusChange(lead.id, event.target.value as WebsiteLeadStatus)}
                        className="h-9 rounded-lg border border-white/10 bg-[#111a2b] px-2.5 text-xs font-semibold capitalize text-white disabled:opacity-50"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="closed">Closed</option>
                      </select>
                    </label>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    <LeadDetail label="Service" value={lead.service} />
                    <LeadDetail label="Budget" value={lead.budget || "Not specified"} />
                    <LeadDetail label="Timeline" value={lead.timeline || "Not specified"} />
                    <LeadDetail label="Source" value={lead.source || "Website"} />
                  </div>

                  <p className="mt-4 whitespace-pre-wrap break-words rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 text-sm leading-relaxed text-white/70">{lead.message || "No additional note provided."}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/[0.08] pt-3">
                    {lead.phone ? <a href={`tel:${lead.phone}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-200 hover:text-white"><Phone className="size-3.5" aria-hidden />{lead.phone}</a> : null}
                    {lead.phone ? <a href={`https://wa.me/91${phoneDigits}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-200 hover:text-white"><MessageCircle className="size-3.5" aria-hidden />WhatsApp</a> : null}
                    {lead.email ? <a href={`mailto:${lead.email}`} className="break-all text-xs font-semibold text-cyan-200 hover:text-white">{lead.email}</a> : null}
                    {lead.website ? <span className="break-all text-xs text-white/50">{lead.website}</span> : null}
                    <span className="ml-auto text-[11px] text-white/35">{new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(new Date(lead.created_at))}</span>
                  </div>

                  <p className={`mt-2 flex items-center gap-1.5 text-[10px] ${lead.notification_status === "sent" ? "text-emerald-200/65" : lead.notification_status === "failed" ? "text-amber-200/80" : "text-white/35"}`}>
                    <Mail className="size-3" aria-hidden />
                    {lead.notification_status === "sent" ? "Email alert sent to the studio" : lead.notification_status === "failed" ? "Saved in inbox · email alert needs attention" : "Email alert pending"}
                  </p>
                </li>
              );
            })}
          </ul>
        ) : <EmptyState text={query || statusFilter !== "all" ? "No leads match these filters." : "New website enquiries will appear here."} />}
      </section>
      <p className="px-1 text-[11px] leading-relaxed text-white/35">Website enquiries are stored privately for follow-up and are not added to marketing email campaigns.</p>
    </div>
  );
}

function LeadDetail({ label, value }: { label: string; value: string }) {
  return <div className="min-w-0"><p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">{label}</p><p className="mt-1 truncate text-xs text-white/70" title={value}>{value}</p></div>;
}

function Audience({
  studio,
  working,
  onAdd,
  onUnsubscribe,
  onImport,
}: {
  studio: MarketingStudioData;
  working: boolean;
  onAdd: (value: { email: string; firstName: string; consentSource: string; consentConfirmed: true }) => Promise<boolean>;
  onUnsubscribe: (id: string) => Promise<void>;
  onImport: (contacts: { email: string; firstName: string; consentSource: string; consentedAt?: string }[]) => Promise<{ imported: number; skipped: number } | null>;
}) {
  const [query, setQuery] = useState("");
  const [consent, setConsent] = useState(false);
  const [importConsent, setImportConsent] = useState(false);
  const [importRows, setImportRows] = useState<{ email: string; firstName: string; consentSource: string }[]>([]);
  const [importMessage, setImportMessage] = useState("");
  const [importBusy, setImportBusy] = useState(false);
  const filtered = useMemo(
    () => studio.subscribers.filter((subscriber) => `${subscriber.email} ${subscriber.first_name}`.toLowerCase().includes(query.toLowerCase())),
    [studio.subscribers, query],
  );

  return (
    <div className="grid gap-5 xl:grid-cols-[0.72fr_1.28fr]">
      <section className="h-fit rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
        <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200"><Plus className="size-4" aria-hidden /></span><div><h2 className="font-bold">Add a contact</h2><p className="mt-0.5 text-xs text-white/45">Record only people who opted in.</p></div></div>
        <form className="mt-5 space-y-4" onSubmit={(event) => {
          event.preventDefault();
          const formElement = event.currentTarget;
          const form = new FormData(formElement);
          void onAdd({
            email: String(form.get("email") ?? ""),
            firstName: String(form.get("firstName") ?? ""),
            consentSource: String(form.get("consentSource") ?? ""),
            consentConfirmed: true,
          }).then((added) => { if (added) { formElement.reset(); setConsent(false); } });
        }}>
          <Field label="Email address" name="email" type="email" placeholder="name@example.com" required />
          <Field label="First name (optional)" name="firstName" placeholder="First name" />
          <Field label="How did they opt in?" name="consentSource" defaultValue="Client gave permission" placeholder="Website form, event signup, direct request…" required />
          <label className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/10 p-3 text-xs leading-relaxed text-white/65">
            <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-0.5 size-4 accent-sky-400" required />
            <span>I confirm this person agreed to receive marketing emails from MKSAnalytIQ.</span>
          </label>
          <button type="submit" disabled={working || !consent} className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 text-sm font-semibold text-white hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-45">
            <Plus className="size-4" aria-hidden /> Add opted-in contact
          </button>
        </form>
        <p className="mt-4 text-[11px] leading-relaxed text-white/40">Project enquiries are not subscribed automatically. The consent source and date are saved with each contact.</p>
        <div className="my-5 border-t border-white/10" />
        <h3 className="text-sm font-bold">Import a CSV</h3>
        <p className="mt-1 text-[11px] leading-relaxed text-white/45">Use columns <code className="text-cyan-100">email</code>, <code className="text-cyan-100">consent_source</code>, and optionally <code className="text-cyan-100">first_name</code> and <code className="text-cyan-100">consented_at</code> (YYYY-MM-DD). Up to 500 rows; without consented_at, the import date is recorded.</p>
        <label className="mt-3 block text-xs font-semibold text-white/70">CSV file
          <input type="file" accept=".csv,text/csv" onChange={(event) => {
            const file = event.currentTarget.files?.[0];
            setImportRows([]); setImportMessage("");
            if (!file) return;
            if (file.size > 1024 * 1024) { setImportMessage("Choose a CSV under 1 MB."); return; }
            void file.text().then((text) => {
              try {
                const rows = parseSubscriberCsv(text);
                if (rows.length > 500) throw new Error("This file has more than 500 rows. Split it into smaller files.");
                setImportRows(rows);
                setImportMessage(`${rows.length} valid rows ready to import.`);
              } catch (error) {
                setImportMessage(error instanceof Error ? error.message : "Couldn’t read this CSV.");
              }
            });
          }} className="mt-2 block w-full text-xs text-white/55 file:mr-3 file:rounded-lg file:border-0 file:bg-white/10 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white" />
        </label>
        {importMessage ? <p className="mt-2 text-[11px] text-white/55" role="status">{importMessage}</p> : null}
        <label className="mt-3 flex items-start gap-3 rounded-xl border border-white/10 bg-black/10 p-3 text-xs leading-relaxed text-white/65">
          <input type="checkbox" checked={importConsent} onChange={(event) => setImportConsent(event.target.checked)} className="mt-0.5 size-4 accent-sky-400" />
          <span>I confirm every imported address has agreed to receive MKSAnalytIQ marketing emails.</span>
        </label>
        <button type="button" disabled={working || importBusy || !importRows.length || !importConsent} onClick={() => {
          setImportBusy(true);
          void onImport(importRows).then((result) => {
            if (result) { setImportRows([]); setImportConsent(false); setImportMessage("Import complete."); }
          }).finally(() => setImportBusy(false));
        }} className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-3 text-xs font-semibold text-white/75 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40">
          {importBusy ? "Importing…" : `Import ${importRows.length || "contacts"}`}
        </button>
      </section>

      <section className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><h2 className="font-bold">Your audience</h2><p className="mt-1 text-xs text-white/45">{studio.totals.active} active · {studio.totals.unsubscribed} unsubscribed</p></div>
          <input aria-label="Search contacts" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search contacts" className="h-10 w-full rounded-xl border border-white/10 bg-[#090f1d] px-3 text-sm text-white placeholder:text-white/35 sm:w-56" />
        </div>
        {filtered.length ? (
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[580px] text-left text-sm">
              <thead className="text-[10px] uppercase tracking-[0.14em] text-white/35"><tr><th className="pb-3 font-semibold">Contact</th><th className="pb-3 font-semibold">Permission source</th><th className="pb-3 font-semibold">Status</th><th className="pb-3 text-right font-semibold">Action</th></tr></thead>
              <tbody className="divide-y divide-white/10">
                {filtered.map((subscriber) => <tr key={subscriber.id}>
                  <td className="py-3 pr-3"><span className="block font-semibold">{subscriber.first_name || "—"}</span><span className="mt-0.5 block text-xs text-white/45">{subscriber.email}</span></td>
                  <td className="py-3 pr-3 text-xs text-white/55">{subscriber.consent_source}</td>
                  <td className="py-3 pr-3"><span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold capitalize ${subscriber.status === "active" ? "bg-emerald-300/10 text-emerald-200" : subscriber.status === "bounced" ? "bg-rose-300/10 text-rose-200" : "bg-white/10 text-white/55"}`}>{subscriber.status}</span></td>
                  <td className="py-3 text-right">{subscriber.status === "active" ? <button disabled={working} type="button" onClick={() => void onUnsubscribe(subscriber.id)} className="text-xs font-semibold text-white/45 hover:text-rose-200 disabled:opacity-40">Unsubscribe</button> : <span className="text-xs text-white/30">—</span>}</td>
                </tr>)}
              </tbody>
            </table>
          </div>
        ) : <EmptyState text={query ? "No contacts match that search." : "Your list is empty. Add opted-in clients to get started."} />}
      </section>
    </div>
  );
}

function Campaigns({
  studio,
  campaigns,
  campaign,
  working,
  onChange,
  onSave,
  onSend,
  onNew,
  onEdit,
}: {
  studio: MarketingStudioData;
  campaigns: MarketingCampaign[];
  campaign: CampaignFields;
  working: boolean;
  onChange: (value: CampaignFields) => void;
  onSave: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  onSend: () => void;
  onNew: () => void;
  onEdit: (campaign: MarketingCampaign) => void;
}) {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
      <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4"><div><h2 className="font-bold">Campaign composer</h2><p className="mt-1 text-xs text-white/45">Plain-text writing, branded HTML email, and an unsubscribe link.</p></div><button type="button" onClick={onNew} className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/15 px-3 text-xs font-semibold text-white/70 hover:bg-white/5"><Plus className="size-3.5" aria-hidden /> New draft</button></div>
        <form className="mt-5 space-y-4" onSubmit={(event) => void onSave(event)}>
          <div className="grid gap-4 sm:grid-cols-2"><Field label="Campaign name" value={campaign.name} onChange={(event) => onChange({ ...campaign, name: event.target.value })} required placeholder="April product update" /><Field label="Email subject" value={campaign.subject} onChange={(event) => onChange({ ...campaign, subject: event.target.value })} required maxLength={160} placeholder="A more useful way to reach new customers" /></div>
          <Field label="Preview text (optional)" value={campaign.previewText} onChange={(event) => onChange({ ...campaign, previewText: event.target.value })} maxLength={160} placeholder="The short line shown beside the subject in an inbox" />
          <label className="block text-xs font-semibold text-white/75">Message
            <textarea value={campaign.bodyText} onChange={(event) => onChange({ ...campaign, bodyText: event.target.value })} rows={11} required minLength={20} maxLength={12000} placeholder="Write one helpful update. Keep it clear, personal, and focused on one next step." className="mt-2 w-full rounded-2xl border border-white/10 bg-[#090f1d] px-3 py-3 text-sm font-normal leading-relaxed text-white placeholder:text-white/30" />
            <span className="mt-1 block text-[10px] font-normal text-white/35">Plain text is formatted into a clean email layout when sent. Links and formatting can be added in a later release.</span>
          </label>
          <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
            <button type="submit" disabled={working} className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/15 px-4 text-sm font-semibold text-white/80 hover:bg-white/5 disabled:opacity-50"><FileText className="size-4" aria-hidden />{working ? "Saving…" : "Save draft"}</button>
            <button type="button" onClick={onSend} disabled={working || !campaign.id || !studio.delivery.ready || studio.totals.active === 0} className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-500 px-4 text-sm font-semibold text-white hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-40"><Send className="size-4" aria-hidden />{working ? "Working…" : "Send campaign"}</button>
            {!campaign.id ? <span className="text-xs text-white/35">Save this draft before sending.</span> : null}
          </div>
        </form>
      </section>

      <aside className="space-y-5">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-violet-500/[0.04] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/70">Send preview</p>
          <div className="mt-4 rounded-2xl bg-white p-4 text-[#071426] shadow-xl shadow-black/20">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#5c6b80]">From MKSAnalytIQ</p>
            <p className="mt-2 text-sm font-bold">{campaign.subject || "Your subject line"}</p>
            <p className="mt-1 text-xs text-[#5c6b80]">{campaign.previewText || "Preview text will appear here."}</p>
            <div className="my-4 border-t border-[#e3e9f2]" />
            <p className="min-h-24 whitespace-pre-wrap text-xs leading-relaxed text-[#344258]">{campaign.bodyText || "Your message preview will appear here as you write."}</p>
            <div className="mt-4 border-t border-[#e3e9f2] pt-3 text-[9px] leading-relaxed text-[#68778b]">You’re receiving this because you opted in. Unsubscribe at any time.</div>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-white/45">Only active contacts are included. Contacts suppressed by Brevo remain suppressed.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
          <h3 className="text-sm font-bold">Saved drafts</h3>
          {campaigns.length ? <ul className="mt-3 space-y-1">{campaigns.map((item) => <li key={item.id}><button type="button" onClick={() => onEdit(item)} className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left hover:bg-white/5"><FileText className="size-4 shrink-0 text-cyan-200/70" aria-hidden /><span className="min-w-0 flex-1"><span className="block truncate text-xs font-semibold">{item.name}</span><span className="mt-0.5 block truncate text-[10px] text-white/40">{item.subject}</span></span><ChevronRight className="size-3.5 text-white/35" aria-hidden /></button></li>)}</ul> : <p className="mt-3 text-xs text-white/45">Drafts you save will appear here.</p>}
        </div>
      </aside>
    </div>
  );
}

function Setup({ delivery }: { delivery: MarketingStudioData["delivery"] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
        <div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-blue-300/10 text-blue-200"><Settings2 className="size-5" aria-hidden /></span><div><h2 className="font-bold">Connect email delivery</h2><p className="mt-1 text-xs text-white/45">The workspace manages your contacts and drafts; Brevo delivers campaigns.</p></div></div>
        <div className={`mt-5 flex items-start gap-3 rounded-2xl border p-4 ${delivery.ready ? "border-emerald-300/20 bg-emerald-300/[0.07]" : "border-amber-300/20 bg-amber-300/[0.06]"}`}>
          {delivery.ready ? <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-200" aria-hidden /> : <CircleAlert className="mt-0.5 size-4 shrink-0 text-amber-200" aria-hidden />}
          <div><p className="text-sm font-semibold">{delivery.ready ? "Brevo is connected" : "Brevo setup is incomplete"}</p><p className="mt-1 text-xs leading-relaxed text-white/55">{delivery.ready ? "Campaigns can be sent after they’re saved. You’ll confirm every send." : `Missing: ${delivery.missing.join(", ")}.`}</p></div>
        </div>
        <ol className="mt-6 space-y-4">
          <SetupStep number="01" title="Connect Google sign-in" text="Create a Google OAuth web client. Add https://mksanalytiq.in/api/auth/callback/google as its redirect URI, then save GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in Vercel. The owner account defaults to MKSAnalytIQ@gmail.com." />
          <SetupStep number="02" title="Connect persistent storage" text="Create a Neon Postgres database and save its pooled connection string as DATABASE_URL in Vercel. Add BETTER_AUTH_URL, BETTER_AUTH_SECRET, VITE_AUTH_ENABLED=true, and VITE_AUTH_PROVIDER=google there too, then redeploy." />
          <SetupStep number="03" title="Connect Brevo delivery" text="BREVO_API_KEY, BREVO_LIST_ID, BREVO_SENDER_EMAIL, and BREVO_SENDER_NAME are server-side settings. The API key stays off the browser; the contact list is scoped to MKSAnalytIQ." />
          <SetupStep number="04" title="Add opted-in contacts" text="Import or add only people who agreed to receive MKSAnalytIQ marketing email. Unsubscribed and suppressed contacts are excluded from future sends." />
        </ol>
        <p className="mt-6 rounded-2xl border border-white/10 bg-black/10 p-4 text-xs leading-relaxed text-white/45">This first release uses one private MKSAnalytIQ workspace and server-side provider settings. Workspace and membership data are tenant-scoped so a later customer version can add separate accounts, teams, and billing.</p>
      </section>
    </div>
  );
}

function SetupStep({ number, title, text }: { number: string; title: string; text: string }) {
  return <li className="flex gap-4"><span className="grid size-8 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-[10px] font-bold text-cyan-100">{number}</span><div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-1 text-xs leading-relaxed text-white/50">{text}</p></div></li>;
}

function Field(props: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, className, ...input } = props;
  return <label className="block text-xs font-semibold text-white/75">{label}<input {...input} className={`mt-2 h-11 w-full rounded-xl border border-white/10 bg-[#090f1d] px-3 text-sm font-normal text-white placeholder:text-white/30 ${className ?? ""}`} /></label>;
}

function EmptyState({ text }: { text: string }) {
  return <div className="mt-5 rounded-2xl border border-dashed border-white/10 bg-black/10 px-5 py-8 text-center text-xs leading-relaxed text-white/40">{text}</div>;
}

function parseSubscriberCsv(text: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (character === '"') {
      if (quoted && text[index + 1] === '"') { cell += '"'; index += 1; }
      else quoted = !quoted;
    } else if (character === "," && !quoted) {
      row.push(cell.trim()); cell = "";
    } else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && text[index + 1] === "\n") index += 1;
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = []; cell = "";
    } else {
      cell += character;
    }
  }
  if (quoted) throw new Error("The CSV has an unfinished quoted field.");
  row.push(cell.trim());
  if (row.some(Boolean)) rows.push(row);
  if (rows.length < 2) throw new Error("Add a header row and at least one contact.");
  const headers = rows[0].map((value) => value.replace(/^\uFEFF/, "").trim().toLowerCase());
  const emailIndex = headers.indexOf("email");
  const sourceIndex = headers.indexOf("consent_source");
  const firstNameIndex = headers.indexOf("first_name");
  const consentedAtIndex = headers.indexOf("consented_at");
  if (emailIndex < 0 || sourceIndex < 0) throw new Error("CSV headers must include email and consent_source.");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return rows.slice(1).map((values, index) => {
    const email = values[emailIndex]?.trim() ?? "";
    const consentSource = values[sourceIndex]?.trim() ?? "";
    const firstName = firstNameIndex >= 0 ? values[firstNameIndex]?.trim() ?? "" : "";
    const consentedAt = consentedAtIndex >= 0 ? values[consentedAtIndex]?.trim() ?? "" : "";
    if (!emailPattern.test(email)) throw new Error(`Row ${index + 2} needs a valid email address.`);
    if (consentSource.length < 3) throw new Error(`Row ${index + 2} needs a consent_source.`);
    if (consentedAt && !/^\d{4}-\d{2}-\d{2}$/.test(consentedAt)) throw new Error(`Row ${index + 2} needs consented_at in YYYY-MM-DD format.`);
    return { email, firstName, consentSource, ...(consentedAt ? { consentedAt } : {}) };
  });
}

function StudioLoading() {
  return <div className="grid min-h-screen place-items-center bg-[#070b16] px-5 text-sm text-white/50"><div className="text-center"><div className="mx-auto size-8 animate-spin rounded-full border-2 border-white/15 border-t-cyan-200" /><p className="mt-4">Opening your private workspace…</p></div></div>;
}
