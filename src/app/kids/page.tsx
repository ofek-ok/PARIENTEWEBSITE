import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/sections/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CtaSection } from "@/components/sections/CtaSection";
import { KidsLeadForm } from "@/components/conversion/SegmentForms";
import { MobileStickyCta } from "@/components/conversion/MobileStickyCta";
import { Heart, ShieldCheck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Children's Martial Arts (Ages 4–12)",
  description: "Confidence, discipline, respect and long-term personal development for kids ages 4–12 in Kfar Saba.",
};

export default function KidsPage() {
  return (
    <div className="space-y-0">
      {/* Hero Shell */}
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="gold">Ages 4–12</Badge>
              <Badge variant="subtle">Route: /kids</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display uppercase">
              CHILDREN&apos;S <span className="text-blue-500">DEVELOPMENT PROGRAM</span>
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              Not just another after-school activity. Building confidence, respect, discipline, and emotional strength for life.
            </p>
          </div>
        </Container>
      </Section>

      {/* Conflict -> Journey Shell */}
      <Section variant="charcoal" size="md">
        <Container size="default">
          <SectionHeader
            badge="Parent & Child Journey"
            title="More Than Martial Arts: Character Development"
            description="Framework structured around Conflict (overcoming bullying/shyness), Journey (supportive coaching & progress), Proof (parent reviews & belt milestones), and Invitation."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="glass" className="space-y-3">
              <Heart className="w-8 h-8 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Safe & Supportive Environment</h3>
              <p className="text-sm text-zinc-400">
                Warm, ego-free mat atmosphere where every child feels valued, safe, and encouraged.
              </p>
            </Card>

            <Card variant="glass" className="space-y-3">
              <ShieldCheck className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Anti-Bullying & Self-Defense</h3>
              <p className="text-sm text-zinc-400">
                Practical anti-bullying strategies that build self-worth without encouraging aggression.
              </p>
            </Card>

            <Card variant="glass" className="space-y-3">
              <Award className="w-8 h-8 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Focus & Discipline</h3>
              <p className="text-sm text-zinc-400">
                Improved attention span, body awareness, coordination, and respect for teachers and parents.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Segment-Specific Lead Form Section */}
      <Section variant="dark" size="md">
        <Container size="narrow">
          <KidsLeadForm />
        </Container>
      </Section>

      <CtaSection
        segmentId="kids"
        badge="Parents First"
        title="Watch Your Child Bloom On The Mat"
        description="Experience a trial session together. Parents are always welcome to watch and support."
      />

      <MobileStickyCta segmentId="kids" />
    </div>
  );
}
