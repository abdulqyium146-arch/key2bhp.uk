import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data/services";
import { BUSINESS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Auto Locksmith Services Manchester | Key 2 BHP",
  description:
    "Full range of mobile auto locksmith services in Manchester — car key replacement, emergency lockout, key programming, smart keys & more. 24/7. Call 0161 884 0755.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services" }]} />

      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl font-extrabold text-foreground mb-4">
              Auto Locksmith Services in <span className="text-accent">Manchester</span>
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Key 2 BHP provides a comprehensive mobile auto locksmith service across Manchester and Greater Manchester, available 24 hours a day, 7 days a week. All services are carried out on-site — we come to you.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
                <Card className="h-full transition-all duration-200 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 group-hover:-translate-y-0.5">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-3xl" role="img" aria-label={service.name}>
                        {service.icon}
                      </span>
                      <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                    <h2 className="font-semibold text-foreground text-xl mb-2 group-hover:text-accent transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-foreground-muted">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
