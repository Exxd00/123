import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bizlaunchxeer.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/go/"]
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
