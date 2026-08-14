type PillarItemProps = {
  index: number;
  title: string;
  detail: string;
};

export function PillarItem({ index, title, detail }: PillarItemProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-magenta-400/40">
      <span className="font-[family-name:var(--font-display)] text-3xl font-black text-magenta-400">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="text-lg font-black text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-neutral-400">{detail}</p>
    </div>
  );
}
