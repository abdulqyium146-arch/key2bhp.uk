"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { BUSINESS } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import NavDropdown from "@/components/NavDropdown";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";

const serviceDropdownItems = services.map((s) => ({
  label: s.name,
  href: `/services/${s.slug}`,
  description: s.tagline,
  icon: s.icon,
}));

const locationDropdownItems = locations.map((l) => ({
  label: l.name,
  href: `/locations/${l.slug}`,
  description: l.county,
}));

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="Key 2 BHP Home">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
            <span className="text-lg font-black text-black">K2</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-none text-foreground">Key 2 BHP</p>
            <p className="text-xs text-foreground-muted leading-none mt-0.5">Auto Locksmith</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <NavDropdown
            label="Services"
            items={serviceDropdownItems}
            viewAllHref="/services"
            viewAllLabel="All Services"
          />
          <NavDropdown
            label="Areas We Cover"
            items={locationDropdownItems}
            viewAllHref="/locations"
            viewAllLabel="All Locations"
          />
          <Link
            href="/blog"
            className="text-sm font-medium text-foreground-muted hover:text-accent transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground-muted hover:text-accent transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phoneDisplay}
          </a>
          <Button asChild size="sm">
            <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </Button>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-1.5 text-sm font-bold text-accent"
            aria-label="Call us"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="p-2 text-foreground-muted hover:text-foreground"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-surface">
          <nav className="container flex flex-col py-3 gap-0" aria-label="Mobile navigation">
            {/* Services accordion */}
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between py-3 px-2 text-sm font-medium text-foreground-muted hover:text-accent border-b border-border"
            >
              <span>Services</span>
              <ChevronRight className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-90" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="bg-surface-2 border-b border-border">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 py-2.5 px-6 text-sm text-foreground-muted hover:text-accent"
                  >
                    <span className="text-base">{s.icon}</span>
                    {s.name}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 px-6 text-xs font-semibold text-accent"
                >
                  → View all services
                </Link>
              </div>
            )}

            {/* Locations accordion */}
            <button
              onClick={() => setMobileLocationsOpen((v) => !v)}
              className="flex items-center justify-between py-3 px-2 text-sm font-medium text-foreground-muted hover:text-accent border-b border-border"
            >
              <span>Areas We Cover</span>
              <ChevronRight className={`h-4 w-4 transition-transform ${mobileLocationsOpen ? "rotate-90" : ""}`} />
            </button>
            {mobileLocationsOpen && (
              <div className="bg-surface-2 border-b border-border">
                {locations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 px-6 text-sm text-foreground-muted hover:text-accent"
                  >
                    {l.name}
                  </Link>
                ))}
                <Link
                  href="/locations"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 px-6 text-xs font-semibold text-accent"
                >
                  → View all locations
                </Link>
              </div>
            )}

            <Link href="/blog" onClick={() => setMobileOpen(false)} className="py-3 px-2 text-sm font-medium text-foreground-muted hover:text-accent border-b border-border">Blog</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-3 px-2 text-sm font-medium text-foreground-muted hover:text-accent border-b border-border">Contact</Link>

            <div className="pt-4 pb-2 flex flex-col gap-2">
              <Button asChild size="lg" className="w-full">
                <a href={`tel:${BUSINESS.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call {BUSINESS.phoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full border-green-600 text-green-400 hover:bg-green-950">
                <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
