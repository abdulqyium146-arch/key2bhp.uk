import Link from "next/link";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/utils";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  location?: string;
  urgency?: boolean;
}

export default function HeroSection({
  headline = "24/7 Auto Locksmith in Manchester",
  subheadline = "Locked out of your car? Lost your keys? We come to you — fast. Car key replacement, emergency lockout, and key programming across Greater Manchester.",
  location = "Manchester",
  urgency = true,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background border-b border-border">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-20 -left-20 h-60 w-60 rounded-full bg-accent/3 blur-3xl" />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          {urgency && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Available Right Now — 24/7 Emergency Locksmith in {location}</span>
            </div>
          )}

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
            {headline.includes("Manchester") ? (
              <>
                {headline.split("Manchester")[0]}
                <span className="text-accent">Manchester</span>
                {headline.split("Manchester")[1]}
              </>
            ) : (
              headline
            )}
          </h1>

          <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-2xl">
            {subheadline}
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-1.5 text-sm text-foreground-muted">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-semibold text-foreground">5.0</span>
              <span>(100+ reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-foreground-muted">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Fast response · All makes & models</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="xl" className="font-bold shadow-lg shadow-accent/20">
              <a href={`tel:${BUSINESS.phone}`}>
                <Phone className="h-5 w-5 mr-2" />
                Call {BUSINESS.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-green-600 text-green-400 hover:bg-green-950">
              <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-foreground-muted">
            Based in Denton · Covering Manchester, Stockport, Tameside & surrounding areas
          </p>
        </div>
      </div>
    </section>
  );
}
