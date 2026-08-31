import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "dark" | "charcoal" | "lighter" | "accent" | "bordered";
  size?: "sm" | "md" | "lg" | "xl";
  hasGradientBorder?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  className,
  variant = "dark",
  size = "md",
  hasGradientBorder = false,
  children,
  ...props
}) => {
  const variantStyles = {
    dark: "bg-[#08090b] text-zinc-100",
    charcoal: "bg-[#0f1116] text-zinc-100",
    lighter: "bg-[#161821] text-zinc-100",
    accent: "bg-gradient-to-b from-[#0e1424] to-[#08090b] text-zinc-100",
    bordered: "bg-[#08090b] border-y border-zinc-800/80 text-zinc-100",
  };

  const sizeStyles = {
    sm: "py-10 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32",
    xl: "py-24 md:py-40",
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden w-full",
        variantStyles[variant],
        sizeStyles[size],
        hasGradientBorder && "border-t border-gradient-to-r from-transparent via-blue-500/20 to-transparent",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
