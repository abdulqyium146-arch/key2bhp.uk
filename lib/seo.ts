import type { Metadata } from "next";
import { BUSINESS } from "./utils";

// ─── Metadata builder ─────────────────────────────────────────────────────────
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = `${BUSINESS.siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      locale: "en_GB",
      type,
      publishedTime,
      images: [
        {
          url: ogImage ?? `${BUSINESS.siteUrl}/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage ?? `${BUSINESS.siteUrl}/og-default.jpg`],
    },
  };
}

// ─── LocalBusiness (Locksmith) ────────────────────────────────────────────────
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": `${BUSINESS.siteUrl}/#locksmith`,
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone,
    priceRange: "££",
    image: `${BUSINESS.siteUrl}/og-default.jpg`,
    logo: `${BUSINESS.siteUrl}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.county,
      postalCode: BUSINESS.address.postcode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.toString(),
      reviewCount: BUSINESS.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "City", name: "Manchester" },
      { "@type": "City", name: "Denton" },
      { "@type": "City", name: "Stockport" },
      { "@type": "AdministrativeArea", name: "Tameside" },
      { "@type": "City", name: "Hyde" },
      { "@type": "City", name: "Stretford" },
      { "@type": "City", name: "Ashton-under-Lyne" },
      { "@type": "City", name: "Salford" },
    ],
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    sameAs: [
      "https://key2bhpautolocksmith.com/",
      "https://www.facebook.com/people/KEY-2-BHP-Auto-Locksmith/61556749298238/",
    ],
  };
}

// ─── Service schema ───────────────────────────────────────────────────────────
export function serviceSchema(
  name: string,
  description: string,
  url: string,
  locationName?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: "Auto Locksmith Service",
    provider: {
      "@type": "Locksmith",
      "@id": `${BUSINESS.siteUrl}/#locksmith`,
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
    },
    areaServed: locationName
      ? { "@type": "City", name: locationName }
      : { "@type": "AdministrativeArea", name: "Greater Manchester" },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: BUSINESS.phone,
      serviceUrl: url,
      availableLanguage: "English",
    },
  };
}

// ─── FAQ schema ───────────────────────────────────────────────────────────────
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Breadcrumb schema ────────────────────────────────────────────────────────
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Article schema ───────────────────────────────────────────────────────────
export function articleSchema({
  title,
  description,
  url,
  publishDate,
  modifiedDate,
}: {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  modifiedDate?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished: publishDate,
    dateModified: modifiedDate ?? publishDate,
    author: {
      "@type": "Organization",
      "@id": `${BUSINESS.siteUrl}/#locksmith`,
      name: BUSINESS.name,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
    },
    mainEntityOfPage: url,
  };
}

// ─── Review schema ────────────────────────────────────────────────────────────
export function reviewSchema(reviews: {
  author: string;
  rating: number;
  date: string;
  text: string;
}[]) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    datePublished: r.date,
    reviewBody: r.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    itemReviewed: {
      "@type": "Locksmith",
      "@id": `${BUSINESS.siteUrl}/#locksmith`,
      name: BUSINESS.name,
    },
  }));
}

// ─── Local Business with area-specific override (for location pages) ──────────
export function localBusinessWithAreaSchema(locationName: string, locationUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: BUSINESS.name,
    url: locationUrl,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.county,
      postalCode: BUSINESS.address.postcode,
      addressCountry: "GB",
    },
    areaServed: { "@type": "City", name: locationName },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "100",
      bestRating: "5",
    },
  };
}
