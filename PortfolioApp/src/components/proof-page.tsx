import Image from "next/image";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import type { Locale } from "@/types/content";
import { dictionary } from "@/lib/i18n";
import { certificateGroups, certificateProofs, leadershipProofs, text } from "@/lib/content";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export function ProofPage({ locale }: { locale: Locale }) {
  const copy = dictionary[locale];

  return (
    <AppShell locale={locale}>
      <main>
        <PageHeader locale={locale} eyebrow={locale === "tr" ? "Sertifikalar" : "Certificates"} title={copy.pages.proofTitle} lead={copy.pages.proofLead} />

        <section className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-200">
                {locale === "tr" ? "Sertifika Galerisi" : "Certificate Gallery"}
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">
                {locale === "tr" ? "Tüm sertifikalar görsel olarak yayında." : "All certificates are published as images."}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              {locale === "tr"
                ? "Sertifikalar güvenli şekilde TC kimlik numarası blurlanmış PNG olarak yayınlanıyor. Kart üzerinden görseli büyük ekranda görüntüleyebilirsin."
                : "Certificates are published as PNGs with national ID numbers blurred for safety. Click the card image to view it full-size."}
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {certificateProofs.map((certificate, index) => (
              <Reveal key={certificate.title.tr} delay={(index % 2) * 0.03}>
                <article className="group flex h-[200px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-glow dark:border-white/10 dark:bg-slate-950">
                  {/* Left: Certificate Image */}
                  <a
                    href={certificate.document}
                    target="_blank"
                    rel="noreferrer"
                    className="relative block w-[180px] shrink-0 overflow-hidden border-r border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-900"
                  >
                    <Image
                      src={certificate.document}
                      alt={text(certificate.title, locale)}
                      width={600}
                      height={800}
                      className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-900">
                        {locale === "tr" ? "Büyüt" : "Zoom"}
                      </span>
                    </span>
                  </a>
                  {/* Right: Certificate Details */}
                  <div className="flex flex-1 flex-col justify-center p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">{certificate.group}</p>
                    <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.12em] text-blue-600 dark:text-cyan-200">{certificate.date}</p>
                    <h3 className="mt-3 text-base font-black leading-tight text-slate-950 dark:text-white">{text(certificate.title, locale)}</h3>
                    <a
                      href={certificate.document}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex w-fit rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white transition-colors hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-200"
                    >
                      {locale === "tr" ? "Görseli yeni sekmede aç" : "Open image in new tab"}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 pb-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          {certificateGroups.map((group, index) => (
            <Reveal key={group.title.tr} delay={index * 0.04}>
              <article className="h-full rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-white/10 dark:bg-slate-950/70">
                <ShieldCheck className="h-6 w-6 text-teal-600 dark:text-teal-200" />
                <h2 className="mt-4 text-xl font-black text-slate-950 dark:text-white">{text(group.title, locale)}</h2>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </section>

        <section className="border-y border-slate-200 bg-white/48 py-12 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-200">
                  Leadership Proof Collection
                </p>
                <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl dark:text-white">ÇOMÜ Havacılık Kulübü</h2>
              </div>
              <div className="flex max-w-xl gap-3 rounded-lg border border-slate-200 bg-white/76 p-4 text-sm leading-7 text-slate-600 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-300">
                <LockKeyhole className="mt-1 h-5 w-5 shrink-0 text-blue-600 dark:text-cyan-200" />
                <p>
                  {locale === "tr"
                    ? "Tam belge dosyaları arşivde tutulur; public sitede yalnızca düşük çözünürlüklü önizleme ve etkinlik adı gösterilir."
                    : "Full document files remain in the archive; the public site only shows low-resolution previews and event names."}
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {leadershipProofs.map((proof, index) => (
                <Reveal key={proof.title.tr} delay={(index % 6) * 0.025}>
                  <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-slate-950">
                    {proof.thumb ? (
                      <Image
                        src={proof.thumb}
                        alt={text(proof.title, locale)}
                        width={480}
                        height={300}
                        className="aspect-[16/10] w-full object-cover"
                      />
                    ) : null}
                    <div className="p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{proof.date}</p>
                      <h3 className="mt-2 text-base font-black text-slate-950 dark:text-white">{text(proof.title, locale)}</h3>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
