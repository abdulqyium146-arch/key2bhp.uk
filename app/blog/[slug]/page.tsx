import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getBlogTopic, getAllBlogSlugs } from "@/lib/data/blog-topics";
import { getService } from "@/lib/data/services";
import { getLocation } from "@/lib/data/locations";
import { BUSINESS } from "@/lib/utils";
import { faqSchema } from "@/lib/seo";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogTopic(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${BUSINESS.siteUrl}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${BUSINESS.siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
    },
  };
}

const categoryLabels: Record<string, string> = {
  emergency: "Emergency Advice",
  cost: "Cost & Pricing",
  "how-to": "How-To Guide",
  informational: "Information",
};

const categoryColors: Record<string, string> = {
  emergency: "border-red-700/40 text-red-300 bg-red-950/30",
  cost: "border-amber-600/40 text-amber-300 bg-amber-950/30",
  "how-to": "border-blue-700/40 text-blue-300 bg-blue-950/30",
  informational: "border-green-700/40 text-green-300 bg-green-950/30",
};

export default function BlogPostPage({ params }: Props) {
  const post = getBlogTopic(params.slug);
  if (!post) notFound();

  const relatedServiceObjects = post.relatedServices
    .map((s) => getService(s))
    .filter(Boolean);

  const relatedLocationObjects = post.relatedLocations
    .map((l) => getLocation(l))
    .filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
    },
    datePublished: post.publishDate,
    url: `${BUSINESS.siteUrl}/blog/${post.slug}`,
    mainEntityOfPage: `${BUSINESS.siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faqs)) }}
        />
      )}

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">

            {/* Article header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-medium border rounded-full px-2.5 py-0.5 ${categoryColors[post.category] ?? "border-border text-foreground-muted"}`}
                >
                  <Tag className="h-3 w-3" />
                  {categoryLabels[post.category] ?? post.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-foreground-muted">
                  <Calendar className="h-3.5 w-3.5" />
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </span>
                <span className="flex items-center gap-1.5 text-xs text-foreground-muted">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-5">
                {post.title}
              </h1>
              <p className="text-lg text-foreground-muted leading-relaxed border-l-2 border-accent pl-4">
                {post.excerpt}
              </p>
            </header>

            {/* Emergency CTA for emergency posts */}
            {post.category === "emergency" && (
              <div className="mb-10 p-5 rounded-lg border border-accent/30 bg-accent/5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-foreground mb-1">Need help right now?</p>
                  <p className="text-sm text-foreground-muted">
                    Key 2 BHP is available 24/7 across Manchester and Greater Manchester.
                  </p>
                </div>
                <Button asChild size="sm" className="shrink-0">
                  <a href={`tel:${BUSINESS.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call {BUSINESS.phoneDisplay}
                  </a>
                </Button>
              </div>
            )}

            {/* Article sections */}
            <div className="space-y-8 text-foreground-muted text-base leading-relaxed">
              {post.sections.map((section, idx) => (
                <section key={idx}>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {section.heading}
                  </h2>
                  <p>{section.content}</p>
                </section>
              ))}
            </div>

            {/* Inline CTA mid-article */}
            <div className="my-12 p-6 rounded-lg border border-accent/30 bg-accent/5">
              <h3 className="font-bold text-foreground text-lg mb-2">
                Need a Mobile Auto Locksmith in Manchester?
              </h3>
              <p className="text-sm text-foreground-muted mb-4">
                Key 2 BHP covers Manchester and Greater Manchester 24/7. Call or WhatsApp for an immediate response.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="default">
                  <a href={`tel:${BUSINESS.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    {BUSINESS.phoneDisplay}
                  </a>
                </Button>
                <Button asChild variant="outline" size="default" className="border-green-600 text-green-400 hover:bg-green-950">
                  <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>

            {/* Related services links */}
            {relatedServiceObjects.length > 0 && (
              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Related Services</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {relatedServiceObjects.map((svc) => svc && (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-surface-2 border border-border hover:border-accent/50 transition-all group"
                    >
                      <span className="text-2xl">{svc.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                          {svc.name}
                        </p>
                        <p className="text-xs text-foreground-muted truncate">{svc.tagline}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related location links */}
            {relatedLocationObjects.length > 0 && (
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  Locksmith Services in Your Area
                </h3>
                <div className="flex flex-wrap gap-2">
                  {relatedLocationObjects.map((loc) => loc && (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2 border border-border text-sm text-foreground-muted hover:text-accent hover:border-accent/50 transition-all"
                    >
                      <ArrowRight className="h-3 w-3 text-accent" />
                      Locksmith in {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* FAQs */}
      {post.faqs.length > 0 && (
        <FAQSection
          faqs={post.faqs}
          title="Frequently Asked Questions"
        />
      )}

      <CTASection
        headline="Need a Locksmith in Manchester?"
        subtext="Key 2 BHP is available 24/7. Mobile, fast, and honest pricing. Call or WhatsApp now."
      />
    </>
  );
}
