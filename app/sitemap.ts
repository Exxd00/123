import type { MetadataRoute } from "next";
import { posts, reviews } from "@/lib/content";
import { LOCALES } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bizlaunchxeer.com";

  const staticRoutes = [
    "",
    "/blog",
    "/reviews",
    "/compare",
    "/free-guide",
    "/thank-you",
    "/about",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ];

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const p of staticRoutes) {
      routes.push({
        url: `${siteUrl}/${locale}${p}`,
        lastModified: new Date(),
      });
    }

    for (const p of posts) {
      routes.push({
        url: `${siteUrl}/${locale}/blog/${p.slug}`,
        lastModified: p.date,
      });
    }

    for (const r of reviews) {
      routes.push({
        url: `${siteUrl}/${locale}/review/${r.slug}`,
        lastModified: r.date,
      });
    }
  }

  return routes;
}
