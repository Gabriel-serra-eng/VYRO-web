import { SectionHeading } from "@/components/ui/section-heading";
import { CaseCard } from "@/components/ui/case-card";
import { Testimonial } from "@/components/ui/testimonial";
import { ImageSlot } from "@/components/ui/image-slot";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CASE_STUDY, CASE_TESTIMONIAL } from "@/lib/constants/home-content";

export function Results() {
  return (
    <section className="mx-4 mt-6 rounded-[40px] bg-cream-100 px-6 py-24 sm:mx-6 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Primeiros resultados"
            title="O que já"
            accent="começou a mudar."
            lead="Uma clínica de bronzeamento corporal a laser chegou até nós buscando mais movimento no digital."
          />
        </ScrollReveal>

        <div className="grid items-stretch gap-5 lg:grid-cols-2">
          <ScrollReveal>
            <CaseCard {...CASE_STUDY} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Testimonial {...CASE_TESTIMONIAL} />
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <a
            href="/projetos"
            className="font-[family-name:var(--font-brand)] text-base font-semibold text-magenta-600 transition-colors hover:text-magenta-500"
          >
            Ver o case completo ↗
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="h-[340px] overflow-hidden rounded-3xl">
          <ImageSlot label="Antes/depois do perfil da cliente mostrando a evolução do conteúdo (e, se autorizado, um indicador real de alcance ou agendamentos)" />
        </ScrollReveal>
      </div>
    </section>
  );
}
