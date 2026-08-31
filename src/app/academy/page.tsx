import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/sections/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CtaSection } from "@/components/sections/CtaSection";
import { Shield, Award, Users, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Pariente Academy",
  description: "Learn about Pariente Academy, head coach Ido Pariente, our philosophy, and our combat sports heritage.",
};

export default function AcademyPage() {
  return (
    <div className="space-y-0">
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="space-y-4 max-w-3xl">
            <Badge variant="blue">Route: /academy</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display uppercase">
              ABOUT <span className="text-blue-500">PARIENTE ACADEMY</span>
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Founded in 2015 by Ido Pariente (&quot;The Hebrew Hammer&quot;), Pariente Academy is Israel&apos;s premier high-performance combat sports academy.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="charcoal" size="md">
        <Container size="default">
          <SectionHeader
            badge="Academy Heritage"
            title="Professional, Established & Values-Driven"
            description="Our academy shell structures history, leadership under Ido Pariente, coaching team, facility standards, and community philosophy."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="glass" className="space-y-3">
              <Shield className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Ido Pariente</h3>
              <p className="text-xs font-semibold text-blue-400 uppercase">Head Coach & BJJ 2nd Degree Black Belt</p>
              <p className="text-sm text-zinc-400">
                Over 25 years of professional fighting and coaching experience (&quot;The Hebrew Hammer&quot;).
              </p>
            </Card>

            <Card variant="glass" className="space-y-3">
              <Award className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Championship Standards</h3>
              <p className="text-xs font-semibold text-blue-400 uppercase">National & International Titles</p>
              <p className="text-sm text-zinc-400">
                Training national BJJ champions, MMA contenders, and elite martial artists across all ages.
              </p>
            </Card>

            <Card variant="glass" className="space-y-3">
              <MapPin className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Kfar Saba HQ</h3>
              <p className="text-xs font-semibold text-blue-400 uppercase">{SITE_CONFIG.location.fullAddress}</p>
              <p className="text-sm text-zinc-400">
                State-of-the-art mats, cage equipment, and family-welcoming atmosphere.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <CtaSection
        badge="Join The Academy"
        title="Experience Pariente Academy Firsthand"
        description="Book a free trial class and see why we are considered one of Israel's top combat sports institutions."
      />
    </div>
  );
}
