"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  viewAllHref: string;
  viewAllLabel: string;
}

export default function NavDropdown({
  label,
  items,
  viewAllHref,
  viewAllLabel,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors",
          open ? "text-accent" : "text-foreground-muted hover:text-accent"
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-xl border border-border bg-surface shadow-xl shadow-black/30 z-50 overflow-hidden"
        >
          <div className="p-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-2 transition-colors group"
              >
                {item.icon && (
                  <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    {item.label}
                  </p>
                  {item.description && (
                    <p className="text-xs text-foreground-muted mt-0.5 line-clamp-1">
                      {item.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="border-t border-border p-2">
            <Link
              href={viewAllHref}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              {viewAllLabel} →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
