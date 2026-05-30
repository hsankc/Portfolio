import type { Locale } from "@/types/content";
import { dictionary } from "@/lib/i18n";
import { projects } from "@/lib/content";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export function ProjectsPage({ locale }: { locale: Locale }) {
  const copy = dictionary[locale];
  const ordered = [...projects].sort((a, b) => {
    const aRank = a.featuredRank ?? 99;
    const bRank = b.featuredRank ?? 99;
    return aRank - bRank || a.title.localeCompare(b.title);
  });

  return (
    <AppShell locale={locale}>
      <main>
        <PageHeader locale={locale} eyebrow="Projects" title={copy.pages.projectsTitle} lead={copy.pages.projectsLead} />
        <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 pb-16 sm:px-8 md:grid-cols-2 xl:grid-cols-3">
          {ordered.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.025}>
              <ProjectCard project={project} locale={locale} compact />
            </Reveal>
          ))}
        </section>
      </main>
    </AppShell>
  );
}
