import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { METHOD_PILLARS } from "@/lib/constants/method";

export function Method() {
  return (
    <section id="metodo" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
          O Metodo VYRO
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-neutral-050 sm:text-4xl">
          Quatro pilares que constroem previsibilidade de agenda
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {METHOD_PILLARS.map((pillar, index) => (
          <Reveal key={pillar.id} delay={index * 0.08}>
            <Card className="h-full">
              <span className="text-sm font-bold text-magenta-400">{pillar.step}</span>
              <h3 className="mt-3 text-xl font-bold text-neutral-050">{pillar.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{pillar.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
