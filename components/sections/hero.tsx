"use client";

import { useEffect, useRef } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ImageSlot } from "@/components/ui/image-slot";
import { gsap } from "@/lib/gsap";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
      )
        .fromTo(
          ".hero-line",
          { opacity: 0, y: 34, rotateX: -42, transformPerspective: 1000 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.12 },
          "-=0.3",
        )
        .fromTo(
          ".hero-fade",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
          "-=0.5",
        )
        .fromTo(
          ".hero-image",
          { opacity: 0, y: 16, scale: 1.04 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9 },
          "-=0.9",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const el = tiltRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    const rotateX = gsap.quickTo(el, "rotateX", { duration: 0.5, ease: "power3.out" });
    const rotateY = gsap.quickTo(el, "rotateY", { duration: 0.5, ease: "power3.out" });

    function handleMove(event: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      rotateY(px * 14);
      rotateX(-py * 14);
    }

    function handleLeave() {
      rotateX(0);
      rotateY(0);
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div ref={rootRef} className="mx-4 mt-4 overflow-hidden rounded-[40px] bg-obsidian-900 px-6 py-24 sm:mx-6 sm:px-10 lg:px-16">
      <div
        className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]"
        style={{ perspective: 1400 }}
      >
        <div className="flex flex-col gap-7">
          <div className="hero-eyebrow">
            <Eyebrow tone="on-dark">Marketing para crescer</Eyebrow>
          </div>

          <h1 className="flex flex-col text-white" style={{ perspective: 1000 }}>
            <span className="hero-line block text-[clamp(48px,5.2vw,86px)] leading-[0.94]">
              Coloque
            </span>
            <span className="hero-line block text-[clamp(48px,5.2vw,86px)] leading-[0.94]">
              sua empresa
            </span>
            <span className="hero-line block text-[clamp(48px,5.2vw,86px)] leading-[0.94] text-magenta-400">
              de volta em movimento.
            </span>
          </h1>

          <p className="hero-fade max-w-[52ch] text-lg leading-relaxed text-neutral-400">
            Mais visibilidade, mais pessoas encontrando sua marca e uma presença digital feita
            para transformar interesse em clientes.
          </p>

          <div className="hero-fade flex flex-wrap items-center gap-4">
            <ButtonLink href="/contato" size="lg">
              Receber minha análise gratuita
            </ButtonLink>
            <ButtonLink href="/servicos" variant="outline-on-dark" size="lg">
              Ver serviços
            </ButtonLink>
          </div>

          <p className="hero-fade text-sm text-neutral-600">
            Análise gratuita ● Diagnóstico em até 7 dias ● Sem compromisso
          </p>
        </div>

        <div
          ref={tiltRef}
          className="hero-image relative h-[420px] overflow-hidden rounded-3xl shadow-[0_40px_90px_-40px_rgba(0,0,0,0.65),0_0_0_1px_rgba(159,115,255,0.18)] sm:h-[520px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <ImageSlot
            label="Dono(a) de clínica ou negócio acompanhando o movimento da própria empresa — ambiente moderno, confiança e crescimento (evitar banco de imagens genérico)"
            priority
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
