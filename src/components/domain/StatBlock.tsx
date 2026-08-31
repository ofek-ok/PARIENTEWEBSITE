import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface StatBlockProps {
  number: string;
  label: string;
  description?: string;
  isPlaceholder?: boolean;
}

export const StatBlock: React.FC<StatBlockProps> = ({
  number = "[STAT]",
  label = "Metric Title Placeholder",
  description,
  isPlaceholder = true,
}) => {
  return (
    <Card hoverEffect className="text-center flex flex-col items-center justify-center p-6 sm:p-8">
      {isPlaceholder && (
        <Badge variant="subtle" size="sm" className="mb-2">
          Content Pending
        </Badge>
      )}
      <div className="text-4xl sm:text-5xl font-black text-white tracking-tight text-[#f3c010] font-display">
        {number}
      </div>
      <div className="text-sm font-bold text-zinc-200 uppercase tracking-wider mt-2">
        {label}
      </div>
      {description && (
        <p className="text-xs text-zinc-400 mt-1 max-w-xs">{description}</p>
      )}
    </Card>
  );
};
