import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/sections/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { EventCard } from "@/components/domain/EventCard";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Events & Competitions",
  description: "Upcoming martial arts tournaments, seminars, open mat sessions, and championships at Pariente Academy.",
};

export default function EventsPage() {
  return (
    <div className="space-y-0">
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="blue">Academy Calendar</Badge>
              <Badge variant="subtle">Route: /events</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display uppercase">
              EVENTS <span className="text-blue-500">& COMPETITIONS</span>
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              Stay updated on upcoming BJJ championships, MMA fight nights, masterclass seminars, open mats, and academy events.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="charcoal" size="md">
        <Container size="default">
          <SectionHeader
            badge="Upcoming Schedule"
            title="Championships & Academy Seminars"
            description="Dynamic event listing shell ready for dynamic CMS or backend integration."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EventCard
              title="Israeli National BJJ Championship"
              date="[Upcoming Date]"
              location="Tel Aviv Sports Complex"
              category="National Tournament"
            />
            <EventCard
              title="Masterclass Seminar by Ido Pariente"
              date="[Upcoming Date]"
              location="Pariente Academy Kfar Saba"
              category="Academy Seminar"
            />
            <EventCard
              title="Statewide Open Mat & Sparring Session"
              date="[Upcoming Date]"
              location="Pariente Academy Kfar Saba"
              category="Open Mat"
            />
          </div>
        </Container>
      </Section>

      <CtaSection
        badge="Stay Involved"
        title="Ready to Join the Academy?"
        description="Book your trial class and start your martial arts journey."
      />
    </div>
  );
}
