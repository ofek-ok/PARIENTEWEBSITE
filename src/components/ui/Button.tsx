import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "glow";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";

    const variants = {
      primary:
        "bg-gradient-to-r from-[#ff931e] to-[#ff1805] text-white shadow-lg shadow-red-900/30 hover:shadow-red-600/40 hover:-translate-y-0.5 border border-red-500/30",
      glow:
        "bg-gradient-to-r from-[#ff931e] to-[#ff1805] text-white shadow-lg shadow-red-900/30 hover:shadow-red-600/40 hover:-translate-y-0.5 border border-red-500/30", // Mapped glow -> warm primary
      gold:
        "border border-[#f3c010] bg-[#f3c010]/10 text-white hover:bg-[#f3c010] hover:text-[#060709] hover:shadow-[0_0_20px_rgba(243,192,16,0.35)]",
      secondary:
        "bg-[#14171e] hover:bg-zinc-800 text-white border border-zinc-700 hover:border-[#f3c010] hover:text-[#f3c010]",
      outline:
        "bg-transparent text-zinc-200 border border-zinc-700 hover:border-[#f3c010] hover:text-[#f3c010] hover:bg-zinc-900/50",
      ghost:
        "bg-transparent text-zinc-300 hover:text-[#f3c010] hover:bg-zinc-900/50",
    };

    const sizes = {
      sm: "text-xs px-4 py-2 min-h-[36px]",
      md: "text-sm px-6 py-2.5 min-h-[44px]",
      lg: "text-base px-8 py-3.5 min-h-[50px]",
      xl: "text-lg px-9 py-4 min-h-[56px]",
    };

    const combinedClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {leftIcon && <span className="mr-2 flex items-center shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="ml-2 flex items-center shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} disabled={disabled} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
