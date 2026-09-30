import { readFileSync } from "node:fs";
import { join } from "node:path";

export const OG_SITE_REL_PATH = "src/lib/og/site.json";

export function readOgSite(cwd = process.cwd()) {
  try {
    const parsed = JSON.parse(readFileSync(join(cwd, OG_SITE_REL_PATH), "utf8"));
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export function siteHasCustomCard(site = {}) {
  return String(site.card ?? "").toLowerCase() === "custom";
}
