"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Areas We Cover" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Key 2 BHP Home">
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground-muted hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
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

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-1.5 text-sm font-bold text-accent"
            aria-label="Call us"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xs:inline">{BUSINESS.phoneDisplay}</span>
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

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-surface">
          <nav className="container flex flex-col py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-2 text-sm font-medium text-foreground-muted hover:text-accent transition-colors border-b border-border last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button asChild size="lg" className="w-full">
                <a href={`tel:${BUSINESS.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call {BUSINESS.phoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
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
