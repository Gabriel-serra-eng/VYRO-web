import { PainCard } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImageSlot } from "@/components/ui/image-slot";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PAINS } from "@/lib/constants/home-content";

export function Pain() {
  return (
    <section className="mx-4 mt-6 rounded-[40px] bg-cream-100 px-6 py-24 sm:mx-6 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] items-start gap-16 lg:grid-cols-2">
        <ScrollReveal className="flex flex-col gap-7">
          <SectionHeading
            eyebrow="O diagnóstico"
            title="Sua empresa não deveria"
            accent="estar parada."
            lead="Você sabe que seu negócio é bom. Mas talvez o Instagram esteja parado, poucas pessoas estejam chegando e a agenda ainda tenha horários vazios."
          />
          <p className="max-w-[48ch] text-[17px] leading-relaxed text-slate-600">
            Você posta, tenta divulgar, às vezes investe em anúncio... mas o resultado não
            acompanha.
          </p>
          <p className="max-w-[48ch] text-[17px] leading-relaxed text-obsidian-800">
            <strong>Se você já pensou alguma dessas coisas, o problema não é falta de esforço.</strong>{" "}
            Talvez sua empresa só precise de uma estratégia melhor para ser encontrada, lembrada e
            escolhida.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4">
          {PAINS.map((pain, index) => (
            <ScrollReveal key={pain} delay={index * 0.08}>
              <PainCard>
                <p className="font-[family-name:var(--font-display)] text-xl font-black leading-tight text-obsidian-800">
                  &ldquo;{pain}&rdquo;
                </p>
              </PainCard>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={0.32} className="col-span-2 h-[220px] overflow-hidden rounded-3xl">
            <ImageSlot label="Instagram sem movimento ao lado de uma agenda vazia, contrastando com notificações e agendamentos chegando" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
