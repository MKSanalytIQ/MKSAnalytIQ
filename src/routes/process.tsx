import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/site/button";
import { ProcessSteps } from "@/components/site/process-steps";
import { SiteShell } from "@/components/site/shell";
import { track } from "@/lib/analytics";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/process")({
  head: () =>
    pageMeta({
      title: "Our Process | MKSAnalytIQ",
      description:
        "How a project with MKSAnalytIQ moves from discovery in Noida through plan, build, launch and the next improvement.",
      path: "/process",
    }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Process</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Five steps. No mystery month.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            Whether the job is a social retainer, a one-day event or a product build, the shape stays the same. You
            always know what happens next.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-3xl font-extrabold tracking-tight">Our Process</h2>
        <ProcessSteps />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className="rounded-3xl border border-line bg-card p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Before we start</p>
          <h2 className="mt-2 text-2xl font-extrabold">Bring the context; we’ll shape the scope together.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute">
            You don’t need a polished brief. A few notes help us use the first conversation well:
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["The goal", "What needs to change for the business or its customers."],
              ["What exists", "Current website, campaigns, tools or event plans."],
              ["Your constraints", "Timing, budget range, people involved or fixed dates."],
            ].map(([title, text]) => (
              <li key={title} className="rounded-2xl bg-paper p-4">
                <h3 className="font-display text-base font-bold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-mute">{text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-mute">
            The written scope records the work, timing and fee for your approval before production starts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-4 rounded-3xl bg-navy p-6 text-paper md:grid-cols-3 md:p-10">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold">What you leave with</h2>
            <ul className="mt-4 space-y-2 text-sm text-paper/80">
              <li>A written scope before production starts.</li>
              <li>Files, accounts and repos in your name where the work allows it.</li>
              <li>A short note after launch: what moved, and what we would change.</li>
            </ul>
          </div>
          <div className="flex items-end">
            <Button asChild>
              <Link to="/contact" onClick={() => track("quote_click", { source: "process" })}>
                Book Free Consultation <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
