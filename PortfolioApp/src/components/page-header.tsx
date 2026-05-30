import type { Locale } from "@/types/content";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  lead: string;
  locale: Locale;
};

export function PageHeader({ eyebrow, title, lead, locale }: PageHeaderProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
      {eyebrow ? (
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-200">{eyebrow}</p>
      ) : null}
      <h1 className="max-w-4xl text-4xl font-black leading-[1.02] text-slate-950 sm:text-6xl dark:text-white">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">{lead}</p>
      <p className="sr-only">{locale === "tr" ? "Türkçe sayfa" : "English page"}</p>
    </section>
  );
}
