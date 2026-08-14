"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export type AccordionItemData = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItemData[];
  defaultOpen?: number;
};

export function Accordion({ items, defaultOpen = -1 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = bodyRef.current;
    const inner = innerRef.current;
    if (!body || !inner) return;

    if (isOpen) {
      gsap.to(body, { height: inner.offsetHeight, duration: 0.45, ease: "power3.out" });
      gsap.fromTo(inner, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.35, delay: 0.05 });
    } else {
      gsap.to(body, { height: 0, duration: 0.35, ease: "power3.inOut" });
    }
  }, [isOpen]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex min-h-14 w-full items-center justify-between gap-4 px-6 py-5 text-left font-[family-name:var(--font-brand)] font-medium text-white"
      >
        {item.question}
        <span
          aria-hidden="true"
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-lg text-magenta-400 transition-transform duration-300",
            isOpen && "rotate-45 border-magenta-400/60",
          )}
        >
          +
        </span>
      </button>
      <div ref={bodyRef} style={{ height: 0, overflow: "hidden" }} className="px-6">
        <div ref={innerRef} className="pb-6 text-sm leading-relaxed text-neutral-400">
          {item.answer}
        </div>
      </div>
    </div>
  );
}
