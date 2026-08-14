import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Cta() {
  return (
    <section className="mx-4 mt-6 rounded-[40px] bg-obsidian-950 px-6 py-32 text-center sm:mx-6 sm:px-10">
      <ScrollReveal className="mx-auto flex max-w-[1100px] flex-col items-center gap-8">
        <Eyebrow tone="on-dark">Próximo passo</Eyebrow>
        <h2 className="text-[clamp(44px,5vw,84px)] leading-[0.94] text-white">
          Sua empresa pode estar mais perto do próximo cliente{" "}
          <span className="text-magenta-400">do que você imagina.</span>
        </h2>
        <p className="max-w-[56ch] text-lg leading-relaxed text-neutral-400">
          Não deixe seu negócio parado enquanto você tenta descobrir sozinho o que fazer.
        </p>
        <ButtonLink href="/contato" size="lg">
          Receber minha análise gratuita
        </ButtonLink>
        <p className="text-sm text-neutral-600">
          Para empresários que querem crescer com estratégia, não com achismo.
        </p>
      </ScrollReveal>
    </section>
  );
}
