"use client";

import React, { useState } from "react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export interface ContactFormProps {
  defaultProgram?: string;
  formTitle?: string;
  formSubtitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultProgram = "general",
  formTitle = "Book Your Free Trial Class",
  formSubtitle = "Select your preferred program. Our coaching team will reach out within 24 hours.",
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    program: defaultProgram,
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submission handler
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card variant="glass" className="p-8 sm:p-10 text-center space-y-6 border-blue-500/40">
        <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500 flex items-center justify-center text-blue-400 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <Badge variant="blue">Registration Received</Badge>
          <h3 className="text-2xl font-bold text-white">We&apos;ll See You On The Mat!</h3>
          <p className="text-sm text-zinc-300 max-w-md mx-auto">
            Thank you, {formData.fullName || "there"}. Our academy team will contact you at {formData.phone || "your phone number"} shortly to confirm your session schedule.
          </p>
        </div>
        <Button variant="outline" size="md" onClick={() => setSubmitted(false)}>
          Submit Another Inquiry
        </Button>
      </Card>
    );
  }

  return (
    <Card variant="glass" className="p-6 sm:p-10 space-y-6 border-zinc-800">
      <div className="space-y-2">
        <Badge variant="blue" className="gap-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          No Risk • Free Trial Session
        </Badge>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{formTitle}</h3>
        <p className="text-sm text-zinc-400">{formSubtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name *"
          placeholder="e.g. David Cohen"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Phone Number *"
            type="tel"
            placeholder="05X-XXXXXXX"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="name@domain.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
            Target Audience / Program *
          </label>
          <select
            value={formData.program}
            onChange={(e) => setFormData({ ...formData, program: e.target.value })}
            className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-zinc-100 text-sm font-medium focus:outline-none focus:border-blue-500 min-h-[48px]"
          >
            <option value="general">Select Program...</option>
            <option value="kids">Children (Ages 4–12)</option>
            <option value="teens">Teenagers (Ages 13–17)</option>
            <option value="competition">Competitive Youth Track (Ages 13–21)</option>
            <option value="adults">Adults BJJ / MMA / Muay Thai (22–45)</option>
            <option value="sensei-aba">Sensei Aba (Father & Child Initiative)</option>
            <option value="achim-lachaim">Achim LaChaim (Wounded Soldiers Project)</option>
          </select>
        </div>

        <Textarea
          label="Additional Notes / Experience Level"
          placeholder="Tell us if you have previous martial arts experience or specific goals..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />

        {/* DOMINANT FORM CTA BUTTON */}
        <Button
          variant="glow"
          size="lg"
          type="submit"
          fullWidth
          rightIcon={<ArrowRight className="w-4 h-4" />}
          className="mt-2"
        >
          Confirm Free Trial Booking
        </Button>
      </form>
    </Card>
  );
};
