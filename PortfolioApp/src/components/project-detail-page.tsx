import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import type { Locale, Project } from "@/types/content";
import { dictionary, routeFor } from "@/lib/i18n";
import { text } from "@/lib/content";
import { AppShell } from "@/components/app-shell";
import { Reveal } from "@/components/reveal";
import { StatusPill } from "@/components/status-pill";

type ProjectDetailPageProps = {
  locale: Locale;
  project: Project;
};

export function ProjectDetailPage({ locale, project }: ProjectDetailPageProps) {
  const copy = dictionary[locale];
  const detailBlocks = [
    { title: locale === "tr" ? "Problem" : "Problem", body: text(project.problem, locale) },
    { title: locale === "tr" ? "Çözüm" : "Solution", body: text(project.solution, locale) },
    { title: locale === "tr" ? "Sonuç" : "Outcome", body: text(project.impact, locale) }
  ];

  return (
    <AppShell locale={locale}>
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
        <Link
          href={routeFor(locale, "/projects")}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-200"
        >
          <ArrowLeft className="h-4 w-4" />
          {copy.actions.backProjects}
        </Link>
        <section className="grid gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.status.map((status) => (
                  <StatusPill key={status} status={status} />
                ))}
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-200">{project.category}</p>
              <h1 className="mt-4 text-5xl font-black leading-[1] text-slate-950 sm:text-7xl dark:text-white">{project.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600 dark:text-slate-300">{text(project.summary, locale)}</p>
          </Reveal>
          {project.versions?.length ? (
            <Reveal delay={0.14}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {project.versions.map((version) => (
                  <a
                    key={version.label}
                    href={version.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-200 bg-white/82 p-4 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-glow dark:border-white/10 dark:bg-slate-950/70 dark:hover:border-cyan-300"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-xl font-black text-slate-950 dark:text-white">NeuralAir {version.label}</h2>
                      <ArrowUpRight className="h-5 w-5 text-blue-600 dark:text-cyan-200" />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text(version.note, locale)}</p>
                    <p className="mt-3 break-all text-xs font-bold text-blue-600 dark:text-cyan-200">{version.url}</p>
                  </a>
                ))}
              </div>
            </Reveal>
          ) : null}
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
                  >
                    {copy.actions.viewLive}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-black text-slate-800 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-slate-950/70 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-200"
                  >
                    <Github className="h-4 w-4" />
                    {copy.actions.source}
                  </a>
                ) : null}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <aside className="rounded-lg border border-slate-200 bg-white/82 p-5 shadow-soft dark:border-white/10 dark:bg-slate-950/70">
              {project.media ? (
                <Image
                  src={project.media.src}
                  alt={project.media.alt}
                  width={760}
                  height={480}
                  className="mb-5 aspect-[16/10] w-full rounded-md object-cover"
                />
              ) : (
                <div className="mb-5 grid aspect-[16/10] place-items-center rounded-md border border-slate-200 bg-gradient-to-br from-blue/10 via-cyan/10 to-amber/10 dark:border-white/10">
                  <span className="text-5xl font-black text-slate-900 dark:text-white">{project.title.slice(0, 2).toUpperCase()}</span>
                </div>
              )}
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-black text-slate-950 dark:text-white">{locale === "tr" ? "Rol" : "Role"}</dt>
                  <dd className="mt-1 text-slate-600 dark:text-slate-300">{text(project.role, locale)}</dd>
                </div>
                {project.eventName ? (
                  <div>
                    <dt className="font-black text-slate-950 dark:text-white">{locale === "tr" ? "Etkinlik" : "Event"}</dt>
                    <dd className="mt-1 text-slate-600 dark:text-slate-300">{project.eventName}</dd>
                  </div>
                ) : null}
                {project.award ? (
                  <div>
                    <dt className="font-black text-slate-950 dark:text-white">{locale === "tr" ? "Ödül" : "Award"}</dt>
                    <dd className="mt-1 text-slate-600 dark:text-slate-300">{project.award}</dd>
                  </div>
                ) : null}
              </dl>
            </aside>
          </Reveal>
        </section>
        <section className="grid gap-5 md:grid-cols-3">
          {detailBlocks.map((block, index) => (
            <Reveal delay={index * 0.04} key={block.title}>
              <article className="h-full rounded-lg border border-slate-200 bg-white/78 p-5 shadow-sm dark:border-white/10 dark:bg-slate-950/68">
                <h2 className="text-xl font-black text-slate-950 dark:text-white">{block.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{block.body}</p>
              </article>
            </Reveal>
          ))}
        </section>
      </main>
    </AppShell>
  );
}
