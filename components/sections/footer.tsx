import { CONTACT, buildWhatsappUrl } from "@/lib/constants/contact";
import { NAV_LINKS } from "@/lib/constants/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-obsidian-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-neutral-050">{CONTACT.brandName}</p>
            <p className="mt-3 max-w-xs text-sm text-neutral-400">
              Growth &amp; Tech para clinicas de estetica, saloes de alto padrao e negocios
              locais em {CONTACT.city} - {CONTACT.state}.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-200">Navegacao</p>
            <ul className="mt-3 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-neutral-050"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-200">Contato</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-neutral-400">
              <li>
                <a
                  href={buildWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-neutral-050"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-neutral-050"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-neutral-050"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-xs text-neutral-400">
          &copy; {year} {CONTACT.legalName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
