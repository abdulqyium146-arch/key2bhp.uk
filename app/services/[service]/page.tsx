import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ReviewsSection from "@/components/ReviewsSection";
import AreasSection from "@/components/AreasSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getService, getAllServiceSlugs, getRelatedServices, services } from "@/lib/data/services";
import { locationAngles } from "@/lib/data/combos";
import { locationSlugs } from "@/lib/data/topical-map";
import { BUSINESS } from "@/lib/utils";
import { serviceSchema, faqSchema } from "@/lib/seo";
import type { LocationSlug } from "@/lib/data/topical-map";

interface Props {
  params: { service: string };
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ service: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService(params.service);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${BUSINESS.siteUrl}/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${BUSINESS.siteUrl}/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.service);
  if (!service) notFound();

  const relatedServices = getRelatedServices(service.relatedServices);

  const schemaData = [
    serviceSchema(
      service.name,
      service.shortDescription,
      `${BUSINESS.siteUrl}/services/${service.slug}`
    ),
    faqSchema(service.faqs),
  ];

  return (
    <>
      {schemaData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background border-b border-border">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="container relative py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl" role="img" aria-label={service.name}>
                {service.icon}
              </span>
              <Badge variant="secondary" className="text-xs">24/7 Mobile Service</Badge>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
              {service.h1}
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed mb-6 max-w-2xl">
              {service.tagline}
            </p>
            <p className="text-base text-foreground-muted leading-relaxed mb-8 max-w-2xl">
              {service.shortDescription}
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
          {/* Long description */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                About Our {service.name} Service in Manchester
              </h2>
              <p className="text-foreground-muted leading-relaxed">{service.longDescription}</p>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">How It Works</h2>
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

            {/* Combo links — this service across all locations */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {service.name} Across Greater Manchester
              </h2>
              <p className="text-sm text-foreground-muted mb-5">
                We provide {service.name.toLowerCase()} in every part of Greater Manchester — click your area for local response times, postcodes, and pricing.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {locationSlugs.map((locSlug) => {
                  const angle = locationAngles[locSlug as LocationSlug];
                  return (
                    <Link
                      key={locSlug}
                      href={`/${locSlug}/${service.slug}`}
                      className="flex items-center gap-2 p-3 rounded-lg bg-surface-2 border border-border hover:border-accent/50 text-sm font-medium text-foreground hover:text-accent transition-all group"
                    >
                      <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                      {angle.displayName}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Related services */}
            {relatedServices.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Related Services</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedServices.map((related) => (
                    <Link key={related.slug} href={`/services/${related.slug}`} className="group">
                      <Card className="h-full transition-all hover:border-accent/50 group-hover:-translate-y-0.5">
                        <CardContent className="p-4 flex items-center gap-3">
                          <span className="text-2xl">{related.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-foreground group-hover:text-accent transition-colors text-sm">
                              {related.name}
                            </p>
                            <p className="text-xs text-foreground-muted truncate">{related.tagline}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Features checklist */}
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

            {/* Contact card */}
            <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
              <h3 className="font-semibold text-foreground mb-2">Get a Quote Now</h3>
              <p className="text-sm text-foreground-muted mb-4">
                Call or WhatsApp for a free, no-obligation quote. We'll confirm pricing before any work begins.
              </p>
              <div className="space-y-2">
                <Button asChild className="w-full" size="lg">
                  <a href={`tel:${BUSINESS.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    {BUSINESS.phoneDisplay}
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full border-green-600 text-green-400 hover:bg-green-950" size="lg">
                  <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
              <p className="text-xs text-foreground-muted mt-3 text-center">
                Available 24/7 · Fast response · All makes & models
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* FAQs */}
      <FAQSection
        faqs={service.faqs}
        title={`${service.name} FAQs`}
        subtitle={`Common questions about our ${service.name.toLowerCase()} service in Manchester.`}
      />

      <AreasSection title={`${service.name} Across Greater Manchester`} />

      <ReviewsSection limit={3} />

      <CTASection
        headline={`Need ${service.name} in Manchester?`}
        subtext={`Our mobile technician can come to you anywhere in Greater Manchester. Call or WhatsApp now for a fast response.`}
      />
    </>
  );
}
