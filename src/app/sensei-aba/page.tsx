import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/sections/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CtaSection } from "@/components/sections/CtaSection";
import { SenseiAbaForm } from "@/components/conversion/SegmentForms";
import { MobileStickyCta } from "@/components/conversion/MobileStickyCta";
import { Heart, Shield, Smile } from "lucide-react";

export const metadata: Metadata = {
  title: "Sensei Aba - Father & Child Martial Arts Initiative",
  description: "A specialized father-child martial arts initiative focused on meaningful shared time and strengthening relationships on the mat.",
};

export default function SenseiAbaPage() {
  return (
    <div className="space-y-0">
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="gold">Father & Child Initiative</Badge>
              <Badge variant="subtle">Route: /sensei-aba</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display uppercase">
              SENSEI ABA <span className="text-blue-500 font-normal">סנסי אבא</span>
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              A unique martial arts initiative empowering fathers and their children to train together, bond deeply, and build lifelong values of trust and mutual respect.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="charcoal" size="md">
        <Container size="default">
          <SectionHeader
            badge="Meaningful Shared Time"
            title="Strengthening Father-Child Connection Through Martial Arts"
            description="Stepping onto the mat side-by-side to learn, laugh, sweat, and overcome challenges together."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="glass" className="space-y-3">
              <Heart className="w-8 h-8 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Quality Shared Time</h3>
              <p className="text-sm text-zinc-400">
                Stepping away from screens into active, dedicated father-child bonding time.
              </p>
            </Card>

            <Card variant="glass" className="space-y-3">
              <Shield className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Mutual Trust & Leadership</h3>
              <p className="text-sm text-zinc-400">
                Fathers lead by example while building deep mutual trust through martial arts drills.
              </p>
            </Card>

            <Card variant="glass" className="space-y-3">
              <Smile className="w-8 h-8 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Joy & Lasting Memories</h3>
              <p className="text-sm text-zinc-400">
                Creating unforgettable memories, shared achievements, and belt milestones together.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Sensei Aba Event / Interest Registration Form */}
      <Section variant="dark" size="md">
        <Container size="narrow">
          <SenseiAbaForm />
        </Container>
      </Section>

      <CtaSection
        segmentId="sensei-aba"
        badge="Father & Child"
        title="Experience Sensei Aba Together"
        description="Book your trial session for Sensei Aba at Pariente Academy."
      />

      <MobileStickyCta segmentId="sensei-aba" />
    </div>
  );
}
