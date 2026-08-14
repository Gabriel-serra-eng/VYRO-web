import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { HOME_FAQ } from "@/lib/constants/home-content";

export function Faq() {
  return (
    <section className="relative mx-4 mt-6 overflow-hidden rounded-[40px] bg-obsidian-900 px-6 py-24 sm:mx-6 sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-36 h-[520px] w-[520px] rounded-full blur-[20px]"
        style={{
          background: "radial-gradient(circle, rgba(124,59,255,.34), rgba(124,59,255,0) 68%)",
          animation: "faq-orb-a 18s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-44 -right-28 h-[600px] w-[600px] rounded-full blur-[26px]"
        style={{
          background: "radial-gradient(circle, rgba(159,115,255,.26), rgba(159,115,255,0) 70%)",
          animation: "faq-orb-b 24s ease-in-out infinite",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
        <div
          className="h-px w-full"
          style={{
            background: "linear-gradient(90deg, rgba(124,59,255,0), #9F73FF, rgba(124,59,255,0))",
            animation: "faq-sweep 6s linear infinite",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-[1000px] flex-col gap-12">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Dúvidas"
            title="Perguntas que você"
            accent="pode estar fazendo."
            tone="on-dark"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion items={HOME_FAQ} defaultOpen={0} />
        </ScrollReveal>
      </div>
    </section>
  );
}
