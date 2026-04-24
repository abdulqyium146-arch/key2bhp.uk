import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { reviews } from "@/lib/data/reviews";
import { BUSINESS } from "@/lib/utils";

interface ReviewsSectionProps {
  title?: string;
  limit?: number;
}

export default function ReviewsSection({
  title = "What Customers Say",
  limit = 6,
}: ReviewsSectionProps) {
  const displayReviews = reviews.slice(0, limit);

  return (
    <section className="section-padding bg-background">
      <div className="container">
        {/* Header with aggregate */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">{title}</h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">{BUSINESS.rating}</span>
          </div>
          <p className="text-foreground-muted">
            Based on {BUSINESS.reviewCount}+ reviews from customers across Greater Manchester
          </p>
        </div>

        {/* Review grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayReviews.map((review, idx) => (
            <Card key={idx} className="flex flex-col">
              <CardContent className="p-5 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-xs text-foreground-muted">
                    {new Date(review.date).toLocaleDateString("en-GB", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <p className="text-sm text-foreground-muted leading-relaxed flex-1 mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="border-t border-border pt-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{review.author}</p>
                    <p className="text-xs text-foreground-muted">{review.location}</p>
                  </div>
                  <span className="text-xs font-medium text-accent bg-accent/10 rounded-full px-2.5 py-0.5">
                    {review.service}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
