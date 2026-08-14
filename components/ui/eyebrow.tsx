import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: ReactNode;
  tone?: "on-dark" | "on-light";
  className?: string;
};

export function Eyebrow({ children, tone = "on-light", className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-[family-name:var(--font-brand)] text-xs font-medium uppercase tracking-[0.14em]",
        tone === "on-dark"
          ? "border-white/15 text-magenta-400"
          : "border-obsidian-800/15 text-magenta-600",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}
