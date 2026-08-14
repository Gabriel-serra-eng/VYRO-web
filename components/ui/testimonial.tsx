type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
};

export function Testimonial({ quote, name, role }: TestimonialProps) {
  return (
    <div className="flex h-full flex-col justify-between gap-6 rounded-2xl bg-obsidian-800 p-8 text-white shadow-[0_18px_40px_-30px_rgba(29,41,55,0.4)]">
      <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true" className="text-magenta-400">
        <path
          d="M0 24V14.4C0 6.4 4.8 1.2 12 0l1.6 3.2C9.2 4.4 6.8 7.2 6.4 11.2H12V24H0ZM18.4 24V14.4c0-8 4.8-13.2 12-14.4l1.6 3.2c-4.4 1.2-6.8 4-7.2 8h5.6V24H18.4Z"
          fill="currentColor"
        />
      </svg>
      <p className="text-base leading-relaxed text-neutral-200 italic">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-[family-name:var(--font-brand)] text-sm font-semibold text-white">{name}</p>
        <p className="text-xs text-neutral-400">{role}</p>
      </div>
    </div>
  );
}
