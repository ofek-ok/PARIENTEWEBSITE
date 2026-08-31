import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/sections/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { GalleryGrid } from "@/components/domain/GalleryGrid";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Academy Gallery & Media",
  description: "High-quality photography, competition footage, and training atmosphere at Pariente Academy Kfar Saba.",
};

export default function GalleryPage() {
  return (
    <div className="space-y-0">
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="gold">Media & Atmosphere</Badge>
              <Badge variant="subtle">Route: /gallery</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display uppercase">
              ACADEMY <span className="text-[#f3c010]">GALLERY</span>
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              Real training footage, belt ceremonies, competition podiums, and the athletic culture of Pariente Academy.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="charcoal" size="md">
        <Container size="default">
          <SectionHeader
            badge="Real Photography & Clips"
            title="Life On The Mat"
            description="Media container shells ready for high-resolution photography and video embeds."
          />
          <GalleryGrid />
        </Container>
      </Section>

      <CtaSection
        badge="Join The Family"
        title="Be Part of Our Next Victory"
        description="Book your free trial class today."
      />
    </div>
  );
}
