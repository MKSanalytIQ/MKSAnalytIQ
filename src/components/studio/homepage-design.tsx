import { ArrowRight } from "lucide-react";
import type { HomepageDesign } from "@/lib/marketing";

export function HomepageDesignPanel({
  current,
  canManage,
  working,
  onSelect,
}: {
  current: HomepageDesign;
  canManage: boolean;
  working: boolean;
  onSelect: (design: HomepageDesign) => void;
}) {
  const options: { id: HomepageDesign; name: string; description: string; button: string }[] = [
    {
      id: "growth",
      name: "Growth",
      description:
        "Warm cream background, orange and blue accents, a business dashboard hero, service cards, process, case studies and technology stack.",
      button: "Make Growth live",
    },
    {
      id: "current",
      name: "Current 3D",
      description:
        "The existing cool blue and violet homepage with the floating 3D service cards and current layout.",
      button: "Restore current design",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200/75">
              Public website
            </p>
            <h2 className="mt-2 text-xl font-bold">Homepage design</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/50">
              Choose which homepage appears for visitors after the next page load. You can restore
              the current 3D design here with one click.
            </p>
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-xs font-semibold text-white/75 hover:bg-white/5 hover:text-white"
          >
            Preview live site <ArrowRight className="size-3.5" aria-hidden />
          </a>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {options.map((option) => {
            const selected = current === option.id;
            const growth = option.id === "growth";
            return (
              <article
                key={option.id}
                className={`overflow-hidden rounded-3xl border ${selected ? "border-cyan-200/40 bg-cyan-200/[0.045]" : "border-white/10 bg-black/10"}`}
              >
                <div
                  className={`relative h-48 overflow-hidden p-4 sm:h-56 ${growth ? "bg-gradient-to-br from-[#fffaf1] via-[#fff4e9] to-[#eaf1ff]" : "bg-gradient-to-br from-[#071126] via-[#111b38] to-[#182450]"}`}
                >
                  {growth ? (
                    <>
                      <span className="absolute -right-8 -top-12 size-48 rounded-full bg-orange-300/30 blur-3xl" />
                      <div className="relative flex items-center justify-between">
                        <span className="font-display text-xs font-extrabold text-[#15213a]">
                          MKSANALYTIQ
                        </span>
                        <span className="rounded-full bg-[#f15b28] px-3 py-1 text-[8px] font-bold text-white">
                          CONSULTATION
                        </span>
                      </div>
                      <div className="relative mt-6 grid grid-cols-2 items-center gap-2">
                        <div>
                          <div className="h-3 w-28 rounded bg-[#17213a] sm:w-36" />
                          <div className="mt-2 h-3 w-24 rounded bg-gradient-to-r from-[#e44e21] to-[#f49a3e] sm:w-32" />
                          <div className="mt-4 h-2 w-32 rounded bg-[#718097]/35" />
                          <div className="mt-2 h-2 w-24 rounded bg-[#718097]/25" />
                        </div>
                        <div className="rounded-xl border border-white/80 bg-white/75 p-2 shadow-lg">
                          <div className="rounded-lg bg-[#13253e] p-3">
                            <div className="h-2 w-14 rounded bg-white/30" />
                            <div className="mt-4 flex h-16 items-end gap-1">
                              {[30, 48, 38, 68, 56, 82].map((height, index) => (
                                <span
                                  key={index}
                                  className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-500 to-orange-300"
                                  style={{ height: `${height}%` }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-4 rounded-lg border border-white bg-white/90 px-2 py-1 text-[8px] font-bold text-[#17213a] shadow">
                        AI · Web · Growth
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="absolute -right-4 top-2 size-40 rounded-full bg-blue-400/25 blur-3xl" />
                      <div className="relative flex items-center justify-between">
                        <span className="font-display text-xs font-extrabold text-white">
                          MKSANALYTIQ
                        </span>
                        <span className="rounded-full bg-blue-500 px-3 py-1 text-[8px] font-bold text-white">
                          LET’S TALK
                        </span>
                      </div>
                      <div className="relative mt-7 grid grid-cols-2 items-center gap-2">
                        <div>
                          <div className="h-3 w-28 rounded bg-white sm:w-36" />
                          <div className="mt-2 h-3 w-24 rounded bg-gradient-to-r from-blue-400 to-violet-400 sm:w-32" />
                          <div className="mt-4 h-2 w-32 rounded bg-white/35" />
                          <div className="mt-2 h-2 w-24 rounded bg-white/25" />
                        </div>
                        <div className="relative rounded-xl border border-white/25 bg-[#0a1022] p-3 shadow-lg">
                          <div className="mx-auto grid size-10 place-items-center rounded-xl bg-gradient-to-br from-blue-400 to-violet-400 font-display text-xl font-extrabold text-white">
                            M
                          </div>
                          <div className="mx-auto mt-3 h-2 w-20 rounded bg-white/50" />
                          <div className="mx-auto mt-2 h-2 w-14 rounded bg-white/25" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-5 flex -rotate-6 gap-1">
                        <span className="rounded-lg border border-white/30 bg-white/10 px-2 py-1 text-[8px] font-bold text-blue-100">
                          AI
                        </span>
                        <span className="rounded-lg border border-white/30 bg-white/10 px-2 py-1 text-[8px] font-bold text-blue-100">
                          WEB
                        </span>
                      </div>
                    </>
                  )}
                  {selected ? (
                    <span className="absolute bottom-3 left-4 rounded-full border border-emerald-200/40 bg-emerald-400/15 px-2.5 py-1 text-[9px] font-bold text-emerald-100">
                      LIVE NOW
                    </span>
                  ) : null}
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-bold">{option.name} homepage</h3>
                    {selected ? (
                      <span className="rounded-full bg-emerald-300/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-100">
                        Active
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 min-h-12 text-xs leading-relaxed text-white/50">
                    {option.description}
                  </p>
                  {canManage ? (
                    <button
                      type="button"
                      disabled={selected || working}
                      onClick={() => onSelect(option.id)}
                      className={`mt-4 inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${growth ? "bg-gradient-to-r from-[#f15b28] to-[#fa8742] text-white shadow-[0_8px_20px_rgba(241,91,40,0.18)] hover:brightness-110" : "border border-white/20 text-white/80 hover:bg-white/5"}`}
                    >
                      {working && !selected
                        ? "Saving…"
                        : selected
                          ? "Currently live"
                          : option.button}
                      <ArrowRight className="size-3.5" aria-hidden />
                    </button>
                  ) : (
                    <p className="mt-4 rounded-xl border border-amber-200/15 bg-amber-200/[0.05] p-3 text-xs text-amber-100/75">
                      Only workspace owners and admins can change the public homepage.
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-5 text-[11px] leading-relaxed text-white/40">
          This choice is stored with the website settings, so visitors see the same active design
          across devices. It does not change your inner pages.
        </p>
      </section>
    </div>
  );
}
