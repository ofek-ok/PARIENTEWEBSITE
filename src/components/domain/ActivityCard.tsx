import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Users } from "lucide-react";

export interface ActivityCardProps {
  title: string;
  badge: string;
  badgeVariant?: "gold" | "amber" | "outline" | "subtle";
  targetAudience: string;
  emotionalHook: string;
  description: string;
  keyPoints?: string[];
  ctaHref: string;
  ctaLabel?: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  badge,
  badgeVariant = "gold",
  targetAudience,
  emotionalHook,
  description,
  keyPoints = [],
  ctaHref,
  ctaLabel = "למידע נוסף והרשמה",
}) => {
  return (
    <Card hoverEffect className="flex flex-col justify-between h-full group bg-[#0d0f13] border-zinc-800">
      <div className="space-y-4 text-right">
        <div className="flex items-center justify-between gap-2">
          <Badge variant={badgeVariant}>{badge}</Badge>
          <span className="text-xs font-medium text-zinc-400 flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-zinc-500" />
            {targetAudience}
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-[#f3c010] transition-colors">
            {title}
          </h3>
          <p className="text-xs font-semibold text-[#f3c010] uppercase tracking-wider mt-1">
            {emotionalHook}
          </p>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed">
          {description}
        </p>

        {keyPoints.length > 0 && (
          <ul className="space-y-2 pt-2 border-t border-zinc-800/60">
            {keyPoints.map((point, index) => (
              <li key={index} className="text-xs text-zinc-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f3c010] mt-1.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-6 mt-6 border-t border-zinc-800/80">
        <Button
          variant="gold"
          size="md"
          href={ctaHref}
          fullWidth
          leftIcon={<ArrowLeft className="w-4 h-4 ml-1 group-hover:-translate-x-1 transition-transform" />}
        >
          {ctaLabel}
        </Button>
      </div>
    </Card>
  );
};
