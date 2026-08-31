"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MAIN_NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeaderProps {
  ctaLabel?: string;
  ctaHref?: string;
}

export const Header: React.FC<HeaderProps> = ({
  ctaLabel = "קביעת אימון ניסיון",
  ctaHref = "#lead-form",
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const programItems = MAIN_NAV_ITEMS.filter((item) =>
    ["/kids", "/teens", "/competition", "/adults", "/sensei-aba", "/achim-lachaim"].includes(
      item.href
    )
  );

  const topDirectLinks = MAIN_NAV_ITEMS.filter(
    (item) => !["/kids", "/teens", "/competition", "/adults", "/sensei-aba", "/achim-lachaim"].includes(item.href)
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#040406]/98 border-zinc-800/90 py-2.5 shadow-2xl"
          : "bg-gradient-to-b from-[#040406] via-[#040406]/90 to-transparent border-transparent py-3 sm:py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Pariente Lion Crest Logo (Right side in RTL) */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* eslint-disable-next-html-element-for-img */}
            <img
              src="/images/logo_main.svg"
              alt="Pariente Academy Logo"
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links (Middle in RTL) */}
          <nav className="hidden lg:flex items-center space-x-1 space-x-reverse xl:space-x-2 xl:space-x-reverse">
            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-zinc-200 hover:text-[#f3c010] transition-colors rounded-lg hover:bg-zinc-900/80"
                onClick={() => setProgramsOpen((prev) => !prev)}
              >
                <span>מסלולי אימון</span>
                <ChevronDown
                  className={cn("w-4 h-4 transition-transform duration-200", programsOpen && "rotate-180")}
                />
              </button>

              {programsOpen && (
                <div className="absolute top-full right-0 w-72 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-[#0d0f13] border border-zinc-800 rounded-2xl p-3 shadow-2xl space-y-1 text-right">
                    {programItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setProgramsOpen(false)}
                        className="flex flex-col p-2.5 rounded-xl hover:bg-zinc-900 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-zinc-200 group-hover:text-[#f3c010] transition-colors">
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#f3c010]/15 text-[#f3c010] border border-[#f3c010]/30">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <span className="text-xs text-zinc-500 font-normal">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            {topDirectLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-bold text-zinc-200 hover:text-[#f3c010] transition-colors rounded-lg hover:bg-zinc-900/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Left Action Area (Left side in RTL) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="flex items-center gap-2 text-xs font-bold text-zinc-200 hover:text-[#f3c010] transition-colors py-2 px-3 rounded-lg hover:bg-zinc-900/80"
            >
              <Phone className="w-3.5 h-3.5 text-[#f3c010]" />
              <span>{SITE_CONFIG.contact.phone}</span>
            </a>

            <Button variant="gold" size="md" href={ctaHref}>
              {ctaLabel}
            </Button>
          </div>

          {/* Mobile Navigation Trigger */}
          <MobileNav ctaLabel={ctaLabel} ctaHref={ctaHref} />
        </div>
      </div>
    </header>
  );
};
