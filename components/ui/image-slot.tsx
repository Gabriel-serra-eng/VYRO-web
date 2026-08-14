import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageSlotProps = {
  label: string;
  src?: string;
  className?: string;
  priority?: boolean;
};

export function ImageSlot({ label, src, className, priority }: ImageSlotProps) {
  if (src) {
    return (
      <div className={cn("relative h-full w-full overflow-hidden", className)}>
        <Image src={src} alt={label} fill priority={priority} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative flex h-full w-full items-end overflow-hidden bg-gradient-to-br from-obsidian-700 via-obsidian-800 to-magenta-600/30 p-6",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(159,115,255,.35), transparent 55%), radial-gradient(circle at 80% 75%, rgba(124,59,255,.3), transparent 50%)",
        }}
      />
      <p className="relative max-w-sm font-[family-name:var(--font-brand)] text-xs leading-relaxed text-white/60">
        {label}
      </p>
    </div>
  );
}
