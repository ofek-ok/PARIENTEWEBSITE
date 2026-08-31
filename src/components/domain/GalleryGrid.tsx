import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Image as ImageIcon, Play } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  type: "photo" | "video";
  placeholderLabel?: string;
}

export interface GalleryGridProps {
  items?: GalleryItem[];
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  items = [
    { id: "1", title: "BJJ Championship & Belt Ceremony", category: "Competition", type: "photo", placeholderLabel: "[Official Photo Placeholder]" },
    { id: "2", title: "Youth Development & Sparring Session", category: "Kids & Teens", type: "photo", placeholderLabel: "[Official Photo Placeholder]" },
    { id: "3", title: "Adult MMA & No-Gi Workshop", category: "Adults", type: "video", placeholderLabel: "[Training Video Clip]" },
    { id: "4", title: "Achim LaChaim Special Session", category: "Community", type: "photo", placeholderLabel: "[Documentary Photo]" },
    { id: "5", title: "Sensei Aba Father & Child Training", category: "Sensei Aba", type: "photo", placeholderLabel: "[Shared Time Photo]" },
    { id: "6", title: "Pro Team Competition Preparation", category: "Competition", type: "video", placeholderLabel: "[Pro Fight Prep Clip]" },
  ],
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card
          key={item.id}
          hoverEffect
          className="group relative aspect-video bg-zinc-900/90 border-zinc-800 p-0 overflow-hidden flex flex-col justify-end"
        >
          {/* Visual Placeholder Box */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950/30 flex flex-col items-center justify-center p-6 text-center space-y-3 group-hover:scale-105 transition-transform duration-500">
            {item.type === "video" ? (
              <div className="w-12 h-12 rounded-full bg-blue-600/30 border border-blue-400 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Play className="w-5 h-5 ml-0.5" />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                <ImageIcon className="w-5 h-5" />
              </div>
            )}
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
              {item.placeholderLabel}
            </span>
          </div>

          {/* Overlay Info */}
          <div className="relative z-10 p-4 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent space-y-1">
            <Badge variant="blue" size="sm">
              {item.category}
            </Badge>
            <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
              {item.title}
            </h4>
          </div>
        </Card>
      ))}
    </div>
  );
};
