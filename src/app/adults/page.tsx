import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/sections/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CtaSection } from "@/components/sections/CtaSection";
import { AdultsLeadForm } from "@/components/conversion/SegmentForms";
import { MobileStickyCta } from "@/components/conversion/MobileStickyCta";
import { Dumbbell, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Adult Martial Arts, BJJ & MMA (Ages 22–45+)",
  description: "High-level training, functional fitness, martial arts structure, and strong community for adults in Kfar Saba.",
};

export default function AdultsPage() {
  return (
    <div className="space-y-0">
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="gold">Ages 22–45+</Badge>
              <Badge variant="subtle">Route: /adults</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display uppercase">
              ADULT BJJ, MMA <span className="text-[#f3c010]">& COMMUNITY TRIBE</span>
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              World-class instruction in Brazilian Jiu-Jitsu, MMA, and Muay Thai combined with a supportive community for adults after military service and working professionals.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="charcoal" size="md">
        <Container size="default">
          <SectionHeader
            badge="Adult Program Pillars"
            title="Fitness, Discipline & Lifelong Tribe"
            description="Whether your goal is black belt mastery, stress release, top-tier conditioning, or self-defense, Pariente Academy provides a structured home."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="glass" className="space-y-3">
              <Shield className="w-8 h-8 text-[#f3c010]" />
              <h3 className="text-lg font-bold text-white">BJJ, MMA & Muay Thai</h3>
              <p className="text-sm text-zinc-400">
                Fundamental through advanced classes in Gi BJJ, No-Gi Grappling, Striking, and Mixed Martial Arts.
              </p>
            </Card>

            <Card variant="glass" className="space-y-3">
              <Dumbbell className="w-8 h-8 text-[#f3c010]" />
              <h3 className="text-lg font-bold text-white">Full-Body Conditioning</h3>
              <p className="text-sm text-zinc-400">
                Burn calories, increase mobility, build functional core power, and relieve daily workplace stress.
              </p>
            </Card>

            <Card variant="glass" className="space-y-3">
              <Users className="w-8 h-8 text-[#f3c010]" />
              <h3 className="text-lg font-bold text-white">Unbeatable Community</h3>
              <p className="text-sm text-zinc-400">
                Join a welcoming squad of men and women who train hard, support each other, and grow together.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Adult Lead Form */}
      <Section variant="dark" size="md">
        <Container size="narrow">
          <AdultsLeadForm />
        </Container>
      </Section>

      <CtaSection
        segmentId="adults"
        badge="Start Training Today"
        title="Transform Your Fitness & Mastery"
        description="Experience a trial class at Kfar Saba's top combat sports academy."
      />

      <MobileStickyCta segmentId="adults" />
    </div>
  );
}
