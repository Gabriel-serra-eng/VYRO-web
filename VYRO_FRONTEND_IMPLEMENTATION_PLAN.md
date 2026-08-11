# VYRO Frontend Implementation Plan

## 1. VISÃO DO PROJETO
Evoluir o front-end atual da VYRO de uma "landing page moderna genérica" para uma experiência visual sofisticada, proprietária e editorial. O design deve exalar autoridade tecnológica ("Dark Tech Luxury") através de microinterações precisas, tipografia impecável e um uso extremamente deliberado de animação, fugindo do padrão "fundo escuro + card glassmorphism" genérico.

## 2. PRINCÍPIOS DE DESIGN
- **Intencionalidade:** Nada de componentes "padrão". Se existe um grid ou um card, ele deve ter um propósito informacional.
- **Restrição:** Gaste a ousadia no elemento assinatura (O Diagnóstico Interativo). O restante do site deve ser silencioso e de altíssima precisão.
- **Movimento com Propósito:** Abandonar o `fade-up` genérico global. Usar interações guiadas por scroll (`useScroll`) para contar uma história.
- **Copy Ativa:** O texto é material de design. Interface objetiva.

## 3. DIREÇÃO DE ARTE
- **Conceito Visual:** Dark Tech Luxury. Uma fusão da sofisticação de estúdios criativos de alto padrão com a precisão de um produto SaaS de ponta.
- **Personalidade:** Silenciosa, confiante, premium, analítica.
- **Contraste e Ritmo:** Alto contraste entre tipografia massiva (Headings) e espaços negativos imensos. O ritmo de scroll é intencionalmente pausado por seções `sticky`.

## 4. DESIGN TOKENS
A base existente (Tailwind v4) será preservada e rigorosamente aplicada. Nenhum valor de pixel solto no código. O `globals.css` não requer grandes alterações, apenas disciplina no uso.

## 5. TIPOGRAFIA
Reutilizar `Outfit` e `Inter` configurados via `next/font`.
- **Display/Headings (Outfit):** Escala brutalista. `text-5xl` a `text-7xl` para títulos, com `tracking-tight` (-0.02em).
- **Body (Inter):** Altamente legível. `text-neutral-400` para descrições, `text-neutral-200` para texto focal. Entrelinha `leading-relaxed`.
- **Utility:** Uso de uppercase, `text-xs`, `tracking-widest` para sobrancelhas (eyebrows) e labels, na cor `text-indigo-400`.

## 6. CORES
Preservar o que está no SPECS:
- **Background:** `obsidian` (tons super escuros quase pretos, ex: `#0B0C10`).
- **Accents:** Gradiente primário de `magenta-500` a `indigo-500`.
- **Texto:** `neutral-050` (branco puro) para títulos, caindo até `neutral-500` para elementos secundários.
*Regra: Proibido usar neon/glow em locais que não sejam botões primários ou o elemento assinatura.*

## 7. SPACING
Abolir paddings pequenos e confusos.
- Padrão entre seções: `py-32` ou `py-40` no desktop para maximizar a respiração.
- Ritmo interno: Multiplicadores de 8px (Tailwind base).

## 8. BORDER / RADIUS
- **Radius:** Evitar misturar `rounded-lg` e `rounded-3xl` aleatoriamente. Utilizar bordas super arredondadas (`rounded-full`) estritamente para CTAs e Pills/Eyebrows. Para painéis, usar `rounded-2xl` com `border-white/5` (sutil, nunca opaca).

## 9. BUTTON SYSTEM
Reutilizar o arquivo `components/ui/button.tsx` e `components/ui/button-link.tsx`, mas refinar o estilo.
- **Primary:** `bg-gradient-to-r from-magenta-500 to-indigo-500` com `shadow-glow-magenta` sutil. No `:hover`, expandir levemente o glow (via `box-shadow` CSS, não animação complexa), usando `scale-[1.02]`.
- **Secondary:** Fundo `glass` transparente, borda `border-white/10`. No hover, preenchimento sutil de branco (`bg-white/5`) em vez de mudar a borda para indigo.
- **Text Action:** (Novo estado) Texto puro `text-neutral-200` sublinhado com animação de `transform: scaleX` no hover.
- **Interação Comum:** No clique (`:active`), scale-[0.97].

