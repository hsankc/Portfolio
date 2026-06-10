import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import type { Locale } from "@/types/content";
import { dictionary } from "@/lib/i18n";
import { galleryItems, text } from "@/lib/content";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

const accentBorders = {
  blue: "border-blue-300/70 dark:border-blue-300/20",
  cyan: "border-cyan-300/70 dark:border-cyan-300/20",
  teal: "border-teal-300/70 dark:border-teal-300/20",
  amber: "border-amber-300/70 dark:border-amber-300/20",
  coral: "border-rose-300/70 dark:border-rose-300/20"
};

export function GalleryPage({ locale }: { locale: Locale }) {
  const copy = dictionary[locale];

  return (
    <AppShell locale={locale}>
      <main>
        <PageHeader
          locale={locale}
          eyebrow={locale === "tr" ? "Saha Notları" : "Field Notes"}
          title={copy.pages.galleryTitle}
          lead={copy.pages.galleryLead}
        />

        <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 pb-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.035}>
              <article
                className={`group overflow-hidden rounded-lg border ${accentBorders[item.accent]} bg-white/82 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/70`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="scale-110 object-cover opacity-30 blur-xl transition duration-500 group-hover:scale-125"
                  />
                  <Image
                    src={item.image}
                    alt={text(item.alt, locale)}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority={index < 2}
                    className="object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="space-y-3 p-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      {text(item.event, locale)}
                    </p>
                    <h2 className="mt-1 text-xl font-black text-slate-950 dark:text-white">{text(item.title, locale)}</h2>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4" />
                      {item.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </section>
      </main>
    </AppShell>
  );
}
