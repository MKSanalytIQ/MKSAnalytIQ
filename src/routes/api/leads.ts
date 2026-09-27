import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { budgetOptions, company, services, timelineOptions } from "@/lib/content";

const contactSchema = z
  .object({
    kind: z.literal("contact"),
    name: z.string().trim().min(2).max(80),
    company: z.string().trim().max(120),
    phone: z.string().trim().max(40),
    email: z.union([z.literal(""), z.email().trim().max(254)]),
    website: z.string().trim().max(200),
    service: z.string().trim().min(1).max(80),
    budget: z.union([z.enum(budgetOptions), z.literal("")]),
    timeline: z.union([z.enum(timelineOptions), z.literal("")]),
    preferred: z.enum(["whatsapp", "email", "phone"]),
    message: z.string().trim().min(12).max(3000),
    fax: z.string().max(200).default(""),
  })
  .strict();

const landingSchema = z
  .object({
    kind: z.literal("landing"),
    name: z.string().trim().min(2).max(80),
    business: z.string().trim().min(2).max(120),
    service: z.string().trim().min(2).max(80),
    budget: z.enum(["15k", "30k", "50k+", "1L+"]),
    whatsapp: z.string().regex(/^[6-9]\d{9}$/),
    source: z.string().trim().min(2).max(80),
    fax: z.string().max(200).default(""),
  })
  .strict();

const submissionSchema = z
  .discriminatedUnion("kind", [contactSchema, landingSchema])
  .superRefine((data, context) => {
    if (data.kind === "contact" && !data.phone && !data.email) {
      context.addIssue({
        code: "custom",
        path: ["phone"],
        message: "Add a phone number or email.",
      });
    }
    if (data.kind === "contact" && data.phone && !/^[6-9]\d{9}$/.test(data.phone)) {
      context.addIssue({
        code: "custom",
        path: ["phone"],
        message: "Use a 10-digit Indian mobile number.",
      });
    }
  });
const MAX_BODY_BYTES = 16_384;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 4;

type RateWindow = { count: number; resetAt: number };
const recentSubmissions = new Map<string, RateWindow>();

async function readJsonLimited(request: Request): Promise<unknown> {
  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES)
    throw new Error("BODY_TOO_LARGE");
  if (!request.body) throw new Error("INVALID_JSON");

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new Error("BODY_TOO_LARGE");
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  try {
    return JSON.parse(new TextDecoder().decode(bytes)) as unknown;
  } catch {
    throw new Error("INVALID_JSON");
  }
}

function limitedByRate(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const key =
    request.headers.get("cf-connecting-ip")?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    forwarded ||
    "unknown";
  const now = Date.now();
  if (recentSubmissions.size > 1000) {
    for (const [entryKey, entry] of recentSubmissions) {
      if (entry.resetAt <= now) recentSubmissions.delete(entryKey);
    }
    if (recentSubmissions.size > 5000) {
      const oldest = recentSubmissions.keys().next().value;
      if (oldest) recentSubmissions.delete(oldest);
    }
  }
  const previous = recentSubmissions.get(key);
  if (!previous || previous.resetAt <= now) {
    recentSubmissions.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (previous.count >= RATE_LIMIT) return true;
  previous.count += 1;
  return false;
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character] ?? character,
  );
}

function serviceLabel(id: string) {
  if (id === "other") return "Other";
  if (id === "ai") return "AI Development & Automation";
  return services.find((service) => service.id === id)?.title ?? id;
}

