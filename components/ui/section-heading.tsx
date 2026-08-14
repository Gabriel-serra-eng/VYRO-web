import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  lead?: ReactNode;
  tone?: "on-dark" | "on-light";
  align?: "left" | "center";
  size?: "display-1" | "display-2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  lead,
  tone = "on-light",
  align = "left",
  size = "display-2",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "on-dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          size === "display-1" ? "text-[clamp(44px,5vw,84px)]" : "text-[clamp(34px,3.8vw,56px)]",
          "leading-[0.94]",
          isDark ? "text-white" : "text-obsidian-800",
        )}
      >
        {title} {accent ? <span className="text-magenta-400">{accent}</span> : null}
      </h2>
      {lead ? (
        <p
          className={cn(
            "max-w-xl text-lg leading-relaxed",
            align === "center" && "mx-auto",
            isDark ? "text-neutral-400" : "text-slate-600",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
