import { projectsData, caseStudiesData } from "@/data/portfolioData";

export default function sitemap() {
  const baseUrl = "https://ushaniperera.com"; // Fallback production URL

  // Static routes
  const staticRoutes = [
    "",
    "/projects",
    "/case-studies",
    "/certifications",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic projects routes
  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Dynamic case studies routes
  const caseStudiesRoutes = caseStudiesData.map((study) => ({
    url: `${baseUrl}/case-studies/${study.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...caseStudiesRoutes];
}
