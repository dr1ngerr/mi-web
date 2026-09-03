import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/caseStudies";
import { localLandings, servicePages } from "@/lib/content";

const baseUrl = "https://andreibenedec.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/proyectos", "/sobre-mi", "/contacto", "/mantenimiento"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
    }),
  );

  const services = servicePages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
  }));

  const local = localLandings.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
  }));

  const projects = caseStudies.map((study) => ({
    url: `${baseUrl}/proyectos/${study.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...services, ...local, ...projects];
}
