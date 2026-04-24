import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ReviewsSection from "@/components/ReviewsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getLocation, getAllLocationSlugs, getRelatedLocations } from "@/lib/data/locations";
import { services } from "@/lib/data/services";
import { BUSINESS } from "@/lib/utils";
import { serviceSchema, faqSchema } from "@/lib/seo";

interface Props {
  params: { city: string };
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getLocation(params.city);
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `${BUSINESS.siteUrl}/locations/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${BUSINESS.siteUrl}/locations/${location.slug}`,
    },
  };
}

export default function LocationPage({ params }: Props) {
  const location = getLocation(params.city);
  if (!location) notFound();

  const relatedLocations = getRelatedLocations(location.relatedCities);

  const localServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: BUSINESS.name,
    url: `${BUSINESS.siteUrl}/locations/${location.slug}`,
    telephone: BUSINESS.phone,
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.county,
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.county,
      postalCode: BUSINESS.address.postcode,
      addressCountry: "GB",
    },
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

  const allFAQs = [
    ...location.localFAQs,
    {
      question: `Do you offer 24/7 locksmith services in ${location.name}?`,
      answer: `Yes — Key 2 BHP operates 24 hours a day, 7 days a week in ${location.name} and across Greater Manchester, including bank holidays.`,
    },
    {
      question: `Can you replace car keys in ${location.name} on the same day?`,
      answer: `In most cases yes. We stock a wide range of key blanks and carry our programming equipment with us at all times. Same-day service is available across ${location.name}.`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFAQs)) }}
      />

      <Breadcrumb
        items={[
          { label: "Locations", href: "/locations" },
          { label: location.name },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background border-b border-border">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="container relative py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>24/7 Emergency Locksmith Available in {location.name}</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
              {location.h1}
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-2xl">
              {location.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="xl" className="font-bold shadow-lg shadow-accent/20">
                <a href={`tel:${BUSINESS.phone}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call {BUSINESS.phoneDisplay}
                </a>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-green-600 text-green-400 hover:bg-green-950">
                <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp for Help
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this location */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Auto Locksmith Services in {location.name}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${location.slug}/${service.slug}`}
                      className="group flex gap-3 p-4 rounded-lg bg-surface-2 border border-border hover:border-accent/50 transition-all"
                    >
                      <span className="text-2xl shrink-0">{service.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors text-sm">
                          {service.name} in {location.name}
                        </p>
                        <p className="text-xs text-foreground-muted mt-0.5 line-clamp-2">
                          {service.tagline}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Area coverage details */}
              {location.landmarks.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Areas Covered in {location.name}
                  </h2>
                  <p className="text-foreground-muted text-sm mb-4">
                    Our mobile locksmith covers the following areas within {location.name}:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {location.landmarks.map((lm) => (
                      <span
                        key={lm}
                        className="flex items-center gap-1.5 text-sm text-foreground-muted bg-surface-2 border border-border rounded-full px-3 py-1"
                      >
                        <MapPin className="h-3 w-3 text-accent" />
                        {lm}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Nearby areas */}
              {relatedLocations.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Nearby Areas We Cover</h2>
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
                    {relatedLocations.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/locations/${loc.slug}`}
                        className="flex items-center gap-2 p-3 rounded-lg bg-surface-2 border border-border hover:border-accent/50 text-sm font-medium text-foreground hover:text-accent transition-all group"
                      >
                        <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Why us */}
              <div className="rounded-lg border border-border bg-surface-2 p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Why Choose Key 2 BHP in {location.name}?
                </h3>
                <ul className="space-y-3">
                  {[
                    "24/7 emergency response",
                    "Fast arrival — typically 30–60 mins",
                    "Non-destructive entry",
                    "All makes & models",
                    "5.0 star rated service",
                    "Transparent fixed pricing",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-foreground-muted">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact card */}
              <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Need a Locksmith in {location.name}?
                </h3>
                <p className="text-sm text-foreground-muted mb-4">
                  Call or WhatsApp now. We're available around the clock.
                </p>
                <div className="space-y-2">
                  <Button asChild className="w-full" size="lg">
                    <a href={`tel:${BUSINESS.phone}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      {BUSINESS.phoneDisplay}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-green-600 text-green-400 hover:bg-green-950"
                    size="lg"
                  >
                    <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
                <address className="not-italic mt-4 text-xs text-foreground-muted space-y-1">
                  <p>{BUSINESS.name}</p>
                  <p>{BUSINESS.address.full}</p>
                </address>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={allFAQs}
        title={`${location.name} Locksmith FAQs`}
        subtitle={`Common questions about our auto locksmith service in ${location.name}.`}
      />

      <ReviewsSection limit={3} />

      <CTASection
        headline={`Emergency Locksmith in ${location.name}?`}
        subtext={`Key 2 BHP is available 24/7 across ${location.name} and Greater Manchester. Call now for an immediate response.`}
      />
    </>
  );
}
