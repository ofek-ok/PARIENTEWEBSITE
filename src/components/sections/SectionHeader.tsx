import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightedTitleWord?: string;
  description?: string;
  align?: "right" | "center" | "left";
  className?: string;
  badgeVariant?: "gold" | "amber" | "outline" | "subtle";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightedTitleWord,
  description,
  align = "right",
  className,
  badgeVariant = "gold",
}) => {
  const alignmentClasses = {
    right: "text-right items-start",
    center: "text-center items-center mx-auto",
    left: "text-left items-end ml-auto",
  };

  const renderTitle = () => {
    if (!highlightedTitleWord || !title.includes(highlightedTitleWord)) {
      return title;
    }
    const parts = title.split(highlightedTitleWord);
    return (
      <>
        {parts[0]}
        <span className="text-[#f3c010] font-black">{highlightedTitleWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={cn("flex flex-col max-w-3xl mb-10 sm:mb-14 space-y-3.5", alignmentClasses[align], className)}>
      {badge && (
        <Badge variant={badgeVariant} size="md">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-display">
        {renderTitle()}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
