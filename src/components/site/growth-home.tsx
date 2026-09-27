import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Compass,
  Cpu,
  MapPin,
  Megaphone,
  Rocket,
  Smartphone,
  Sparkles,
  Target,
  UserRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/site/button";
import { FaqList } from "@/components/site/faq";
import { JsonLd } from "@/components/site/json-ld";
import { Preview } from "@/components/site/previews";
import { SiteShell } from "@/components/site/shell";
import { Testimonials } from "@/components/site/testimonials";
import { WhatsAppButton } from "@/components/site/whatsapp";
import { track } from "@/lib/analytics";
import { faqsFor, projects } from "@/lib/content";
import { faqSchema } from "@/lib/seo";

const services: {
  title: string;
  slug: string;
  text: string;
  icon: LucideIcon;
  color: string;
}[] = [
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    text: "SEO, ads and content planned around enquiries your team can follow up.",
    icon: Megaphone,
    color: "text-orange-600 bg-orange-50",
  },
  {
    title: "Web Development",
    slug: "web-development",
    text: "Fast, accessible websites and web applications shaped around your business.",
    icon: Code2,
    color: "text-blue-700 bg-blue-50",
  },
  {
    title: "Software Development",
    slug: "software-development",
    text: "Custom software, dashboards and APIs, scoped before anyone builds.",
    icon: Workflow,
    color: "text-orange-600 bg-orange-50",
  },
  {
    title: "App Development",
    slug: "app-development",
    text: "Android, iOS and cross-platform apps with a clear path from idea to launch.",
    icon: Smartphone,
    color: "text-blue-700 bg-blue-50",
  },
  {
    title: "AI Development",
    slug: "ai-development",
    text: "Useful AI and automation with people reviewing important decisions.",
    icon: BrainCircuit,
    color: "text-orange-600 bg-orange-50",
  },
];

const steps: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Understand", text: "Goals, audience and requirements.", icon: UserRound },
  { title: "Plan", text: "Scope, strategy and a practical roadmap.", icon: Compass },
  { title: "Build", text: "Design, development and review.", icon: Code2 },
  { title: "Launch", text: "Testing and a confident handoff.", icon: Rocket },
  { title: "Grow", text: "Support and useful improvements.", icon: Sparkles },
];

const projectSlugs = ["buildsite", "taxpilot", "shortgen", "carnispora"];
const featured = projectSlugs.flatMap((slug) => {
  const project = projects.find((item) => item.slug === slug);
  return project ? [project] : [];
});
const technologyNames = [...new Set(projects.flatMap((project) => project.stack))].slice(0, 10);
const growthFaqs = faqsFor("home");

