import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, ChevronRight, Globe, Facebook, Building2 } from "lucide-react";
import { BUSINESS } from "@/lib/utils";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { blogTopics } from "@/lib/data/blog-topics";

export default function Footer() {
  const year = new Date().getFullYear();
  const topServices = services.slice(0, 6);
  const topLocations = locations.slice(0, 6);
  const topBlogPosts = blogTopics.slice(0, 5);

  return (
    <footer className="bg-surface border-t border-border">
      {/* Main footer grid */}
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand column — spans 2 on lg */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Link href="/" aria-label="Key 2 BHP Auto Locksmith — Home">
                <Image
                  src="/logo.webp"
                  alt="Key 2 BHP Auto Locksmith Manchester logo"
                  width={182}
                  height={92}
                  className="h-14 w-auto rounded-sm"
                />
              </Link>
            </div>
            <p className="text-sm text-foreground-muted mb-6 leading-relaxed">
              24/7 mobile auto locksmith serving Manchester and Greater Manchester. Car key replacement, emergency lockout, and key programming across all Greater Manchester postcodes.
            </p>
            {/* NAP */}
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start gap-2 text-foreground-muted">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>{BUSINESS.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="text-foreground hover:text-accent transition-colors font-medium"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <Clock className="h-4 w-4 text-accent shrink-0" />
                <span>24/7 — 365 days a year</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-accent shrink-0" />
                <a
                  href="https://key2bhpautolocksmith.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors font-medium"
                >
                  key2bhpautolocksmith.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="h-4 w-4 text-accent shrink-0" />
                <a
                  href={BUSINESS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors font-medium"
                >
                  Facebook
                </a>
              </div>
            </address>

            {/* Company registration — E-E-A-T trust signal */}
            <div className="mt-5 pt-5 border-t border-border">
              <div className="flex items-start gap-2 text-xs text-foreground-muted">
                <Building2 className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                <div className="space-y-1 leading-relaxed">
                  <p className="font-medium text-foreground">{BUSINESS.legalName}</p>
                  <p>Registered in England &amp; Wales</p>
                  <p>
                    Company No.{" "}
                    <a
                      href={BUSINESS.companiesHouseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {BUSINESS.companyNumber}
                    </a>
                  </p>
                  <p>Reg. office: {BUSINESS.address.full}</p>
                  <p>Incorporated: {BUSINESS.incorporatedOn}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-1.5 text-sm text-foreground-muted hover:text-accent transition-colors group"
                  >
                    <ChevronRight className="h-3 w-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
                >
                  → All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Areas We Cover</h3>
            <ul className="space-y-2">
              {topLocations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="flex items-center gap-1.5 text-sm text-foreground-muted hover:text-accent transition-colors group"
                  >
                    <ChevronRight className="h-3 w-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {loc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
                >
                  → All Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog + Quick links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Blog & Advice</h3>
            <ul className="space-y-2">
              {topBlogPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-start gap-1.5 text-sm text-foreground-muted hover:text-accent transition-colors group"
                  >
                    <ChevronRight className="h-3 w-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                    <span className="line-clamp-2 leading-snug">{post.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
                >
                  → All Blog Posts
                </Link>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-surface-2 rounded-lg border border-border">
              <p className="text-xs text-foreground-muted mb-2">Locked out? Call now:</p>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="text-lg font-bold text-accent hover:text-accent-hover transition-colors"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
          <p className="text-xs text-foreground-muted">
            &copy; {year} {BUSINESS.legalName}. All rights reserved.
            {" "}·{" "}
            <a
              href={BUSINESS.companiesHouseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Co. No. {BUSINESS.companyNumber}
            </a>
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/contact" className="text-xs text-foreground-muted hover:text-accent transition-colors">Contact</Link>
            <Link href="/sitemap.xml" className="text-xs text-foreground-muted hover:text-accent transition-colors">Sitemap</Link>
            <p className="text-xs text-foreground-muted">
              Based in{" "}
              <Link href="/locations/denton" className="text-accent hover:underline">
                Denton, Manchester
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
