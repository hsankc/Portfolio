import { NotebookPen } from "lucide-react";
import type { Locale } from "@/types/content";
import { dictionary } from "@/lib/i18n";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

const drafts = {
  tr: ["Hackathon sonrası proje notları", "NeuralAir v1’den v2’ye geçiş", "Kulüp liderliğinde organizasyon sistemi"],
  en: ["Post-hackathon project notes", "From NeuralAir v1 to v2", "Event systems in community leadership"]
};

export function WritingPage({ locale }: { locale: Locale }) {
  const copy = dictionary[locale];

  return (
    <AppShell locale={locale}>
      <main>
        <PageHeader locale={locale} eyebrow="Writing" title={copy.pages.writingTitle} lead={copy.pages.writingLead} />
        <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 pb-16 sm:px-8 md:grid-cols-3">
          {drafts[locale].map((draft, index) => (
            <Reveal key={draft} delay={index * 0.06}>
              <article className="rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-white/10 dark:bg-slate-950/70">
                <NotebookPen className="h-6 w-6 text-blue-600 dark:text-cyan-200" />
                <h2 className="mt-5 text-xl font-black text-slate-950 dark:text-white">{draft}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {locale === "tr"
                    ? "Bu başlık yayın akışına hazırlandı; içerik eklendiğinde aynı tasarım içinde açılacak."
                    : "This title is prepared for the publishing flow and will open in the same design once content is added."}
                </p>
              </article>
            </Reveal>
          ))}
        </section>
      </main>
    </AppShell>
  );
}
