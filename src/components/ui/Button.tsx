import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
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
      "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";

    const variants = {
      primary:
        "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 border border-blue-500/30",
      glow:
        "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(0,102,255,0.4)] hover:shadow-[0_0_45px_rgba(0,102,255,0.6)] border border-blue-400/40 font-bold",
      secondary:
        "bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-zinc-700 shadow-sm",
      outline:
        "bg-transparent text-zinc-200 border border-zinc-700 hover:border-blue-500 hover:text-white hover:bg-blue-600/10",
      ghost:
        "bg-transparent text-zinc-300 hover:text-white hover:bg-zinc-800/60",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 min-h-[36px]",
      md: "text-sm px-5 py-2.5 min-h-[44px]",
      lg: "text-base px-7 py-3.5 min-h-[50px]",
      xl: "text-lg px-8 py-4 min-h-[56px]",
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
