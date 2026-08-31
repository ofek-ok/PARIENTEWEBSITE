"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
  { day: "Sunday", time: "17:00", title: "BJJ Kids (4–12)", category: "kids" },
  { day: "Sunday", time: "18:00", title: "BJJ Teens (13–17)", category: "teens" },
  { day: "Sunday", time: "19:00", title: "BJJ Adults Gi", category: "adults" },
  { day: "Monday", time: "10:30", title: "Morning BJJ Adults", category: "adults" },
  { day: "Monday", time: "17:00", title: "MMA Kids Development", category: "kids" },
  { day: "Monday", time: "18:00", title: "MMA Youth Competition", category: "competition" },
  { day: "Monday", time: "19:00", title: "Muay Thai Adults", category: "adults" },
  { day: "Monday", time: "20:00", title: "No-Gi Submission Grappling", category: "adults" },
  { day: "Tuesday", time: "17:00", title: "Jimbo Jitsu Kids", category: "kids" },
  { day: "Tuesday", time: "19:00", title: "Achim LaChaim Special Session", category: "community" },
  { day: "Tuesday", time: "20:00", title: "Adult MMA Sparring", category: "adults" },
  { day: "Wednesday", time: "17:00", title: "BJJ Kids Fundamentals", category: "kids" },
  { day: "Wednesday", time: "18:00", title: "BJJ Teens Technique", category: "teens" },
  { day: "Wednesday", time: "19:00", title: "BJJ Adults Advanced", category: "adults" },
  { day: "Thursday", time: "10:30", title: "Morning Grappling", category: "adults" },
  { day: "Thursday", time: "17:00", title: "MMA Kids", category: "kids" },
  { day: "Thursday", time: "18:00", title: "MMA Teens", category: "teens" },
  { day: "Thursday", time: "19:00", title: "BJJ Adults", category: "adults" },
  { day: "Friday", time: "10:00", title: "Adult Open Mat BJJ", category: "adults" },
  { day: "Friday", time: "13:00", title: "Muay Thai Sparring", category: "adults" },
  { day: "Friday", time: "14:00", title: "Pro Team MMA Sparring", category: "competition" },
];

export const ScheduleGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "arbox">("grid");

  const filteredSchedule = activeFilter === "all"
    ? SAMPLE_SCHEDULE
    : SAMPLE_SCHEDULE.filter((item) => item.category === activeFilter);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="space-y-8">
      {/* Mode & Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl">
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          <Filter className="w-4 h-4 text-blue-400 shrink-0 mr-1" />
          {[
            { id: "all", label: "All Classes" },
            { id: "kids", label: "Kids (4–12)" },
            { id: "teens", label: "Teens (13–17)" },
            { id: "competition", label: "Pro Track" },
            { id: "adults", label: "Adults" },
            { id: "community", label: "Community Initiatives" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeFilter === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              viewMode === "grid" ? "bg-zinc-800 text-white border border-zinc-700" : "text-zinc-400 hover:text-white"
            }`}
          >
            Visual Grid
          </button>
          <button
            onClick={() => setViewMode("arbox")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              viewMode === "arbox" ? "bg-blue-600 text-white" : "bg-zinc-800 text-zinc-300 hover:text-white"
            }`}
          >
            <span>Arbox Live App</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>

      {viewMode === "arbox" ? (
        <Card variant="glass" className="p-2 sm:p-4 border-blue-500/30 overflow-hidden">
          <div className="flex items-center justify-between pb-3 px-2 border-b border-zinc-800">
            <span className="text-xs font-semibold text-zinc-400">Live Arbox Registration Portal</span>
            <Badge variant="blue" size="sm">
              Live Embed
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
              <Card key={day} variant="glass" className="space-y-4 border-zinc-800">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    {day}
                  </h3>
                  <Badge variant="subtle" size="sm">
                    {daySessions.length} Sessions
                  </Badge>
                </div>

                <div className="space-y-3">
                  {daySessions.map((session, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800/80 hover:border-blue-500/40 transition-colors flex items-center justify-between"
                    >
                      <div className="space-y-0.5">
                        <span className="text-sm font-bold text-white block">
                          {session.title}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold">
                          <Clock className="w-3 h-3" />
                          <span>{session.time}</span>
                        </div>
                      </div>
                      <Badge
                        variant={
                          session.category === "kids"
                            ? "gold"
                            : session.category === "competition"
                            ? "blue"
                            : "subtle"
                        }
                        size="sm"
                      >
                        {session.category}
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