## 10. MOTION SYSTEM
O sistema usará apenas Framer Motion e CSS nativo.
- **Entrance:** Reservado apenas para o carregamento inicial (Hero).
- **Scroll-linked (Obrigatório):** Transformar as divisões de seções (Serviços e Método) em transições baseadas em progressão de scroll (`useScroll`), sem saltos visuais abruptos.
- **Hover:** Apenas animações locais de `transform` e `opacity` (tempo: 200ms a 300ms, `ease-out`).
- **Easing Padrão:** Spring com bounce muito baixo (`type: "spring", bounce: 0.1, duration: 0.6`).
*Proibido usar fade-up sequencial em excesso.*

## 11. INTERACTION SYSTEM
As interações no desktop dependerão de cursores precisos e expansão de áreas (accordion horizontal) em vez de simples hover em cards. No mobile, a interação muda para scroll e tap (Toque explícito para expandir).

## 12. SIGNATURE ELEMENT (O DIAGNÓSTICO)
**Propostas Analisadas:**
1. *Linha do Tempo de Scroll Neon:* Um SVG acompanhando o leitor (Muito comum, não agrega valor ao lead).
2. *Stats Responsivos no Hero:* Números que sobem e descem conforme o mouse (Irritante e desvia o foco).
3. **O Diagnóstico Espacial (ESCOLHIDO):** Transformar o componente `diagnostic.tsx` na joia da coroa.
   - *Como será:* Em vez de um card flat, o diagnóstico terá aparência de um painel de OS avançado no centro da tela. Conforme o usuário faz scroll, o fundo escurece, focando totalmente no card principal que possui uma borda com gradiente dinâmico. As perguntas transitam deslizando da direita para a esquerda (`x: 50 -> 0`), e a projeção final revela-se com um efeito dramático de aumento de tamanho na fonte (counter animado).

## 13. HEADER
**Ação:** Refinar o componente atual `header.tsx`.
- **Desktop:** Fundo transparente que se torna `glass` ultra-translúcido no scroll.
- **Hover:** Os links de navegação revelam uma linha inferior desenhada do centro para as pontas.
- **Mobile:** Menu full-screen minimalista. Nada de menus suspensos complexos.

## 14. HERO
**Ação:** Refinar `hero.tsx`.
- **Composição:** Reduzir o ruído. A headline principal ocupará 70% da largura. O texto será gigantesco.
- **Background:** Manter os gradientes radiais, mas animar sua posição sutilmente (<2% de deslocamento) para dar sensação de profundidade.
- **Elemento Visual:** Os blocos de stats do Hero atual (`+300%`, `<5min`) receberão animação de parallax (`useScroll` e `useTransform` em `y`) enquanto a página desce, descolando-se em velocidades diferentes.

## 15. MÉTODO
**Ação:** Modificar `method.tsx` (Substituir cards).
- **Substituir:** O layout de grid/cards atual por uma **Scroll Narrative (Sticky)**.
- **Como implementar:** No Desktop, o título "Nosso Método" fixa do lado esquerdo (Sticky). Do lado direito, os passos sobem um por vez. Quando o passo 1 está visível no lado direito, ele ganha opacidade 1, enquanto os outros ficam 0.3. Progressão impulsionada pelo scroll natural.
- **Mobile:** Lista sequencial vertical conectada por uma linha fina à esquerda.

## 16. SERVIÇOS
**Ação:** Modificar `services.tsx` (Substituir grid tradicional).
- **Substituir:** Substitua o grid de 4 colunas (`grid-cols-4`) por **Interactive Rows (Linhas Interativas)**.
- **Como implementar:** Cada serviço torna-se uma linha horizontal larga ocupando toda a tela (border-bottom).
- **Hover (Desktop):** Ao passar o mouse na linha, ela expande a altura, revelando a descrição completa e um ícone, enquanto a cor de fundo muda de transparente para `obsidian-800/40`.
- **Mobile:** Accordions convencionais controlados por clique.

## 17. DIAGNÓSTICO
**Ação:** Evoluir o `diagnostic.tsx`.
- **Implementação:** Reutilizar a lógica atual de pontuação.
- **Visual:** O contêiner de progresso vira um anel de loading ao redor da pergunta (usando SVG) ou uma barra superior contínua colada ao container.
- **Transição:** Ao revelar o resultado (`projection`), o número não aparece imediatamente, mas usa o componente `framer-motion` para iterar (animar) de 0 até o valor final (`useSpring`).

## 18. PROVA SOCIAL
**Ação:** Modificar `social-proof.tsx`.
- **Substituir:** Transformar grids repetitivos de métricas em uma **Leitura Editorial (Typography-first)**.
- **Implementação:** Números gigantes e descrições pequenas. O elemento de impacto é o contraste extremo de tamanhos de fonte, não cards ou bordas.

