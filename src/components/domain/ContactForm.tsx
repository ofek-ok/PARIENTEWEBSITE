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
      <Card variant="glass" className="p-8 sm:p-10 text-center space-y-6 border-[#f3c010]/40">
        <div className="w-16 h-16 rounded-full bg-[#f3c010]/15 border border-[#f3c010] flex items-center justify-center text-[#f3c010] mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <Badge variant="gold">Registration Received</Badge>
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
        <Badge variant="gold" className="gap-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          No Risk • Free Trial Session
        </Badge>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{formTitle}</h3>
        <p className="text-sm text-zinc-400">{formSubtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="שם מלא *"
          placeholder="לדוגמה: דוד כהן"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="מספר טלפון *"
            type="tel"
            placeholder="05X-XXXXXXX"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <Input
            label="כתובת אימייל"
            type="email"
            placeholder="name@domain.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
            איזה מסלול מעניין אותך? *
          </label>
          <select
            value={formData.program}
            onChange={(e) => setFormData({ ...formData, program: e.target.value })}
            className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-zinc-100 text-sm font-medium focus:outline-none focus:border-[#f3c010] min-h-[48px]"
          >
            <option value="general">בחירת מסלול...</option>
            <option value="kids">ילדים (גילאי 4–12)</option>
            <option value="teens">נוער (גילאי 13–17)</option>
            <option value="competition">מסלול נוער תחרותי</option>
            <option value="adults">בוגרים</option>
            <option value="sensei-aba">סנסאי אבא (אבות וילדים)</option>
            <option value="achim-lachaim">אחים לחיים (שיקום וקהילה)</option>
          </select>
        </div>

        <Textarea
          label="הערות / רמת ניסיון"
          placeholder="ספרו לנו אם יש לכם ניסיון קודם או מטרה ספציפית..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />

        <div className="space-y-3 pt-2">
          {/* DOMINANT FORM CTA BUTTON */}
          <Button
            variant="glow"
            size="lg"
            type="submit"
            fullWidth
            rightIcon={<ArrowRight className="w-4 h-4 ml-1 rotate-180" />}
          >
            לתיאום אימון ניסיון חינם
          </Button>

          <p className="text-[11px] text-zinc-500 text-center px-4 leading-relaxed">
            שליחת הטופס מהווה אישור לשימוש בפרטים לצורך טיפול בפנייה בהתאם ל<a href="/privacy" className="text-[#f3c010] hover:underline focus:outline-none focus:ring-1 focus:ring-[#f3c010] rounded-sm">מדיניות הפרטיות</a>.
          </p>
        </div>
      </form>
    </Card>
  );
};