export function GrowthHome() {
  return (
    <SiteShell cta={false} tone="warm">
      <JsonLd data={faqSchema(growthFaqs)} />
      <div className="growth-home">
        <section className="growth-hero relative overflow-hidden">
          <div className="growth-orb growth-orb--blue" aria-hidden />
          <div className="growth-orb growth-orb--orange" aria-hidden />
          <div className="mx-auto grid max-w-6xl items-center gap-7 px-5 pb-10 pt-9 sm:pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-2 lg:pb-14 lg:pt-14">
            <div className="relative z-10">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#e6dfd2] bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.17em] text-[#4b5668] shadow-sm">
                <span className="size-1.5 rounded-full bg-[#f45c25]" aria-hidden />
                Digital · Software · AI · Apps · Marketing
              </p>
              <h1 className="mt-6 max-w-xl font-display text-[3.35rem] font-extrabold leading-[0.94] tracking-[-0.055em] text-[#101a35] sm:text-7xl lg:text-[5.1rem]">
                Build Smarter
                <span className="growth-title-gradient mt-1 block">Grow Faster</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#485369] sm:text-base">
                MKSANALYTIQ is a Noida-based digital, software and AI company helping businesses
                build modern websites, apps and software, and grow with practical digital marketing.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="growth-primary-button h-12 rounded-full px-6 text-sm font-bold"
                >
                  <Link
                    to="/contact"
                    onClick={() => track("hero_cta_click", { source: "growth-home" })}
                  >
                    Get a Free Consultation <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
                <WhatsAppButton
                  source="growth-home-hero"
                  variant="line"
                  className="h-12 rounded-full border-[#ded8cd] bg-white/85 px-5 text-[#17213a]"
                >
                  WhatsApp Us
                </WhatsAppButton>
              </div>
              <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
                {[
                  { title: "End-to-end", detail: "Digital solutions", icon: Rocket },
                  { title: "Modern", detail: "Technology & AI", icon: Cpu },
                  { title: "Focused on", detail: "Business growth", icon: Target },
                ].map(({ title, detail, icon: Icon }) => (
                  <li key={title} className="flex items-center gap-2.5 text-xs text-[#485369]">
                    <Icon className="size-5 shrink-0 text-[#f15b28]" aria-hidden />
                    <span>
                      <span className="block font-bold text-[#17213a]">{title}</span>
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <GrowthHeroVisual />
          </div>
          <div className="mx-auto max-w-6xl px-5 pb-5 lg:pb-7">
            <dl className="growth-glass-panel grid overflow-hidden rounded-3xl sm:grid-cols-2 lg:grid-cols-4">
              <GrowthStat
                icon={BriefcaseBusiness}
                title="Core Services"
                value="5+"
                detail="From marketing through AI"
              />
              <GrowthStat
                icon={Sparkles}
                title="Selected Work"
                value="Real projects"
                detail="Products and platforms"
              />
              <GrowthStat
                icon={MapPin}
                title="Our Base"
                value="Noida, India"
                detail="Uttar Pradesh"
              />
              <GrowthStat
                icon={Target}
                title="Our Focus"
                value="Business growth"
                detail="For modern businesses"
              />
            </dl>
          </div>
        </section>

        <section
          id="growth-services"
          className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:py-16"
        >
          <SectionHeading
            eyebrow="Our services"
            title="Complete Digital Solutions"
            subtitle="From digital marketing to advanced AI solutions, get the right mix of technology and strategy for your business."
            linkTo="/services"
            linkText="View all services"
          />
          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {services.map(({ title, slug, text, icon: Icon, color }) => (
              <li key={slug}>
                <Link
                  to="/services/$service"
                  params={{ service: slug }}
                  className="growth-service-card group flex h-full min-h-64 flex-col rounded-3xl border border-[#e8e3d9] bg-white/85 p-5 shadow-[0_9px_26px_rgba(41,48,68,0.045)] transition hover:-translate-y-1 hover:border-[#f4b296] hover:shadow-[0_18px_38px_rgba(41,48,68,0.09)]"
                >
                  <span className={`grid size-12 place-items-center rounded-2xl ${color}`}>
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-[#121d38]">{title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-[#586477]">{text}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-[#e54d1b]">
                    Learn more{" "}
                    <ArrowRight
                      className="size-3.5 transition group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section id="growth-process" className="border-y border-[#e9e2d6] bg-white/45">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:py-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="growth-eyebrow">Our process</p>
              <h2 className="mt-3 max-w-sm font-display text-3xl font-extrabold leading-tight tracking-tight text-[#101a35] sm:text-4xl">
                A clear path from idea to launch
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#586477]">
                A collaborative process keeps the scope clear, the work visible and each next step
                easy to understand.
              </p>
              <Button
                asChild
                variant="line"
                className="mt-5 rounded-full border-[#eb7a52] bg-white/65 text-[#c8461c] hover:bg-[#fff0e8]"
              >
                <Link to="/process">
                  Learn about our process <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {steps.map(({ title, text, icon: Icon }, index) => (
                <li
                  key={title}
                  className="relative rounded-2xl border border-[#ece5db] bg-white/80 p-4 shadow-sm"
                >
                  <span className="grid size-11 place-items-center rounded-2xl bg-[#fff2e9] text-[#e75525]">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <p className="mt-4 text-[10px] font-extrabold tracking-[0.16em] text-[#e75525]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-1 font-display text-sm font-bold text-[#17213a]">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#687386]">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="growth-work" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:py-16">
          <SectionHeading
            eyebrow="Case studies"
            title="Real Projects. Real Impact."
            subtitle="Explore selected products and platforms built by MKSANALYTIQ."
            linkTo="/case-studies"
            linkText="View all case studies"
          />
          <ul className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {featured.map((project) => (
              <li key={project.slug}>
                <article className="growth-project-card overflow-hidden rounded-3xl border border-[#e8e3d9] bg-white shadow-[0_9px_26px_rgba(41,48,68,0.055)]">
                  <Link
                    to="/portfolio/$slug"
                    params={{ slug: project.slug }}
                    className="group relative block overflow-hidden"
                    onClick={() =>
                      track("portfolio_project_click", {
                        project: project.slug,
                        source: "growth-home",
                      })
                    }
                  >
                    <Preview
                      slug={project.slug}
                      loading="lazy"
                      className="h-40 rounded-t-3xl transition duration-500 group-hover:scale-[1.03] sm:h-44"
                    />
                    <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-white text-[#e65324] shadow-md">
                      <ArrowUpRight className="size-4" aria-hidden />
                    </span>
                  </Link>
                  <div className="p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#e65324]">
                      {project.kind}
                    </p>
                    <h3 className="mt-1 font-display text-base font-bold text-[#17213a]">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#687386]">{project.summary}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-[#e9e2d6] bg-[#fffdf8]">
          <div className="mx-auto max-w-6xl px-5 py-10 sm:py-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="growth-eyebrow">Technology</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#101a35]">
                  Modern Technology Stack
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-[#586477]">
                  Tools used across our published projects to build practical, maintainable
                  solutions.
                </p>
              </div>
              <Link
                to="/portfolio"
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#eb7a52] px-4 text-xs font-bold text-[#c8461c] hover:bg-[#fff0e8]"
              >
                Explore our work <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
              {technologyNames.map((name, index) => (
                <li
                  key={name}
                  className="rounded-2xl border border-[#e9e4db] bg-white px-3 py-4 text-center shadow-sm"
                >
                  <span
                    className={`mx-auto grid size-9 place-items-center rounded-xl font-display text-sm font-extrabold ${index % 2 ? "bg-blue-50 text-blue-700" : "bg-orange-50 text-orange-700"}`}
                  >
                    {name.slice(0, 2)}
                  </span>
                  <span className="mt-2 block truncate text-[10px] font-semibold text-[#39465c]">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-11 sm:py-14">
          <div className="growth-contact-panel relative overflow-hidden rounded-[2rem] px-6 py-9 sm:px-10 sm:py-11">
            <div className="growth-contact-orbit" aria-hidden>
              <span />
              <span />
              <span />
            </div>
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <p className="growth-eyebrow text-[#ffe4d4]">Let’s connect</p>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready to start your project?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Tell us what you want to build or improve. We’ll discuss the goal, a sensible
                  scope and the next step.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="growth-primary-button h-12 rounded-full px-6">
                    <Link
                      to="/contact"
                      onClick={() => track("quote_click", { source: "growth-home-final" })}
                    >
                      Get a Free Consultation <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  </Button>
                  <WhatsAppButton
                    source="growth-home-final"
                    variant="line"
                    className="h-12 rounded-full border-white/35 bg-white/10 px-5 text-white hover:bg-white/15"
                  >
                    WhatsApp Us
                  </WhatsAppButton>
                </div>
              </div>
              <div className="grid gap-3 text-xs font-semibold text-white/85 sm:grid-cols-2 lg:grid-cols-1">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-[#ffad7f]" aria-hidden /> Noida, Uttar Pradesh
                </span>
                <span className="inline-flex items-center gap-2">
                  <Workflow className="size-4 text-[#ffad7f]" aria-hidden /> Delhi NCR & India
                </span>
                <span className="inline-flex items-center gap-2">
                  <ArrowRight className="size-4 text-[#ffad7f]" aria-hidden /> Clear, practical next
                  steps
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 pb-10 sm:pb-14">
          <FaqList items={growthFaqs} heading="Questions about working with us?" />
        </section>
        <Testimonials />
      </div>
    </SiteShell>
  );
}

function GrowthHeroVisual() {
  return (
    <div
      className="growth-visual relative mx-auto h-[340px] w-full max-w-xl sm:h-[420px] lg:h-[500px]"
      role="img"
      aria-label="A website and business analytics dashboard displayed on a laptop"
    >
      <div
        className="growth-visual-glow absolute left-1/2 top-1/2 size-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        aria-hidden
      />
      <div className="growth-laptop absolute bottom-9 left-1/2 w-[88%] max-w-[31rem] -translate-x-1/2">
        <div className="rounded-t-[1.5rem] border border-white/90 bg-gradient-to-br from-white to-[#dbe6f4] p-2 shadow-[0_26px_45px_rgba(31,56,92,0.2)] sm:p-3">
          <div className="relative h-48 overflow-hidden rounded-[0.9rem] bg-[#10243f] p-4 text-white sm:h-60 sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.18em] text-white/80">
                <span className="grid size-5 place-items-center rounded-md bg-gradient-to-br from-blue-400 to-orange-400 text-[10px]">
                  M
                </span>{" "}
                MKSANALYTIQ
              </span>
              <span className="flex gap-1">
                <i className="size-1.5 rounded-full bg-white/40" />
                <i className="size-1.5 rounded-full bg-white/40" />
                <i className="size-1.5 rounded-full bg-white/40" />
              </span>
            </div>
            <div className="mt-4 grid h-[calc(100%-2rem)] grid-cols-[0.72fr_1.28fr] gap-3">
              <div className="flex flex-col justify-between rounded-lg bg-white/[0.055] p-3">
                <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-blue-100/60">
                  Ideas. Products. Growth.
                </span>
                <strong className="font-display text-lg leading-tight sm:text-2xl">
                  Build what
                  <br />
                  moves you
                  <br />
                  <span className="text-[#ff9b62]">forward.</span>
                </strong>
                <span className="h-1.5 w-12 rounded-full bg-[#ff8a54]" />
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.045] p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-semibold text-white/70">Growth overview</span>
                  <span className="rounded-full bg-emerald-300/10 px-2 py-0.5 text-[7px] text-emerald-200">
                    On track
                  </span>
                </div>
                <div className="mt-3 flex h-[72%] items-end gap-1.5 border-b border-l border-white/15 px-2 pb-0.5 sm:gap-2">
                  {[28, 42, 34, 58, 49, 70, 61, 88].map((height, index) => (
                    <span
                      key={index}
                      className="growth-chart-bar flex-1 rounded-t-sm"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[6px] text-white/40">
                  <span>Plan</span>
                  <span>Build</span>
                  <span>Launch</span>
                  <span>Grow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto h-4 w-[112%] -translate-x-[5%] rounded-b-2xl bg-gradient-to-b from-[#d4dce8] via-[#aab6c7] to-[#7f8b9c] shadow-[0_18px_23px_rgba(42,54,71,0.15)]">
          <span className="absolute left-1/2 top-0.5 h-1 w-16 -translate-x-1/2 rounded-full bg-[#758197]/60" />
        </div>
      </div>
      <FloatingCard
        className="left-[0%] top-[20%] -rotate-6 sm:left-[2%]"
        icon={Megaphone}
        label="Digital Marketing"
      />
      <FloatingCard
        className="right-[1%] top-[5%] rotate-6"
        icon={BrainCircuit}
        label="AI Solutions"
      />
      <FloatingCard
        className="right-[-2%] top-[44%] rotate-3"
        icon={Smartphone}
        label="App Development"
      />
      <FloatingCard
        className="bottom-[5%] left-[8%] rotate-3"
        icon={Code2}
        label="Web & Software"
      />
    </div>
  );
}

function FloatingCard({
  className,
  icon: Icon,
  label,
}: {
  className: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <div
      className={`growth-floating-card absolute z-10 hidden w-36 items-center gap-2 rounded-2xl border border-white/90 bg-white/90 p-3 shadow-[0_14px_30px_rgba(31,56,92,0.14)] backdrop-blur sm:flex ${className}`}
      aria-hidden
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-50 to-orange-50 text-blue-700">
        <Icon className="size-5" />
      </span>
      <span className="text-[10px] font-bold leading-snug text-[#17213a]">{label}</span>
    </div>
  );
}

function GrowthStat({
  icon: Icon,
  title,
  value,
  detail,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="flex items-center gap-3 border-[#ece5da] px-5 py-4 sm:border-l sm:first:border-l-0">
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#fff1e7] text-[#e75525]">
        <Icon className="size-5" aria-hidden />
      </span>
      <div>
        <dt className="text-[10px] font-medium text-[#687386]">{title}</dt>
        <dd className="mt-0.5 font-display text-base font-extrabold text-[#17213a]">{value}</dd>
        <dd className="mt-0.5 text-[10px] text-[#687386]">{detail}</dd>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  linkTo,
  linkText,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  linkTo: "/services" | "/case-studies";
  linkText: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        <p className="growth-eyebrow">{eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#101a35] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#586477]">{subtitle}</p>
      </div>
      <Link
        to={linkTo}
        className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#eb7a52] px-4 text-xs font-bold text-[#c8461c] hover:bg-[#fff0e8]"
      >
        {linkText} <ArrowRight className="size-3.5" aria-hidden />
      </Link>
    </div>
  );
}
