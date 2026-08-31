import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glowOnHover?: boolean;
  variant?: "solid" | "dark" | "bordered" | "panel" | "glass" | "default";
}

export const Card: React.FC<CardProps> = ({
  className,
  hoverEffect = true,
  glowOnHover,
  variant = "solid",
  children,
  ...props
}) => {
  const variantStyles = {
    solid: "bg-[#0d0f13] text-zinc-100 border border-zinc-800/90 shadow-xl",
    glass: "bg-[#0d0f13] text-zinc-100 border border-zinc-800/90 shadow-xl", // Mapped glass -> solid dark
    default: "bg-[#0d0f13] text-zinc-100 border border-zinc-800/90 shadow-xl",
    dark: "bg-[#060709] text-zinc-100 border border-zinc-800/80",
    panel: "bg-[#14171e] text-zinc-100 border border-zinc-800/80 shadow-md",
    bordered: "bg-transparent text-zinc-100 border border-zinc-800",
  };

  const hoverStyles = hoverEffect
    ? "transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl"
    : "";

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 relative overflow-hidden",
        variantStyles[variant],
        hoverStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
