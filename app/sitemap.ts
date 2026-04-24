import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/utils";
import { getAllServiceSlugs } from "@/lib/data/services";
import { getAllLocationSlugs } from "@/lib/data/locations";
import { getAllCombos } from "@/lib/data/combos";
import { getAllBlogSlugs } from "@/lib/data/blog-topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS.siteUrl;
  const now = new Date();

  // ─── Static pages ─────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];

  // ─── /services/[slug] ─────────────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // ─── /locations/[slug] ────────────────────────────────────────────────────
  const locationPages: MetadataRoute.Sitemap = getAllLocationSlugs().map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // ─── /[location]/[service] — 48 programmatic combo pages ─────────────────
  const comboPages: MetadataRoute.Sitemap = getAllCombos().map(({ location, service }) => ({
    url: `${baseUrl}/${location}/${service}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // ─── /blog/[slug] — static posts ─────────────────────────────────────────
  const staticBlogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/lost-car-keys-manchester`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/locked-keys-in-car-what-to-do`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ];

  // ─── /blog/[slug] — dynamic blog posts (30 topics) ───────────────────────
  const dynamicBlogPosts: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...comboPages,
    ...staticBlogPosts,
    ...dynamicBlogPosts,
  ];
}
