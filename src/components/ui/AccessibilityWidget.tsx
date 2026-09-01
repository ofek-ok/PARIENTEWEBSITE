"use client";

import React, { useState, useEffect } from "react";
import { useAccessibility } from "@/components/providers/AccessibilityProvider";
import { 
  Accessibility, 
  X, 
  ZoomIn, 
  Contrast, 
  Link as LinkIcon, 
  PlaySquare, 
  RotateCcw 
} from "lucide-react";

export const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const {
    highContrast,
    highlightLinks,
    largeText,
    reducedMotion,
    toggleHighContrast,
    toggleHighlightLinks,
    toggleLargeText,
    toggleReducedMotion,
    resetAll,
  } = useAccessibility();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-[144px] left-6 lg:bottom-28 lg:left-8 z-[110] font-sans">
      {/* Widget Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="הגדרות נגישות"
        aria-expanded={isOpen}
        className="w-12 h-12 lg:w-14 lg:h-14 bg-[#0d0f13] hover:bg-[#14171e] border-2 border-zinc-700 hover:border-[#f3c010] text-zinc-300 hover:text-[#f3c010] rounded-full shadow-2xl flex items-center justify-center transition-all group focus:outline-none focus:ring-2 focus:ring-[#f3c010] focus:ring-offset-2 focus:ring-offset-[#060709]"
      >
        <Accessibility className="w-6 h-6 lg:w-7 lg:h-7" />
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <div 
          className="absolute bottom-16 left-0 lg:bottom-20 lg:left-0 w-72 lg:w-80 bg-[#0d0f13] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-right animate-in fade-in slide-in-from-bottom-4 duration-200"
          role="dialog"
          aria-label="תפריט נגישות"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-800/80 bg-[#060709]">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Accessibility className="w-4 h-4 text-[#f3c010]" />
              תפריט נגישות
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="סגור תפריט נגישות"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3c010]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Controls */}
          <div className="p-2 overflow-y-auto max-h-[60vh]">
            <div className="space-y-1">
              <ControlToggle 
                label="הגדלת טקסט" 
                icon={<ZoomIn className="w-4 h-4" />}
                isActive={largeText} 
                onClick={toggleLargeText} 
              />
              <ControlToggle 
                label="ניגודיות גבוהה" 
                icon={<Contrast className="w-4 h-4" />}
                isActive={highContrast} 
                onClick={toggleHighContrast} 
              />
              <ControlToggle 
                label="הדגשת קישורים" 
                icon={<LinkIcon className="w-4 h-4" />}
                isActive={highlightLinks} 
                onClick={toggleHighlightLinks} 
              />
              <ControlToggle 
                label="ביטול אנימציות" 
                icon={<PlaySquare className="w-4 h-4" />}
                isActive={reducedMotion} 
                onClick={toggleReducedMotion} 
              />
            </div>
          </div>

          {/* Footer actions */}
          <div className="p-3 border-t border-zinc-800/80 bg-[#060709] space-y-2">
            <button
              onClick={resetAll}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3c010]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              איפוס הגדרות נגישות
            </button>
            <a 
              href="/accessibility" 
              className="block text-center w-full py-2 rounded-lg text-xs font-medium text-[#f3c010] hover:bg-[#f3c010]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3c010]"
            >
              להצהרת הנגישות המלאה
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

interface ControlToggleProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const ControlToggle: React.FC<ControlToggleProps> = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    aria-pressed={isActive}
    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#f3c010] ${
      isActive 
        ? "bg-[#f3c010]/10 border border-[#f3c010]/30 text-[#f3c010]" 
        : "bg-transparent border border-transparent text-zinc-300 hover:bg-zinc-800 hover:text-white"
    }`}
  >
    <div className="flex items-center gap-3">
      {icon}
      <span className="text-sm font-bold">{label}</span>
    </div>
    <div className={`w-10 h-5 rounded-full relative transition-colors ${isActive ? "bg-[#f3c010]" : "bg-zinc-700"}`}>
      <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${isActive ? "left-1" : "right-1"}`} />
    </div>
  </button>
);
