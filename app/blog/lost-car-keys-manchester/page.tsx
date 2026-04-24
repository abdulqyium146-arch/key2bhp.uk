import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/utils";
import { faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Lost Car Keys Manchester? Here's What to Do | Key 2 BHP",
  description:
    "Lost your car keys in Manchester? Find out your options — from mobile auto locksmiths to dealerships. Key 2 BHP explains the fastest and cheapest route back to driving.",
  alternates: { canonical: `${BUSINESS.siteUrl}/blog/lost-car-keys-manchester` },
  openGraph: {
    title: "Lost Car Keys Manchester? Here's What to Do",
    description: "Your complete guide to replacing lost car keys in Manchester fast and affordably.",
    url: `${BUSINESS.siteUrl}/blog/lost-car-keys-manchester`,
    type: "article",
    publishedTime: "2024-11-20",
  },
};

const faqs = [
  {
    question: "How quickly can a locksmith replace my lost car key in Manchester?",
    answer:
      "A mobile auto locksmith can typically arrive within 30–60 minutes and complete a key replacement on-site in under an hour. This is significantly faster than a dealership, which can take days.",
  },
  {
    question: "Can a locksmith replace keys if I've lost all copies?",
    answer:
      "Yes. A specialist auto locksmith can cut and programme a new key even with no working originals remaining. You'll need to prove identity and ownership of the vehicle.",
  },
  {
    question: "Is a locksmith cheaper than going to a dealer for a lost car key?",
    answer:
      "In most cases, yes — often significantly cheaper. Dealers have higher overheads and mark up parts and labour more. A mobile locksmith also comes to you, saving recovery costs.",
  },
  {
    question: "What information do I need when calling about a lost car key?",
    answer:
      "Have your vehicle's make, model, and year ready. A V5C logbook (to prove ownership) and your driving licence or passport are also useful for ID verification.",
  },
];

