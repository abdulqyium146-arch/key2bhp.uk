import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { locations } from "@/lib/data/locations";

interface AreasSectionProps {
  title?: string;
  currentSlug?: string;
}

export default function AreasSection({
  title = "Areas We Cover",
  currentSlug,
}: AreasSectionProps) {
  const displayLocations = currentSlug
    ? locations.filter((l) => l.slug !== currentSlug)
    : locations;

  return (
    <section className="section-padding bg-surface border-y border-border">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">{title}</h2>
            <p className="text-foreground-muted text-sm">
              Mobile auto locksmith service across Greater Manchester
            </p>
          </div>
          <Link
            href="/locations"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {displayLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="flex items-center gap-2 p-3 rounded-lg bg-surface-2 border border-border hover:border-accent/50 hover:text-accent transition-all text-sm font-medium text-foreground group"
            >
              <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
              <span>{location.name}</span>
            </Link>
          ))}
        </div>

        <Link
          href="/locations"
          className="sm:hidden mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          View all areas <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
