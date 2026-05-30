import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/project-detail-page";
import { createMetadata } from "@/lib/metadata";
import { getProject, projects, text } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return createMetadata({
      locale: "en",
      title: "Project not found",
      description: "This project record could not be found.",
      path: `/projects/${slug}`,
      noIndex: true
    });
  }

  return createMetadata({
    locale: "en",
    title: project.title,
    description: text(project.summary, "en"),
    path: `/projects/${project.slug}`
  });
}

export default async function Page({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage locale="en" project={project} />;
}
