type CaseCardProps = {
  metric: string;
  description: string;
  service: string;
  client: string;
};

export function CaseCard({ metric, description, service, client }: CaseCardProps) {
  return (
    <div className="flex h-full flex-col justify-between gap-6 rounded-2xl bg-white p-8 shadow-[0_18px_40px_-30px_rgba(29,41,55,0.4)]">
      <div className="flex flex-col gap-4">
        <p className="font-[family-name:var(--font-display)] text-2xl font-black uppercase text-magenta-600">
          {metric}
        </p>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-cream-200 px-3 py-1 font-medium text-obsidian-800">
          {service}
        </span>
        <span className="rounded-full bg-cream-200 px-3 py-1 font-medium text-obsidian-800">
          {client}
        </span>
      </div>
    </div>
  );
}
