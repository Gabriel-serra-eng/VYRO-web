import { SectionHeading } from "@/components/ui/section-heading";
import { PillarItem } from "@/components/ui/pillar-item";
import { ImageSlot } from "@/components/ui/image-slot";
import { Marquee } from "@/components/ui/marquee";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { STEPS, MARQUEE_WORDS } from "@/lib/constants/home-content";

export function Method() {
  return (
    <div className="bg-obsidian-900">
      <section className="mx-4 mt-6 rounded-[40px] bg-obsidian-900 px-6 py-24 sm:mx-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-16">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Como a VYRO trabalha"
              title="Mais visibilidade. Mais oportunidades"
              accent="para sua empresa crescer."
              tone="on-dark"
              lead="Na VYRO, nós ajudamos sua empresa a sair do lugar. Começamos entendendo onde você está, o que está impedindo seu crescimento e onde existem oportunidades."
            />
          </ScrollReveal>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {STEPS.map((step, index) => (
                <ScrollReveal key={step.n} delay={index * 0.08}>
                  <PillarItem index={step.n} title={step.title} detail={step.detail} />
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={0.2} className="h-[420px] overflow-hidden rounded-3xl">
              <ImageSlot label="Equipe pequena trabalhando lado a lado com o cliente, analisando Instagram, site e dados no notebook — premium, mas humano" />
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="max-w-[60ch] text-lg leading-relaxed text-white">
              Nosso foco é simples: fazer o digital trabalhar a favor do seu negócio.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="py-14">
        <Marquee items={MARQUEE_WORDS} size={104} />
      </div>
    </div>
  );
}
