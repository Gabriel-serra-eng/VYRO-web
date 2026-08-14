type ServiceLinkProps = {
  title: string;
  detail: string;
  href: string;
};

export function ServiceLink({ title, detail, href }: ServiceLinkProps) {
  return (
    <a
      href={href}
      className="group flex flex-col gap-4 rounded-2xl border border-obsidian-800/10 bg-white p-8 shadow-[0_18px_40px_-30px_rgba(29,41,55,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(124,59,255,0.35)]"
    >
      <h3 className="text-xl font-black text-obsidian-800">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{detail}</p>
      <span className="mt-2 inline-flex items-center gap-2 font-[family-name:var(--font-brand)] text-sm font-semibold text-magenta-600 transition-transform duration-300 group-hover:translate-x-1">
        Saiba mais
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
