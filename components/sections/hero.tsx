import { ButtonLink } from "@/components/ui/button";
import { buildWhatsappUrl } from "@/lib/constants/contact";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 20%, rgb(255 46 166 / 0.18), transparent), radial-gradient(50% 45% at 85% 30%, rgb(106 91 255 / 0.22), transparent), var(--color-obsidian-950)",
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="[animation:var(--animate-fade-up)]">
          <p className="mb-4 inline-block rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Growth &amp; Tech para clinicas de estetica
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-050 sm:text-5xl lg:text-6xl">
            Transformamos clinicas em{" "}
            <span className="text-gradient">maquinas previsiveis</span> de agendamentos
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-200">
            Tecnologia de alta conversao e trafego pago focado em performance para clinicas de
            estetica e negocios locais que querem previsibilidade de caixa.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#diagnostico">Solicitar diagnostico gratuito</ButtonLink>
            <ButtonLink
              href={buildWhatsappUrl()}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </ButtonLink>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="glass relative hidden aspect-square rounded-3xl lg:block"
        >
          <div className="absolute inset-6 rounded-2xl border border-white/10 bg-gradient-to-br from-magenta-500/20 via-transparent to-indigo-500/25" />
          <div className="absolute left-10 top-10 h-24 w-40 rounded-xl border border-white/10 bg-obsidian-800/80 p-4 shadow-glow-indigo">
            <p className="text-xs text-neutral-400">Agendamentos</p>
            <p className="text-2xl font-bold text-gradient">+300%</p>
          </div>
          <div className="absolute bottom-12 right-10 h-24 w-44 rounded-xl border border-white/10 bg-obsidian-800/80 p-4 shadow-glow-magenta">
            <p className="text-xs text-neutral-400">Resposta ao lead</p>
            <p className="text-2xl font-bold text-gradient">&lt; 5min</p>
          </div>
        </div>
      </div>
    </section>
  );
}
