"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type MarqueeProps = {
  items: string[];
  size?: number;
};

export function Marquee({ items, size = 104 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      const loop = gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: items.length * 4,
        repeat: -1,
      });
      return () => loop.kill();
    }, track);

    return () => ctx.revert();
  }, [items.length]);

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div ref={trackRef} className="flex w-max items-center gap-10 will-change-transform">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 font-[family-name:var(--font-display)] font-black uppercase leading-none text-transparent"
            style={{
              fontSize: size,
              WebkitTextStroke: "1.5px rgba(255,255,255,0.35)",
            }}
          >
            {item}
            <span className="text-magenta-400" style={{ WebkitTextStroke: "0px" }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
