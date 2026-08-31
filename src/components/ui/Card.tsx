import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glowOnHover?: boolean;
  variant?: "default" | "solid" | "glass" | "bordered";
}

export const Card: React.FC<CardProps> = ({
  className,
  hoverEffect = true,
  glowOnHover = false,
  variant = "glass",
  children,
  ...props
}) => {
  const variantStyles = {
    glass: "glass-panel text-zinc-100",
    default: "bg-zinc-900/90 text-zinc-100 border border-zinc-800/80 shadow-md",
    solid: "bg-zinc-950 text-zinc-100 border border-zinc-900",
    bordered: "bg-transparent text-zinc-100 border border-zinc-800",
  };

  const hoverStyles = hoverEffect
    ? "transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700"
    : "";

  const glowStyles = glowOnHover ? "hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10" : "";

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 relative overflow-hidden",
        variantStyles[variant],
        hoverStyles,
        glowStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