export default function LostCarKeysManchesterPage() {
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
            headline: "Lost Your Car Keys in Manchester? Here's Exactly What to Do",
            description:
              "Your complete guide to replacing lost car keys in Manchester quickly and affordably.",
            author: { "@type": "Organization", name: BUSINESS.name },
            publisher: {
              "@type": "Organization",
              name: BUSINESS.name,
              url: BUSINESS.siteUrl,
            },
            datePublished: "2024-11-20",
            url: `${BUSINESS.siteUrl}/blog/lost-car-keys-manchester`,
          }),
        }}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Lost Car Keys Manchester" },
        ]}
      />

      <article className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-accent bg-accent/10 rounded-full px-2.5 py-0.5">
                  Car Key Replacement
                </span>
                <time className="text-xs text-foreground-muted" dateTime="2024-11-20">
                  20 November 2024
                </time>
                <span className="text-xs text-foreground-muted">5 min read</span>
              </div>
              <h1 className="text-4xl font-extrabold text-foreground mb-4 leading-tight">
                Lost Your Car Keys in Manchester?{" "}
                <span className="text-accent">Here's Exactly What to Do</span>
              </h1>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Losing your car keys is stressful — but it's not the disaster it might feel like. This guide explains your options, what each will cost, and how to get back on the road as quickly as possible in Manchester.
              </p>
            </header>

            {/* Emergency callout box */}
            <div className="mb-10 p-5 rounded-lg border border-accent/30 bg-accent/5 flex gap-4">
              <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Need a key now?</p>
                <p className="text-sm text-foreground-muted mb-3">
                  Skip the reading and call Key 2 BHP directly. We'll come to you and sort it out on the spot.
                </p>
                <Button asChild size="sm">
                  <a href={`tel:${BUSINESS.phone}`}>
                    Call {BUSINESS.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>

            {/* Article body */}
            <div className="prose-custom space-y-8 text-foreground-muted text-base leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Step 1: Don't Panic — You Have Options
                </h2>
                <p>
                  The first thing to remember is that losing your car keys in Manchester does not mean you need to spend hundreds of pounds or wait days for a resolution. There are several ways to get a replacement key, and a good mobile auto locksmith can have you back on the road the same day — often within an hour.
                </p>
                <p className="mt-3">
                  Your three main options are: calling a mobile auto locksmith, contacting your car manufacturer's roadside assistance, or going through a main dealership. Here's how they compare.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Option 1: Call a Mobile Auto Locksmith (Recommended)
                </h2>
                <p>
                  A specialist mobile auto locksmith like Key 2 BHP can come to your location in Manchester, cut, and programme a new key on-site. This is typically the fastest and most cost-effective option.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Arrives at your location within 30–60 minutes",
                    "Key cut and programmed on-site",
                    "Significantly cheaper than a dealership",
                    "No need to recover the vehicle",
                    "Works even if you've lost all keys",
                    "Available 24/7",
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
                  Option 2: Roadside Assistance / Breakdown Cover
                </h2>
                <p>
                  If you have RAC, AA, or similar cover, check whether your policy includes lost key cover. Some policies do include a key replacement benefit. However, response times and coverage varies, and many policies have a callout limit per year. This option is worth checking but shouldn't be relied upon in an emergency without first confirming your policy terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Option 3: The Main Dealership
                </h2>
                <div className="p-4 rounded-lg border border-amber-500/30 bg-amber-500/5 flex gap-3 mb-4">
                  <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-amber-200">
                    Dealers typically charge 2–3× more than a mobile locksmith and often require the car to be recovered to their premises.
                  </p>
                </div>
                <p>
                  Your car's main dealer can supply and programme a replacement key, but expect significantly higher costs — often £200–£600 or more depending on the vehicle — plus a wait of several days for the key to be ordered. You'll also need to get the car to the dealership, which means recovery if you have no working key.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What Information Do You Need?
                </h2>
                <p>When calling a locksmith or dealer, have the following ready:</p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Vehicle make, model, and year",
                    "Vehicle registration number",
                    "V5C (logbook) to prove ownership",
                    "Driving licence or passport for ID",
                    "Your current location",
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
                  What About Key Insurance?
                </h2>
                <p>
                  If you've lost your keys and have key insurance (often available as an add-on to car insurance), you may be able to claim back some or all of the cost. Always check your policy. Even so, a mobile locksmith is the fastest way to get a key — you can sort the claim afterwards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  After Getting a New Key: What to Do Next
                </h2>
                <p>
                  Once you have a working replacement key, consider having any lost keys deleted from your vehicle's system — a reputable locksmith can do this. This means the lost key can no longer be used to start or access your car, which is important for security.
                </p>
                <p className="mt-3">
                  Also consider getting a spare key cut and programmed while you can. Having a backup key is cheap insurance against this happening again.
                </p>
              </section>

            </div>

            {/* CTA */}
            <div className="mt-12 p-6 rounded-lg border border-accent/30 bg-accent/5">
              <h3 className="font-bold text-foreground text-xl mb-2">
                Need a Car Key Replacement in Manchester?
              </h3>
              <p className="text-sm text-foreground-muted mb-4">
                Key 2 BHP provides fast, affordable car key replacement across Manchester and Greater Manchester. Call or WhatsApp for an immediate response.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <a href={`tel:${BUSINESS.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call {BUSINESS.phoneDisplay}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/car-key-replacement">
                    About Our Key Replacement Service <ArrowRight className="h-4 w-4 ml-2" />
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
                  { href: "/services/car-key-replacement", label: "Car Key Replacement Service in Manchester" },
                  { href: "/services/key-programming", label: "Car Key Programming in Manchester" },
                  { href: "/blog/locked-keys-in-car-what-to-do", label: "Locked Keys in Your Car? What to Do" },
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
        title="Lost Car Keys Manchester — FAQs"
      />

      <CTASection
        headline="Lost Your Car Keys in Manchester?"
        subtext="Key 2 BHP will be with you fast. Call or WhatsApp now for an immediate response — we carry key blanks and programming equipment for all major makes and models."
      />
    </>
  );
}
