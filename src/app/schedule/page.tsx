import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/sections/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ScheduleGrid } from "@/components/domain/ScheduleGrid";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Training Schedule",
  description: "Weekly class schedule for Kids, Teens, Adults, BJJ, MMA, Muay Thai and Arbox live registration at Pariente Academy.",
};

export default function SchedulePage() {
  return (
    <div className="space-y-0">
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="gold">Weekly Timetable</Badge>
              <Badge variant="subtle">Route: /schedule</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display uppercase">
              TRAINING <span className="text-[#f3c010]">SCHEDULE</span>
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              Explore session times across Kids, Teens, Competition Track, Adults BJJ, MMA, No-Gi, and Muay Thai at our Kfar Saba academy.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="charcoal" size="md">
        <Container size="default">
          <SectionHeader
            badge="Arbox Integration Ready"
            title="Choose Your Class & Reserve Your Mat Spot"
            description="Filter sessions by audience age or discipline, or access our live Arbox portal directly."
          />
          <ScheduleGrid />
        </Container>
      </Section>

      <CtaSection
        badge="First Class Free"
        title="Find a Class That Fits Your Schedule"
        description="Book your free trial class today."
      />
    </div>
  );
}
