/**
 * Editable business content for MKSAnalytIQ.
 * Change copy, offers, and public links here — components read from this file.
 *
 * GitHub: public product code is published under `github` / `githubHandle`.
 * Update those fields if the account changes. Do not hardcode the handle in components.
 * Project repository URLs below are the real public repos; leave a URL blank rather than guessing.
 */

export const site = {
  url: "https://www.mksanalytiq.in",
  ogImage: "/og.jpg",
  locale: "en_IN",
  /** Shown on legal pages. Update when the text changes. */
  legalUpdated: "24 September 2026",
} as const;

const companySocialProfiles = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/company/mks-analytiq" },
];

export const company = {
  name: "MKSAnalytIQ",
  wordLeft: "MKS",
  wordRight: "ANALYTIQ",
  proprietor: "Manoj Kumar Singh",
  proprietorSocialLinks: [
    { platform: "X", handle: "@mksanalytiq", url: "https://x.com/mksanalytiq" },
    { platform: "Facebook", handle: "MKBRJ", url: "https://www.facebook.com/MKBRJ/" },
  ],
  phoneDisplay: "+91 95608 14623",
  phoneTel: "+919560814623",
  whatsapp: "https://wa.me/919560814623",
  email: "hello@mksanalytiq.in",
  addressLines: ["C-81, C Block", "Sector 8, Noida", "Uttar Pradesh 201306"],
  addressOneLine: "C-81, C Block, Sector 8, Noida, Uttar Pradesh 201306",
  maps: "https://www.google.com/maps/search/?api=1&query=C-81+C+Block+Sector+8+Noida+Uttar+Pradesh+201306",
  /**
   * Leave empty until hours are confirmed. An empty string is not shown.
   * Example once confirmed: "Mon–Sat, 10:00–18:00 IST"
   */
  hours: "",
  github: "https://github.com/MKSanalytIQ",
  githubHandle: "MKSanalytIQ",
  socialProfiles: companySocialProfiles,
  socialLinks: companySocialProfiles.map((profile) => profile.url),
  twitterHandle: undefined as string | undefined,
} as const;

export function whatsappHref(text?: string) {
  if (!text) return company.whatsapp;
  const url = new URL(company.whatsapp);
  url.searchParams.set("text", text);
  return url.toString();
}

export const hero = {
  title: "Build Digital. Grow Smarter.",
  lede: "MKSAnalytIQ is a technology and digital growth studio in Noida, helping businesses across Delhi NCR and India with digital marketing, websites, software, apps and AI solutions.",
  trust: "Based in Noida • Serving Delhi NCR and India",
  primaryCta: "Get a Free Consultation",
  secondaryCta: "WhatsApp Us",
} as const;

export const finalCta = {
  title: "Have a project in mind?",
  text: "Tell us what you want to market, build or improve. The studio is in Noida and works with businesses across Delhi NCR and India.",
  primary: "Book Free Consultation",
  secondary: "Chat on WhatsApp",
} as const;

export const trustStatement = "Marketing + Technology under one roof";

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export const footerCompany = [
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Work" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/process", label: "Process" },
  { to: "/digital-marketing-software-delhi-ncr", label: "Delhi NCR" },
  { to: "/seo-services-noida", label: "SEO in Noida" },
  { to: "/google-ads-agency-noida", label: "Google Ads in Noida" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund Policy" },
] as const;

export type ServiceId =
  | "marketing"
  | "social"
  | "events"
  | "software"
  | "web"
  | "app"
  | "ai"
  | "twitter"
  | "instagram"
  | "youtube"
  | "whatsapp"
  | "chatbot"
  | "local"
  | "ecommerce"
  | "crm"
  | "email"
  | "maintenance"
  | "linkedin"
  | "metaads"
  | "instagramads"
  | "youtubeads"
  | "googleads";

export type ProjectCategory = "software" | "marketing" | "events" | "campaigns";

export const projectCategories: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "software", label: "Software" },
  { id: "marketing", label: "Marketing" },
  { id: "events", label: "Events" },
  { id: "campaigns", label: "Campaigns" },
];

