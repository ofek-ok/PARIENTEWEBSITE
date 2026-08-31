"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

export interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  youtubeId = "haaRrTHKYJk",
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <button
        onClick={onClose}
        aria-label="סגירת סרטון"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-zinc-900/80 text-white border border-zinc-700 hover:border-[#f3c010] hover:text-[#f3c010] transition-all z-10 cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title="Pariente Academy Full Video"
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
