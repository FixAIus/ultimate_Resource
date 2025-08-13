import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";
  const routes: MetadataRoute.Sitemap = ["", "/resources/templates", "/resources/checklists"].map(
    (path): MetadataRoute.Sitemap[number] => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.6,
    })
  );
  return routes;
}


