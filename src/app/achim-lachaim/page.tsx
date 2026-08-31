import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/sections/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { AchimLaChaimForm } from "@/components/conversion/SegmentForms";
import { MobileStickyCta } from "@/components/conversion/MobileStickyCta";
import { Shield, Heart, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Achim LaChaim Initiative - Wounded Soldiers Rehabilitation",
  description: "Pariente Academy's social & community initiative for the physical and mental rehabilitation of wounded Israeli soldiers.",
};

export default function AchimLaChaimPage() {
  return (
    <div className="space-y-0">
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="subtle">Community & Values Initiative</Badge>
              <Badge variant="subtle">Route: /achim-lachaim</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display uppercase">
              ACHIM LACHAIM <span className="text-[#f3c010] font-normal">אחים לחיים</span>
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              Supporting the physical and emotional recovery of wounded IDF veterans through martial arts, martial camaraderie, and brotherhood.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="charcoal" size="md">
        <Container size="default">
          <SectionHeader
            badge="Brand & Values Driven"
            title="Rehabilitation, Strength & Brotherhood"
            description="Providing a dedicated training sanctuary for injured soldiers to regain mobility, purpose, and community connection."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="glass" className="space-y-3">
              <HeartHandshake className="w-8 h-8 text-[#f3c010]" />
              <h3 className="text-lg font-bold text-white">Physical Rehabilitation</h3>
              <p className="text-sm text-zinc-400">
                Customized Brazilian Jiu-Jitsu and grappling movements tailored for injury recovery and physical resilience.
              </p>
            </Card>

            <Card variant="glass" className="space-y-3">
              <Shield className="w-8 h-8 text-[#f3c010]" />
              <h3 className="text-lg font-bold text-white">Mental & Emotional Support</h3>
              <p className="text-sm text-zinc-400">
                A safe, respectful environment helping veterans rebuild focus, confidence, and camaraderie.
              </p>
            </Card>

            <Card variant="glass" className="space-y-3">
              <Heart className="w-8 h-8 text-[#f3c010]" />
              <h3 className="text-lg font-bold text-white">Community & Respect</h3>
              <p className="text-sm text-zinc-400">
                Pariente Academy&apos;s commitment to giving back to those who defended our home and nation.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Values & Initiative Contact Form (Not a sales form) */}
      <Section variant="dark" size="md" className="border-t border-zinc-800">
        <Container size="narrow">
          <AchimLaChaimForm />
        </Container>
      </Section>

      <MobileStickyCta segmentId="achim-lachaim" />
    </div>
  );
}
