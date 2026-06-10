import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Locale } from "@/types/content";
import { dictionary, routeFor } from "@/lib/i18n";
import { getGalleryItems, hackathons, text } from "@/lib/content";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

const accentFrames = {
  blue: "border-blue-300/70 bg-blue-50/70 dark:border-blue-300/20 dark:bg-blue-400/10",
  cyan: "border-cyan-300/70 bg-cyan-50/70 dark:border-cyan-300/20 dark:bg-cyan-400/10",
  teal: "border-teal-300/70 bg-teal-50/70 dark:border-teal-300/20 dark:bg-teal-400/10",
  amber: "border-amber-300/70 bg-amber-50/70 dark:border-amber-300/20 dark:bg-amber-400/10",
  coral: "border-rose-300/70 bg-rose-50/70 dark:border-rose-300/20 dark:bg-rose-400/10"
};

const previewPositionClasses = {
  "top-left": "left-3 top-3",
  "top-right": "right-3 top-3",
  "bottom-left": "bottom-3 left-3",
  "bottom-right": "bottom-3 right-3"
};

const countPositionClasses = {
  "top-left": "left-3 top-[7.5rem] sm:top-[8.5rem]",
  "top-right": "right-3 top-[7.5rem] sm:top-[8.5rem]",
  "bottom-left": "bottom-[6.25rem] left-3 sm:bottom-[7.25rem]",
  "bottom-right": "bottom-[6.25rem] right-3 sm:bottom-[7.25rem]"
};

export function HackathonsPage({ locale }: { locale: Locale }) {
  const copy = dictionary[locale];

  return (
    <AppShell locale={locale}>
      <main>
        <PageHeader locale={locale} eyebrow="Timeline" title={copy.pages.hackathonsTitle} lead={copy.pages.hackathonsLead} />
        <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
          <div className="relative border-l border-slate-200 pl-6 dark:border-white/10">
            {hackathons.map((event, index) => {
              const photos = getGalleryItems(event.gallery);
              const primaryPhoto = photos[0];
              const secondaryPhoto = photos[1];
              const previewPosition = event.galleryPreviewPosition ?? "top-right";
              const galleryHref = routeFor(locale, "/gallery");

              return (
                <Reveal key={`${event.title}-${event.project}`} delay={index * 0.04}>
                  <article className="relative mb-6 rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-slate-950/70">
                    <span className="absolute -left-[33px] top-6 h-4 w-4 rounded-full border-4 border-white bg-blue-600 dark:border-slate-950 dark:bg-cyan-300" />
                    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] lg:items-stretch">
                      <div>
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
                      </div>

                      {primaryPhoto ? (
                        <Link
                          href={galleryHref}
                          className={`group relative block min-h-44 overflow-hidden rounded-md border ${accentFrames[event.accent]} shadow-sm outline-none transition hover:-translate-y-1 hover:shadow-soft focus-visible:ring-2 focus-visible:ring-blue-500 sm:min-h-56 lg:min-h-0 lg:aspect-[16/10]`}
                          aria-label={text(primaryPhoto.alt, locale)}
                        >
                          <Image
                            src={primaryPhoto.image}
                            alt={text(primaryPhoto.alt, locale)}
                            fill
                            sizes="(min-width: 1024px) 340px, (min-width: 640px) 90vw, 90vw"
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/82 to-transparent p-3 text-white">
                            <p className="text-xs font-black">{text(primaryPhoto.title, locale)}</p>
                            <p className="text-[11px] font-semibold text-white/75">{primaryPhoto.location}</p>
                          </div>
                          {secondaryPhoto ? (
                            <div
                              className={`absolute ${previewPositionClasses[previewPosition]} h-20 w-28 overflow-hidden rounded-md border-2 border-white/90 bg-white shadow-soft transition duration-500 group-hover:-translate-y-1 group-hover:rotate-1 sm:h-24 sm:w-32`}
                            >
                              <Image
                                src={secondaryPhoto.image}
                                alt=""
                                fill
                                sizes="128px"
                                className="object-cover"
                              />
                            </div>
                          ) : null}
                          {photos.length > 2 ? (
                            <span className={`absolute ${countPositionClasses[previewPosition]} rounded-full bg-white/94 px-2.5 py-1 text-xs font-black text-slate-950 shadow-sm`}>
                              +{photos.length - 2}
                            </span>
                          ) : null}
                        </Link>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>
      </main>
    </AppShell>
  );
}
