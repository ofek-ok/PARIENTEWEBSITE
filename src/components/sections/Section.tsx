import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "dark" | "charcoal" | "lighter" | "accent" | "bordered" | "light" | "lightBrand";
  size?: "sm" | "md" | "lg" | "xl";
}

export const Section: React.FC<SectionProps> = ({
  className,
  variant = "dark",
  size = "md",
  children,
  ...props
}) => {
  const variantStyles = {
    dark: "bg-[#060709] text-zinc-100",
    charcoal: "bg-[#0d0f13] text-zinc-100",
    lighter: "bg-[#14171e] text-zinc-100",
    accent: "bg-gradient-to-b from-[#0e1017] to-[#060709] text-zinc-100",
    bordered: "bg-[#060709] border-y border-zinc-800/80 text-zinc-100",
    light: "bg-[#f4f3ee] text-[#0a0b0e]",
    lightBrand: "bg-[#e8e5db] text-[#0a0b0e]",
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
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
