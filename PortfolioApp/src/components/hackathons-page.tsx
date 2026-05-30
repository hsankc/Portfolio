import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Locale } from "@/types/content";
import { dictionary, routeFor } from "@/lib/i18n";
import { hackathons, text } from "@/lib/content";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export function HackathonsPage({ locale }: { locale: Locale }) {
  const copy = dictionary[locale];

  return (
    <AppShell locale={locale}>
      <main>
        <PageHeader locale={locale} eyebrow="Timeline" title={copy.pages.hackathonsTitle} lead={copy.pages.hackathonsLead} />
        <section className="mx-auto w-full max-w-5xl px-5 pb-16 sm:px-8">
          <div className="relative border-l border-slate-200 pl-6 dark:border-white/10">
            {hackathons.map((event, index) => (
              <Reveal key={`${event.title}-${event.project}`} delay={index * 0.04}>
                <article className="relative mb-6 rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-slate-950/70">
                  <span className="absolute -left-[33px] top-6 h-4 w-4 rounded-full border-4 border-white bg-blue-600 dark:border-slate-950 dark:bg-cyan-300" />
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-black text-blue-600 dark:text-cyan-200">{event.date}</p>
                      <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">{event.title}</h2>
                      <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </p>
                    </div>
                    {event.outcome ? (
                      <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-black text-amber-800 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-200">
                        {event.outcome}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-base font-black text-slate-900 dark:text-white">{event.project}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{text(event.summary, locale)}</p>
                  {event.projectSlug ? (
                    <Link
                      href={routeFor(locale, `/projects/${event.projectSlug}`)}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-600 hover:text-blue-800 dark:text-cyan-200 dark:hover:text-white"
                    >
                      {dictionary[locale].actions.details}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </AppShell>
  );
}
