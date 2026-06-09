import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, CalendarDays, Github, Instagram, Linkedin, Mail, MapPin, RadioTower, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import type { Locale } from "@/types/content";
import { dictionary, routeFor } from "@/lib/i18n";
import { featuredProjects, hackathons, leadershipProofs, site, stats, text, skills } from "@/lib/content";
import { AppShell } from "@/components/app-shell";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = dictionary[locale];

  return (
    <AppShell locale={locale}>
      <main>
        <section className="mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm dark:border-cyan-300/20 dark:bg-slate-950/70 dark:text-cyan-200">
                <Sparkles className="h-4 w-4" />
                {copy.home.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.97] text-slate-950 sm:text-7xl lg:text-8xl dark:text-white">
                {copy.home.title}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 sm:text-xl dark:text-slate-300">
                {copy.home.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={routeFor(locale, "/projects")}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
                >
                  {copy.actions.viewProjects}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href={routeFor(locale, "/contact")}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-black text-slate-800 transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-700 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-100 dark:hover:border-cyan-300 dark:hover:text-cyan-200"
                >
                  {copy.actions.contact}
                  <Mail className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="relative">
            <div className="relative mx-auto w-full max-w-[390px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-soft dark:border-white/10 dark:bg-slate-950 transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900">
                <Image
                  src={site.profileImage}
                  alt="Hasan Kaşıkcı"
                  fill
                  priority
                  sizes="(max-width: 768px) 88vw, 370px"
                  className="object-cover transition duration-500 hover:scale-103"
                />
              </div>
              <div className="mt-4 px-2 pb-2">
                <h3 className="text-xl font-black text-slate-950 dark:text-white">Hasan Kaşıkcı</h3>
                <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">
                  {locale === "tr" ? "Bilgisayar Mühendisliği Öğrencisi · ÇOMÜ" : "Computer Engineering Student · ÇOMÜ"}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-black text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    {locale === "tr" ? "AI Geliştirici" : "AI Builder"}
                  </span>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-[11px] font-black text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
                    Web3
                  </span>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-black text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                    {locale === "tr" ? "İHA Pilotu" : "UAV Pilot"}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal delay={index * 0.04} key={stat.label.tr}>
                <div className="rounded-lg border border-slate-200 bg-white/76 p-5 shadow-sm dark:border-white/10 dark:bg-slate-950/68">
                  <p className="text-4xl font-black text-slate-950 dark:text-white">{stat.value}</p>
                  <p className="mt-1 text-sm font-bold text-slate-500 dark:text-slate-400">{text(stat.label, locale)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Startups & Ventures Section */}
        <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Startups & Ventures */}
            <Reveal className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-slate-950/50">
              <div>
                <div className="flex items-center gap-2 text-teal-600 dark:text-cyan-200">
                  <Rocket className="h-5 w-5" />
                  <h2 className="text-xl font-black tracking-tight">{copy.home.venturesTitle}</h2>
                </div>
                
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {/* InterKey Venture */}
                  <div className="group relative rounded-xl border border-slate-100 bg-slate-50/50 p-5 transition hover:border-blue-200 hover:bg-white dark:border-white/5 dark:bg-slate-900/30 dark:hover:border-blue-500/30 dark:hover:bg-slate-900/60">
                    <div className="flex items-start gap-4">
                      <div className="relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-white">
                        <Image
                          src="/images/logos/interkey-logo.png"
                          alt="InterKey logo"
                          fill
                          sizes="64px"
                          className="object-contain p-1.5"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                          {locale === "tr" ? "Teknopark Ön Kuluçka" : "Teknopark Pre-Incubation"}
                        </span>
                        <h3 className="mt-2 text-lg font-black text-slate-950 dark:text-white">InterKey</h3>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400">Çanakkale</span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">
                      {copy.home.interkeyDesc}
                    </p>
                  </div>

                  {/* ilion7 Venture */}
                  <div className="group relative rounded-xl border border-slate-100 bg-slate-50/50 p-5 transition hover:border-purple-200 hover:bg-white dark:border-white/5 dark:bg-slate-900/30 dark:hover:border-purple-500/30 dark:hover:bg-slate-900/60">
                    <div className="flex items-start gap-4">
                      <div className="relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-white">
                        <Image
                          src="/images/logos/ilion7-logo.png"
                          alt="ilion7.web logo"
                          fill
                          sizes="64px"
                          className="object-contain p-1.5"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-[10px] font-bold text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                          Web Studio / Venture
                        </span>
                        <h3 className="mt-2 text-lg font-black text-slate-950 dark:text-white">ilion7.web</h3>
                      </div>
                      <a 
                        href={site.instagramVenture} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                      >
                        <Instagram className="h-4 w-4" />
                        Instagram
                      </a>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">
                      {copy.home.ilionDesc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-200">{copy.home.featured}</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl dark:text-white">
                {locale === "tr" ? "Öne çıkan projeler." : "Featured projects."}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">{copy.home.proofLine}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Reveal delay={index * 0.05} key={project.slug}>
                <ProjectCard project={project} locale={locale} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative border-y border-slate-200 bg-white/42 py-10 dark:border-white/5 dark:bg-slate-950/20">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-cyan-200">
                  <RadioTower className="h-4 w-4" />
                  {copy.home.hackathonStrip}
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl dark:text-white">
                  {locale === "tr" ? "Kısa yarışma yol haritası." : "Compact competition roadmap."}
                </h2>
              </div>
              <Link
                href={routeFor(locale, "/hackathons")}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-black text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-slate-950/70 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-200"
              >
                {locale === "tr" ? "Tüm rotayı aç" : "Open full route"}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative overflow-x-auto pb-2">
              <div className="absolute left-6 right-6 top-6 hidden border-t border-dashed border-slate-300 dark:border-white/20 md:block" />
              <div className="relative grid min-w-[920px] grid-cols-8 gap-3 md:min-w-0">
                {hackathons.map((event, index) => {
                  const hasOutcome = Boolean(event.outcome);
                  return (
                    <Reveal key={`${event.title}-${event.project}`} delay={index * 0.035}>
                      <Link
                        href={routeFor(locale, "/hackathons")}
                        className="group block h-full rounded-lg border border-slate-200 bg-white/86 p-3 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-glow dark:border-white/10 dark:bg-slate-950/72 dark:hover:border-cyan-300"
                      >
                        <span className={`mb-3 grid h-8 w-8 place-items-center rounded-full border bg-white shadow-sm dark:bg-slate-950 ${
                          hasOutcome ? "border-amber-300 text-amber-600 dark:border-amber-300/40 dark:text-amber-200" : "border-blue-200 text-blue-600 dark:border-cyan-300/30 dark:text-cyan-200"
                        }`}>
                          {hasOutcome ? <Award className="h-4 w-4" /> : <span className="h-2.5 w-2.5 rounded-full bg-current" />}
                        </span>
                        <h3 className="min-h-12 text-sm font-black leading-5 text-slate-950 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-200">
                          {event.title}
                        </h3>
                        <div className="mt-3 space-y-1.5 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                          <p className="inline-flex items-center gap-1.5">
                            <CalendarDays className="h-3.5 w-3.5" />
                            {event.date}
                          </p>
                          <p className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            {event.location}
                          </p>
                        </div>
                        {hasOutcome ? (
                          <span className="mt-3 inline-flex rounded-full bg-amber-50 px-2 py-1 text-[10px] font-black uppercase tracking-wide text-amber-800 dark:bg-amber-400/10 dark:text-amber-200">
                            {event.outcome}
                          </span>
                        ) : null}
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-200">{copy.home.leadership}</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl dark:text-white">
                {locale === "tr" ? "23 ayrı belge, tek bir liderlik hikayesi." : "23 documents, one leadership story."}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                {locale === "tr"
                  ? "ÇOMÜ Havacılık Kulübü için etkinlik planlama, koordinasyon ve topluluk büyütme tarafında oluşan kanıtlar tek koleksiyonda tutuluyor."
                  : "Proof from event planning, coordination, and community growth for COMU Aviation Club is grouped as one focused collection."}
              </p>
              <Link
                href={routeFor(locale, "/proof")}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-amber-600 dark:bg-white dark:text-slate-950 dark:hover:bg-amber-200"
              >
                {locale === "tr" ? "Proof koleksiyonunu gör" : "View proof collection"}
                <ShieldCheck className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {leadershipProofs.slice(0, 8).map((proof, index) => (
              <Reveal delay={index * 0.03} key={proof.title.tr}>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-950">
                  {proof.thumb ? (
                    <Image
                      src={proof.thumb}
                      alt={text(proof.title, locale)}
                      width={360}
                      height={220}
                      className="aspect-[16/10] w-full object-cover"
                    />
                  ) : null}
                  <div className="p-3">
                    <p className="line-clamp-2 text-xs font-bold text-slate-700 dark:text-slate-200">{text(proof.title, locale)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Animated & Colorful Skills Badges Section at the Bottom */}
        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 border-t border-slate-100 dark:border-white/5">
          <div className="mb-10 text-center">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-200">{copy.home.skillsTitle}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl dark:text-white">
                {locale === "tr" ? "Teknolojik Ekosistem & Araçlar" : "Tech Stack & Tooling"}
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup, groupIdx) => {
              // Curated color themes for categories
              const colors = [
                "border-blue-100 bg-blue-50/30 text-blue-700 dark:border-blue-900/30 dark:bg-blue-950/20 dark:text-blue-300 hover:border-blue-400",
                "border-emerald-100 bg-emerald-50/30 text-emerald-700 dark:border-emerald-900/30 dark:bg-emerald-950/20 dark:text-emerald-300 hover:border-emerald-400",
                "border-purple-100 bg-purple-50/30 text-purple-700 dark:border-purple-900/30 dark:bg-purple-950/20 dark:text-purple-300 hover:border-purple-400",
                "border-amber-100 bg-amber-50/30 text-amber-700 dark:border-amber-900/30 dark:bg-amber-950/20 dark:text-amber-300 hover:border-amber-400",
                "border-cyan-100 bg-cyan-50/30 text-cyan-700 dark:border-cyan-900/30 dark:bg-cyan-950/20 dark:text-cyan-300 hover:border-cyan-400",
                "border-rose-100 bg-rose-50/30 text-rose-700 dark:border-rose-900/30 dark:bg-rose-950/20 dark:text-rose-300 hover:border-rose-400"
              ];
              const theme = colors[groupIdx % colors.length];

              return (
                <Reveal delay={groupIdx * 0.05} key={skillGroup.category.tr}>
                  <div className="rounded-2xl border border-slate-200/60 bg-white/50 p-5 shadow-soft backdrop-blur-sm dark:border-white/5 dark:bg-slate-950/40 hover:shadow-glow transition-all duration-300 h-full">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                      {text(skillGroup.category, locale)}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skillGroup.items.map((item) => (
                        <span 
                          key={item} 
                          className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-[11px] font-bold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${theme}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-200 bg-slate-950 p-5 text-white shadow-soft dark:border-white/10">
            <p className="max-w-2xl text-sm leading-7 text-slate-200">
              {locale === "tr"
                ? "GitHub, LinkedIn ve e-posta üzerinden doğrudan ulaşabilirsin. Telefon bilgisi public sitede yayınlanmaz."
                : "You can reach out through GitHub, LinkedIn, or email. Phone details are not published on the public site."}
            </p>
            <div className="flex gap-2">
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full bg-white/10 p-3 hover:bg-white/20">
                <Github className="h-5 w-5" />
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full bg-white/10 p-3 hover:bg-white/20">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email" className="rounded-full bg-white/10 p-3 hover:bg-white/20">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
