"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ButtonLink } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants/nav";
import { CONTACT, buildWhatsappUrl } from "@/lib/constants/contact";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="text-lg font-bold tracking-tight text-neutral-050">
          {CONTACT.brandName}
        </a>

        <nav aria-label="Navegacao principal" className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-200 transition-colors hover:text-neutral-050"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href={buildWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm"
          >
            Falar no WhatsApp
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex min-h-12 min-w-12 items-center justify-center rounded-full text-neutral-050 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Navegacao mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="glass flex flex-col gap-1 px-4 pb-4 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="min-h-12 rounded-lg px-3 py-3 text-base text-neutral-200 hover:bg-white/5 hover:text-neutral-050"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 justify-center"
              onClick={() => setOpen(false)}
            >
              Falar no WhatsApp
            </ButtonLink>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
