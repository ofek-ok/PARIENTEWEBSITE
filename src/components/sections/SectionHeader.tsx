import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightedTitleWord?: string;
  description?: string;
  align?: "right" | "center" | "left";
  theme?: "dark" | "light" | "yellow";
  className?: string;
  badgeVariant?: "gold" | "amber" | "outline" | "subtle";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightedTitleWord,
  description,
  align = "right",
  theme = "dark",
  className,
  badgeVariant = "gold",
}) => {
  const alignmentClasses = {
    right: "text-right items-start",
    center: "text-center items-center mx-auto",
    left: "text-left items-end ml-auto",
  };

  const titleColorClass =
    theme === "yellow"
      ? "text-[#060709]"
      : theme === "light"
      ? "text-[#0a0b0e]"
      : "text-white";

  const descriptionColorClass =
    theme === "yellow"
      ? "text-[#1a1c23] font-medium"
      : theme === "light"
      ? "text-[#3a3d46]"
      : "text-zinc-300";

  const renderTitle = () => {
    if (!highlightedTitleWord || !title.includes(highlightedTitleWord)) {
      return title;
    }
    const parts = title.split(highlightedTitleWord);
    return (
      <>
        {parts[0]}
        <span className={theme === "yellow" ? "text-white font-black drop-shadow-md" : "text-[#f3c010] font-black"}>
          {highlightedTitleWord}
        </span>
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
      <h2 className={cn("text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-display", titleColorClass)}>
        {renderTitle()}
      </h2>
      {description && (
        <p className={cn("text-base sm:text-lg font-normal leading-relaxed", descriptionColorClass)}>
          {description}
        </p>
      )}
    </div>
  );
};
