import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceLink } from "@/components/ui/service-link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { HOME_SERVICES } from "@/lib/constants/home-content";

export function Services() {
  return (
    <section className="mx-4 mt-0 rounded-[40px] bg-cream-100 px-6 py-24 sm:mx-6 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14">
        <ScrollReveal>
          <SectionHeading
            eyebrow="O que fazemos"
            title="Três frentes para sua marca ser"
            accent="encontrada e escolhida."
            lead="Presença digital, páginas que convertem e comunicação com motivo. Do diagnóstico à execução."
          />
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {HOME_SERVICES.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <ServiceLink title={service.title} detail={service.detail} href="/servicos" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
