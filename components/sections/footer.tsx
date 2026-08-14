import { CONTACT } from "@/lib/constants/contact";
import { NAV_LINKS } from "@/lib/constants/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-obsidian-900 px-6 pb-10 pt-20">
      <div className="mx-auto grid max-w-[1200px] gap-12 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <span className="flex flex-col gap-0.5">
            <span className="font-[family-name:var(--font-brand)] text-3xl font-medium tracking-tight text-white">
              vyro<span className="text-magenta-400">.</span>
            </span>
            <span className="font-[family-name:var(--font-brand)] text-[11px] tracking-[0.14em] text-neutral-600">
              estratégia e presença digital
            </span>
          </span>
          <p className="max-w-[34ch] text-[15px] leading-relaxed text-neutral-400">
            A VYRO ajuda empresas a serem encontradas, lembradas e escolhidas — com estratégia
            digital feita lado a lado com o cliente.
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          <span className="font-[family-name:var(--font-brand)] text-[11px] uppercase tracking-[0.14em] text-white">
            Navegação
          </span>
          <a href="/" className="text-[15px] text-neutral-400 transition-colors hover:text-magenta-400">
            Home
          </a>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-neutral-400 transition-colors hover:text-magenta-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3.5">
          <span className="font-[family-name:var(--font-brand)] text-[11px] uppercase tracking-[0.14em] text-white">
            Contato
          </span>
          <a href="/contato" className="text-[15px] text-neutral-400 transition-colors hover:text-magenta-400">
            Receber análise gratuita
          </a>
          <span className="text-[15px] text-neutral-400">{CONTACT.email}</span>
          <span className="text-[15px] text-neutral-400">WhatsApp +55 (00) 00000-0000</span>
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-neutral-400 transition-colors hover:text-magenta-400"
          >
            Instagram {CONTACT.instagramHandle}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1200px] border-t border-white/10 pt-6 text-[13px] text-neutral-600">
        © {year} {CONTACT.legalName} ● Tratamos seus dados conforme a LGPD.
      </div>
    </footer>
  );
}
