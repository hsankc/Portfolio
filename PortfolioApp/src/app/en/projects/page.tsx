import type { Metadata } from "next";
import { ProjectsPage } from "@/components/projects-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "en",
  title: "Projects",
  description: "AI, Web3, web, client, and academic projects by Hasan Kaşıkcı.",
  path: "/projects"
});

export default function Page() {
  return <ProjectsPage locale="en" />;
}
