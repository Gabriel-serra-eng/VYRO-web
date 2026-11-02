"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ButtonLink } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants/nav";
import { buildWhatsappUrl } from "@/lib/constants/contact";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-40 p-4">
      <header className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-8 rounded-[20px] bg-obsidian-900/95 px-5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)] backdrop-blur-md sm:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-brand)] text-2xl font-medium tracking-tight text-white"
        >
          vyro<span className="text-magenta-400">.</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          <Link href="/" className="font-[family-name:var(--font-brand)] text-[15px] font-medium text-magenta-400">
            Home
          </Link>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-brand)] text-[15px] font-medium text-white/85 transition-colors hover:text-magenta-400"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink href="/contato" size="sm">
            Análise gratuita
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="flex min-h-12 min-w-12 items-center justify-center rounded-full text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Navegação mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 flex max-w-[1400px] flex-col gap-1 rounded-2xl bg-obsidian-900/95 p-4 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)] backdrop-blur-md md:hidden"
          >
            {[{ label: "Home", href: "/" }, ...NAV_LINKS].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="min-h-12 rounded-lg px-3 py-3 text-base text-white/85 hover:bg-white/5 hover:text-white"
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
              Análise gratuita
            </ButtonLink>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
