import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/utils";
import { faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Locked Keys in Your Car? What to Do | Key 2 BHP Manchester",
  description:
    "Locked your keys in the car in Manchester? This guide tells you exactly what to do — and what NOT to do — to get back in quickly without damaging your vehicle.",
  alternates: { canonical: `${BUSINESS.siteUrl}/blog/locked-keys-in-car-what-to-do` },
  openGraph: {
    title: "Locked Keys in Your Car? What to Do",
    description: "Step-by-step guide for being locked out of your car in Manchester.",
    url: `${BUSINESS.siteUrl}/blog/locked-keys-in-car-what-to-do`,
    type: "article",
    publishedTime: "2024-10-08",
  },
};

const faqs = [
  {
    question: "Can a locksmith open my car without a key?",
    answer:
      "Yes. A professional auto locksmith uses specialist non-destructive entry tools to open your vehicle without a key, without causing any damage.",
  },
  {
    question: "How long does it take a locksmith to unlock a car in Manchester?",
    answer:
      "Most vehicles can be opened in under 10 minutes once the locksmith is on-site. Arrival time in Manchester is typically 30–60 minutes from your call.",
  },
  {
    question: "Will the locksmith damage my car to open it?",
    answer:
      "No — Key 2 BHP uses only non-destructive entry techniques. We do not break windows or force locks. Our specialist tools allow us to open nearly any vehicle cleanly.",
  },
  {
    question: "Is it cheaper to call a locksmith or break a window?",
    answer:
      "Always call a locksmith. Breaking a window typically costs £100–£300 to repair and creates a security risk. A locksmith callout is usually less expensive and leaves no damage.",
  },
  {
    question: "What if there's a child or pet locked in the car?",
    answer:
      "Call 999 immediately if a child or pet is in a locked car, especially in hot or cold weather. The police and fire service can assist. Then call a locksmith for vehicle access if needed.",
  },
];

