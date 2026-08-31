import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/sections/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GeneralLeadForm } from "@/components/conversion/SegmentForms";
import { MobileStickyCta } from "@/components/conversion/MobileStickyCta";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Location",
  description: "Contact Pariente Academy in Kfar Saba. Book a trial class, find facility directions, and view operating hours.",
};

export default function ContactPage() {
  return (
    <div className="space-y-0">
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="blue">Get In Touch</Badge>
              <Badge variant="subtle">Route: /contact</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display uppercase">
              CONTACT <span className="text-blue-500">PARIENTE ACADEMY</span>
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              We&apos;re here to answer your questions, schedule trial sessions, and welcome you to our Kfar Saba mat.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="charcoal" size="md">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Contact Info Col */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeader
                badge="Kfar Saba HQ"
                title="Visit Our Academy"
                description="Located on Weizmann Street in Kfar Saba with convenient parking and public transit access."
              />

              <div className="space-y-4">
                <Card variant="glass" className="flex items-start gap-4 p-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Address</h3>
                    <p className="text-sm text-zinc-300 mt-1">{SITE_CONFIG.location.fullAddress}</p>
                  </div>
                </Card>

                <Card variant="glass" className="flex items-start gap-4 p-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Phone / WhatsApp</h3>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone}`}
                      className="text-sm text-blue-400 hover:underline mt-1 block font-semibold"
                    >
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </Card>

                <Card variant="glass" className="flex items-start gap-4 p-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Email Inquiry</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-sm text-blue-400 hover:underline mt-1 block font-semibold"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </Card>

                <Card variant="glass" className="flex items-start gap-4 p-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Operating Hours</h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Sunday – Thursday: 10:00 – 21:30 <br />
                      Friday: 10:00 – 16:00
                    </p>
                  </div>
                </Card>

                <a
                  href={SITE_CONFIG.contact.arboxScheduleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors p-2"
                >
                  <span>Open Arbox Member Registration</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Trial Registration Form Col */}
            <div className="lg:col-span-7">
              <GeneralLeadForm showSegmentSelector />
            </div>
          </div>
        </Container>
      </Section>

      <MobileStickyCta segmentId="general" />
    </div>
  );
}
