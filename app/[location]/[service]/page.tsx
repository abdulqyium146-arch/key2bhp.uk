import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin, Clock } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ReviewsSection from "@/components/ReviewsSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getService, getRelatedServices } from "@/lib/data/services";
import { getLocation } from "@/lib/data/locations";
import { getAllCombos, locationAngles, getComboMeta } from "@/lib/data/combos";
import { anchorVariants } from "@/lib/data/topical-map";
import { BUSINESS } from "@/lib/utils";
import { faqSchema, serviceSchema } from "@/lib/seo";
import type { ServiceSlug, LocationSlug } from "@/lib/data/topical-map";

interface Props {
  params: { location: string; service: string };
}

export async function generateStaticParams() {
  return getAllCombos();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService(params.service);
  const locAngle = locationAngles[params.location as LocationSlug];
  if (!service || !locAngle) return {};

  const { metaTitle, metaDescription } = getComboMeta(
    params.service as ServiceSlug,
    params.location as LocationSlug,
    service.name,
    service.tagline
  );

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `${BUSINESS.siteUrl}/${params.location}/${params.service}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${BUSINESS.siteUrl}/${params.location}/${params.service}`,
    },
  };
}

export default function ComboPage({ params }: Props) {
  const service = getService(params.service);
  const location = getLocation(params.location);
  const locAngle = locationAngles[params.location as LocationSlug];

  if (!service || !locAngle) notFound();

  const { h1, openingParagraph } = getComboMeta(
    params.service as ServiceSlug,
    params.location as LocationSlug,
    service.name,
    service.tagline
  );

  // Merge service FAQs + location-specific FAQs for unique FAQ set
  const combinedFAQs = [
    ...service.faqs.slice(0, 2),
    ...locAngle.specificFAQs,
    ...service.faqs.slice(2),
  ];

  // Related services (exclude current)
  const relatedServices = getRelatedServices(service.relatedServices);

  // Related locations (from locAngle.nearbyAreas — first 3)
  const nearbyLocations = locAngle.nearbyAreas.slice(0, 3);

  // Pick anchor text variant for internal links (cycle through)
  const serviceAnchors = anchorVariants[params.service] ?? [service.name];

  const comboSchema = [
    serviceSchema(
      `${service.name} in ${locAngle.displayName}`,
      `${service.shortDescription} Available in ${locAngle.displayName}, ${locAngle.postcode}.`,
      `${BUSINESS.siteUrl}/${params.location}/${params.service}`
    ),
    faqSchema(combinedFAQs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.siteUrl },
        { "@type": "ListItem", position: 2, name: locAngle.displayName, item: `${BUSINESS.siteUrl}/locations/${params.location}` },
        { "@type": "ListItem", position: 3, name: service.name, item: `${BUSINESS.siteUrl}/${params.location}/${params.service}` },
      ],
    },
  ];

  return (
    <>
      {comboSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Breadcrumb
        items={[
          { label: "Locations", href: "/locations" },
          { label: locAngle.displayName, href: `/locations/${params.location}` },
          { label: service.name },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background border-b border-border">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="container relative py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-4xl" role="img" aria-label={service.name}>{service.icon}</span>
              <Badge variant="secondary" className="text-xs">24/7 Mobile Service</Badge>
              <Badge variant="secondary" className="text-xs">
                <Clock className="h-3 w-3 mr-1" />
                {locAngle.responseTime}
              </Badge>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
              {h1.split(locAngle.displayName)[0]}
              <span className="text-accent">{locAngle.displayName}</span>
              {h1.split(locAngle.displayName)[1]}
            </h1>

            <p className="text-lg text-foreground-muted leading-relaxed mb-6 max-w-2xl">
              {openingParagraph}
            </p>

            <p className="text-base text-foreground-muted leading-relaxed mb-8 max-w-2xl">
              {locAngle.localContext}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="xl" className="font-bold shadow-lg shadow-accent/20">
                <a href={`tel:${BUSINESS.phone}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call {BUSINESS.phoneDisplay}
                </a>
              </Button>
              <Button
                asChild size="xl"
                variant="outline"
                className="border-green-600 text-green-400 hover:bg-green-950"
              >
                <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp for a Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="container py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-3">

          {/* Left: Main body */}
          <div className="lg:col-span-2 space-y-12">

            {/* About this service in this location */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {service.name} in {locAngle.displayName} — What to Expect
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-4">
                {service.longDescription}
              </p>
              <p className="text-foreground-muted leading-relaxed">
                Our mobile service reaches {locAngle.displayName} ({locAngle.postcode}) {locAngle.responseTime}. We cover all areas including{" "}
                {locAngle.nearbyLandmarks.slice(0, 4).join(", ")}, and the surrounding {locAngle.areaCharacter}.
              </p>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                How We Handle {service.name} in {locAngle.displayName}
              </h2>
              <div className="space-y-4">
                {service.process.map((step) => (
                  <div key={step.step} className="flex gap-4 p-5 rounded-lg bg-surface-2 border border-border">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-black font-extrabold text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-foreground-muted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas covered within the location */}
            {locAngle.nearbyLandmarks.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {service.name} Across {locAngle.displayName}
                </h2>
                <p className="text-foreground-muted text-sm mb-4">
                  We cover the following areas within {locAngle.displayName}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {locAngle.nearbyLandmarks.map((lm) => (
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

            {/* Internal links — related services */}
            {relatedServices.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Related Services in {locAngle.displayName}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedServices.slice(0, 4).map((related, idx) => {
                    const anchor = (anchorVariants[related.slug] ?? [related.name])[idx % (anchorVariants[related.slug]?.length ?? 1)];
                    return (
                      <Link
                        key={related.slug}
                        href={`/${params.location}/${related.slug}`}
                        className="group"
                      >
                        <Card className="h-full transition-all hover:border-accent/50 group-hover:-translate-y-0.5">
                          <CardContent className="p-4 flex items-center gap-3">
                            <span className="text-2xl">{related.icon}</span>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-foreground group-hover:text-accent transition-colors text-sm">
                                {anchor}
                              </p>
                              <p className="text-xs text-foreground-muted truncate">
                                in {locAngle.displayName}
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Internal links — nearby locations */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {service.name} in Nearby Areas
              </h2>
              <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
                {nearbyLocations.map((nearbySlug) => {
                  const nearbyAngle = locationAngles[nearbySlug as LocationSlug];
                  if (!nearbyAngle) return null;
                  return (
                    <Link
                      key={nearbySlug}
                      href={`/${nearbySlug}/${params.service}`}
                      className="flex items-center gap-2 p-3 rounded-lg bg-surface-2 border border-border hover:border-accent/50 text-sm font-medium text-foreground hover:text-accent transition-all"
                    >
                      <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                      {service.name} in {nearbyAngle.displayName}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Features */}
            <div className="rounded-lg border border-border bg-surface-2 p-6">
              <h3 className="font-semibold text-foreground mb-4">What's Included</h3>
              <ul className="space-y-2.5">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-foreground-muted">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Response time */}
            <div className="rounded-lg border border-accent/20 bg-accent/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-accent" />
                <h3 className="font-semibold text-foreground">Response to {locAngle.displayName}</h3>
              </div>
              <p className="text-2xl font-extrabold text-accent mb-1">{locAngle.responseTime}</p>
              <p className="text-xs text-foreground-muted">
                From our Denton base, {locAngle.postcode} area
              </p>
            </div>

            {/* CTA card */}
            <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
              <h3 className="font-semibold text-foreground mb-2">
                {service.name} in {locAngle.displayName} — Get a Quote
              </h3>
              <p className="text-sm text-foreground-muted mb-4">
                Fixed price before we start. No hidden fees. Available now.
              </p>
              <div className="space-y-2">
                <Button asChild className="w-full" size="lg">
                  <a href={`tel:${BUSINESS.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    {BUSINESS.phoneDisplay}
                  </a>
                </Button>
                <Button
                  asChild variant="outline"
                  className="w-full border-green-600 text-green-400 hover:bg-green-950"
                  size="lg"
                >
                  <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
              <address className="not-italic mt-4 text-xs text-foreground-muted">
                {BUSINESS.name} · {BUSINESS.address.full}
              </address>
            </div>

            {/* Internal link to main service page */}
            <div className="rounded-lg border border-border bg-surface-2 p-5">
              <p className="text-sm text-foreground-muted mb-3">
                Learn more about our full {service.name} service:
              </p>
              <Link
                href={`/services/${params.service}`}
                className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                <ArrowRight className="h-4 w-4 shrink-0" />
                {service.name} — Full Service Page
              </Link>
            </div>

            {/* Internal link to location page */}
            <div className="rounded-lg border border-border bg-surface-2 p-5">
              <p className="text-sm text-foreground-muted mb-3">
                See all services we offer in {locAngle.displayName}:
              </p>
              <Link
                href={`/locations/${params.location}`}
                className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                All Services in {locAngle.displayName}
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* FAQs — unique mix of service + location FAQs */}
      <FAQSection
        faqs={combinedFAQs}
        title={`${service.name} in ${locAngle.displayName} — FAQs`}
        subtitle={`Common questions about our ${service.name.toLowerCase()} service in ${locAngle.displayName} (${locAngle.postcode}).`}
      />

      <ReviewsSection limit={3} />

      <CTASection
        headline={`Need ${service.name} in ${locAngle.displayName}?`}
        subtext={`Key 2 BHP provides ${service.name.toLowerCase()} across ${locAngle.displayName} and Greater Manchester. We arrive ${locAngle.responseTime} — 24 hours a day, every day.`}
      />
    </>
  );
}
