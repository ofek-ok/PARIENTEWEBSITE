"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/lib/constants";
import { Calendar, Clock, ExternalLink, Filter } from "lucide-react";

export interface ScheduleItem {
  day: string;
  time: string;
  title: string;
  category: "kids" | "teens" | "adults" | "competition" | "community";
  instructor?: string;
}

const SAMPLE_SCHEDULE: ScheduleItem[] = [
  { day: "ראשון", time: "אימוני אחה״צ והערב", title: "ג'יו ג'יטסו ילדים, נוער ובוגרים", category: "adults" },
  { day: "שני", time: "אימוני בוקר וערב", title: "MMA ואגרוף תאילנדי", category: "adults" },
  { day: "שלישי", time: "אימוני אחה״צ והערב", title: "סנסאי אבא ואימון אחים לחיים", category: "community" },
  { day: "רביעי", time: "אימוני אחה״צ והערב", title: "ג'יו ג'יטסו ברזילאי מזרן פתוח", category: "adults" },
  { day: "חמישי", time: "אימוני בוקר וערב", title: "MMA ילדים, נוער ובוגרים", category: "competition" },
  { day: "שישי", time: "אימוני בוקר וצהריים", title: "ספארינג תחרותי ומזרן פתוח", category: "competition" },
];

export const ScheduleGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "arbox">("grid");

  const filteredSchedule = activeFilter === "all"
    ? SAMPLE_SCHEDULE
    : SAMPLE_SCHEDULE.filter((item) => item.category === activeFilter);

  const days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי"];

  return (
    <div className="space-y-8 text-right">
      {/* Mode & Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-[#0d0f13] border border-zinc-800 rounded-2xl">
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          <Filter className="w-4 h-4 text-[#f3c010] shrink-0 ml-1" />
          {[
            { id: "all", label: "כל האימונים" },
            { id: "kids", label: "ילדים (4–12)" },
            { id: "teens", label: "נוער (13–17)" },
            { id: "competition", label: "מסלול תחרותי" },
            { id: "adults", label: "בוגרים" },
            { id: "community", label: "יוזמות קהילתיות" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                activeFilter === tab.id
                  ? "bg-[#f3c010] text-[#060709]"
                  : "bg-zinc-900 text-zinc-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              viewMode === "grid" ? "bg-zinc-800 text-white border border-zinc-700" : "text-zinc-400 hover:text-white"
            }`}
          >
            תצוגה חזותית
          </button>
          <button
            type="button"
            onClick={() => setViewMode("arbox")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
              viewMode === "arbox" ? "bg-[#f3c010] text-[#060709]" : "bg-zinc-800 text-zinc-300 hover:text-white"
            }`}
          >
            <span>אפליקציית Arbox</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>

      {viewMode === "arbox" ? (
        <Card variant="solid" className="p-2 sm:p-4 border-[#f3c010]/30 overflow-hidden bg-[#0d0f13]">
          <div className="flex items-center justify-between pb-3 px-2 border-b border-zinc-800">
            <span className="text-xs font-bold text-zinc-400">מערכת שעות לייב — Arbox</span>
            <Badge variant="gold" size="sm">
              מערכת הרשמה
            </Badge>
          </div>
          <iframe
            src={SITE_CONFIG.contact.arboxScheduleUrl}
            className="w-full h-[650px] rounded-xl border-0 bg-white"
            title="Pariente Academy Arbox Schedule"
          />
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {days.map((day) => {
            const daySessions = filteredSchedule.filter((s) => s.day === day);
            if (daySessions.length === 0) return null;

            return (
              <Card key={day} variant="solid" className="space-y-4 border-zinc-800 bg-[#0d0f13]">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#f3c010]" />
                    יום {day}
                  </h3>
                  <Badge variant="subtle" size="sm">
                    {daySessions.length} אימונים
                  </Badge>
                </div>

                <div className="space-y-3">
                  {daySessions.map((session, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#060709] border border-zinc-800/80 hover:border-[#f3c010]/40 transition-colors flex items-center justify-between"
                    >
                      <div className="space-y-0.5">
                        <span className="text-sm font-bold text-white block">
                          {session.title}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-[#f3c010] font-semibold">
                          <Clock className="w-3 h-3" />
                          <span>{session.time}</span>
                        </div>
                      </div>
                      <Badge
                        variant={
                          session.category === "kids"
                            ? "gold"
                            : session.category === "competition"
                            ? "amber"
                            : "subtle"
                        }
                        size="sm"
                      >
                        {session.category === "kids" ? "ילדים" : session.category === "competition" ? "תחרותי" : "בוגרים"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};
