import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 min-h-12 text-sm font-semibold tracking-wide transition-transform duration-200 ease-out will-change-transform active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-magenta-500 to-indigo-500 text-neutral-050 shadow-glow-magenta hover:brightness-110",
  secondary:
    "glass text-neutral-050 hover:border-indigo-400/60",
  ghost: "text-neutral-200 hover:text-neutral-050",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", className, children, ...props },
  ref,
) {
  return (
    <button ref={ref} className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </button>
  );
});

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { variant = "primary", className, children, ...props },
  ref,
) {
  return (
    <a ref={ref} className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </a>
  );
});
