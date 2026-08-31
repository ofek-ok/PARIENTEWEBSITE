"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SegmentId, SEGMENT_CONFIGS } from "@/lib/conversion";

export interface MobileStickyCtaProps {
  segmentId?: SegmentId;
  ctaLabel?: string;
  targetAnchorId?: string;
  href?: string;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({
  segmentId = "general",
  ctaLabel,
  targetAnchorId,
  href,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const config = SEGMENT_CONFIGS[segmentId] || SEGMENT_CONFIGS.general;

  const label = ctaLabel || config.ctaLabel;
  const anchor = targetAnchorId || `#${config.formAnchorId}`;
  const targetHref = href || anchor;

  const handleClick = (e: React.MouseEvent) => {
    if (targetHref.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(targetHref);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const formEl = document.querySelector(anchor);
      if (formEl) {
        const rect = formEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(false);
          return;
        }
      }
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [anchor]);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#060709]/95 border-t border-zinc-800 shadow-2xl animate-in slide-in-from-bottom duration-200">
      <div className="max-w-md mx-auto flex items-center gap-3">
        <Button
          variant="primary"
          size="lg"
          href={targetHref}
          onClick={handleClick}
          fullWidth
          className="text-sm py-3.5"
        >
          {label}
        </Button>
      </div>
    </div>
  );
};
