import type { Metadata } from "next";
import { ProjectsPage } from "@/components/projects-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "tr",
  title: "Projeler",
  description: "Hasan Kaşıkcı'nın AI, Web3, web, müşteri ve akademik projeleri.",
  path: "/projects"
});

export default function Page() {
  return <ProjectsPage locale="tr" />;
}
