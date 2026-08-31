import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/sections/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CtaSection } from "@/components/sections/CtaSection";
import { CompetitionLeadForm } from "@/components/conversion/SegmentForms";
import { MobileStickyCta } from "@/components/conversion/MobileStickyCta";
import { Trophy, Zap, Crosshair } from "lucide-react";

export const metadata: Metadata = {
  title: "Competitive Youth & Championship Track (Ages 13–21)",
  description: "Elite combat sports training, national & international championship path for dedicated young athletes.",
};

export default function CompetitionPage() {
  return (
    <div className="space-y-0">
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="gold">Pro Track • Ages 13–21</Badge>
              <Badge variant="subtle">Route: /competition</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display uppercase">
              COMPETITIVE YOUTH <span className="text-blue-500">& PRO TRACK</span>
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              For athletes dedicated to serious competition, high performance, and winning national and international titles.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="charcoal" size="md">
        <Container size="default">
          <SectionHeader
            badge="Performance Architecture"
            title="The Path to National & International Gold"
            description="Championship-level coaching under Ido Pariente, structured sparring cycles, weight management, and mental toughness."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="glass" className="space-y-3 border-blue-500/30">
              <Trophy className="w-8 h-8 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Championship Pedigree</h3>
              <p className="text-sm text-zinc-400">
                Proven track record of podium finishes in Israeli BJJ, Grappling, and MMA championships.
              </p>
            </Card>

            <Card variant="glass" className="space-y-3 border-blue-500/30">
              <Zap className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">High-Intensity Sparring</h3>
              <p className="text-sm text-zinc-400">
                Dedicated competition rounds, technical game-planning, video analysis, and elite conditioning.
              </p>
            </Card>

            <Card variant="glass" className="space-y-3 border-blue-500/30">
              <Crosshair className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Mindset & Discipline</h3>
              <p className="text-sm text-zinc-400">
                Developing professional athlete discipline, weight cut protocols, and tactical resilience under pressure.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Competition Track Form */}
      <Section variant="dark" size="md">
        <Container size="narrow">
          <CompetitionLeadForm />
        </Container>
      </Section>

      <CtaSection
        segmentId="competition"
        badge="Champion Mindset"
        title="Are You Ready to Test Your Limits?"
        description="Book your trial session with the Pariente Competition Team."
      />

      <MobileStickyCta segmentId="competition" />
    </div>
  );
}