function emailForSubmission(data: z.infer<typeof submissionSchema>) {
  if (data.kind === "contact") {
    const details = [
      ["Name", data.name],
      ["Business", data.company || "Not provided"],
      ["Phone / WhatsApp", data.phone || "Not provided"],
      ["Email", data.email || "Not provided"],
      ["Website / Instagram", data.website || "Not provided"],
      ["Service", serviceLabel(data.service)],
      ["Budget", data.budget || "Not specified"],
      ["Timeline", data.timeline || "Not specified"],
      ["Preferred reply", data.preferred],
    ];
    return {
      subject: "New website enquiry",
      replyTo: data.email ? { email: data.email, name: data.name } : undefined,
      htmlContent: `<main style="font-family:Arial,sans-serif;color:#172033;line-height:1.6"><h2>New website enquiry</h2><table style="border-collapse:collapse">${details.map(([label, value]) => `<tr><th align="left" style="padding:5px 16px 5px 0">${escapeHtml(label)}</th><td style="padding:5px 0">${escapeHtml(value)}</td></tr>`).join("")}</table><h3>Project description</h3><p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p></main>`,
    };
  }

  const details = [
    ["Name", data.name],
    ["Business", data.business],
    ["WhatsApp", data.whatsapp],
    ["Service", data.service],
    ["Budget", data.budget],
    ["Page", data.source],
  ];
  return {
    subject: "New website enquiry",
    replyTo: undefined,
    htmlContent: `<main style="font-family:Arial,sans-serif;color:#172033;line-height:1.6"><h2>New website enquiry</h2><table style="border-collapse:collapse">${details.map(([label, value]) => `<tr><th align="left" style="padding:5px 16px 5px 0">${escapeHtml(label)}</th><td style="padding:5px 0">${escapeHtml(value)}</td></tr>`).join("")}</table></main>`,
  };
}

export const Route = createFileRoute("/api/leads")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
          return Response.json(
            { ok: false, message: "Send the enquiry using the form." },
            { status: 415 },
          );
        }
        const origin = request.headers.get("origin");
        if (origin) {
          try {
            if (new URL(origin).origin !== new URL(request.url).origin) {
              return Response.json(
                { ok: false, message: "This request could not be accepted." },
                { status: 403 },
              );
            }
          } catch {
            return Response.json(
              { ok: false, message: "This request could not be accepted." },
              { status: 403 },
            );
          }
        }

        let body: unknown;
        try {
          body = await readJsonLimited(request);
        } catch (error) {
          const tooLarge = error instanceof Error && error.message === "BODY_TOO_LARGE";
          return Response.json(
            { ok: false, message: "Check the form and try again." },
            { status: tooLarge ? 413 : 400 },
          );
        }
        const parsed = submissionSchema.safeParse(body);
        if (!parsed.success)
          return Response.json(
            { ok: false, message: "Check the form and try again." },
            { status: 400 },
          );

        // Ignore bots that fill the visually hidden honeypot field.
        if (parsed.data.fax.trim()) return Response.json({ ok: true }, { status: 202 });
        if (limitedByRate(request)) {
          return Response.json(
            { ok: false, message: "Please wait a few minutes before sending another enquiry." },
            { status: 429 },
          );
        }

        const apiKey = process.env.BREVO_API_KEY?.trim();
        const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim();
        const senderName = process.env.BREVO_SENDER_NAME?.trim();
        if (!apiKey || !senderEmail || !senderName) {
          return Response.json(
            {
              ok: false,
              message:
                "Enquiry delivery is temporarily unavailable. Please use WhatsApp or email below.",
            },
            { status: 503 },
          );
        }

        const email = emailForSubmission(parsed.data);
        try {
          const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
              "api-key": apiKey,
              accept: "application/json",
              "content-type": "application/json",
            },
            body: JSON.stringify({
              sender: { email: senderEmail, name: senderName },
              to: [{ email: company.email, name: company.name }],
              ...(email.replyTo ? { replyTo: email.replyTo } : {}),
              subject: email.subject,
              htmlContent: email.htmlContent,
              tags: ["website-enquiry"],
            }),
            signal: AbortSignal.timeout(12_000),
          });
          if (!response.ok) {
            console.error(`[leads] Brevo notification failed with status ${response.status}.`);
            return Response.json(
              {
                ok: false,
                message:
                  "We couldn’t send the enquiry right now. Please use WhatsApp or email below.",
              },
              { status: 502 },
            );
          }
          return Response.json({ ok: true }, { status: 202 });
        } catch {
          console.error("[leads] Brevo notification request failed.");
          return Response.json(
            {
              ok: false,
              message:
                "We couldn’t send the enquiry right now. Please use WhatsApp or email below.",
            },
            { status: 502 },
          );
        }
      },
    },
  },
});
