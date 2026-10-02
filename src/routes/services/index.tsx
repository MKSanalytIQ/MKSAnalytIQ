import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/site/button";
import { SiteShell } from "@/components/site/shell";
import { WhatsAppButton } from "@/components/site/whatsapp";
import { ServiceArtwork } from "@/components/site/service-artwork";
import { extras, services } from "@/lib/content";
import { track } from "@/lib/analytics";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageMeta({
      title: "Services | Digital Marketing, Web, Software, Apps and AI | MKSAnalytIQ",
      description:
        "Explore marketing, websites, ecommerce, CRM, AI chatbots and business automation from MKSAnalytIQ in Noida. Services for Delhi NCR and clients across India.",
      path: "/services",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Digital marketing, websites, software, apps and AI.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            Hire one practice or several. Digital marketing, web development, custom software, app
            development and AI development are the main work. Explore dedicated X / Twitter,
            Instagram and YouTube growth services below. Event management is available when a launch
            or gathering is part of the brief. The Noida studio serves businesses across{" "}
            <Link to="/digital-marketing-software-delhi-ncr" className="font-semibold text-primary">
              Delhi NCR
            </Link>{" "}
            and India.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/contact" onClick={() => track("quote_click", { source: "services" })}>
                Book Free Consultation <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <WhatsAppButton source="services" message="Hello, I’d like to talk about a service." />
          </div>
        </div>
      </section>

      <nav aria-label="Jump to a service" className="mx-auto max-w-6xl px-5 pt-6">
        <div className="flex flex-wrap items-center gap-2 rounded-3xl border border-line bg-card p-4">
          <span className="mr-2 text-xs font-semibold uppercase tracking-widest text-mute">
            Jump to
          </span>
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="inline-flex min-h-9 items-center rounded-full border border-line bg-paper px-3 py-2 text-center text-xs font-semibold leading-tight text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              {service.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto grid max-w-6xl items-stretch gap-6 px-5 py-12 md:grid-cols-2">
        {services.map((service, index) => (
          <article
            key={service.id}
            id={service.id}
            className="service-listing-card group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-3xl border border-[#dfe6f0] bg-card shadow-[0_14px_40px_rgba(25,45,80,0.06)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="service-artwork-panel relative aspect-[16/9] overflow-hidden border-b border-line">
              <ServiceArtwork serviceId={service.id} title={service.title} />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight">
                <Link
                  to="/services/$service"
                  params={{ service: service.slug }}
                  className="hover:text-primary"
                >
                  {service.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-mute">{service.blurb}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-mute">
                Deliverables
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {service.deliverables.slice(0, 4).map((point) => (
                  <li key={point} className="flex gap-3 text-sm">
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                <Button asChild>
                  <Link
                    to="/contact"
                    search={{ service: service.id }}
                    onClick={() => track("quote_click", { source: `services-${service.slug}` })}
                  >
                    {service.cta} <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="line">
                  <Link to="/services/$service" params={{ service: service.slug }}>
                    View service
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-extrabold">Included when the brief needs them</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {extras.map((item) => (
              <article key={item.title} className="rounded-3xl border border-line p-5">
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
