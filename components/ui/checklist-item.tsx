import type { ReactNode } from "react";

export function ChecklistItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-14 items-start gap-4 border-b border-white/10 py-4 last:border-b-0">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-magenta-500/15 text-magenta-400">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <p className="text-base leading-relaxed text-neutral-200">{children}</p>
    </div>
  );
}
