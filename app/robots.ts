import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${BUSINESS.siteUrl}/sitemap.xml`,
  };
}
