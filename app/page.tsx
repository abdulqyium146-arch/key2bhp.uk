import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import TrustSignals from "@/components/TrustSignals";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AreasSection from "@/components/AreasSection";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/utils";
import { faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Key 2 BHP Auto Locksmith Manchester | 24/7 Mobile Car Key Specialist",
  description:
    "24/7 mobile auto locksmith in Manchester. Car key replacement, emergency lockout, key programming & more. 5.0 stars, fast response across Greater Manchester. Call 0161 884 0755.",
  alternates: { canonical: BUSINESS.siteUrl },
};

const homepageFAQs = [
  {
    question: "How much does a car key replacement cost in Manchester?",
    answer:
      "Car key replacement costs vary by vehicle type. Standard keys start from around £60–£90. Transponder and smart keys are typically £100–£250. Contact us for a free no-obligation quote.",
  },
  {
    question: "How long will it take for a locksmith to arrive in Manchester?",
    answer:
      "We aim to reach customers in Manchester and Greater Manchester within 30–60 minutes. Response times may vary based on location and time of day.",
  },
  {
    question: "Can you unlock my car without causing damage?",
    answer:
      "Yes. We use specialist non-destructive entry tools to open vehicles without damaging locks, windows, or bodywork.",
  },
  {
    question: "Do you replace keys if I've lost all copies?",
    answer:
      "Yes. Even with no working keys, we can cut and programme a new key set for your vehicle, subject to identity and ownership verification.",
  },
  {
    question: "Are you available on Christmas and bank holidays?",
    answer:
      "Yes — we operate 365 days a year including Christmas Day, bank holidays, and weekends. Car emergencies don't take days off.",
  },
  {
    question: "What areas do you cover around Manchester?",
    answer:
      "We cover all of Greater Manchester including Denton, Stockport, Tameside, Hyde, Ashton-under-Lyne, Salford, Stretford, and many more surrounding areas.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homepageFAQs)) }}
      />

      <HeroSection />

      {/* Services */}
      <ServicesGrid
        title="Auto Locksmith Services in Manchester"
        subtitle="Mobile car locksmith services available 24/7 across Manchester and Greater Manchester."
      />

      {/* Process strip */}
      <section className="py-14 bg-surface border-y border-border">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-2">How It Works</h2>
            <p className="text-foreground-muted text-sm">Simple, fast, no hassle</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { step: "01", title: "Call or WhatsApp", body: "Tell us your location and the problem. We'll give you an immediate quote." },
              { step: "02", title: "We Come to You", body: "Our mobile technician heads to you with all necessary equipment." },
              { step: "03", title: "Problem Solved", body: "We fix the issue on-site, test everything, and you're back on your way." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-black font-extrabold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Inline CTA */}
      <CTASection
        headline="Locked Out Right Now?"
        subtext="Call or WhatsApp — we'll have a mobile locksmith with you in Manchester as quickly as possible, day or night."
      />

      <ReviewsSection />

      <AreasSection />

      <FAQSection
        faqs={homepageFAQs}
        title="Common Questions About Our Manchester Locksmith Service"
        subtitle="Everything you need to know before calling."
      />

      {/* Final CTA */}
      <CTASection
        headline="Need a Locksmith in Manchester?"
        subtext="Don't get quoted extortionate prices. Key 2 BHP offers honest, competitive pricing and a 24/7 response across Greater Manchester."
        urgency={false}
      />
    </>
  );
}
