import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline-on-dark" | "ghost";
type Size = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ease-out will-change-transform active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none font-[family-name:var(--font-brand)]";

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2 min-h-10 text-sm",
  md: "px-6 py-3 min-h-12 text-sm",
  lg: "px-8 py-4 min-h-[58px] text-base",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-magenta-500 text-white shadow-glow-magenta hover:bg-indigo-600 hover:-translate-y-0.5",
  secondary: "glass text-neutral-050 hover:border-indigo-400/60",
  "outline-on-dark":
    "border border-white/20 text-white hover:border-magenta-400 hover:text-magenta-400 hover:-translate-y-0.5",
  ghost: "text-neutral-200 hover:text-neutral-050",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
});

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { variant = "primary", size = "md", className, children, ...props },
  ref,
) {
  return (
    <a
      ref={ref}
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
});
