import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "gold" | "amber" | "outline" | "subtle" | "dark";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "gold",
  size = "md",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-bold rounded-full uppercase tracking-wider transition-colors";

  const variants = {
    gold: "bg-[#f3c010]/15 text-[#f3c010] border border-[#f3c010]/35",
    amber: "bg-amber-500/15 text-amber-400 border border-amber-500/35",
    outline: "bg-transparent text-zinc-300 border border-zinc-700",
    subtle: "bg-zinc-800 text-zinc-300 border border-zinc-700/60",
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
