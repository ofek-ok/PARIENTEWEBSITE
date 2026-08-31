import React from "react";
import { Container } from "./Container";
import { Section } from "./Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SegmentId, SEGMENT_CONFIGS } from "@/lib/conversion";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

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
  const sectionTitle = title || `Ready to Experience ${config.shortLabel}?`;
  const sectionDescription = description || config.formSubtitle;
  const buttonText = ctaText || config.ctaLabel;
  const buttonHref = ctaHref || `#${config.formAnchorId}`;
  const buttonSubtext = subtext || config.ctaSubtext;

  const defaultBenefits = [
    "No long-term contract required",
    "Professional black belt coaching",
    "Supportive & welcoming atmosphere",
  ];

  const activeBenefits = benefits || defaultBenefits;

  return (
    <Section variant="accent" className="border-t border-blue-500/20">
      <Container size="default">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950/40 border border-blue-500/25 shadow-2xl overflow-hidden text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Background ambient glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-2xl z-10">
            <Badge variant="blue" size="md" className="gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              {sectionBadge}
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {sectionTitle}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 font-normal">
              {sectionDescription}
            </p>

            {activeBenefits.length > 0 && (
              <ul className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-6 text-sm text-zinc-400">
                {activeBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col items-center shrink-0 w-full sm:w-auto z-10 space-y-3">
            {/* Context-Dependent Dominant CTA Button */}
            <Button
              variant="glow"
              size="xl"
              href={buttonHref}
              className="w-full sm:w-auto min-w-[260px] text-lg py-4"
              rightIcon={<ArrowRight className="w-5 h-5" />}
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
