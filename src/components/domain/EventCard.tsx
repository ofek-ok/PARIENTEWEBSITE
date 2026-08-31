import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin, Trophy, ArrowRight } from "lucide-react";

export interface EventCardProps {
  title?: string;
  date?: string;
  location?: string;
  category?: string;
  description?: string;
  isPlaceholder?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({
  title = "National BJJ & Grappling Championship",
  date = "[Upcoming Event Date]",
  location = "Kfar Saba Sports Arena / Pariente Academy",
  category = "Competition",
  description = "Academy athletes competing in championship divisions. Open for team support and spectating.",
  isPlaceholder = true,
}) => {
  return (
    <Card hoverEffect className="flex flex-col justify-between h-full space-y-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="blue" size="sm" className="gap-1">
            <Trophy className="w-3 h-3 text-blue-400" />
            {category}
          </Badge>
          {isPlaceholder && (
            <Badge variant="subtle" size="sm">
              Event Shell
            </Badge>
          )}
        </div>

        <h3 className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <div className="space-y-1.5 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            <span>{location}</span>
          </div>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed pt-1">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-zinc-800/80">
        <Button
          variant="outline"
          size="sm"
          href="/events"
          fullWidth
          rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
        >
          View Event Details
        </Button>
      </div>
    </Card>
  );
};
