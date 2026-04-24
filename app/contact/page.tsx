import type { Metadata } from "next";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/utils";
import { faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Key 2 BHP Auto Locksmith Manchester | 24/7",
  description:
    "Contact Key 2 BHP Auto Locksmith in Manchester. Call 0161 884 0755 or WhatsApp for 24/7 emergency car locksmith services. Based in Denton, M34 2NE.",
  alternates: { canonical: `${BUSINESS.siteUrl}/contact` },
};

const contactFAQs = [
  {
    question: "What is the fastest way to get help from Key 2 BHP?",
    answer:
      "Calling us on 0161 884 0755 gets the fastest response. For non-emergency enquiries, WhatsApp also works well.",
  },
  {
    question: "Do you have a garage I can visit?",
    answer:
      "We're a fully mobile service — we come to you. There's no need to visit a garage or recover your vehicle.",
  },
  {
    question: "What areas do you cover from your Denton base?",
    answer:
      "We cover all of Greater Manchester including Manchester, Stockport, Tameside, Hyde, Ashton-under-Lyne, Salford, Stretford, and many more surrounding areas.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(contactFAQs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Locksmith",
            name: BUSINESS.name,
            telephone: BUSINESS.phone,
            url: BUSINESS.siteUrl,
            address: {
              "@type": "PostalAddress",
              streetAddress: BUSINESS.address.street,
              addressLocality: BUSINESS.address.city,
              addressRegion: BUSINESS.address.county,
              postalCode: BUSINESS.address.postcode,
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: BUSINESS.geo.lat,
              longitude: BUSINESS.geo.lng,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
          }),
        }}
      />

      <Breadcrumb items={[{ label: "Contact" }]} />

      {/* Hero */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl font-extrabold text-foreground mb-4">
              Contact <span className="text-accent">Key 2 BHP</span> Auto Locksmith
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Locked out? Lost your keys? Need a quote? Call or WhatsApp — we're available 24 hours a day, 7 days a week, 365 days a year across Greater Manchester.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <div className="p-6 rounded-lg border border-accent/30 bg-accent/5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 mb-4">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <h2 className="font-semibold text-foreground mb-2">Call Us</h2>
              <p className="text-sm text-foreground-muted mb-4">
                The fastest way to reach us — we answer 24/7 including bank holidays.
              </p>
              <Button asChild className="w-full" size="lg">
                <a href={`tel:${BUSINESS.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  {BUSINESS.phoneDisplay}
                </a>
              </Button>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-lg border border-green-700/30 bg-green-950/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-900/30 mb-4">
                <MessageCircle className="h-5 w-5 text-green-400" />
              </div>
              <h2 className="font-semibold text-foreground mb-2">WhatsApp</h2>
              <p className="text-sm text-foreground-muted mb-4">
                Message us on WhatsApp for quotes, questions, or to send a photo of your key.
              </p>
              <Button
                asChild
                className="w-full border-green-600 text-green-400 hover:bg-green-950"
                variant="outline"
                size="lg"
              >
                <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message on WhatsApp
                </a>
              </Button>
            </div>

            {/* Address / hours */}
            <div className="p-6 rounded-lg border border-border bg-surface-2 sm:col-span-2 lg:col-span-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 mb-4">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <h2 className="font-semibold text-foreground mb-4">Our Details</h2>
              <address className="not-italic space-y-3 text-sm">
                <div className="flex items-start gap-2.5 text-foreground-muted">
                  <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{BUSINESS.name}</p>
                    <p>{BUSINESS.address.street}</p>
                    <p>{BUSINESS.address.city}</p>
                    <p>{BUSINESS.address.county}</p>
                    <p>{BUSINESS.address.postcode}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-foreground-muted">
                  <Phone className="h-4 w-4 text-accent shrink-0" />
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="hover:text-accent transition-colors font-medium text-foreground"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-foreground-muted">
                  <Clock className="h-4 w-4 text-accent shrink-0" />
                  <span>24/7 — 365 days a year</span>
                </div>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="bg-surface border-y border-border">
        <div className="container py-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Our Location</h2>
          <div className="rounded-lg overflow-hidden border border-border" style={{ height: "400px" }}>
            <iframe
              src="https://maps.google.com/maps?q=34+Laburnum+Road,+Denton,+Manchester,+M34+2NE&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Key 2 BHP Auto Locksmith location — 34 Laburnum Road, Denton, Manchester M34 2NE"
              aria-label="Google Maps showing Key 2 BHP location in Denton, Manchester"
            />
          </div>
          <p className="mt-3 text-sm text-foreground-muted">
            Based in Denton, Manchester — serving all of Greater Manchester 24/7
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Contact FAQs</h2>
          <div className="space-y-4">
            {contactFAQs.map((faq, i) => (
              <div key={i} className="p-5 rounded-lg border border-border bg-surface-2">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
