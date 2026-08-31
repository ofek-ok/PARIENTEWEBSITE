import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/sections/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CtaSection } from "@/components/sections/CtaSection";
import { TeensLeadForm } from "@/components/conversion/SegmentForms";
import { MobileStickyCta } from "@/components/conversion/MobileStickyCta";
import { Flame, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Teenagers Martial Arts & Self-Defense (Ages 13–17)",
  description: "Confidence, real self-defense skills, fitness, social belonging and growth without competition pressure.",
};

export default function TeensPage() {
  return (
    <div className="space-y-0">
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="blue">Ages 13–17</Badge>
              <Badge variant="subtle">Route: /teens</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display uppercase">
              TEENAGERS <span className="text-blue-500">SPORT & SELF DEFENSE</span>
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              Build true confidence, athletic conditioning, practical self-defense, and strong social connections in an empowering environment.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="charcoal" size="md">
        <Container size="default">
          <SectionHeader
            badge="Teen Empowerment"
            title="Belonging, Strength & Real Skills"
            description="Designed for teens who want fitness and martial arts skill without mandatory competition pressure."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="glass" className="space-y-3">
              <Flame className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Peak Athletic Fitness</h3>
              <p className="text-sm text-zinc-400">
                Functional strength, agility, cardio endurance, and body awareness that translates to all sports.
              </p>
            </Card>

            <Card variant="glass" className="space-y-3">
              <Shield className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Realistic Self-Defense</h3>
              <p className="text-sm text-zinc-400">
                Proven Brazilian Jiu-Jitsu and striking techniques for real-world confidence and personal safety.
              </p>
            </Card>

            <Card variant="glass" className="space-y-3">
              <Users className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Positive Social Tribe</h3>
              <p className="text-sm text-zinc-400">
                Train alongside peers who uplift each other, build lifelong friendships, and share healthy habits.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Segment-Specific Lead Form */}
      <Section variant="dark" size="md">
        <Container size="narrow">
          <TeensLeadForm />
        </Container>
      </Section>

      <CtaSection
        segmentId="teens"
        badge="Take The First Step"
        title="Find Your Strength & Your Squad"
        description="Book your trial class and start training at Pariente Academy."
      />

      <MobileStickyCta segmentId="teens" />
    </div>
  );
}
