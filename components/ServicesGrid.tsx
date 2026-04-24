import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data/services";

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  location?: string;
}

export default function ServicesGrid({
  title = "Our Services",
  subtitle = "Professional mobile auto locksmith services across Greater Manchester, available 24/7.",
  limit,
  location,
}: ServicesGridProps) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">{title}</h2>
          <p className="text-foreground-muted max-w-xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block"
            >
              <Card className="h-full transition-all duration-200 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 group-hover:-translate-y-0.5">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl" role="img" aria-label={service.name}>
                      {service.icon}
                    </span>
                    <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-accent transition-colors">
                    {location ? `${service.name} in ${location}` : service.name}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {service.shortDescription}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {limit && services.length > limit && (
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
