import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import type { Locale, Project } from "@/types/content";
import { dictionary, routeFor } from "@/lib/i18n";
import { text } from "@/lib/content";
import { StatusPill } from "@/components/status-pill";

const accentStyles = {
  blue: "from-blue/18 to-transparent border-blue/25",
  cyan: "from-cyan/18 to-transparent border-cyan/25",
  teal: "from-teal/18 to-transparent border-teal/25",
  amber: "from-amber/20 to-transparent border-amber/25",
  coral: "from-coral/16 to-transparent border-coral/25"
};

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  compact?: boolean;
};

export function ProjectCard({ project, locale, compact = false }: ProjectCardProps) {
  const copy = dictionary[locale];

  return (
    <article
      className={`group relative overflow-hidden rounded-lg border bg-white/84 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-glow dark:bg-slate-950/70 ${accentStyles[project.accent]}`}
    >
      <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${accentStyles[project.accent]} opacity-80`} />
      <div className="relative">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.status.slice(0, compact ? 2 : 4).map((status) => (
            <StatusPill key={status} status={status} />
          ))}
        </div>
        <p className="text-sm font-bold text-slate-500 dark:text-slate-400">{project.category}</p>
        <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{project.title}</h2>
        <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600 dark:text-slate-300">{text(project.summary, locale)}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, compact ? 3 : 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={routeFor(locale, `/projects/${project.slug}`)}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
          >
            {copy.actions.details}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900 dark:text-teal-200 dark:hover:text-white"
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
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-200"
            >
              <Github className="h-4 w-4" />
              {copy.actions.source}
            </a>
          ) : null}
          {project.versions?.length ? (
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
              v1 + v2
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
