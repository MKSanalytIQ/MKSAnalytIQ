import { useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";
import { whatsappHref } from "@/lib/content";
import { Button } from "./button";

const budgets = ["15k", "30k", "50k+", "1L+"] as const;

export function LeadForm({ source }: { source: string }) {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [whatsappDraft, setWhatsappDraft] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      business: String(form.get("business") ?? "").trim(),
      service: String(form.get("service") ?? "").trim(),
      budget: String(form.get("budget") ?? ""),
      whatsapp: String(form.get("whatsapp") ?? "").replace(/\D/g, "").slice(-10),
    };
    if (payload.name.length < 2 || payload.business.length < 2 || !payload.service) {
      setError("Add your name, business, and the service you need.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(payload.whatsapp) || !budgets.includes(payload.budget as (typeof budgets)[number])) {
      setError("Use a 10-digit WhatsApp number and pick a budget.");
      return;
    }
    setError("");
    setBusy(true);
    const text = `Hello, I’m ${payload.name} from ${payload.business}. I need ${payload.service}. Budget: ${payload.budget}.`;
    const fallback = whatsappHref(text);
    setWhatsappDraft(fallback);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind: "landing", ...payload, source, fax: String(form.get("fax") ?? "") }),
      });
      const result = await response.json().catch(() => null) as { ok?: boolean; message?: string } | null;
      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || "We couldn’t send the enquiry. You can still send it on WhatsApp below.");
      }
      setSent(true);
      track("lead_form_submit", { source, service: payload.service, budget: payload.budget });
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "We couldn’t send the enquiry. You can still send it on WhatsApp below.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} onChange={() => {
      if (sent) setSent(false);
      if (whatsappDraft) setWhatsappDraft("");
      if (error) setError("");
    }} className="space-y-3 rounded-3xl border border-line bg-card p-5" noValidate>
      <h2 className="text-2xl font-extrabold">Tell us what you need</h2>
      <p className="text-sm leading-relaxed text-mute">
        Send your brief to the studio. We’ll use it to reply, and you can also share it on WhatsApp.
      </p>
      {error ? (
        <p className="rounded-2xl bg-paper p-3 text-sm" role="alert">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm" role="status">
          Your enquiry has been submitted. The studio will reply on WhatsApp.
        </p>
      ) : null}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Fax
          <input name="fax" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="block text-sm font-semibold">
        Name
        <input name="name" required autoComplete="name" className="mt-1 h-11 w-full rounded-xl border border-line px-3 font-normal" />
      </label>
      <label className="block text-sm font-semibold">
        Business name
        <input name="business" required autoComplete="organization" className="mt-1 h-11 w-full rounded-xl border border-line px-3 font-normal" />
      </label>
      <label className="block text-sm font-semibold">
        Service
        <select name="service" required className="mt-1 h-11 w-full rounded-xl border border-line bg-card px-3 font-normal" defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          <option>Performance marketing</option>
          <option>SEO and content</option>
          <option>Social media</option>
          <option>Event management</option>
          <option>Website or app</option>
          <option>Analytics</option>
        </select>
      </label>
      <label className="block text-sm font-semibold">
        Monthly budget
        <select name="budget" required className="mt-1 h-11 w-full rounded-xl border border-line bg-card px-3 font-normal" defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {budgets.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-semibold">
        WhatsApp number
        <input name="whatsapp" required inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile" className="mt-1 h-11 w-full rounded-xl border border-line px-3 font-normal" />
      </label>
      <Button type="submit" disabled={busy || sent}>
        {busy ? "Sending enquiry…" : sent ? "Enquiry sent" : "Send enquiry"}
      </Button>
      {whatsappDraft ? (
        <a className="inline-flex min-h-11 items-center px-3 text-sm font-semibold text-primary" href={whatsappDraft} target="_blank" rel="noopener noreferrer">
          {sent ? "Also share on WhatsApp" : "Use WhatsApp instead"}
        </a>
      ) : null}
    </form>
  );
}