## 19. FAQ
**Ação:** Refinar componente existente (geralmente baseado em Accordion).
- **Implementação:** Manter fechado por padrão. Ícone de `+` que vira `x` com rotação simples de 45 graus (Framer Motion). Focar em contraste altíssimo para acessibilidade.

## 20. CTA
**Ação:** O CTA final antes do Footer.
- **Visual:** Precisa engolir a tela inteira, removendo distrações. Um background completamente radial magenta escuro e o texto com o Botão Primário pulsando levemente (shadow pulse).

## 21. FOOTER
**Ação:** Refinar `footer.tsx`.
- Minimalista. Limpar excesso de colunas. Logo à esquerda, links legais/comerciais à direita. Tipografia reduzida (`text-xs`), muito espaço cinza escuro.

## 22. MOBILE
A implementação de cada seção precisa verificar a flag de breakpoint ou as classes `md:` / `lg:`.
- Nada de sticky scroll narrativo no mobile (Muda para listas diretas).
- Tudo volta para toques explícitos em vez de hover states complexos.

## 23. ACCESSIBILITY
- Manter o foco de teclado em evidência.
- Aplicar `prefers-reduced-motion: reduce` nativo pelo Tailwind ou checagem do Framer Motion (`useReducedMotion`).
- Contraste de texto rigoroso em botões secundários (não usar cinza escuro sobre fundo escuro).

## 24. PERFORMANCE
- **LCP:** O Background do Hero e a tipografia devem renderizar no servidor (RSC). A animação do Framer Motion entra para hidratar elementos não críticos.
- **Layout Shifts:** Evitar injetar elementos acima do viewport após load.
- Não instalar Three.js, Canvas, Lottie ou GSAP. Framer Motion, que já está em `package.json`, faz 100% das necessidades interativas descritas.

## 25. COMPONENT REUSE
- Reutilizar e evoluir: `Reveal`, `Button`, `Card` (quando apropriado), `TextField`, `SelectField`.
- NÃO recriar "Reveal2" ou "PrimaryButton". Evolua diretamente no arquivo.

## 26. DEPENDENCIES
- **NÃO ADICIONAR NENHUMA NOVA DEPENDÊNCIA.** O `package.json` atual (Next.js, Motion, React, Tailwind, Resend, Zod, Hook Form) é suficiente. GSAP foi vetado para preservar o bundle e não criar conflitos com React 19 / Motion.

## 27. IMPLEMENTATION ORDER
1. Refinamento de Design Tokens (Botões, Inputs, Cards).
2. Layout Base: Header e Footer e Spacing Global.
3. Elemento Assinatura: Refatorar o visual do Diagnóstico (`diagnostic.tsx`).
4. Hero e Prova Social (Refinamentos tipográficos).
5. Engenharia Complexa: Scrolling narrativo no Método (`method.tsx`).
6. Interactive Rows nos Serviços (`services.tsx`).

## 28. VALIDATION CHECKLIST
- [ ] Formulário de Lead (React Hook Form + Zod) funciona?
- [ ] As Server Actions não foram tocadas?
- [ ] `PRD.md` e `SPECS.md` e `.env` continuam inalterados?
- [ ] Nenhum erro de Hidratação ou Server Component mismatch?

## 29. DO NOT CHANGE
- `app/actions/submit-lead.ts`
- `lib/constants/` (exceto para leitura visual)
- `components/scripts/analytics.tsx`
- `package.json`
- `PRD.md` e `SPECS.md`
- Qualquer lógica de cálculo ou submissão.

## 30. REFERENCES
- **Framer Motion Docs:** https://motion.dev/docs/react-scroll-animations (Usado para projetar a seção Método e as animações do Hero sem scroll hijacking).
- **Aceternity UI:** https://ui.aceternity.com/components (Usado como conceito para o botão de glow animado, mas recriado puro em CSS para evitar copy-paste de código genérico).
- **Vercel Templates:** https://vercel.com/templates (Avaliação de padrões de espaçamento em Next.js App Router).
- **CoffeeShop NextJS Webpage:** https://github.com/arnobt78/CoffeeShop-NextJS-Webpage (Projeto estudado para evitar erros de interações assíncronas que poluem a CPU. A decisão de NÃO usar GSAP veio ao analisar este e preferir o ecossistema puro do Motion já instalado).
- **Skill frontend-design:** O conceito central de "Token System em 2 passos" e "Structure is information" guiou a remoção dos grids de cards em favor da narrativa no Método.
