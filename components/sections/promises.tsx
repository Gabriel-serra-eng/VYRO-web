import { SectionHeading } from "@/components/ui/section-heading";
import { ChecklistItem } from "@/components/ui/checklist-item";
import { ImageSlot } from "@/components/ui/image-slot";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PROMISES } from "@/lib/constants/home-content";

export function Promises() {
  return (
    <section className="mx-4 mt-6 rounded-[40px] bg-obsidian-900 px-6 py-24 sm:mx-6 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] items-start gap-16 lg:grid-cols-2">
        <ScrollReveal className="flex flex-col gap-7">
          <SectionHeading
            eyebrow="Parceria de verdade"
            title="Você não contrata a VYRO para receber um relatório"
            accent="e sumir."
            tone="on-dark"
            lead="Nós acreditamos em trabalhar lado a lado. Você sabe do seu negócio. Nós entendemos de estratégia digital."
          />
          <div className="flex flex-col">
            {PROMISES.map((promise) => (
              <ChecklistItem key={promise}>{promise}</ChecklistItem>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="h-[420px] overflow-hidden rounded-3xl lg:h-[520px]">
          <ImageSlot label="Reunião real entre VYRO e cliente, conversando e analisando materiais — evitar pose corporativa artificial" />
        </ScrollReveal>
      </div>
    </section>
  );
}
