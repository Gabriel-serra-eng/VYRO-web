import { Reveal } from "@/components/ui/reveal";
import { FAQ_ITEMS } from "@/lib/constants/faq";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-indigo-400">
          Perguntas frequentes
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-neutral-050 sm:text-4xl">
          Tire suas duvidas sobre a VYRO
        </h2>
      </Reveal>

      <div className="mt-10 flex flex-col gap-4">
        {FAQ_ITEMS.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <details className="glass group rounded-2xl p-5 open:pb-6">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-neutral-050">
                {item.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl text-indigo-400 transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-400">{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
