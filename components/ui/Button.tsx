import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer",
          {
            "bg-brand-orange text-white hover:bg-orange-600 shadow-md hover:shadow-lg":
              variant === "primary",
            "bg-brand-navy text-white hover:bg-slate-800 shadow-md hover:shadow-lg":
              variant === "secondary",
            "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white":
              variant === "outline",
            "hover:bg-slate-100 text-slate-700": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
