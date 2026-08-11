import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { SERVICES, type Service } from "@/lib/constants/services";

const ICON_PATHS: Record<Service["icon"], string> = {
  code: "M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12",
  ads: "M4 19V5m6 14V9m6 10V4m6 15v-7",
  content: "M4 6h16M4 12h10M4 18h16",
  automation: "M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8",
};

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
          Servicos
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-neutral-050 sm:text-4xl">
          O que entregamos para sua clinica crescer
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.08}>
            <Card className="h-full">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="text-indigo-400"
              >
                <path
                  d={ICON_PATHS[service.icon]}
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mt-4 text-lg font-bold text-neutral-050">{service.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{service.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
