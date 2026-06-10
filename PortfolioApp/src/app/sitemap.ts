import type { MetadataRoute } from "next";
import { projects, site } from "@/lib/content";
import { routeFor } from "@/lib/i18n";

const staticPaths = ["/", "/projects", "/hackathons", "/cards", "/gallery", "/proof", "/writing", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = staticPaths.flatMap((path) => [
    {
      url: `${site.domain}${routeFor("tr", path)}`,
      lastModified: new Date()
    },
    {
      url: `${site.domain}${routeFor("en", path)}`,
      lastModified: new Date()
    }
  ]);

  const projectUrls = projects.flatMap((project) => [
    {
      url: `${site.domain}${routeFor("tr", `/projects/${project.slug}`)}`,
      lastModified: new Date()
    },
    {
      url: `${site.domain}${routeFor("en", `/projects/${project.slug}`)}`,
      lastModified: new Date()
    }
  ]);

  return [...urls, ...projectUrls];
}
