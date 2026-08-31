"use client";

import React from "react";
import { SegmentId, SEGMENT_CONFIGS } from "@/lib/conversion";
import { Users, Shield, Flame, Trophy, Heart, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SegmentSelectorProps {
  selectedSegment: SegmentId;
  onSelectSegment: (segmentId: SegmentId) => void;
  showAdviceOption?: boolean;
}

const SEGMENT_ICONS: Record<string, React.ReactNode> = {
  kids: <SmileIcon className="w-5 h-5" />,
  teens: <Flame className="w-5 h-5" />,
  competition: <Trophy className="w-5 h-5" />,
  adults: <Users className="w-5 h-5" />,
  "sensei-aba": <Heart className="w-5 h-5" />,
  "achim-lachaim": <Shield className="w-5 h-5" />,
  general: <HelpCircle className="w-5 h-5" />,
};

function SmileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

export const SegmentSelector: React.FC<SegmentSelectorProps> = ({
  selectedSegment,
  onSelectSegment,
  showAdviceOption = true,
}) => {
  const options: { id: SegmentId; label: string; badge: string }[] = [
    { id: "kids", label: "ילדים", badge: "גילאי 4–12" },
    { id: "teens", label: "נוער", badge: "גילאי 13–17" },
    { id: "competition", label: "מסלול תחרותי", badge: "מסלול תחרותי" },
    { id: "adults", label: "בוגרים", badge: "אימוני בוגרים" },
    { id: "sensei-aba", label: "סנסאי אבא", badge: "אבא וילד" },
  ];

  if (showAdviceOption) {
    options.push({ id: "general", label: "אחר", badge: "ייעוץ ומידע" });
  }

  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
        מה מעניין אתכם? *
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {options.map((opt) => {
          const isSelected = selectedSegment === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelectSegment(opt.id)}
              className={cn(
                "flex flex-col items-start p-3.5 rounded-xl border text-right transition-all duration-200 cursor-pointer min-h-[80px] justify-between",
                isSelected
                  ? "bg-[#f3c010]/10 border-[#f3c010] text-white shadow-lg"
                  : "bg-[#060709] border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900"
              )}
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className={cn(
                    "transition-colors",
                    isSelected ? "text-[#f3c010]" : "text-zinc-500"
                  )}
                >
                  {SEGMENT_ICONS[opt.id]}
                </span>
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded",
                    isSelected
                      ? "bg-[#f3c010]/20 text-[#f3c010]"
                      : "bg-zinc-800 text-zinc-400"
                  )}
                >
                  {opt.badge}
                </span>
              </div>
              <span className="text-xs font-bold mt-1.5 leading-tight">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
