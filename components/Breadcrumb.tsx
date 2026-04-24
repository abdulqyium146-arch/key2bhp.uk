import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BUSINESS } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${BUSINESS.siteUrl}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="bg-surface border-b border-border"
      >
        <div className="container py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm">
            {allItems.map((item, index) => (
              <li key={index} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 text-border shrink-0" aria-hidden="true" />
                )}
                {index === 0 && (
                  <Home className="h-3.5 w-3.5 text-foreground-muted mr-0.5" aria-hidden="true" />
                )}
                {item.href && index < allItems.length - 1 ? (
                  <Link
                    href={item.href}
                    className="text-foreground-muted hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="text-foreground font-medium"
                    aria-current={index === allItems.length - 1 ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
