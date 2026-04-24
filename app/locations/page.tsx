import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { locations } from "@/lib/data/locations";
import { BUSINESS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Auto Locksmith Locations | Greater Manchester | Key 2 BHP",
  description:
    "Key 2 BHP covers Manchester, Denton, Stockport, Tameside, Hyde, Ashton, Salford, Stretford & more. Mobile auto locksmith 24/7 across Greater Manchester.",
  alternates: { canonical: `${BUSINESS.siteUrl}/locations` },
};

export default function LocationsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Locations" }]} />

      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl font-extrabold text-foreground mb-4">
              Auto Locksmith Covering <span className="text-accent">Greater Manchester</span>
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Key 2 BHP provides 24/7 mobile auto locksmith services across Manchester and the surrounding towns. Based in Denton, we respond quickly to callouts throughout Greater Manchester.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group block"
              >
                <Card className="h-full transition-all duration-200 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 group-hover:-translate-y-0.5">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                        <MapPin className="h-4 w-4 text-accent" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                    <h2 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {location.name}
                    </h2>
                    <p className="text-xs text-foreground-muted mb-3">{location.county}</p>
                    <p className="text-xs text-foreground-muted leading-relaxed line-clamp-3">
                      {location.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-lg border border-border bg-surface-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Don't see your area listed?</h3>
              <p className="text-sm text-foreground-muted">
                We cover a wide area — call us and we'll confirm if we can reach you.
              </p>
            </div>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 shrink-0 bg-accent text-black font-bold px-5 py-2.5 rounded-md hover:bg-accent-hover transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
