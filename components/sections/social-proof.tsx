import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { METRICS, CASE_STUDIES } from "@/lib/constants/social";

export function SocialProof() {
  return (
    <section id="resultados" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
          Prova social
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-neutral-050 sm:text-4xl">
          Resultados reais de clinicas que confiaram na VYRO
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((metric, index) => (
          <Reveal key={metric.id} delay={index * 0.06}>
            <Card className="text-center">
              <p className="text-3xl font-bold text-gradient sm:text-4xl">{metric.value}</p>
              <p className="mt-2 text-sm text-neutral-400">{metric.label}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {CASE_STUDIES.map((caseStudy, index) => (
          <Reveal key={caseStudy.id} delay={index * 0.08}>
            <Card className="h-full">
              <p className="text-sm font-semibold text-magenta-400">{caseStudy.segment}</p>
              <h3 className="mt-2 text-lg font-bold text-neutral-050">{caseStudy.clientName}</h3>
              <p className="mt-1 text-sm font-semibold text-indigo-400">{caseStudy.result}</p>
              <p className="mt-4 text-sm text-neutral-400">&ldquo;{caseStudy.quote}&rdquo;</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
