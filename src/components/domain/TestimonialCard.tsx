import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Quote } from "lucide-react";

export interface TestimonialCardProps {
  quote?: string;
  authorName?: string;
  authorRole?: string;
  programTag?: string;
  isPlaceholder?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote = "Real member testimonial content will be placed here during content creation phase.",
  authorName = "[Member / Parent Name]",
  authorRole = "[Academy Program Member]",
  programTag = "Verified Member",
  isPlaceholder = true,
}) => {
  return (
    <Card hoverEffect className="relative flex flex-col justify-between h-full bg-zinc-900/80 border-zinc-800">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Quote className="w-8 h-8 text-blue-500/40" />
          {isPlaceholder && (
            <Badge variant="subtle" size="sm">
              Placeholder
            </Badge>
          )}
        </div>
        <p className="text-sm sm:text-base text-zinc-300 italic leading-relaxed">
          &quot;{quote}&quot;
        </p>
      </div>

      <div className="pt-4 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-white">{authorName}</h4>
          <p className="text-xs text-zinc-400">{authorRole}</p>
        </div>
        <Badge variant="blue" size="sm">
          {programTag}
        </Badge>
      </div>
    </Card>
  );
};
