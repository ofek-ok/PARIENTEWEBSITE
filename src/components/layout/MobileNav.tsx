"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MAIN_NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Menu, X, Phone, ArrowLeft, Shield } from "lucide-react";

export interface MobileNavProps {
  ctaLabel?: string;
  ctaHref?: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  ctaLabel = "קביעת אימון ניסיון",
  ctaHref = "#lead-form",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prev) => !prev);
  const closeNav = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleNav}
        aria-label="פתיחת תפריט"
        className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white hover:border-zinc-700 transition-colors focus:outline-none"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Slide-out Backdrop Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-50 bg-[#08090b]/98 backdrop-blur-xl border-t border-zinc-800/80 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200 text-right">
          <div className="p-6 space-y-6">
            <div className="space-y-1 pb-4 border-b border-zinc-800/60">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
                מסלולים ועמודי האקדמיה
              </p>
            </div>

            <nav className="flex flex-col space-y-2">
              {MAIN_NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeNav}
                  className="flex items-center justify-between py-3 px-4 rounded-xl text-base font-bold text-zinc-200 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all"
                >
                  <div className="flex flex-col">
                    <span>{item.label}</span>
                    {item.description && (
                      <span className="text-xs font-normal text-zinc-500">{item.description}</span>
                    )}
                  </div>
                  {item.badge ? (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      {item.badge}
                    </span>
                  ) : (
                    <ArrowLeft className="w-4 h-4 text-zinc-600" />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Fixed bottom action strip inside drawer */}
          <div className="p-6 bg-[#090a0c] border-t border-zinc-800/80 space-y-3">
            <Button
              variant="primary"
              size="lg"
              href={ctaHref}
              onClick={closeNav}
              fullWidth
              leftIcon={<ArrowLeft className="w-4 h-4 ml-1" />}
            >
              {ctaLabel}
            </Button>
            <div className="flex items-center justify-between text-xs text-zinc-400 px-1 pt-1">
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </a>
              <span className="flex items-center gap-1 text-zinc-500">
                <Shield className="w-3.5 h-3.5 text-blue-500/80" />
                {SITE_CONFIG.location.city}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
