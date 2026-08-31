import React from "react";
import { Container } from "./Container";
import { Section } from "./Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SegmentId, SEGMENT_CONFIGS } from "@/lib/conversion";
import { ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";

export interface CtaSectionProps {
  segmentId?: SegmentId;
  badge?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  benefits?: string[];
  subtext?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  segmentId = "general",
  badge,
  title,
  description,
  ctaText,
  ctaHref,
  benefits,
  subtext,
}) => {
  const config = SEGMENT_CONFIGS[segmentId] || SEGMENT_CONFIGS.general;

  const sectionBadge = badge || config.badge;
  const sectionTitle = title || `רוצים להתחיל ב-${config.shortLabel}?`;
  const sectionDescription = description || config.formSubtitle;
  const buttonText = ctaText || config.ctaLabel;
  const buttonHref = ctaHref || `#${config.formAnchorId}`;
  const buttonSubtext = subtext || config.ctaSubtext;

  const defaultBenefits = [
    "ללא התחייבות ארוכת טווח",
    "צוות מאמנים מוסמך בהובלת עידו פריינטה",
    "סביבת אימונים מקצועית ותומכת",
  ];

  const activeBenefits = benefits || defaultBenefits;

  return (
    <Section variant="charcoal" className="border-t border-zinc-800">
      <Container size="default">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-[#0d0f13] border border-zinc-800 shadow-2xl overflow-hidden text-right flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-2xl z-10">
            <Badge variant="gold" size="md" className="gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              {sectionBadge}
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-display">
              {sectionTitle}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 font-normal">
              {sectionDescription}
            </p>

            {activeBenefits.length > 0 && (
              <ul className="pt-2 flex flex-wrap items-center justify-start gap-y-2 gap-x-6 text-sm text-zinc-400">
                {activeBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f3c010] shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col items-center shrink-0 w-full sm:w-auto z-10 space-y-3">
            <Button
              variant="primary"
              size="xl"
              href={buttonHref}
              className="w-full sm:w-auto min-w-[260px] text-lg py-4"
              leftIcon={<ArrowLeft className="w-5 h-5 ml-1" />}
            >
              {buttonText}
            </Button>
            {buttonSubtext && (
              <p className="text-xs text-zinc-400 text-center">{buttonSubtext}</p>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