export default function LockedKeysInCarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Locked Keys in Your Car? What to Do and Who to Call",
            description:
              "Step-by-step guide for being locked out of your car in Manchester.",
            author: { "@type": "Organization", name: BUSINESS.name },
            publisher: {
              "@type": "Organization",
              name: BUSINESS.name,
              url: BUSINESS.siteUrl,
            },
            datePublished: "2024-10-08",
            url: `${BUSINESS.siteUrl}/blog/locked-keys-in-car-what-to-do`,
          }),
        }}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Locked Keys in Car — What to Do" },
        ]}
      />

      <article className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-accent bg-accent/10 rounded-full px-2.5 py-0.5">
                  Emergency Lockout
                </span>
                <time className="text-xs text-foreground-muted" dateTime="2024-10-08">
                  8 October 2024
                </time>
                <span className="text-xs text-foreground-muted">4 min read</span>
              </div>
              <h1 className="text-4xl font-extrabold text-foreground mb-4 leading-tight">
                Locked Keys in Your Car?{" "}
                <span className="text-accent">What to Do and Who to Call</span>
              </h1>
              <p className="text-lg text-foreground-muted leading-relaxed">
                It happens to the best of us — you close the car door and immediately realise your keys are sitting on the seat. Here's how to handle it calmly and get back in your car as quickly as possible.
              </p>
            </header>

            {/* Emergency callout */}
            <div className="mb-10 p-5 rounded-lg border border-red-500/30 bg-red-950/20 flex gap-4">
              <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Child or pet locked inside?</p>
                <p className="text-sm text-foreground-muted">
                  Call <strong className="text-foreground">999 immediately</strong> — this is an emergency. The police and fire service have authority to break into vehicles safely.
                </p>
              </div>
            </div>

            {/* Need help now callout */}
            <div className="mb-10 p-5 rounded-lg border border-accent/30 bg-accent/5 flex gap-4">
              <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Locked out in Manchester right now?</p>
                <p className="text-sm text-foreground-muted mb-3">
                  Call Key 2 BHP — we're available 24/7 and will reach you as fast as possible.
                </p>
                <Button asChild size="sm">
                  <a href={`tel:${BUSINESS.phone}`}>
                    Call {BUSINESS.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-8 text-foreground-muted text-base leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Step 1: Stay Calm and Assess the Situation
                </h2>
                <p>
                  Before you do anything, take a moment to assess. Check all doors including the boot — it's not uncommon for one door to be unlocked. Check the passenger side too. If you have a spare key at home and someone can bring it to you, that's always the simplest option.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Step 2: What NOT to Do
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      dont: "Don't try to break a window",
                      reason: "Window replacement typically costs £100–£300. It also creates a security risk until repaired.",
                    },
                    {
                      dont: "Don't attempt to force the lock with a coat hanger",
                      reason: "Modern vehicles have anti-tamper mechanisms. You're likely to damage paintwork, the rubber seal, or the lock mechanism itself.",
                    },
                    {
                      dont: "Don't leave your vehicle unattended in an unsafe area",
                      reason: "If you're in an unsafe location, stay with the vehicle or move to a safe, well-lit area while you wait for help.",
                    },
                    {
                      dont: "Don't pay extortionate call-out fees",
                      reason: "Some unscrupulous locksmiths quote low call-out fees then charge heavily for the actual work. Key 2 BHP quotes upfront.",
                    },
                  ].map((item) => (
                    <div key={item.dont} className="flex gap-3 p-4 rounded-lg bg-surface-2 border border-border">
                      <XCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm mb-1">{item.dont}</p>
                        <p className="text-xs text-foreground-muted">{item.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Step 3: Call a Professional Auto Locksmith
                </h2>
                <p>
                  The quickest and safest resolution is to call a professional auto locksmith. A qualified locksmith will use specialist non-destructive entry tools to open your vehicle — without breaking anything. Most vehicles can be opened in under 10 minutes once the locksmith arrives.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Non-destructive entry — no damage",
                    "Works on virtually all vehicles",
                    "Usually arrives within 30–60 mins",
                    "Often cheaper than a window repair",
                    "Available 24/7",
                    "Can also replace or repair keys on the same visit",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What to Tell the Locksmith When You Call
                </h2>
                <ul className="space-y-2">
                  {[
                    "Your exact location (street name, postcode, or nearby landmark)",
                    "Your vehicle make, model, and colour",
                    "Whether you can see the keys inside the car",
                    "Whether any doors or windows are slightly open",
                    "Whether the vehicle has any special locking features",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Does Car Insurance Cover Lockout?
                </h2>
                <p>
                  Some comprehensive car insurance policies include emergency lockout cover — check your policy documents. Breakdown cover from providers like the AA or RAC sometimes includes key-related assistance too. Even if you can claim back the cost, you'll still want to call a locksmith quickly and sort the claim afterwards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Prevent It Happening Again
                </h2>
                <p>
                  Consider getting a spare key cut and programmed to keep at home or with a trusted person. A key safe (a small padlocked box fixed to a wall) is an inexpensive way to store a spare key securely. Key fob covers can also prevent accidental button presses that might lock you out.
                </p>
              </section>

            </div>

            {/* CTA */}
            <div className="mt-12 p-6 rounded-lg border border-accent/30 bg-accent/5">
              <h3 className="font-bold text-foreground text-xl mb-2">
                Locked Out in Manchester?
              </h3>
              <p className="text-sm text-foreground-muted mb-4">
                Key 2 BHP provides 24/7 emergency vehicle lockout service across Manchester and Greater Manchester. Call now for a fast response.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <a href={`tel:${BUSINESS.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call {BUSINESS.phoneDisplay}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/emergency-lockout">
                    Emergency Lockout Service <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Related links */}
            <nav aria-label="Related articles and services" className="mt-10 pt-8 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                Related
              </h3>
              <div className="space-y-2">
                {[
                  { href: "/services/emergency-lockout", label: "Emergency Vehicle Lockout Service" },
                  { href: "/services/car-key-replacement", label: "Car Key Replacement Manchester" },
                  { href: "/blog/lost-car-keys-manchester", label: "Lost Your Car Keys in Manchester?" },
                  { href: "/locations/manchester", label: "Auto Locksmith in Manchester" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-foreground-muted hover:text-accent transition-colors"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-accent" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </article>

      <FAQSection
        faqs={faqs}
        title="Locked Keys in Car — FAQs"
      />

      <CTASection
        headline="Locked Out of Your Car in Manchester?"
        subtext="Key 2 BHP is available 24/7. We'll come to you, open your vehicle without damage, and get you back on your way."
      />
    </>
  );
}
