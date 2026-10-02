import { company, site } from "@/lib/content";

export function absoluteUrl(path: string) {
  const base = new URL(site.url);
  const basePath = normalizePathname(base.pathname);
  const rawPath = String(path ?? "/").trim();

  if (/^https?:\/\//i.test(rawPath)) {
    const absolute = new URL(rawPath);
    absolute.pathname = normalizePathname(absolute.pathname);
    return absolute.toString();
  }

  const suffixIndex = rawPath.search(/[?#]/);
  const rawPathname = suffixIndex === -1 ? rawPath : rawPath.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : rawPath.slice(suffixIndex);
  const relativePath =
    rawPathname.replaceAll("\\", "/").replace(/^\/+/, "").replace(/\/{2,}/g, "/") + suffix;
  const baseDirectory = `${base.origin}${basePath === "/" ? "/" : `${basePath}/`}`;
  const url = new URL(relativePath || ".", baseDirectory);
  const basePrefix = basePath === "/" ? "/" : `${basePath}/`;
  if (url.origin !== base.origin || !url.pathname.startsWith(basePrefix)) {
    url.pathname = basePath;
    url.search = "";
    url.hash = "";
  }
  url.pathname = normalizePathname(url.pathname);
  return url.toString();
}

function normalizePathname(pathname: string) {
  const normalized = pathname.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
  return normalized === "/" ? "/" : normalized.replace(/\/+$/, "");
}

function sanitizeSchemaText(value: string) {
  return String(value)
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Cities and regions MKSAnalytIQ serves. The studio address is in Noida. */
export function areaServedPlaces() {
  return [
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Greater Noida" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Ghaziabad" },
    { "@type": "City", name: "Faridabad" },
    { "@type": "Country", name: "India" },
  ];
}

export function businessGraph(description: string) {
  const origin = site.url;
  const organizationId = `${origin}/#organization`;
  const localId = `${origin}/#localbusiness`;
  const websiteId = `${origin}/#website`;
  const address = {
    "@type": "PostalAddress",
    streetAddress: "C-81, C Block, Sector 8",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201306",
    addressCountry: "IN",
  };
  const founder = {
    "@type": "Person",
    name: company.proprietor,
    sameAs: company.proprietorSocialLinks.map((profile) => profile.url),
  };
  const logo = absoluteUrl("/media/logo.png");
  const image = absoluteUrl("/media/office.jpg");
  const sameAs = company.socialLinks ?? [];
  const geo = {
    "@type": "GeoCoordinates",
    latitude: 28.5968,
    longitude: 77.3178,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: company.name,
        url: origin,
        email: company.email,
        telephone: company.phoneTel,
        logo,
        image,
        sameAs,
        founder,
        address,
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": localId,
        name: company.name,
        url: origin,
        image,
        logo,
        geo,
        priceRange: "₹₹",
        sameAs,
        email: company.email,
        telephone: company.phoneTel,
        founder,
        description,
        parentOrganization: { "@id": organizationId },
        address,
        areaServed: areaServedPlaces(),
        hasMap: company.maps,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: company.name,
        url: origin,
        inLanguage: "en-IN",
        publisher: { "@id": organizationId },
        description,
      },
    ],
  };
}

export function pageMeta({
  title,
  description,
  path,
  image,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image ?? site.ogImage);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:locale", content: site.locale },
      { property: "og:site_name", content: company.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      ...(company.twitterHandle
        ? [
            { name: "twitter:site", content: company.twitterHandle },
            { name: "twitter:creator", content: company.twitterHandle },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  const rest = items.filter((item) => item.path !== "/");
  const ordered = [{ name: "Home", path: "/" }, ...rest];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: ordered.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: sanitizeSchemaText(item.q),
      acceptedAnswer: {
        "@type": "Answer",
        text: sanitizeSchemaText(item.a),
      },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  serviceType,
  path,
}: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: sanitizeSchemaText(name),
    description: sanitizeSchemaText(description),
    serviceType: sanitizeSchemaText(serviceType),
    url: absoluteUrl(path),
    provider: { "@id": `${new URL(site.url).origin}/#organization` },
    areaServed: areaServedPlaces(),
  };
}
