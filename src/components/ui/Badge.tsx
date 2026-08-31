import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "outline" | "gold" | "subtle" | "dark";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "blue",
  size = "md",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-semibold rounded-full uppercase tracking-wider transition-colors";

  const variants = {
    blue: "bg-blue-600/15 text-blue-400 border border-blue-500/30",
    outline: "bg-transparent text-zinc-300 border border-zinc-700",
    gold: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
    subtle: "bg-zinc-800/80 text-zinc-300 border border-zinc-700/60",
    dark: "bg-zinc-950 text-zinc-400 border border-zinc-800",
  };

  const sizes = {
    sm: "text-[10px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  return (
    <div className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </div>
  );
};
