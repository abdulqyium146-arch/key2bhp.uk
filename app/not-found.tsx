import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center py-20">
      <h1 className="text-7xl font-extrabold text-accent mb-4">404</h1>
      <h2 className="text-2xl font-bold text-foreground mb-3">Page Not Found</h2>
      <p className="text-foreground-muted max-w-md mb-8">
        The page you're looking for doesn't exist. If you need a locksmith right now, don't hang around — call us directly.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild size="lg">
          <a href={`tel:${BUSINESS.phone}`}>
            <Phone className="h-4 w-4 mr-2" />
            Call {BUSINESS.phoneDisplay}
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/">Back to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
