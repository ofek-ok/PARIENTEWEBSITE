"use client";

import React, { useState } from "react";
import { SegmentId, SEGMENT_CONFIGS, ConditionalField } from "@/lib/conversion";
import { useUtmParams } from "./useUtmParams";
import { SegmentSelector } from "./SegmentSelector";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export interface LeadFormProps {
  initialSegmentId?: SegmentId;
  showSegmentSelector?: boolean;
  overrideTitle?: string;
  overrideSubtitle?: string;
  overrideCtaText?: string;
  showEmail?: boolean;
  hideFormHeader?: boolean;
  className?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  initialSegmentId = "general",
  showSegmentSelector = false,
  overrideTitle,
  overrideSubtitle,
  overrideCtaText,
  showEmail = false,
  hideFormHeader = false,
  className,
}) => {
  const utmParams = useUtmParams();
  const [selectedSegment, setSelectedSegment] = useState<SegmentId>(initialSegmentId);

  const config = SEGMENT_CONFIGS[selectedSegment] || SEGMENT_CONFIGS.general;

  const [formData, setFormData] = useState<{
    fullName: string;
    phone: string;
    email: string;
    notes: string;
    conditionalValues: Record<string, string>;
  }>({
    fullName: "",
    phone: "",
    email: "",
    notes: "",
    conditionalValues: {},
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConditionalChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      conditionalValues: {
        ...prev.conditionalValues,
        [fieldName]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      segmentId: selectedSegment,
      segmentTitle: config.title,
      conditionalData: formData.conditionalValues,
      notes: formData.notes,
      utm: utmParams,
      submittedAt: new Date().toISOString(),
    };

    console.log("[Lead Submitted]", payload);

    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card
        variant="solid"
        id={config.formAnchorId}
        className="p-8 sm:p-10 text-center space-y-6 border-[#f3c010]/40"
      >
        <div className="w-16 h-16 rounded-full bg-[#f3c010]/20 border border-[#f3c010] flex items-center justify-center text-[#f3c010] mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <Badge variant="gold">הפרטים התקבלו בהצלחה</Badge>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">תודה! נחזור אליך בהקדם</h3>
          <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
            תודה <strong className="text-white">{formData.fullName}</strong>. צוות המאמנים יחזור אליך למספר <strong className="text-white">{formData.phone}</strong> בהקדם.
          </p>
        </div>
        <Button variant="outline" size="md" onClick={() => setSubmitted(false)}>
          שליחת פנייה נוספת
        </Button>
      </Card>
    );
  }

  return (
    <Card
      variant="solid"
      id={config.formAnchorId}
      className={`p-6 sm:p-10 space-y-6 border-zinc-800 bg-[#0d0f13] ${className || ""}`}
    >
      {!hideFormHeader && (
        <div className="space-y-2 text-right">
          <Badge variant="gold" className="gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            {config.badge}
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {overrideTitle || config.formTitle}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {overrideSubtitle || config.formSubtitle}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 text-right">
        {/* Visual Segment Selector */}
        {(showSegmentSelector || initialSegmentId === "general") && (
          <SegmentSelector
            selectedSegment={selectedSegment}
            onSelectSegment={(segId) => {
              setSelectedSegment(segId);
              setFormData((prev) => ({ ...prev, conditionalValues: {} }));
            }}
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="שם מלא *"
            placeholder="שם מלא"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
          <Input
            label="טלפון *"
            type="tel"
            placeholder="05X-XXXXXXX"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        {/* Email field rendered only if showEmail is explicitly true */}
        {showEmail && (
          <Input
            label="כתובת אימייל (רשות)"
            type="email"
            placeholder="name@domain.co.il"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        )}

        {/* Conditional Program Specific Fields */}
        {config.conditionalFields && config.conditionalFields.length > 0 && (
          <div className="p-4 rounded-xl bg-[#060709] border border-zinc-800 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#f3c010]">
              פרטים נוספים למסלול שנבחר
            </p>
            {config.conditionalFields.map((field: ConditionalField) => (
              <div key={field.name} className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                  {field.label} {field.required && "*"}
                </label>

                {field.type === "select" && (
                  <select
                    required={field.required}
                    value={formData.conditionalValues[field.name] || ""}
                    onChange={(e) => handleConditionalChange(field.name, e.target.value)}
                    className="w-full px-4 py-3 bg-[#0d0f13] border border-zinc-800 rounded-xl text-zinc-100 text-sm font-medium focus:outline-none focus:border-[#f3c010] min-h-[48px]"
                  >
                    <option value="">בחרו באפשרות המתאימה...</option>
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                )}

                {field.type === "radio" && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {field.options?.map((opt) => {
                      const isChecked = formData.conditionalValues[field.name] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => handleConditionalChange(field.name, opt.value)}
                          className={`px-3.5 py-2 rounded-lg text-xs font-bold border transition-colors ${
                            isChecked
                              ? "bg-[#f3c010] text-[#060709] border-[#f3c010]"
                              : "bg-[#0d0f13] text-zinc-300 border-zinc-800 hover:border-zinc-700"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                )}

                {field.type === "text" && (
                  <input
                    type="text"
                    required={field.required}
                    placeholder={field.placeholder}
                    value={formData.conditionalValues[field.name] || ""}
                    onChange={(e) => handleConditionalChange(field.name, e.target.value)}
                    className="w-full px-4 py-3 bg-[#0d0f13] border border-zinc-800 rounded-xl text-zinc-100 text-sm font-medium focus:outline-none focus:border-[#f3c010] min-h-[48px]"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        <Textarea
          label="הערות או שאלות נוספות"
          placeholder="שאלות לגבי האימון, ניסיון קודם..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />

        {/* Hidden UTM Attribution Input Fields */}
        <input type="hidden" name="utm_source" value={utmParams.utm_source} />
        <input type="hidden" name="utm_medium" value={utmParams.utm_medium} />
        <input type="hidden" name="utm_campaign" value={utmParams.utm_campaign} />
        <input type="hidden" name="utm_content" value={utmParams.utm_content} />
        <input type="hidden" name="utm_term" value={utmParams.utm_term} />

        <Button
          variant="primary"
          size="lg"
          type="submit"
          disabled={isSubmitting}
          fullWidth
          className="mt-2 text-base py-3.5"
        >
          {isSubmitting ? "שולח פרטים..." : overrideCtaText || config.ctaLabel}
        </Button>
      </form>
    </Card>
  );
};
