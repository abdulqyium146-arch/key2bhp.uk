import { Shield, Clock, MapPin, Star, Wrench, Phone } from "lucide-react";

const signals = [
  {
    icon: Star,
    title: "5.0 Star Rating",
    description: "100+ verified customer reviews across Google and other platforms.",
    color: "text-accent",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "We answer the phone at 2am on a Sunday. Emergencies don't schedule themselves.",
    color: "text-accent",
  },
  {
    icon: MapPin,
    title: "Fully Mobile",
    description: "We come to you — at home, at work, or stranded at the roadside.",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Non-Destructive Entry",
    description: "We open vehicles using specialist tools — no broken windows, no forced locks.",
    color: "text-accent",
  },
  {
    icon: Wrench,
    title: "All Makes & Models",
    description: "From family hatchbacks to premium luxury vehicles — we have the equipment.",
    color: "text-accent",
  },
  {
    icon: Phone,
    title: "Transparent Pricing",
    description: "We quote upfront before any work begins. No surprises, no hidden charges.",
    color: "text-accent",
  },
];

export default function TrustSignals() {
  return (
    <section className="section-padding bg-surface border-y border-border">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Why Choose Key 2 BHP?
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto">
            We built this business on trust, fast response, and getting the job done right first time.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.title}
                className="flex gap-4 p-5 rounded-lg bg-surface-2 border border-border"
              >
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className={`h-5 w-5 ${signal.color}`} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{signal.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