export const services: {
  id: ServiceId;
  slug: string;
  title: string;
  h1: string;
  linkLabel: string;
  blurb: string;
  suitable: string;
  problem: string;
  solution: string;
  sections: { title: string; text: string }[];
  deliverables: string[];
  cta: string;
  related: ProjectCategory[];
  relatedServices: string[];
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  /** One sentence above the shared five-step process. */
  processIntro?: string;
  /** Factual tools used on published work. Not a promise for the next brief. */
  technologyNote?: string;
  /** Replaces the default “Who it is for” heading when set. */
  audienceTitle?: string;
  /** Replaces the default “Deliverables” heading when set. */
  deliverablesTitle?: string;
  /** Replaces the default “Process” heading when set. */
  processTitle?: string;
  /** Page-specific process. Other pages keep the shared five steps. */
  processSteps?: { n: string; title: string; text: string }[];
  /** Extra list card, same treatment as deliverables. */
  serviceMenu?: { title: string; intro?: string; items: string[] };
  /** Bottom button label. Hero keeps `cta` unless `heroCta` is set. */
  closingCta?: string;
  /** Hero button label. The services index keeps `cta`. */
  heroCta?: string;
  /** Service-page deliverable list. The services index keeps `deliverables`. */
  pageDeliverables?: string[];
  /** Replaces the default “Relevant work” heading when set. */
  workTitle?: string;
  /** FAQ ids for this page only, in display order. */
  faqIds?: string[];
}[] = [
  {
    id: "marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    h1: "Digital Marketing Company in Noida",
    linkLabel: "digital marketing services",
    blurb:
      "SEO, Google Ads, Meta Ads, social, content and reporting for businesses that want enquiries someone can answer.",
    suitable:
      "A business that already has an offer and needs people to enquire from search, ads or social, then needs someone on the team to answer. That might be a first campaign, a page that matches the ad, or a monthly read of spend and enquiries. No particular industry is required. The studio is in Noida, and this work is available across Delhi NCR and India.",
    problem:
      "Spend often starts before the offer, the page and the tracking agree. Without that, it is hard to tell which enquiry came from which channel.",
    solution:
      "The offer, the channels, the landing page and the report are one written scope. You approve it before anything launches. The scope does not promise a ranking or a number of leads.",
    sections: [],
    serviceMenu: {
      title: "Digital Marketing Services",
      intro: "A project uses the items named in its scope. The others stay off until you add them.",
      items: [
        "SEO",
        "Google Ads",
        "Meta Ads",
        "Social Media Marketing",
        "Content Marketing",
        "Lead Generation",
        "Analytics",
        "Conversion Optimization",
      ],
    },
    audienceTitle: "Who We Help",
    deliverablesTitle: "What You Get",
    deliverables: [
      "A written scope before launch",
      "Only the channels that scope names",
      "A landing page when the scope includes one",
      "Tracking on the form, call or WhatsApp path",
      "A report of enquiries and spend",
      "Changes after the first results, inside that scope",
    ],
    cta: "Book Free Consultation",
    closingCta: "Talk About Your Marketing Goals",
    related: ["marketing", "campaigns"],
    relatedServices: [
      "google-ads-management",
      "meta-ads-management",
      "instagram-ads-management",
      "youtube-ads-management",
    ],
    image: "/media/desk.jpg",
    imageAlt: "Digital marketing planning desk at MKSAnalytIQ",
    seoTitle: "Digital Marketing Company in Noida | MKSAnalytIQ",
    seoDescription:
      "Digital marketing from MKSAnalytIQ in Noida: SEO, Google Ads, Meta Ads, social, content and reporting for businesses across Delhi NCR and India.",
    processTitle: "Our Digital Growth Process",
    processIntro:
      "Five steps for a marketing engagement. You approve the plan before launch, and the report is enquiries and spend — not a ranking or a lead-count promise.",
    processSteps: [
      {
        n: "01",
        title: "Understand",
        text: "The offer, who should enquire, and what already exists: a site, ads, or tracking.",
      },
      {
        n: "02",
        title: "Plan",
        text: "A written scope: channels, page, tracking, timeline and fee. You approve it before launch.",
      },
      {
        n: "03",
        title: "Launch",
        text: "Campaigns and pages go live as that scope describes.",
      },
      {
        n: "04",
        title: "Measure",
        text: "Enquiries, spend and the path they came from, in a report you can read.",
      },
      {
        n: "05",
        title: "Optimize",
        text: "Keep what produces enquiries and change what does not, inside the scope.",
      },
    ],
    faqIds: ["dm-services", "dm-ads", "dm-measure", "dm-page", "dm-after", "dm-start"],
    technologyNote:
      "Tracking is the form, call or WhatsApp path the report uses. There is no separate ad platform to name here, and this page does not publish campaign results.",
  },
  {
    id: "web",
    slug: "web-development",
    title: "Web Development",
    h1: "Web Development Company in Noida",
    linkLabel: "web development services",
    blurb:
      "Business websites, web applications and the admin tools behind them, built so your team can run the site after launch.",
    suitable:
      "Companies in Noida, Delhi NCR and across India that need a public website, an online shop, or a web application their own staff can use.",
    problem:
      "A site gets launched without a clear page for the offer, or a tool is promised and the team has no screen they can actually operate.",
    solution:
      "We scope the pages or the application, build it in the open, and hand over what the written agreement says you keep.",
    sections: [],
    serviceMenu: {
      title: "Web Development Services",
      intro: "The written scope names which of these are in the project.",
      items: [
        "Business Websites",
        "Corporate Websites",
        "Landing Pages",
        "Ecommerce",
        "Web Applications",
        "Dashboards",
        "API Integrations",
        "Website Maintenance",
      ],
    },
    deliverablesTitle: "What We Deliver",
    pageDeliverables: [
      "A written scope of the pages or screens",
      "The site or web application that scope describes",
      "A form, call or WhatsApp path for enquiries",
      "A connection to payments, a CRM or another system only when the scope lists it",
      "Handover of what the written agreement says you keep",
      "Maintenance after launch only when the scope includes it",
    ],
    deliverables: [
      "Business websites",
      "Corporate websites",
      "Landing pages",
      "E-commerce websites",
      "Web applications",
      "Admin dashboards",
      "API integrations",
      "Website maintenance",
    ],
    cta: "Book Free Consultation",
    heroCta: "Discuss Your Website",
    closingCta: "Start a Web Project",
    related: ["software"],
    relatedServices: [
      "ecommerce-website-development",
      "website-maintenance",
      "software-development",
      "digital-marketing",
    ],
    image: "/media/work/buildsite.jpg",
    imageAlt: "BuildSite, a custom web application developed by MKSAnalytIQ",
    seoTitle: "Web Development Company in Noida | MKSAnalytIQ",
    seoDescription:
      "Business websites, landing pages, shops and web applications from MKSAnalytIQ in Noida, for companies across Delhi NCR and India.",
    processTitle: "From Design to Deployment",
    processIntro:
      "Six steps. You approve the plan before development, and maintenance after launch is included only when the scope says so.",
    processSteps: [
      {
        n: "01",
        title: "Planning",
        text: "The pages, who they are for, the content you already have, and how someone gets in touch.",
      },
      {
        n: "02",
        title: "Design",
        text: "The layout of those pages, approved before development starts.",
      },
      {
        n: "03",
        title: "Development",
        text: "The site or web application, built against the written scope.",
      },
      {
        n: "04",
        title: "Testing",
        text: "Forms, key pages and any connection named in the scope, checked before launch.",
      },
      {
        n: "05",
        title: "Launch",
        text: "The site goes live on the host agreed in the scope.",
      },
      {
        n: "06",
        title: "Maintenance",
        text: "Updates, fixes and small changes, only when the scope includes them.",
      },
    ],
    workTitle: "Relevant Projects",
    faqIds: ["web-kinds", "web-apps-page", "web-handover", "web-care", "web-connect", "web-begin"],
    technologyNote:
      "Published studio websites and web apps have used Next.js, TypeScript and JavaScript. PostgreSQL and Prisma show up when the product stores its own data. A new project does not automatically use all of those. The scope names the stack.",
  },
  {
    id: "software",
    slug: "software-development",
    title: "Software Development",
    h1: "Custom Software Development Company in Noida",
    linkLabel: "custom software development",
    blurb:
      "Custom software, SaaS platforms and business systems your team can run after the handover.",
    suitable:
      "Teams in Noida, Delhi NCR and across India that need software their own people can operate, not a file they cannot change.",
    problem:
      "A tool gets delivered without a handover the team can use, or the public site and the internal system are planned as if they were unrelated.",
    solution:
      "We scope the build, ship it in the open, and hand over what the written agreement says you keep — including a repository when that is part of the scope.",
    sections: [],
    serviceMenu: {
      title: "Custom Software Development",
      intro:
        "A project includes only what the written scope names. Workflow automation and AI-enabled software are a defined job a person still reviews, not a private model.",
      items: [
        "Business Software",
        "SaaS Platforms",
        "Web Applications",
        "Dashboards",
        "APIs",
        "Database Applications",
        "Workflow Automation",
        "AI-enabled Software",
      ],
    },
    deliverablesTitle: "What We Build",
    pageDeliverables: [
      "A screen for work that currently sits in spreadsheets or message threads",
      "A product more than one customer can sign in to",
      "A dashboard of records the system already holds",
      "An API or database so two parts of the operation share the same data",
      "A workflow that moves a job from one agreed step to the next",
      "An AI step inside that software, which a person still reviews",
    ],
    deliverables: [
      "Custom software",
      "SaaS development",
      "Web applications",
      "Business software",
      "Dashboards",
      "API development",
      "Database-backed applications",
      "AI-enabled software",
      "Repository handover",
    ],
    cta: "Book Free Consultation",
    heroCta: "Discuss Your Software Idea",
    closingCta: "Start Your Software Project",
    related: ["software"],
    relatedServices: [
      "crm-sales-automation",
      "whatsapp-business-automation",
      "web-development",
      "ai-development",
    ],
    image: "/media/devices.jpg",
    imageAlt: "Laptop and phone used for software development at MKSAnalytIQ",
    seoTitle: "Custom Software Development Company in Noida | MKSAnalytIQ",
    seoDescription:
      "Custom software development company in Noida building SaaS platforms, web applications, dashboards and business systems for teams across Delhi NCR and India.",
    processTitle: "Software Development Process",
    processIntro:
      "Six steps. You approve the scope before development, and support after deployment is included only when that scope says so.",
    processSteps: [
      {
        n: "01",
        title: "Requirements",
        text: "The operation the software has to support, who signs in, and what done means.",
      },
      {
        n: "02",
        title: "Architecture",
        text: "How the screens, data and any API fit. Written into the scope before building.",
      },
      {
        n: "03",
        title: "Development",
        text: "The software, built against that scope.",
      },
      {
        n: "04",
        title: "Testing",
        text: "The paths named in the scope, checked before deployment.",
      },
      {
        n: "05",
        title: "Deployment",
        text: "The build goes to the host agreed in the scope.",
      },
      {
        n: "06",
        title: "Support",
        text: "Fixes and small changes after deployment, only when the scope includes them.",
      },
    ],
    workTitle: "Selected Software Projects",
    faqIds: ["sw-kinds", "sw-saas", "sw-handover", "sw-data", "sw-ai", "sw-start"],
    technologyNote:
      "Published studio software has used Next.js, TypeScript, Python, NestJS, PostgreSQL and Prisma. Those are examples from shipped projects, not a stack every brief must use. The scope names what this one will use.",
  },
  {
    id: "app",
    slug: "app-development",
    title: "App Development",
    h1: "App Development Company in Noida",
    linkLabel: "app development",
    blurb:
      "Custom mobile and business applications, with an admin side and an API when the app has to talk to something else.",
    suitable:
      "Companies in Noida, Delhi NCR and across India that need an Android, iOS or cross-platform app their customers or staff will actually open.",
    problem:
      "An app is commissioned without a clear job, or it ships with no way for the team to manage what is inside it.",
    solution:
      "We write down the platforms, the screens and the handover, then build against that scope. Maintenance after launch is included only when the scope says so.",
    sections: [],
    serviceMenu: {
      title: "Mobile App Development Services",
      intro:
        "Published studio apps have used Expo for cross-platform builds, Swift for an iOS app and Kotlin for an Android component. A new project includes only the items the scope names.",
      items: [
        "Android Apps",
        "iOS Apps",
        "Cross-platform Apps",
        "Business Applications",
        "API Integration",
        "Admin Panels",
        "App Maintenance",
      ],
    },
    deliverablesTitle: "What We Deliver",
    pageDeliverables: [
      "A written scope of who uses the app and which platforms it covers",
      "The Android, iOS or cross-platform app that scope describes",
      "An admin panel when the scope includes one",
      "An API connection only when the scope names it",
      "A release on the platforms that were agreed",
      "Maintenance after launch only when the scope includes it",
    ],
    deliverables: [
      "Android app development",
      "iOS app development",
      "Cross-platform app development",
      "API integration",
      "Admin panels",
      "Business apps",
      "App maintenance",
    ],
    cta: "Book Free Consultation",
    heroCta: "Discuss Your App Idea",
    closingCta: "Start an App Project",
    related: ["software"],
    relatedServices: ["software-development", "web-development", "ai-development"],
    image: "/media/work/spark-mobile.jpg",
    imageAlt: "Spark Mobile, an iOS and Android app developed by MKSAnalytIQ",
    seoTitle: "App Development Company in Noida | MKSAnalytIQ",
    seoDescription:
      "MKSAnalytIQ develops custom mobile and business applications for companies in Noida, Delhi NCR and across India.",
    processTitle: "From Idea to App",
    processIntro:
      "Six steps. The platforms and screens are agreed before development, and maintenance after launch is included only when the scope says so.",
    processSteps: [
      {
        n: "01",
        title: "Product Planning",
        text: "Who uses the app, what job it does, and whether it is Android, iOS or cross-platform.",
      },
      {
        n: "02",
        title: "UI/UX",
        text: "The screens, agreed before development. No design tool is assumed.",
      },
      {
        n: "03",
        title: "Development",
        text: "The app, built against that scope.",
      },
      {
        n: "04",
        title: "API Integration",
        text: "A connection to another system, only when the scope names it.",
      },
      {
        n: "05",
        title: "Testing",
        text: "The screens and paths named in the scope, checked before release.",
      },
      {
        n: "06",
        title: "Launch",
        text: "The app is released on the platforms that were agreed.",
      },
    ],
    workTitle: "Relevant App Projects",
    faqIds: [
      "app-platforms-page",
      "app-cross",
      "app-admin",
      "app-handover",
      "app-care",
      "app-begin",
    ],
    technologyNote:
      "Where a published project names a mobile stack, it is Expo, Swift or Kotlin, sometimes with TypeScript and Supabase. The stack for a new app is chosen in the scope, not copied from another project.",
  },
  {
    id: "ai",
    slug: "ai-development",
    title: "AI Development",
    h1: "AI Development & Automation Company in Noida",
    linkLabel: "AI development",
    blurb:
      "AI-powered software, automation and chatbots built as product features your team can review — not as a research claim.",
    suitable:
      "Businesses in Noida, Delhi NCR and across India that want a chatbot, a workflow or a tool that uses AI inside a defined job.",
    problem:
      "AI is added as a slogan, with no workflow, no review step and no agreement about which tool is actually being used.",
    solution:
      "We scope the job: what the software should draft, route or answer, which integrations it uses, and who approves the output. MKSAnalytIQ does not claim a proprietary foundation model.",
    sections: [],
    serviceMenu: {
      title: "AI Development & Automation Services",
      intro:
        "Included only when the written scope names them. The studio does not train its own model, and a person still reviews the output.",
      items: [
        "AI Applications",
        "AI Chatbots",
        "AI Integrations",
        "Business Automation",
        "AI Workflows",
        "AI Dashboards",
        "AI-enabled Software",
      ],
    },
    deliverablesTitle: "Where AI Can Help",
    pageDeliverables: [
      "Drafting content a person approves before it is used",
      "Turning a defined topic into a short-form asset inside a product",
      "Guiding a form or filing with checks and a structured export",
      "Answering a question the scope defines, in a chat step someone can review",
      "Moving a job through agreed steps instead of leaving it in a message thread",
      "Sending that output to a dashboard or another system the scope names",
    ],
    deliverables: [
      "AI-powered applications",
      "AI chatbots",
      "Business automation",
      "AI integrations",
      "Workflow automation",
      "AI dashboards",
      "Intelligent business tools",
    ],
    cta: "Book Free Consultation",
    heroCta: "Discuss an AI Project",
    closingCta: "Explore AI for Your Business",
    related: ["software"],
    relatedServices: [
      "ai-chatbot-development",
      "whatsapp-business-automation",
      "software-development",
      "digital-marketing",
    ],
    image: "/media/work/taxpilot.jpg",
    imageAlt: "TaxPilot AI, a guided software project developed by MKSAnalytIQ",
    seoTitle: "AI Development & Automation Company in Noida | MKSAnalytIQ",
    seoDescription:
      "MKSAnalytIQ builds AI-powered software, automation workflows, chatbots and intelligent business tools for companies in Noida, Delhi NCR and India.",
    processTitle: "AI Development Process",
    processIntro:
      "Six steps. The workflow and the review step are written down before anything is built. This is not a promise of accuracy or a private model.",
    processSteps: [
      {
        n: "01",
        title: "Identify Opportunity",
        text: "The job to draft, check, route or answer, and who still approves the output.",
      },
      {
        n: "02",
        title: "Define Workflow",
        text: "The steps, the external tool, and where the result goes. You approve that in writing.",
      },
      {
        n: "03",
        title: "Build",
        text: "That workflow, built against the scope.",
      },
      {
        n: "04",
        title: "Integrate",
        text: "A connection to software, a site or an app, only when the scope names it.",
      },
      {
        n: "05",
        title: "Test",
        text: "The paths in the scope, including the review step, checked before anyone relies on them.",
      },
      {
        n: "06",
        title: "Improve",
        text: "Changes after launch, only inside the scope. Not a guarantee of a result.",
      },
    ],
    workTitle: "AI Projects",
    faqIds: ["ai-model", "ai-scope", "ai-review", "ai-connect", "ai-results", "ai-begin"],
    technologyNote:
      "Published examples include TaxPilot AI, a guided preparation tool, and AI Influencer OS, a workspace for drafts and approval. Integrations use external AI tools named in the scope. The studio does not claim that it trains its own models.",
  },
  {
    id: "social",
    slug: "social-media",
    title: "Social Media",
    h1: "Social Media",
    linkLabel: "social media",
    blurb:
      "A steady presence on the platforms your customers already use, written in your voice and posted on a calendar you approve.",
    suitable: "Teams that need a regular presence without staffing a full in-house social desk.",
    problem:
      "Posting stalls, or it runs in a voice that doesn’t sound like the business. Replies pile up and nobody owns the calendar.",
    solution:
      "A monthly plan you approve, then reels, stills and community replies in that voice — with a review of what to change next month.",
    sections: [
      {
        title: "What a month includes",
        text: "Usually a content plan, reels and stills, captions in your voice, community replies and a review. You approve the calendar before it goes out. Paid social, when you want it, is scoped with digital marketing rather than assumed here.",
      },
    ],
    deliverables: [
      "Monthly content plan",
      "Reels and stills",
      "Captions in your voice",
      "Community replies",
      "Comment moderation",
      "Monthly review",
    ],
    cta: "Get a Content Plan",
    related: ["marketing"],
    relatedServices: [
      "twitter-account-growth",
      "instagram-account-growth",
      "youtube-channel-growth",
      "digital-marketing",
      "web-development",
    ],
    image: "/media/studio.jpg",
    imageAlt: "Social content setup at the MKSAnalytIQ studio",
    seoTitle: "Social Media Marketing in Noida | MKSAnalytIQ",
    seoDescription:
      "Social media management from a Noida studio: content calendars, reels, community replies and a monthly review you approve. MKSAnalytIQ.",
  },
  {
    id: "events",
    slug: "event-management",
    title: "Event Management",
    h1: "Event Management",
    linkLabel: "event management",
    blurb:
      "Launches, corporate gatherings and community programmes — planned on the ground and promoted before the doors open.",
    suitable:
      "Organisers of a launch, a corporate gathering or a community programme who want the room and the promotion planned together.",
    problem:
      "The venue, the guest list and the promotion are often three separate jobs. The date arrives and the list is still thin.",
    solution:
      "One plan for the run of show, the vendors, registration and the messages that go out before and after the event.",
    sections: [
      {
        title: "What an event brief covers",
        text: "A typical brief covers the run of show, vendor and on-site coordination, invites and registration, reminder messages, and recap content. Promotion before the event can be added with digital marketing when you want it. The exact list is in the scope.",
      },
    ],
    deliverables: [
      "Run of show",
      "Vendor coordination",
      "Invites and registration",
      "Reminder messages",
      "On-site coordination",
      "Recap content",
    ],
    cta: "Plan an Event",
    related: ["events"],
    relatedServices: ["digital-marketing"],
    image: "/media/event.jpg",
    imageAlt: "Banquet hall set for a corporate event",
    seoTitle: "Event Management in Noida | MKSAnalytIQ",
    seoDescription:
      "Event management for launches, corporate gatherings and community programmes — planning, registration and promotion. MKSAnalytIQ, Noida.",
  },
  {
    id: "twitter",
    slug: "twitter-account-growth",
    title: "X / Twitter Account Growth",
    h1: "X / Twitter Account Growth Services in Delhi NCR & India",
    blurb:
      "Build a recognizable voice on X with profile positioning, original posts, threads and relevant conversations. Our Noida team works with businesses and creators across India.",
    problem:
      "An account posts regularly but lacks a clear topic, consistent voice or reason for the right audience to follow.",
    solution:
      "Start with an account audit, define the audience and content themes, then publish an approved calendar and review which topics earn relevant attention.",
    deliverables: [
      "Profile and bio review",
      "Audience and topic research",
      "Original posts and thread outlines",
      "Monthly publishing calendar",
      "Community engagement guidelines",
      "Monthly performance review",
    ],
    sections: [
      {
        title: "Content that gives people a reason to follow",
        text: "Turn your expertise, product updates and customer questions into useful posts and threads. We agree the voice, content volume and approval workflow before publishing.",
      },
      {
        title: "Relevant conversations and reporting",
        text: "Plan thoughtful replies and community participation around your niche. Review reach, profile visits, engagement and website clicks where account analytics make them available.",
      },
    ],
    linkLabel: "x / twitter account growth",
    suitable:
      "Businesses, founders and creators in Noida, Delhi, Gurugram, Ghaziabad and Faridabad, with remote collaboration available across India.",
    cta: "Discuss My Account",
    related: [],
    relatedServices: ["instagram-account-growth", "youtube-channel-growth", "social-media"],
    image: "/media/services/twitter-growth.svg",
    imageAlt: "Illustration of x / twitter account growth content planning",
    seoTitle: "Twitter Account Growth in Delhi NCR & India | MKSAnalytIQ",
    seoDescription:
      "X / Twitter account growth services in Delhi NCR and India: profile audits, posts, threads, content planning and reporting. Talk to MKSAnalytIQ.",
    faqIds: ["twitter-offer", "twitter-expectations", "growth-location"],
    processSteps: [
      {
        n: "01",
        title: "Audit",
        text: "Review the account, audience, existing content and business goals.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree the topics, formats, publishing volume and approval calendar.",
      },
      {
        n: "03",
        title: "Create",
        text: "Prepare the agreed content and review it with your team.",
      },
      {
        n: "04",
        title: "Publish",
        text: "Publish approved content through the agreed account workflow.",
      },
      {
        n: "05",
        title: "Review",
        text: "Review available analytics and enquiries to improve the next content plan.",
      },
    ],
    processTitle: "Your content growth process",
    processIntro:
      "Share your account and goals. We agree the deliverables, approval process and reporting schedule before work begins.",
  },
  {
    id: "instagram",
    slug: "instagram-account-growth",
    title: "Instagram Account Growth",
    h1: "Instagram Account Growth Services in Delhi NCR & India",
    blurb:
      "Make your Instagram profile easier to discover and worth following with a clear bio, useful Reels, carousels and a consistent content plan. Available in Delhi NCR and across India.",
    problem:
      "A profile has attractive posts but no clear audience, repeatable content themes or easy path from interest to an enquiry.",
    solution:
      "Connect profile positioning, content planning and calls to action. Build a calendar around your offer, then use performance reviews to improve the next batch of content.",
    deliverables: [
      "Profile, bio and highlights audit",
      "Reels concepts and script outlines",
      "Carousel and caption planning",
      "Monthly content calendar",
      "Comment and enquiry workflow",
      "Monthly content performance review",
    ],
    sections: [
      {
        title: "Reels, carousels and a recognizable profile",
        text: "Plan content around demonstrations, common questions, behind-the-scenes work and useful advice. Agree which assets you supply and which design or editing work the studio produces.",
      },
      {
        title: "Turn profile visits into conversations",
        text: "Make contact details, highlights and calls to action clear. Review reach, saves, shares, profile activity and enquiries where available, then use those findings to choose the next topics.",
      },
    ],
    linkLabel: "instagram account growth",
    suitable:
      "Businesses, founders and creators in Noida, Delhi, Gurugram, Ghaziabad and Faridabad, with remote collaboration available across India.",
    cta: "Discuss My Account",
    related: [],
    relatedServices: ["twitter-account-growth", "youtube-channel-growth", "social-media"],
    image: "/media/services/instagram-growth.svg",
    imageAlt: "Illustration of instagram account growth content planning",
    seoTitle: "Instagram Account Growth in Delhi NCR & India | MKSAnalytIQ",
    seoDescription:
      "Instagram account growth services in Delhi NCR and India: profile audits, Reels, carousels, captions and content planning. Talk to MKSAnalytIQ about your goals.",
    faqIds: ["instagram-offer", "instagram-expectations", "growth-location"],
    processSteps: [
      {
        n: "01",
        title: "Audit",
        text: "Review the account, audience, existing content and business goals.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree the topics, formats, publishing volume and approval calendar.",
      },
      {
        n: "03",
        title: "Create",
        text: "Prepare the agreed content and review it with your team.",
      },
      {
        n: "04",
        title: "Publish",
        text: "Publish approved content through the agreed account workflow.",
      },
      {
        n: "05",
        title: "Review",
        text: "Review available analytics and enquiries to improve the next content plan.",
      },
    ],
    processTitle: "Your content growth process",
    processIntro:
      "Share your account and goals. We agree the deliverables, approval process and reporting schedule before work begins.",
  },
  {
    id: "youtube",
    slug: "youtube-channel-growth",
    title: "YouTube Channel Growth",
    h1: "YouTube Channel Growth Services in Delhi NCR & India",
    blurb:
      "Give your YouTube channel a clear direction with audience research, video topics, titles, thumbnails and a practical publishing plan. Work with our Noida studio from anywhere in India.",
    problem:
      "Videos take time to produce, but the channel has no consistent topic strategy, clear packaging or structured review of what viewers watch.",
    solution:
      "Audit the channel, map audience questions to video ideas, and plan titles, thumbnails and scripts together. Use available channel analytics to improve future uploads.",
    deliverables: [
      "Channel and audience audit",
      "Video topic and keyword research",
      "Title and thumbnail planning",
      "Script outlines and Shorts ideas",
      "Upload and playlist guidance",
      "Monthly channel performance review",
    ],
    sections: [
      {
        title: "Plan videos around audience questions",
        text: "Build a focused topic calendar with long-form videos and Shorts where they fit. Clarify the promise of each video in its title, thumbnail and opening before production starts.",
      },
      {
        title: "Improve packaging and viewer experience",
        text: "Review impressions, click-through rate, watch time and audience retention where available. Use the findings to improve titles, thumbnails, pacing and the next video brief. Editing and production are specified in the proposal.",
      },
    ],
    linkLabel: "youtube channel growth",
    suitable:
      "Businesses, founders and creators in Noida, Delhi, Gurugram, Ghaziabad and Faridabad, with remote collaboration available across India.",
    cta: "Discuss My Channel",
    related: [],
    relatedServices: ["twitter-account-growth", "instagram-account-growth", "social-media"],
    image: "/media/services/youtube-growth.svg",
    imageAlt: "Illustration of youtube channel growth content planning",
    seoTitle: "YouTube Channel Growth in Delhi NCR & India | MKSAnalytIQ",
    seoDescription:
      "YouTube channel growth services in Delhi NCR and India: channel audits, video topics, titles, thumbnail planning and analytics. Talk to MKSAnalytIQ.",
    faqIds: ["youtube-offer", "youtube-expectations", "growth-location"],
    processSteps: [
      {
        n: "01",
        title: "Audit",
        text: "Review the account, audience, existing content and business goals.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree the topics, formats, publishing volume and approval calendar.",
      },
      {
        n: "03",
        title: "Create",
        text: "Prepare the agreed content and review it with your team.",
      },
      {
        n: "04",
        title: "Publish",
        text: "Publish approved content through the agreed account workflow.",
      },
      {
        n: "05",
        title: "Review",
        text: "Review available analytics and enquiries to improve the next content plan.",
      },
    ],
    processTitle: "Your content growth process",
    processIntro:
      "Share your account and goals. We agree the deliverables, approval process and reporting schedule before work begins.",
  },
  {
    id: "whatsapp",
    slug: "whatsapp-business-automation",
    title: "WhatsApp Business Automation",
    h1: "WhatsApp Business Automation in Delhi NCR & India",
    blurb:
      "Connect customer conversations to appointments, orders and sales follow-up with WhatsApp Business automation. Our Noida team helps businesses across India design clear messaging workflows.",
    problem:
      "Enquiries are scattered across chats, reminders are manual and the next person on the team cannot see what happened.",
    solution:
      "Map the customer journey, configure the agreed messaging tools and connect useful conversation events to your CRM.",
    suitable:
      "Clinics, coaching centres, retailers and sales teams handling repeat customer enquiries.",
    deliverables: [
      "Messaging workflow audit",
      "Business Platform setup guidance",
      "Message template preparation",
      "Appointment and order reminders",
      "CRM and enquiry routing",
      "Staff handover and reporting",
    ],
    sections: [
      {
        title: "Customer journeys that save staff time",
        text: "Agree the questions to collect, the person responsible for each enquiry and when a human should take over. Build reminders and updates around your actual appointment or order process.",
      },
      {
        title: "Setup and running costs",
        text: "We check account access, provider compatibility and the templates needed before implementation. Provider subscriptions, messaging charges and any approval requirements are identified in the proposal.",
      },
      {
        title: "Based in Noida, working across India",
        text: "Work with our Noida studio from Delhi, Gurugram, Ghaziabad or Faridabad, or collaborate remotely from elsewhere in India. Share your current setup and priorities so we can propose deliverables, a timeline and a fee.",
      },
    ],
    linkLabel: "whatsapp business automation",
    cta: "Discuss WhatsApp Business Automation",
    related: [],
    relatedServices: [
      "crm-sales-automation",
      "ai-chatbot-development",
      "email-marketing-automation",
    ],
    image: "/media/services/whatsapp-service.svg",
    imageAlt: "WhatsApp Business Automation planning workflow illustration",
    seoTitle: "WhatsApp Business Automation in Delhi NCR | MKSAnalytIQ",
    seoDescription:
      "WhatsApp Business automation in Delhi NCR and India: enquiry routing, reminders, message templates and CRM integration. Discuss your workflow with MKSAnalytIQ.",
    faqIds: ["whatsapp-scope", "whatsapp-details"],
    processTitle: "From your brief to a working service",
    processSteps: [
      {
        n: "01",
        title: "Review",
        text: "Review your goals, current tools and the customer journey.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree deliverables, access, responsibilities, timeline and pricing.",
      },
      {
        n: "03",
        title: "Implement",
        text: "Build or configure the agreed work with your feedback.",
      },
      {
        n: "04",
        title: "Check",
        text: "Review the important user journeys and hand over the workflow.",
      },
      {
        n: "05",
        title: "Improve",
        text: "Review results and agree the next improvements or support plan.",
      },
    ],
  },
  {
    id: "chatbot",
    slug: "ai-chatbot-development",
    title: "AI Chatbot Development",
    h1: "AI Chatbot Development in Noida & Delhi NCR",
    blurb:
      "Help visitors find answers and reach your team with an AI chatbot built around your business information. Available for websites and customer support workflows across India.",
    problem:
      "Staff repeatedly answer the same questions while visitors leave without finding the right product, service or contact.",
    solution:
      "Create a knowledge base from approved information, define the questions the bot can handle and provide a clear handover to your team.",
    suitable:
      "Service businesses, online stores and software companies with recurring product or support questions.",
    deliverables: [
      "Knowledge-base preparation",
      "Conversation and enquiry flows",
      "Website chat integration",
      "Human handover workflow",
      "Answer evaluation and refinement",
      "Usage and maintenance guidance",
    ],
    sections: [
      {
        title: "Answers grounded in your business",
        text: "Use your approved pages, documents and FAQs as the source material. Decide which questions require a staff response and how the assistant should handle missing information.",
      },
      {
        title: "A useful enquiry path",
        text: "Collect only the details needed for follow-up and connect them to the agreed inbox or CRM. We test representative questions and failure cases before launch, then plan how content updates will be reviewed.",
      },
      {
        title: "Based in Noida, working across India",
        text: "Work with our Noida studio from Delhi, Gurugram, Ghaziabad or Faridabad, or collaborate remotely from elsewhere in India. Share your current setup and priorities so we can propose deliverables, a timeline and a fee.",
      },
    ],
    linkLabel: "ai chatbot development",
    cta: "Discuss AI Chatbot Development",
    related: [],
    relatedServices: ["whatsapp-business-automation", "crm-sales-automation", "ai-development"],
    image: "/media/services/chatbot-service.svg",
    imageAlt: "AI Chatbot Development planning workflow illustration",
    seoTitle: "AI Chatbot Development in Noida & Delhi NCR | MKSAnalytIQ",
    seoDescription:
      "AI chatbot development in Noida, Delhi NCR and India. Build website assistants with your business knowledge, enquiry capture and human handover. Talk to us.",
    faqIds: ["chatbot-scope", "chatbot-details"],
    processTitle: "From your brief to a working service",
    processSteps: [
      {
        n: "01",
        title: "Review",
        text: "Review your goals, current tools and the customer journey.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree deliverables, access, responsibilities, timeline and pricing.",
      },
      {
        n: "03",
        title: "Implement",
        text: "Build or configure the agreed work with your feedback.",
      },
      {
        n: "04",
        title: "Check",
        text: "Review the important user journeys and hand over the workflow.",
      },
      {
        n: "05",
        title: "Improve",
        text: "Review results and agree the next improvements or support plan.",
      },
    ],
  },
  {
    id: "local",
    slug: "google-business-profile-management",
    title: "Google Business Profile Management",
    h1: "Google Business Profile Management in Noida & Delhi NCR",
    blurb:
      "Keep your business information useful and consistent on Google with profile setup support, service updates, photos and review-response planning. We support eligible businesses across India.",
    problem:
      "Customers find incomplete hours, unclear service information or outdated photos when they look up the business.",
    solution:
      "Review the profile and business details, agree accurate updates and create a manageable routine for keeping the listing current.",
    suitable:
      "Local shops, clinics, professional practices and businesses serving customers at a location or within a service area.",
    deliverables: [
      "Profile audit and setup guidance",
      "Category and service review",
      "Hours and contact information updates",
      "Photo and update planning",
      "Review-response support",
      "Profile performance review",
    ],
    sections: [
      {
        title: "Make local business details clear",
        text: "Check the business name, address or service area, contact details, opening hours and service descriptions against the real business. Coordinate relevant information on your website.",
      },
      {
        title: "Maintain the profile over time",
        text: "Plan useful photos and updates, help staff respond to genuine reviews and review available profile interactions. Verification is completed by the owner using Google's available process.",
      },
      {
        title: "Based in Noida, working across India",
        text: "Work with our Noida studio from Delhi, Gurugram, Ghaziabad or Faridabad, or collaborate remotely from elsewhere in India. Share your current setup and priorities so we can propose deliverables, a timeline and a fee.",
      },
    ],
    linkLabel: "google business profile management",
    cta: "Discuss Google Business Profile Management",
    related: [],
    relatedServices: ["digital-marketing", "web-development", "website-maintenance"],
    image: "/media/services/local-service.svg",
    imageAlt: "Google Business Profile Management planning workflow illustration",
    seoTitle: "Google Business Profile Management in Noida | MKSAnalytIQ",
    seoDescription:
      "Google Business Profile management in Noida and Delhi NCR: profile audits, service updates, photos and review responses. Remote support across India.",
    faqIds: ["local-scope", "local-details"],
    processTitle: "From your brief to a working service",
    processSteps: [
      {
        n: "01",
        title: "Review",
        text: "Review your goals, current tools and the customer journey.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree deliverables, access, responsibilities, timeline and pricing.",
      },
      {
        n: "03",
        title: "Implement",
        text: "Build or configure the agreed work with your feedback.",
      },
      {
        n: "04",
        title: "Check",
        text: "Review the important user journeys and hand over the workflow.",
      },
      {
        n: "05",
        title: "Improve",
        text: "Review results and agree the next improvements or support plan.",
      },
    ],
  },
  {
    id: "ecommerce",
    slug: "ecommerce-website-development",
    title: "Ecommerce Website Development",
    h1: "Ecommerce Website Development in Noida & Delhi NCR",
    blurb:
      "Launch an online store with a clear catalogue, usable checkout and manageable order workflow. MKSAnalytIQ builds ecommerce websites for retailers and brands across India.",
    problem:
      "A product catalogue is hard to browse, checkout is confusing or staff manage orders manually across several tools.",
    solution:
      "Plan the product structure and buying journey, build the agreed store and connect payments, shipping and operational tools supported by your chosen platform.",
    suitable: "Retailers, manufacturers and consumer brands selling products online.",
    deliverables: [
      "Store and catalogue planning",
      "Responsive product and category pages",
      "Cart and checkout configuration",
      "Payment gateway integration",
      "Shipping and order workflow",
      "Store administration handover",
    ],
    sections: [
      {
        title: "Build around your products and operations",
        text: "Define product variants, stock handling, delivery regions and order statuses before choosing the platform. Identify who provides product photos, descriptions and policy content.",
      },
      {
        title: "Support the purchase journey",
        text: "Create clear product information, mobile navigation and checkout feedback. Test agreed payment and order scenarios before launch and plan how staff will manage new orders and updates.",
      },
      {
        title: "Based in Noida, working across India",
        text: "Work with our Noida studio from Delhi, Gurugram, Ghaziabad or Faridabad, or collaborate remotely from elsewhere in India. Share your current setup and priorities so we can propose deliverables, a timeline and a fee.",
      },
    ],
    linkLabel: "ecommerce website development",
    cta: "Discuss Ecommerce Website Development",
    related: [],
    relatedServices: ["web-development", "email-marketing-automation", "website-maintenance"],
    image: "/media/services/ecommerce-service.svg",
    imageAlt: "Ecommerce Website Development planning workflow illustration",
    seoTitle: "Ecommerce Website Development in Noida | MKSAnalytIQ",
    seoDescription:
      "Ecommerce website development in Noida, Delhi NCR and India: online stores, catalogues, checkout, payments and order workflows. Discuss your store with us.",
    faqIds: ["ecommerce-scope", "ecommerce-details"],
    processTitle: "From your brief to a working service",
    processSteps: [
      {
        n: "01",
        title: "Review",
        text: "Review your goals, current tools and the customer journey.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree deliverables, access, responsibilities, timeline and pricing.",
      },
      {
        n: "03",
        title: "Implement",
        text: "Build or configure the agreed work with your feedback.",
      },
      {
        n: "04",
        title: "Check",
        text: "Review the important user journeys and hand over the workflow.",
      },
      {
        n: "05",
        title: "Improve",
        text: "Review results and agree the next improvements or support plan.",
      },
    ],
  },
  {
    id: "crm",
    slug: "crm-sales-automation",
    title: "CRM Setup & Sales Automation",
    h1: "CRM Setup & Sales Automation in Delhi NCR & India",
    blurb:
      "Organize incoming enquiries, assign follow-ups and see where deals stand. Our Noida team configures CRM and sales automation workflows for businesses across India.",
    problem:
      "Leads arrive from several channels, follow-ups depend on memory and nobody has a reliable view of the pipeline.",
    solution:
      "Agree lead stages and responsibilities, configure the CRM and connect supported enquiry sources with clear ownership and reminders.",
    suitable:
      "Agencies, consultants, property businesses and sales teams with multiple enquiry sources.",
    deliverables: [
      "Sales process and pipeline mapping",
      "CRM configuration and field design",
      "Lead capture and assignment",
      "Follow-up tasks and reminders",
      "Pipeline dashboards",
      "Data import and team training",
    ],
    sections: [
      {
        title: "Give every enquiry a next step",
        text: "Define the stages from new enquiry to won or closed, assign ownership and agree follow-up rules. Capture the information staff need without overloading the form.",
      },
      {
        title: "Connect the tools your team uses",
        text: "Review website forms, messaging tools and existing contact data. Plan field mapping, duplicate handling and migration checks so the team can use the system after handover.",
      },
      {
        title: "Based in Noida, working across India",
        text: "Work with our Noida studio from Delhi, Gurugram, Ghaziabad or Faridabad, or collaborate remotely from elsewhere in India. Share your current setup and priorities so we can propose deliverables, a timeline and a fee.",
      },
    ],
    linkLabel: "crm setup & sales automation",
    cta: "Discuss CRM Setup",
    related: [],
    relatedServices: [
      "whatsapp-business-automation",
      "linkedin-automation",
      "software-development",
    ],
    image: "/media/services/crm-service.svg",
    imageAlt: "CRM Setup & Sales Automation planning workflow illustration",
    seoTitle: "CRM Setup & Sales Automation in Delhi NCR | MKSAnalytIQ",
    seoDescription:
      "CRM setup and sales automation in Delhi NCR and India. Organize enquiries, assign follow-ups and track your pipeline with MKSAnalytIQ. Discuss your workflow.",
    faqIds: ["crm-scope", "crm-details"],
    processTitle: "From your brief to a working service",
    processSteps: [
      {
        n: "01",
        title: "Review",
        text: "Review your goals, current tools and the customer journey.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree deliverables, access, responsibilities, timeline and pricing.",
      },
      {
        n: "03",
        title: "Implement",
        text: "Build or configure the agreed work with your feedback.",
      },
      {
        n: "04",
        title: "Check",
        text: "Review the important user journeys and hand over the workflow.",
      },
      {
        n: "05",
        title: "Improve",
        text: "Review results and agree the next improvements or support plan.",
      },
    ],
  },
  {
    id: "email",
    slug: "email-marketing-automation",
    title: "Email Marketing & Automation",
    h1: "Email Marketing Automation in Delhi NCR & India",
    blurb:
      "Create useful newsletters and timely customer journeys with email marketing automation. MKSAnalytIQ helps businesses across India plan campaigns, segments and reporting.",
    problem:
      "Contacts sit in disconnected lists and each campaign starts from scratch without a clear customer journey or reliable reporting.",
    solution:
      "Organize permission-based contacts, build reusable email layouts and configure agreed campaigns and automated sequences.",
    suitable:
      "Online stores, training providers, SaaS companies and B2B businesses with an opted-in contact list.",
    deliverables: [
      "Contact list and segment planning",
      "Branded email templates",
      "Welcome and nurture sequences",
      "Campaign setup and scheduling",
      "Unsubscribe and suppression handling",
      "Delivery and conversion reporting",
    ],
    sections: [
      {
        title: "Send messages matched to the customer journey",
        text: "Plan welcome emails, educational follow-ups or customer updates around defined triggers. Agree content, timing and the action each email should support.",
      },
      {
        title: "Make delivery and reporting part of setup",
        text: "Review sender configuration, list quality and available delivery events. Keep unsubscribes and suppressed contacts out of sends, then review clicks and business outcomes alongside delivery data.",
      },
      {
        title: "Based in Noida, working across India",
        text: "Work with our Noida studio from Delhi, Gurugram, Ghaziabad or Faridabad, or collaborate remotely from elsewhere in India. Share your current setup and priorities so we can propose deliverables, a timeline and a fee.",
      },
    ],
    linkLabel: "email marketing & automation",
    cta: "Discuss Email Marketing",
    related: [],
    relatedServices: ["crm-sales-automation", "ecommerce-website-development", "digital-marketing"],
    image: "/media/services/email-service.svg",
    imageAlt: "Email Marketing & Automation planning workflow illustration",
    seoTitle: "Email Marketing Automation in Delhi NCR | MKSAnalytIQ",
    seoDescription:
      "Email marketing automation in Delhi NCR and India: Brevo setup, branded templates, customer segments and welcome sequences. Plan your campaigns with us.",
    faqIds: ["email-scope", "email-details"],
    processTitle: "From your brief to a working service",
    processSteps: [
      {
        n: "01",
        title: "Review",
        text: "Review your goals, current tools and the customer journey.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree deliverables, access, responsibilities, timeline and pricing.",
      },
      {
        n: "03",
        title: "Implement",
        text: "Build or configure the agreed work with your feedback.",
      },
      {
        n: "04",
        title: "Check",
        text: "Review the important user journeys and hand over the workflow.",
      },
      {
        n: "05",
        title: "Improve",
        text: "Review results and agree the next improvements or support plan.",
      },
    ],
  },
  {
    id: "maintenance",
    slug: "website-maintenance",
    title: "Website Maintenance & Speed Optimization",
    h1: "Website Maintenance & Speed Optimization in Noida",
    blurb:
      "Keep your website usable, current and easier to maintain with scheduled updates, backups, bug fixes and performance reviews. Serving Delhi NCR and businesses across India.",
    problem:
      "Broken forms, slow pages and unplanned updates make a website harder to use and leave the team unsure who will fix it.",
    solution:
      "Audit the site and hosting, prioritize the issues affecting visitors and agree a maintenance schedule with a clear support process.",
    suitable: "Businesses with an existing website or web application that needs ongoing care.",
    deliverables: [
      "Website and dependency review",
      "Backup and recovery planning",
      "Agreed updates and bug fixes",
      "Form and broken-link checks",
      "Image and page-speed improvements",
      "Maintenance reports",
    ],
    sections: [
      {
        title: "Improve the pages visitors actually use",
        text: "Review mobile layouts, large assets, loading behaviour and important forms. Prioritize fixes using measured performance and the pages that matter to your business.",
      },
      {
        title: "Define ownership and support expectations",
        text: "Agree who manages hosting, backups, software updates and incidents. The plan sets response windows, included work and how larger changes are estimated.",
      },
      {
        title: "Based in Noida, working across India",
        text: "Work with our Noida studio from Delhi, Gurugram, Ghaziabad or Faridabad, or collaborate remotely from elsewhere in India. Share your current setup and priorities so we can propose deliverables, a timeline and a fee.",
      },
    ],
    linkLabel: "website maintenance & speed optimization",
    cta: "Discuss Website Maintenance",
    related: [],
    relatedServices: ["web-development", "ecommerce-website-development", "software-development"],
    image: "/media/services/maintenance-service.svg",
    imageAlt: "Website Maintenance & Speed Optimization planning workflow illustration",
    seoTitle: "Website Maintenance & Speed Optimization | MKSAnalytIQ",
    seoDescription:
      "Website maintenance in Noida, Delhi NCR and India: updates, backups, form checks, bug fixes and speed optimization. Discuss an ongoing support plan with us.",
    faqIds: ["maintenance-scope", "maintenance-details"],
    processTitle: "From your brief to a working service",
    processSteps: [
      {
        n: "01",
        title: "Review",
        text: "Review your goals, current tools and the customer journey.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree deliverables, access, responsibilities, timeline and pricing.",
      },
      {
        n: "03",
        title: "Implement",
        text: "Build or configure the agreed work with your feedback.",
      },
      {
        n: "04",
        title: "Check",
        text: "Review the important user journeys and hand over the workflow.",
      },
      {
        n: "05",
        title: "Improve",
        text: "Review results and agree the next improvements or support plan.",
      },
    ],
  },
  {
    id: "linkedin",
    slug: "linkedin-automation",
    title: "LinkedIn Automation & B2B Workflows",
    h1: "LinkedIn Automation Services in Delhi NCR & India",
    blurb:
      "Coordinate LinkedIn content, lead capture and sales follow-up with approved tools and CRM workflows. Our Noida team supports B2B businesses and founders across India.",
    problem:
      "Content approvals, lead form responses and sales tasks live in separate places, so relevant enquiries receive inconsistent follow-up.",
    solution:
      "Plan the content workflow, connect supported lead sources through authorized integrations and create CRM tasks for the sales team.",
    suitable:
      "B2B service businesses, agencies, founders and sales teams using LinkedIn in their marketing.",
    deliverables: [
      "Profile and company-page review",
      "Content calendar and approvals",
      "Native or authorized scheduling setup",
      "Supported Lead Gen Form integration",
      "CRM routing and follow-up tasks",
      "Campaign and pipeline reporting",
    ],
    sections: [
      {
        title: "Content and lead operations",
        text: "Build a repeatable process for drafting, reviewing and scheduling content. Where the account and chosen provider support it, route Lead Gen Form submissions to the CRM with the correct owner and source.",
      },
      {
        title: "Clear boundaries for automation",
        text: "Integration availability is checked before work begins. Account scraping, automated connection requests, auto-comments and unsolicited message bots are outside this service. Your team handles personal conversations.",
      },
      {
        title: "Based in Noida, working across India",
        text: "Work with our Noida studio from Delhi, Gurugram, Ghaziabad or Faridabad, or collaborate remotely from elsewhere in India. Share your current setup and priorities so we can propose deliverables, a timeline and a fee.",
      },
    ],
    linkLabel: "linkedin automation & b2b workflows",
    cta: "Discuss LinkedIn Automation",
    related: [],
    relatedServices: ["crm-sales-automation", "email-marketing-automation", "social-media"],
    image: "/media/services/linkedin-service.svg",
    imageAlt: "LinkedIn Automation & B2B Workflows planning workflow illustration",
    seoTitle: "LinkedIn Automation Services in Delhi NCR | MKSAnalytIQ",
    seoDescription:
      "LinkedIn automation services in Delhi NCR and India: content workflows, supported scheduling, authorized lead integrations and CRM follow-up. Talk to us.",
    faqIds: ["linkedin-scope", "linkedin-details"],
    processTitle: "From your brief to a working service",
    processSteps: [
      {
        n: "01",
        title: "Review",
        text: "Review your goals, current tools and the customer journey.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree deliverables, access, responsibilities, timeline and pricing.",
      },
      {
        n: "03",
        title: "Implement",
        text: "Build or configure the agreed work with your feedback.",
      },
      {
        n: "04",
        title: "Check",
        text: "Review the important user journeys and hand over the workflow.",
      },
      {
        n: "05",
        title: "Improve",
        text: "Review results and agree the next improvements or support plan.",
      },
    ],
  },
  {
    id: "metaads",
    slug: "meta-ads-management",
    title: "Meta Ads Management",
    h1: "Meta Ads Management Services in Delhi NCR & India",
    blurb:
      "Plan and manage Facebook and Instagram advertising around a clear offer, useful creative and measurable enquiry paths. MKSAnalytIQ serves businesses in Delhi NCR and across India.",
    problem:
      "Campaigns launch with broad audiences, disconnected creative and no reliable way to see which ad produced an enquiry.",
    solution:
      "Connect campaign structure, audience, creative, landing page and conversion tracking in one approved plan, then review spend and results regularly.",
    deliverables: [
      "Meta Ads account and campaign audit",
      "Campaign structure and audience plan",
      "Ad copy and creative direction",
      "Landing-page recommendations",
      "Lead, form and website conversion tracking",
      "Budget and performance reporting",
    ],
    sections: [
      {
        title: "Facebook and Instagram campaigns with one plan",
        text: "Choose campaign objectives and placements around the customer journey. The proposal identifies the accounts, markets, creative formats and landing pages included.",
      },
      {
        title: "Measure enquiries and useful actions",
        text: "Configure supported conversion events and consistent campaign naming, then review spend, reach, clicks and enquiries. Advertising spend and third-party production costs are separate from the management fee.",
      },
    ],
    linkLabel: "meta ads management",
    suitable:
      "Businesses in Noida, Delhi, Gurugram, Ghaziabad and Faridabad, with campaign management available remotely across India.",
    cta: "Discuss Meta Ads Management",
    related: ["marketing"],
    relatedServices: [
      "instagram-ads-management",
      "youtube-ads-management",
      "google-ads-management",
      "digital-marketing",
    ],
    image: "/media/services/metaads-service.svg",
    imageAlt: "Meta Ads Management campaign planning illustration",
    seoTitle: "Meta Ads Management in Delhi NCR & India | MKSAnalytIQ",
    seoDescription:
      "Meta Ads management in Delhi NCR and India: campaign setup, audiences, creative direction, landing pages, conversion tracking and reporting from MKSAnalytIQ.",
    faqIds: ["metaads-scope", "metaads-results"],
    processTitle: "Paid advertising management process",
    processIntro:
      "Share your offer, audience, current account and budget range. We agree campaign deliverables and measurement before launch.",
    processSteps: [
      {
        n: "01",
        title: "Audit",
        text: "Review the offer, advertising account, audience, landing page and existing tracking.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree campaign goals, targeting, creative requirements, budget and conversion actions.",
      },
      {
        n: "03",
        title: "Launch",
        text: "Build and launch approved campaigns using the agreed accounts and assets.",
      },
      {
        n: "04",
        title: "Measure",
        text: "Review spend, delivery, website actions and enquiries using available platform data.",
      },
      {
        n: "05",
        title: "Improve",
        text: "Adjust targeting, creative and campaign controls within the agreed scope.",
      },
    ],
  },
  {
    id: "instagramads",
    slug: "instagram-ads-management",
    title: "Instagram Ads Management",
    h1: "Instagram Ads Management Services in Delhi NCR & India",
    blurb:
      "Reach relevant audiences with Instagram Feed, Stories and Reels advertising built around your offer and enquiry path. Campaign support is available across India.",
    problem:
      "Instagram ads attract views but the creative, audience and next step do not work together, making results difficult to understand.",
    solution:
      "Plan placements, audience, creative direction and conversion tracking together, then improve campaigns using available performance and enquiry data.",
    deliverables: [
      "Instagram ad account review",
      "Feed, Stories and Reels campaign plan",
      "Audience and placement setup",
      "Ad copy and creative briefs",
      "Lead and website conversion tracking",
      "Campaign reporting and optimization",
    ],
    sections: [
      {
        title: "Creative planned for Instagram placements",
        text: "Prepare clear briefs for Feed, Stories and Reels so each format communicates the offer quickly. Agree whether your team or the studio supplies design, editing and source footage.",
      },
      {
        title: "A clear path after the ad",
        text: "Send people to an appropriate lead form, WhatsApp conversation or landing page and track the agreed actions. Media spend, creator fees and production costs are listed separately.",
      },
    ],
    linkLabel: "instagram ads management",
    suitable:
      "Businesses in Noida, Delhi, Gurugram, Ghaziabad and Faridabad, with campaign management available remotely across India.",
    cta: "Discuss Instagram Ads Management",
    related: ["marketing"],
    relatedServices: [
      "meta-ads-management",
      "youtube-ads-management",
      "google-ads-management",
      "digital-marketing",
    ],
    image: "/media/services/instagramads-service.svg",
    imageAlt: "Instagram Ads Management campaign planning illustration",
    seoTitle: "Instagram Ads Management in Delhi NCR | MKSAnalytIQ",
    seoDescription:
      "Instagram Ads management in Delhi NCR and India: Feed, Stories and Reels campaigns, audiences, creative briefs, conversion tracking and reporting.",
    faqIds: ["instagramads-scope", "instagramads-results"],
    processTitle: "Paid advertising management process",
    processIntro:
      "Share your offer, audience, current account and budget range. We agree campaign deliverables and measurement before launch.",
    processSteps: [
      {
        n: "01",
        title: "Audit",
        text: "Review the offer, advertising account, audience, landing page and existing tracking.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree campaign goals, targeting, creative requirements, budget and conversion actions.",
      },
      {
        n: "03",
        title: "Launch",
        text: "Build and launch approved campaigns using the agreed accounts and assets.",
      },
      {
        n: "04",
        title: "Measure",
        text: "Review spend, delivery, website actions and enquiries using available platform data.",
      },
      {
        n: "05",
        title: "Improve",
        text: "Adjust targeting, creative and campaign controls within the agreed scope.",
      },
    ],
  },
  {
    id: "youtubeads",
    slug: "youtube-ads-management",
    title: "YouTube Ads Management",
    h1: "YouTube Ads Management Services in Delhi NCR & India",
    blurb:
      "Plan YouTube video advertising with focused audiences, clear video briefs, landing pages and conversion measurement. Work with our Noida studio from anywhere in India.",
    problem:
      "Video campaigns spend budget before the audience, message, landing page and measurement plan are agreed.",
    solution:
      "Define the campaign goal, audience, video requirements and conversion path, then monitor performance and improve the agreed campaign elements.",
    deliverables: [
      "YouTube Ads account and campaign audit",
      "Audience and placement planning",
      "Video ad brief and script direction",
      "Campaign setup and exclusions",
      "Website conversion tracking",
      "Budget and performance reporting",
    ],
    sections: [
      {
        title: "Video ads built around one clear action",
        text: "Plan the opening, message, format and call to action before production. Identify whether existing video can be used or whether scripting, filming and editing should be included.",
      },
      {
        title: "Campaign controls and measurement",
        text: "Set agreed audiences, placements, exclusions and conversions, then review spend, views, website actions and enquiries. Google charges media spend directly to the advertiser.",
      },
    ],
    linkLabel: "youtube ads management",
    suitable:
      "Businesses in Noida, Delhi, Gurugram, Ghaziabad and Faridabad, with campaign management available remotely across India.",
    cta: "Discuss YouTube Ads Management",
    related: ["marketing"],
    relatedServices: [
      "meta-ads-management",
      "instagram-ads-management",
      "google-ads-management",
      "digital-marketing",
    ],
    image: "/media/services/youtubeads-service.svg",
    imageAlt: "YouTube Ads Management campaign planning illustration",
    seoTitle: "YouTube Ads Management in Delhi NCR & India | MKSAnalytIQ",
    seoDescription:
      "YouTube Ads management in Delhi NCR and India: campaign setup, audiences, video briefs, landing pages, conversion tracking and performance reporting.",
    faqIds: ["youtubeads-scope", "youtubeads-results"],
    processTitle: "Paid advertising management process",
    processIntro:
      "Share your offer, audience, current account and budget range. We agree campaign deliverables and measurement before launch.",
    processSteps: [
      {
        n: "01",
        title: "Audit",
        text: "Review the offer, advertising account, audience, landing page and existing tracking.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree campaign goals, targeting, creative requirements, budget and conversion actions.",
      },
      {
        n: "03",
        title: "Launch",
        text: "Build and launch approved campaigns using the agreed accounts and assets.",
      },
      {
        n: "04",
        title: "Measure",
        text: "Review spend, delivery, website actions and enquiries using available platform data.",
      },
      {
        n: "05",
        title: "Improve",
        text: "Adjust targeting, creative and campaign controls within the agreed scope.",
      },
    ],
  },
  {
    id: "googleads",
    slug: "google-ads-management",
    title: "Google Ads Management",
    h1: "Google Ads Management Services in Noida & Delhi NCR",
    blurb:
      "Manage Google Search and supported campaign formats with clear keyword targeting, useful landing pages and conversion tracking. Serving Delhi NCR and clients across India.",
    problem:
      "Paid search spend begins before keywords, exclusions, landing pages and enquiry tracking agree, making qualified results hard to identify.",
    solution:
      "Map search intent to campaigns and landing pages, configure supported conversion actions and review spend and enquiries against the approved plan.",
    deliverables: [
      "Google Ads account and campaign audit",
      "Keyword, search-intent and negative-keyword plan",
      "Campaign and advertisement setup",
      "Landing-page recommendations",
      "Call, form and website conversion tracking",
      "Budget and performance reporting",
    ],
    sections: [
      {
        title: "Search campaigns matched to the offer",
        text: "Group keywords by intent and direct each campaign to the most relevant page. Agree locations, schedules, budgets and exclusions before launch.",
      },
      {
        title: "Reporting tied to business enquiries",
        text: "Review search terms, clicks, costs and tracked actions, then adjust bids, targeting and ads within the agreed scope. Advertising spend is paid separately to Google.",
      },
    ],
    linkLabel: "google ads management",
    suitable:
      "Businesses in Noida, Delhi, Gurugram, Ghaziabad and Faridabad, with campaign management available remotely across India.",
    cta: "Discuss Google Ads Management",
    related: ["marketing"],
    relatedServices: [
      "meta-ads-management",
      "instagram-ads-management",
      "youtube-ads-management",
      "digital-marketing",
    ],
    image: "/media/services/googleads-service.svg",
    imageAlt: "Google Ads Management campaign planning illustration",
    seoTitle: "Google Ads Management in Noida & Delhi NCR | MKSAnalytIQ",
    seoDescription:
      "Google Ads management in Noida, Delhi NCR and India: keyword planning, campaign setup, landing pages, conversion tracking and performance reporting.",
    faqIds: ["googleads-scope", "googleads-results"],
    processTitle: "Paid advertising management process",
    processIntro:
      "Share your offer, audience, current account and budget range. We agree campaign deliverables and measurement before launch.",
    processSteps: [
      {
        n: "01",
        title: "Audit",
        text: "Review the offer, advertising account, audience, landing page and existing tracking.",
      },
      {
        n: "02",
        title: "Plan",
        text: "Agree campaign goals, targeting, creative requirements, budget and conversion actions.",
      },
      {
        n: "03",
        title: "Launch",
        text: "Build and launch approved campaigns using the agreed accounts and assets.",
      },
      {
        n: "04",
        title: "Measure",
        text: "Review spend, delivery, website actions and enquiries using available platform data.",
      },
      {
        n: "05",
        title: "Improve",
        text: "Adjust targeting, creative and campaign controls within the agreed scope.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const extras = [
  {
    title: "SEO & content",
    text: "Pages structured so search and sales talk to each other — service pages, local Noida visibility, and articles that answer real questions.",
  },
  {
    title: "Brand & design",
    text: "A visual system that stays consistent from the logo lockup to ads, decks and event backdrops.",
  },
  {
    title: "Analytics",
    text: "A simple monthly read of what moved: spend, reach, leads and what to change next.",
  },
];

/**
 * Figures the studio may publish later.
 * `published: false` keeps them off the site until someone confirms the number.
 * Do not flip these on without a source you can stand behind.
 */
export const stats: { value: string; label: string; published: boolean }[] = [
  { value: "100+", label: "Happy clients", published: false },
  { value: "300+", label: "Projects completed", published: false },
  { value: "5+", label: "Years experience", published: false },
  { value: "India & beyond", label: "Growing reach", published: false },
];

export const publishedStats = stats.filter((stat) => stat.published);

/** Qualitative notes that match what the site can already support. Not performance claims. */
export const trustNotes = [
  { value: "Noida", label: "Sector 8 studio" },
  { value: "One team", label: "Marketing and technology" },
  { value: "Direct", label: "Work with the proprietor" },
  { value: "India", label: "Projects beyond the city" },
];

export const why = [
  {
    title: "One Team",
    text: "Marketing, design, technology and development under one roof.",
  },
  {
    title: "Direct Communication",
    text: "Clear communication and direct project collaboration.",
  },
  {
    title: "Transparent Delivery",
    text: "Clear scope, milestones and deliverables.",
  },
  {
    title: "Built for Business Outcomes",
    text: "Solutions designed around leads, customers, efficiency and growth.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Discover",
    text: "A call or a visit to the Noida studio. We write down the offer, the audience, the deadline and what “done” looks like.",
  },
  {
    n: "02",
    title: "Plan",
    text: "A short scope: channels, pages or event flow, timeline and fee. You approve it before anyone starts producing.",
  },
  {
    n: "03",
    title: "Build",
    text: "Creative, code or on-ground production. You see work in progress — not a surprise on the last day.",
  },
  {
    n: "04",
    title: "Launch",
    text: "Campaigns go live, the site ships, or the event opens. We stay on the thread through the first days.",
  },
  {
    n: "05",
    title: "Improve",
    text: "Numbers come back. We keep what worked, cut what didn’t, and set the next month’s plan.",
  },
];

export const projects: {
  slug: string;
  name: string;
  category: ProjectCategory;
  kind: string;
  summary: string;
  features: string[];
  stack: string[];
  github: string;
  live: string;
  seoTitle: string;
  seoDescription: string;
  /** When set, these service pages are the related links. Otherwise a category heuristic is used. */
  serviceSlugs?: string[];
  /** Published job of the product. Omit when it would only repeat the summary. */
  objective?: string;
  /** How the published product addresses that job. Omit when it is not in the project data. */
  approach?: string;
  /** Organisation already named in the summary. Omit for the studio’s own products. */
  builtFor?: string;
  /** Optional portfolio artwork override when the source asset uses another format. */
  image?: string;
}[] = [
  {
    slug: "postroom",
    name: "Postroom",
    category: "software",
    kind: "Email Campaign Software",
    summary:
      "A self-hosted-SMTP email campaign app for contact lists, campaign drafts, review, delivery tracking and unsubscribes.",
    features: [
      "Contact lists and CSV import",
      "Campaign drafts, templates and merge tags",
      "Review step and queued sending through your SMTP provider",
      "Open and signed click tracking",
      "One-click unsubscribe and required postal footer",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "SMTP"],
    github: "https://github.com/MKSanalytIQ/Postroom",
    live: "https://postroom-sooty.vercel.app",
    image: "/media/work/postroom.webp",
    seoTitle: "Postroom Email Campaign Software Case Study | MKSAnalytIQ",
    seoDescription:
      "See how Postroom organises permission-based email lists, campaign drafts and SMTP delivery with tracking and unsubscribe controls.",
    serviceSlugs: ["software-development", "digital-marketing"],
    objective:
      "Give a business a focused workspace for preparing and tracking permission-based email campaigns using its own SMTP provider.",
    approach:
      "Postroom manages contacts, lists, drafts, review and the send queue. A configured SMTP provider delivers messages; without one, the app stores messages in capture mode for flow testing rather than delivering to inboxes.",
  },
  {
    slug: "clientline",
    name: "ClientLine",
    category: "software",
    kind: "Android App Prototype",
    summary:
      "An Android prototype exploring a separate business line for India-based operators contacting US clients. Live carrier service requires account configuration and applicable registrations and approvals.",
    features: [
      "Android app built with Jetpack Compose",
      "Node.js service for carrier-connected actions",
      "Demo mode when carrier credentials are not configured",
      "Live calls and texts depend on an authorised carrier account",
      "US application-to-person messaging requires the relevant registration and client consent",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Node.js", "Twilio"],
    github: "",
    live: "",
    image: "/media/work/clientline.webp",
    seoTitle: "ClientLine Android App Prototype Case Study | MKSAnalytIQ",
    seoDescription:
      "Explore ClientLine, an Android prototype for a separate business line, with a Node.js carrier integration and clear setup requirements.",
    serviceSlugs: ["app-development", "software-development"],
    objective:
      "Explore a separate business phone-line experience for India-based operators who contact US clients.",
    approach:
      "The Android app pairs with a Node.js service for carrier actions. The repository is private and this build is a prototype: without configured carrier credentials it stays in demo mode; live calling and messaging depend on carrier setup, required registrations, consent and applicable approvals. Incoming push calls are not included.",
  },
  {
    slug: "shortgen",
    name: "ShortGen",
    category: "software",
    kind: "Software",
    summary:
      "Multi-tenant SaaS that turns a topic into short-form video — workspaces, jobs, templates and credits.",
    features: ["Multi-tenant workspaces", "Render jobs", "Templates", "Credits"],
    stack: ["Next.js", "Python", "Postgres"],
    github: "https://github.com/MKSanalytIQ/ShortGen",
    live: "https://shortgen-pi.vercel.app",
    seoTitle: "ShortGen — Short-Form Video SaaS | MKSAnalytIQ",
    seoDescription:
      "Project overview of ShortGen, a multi-tenant SaaS for short-form video: workspaces, jobs, templates and credits.",
    serviceSlugs: ["software-development", "ai-development"],
    objective: "Turn a topic into short-form video for more than one workspace.",
    approach:
      "The published product is a multi-tenant SaaS with workspaces, render jobs, templates and credits.",
  },
  {
    slug: "cpaas",
    name: "Open CPaaS",
    category: "software",
    kind: "Software",
    summary:
      "Twilio-style communications platform: messaging, verify, voice, email, provider routing and an Android SMS gateway.",
    features: ["Messaging", "Verify", "Voice", "Email", "Provider routing", "Android SMS gateway"],
    stack: ["NestJS", "Next.js", "Kotlin"],
    github: "https://github.com/MKSanalytIQ/cpaas",
    live: "",
    seoTitle: "Open CPaaS — Messaging and Communications Platform | MKSAnalytIQ",
    seoDescription:
      "Project overview of Open CPaaS: messaging, verify, voice, email, provider routing and an Android SMS gateway.",
    serviceSlugs: ["software-development", "app-development"],
  },
  {
    slug: "taxpilot",
    name: "TaxPilot AI",
    category: "software",
    kind: "Software",
    summary:
      "Guided ITR-3 / ITR-4 preparation for AY 2026–27, with eligibility checks and official ITR-4 JSON export.",
    features: [
      "Guided ITR-3 preparation",
      "Guided ITR-4 preparation",
      "Eligibility checks",
      "Official ITR-4 JSON export",
    ],
    stack: ["Next.js", "Prisma", "TypeScript"],
    github: "https://github.com/MKSanalytIQ/taxpilot-ai",
    live: "https://taxpilot-ai-beta.vercel.app",
    seoTitle: "TaxPilot AI — Guided ITR Preparation | MKSAnalytIQ",
    seoDescription:
      "Project overview of TaxPilot AI: guided ITR-3 and ITR-4 preparation for AY 2026–27, with eligibility checks and ITR-4 JSON export.",
    serviceSlugs: ["ai-development", "software-development"],
    objective: "Guide ITR-3 and ITR-4 preparation for AY 2026–27.",
    approach:
      "The published product includes eligibility checks and an official ITR-4 JSON export.",
  },
  {
    slug: "eye-camp",
    name: "Eye Camp Registration",
    category: "events",
    kind: "Events",
    summary:
      "Hindi, mobile-first registration for a free cataract camp by Trishakti Seva Foundation and RJ Shankara Eye Hospital, Varanasi — slips, QR codes and an admin desk.",
    features: ["Hindi, mobile-first registration", "Registration slips", "QR codes", "Admin desk"],
    stack: ["TypeScript", "Postgres"],
    github: "https://github.com/MKSanalytIQ/QRLogin",
    live: "https://qr-login-six.vercel.app",
    seoTitle: "Eye Camp Registration — Hindi Registration System | MKSAnalytIQ",
    seoDescription:
      "Project overview of the Hindi, mobile-first eye-camp registration system for a free cataract camp in Varanasi.",
    builtFor: "Trishakti Seva Foundation and RJ Shankara Eye Hospital",
    serviceSlugs: ["web-development", "event-management"],
  },
  {
    slug: "navi-zindagi",
    name: "Navi Zindagi",
    category: "campaigns",
    kind: "Campaigns",
    summary:
      "Fundraising and volunteer site for the Navi Zindagi Foundation’s flood-relief work in Nepal and Assam.",
    features: [
      "Fundraising pages",
      "Volunteer information",
      "Flood-relief context for Nepal and Assam",
    ],
    stack: ["TypeScript"],
    github: "https://github.com/MKSanalytIQ/Navizindagi",
    live: "https://navizindagi.vercel.app",
    seoTitle: "Navi Zindagi — Fundraising and Volunteer Site | MKSAnalytIQ",
    seoDescription:
      "Project overview of the Navi Zindagi fundraising and volunteer site for flood-relief work in Nepal and Assam.",
    builtFor: "Navi Zindagi Foundation",
    serviceSlugs: ["web-development"],
  },
  {
    slug: "influencer-os",
    name: "AI Influencer OS",
    category: "marketing",
    kind: "Marketing",
    summary:
      "A workspace to create AI influencer profiles, draft content, approve posts and keep sponsored captions disclosed.",
    features: [
      "AI influencer profiles",
      "Content drafts",
      "Post approval",
      "Sponsored caption disclosure",
    ],
    stack: ["Next.js", "Prisma"],
    github: "https://github.com/MKSanalytIQ/ai-influencer-os",
    live: "",
    seoTitle: "AI Influencer OS — Content Workspace | MKSAnalytIQ",
    seoDescription:
      "Project overview of AI Influencer OS: profiles, content drafts, post approval and disclosed sponsored captions.",
    serviceSlugs: ["ai-development", "software-development", "digital-marketing"],
    objective:
      "Draft and approve influencer content, including a disclosure on sponsored captions.",
    approach: "The published workspace covers profiles, drafts, approval and that disclosure step.",
  },
  {
    slug: "buildsite",
    name: "BuildSite",
    category: "software",
    kind: "Software",
    summary: "Construction product for roles, GPS attendance, stock, billing and a mobile view.",
    features: ["Roles", "GPS attendance", "Stock", "Billing", "Mobile"],
    stack: ["TypeScript"],
    github: "",
    live: "https://buildsite-one.vercel.app",
    seoTitle: "BuildSite — Construction Operations Software | MKSAnalytIQ",
    seoDescription:
      "Project overview of BuildSite, a construction product for roles, attendance, stock and billing.",
    serviceSlugs: ["software-development", "web-development"],
    objective: "Handle roles, attendance, stock and billing for a construction product.",
    approach:
      "The published product lists those functions and a mobile view. No further operating detail is published here.",
  },
  {
    slug: "brokerfree",
    name: "BrokerFree",
    category: "software",
    kind: "Software",
    summary: "Multi-tenant real estate operating system with CRM, listings and a pipeline.",
    features: ["Multi-tenant", "CRM", "Listings", "Pipeline"],
    stack: ["TypeScript"],
    github: "",
    live: "",
    seoTitle: "BrokerFree — Real Estate CRM and Listings | MKSAnalytIQ",
    seoDescription:
      "Project overview of BrokerFree, a multi-tenant real estate system with CRM, listings and a pipeline.",
    serviceSlugs: ["software-development"],
  },
  {
    slug: "brjbharat",
    name: "BRJ Bharat",
    category: "campaigns",
    kind: "Campaigns",
    summary:
      "Bilingual website for Bhartiya Rashtriya Jansatta, with volunteer, contact, newsletter and contribution forms, a news feed and an admin console.",
    features: [
      "English and Hindi",
      "Volunteer and contribution forms",
      "News feed",
      "Admin console",
    ],
    stack: ["JavaScript", "Postgres"],
    github: "",
    live: "https://brjbharat.vercel.app",
    seoTitle: "BRJ Bharat — Bilingual Organisation Website | MKSAnalytIQ",
    seoDescription:
      "Project overview of the bilingual Bhartiya Rashtriya Jansatta website, including forms, a news feed and an admin console.",
    builtFor: "Bhartiya Rashtriya Jansatta",
    serviceSlugs: ["web-development"],
  },
  {
    slug: "carnispora",
    name: "Carnispora",
    category: "software",
    kind: "Software",
    summary: "Hyperlocal instant-delivery product.",
    features: ["Hyperlocal delivery"],
    stack: ["TypeScript"],
    github: "",
    live: "",
    seoTitle: "Carnispora — Hyperlocal Delivery Product | MKSAnalytIQ",
    seoDescription: "Project overview of Carnispora, a hyperlocal instant-delivery product.",
    serviceSlugs: ["software-development", "app-development"],
    objective: "Support hyperlocal instant delivery.",
  },
  {
    slug: "edgebot",
    name: "EdgeBot",
    category: "software",
    kind: "Software",
    summary: "Crypto futures trading bot built with Next.js.",
    features: ["Futures trading bot", "Next.js"],
    stack: ["Next.js", "TypeScript"],
    github: "",
    live: "",
    seoTitle: "EdgeBot — Crypto Futures Trading Bot | MKSAnalytIQ",
    seoDescription: "Project overview of EdgeBot, a crypto futures trading bot built with Next.js.",
    serviceSlugs: ["software-development"],
  },
  {
    slug: "spark",
    name: "Spark",
    category: "software",
    kind: "Software",
    summary: "Dating app with accounts, a swipe deck, matches and real-time chat.",
    features: ["Accounts", "Swipe deck", "Matches", "Real-time chat"],
    stack: ["Next.js", "TypeScript", "Supabase"],
    github: "",
    live: "https://dating-app-me-5f01.vercel.app",
    seoTitle: "Spark — Dating App with Chat | MKSAnalytIQ",
    seoDescription:
      "Project overview of Spark, a dating app with accounts, a swipe deck, matches and chat.",
    serviceSlugs: ["software-development", "web-development"],
  },
  {
    slug: "spark-mobile",
    name: "Spark Mobile",
    category: "software",
    kind: "Software",
    summary: "Native iOS and Android app for Spark, sharing a backend with the web app.",
    features: ["iOS", "Android", "Shared backend with the web app"],
    stack: ["Expo", "TypeScript"],
    github: "",
    live: "",
    seoTitle: "Spark Mobile — iOS and Android App | MKSAnalytIQ",
    seoDescription: "Project overview of Spark Mobile, the iOS and Android app for Spark.",
    serviceSlugs: ["app-development"],
    objective: "Ship the iOS and Android app for Spark.",
    approach: "The published app shares a backend with the Spark web app.",
  },
  {
    slug: "krushnaai",
    name: "KrushnaAI",
    category: "software",
    kind: "Software",
    summary: "Agent marketplace and agent-as-a-service product.",
    features: ["Agent marketplace", "Agent-as-a-service"],
    stack: ["TypeScript"],
    github: "",
    live: "",
    seoTitle: "KrushnaAI — Agent Marketplace | MKSAnalytIQ",
    seoDescription:
      "Project overview of KrushnaAI, an agent marketplace and agent-as-a-service product.",
    serviceSlugs: ["ai-development", "software-development"],
  },
  {
    slug: "krushnalabs",
    name: "KrushnaLabs",
    category: "software",
    kind: "Software",
    summary: "Product for building software by talking to AI.",
    features: ["AI software builder"],
    stack: ["TypeScript"],
    github: "",
    live: "https://krushnalabs.vercel.app",
    seoTitle: "KrushnaLabs — AI Software Builder | MKSAnalytIQ",
    seoDescription:
      "Project overview of KrushnaLabs, a product for building software by talking to AI.",
    serviceSlugs: ["ai-development", "software-development"],
  },
  {
    slug: "ludo-kingdom",
    name: "Ludo Kingdom",
    category: "software",
    kind: "Software",
    summary: "Android and iOS Ludo app with multiplayer.",
    features: ["Android", "iOS", "Multiplayer"],
    stack: ["TypeScript", "Supabase"],
    github: "",
    live: "",
    seoTitle: "Ludo Kingdom — Multiplayer Mobile Game | MKSAnalytIQ",
    seoDescription:
      "Project overview of Ludo Kingdom, an Android and iOS Ludo app with multiplayer.",
    serviceSlugs: ["app-development"],
  },
  {
    slug: "mediagrab",
    name: "MediaGrab",
    category: "software",
    kind: "Software",
    summary: "Tool to download videos and images from X, Instagram, Facebook and YouTube.",
    features: ["X", "Instagram", "Facebook", "YouTube"],
    stack: ["TypeScript"],
    github: "",
    live: "https://media-downloader-neon.vercel.app",
    seoTitle: "MediaGrab — Media Download Tool | MKSAnalytIQ",
    seoDescription:
      "Project overview of MediaGrab, a tool for downloading videos and images from X, Instagram, Facebook and YouTube.",
    serviceSlugs: ["software-development", "web-development"],
  },
  {
    slug: "metasocial",
    name: "MetaSocial",
    category: "marketing",
    kind: "Marketing",
    summary: "Scheduler for posts, mentions, rules and AI drafts.",
    features: ["Post scheduling", "Mentions", "Rules", "AI drafts"],
    stack: ["Next.js", "Supabase"],
    github: "",
    live: "https://metasocial-mu.vercel.app",
    seoTitle: "MetaSocial — Social Post Scheduler | MKSAnalytIQ",
    seoDescription:
      "Project overview of MetaSocial, a scheduler for posts, mentions, rules and AI drafts.",
    serviceSlugs: ["digital-marketing", "ai-development"],
  },
  {
    slug: "omnisell",
    name: "OmniSell",
    category: "software",
    kind: "Software",
    summary: "Multi-channel ecommerce management. One product, every channel.",
    features: ["Multi-channel ecommerce"],
    stack: ["TypeScript"],
    github: "",
    live: "https://omnisell-swart.vercel.app",
    seoTitle: "OmniSell — Multi-Channel Ecommerce Software | MKSAnalytIQ",
    seoDescription: "Project overview of OmniSell, multi-channel ecommerce management.",
    serviceSlugs: ["software-development", "web-development"],
  },
  {
    slug: "rajput-rishta",
    name: "Rajput Rishta",
    category: "software",
    kind: "Software",
    summary: "Community matrimony product for web and mobile.",
    features: ["Web", "Mobile"],
    stack: ["Next.js", "Expo"],
    github: "",
    live: "https://rajput-rishta-mocha.vercel.app",
    seoTitle: "Rajput Rishta — Community Matrimony Product | MKSAnalytIQ",
    seoDescription:
      "Project overview of Rajput Rishta, a community matrimony product for web and mobile.",
    serviceSlugs: ["web-development", "app-development"],
  },
  {
    slug: "siteforge",
    name: "SiteForge",
    category: "software",
    kind: "Software",
    summary: "SaaS for generating websites from one prompt, with billing and custom domains.",
    features: ["Prompted websites", "Billing", "Custom domains"],
    stack: ["TypeScript"],
    github: "",
    live: "",
    seoTitle: "SiteForge — Website Generation SaaS | MKSAnalytIQ",
    seoDescription: "Project overview of SiteForge, a SaaS for generating websites from a prompt.",
    serviceSlugs: ["software-development", "web-development"],
  },
  {
    slug: "storageclean",
    name: "StorageClean",
    category: "software",
    kind: "Software",
    summary: "iOS app for freeing space across photos, cache and tips.",
    features: ["Photos", "Cache", "Tips"],
    stack: ["Swift"],
    github: "",
    live: "",
    seoTitle: "StorageClean — iOS Storage App | MKSAnalytIQ",
    seoDescription: "Project overview of StorageClean, an iOS app for freeing device space.",
    serviceSlugs: ["app-development"],
  },
  {
    slug: "tubeforge",
    name: "TubeForge",
    category: "marketing",
    kind: "Marketing",
    summary: "YouTube channel tool for scripts, video and a publish pipeline.",
    features: ["Scripts", "Video", "Publish pipeline"],
    stack: ["TypeScript"],
    github: "",
    live: "",
    seoTitle: "TubeForge — YouTube Publishing Tool | MKSAnalytIQ",
    seoDescription:
      "Project overview of TubeForge, a YouTube channel tool for scripts, video and publishing.",
    serviceSlugs: ["digital-marketing", "software-development"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function relatedServices(slugs: readonly string[]) {
  return slugs.flatMap((slug) => {
    const service = getService(slug);
    return service ? [service] : [];
  });
}

export function servicesForProject(project: {
  category: ProjectCategory;
  name: string;
  summary: string;
  features: readonly string[];
  stack: readonly string[];
  serviceSlugs?: readonly string[];
  image?: string;
}) {
  if (project.serviceSlugs?.length) return relatedServices(project.serviceSlugs);
  const blob = `${project.name} ${project.summary} ${project.features.join(" ")} ${project.stack.join(" ")}`;
  const slugs: string[] = [];
  if (project.category === "marketing") slugs.push("digital-marketing", "social-media");
  if (project.category === "campaigns") slugs.push("web-development", "digital-marketing");
  if (project.category === "events") slugs.push("event-management");
  if (project.category === "software") slugs.push("software-development", "web-development");
  if (/\b(ios|android|mobile|expo|swift|kotlin)\b/i.test(blob)) slugs.push("app-development");
  if (/ai\b/i.test(blob)) slugs.push("ai-development");
  return relatedServices([...new Set(slugs)]);
}

export function projectsIn(categories: readonly ProjectCategory[]) {
  return projects.filter((project) => categories.includes(project.category));
}

/** Portfolio pages that name this service. Falls back to a short category match. */
export function projectsForService(slug: string) {
  const tagged = projects.filter((project) => project.serviceSlugs?.includes(slug));
  if (tagged.length) return tagged.slice(0, 6);
  const service = getService(slug);
  if (!service) return [];
  return projectsIn(service.related).slice(0, 3);
}

export type Testimonial = {
  client: string;
  company: string;
  role: string;
  quote: string;
  photo?: string;
  /** Only `published: true` entries are rendered. Do not publish placeholders. */
  published: boolean;
};

/**
 * Genuine testimonials only. The sample below is a placeholder and is not rendered.
 * Replace the text, then set published to true.
 */
export const testimonials: Testimonial[] = [
  {
    client: "Placeholder — replace with a real client",
    company: "Placeholder company",
    role: "Role",
    quote: "Placeholder quote. Do not publish this text.",
    published: false,
  },
];

export const publishedTestimonials = testimonials.filter((item) => item.published);

export const budgetOptions = ["₹10k–₹25k", "₹25k–₹50k", "₹50k–₹1L", "₹1L+", "Not sure"] as const;

export const timelineOptions = [
  "Immediately",
  "This month",
  "1–3 months",
  "Just exploring",
] as const;

export const faqs: { id: string; q: string; a: string; tags: string[] }[] = [
  {
    id: "metaads-scope",
    q: "What is included in Meta Ads management?",
    a: "A typical scope can include account review, campaign setup, audience planning, ad copy, creative direction, conversion tracking and reporting. The proposal lists the exact channels and volume.",
    tags: ["metaads"],
  },
  {
    id: "metaads-results",
    q: "Do you guarantee leads or sales from Meta Ads?",
    a: "No. Results depend on the offer, market, creative, budget and sales follow-up. We report available campaign and enquiry data and use it to guide improvements.",
    tags: ["metaads"],
  },
  {
    id: "instagramads-scope",
    q: "Can Instagram ads run separately from Facebook ads?",
    a: "Yes. An Instagram-focused scope can prioritize Instagram placements, while the account and campaign tools may still be managed through Meta's advertising platform.",
    tags: ["instagramads"],
  },
  {
    id: "instagramads-results",
    q: "Are Reels production and ad spend included?",
    a: "Only when the proposal includes them. Creative production, creator fees and platform advertising spend are separated from campaign-management fees.",
    tags: ["instagramads"],
  },
  {
    id: "youtubeads-scope",
    q: "What types of YouTube advertising can you manage?",
    a: "The suitable format depends on your campaign goal and available video assets. The plan can cover skippable video, short-form placements, audience settings and conversion measurement where supported.",
    tags: ["youtubeads"],
  },
  {
    id: "youtubeads-results",
    q: "Do you create the YouTube video advertisement?",
    a: "Script direction, editing or production can be included as separate deliverables. The campaign scope states which assets you provide and which the studio creates.",
    tags: ["youtubeads"],
  },
  {
    id: "googleads-scope",
    q: "What does Google Ads management include?",
    a: "A typical scope includes account review, keyword planning, campaign setup, advertisements, negative keywords, conversion tracking and reporting. Landing-page work is listed separately when needed.",
    tags: ["googleads"],
  },
  {
    id: "googleads-results",
    q: "Can you guarantee the top ad position or a number of leads?",
    a: "No. Auction results and enquiry volume depend on competition, budget, offer, website and follow-up. We manage toward agreed goals and report the available evidence.",
    tags: ["googleads"],
  },
  {
    id: "whatsapp-scope",
    q: "Can you connect WhatsApp to my existing CRM?",
    a: "We review the CRM and your WhatsApp provider first. Integration depends on their supported interfaces and account access; the agreed fields and routing rules are listed before work starts.",
    tags: ["whatsapp"],
  },
  {
    id: "whatsapp-details",
    q: "Does the service include unsolicited bulk messaging?",
    a: "Campaigns use an opted-in audience and an agreed preference and opt-out process. The service covers customer communication workflows, not purchased contact lists.",
    tags: ["whatsapp"],
  },
  {
    id: "chatbot-scope",
    q: "Can the chatbot answer using my own documents?",
    a: "Yes, when the source files and their usage are approved. We review their quality and access requirements and choose an appropriate retrieval and update workflow.",
    tags: ["chatbot"],
  },
  {
    id: "chatbot-details",
    q: "Will every answer be correct?",
    a: "AI responses need evaluation and ongoing review. We define limits, test common questions and provide a human escalation path. Model usage and hosting costs are agreed separately.",
    tags: ["chatbot"],
  },
  {
    id: "local-scope",
    q: "Can you guarantee a place in the Google Maps top three?",
    a: "No. We improve profile completeness and consistency, but Google determines visibility. Rankings vary by search, location, relevance and other factors.",
    tags: ["local"],
  },
  {
    id: "local-details",
    q: "Can you manage profiles outside Delhi NCR?",
    a: "Yes. Eligible businesses elsewhere in India can work with us remotely. The business owner retains ownership and grants the access needed for agreed work.",
    tags: ["local"],
  },
  {
    id: "ecommerce-scope",
    q: "Can you improve an existing ecommerce store?",
    a: "Yes. We can review navigation, product pages, checkout and integrations before proposing targeted improvements or a rebuild.",
    tags: ["ecommerce"],
  },
  {
    id: "ecommerce-details",
    q: "Are payment, hosting and platform fees included?",
    a: "The proposal separates development fees from hosting, platform subscriptions, payment charges and third-party tools. Gateway activation depends on the merchant account.",
    tags: ["ecommerce"],
  },
  {
    id: "crm-scope",
    q: "Do you build a custom CRM or configure an existing one?",
    a: "Either can be considered. We review your process, budget and existing tools, then recommend configuration or a custom build with a defined scope.",
    tags: ["crm"],
  },
  {
    id: "crm-details",
    q: "Can you move our spreadsheet contacts into the CRM?",
    a: "Yes, after reviewing the file structure, permissions and data quality. Field mapping, duplicate rules and a sample import are agreed before the full migration.",
    tags: ["crm"],
  },
  {
    id: "email-scope",
    q: "Can you set up Brevo email automation?",
    a: "Yes. We can plan templates, contact attributes, segments and supported workflows in Brevo. Other tools can be assessed against your requirements.",
    tags: ["email"],
  },
  {
    id: "email-details",
    q: "Do you supply email lists or guarantee inbox placement?",
    a: "No. Campaigns use contacts with permission to receive them. Delivery depends on sender reputation, recipient systems and list quality; software subscriptions and send limits are scoped separately.",
    tags: ["email"],
  },
  {
    id: "maintenance-scope",
    q: "Can you maintain a website built by another developer?",
    a: "We first review the technology, hosting and available access. If we can support the stack, we propose an onboarding audit and an ongoing plan.",
    tags: ["maintenance"],
  },
  {
    id: "maintenance-details",
    q: "Do you guarantee a perfect speed score?",
    a: "No. We measure the current site and target practical improvements. Results depend on hosting, third-party scripts, page content and visitor devices.",
    tags: ["maintenance"],
  },
  {
    id: "linkedin-scope",
    q: "What do you mean by LinkedIn automation?",
    a: "Content approval workflows, supported scheduling, authorized lead integrations and CRM reminders. The exact tools and account permissions are confirmed in the proposal.",
    tags: ["linkedin"],
  },
  {
    id: "linkedin-details",
    q: "Can every LinkedIn account connect to Lead Sync?",
    a: "No. Lead Sync access and integrations depend on eligibility, permissions and provider support. We verify those prerequisites and agree an alternative handover process if integration is unavailable.",
    tags: ["linkedin"],
  },
  {
    id: "twitter-offer",
    q: "What does your Twitter account growth service include?",
    a: "A profile review, audience research, a content calendar, posts or threads, engagement guidance and reporting. The proposal sets the publishing volume and who handles replies.",
    tags: ["twitter"],
  },
  {
    id: "twitter-expectations",
    q: "Do you guarantee followers or sell engagement?",
    a: "No. This service focuses on original content and relevant audience engagement. Followers, reach and enquiries depend on the audience and content; there is no fixed growth promise.",
    tags: ["twitter"],
  },
  {
    id: "instagram-offer",
    q: "Can you help grow an Instagram account for my business?",
    a: "Yes. We plan profile improvements, content themes, Reels and carousels around your business and audience. The aim is relevant attention and clearer enquiry paths.",
    tags: ["instagram"],
  },
  {
    id: "instagram-expectations",
    q: "Are shoots and paid Instagram ads included?",
    a: "Filming, editing and paid campaigns are agreed separately in the proposal. Remote work can use footage you provide. Any ad spend is identified separately from the service fee.",
    tags: ["instagram"],
  },
  {
    id: "youtube-offer",
    q: "What does your YouTube channel growth service cover?",
    a: "Channel review, audience and topic research, video planning, title and thumbnail direction, upload guidance and reporting. Production and editing are agreed according to your needs.",
    tags: ["youtube"],
  },
  {
    id: "youtube-expectations",
    q: "Can you guarantee subscribers, views or monetization?",
    a: "No. We focus on content quality, clear packaging and a consistent publishing process. Viewer response and platform eligibility determine outcomes; we do not promise subscriber counts or monetization.",
    tags: ["youtube"],
  },
  {
    id: "growth-location",
    q: "Do you work only with clients in Delhi NCR?",
    a: "The studio is based in Noida and serves Delhi NCR, including Delhi, Gurugram, Ghaziabad and Faridabad. Businesses and creators across India can collaborate remotely through briefs, shared assets and content approvals.",
    tags: ["twitter", "instagram", "youtube"],
  },
  {
    id: "cost",
    q: "How much does digital marketing cost?",
    a: "There isn’t a single published price. Cost depends on the channels, how long the work runs, and whether a landing page or tracking setup is included. Share a budget range on the consultation form and you’ll get a written scope before anything starts. This site does not list package prices.",
    tags: ["home", "contact", "marketing"],
  },
  {
    id: "outside",
    q: "Do you work with businesses outside Noida?",
    a: "Yes. The studio is at C-81, C Block, Sector 8, Noida. From there we work with businesses across Delhi NCR — including Greater Noida, Delhi, Gurugram, Ghaziabad and Faridabad — and elsewhere in India. A visit to Noida is welcome when it helps; otherwise calls and WhatsApp cover the rest.",
    tags: ["home", "contact", "about", "marketing", "web", "software", "app", "ai"],
  },
  {
    id: "both",
    q: "Can you build my website and manage marketing?",
    a: "Yes. Marketing, design and development can sit in one engagement so the site, the campaigns and the follow-up are planned together. You can also hire one of those practices on its own.",
    tags: ["home", "contact", "marketing", "software", "social", "web", "app", "ai"],
  },
  {
    id: "ownership",
    q: "Who owns the website/source code?",
    a: "Ownership is set in the written scope for that project, not on this website. Where a build is part of the work, the scope says what is handed over — including a repository when that is what was agreed. This page is not a contract and does not transfer intellectual property by itself.",
    tags: ["home", "contact", "software"],
  },
  {
    id: "ads",
    q: "Do you manage Google and Meta Ads?",
    a: "Yes. Digital marketing engagements can include Google Ads, Meta Ads, landing pages, conversion tracking, retargeting and performance reporting. What is included is listed in the scope you approve.",
    tags: ["home", "contact", "marketing"],
  },
  {
    id: "timeline",
    q: "How long does it take to build a website?",
    a: "It depends on the number of pages, the content you already have, and any integrations. A timeline is part of the written scope before production starts. This site does not promise a fixed number of days.",
    tags: ["home", "contact", "software", "web"],
  },
  {
    id: "social-scope",
    q: "What does social media management include?",
    a: "Usually a monthly content plan, reels and stills, captions in your voice, community replies and a review of what to change next month. You approve the calendar before it goes out.",
    tags: ["social"],
  },
  {
    id: "events-scope",
    q: "What does event management include?",
    a: "A typical event brief covers the run of show, vendor and on-site coordination, invites and registration, reminder messages, and recap content. Promotion before the event can be added when you want it. The exact list is in the scope.",
    tags: ["events"],
  },

  {
    id: "web-types",
    q: "What types of websites do you build?",
    a: "Business and corporate websites, landing pages, e-commerce websites, and custom web applications such as admin dashboards. The written scope lists the pages, integrations and handover for that project.",
    tags: ["web"],
  },
  {
    id: "web-apps",
    q: "Do you build custom web applications?",
    a: "Yes. Alongside marketing websites, the studio builds web applications, dashboards and other tools backed by an API and a database when the brief needs them.",
    tags: ["web", "software"],
  },
  {
    id: "web-maintain",
    q: "Do you provide website maintenance?",
    a: "Yes, when it is included in the scope. Maintenance can cover updates, fixes and small changes after launch. It is agreed in writing, not assumed.",
    tags: ["web"],
  },
  {
    id: "app-kinds",
    q: "What kinds of apps do you build?",
    a: "Business apps, plus Android, iOS and cross-platform apps. Published studio work includes Expo apps, a Swift iOS app and a Kotlin Android component. The stack for a new brief is chosen in the scope.",
    tags: ["app"],
  },
  {
    id: "app-maintain",
    q: "Do you maintain apps after launch?",
    a: "App maintenance can be part of the engagement when you want updates after the first release. What is included is written into the scope.",
    tags: ["app"],
  },
  {
    id: "ai-what",
    q: "What does AI development include?",
    a: "Software that uses AI for a defined job: chatbots, automation, integrations with AI tools, dashboards and other business tools. MKSAnalytIQ does not claim a proprietary foundation model. The scope says which tools and workflows are included.",
    tags: ["ai", "software"],
  },
  {
    id: "dm-what",
    q: "What does a digital marketing company in Noida do?",
    a: "At MKSAnalytIQ it means writing down the offer, then running the channels in the scope: Google Ads, Meta Ads, landing pages, tracking, SEO, content and a monthly read of enquiries. Social media can be part of that or a separate plan. This page does not promise rankings or a number of leads.",
    tags: ["marketing", "home"],
  },
  {
    id: "web-noida",
    q: "Does MKSAnalytIQ provide web development in Noida?",
    a: "Yes. From the Sector 8 studio, MKSAnalytIQ builds business websites, landing pages, e-commerce sites and custom web applications for companies in Noida, across Delhi NCR and elsewhere in India.",
    tags: ["web"],
  },
  {
    id: "software-custom",
    q: "Can you build custom software for a business?",
    a: "Yes. Custom software, SaaS products, dashboards and database-backed tools are scoped in writing, then built and handed over as that scope describes. A repository is included when the agreement says so.",
    tags: ["software"],
  },
  {
    id: "app-platforms",
    q: "Do you develop Android and iOS applications?",
    a: "Yes, when the brief needs them. Published studio work includes Android and iOS apps, Expo for cross-platform builds, Swift for an iOS app and Kotlin for an Android component. The platforms for a new project are named in the scope.",
    tags: ["app"],
  },
  {
    id: "ai-existing",
    q: "Can you integrate AI into an existing business application?",
    a: "Yes, when that is the brief. It means adding a defined job — a draft, a chatbot, a check or a workflow — using AI tools named in the scope. MKSAnalytIQ does not claim a proprietary model, and the existing system is not changed beyond what the scope lists.",
    tags: ["ai", "software"],
  },
  {
    id: "start-marketing",
    q: "How do I start digital marketing with MKSAnalytIQ?",
    a: "Book a free consultation or send a WhatsApp message with the offer and whether a landing page already exists. You receive a written scope before any campaign launches. Prices are not listed on this site.",
    tags: ["marketing"],
  },
  {
    id: "start-web",
    q: "How do I start a website or web app project?",
    a: "Tell us whether you need a business site, an online shop or a web application, and what content or systems you already have. The consultation turns that into a written scope before production starts.",
    tags: ["web"],
  },
  {
    id: "start-software",
    q: "How do I start a custom software project?",
    a: "Describe the operation the software has to support. The first conversation decides the shape of the build and whether a repository is part of the handover. Work starts after you approve the written scope.",
    tags: ["software"],
  },
  {
    id: "start-app",
    q: "How do I start an app project?",
    a: "Say who will use the app and which platforms you have in mind. The scope then names Android, iOS or cross-platform, plus any admin panel or API. You can start that conversation from Noida or remotely.",
    tags: ["app"],
  },
  {
    id: "start-ai",
    q: "How do I start an AI or automation project?",
    a: "Describe the job you want drafted, answered or routed, and who should approve the output. The consultation names the external tools and the limits. MKSAnalytIQ does not scope this as training a new foundation model.",
    tags: ["ai"],
  },
  {
    id: "dm-services",
    q: "Which digital marketing services can a scope include?",
    a: "SEO, Google Ads, Meta Ads, social media marketing, content marketing, lead generation, analytics and conversion optimization. The written scope names which of those are in the project. Social media can also be planned on its own page.",
    tags: ["dm-page"],
  },
  {
    id: "dm-ads",
    q: "Do you manage Google Ads and Meta Ads?",
    a: "Yes, when the scope includes them. That covers the campaigns, a landing page if one is listed, conversion tracking and a report of enquiries and spend. Media spend is paid to the ad platform and is not a package price on this site.",
    tags: ["dm-page"],
  },
  {
    id: "dm-measure",
    q: "How do you measure a campaign?",
    a: "Against the path in the scope: a form, a call or WhatsApp, plus what was spent. The report shows enquiries and spend. It does not promise a ranking, a lead count or a return.",
    tags: ["dm-page"],
  },
  {
    id: "dm-page",
    q: "Do I need a website before marketing starts?",
    a: "You need a place the enquiry can land. An existing page can be used. If there isn’t one, a landing page can be part of the marketing scope, or a separate web development brief.",
    tags: ["dm-page"],
  },
  {
    id: "dm-after",
    q: "What happens after the campaigns launch?",
    a: "We read the first results, keep what is producing enquiries and change what is not, inside the scope you approved. That is the optimize step. It is not a guarantee of growth.",
    tags: ["dm-page"],
  },
  {
    id: "dm-start",
    q: "How do I start, and is the first conversation free?",
    a: "Yes. Book a free consultation or send a WhatsApp message with the offer and whether a page already exists. You receive a written scope before a campaign launches. The studio is in Sector 8, Noida, and the work is available across Delhi NCR and India.",
    tags: ["dm-page"],
  },
  {
    id: "web-kinds",
    q: "What kinds of websites can the scope include?",
    a: "Business websites, corporate websites, landing pages and ecommerce sites. The written scope lists the pages. This page does not promise a design trend or a launch date.",
    tags: ["web-page"],
  },
  {
    id: "web-apps-page",
    q: "Do you build web applications and dashboards?",
    a: "Yes, when the brief is a tool your team uses in the browser rather than a public brochure site. Dashboards are part of that when the scope names the screens.",
    tags: ["web-page"],
  },
  {
    id: "web-handover",
    q: "What do we receive at the end?",
    a: "Whatever the written agreement says you keep: the live site or application, and a repository when that was agreed. This page is not the contract.",
    tags: ["web-page"],
  },
  {
    id: "web-care",
    q: "Is website maintenance included?",
    a: "Only when the scope says so. Maintenance then covers updates, fixes and small changes. It is not assumed after launch.",
    tags: ["web-page"],
  },
  {
    id: "web-connect",
    q: "Can the site connect to ads or a system we already use?",
    a: "A form, call or WhatsApp path can be part of the site. A payment provider, CRM or other system is included only when the scope names it. Marketing for the site is a separate digital marketing brief unless you ask for both.",
    tags: ["web-page"],
  },
  {
    id: "web-begin",
    q: "How do I start a web project?",
    a: "Use Discuss Your Website or Start a Web Project, or message on WhatsApp. Say whether you need a business site, a shop or a web application, and what content you already have. The first reply is a written scope, not a build. The studio is in Sector 8, Noida.",
    tags: ["web-page"],
  },
  {
    id: "sw-kinds",
    q: "What kinds of custom software can a scope include?",
    a: "Business software, a SaaS product, a web application, a dashboard, an API, or a database-backed tool. The written scope names which of those this project is. It does not promise a user count or a revenue figure.",
    tags: ["sw-page"],
  },
  {
    id: "sw-saas",
    q: "Do you build SaaS platforms?",
    a: "Yes, when more than one customer needs to sign in to the same product. Published studio work includes multi-tenant products such as ShortGen. A new brief is scoped on its own and does not inherit that product’s features.",
    tags: ["sw-page"],
  },
  {
    id: "sw-handover",
    q: "What is handed over?",
    a: "Whatever the written agreement says you keep, including a repository when that was agreed. This page is not the contract and does not transfer intellectual property by itself.",
    tags: ["sw-page"],
  },
  {
    id: "sw-data",
    q: "Can the software include an API or a database?",
    a: "Yes, when the operation needs shared records or a connection to another system. Those are named in the scope. They are not added by default.",
    tags: ["sw-page"],
  },
  {
    id: "sw-ai",
    q: "Can the software include AI or workflow automation?",
    a: "Yes, as a defined step inside the product: a draft, a check, or a job moving from one agreed stage to the next. A person still reviews it. MKSAnalytIQ does not claim a proprietary foundation model.",
    tags: ["sw-page"],
  },
  {
    id: "sw-start",
    q: "How do I start a software project?",
    a: "Use Discuss Your Software Idea or Start Your Software Project, or message on WhatsApp. Describe the operation the software has to support. The first reply is a written scope. The studio is in Sector 8, Noida.",
    tags: ["sw-page"],
  },
  {
    id: "app-platforms-page",
    q: "Do you build Android and iOS apps?",
    a: "Yes, when the scope names those platforms. Published studio work includes Android and iOS apps, a Swift iOS app and a Kotlin Android component. A new project does not automatically include both.",
    tags: ["app-page"],
  },
  {
    id: "app-cross",
    q: "Do you build cross-platform apps?",
    a: "Yes. Published cross-platform apps have used Expo. The scope says whether this brief is cross-platform or native. It is not assumed.",
    tags: ["app-page"],
  },
  {
    id: "app-admin",
    q: "Can the app include an admin panel or an API?",
    a: "Yes, when the scope lists them. An admin panel is how the team manages what is inside the app. An API is included only when the app has to share data with a site or another system.",
    tags: ["app-page"],
  },
  {
    id: "app-handover",
    q: "What do we receive at launch?",
    a: "The app on the platforms named in the scope, and whatever else the written agreement says you keep. This page is not the contract.",
    tags: ["app-page"],
  },
  {
    id: "app-care",
    q: "Is app maintenance included?",
    a: "Only when the scope says so. Maintenance then covers updates after the first release. It is not assumed.",
    tags: ["app-page"],
  },
  {
    id: "app-begin",
    q: "How do I start an app project?",
    a: "Use Discuss Your App Idea or Start an App Project, or message on WhatsApp. Say who will use the app and which platforms you have in mind. The first reply is a written scope. The studio is in Sector 8, Noida.",
    tags: ["app-page"],
  },
  {
    id: "ai-model",
    q: "Do you train a proprietary AI model?",
    a: "No. MKSAnalytIQ does not claim a foundation model of its own. An AI project uses an external tool named in the scope, inside a workflow a person still reviews.",
    tags: ["ai-page"],
  },
  {
    id: "ai-scope",
    q: "What can an AI project include?",
    a: "An application, a chatbot, an integration, a workflow, a dashboard or an AI step inside other software. The written scope names which of those this brief is. Published examples include guided checks, content drafts with approval, and turning a topic into a short-form asset.",
    tags: ["ai-page"],
  },
  {
    id: "ai-review",
    q: "Does someone still review the output?",
    a: "Yes. The scope says what a person approves before the result is used. An unsupervised system is not what this service is.",
    tags: ["ai-page"],
  },
  {
    id: "ai-connect",
    q: "Can this connect to software, a website or an app we already have?",
    a: "Yes, when the scope names that system. The AI work is then a feature inside it, not a separate research project. A public site is web development, and a phone app is app development, when those are part of the same brief.",
    tags: ["ai-page"],
  },
  {
    id: "ai-results",
    q: "Do you guarantee what the AI will produce?",
    a: "No. The page does not promise accuracy, a lead count or a business result. You get the workflow in the scope, and changes later only inside that scope.",
    tags: ["ai-page"],
  },
  {
    id: "ai-begin",
    q: "How do I start an AI project?",
    a: "Use Discuss an AI Project or Explore AI for Your Business, or message on WhatsApp. Describe the job you want drafted, checked or answered, and who should approve it. The first reply is a written scope. The studio is in Sector 8, Noida.",
    tags: ["ai-page"],
  },
];

export function faqsFor(tag: string) {
  return faqs.filter((item) => item.tags.includes(tag));
}
