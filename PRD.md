# VYRO — Product Requirements Document (PRD)

> **Versão:** 2.0 (Refinada após Auditoria - Fase 02)  
> **Status:** Aprovado  
> **Data:** Agosto de 2026  

---

## 1. Visão do Produto
O site da VYRO será uma plataforma web de alta performance focada em conversão, atuando como o principal canal de aquisição de clientes da agência. Ele deve tangibilizar a expertise da VYRO em tecnologia e growth marketing.

## 2. Contexto
Agências tradicionais vendem "posts em redes sociais" e sites que funcionam apenas como "cartão de visita digital". A VYRO precisa se distanciar desse oceano vermelho, posicionando-se como parceira estratégica de crescimento focada no mercado de estética, beleza e serviços locais.

## 3. Problema
Pequenos negócios e clínicas de estética lutam para gerar previsibilidade de caixa. Eles investem em marketing genérico que atrai cliques, mas não agendamentos qualificados. O site da VYRO deve provar que a agência resolve exatamente esse problema através de tecnologia focada em conversão.

## 4. Público-alvo
* **Público Primário:** Empreendedores, Biomédicos Estetas, Dermatologistas e donos de Clínicas de Estética/Salões de Alto Padrão.
* **Comportamento:** Acessam majoritariamente via mobile (smartphones), têm pouco tempo, buscam resultados rápidos e valorizam estética premium.

## 5. Proposta de Valor
"Transformamos clínicas de estética e pequenos negócios em máquinas previsíveis de atração e agendamentos através de tecnologia de alta conversão e tráfego pago focado em performance."

## 6. Objetivos
* **Posicionamento:** Estabelecer a VYRO como autoridade Tech & Growth.
* **Lead Generation:** Gerar contatos qualificados diretamente no WhatsApp ou E-mail com informações ricas sobre a dor do cliente.
* **Diferenciação:** Apresentar tempos de carregamento ($\le 1.2\text{s}$) e design superior à concorrência.

## 7. Não Objetivos
* NÃO é um portal de notícias ou blog denso (neste MVP).
* NÃO é um e-commerce ou plataforma de vendas direta.
* NÃO contará com painel de login/autenticação para clientes no MVP.

## 8. Posicionamento
**Dark Tech Luxury.** Um ponto de intersecção entre a sofisticação exigida por clínicas premium e a precisão da engenharia de software de uma startup do Vale do Silício.

## 9. Jornada do Usuário
1. **Atenção:** Acesso via anúncio (Meta/Google). Impacto visual imediato no Hero (headline forte + Core Web Vitals impecável).
2. **Interesse:** Rolagem para entender o Método VYRO e os serviços oferecidos.
3. **Confiança:** Exposição a prova social (Métricas $+300\%$, casos de sucesso e tempo de resposta).
4. **Desejo:** Uso da Ferramenta de Diagnóstico Interativo de Crescimento, que mostra o potencial do negócio.
5. **Ação:** Submissão do formulário de contato qualificado encaminhando direto para o WhatsApp.

## 10. Arquitetura de Informação
* Home
  * Hero (Proposta de valor + CTA)
  * O Método (Pilares)
  * Serviços (O que entregamos)
  * Diagnóstico (Interativo)
  * Prova Social (Resultados reais)
  * FAQ (Quebra de objeções)
  * Footer (SEO Local + Links)

## 11. Estrutura do Site
Single Page (One-Page orientada a seções com scroll suave). Sem múltiplas rotas complexas no MVP para concentrar o foco no funil de conversão.

## 12. Serviços
1. Criação de Sites e Web Apps de Alta Conversão
2. Gestão de Tráfego Pago (Meta e Google Ads)
3. Estratégia de Conteúdo e Posicionamento
4. Automação de WhatsApp e Ferramentas Digitais

## 13. Requisitos Funcionais
* **RF01:** O site deve conter um cabeçalho fixo (*sticky*) com navegação para as seções da página.
* **RF02:** O sistema deve possuir uma ferramenta de diagnóstico (3 perguntas) que calcule dinamicamente uma projeção (mock) e exiba um CTA.
* **RF03:** O sistema deve ter um formulário de contato (Nome, Clínica, Faturamento, Telefone) com máscara de input de telefone brasileiro.
* **RF04:** A submissão do formulário deve notificar a equipe VYRO via E-mail (Resend). Em caso de falha da API, garantir um roteamento de fallback (graceful degradation) direcionando o usuário para o WhatsApp.
* **RF05:** O usuário deve ser redirecionado para a API do WhatsApp com mensagem pré-preenchida após o formulário.

## 14. Requisitos Não Funcionais
* **RNF01 (Performance):** INP $\le 50\text{ms}$, LCP $\le 1.2\text{s}$, CLS $0$.
* **RNF02 (Segurança):** Rate limiting no envio de formulários (max 5 envios/ip/15min) implementado via WAF (ex: Cloudflare) ou KV store em nuvem, dado o ambiente serverless stateless.
* **RNF03 (Conformidade):** Acessibilidade mínima WCAG 2.1 AA.
* **RNF04 (Compatibilidade):** Suporte nativo aos navegadores baseados em Chromium, WebKit (Safari) e Gecko (Firefox) atualizados nos últimos 2 anos.

## 15. UX/UI
* Priorização mobile-first nas decisões de grid e toques (touch targets $\ge 48\times 48\text{px}$).
* Estados claros para formulários (Idle, Loading, Success, Error). Feedback imediato em caso de erro de validação (onBlur).
* Scroll magnético/suave apenas onde não interferir na usabilidade nativa do dispositivo.

## 16. Referência Visual
* **Conceito:** Dark Tech Luxury (Base Dark Obsidian + Acentos Neon Magenta e Indigo).
* **UI Elements:** Botões "capsule" com glows externos, Cards "glassmorphism" com bordas subtis iluminadas. Mockups isométricos abstratos (dashboard de crescimento/gráficos 3D neon).
* **Tipografia:** `Plus Jakarta Sans` ou `Outfit` (Headings) e `Inter` (Corpo).

## 17. Responsividade
Adaptação fluida e não abrupta. 
* Mobile (base): Layout de coluna única.
* Tablet ($768\text{px}$): Grid de 2 colunas para serviços.
* Desktop ($1024\text{px}+$): Grid de 3-4 colunas para maximizar a visualização *above the fold*.

## 18. Acessibilidade
* Contraste mínimo de $4.5:1$ em todos os textos legíveis.
* Suporte à navegação por teclado (`Tab`) com *focus-ring* bem definido e não intrusivo ao design (offset focus).
* Respeito à preferência do sistema operacional para redução de animações (`prefers-reduced-motion`).
* Uso de atributos ARIA (ex: `aria-live`, `aria-invalid`) para feedback dinâmico de leitura de tela em estados de loading e validação de formulários.

## 19. SEO
* Implementação da Meta API do Next.js (incluindo Open Graph e Twitter Cards para compartilhamento social otimizado).
* URLs canônicas configuradas.
* Tags semânticas rigorosas (um único `h1` por página).
* Dados Estruturados (JSON-LD) para `ProfessionalService` e `LocalBusiness`.
* Otimização do `robots.txt` e `sitemap.xml` dinâmicos.

## 20. Performance
* Utilização exclusiva de React Server Components (RSC) para blocos de conteúdo estático.
* Imagens no formato estrito de WebP/AVIF tratadas pelo `next/image`.
* Lazy loading de quaisquer scripts de terceiros (Analytics/Tags) via `next/script` com estratégia `worker` ou `lazyOnload`.

## 21. Segurança
* **CLIENTE:** Validação visual e bloqueio de inputs (Zod/React Hook Form). Zero credenciais privadas (Nenhuma secret iniciada com `NEXT_PUBLIC_` que não seja de acesso público).
* **SERVIDOR:** Next.js Server Actions atuando como API de borda com CSRF token protection nativa e sanitização agressiva anti-XSS antes do processamento.

## 22. Front-end
* **Core:** Next.js 15 (App Router).
* **Language:** TypeScript 5.x.
* **Styling:** Tailwind CSS v4 + Vanilla CSS Variables para Tokens.
* **Motion:** Motion (Framer Motion) para animações declarativas.
* **Arquitetura de Componentes:** Padrão modular separando componentes de UI isolados (dumb components, estilo design system) de seções da página (smart components) para garantir escalabilidade.
* **Tipografia:** Uso do pacote `next/font` obrigatório para anular Cumulative Layout Shift (CLS) e otimizar carregamento das fontes base.

## 23. Back-end
* Totalmente Serverless (Next.js Edge/Node Server Actions).
* Eliminação da necessidade de um servidor customizado Express ou Fastify para redução de manutenção e custos no MVP.

## 24. APIs
* Comunicação segura Server-to-Server com serviços terceiros.
* API Interna de Lead: POST para `/api/leads` (ou via Action).

## 25. Banco de Dados
* **Não aplicável ao MVP estrutural.** Os dados do site são estáticos no repositório. Dados transacionais de clientes são enviados diretamente via Webhooks e e-mails (Resend), não persistidos localmente para reduzir superfície de ataque e garantir adequação imediata à LGPD sem complexidade extra.
* **Exceção de Estado Volátil:** Pode ser utilizado um banco de dados KV (como Vercel KV/Upstash) unicamente para viabilizar o RNF02 (Rate Limiting), sem armazenar dados sensíveis (PII).

## 26. Integrações
* **WhatsApp Business API (Click-to-chat):** Roteamento do usuário via link parametrizado.
* **Resend API:** Envio de e-mail de notificação para a equipe VYRO com as respostas do diagnóstico/lead.

## 27. Analytics
* Implementação do Google Tag Manager (GTM) e Meta Pixel focados em rastreio do evento principal: `lead_form_submitted` e `whatsapp_clicked`. Scripts injetados via `next/script` e isolados do thread principal.
* **Privacidade e LGPD:** Implementação de um banner de consentimento (Cookie Consent) antes da injeção de rastreadores não-essenciais.

## 28. Conversão
* Jornada de conversão livre de fricções: Sem dezenas de campos complexos obrigatórios. 
* Chamadas para Ação claras (Ex: *"Solicite seu diagnóstico de presença digital"* ao invés de *"Enviar"*).

## 29. Critérios de Aceitação
* [ ] **CA01:** O relatório do Google Lighthouse (Mobile & Desktop) deve registrar pontuação global $\ge 98$ sem intervenções.
* [ ] **CA02:** O formulário não deve permitir submissão com dados inválidos, nem telefone sem máscara, validando via Zod no cliente e no servidor.
* [ ] **CA03:** Se o Javascript do navegador estiver desabilitado, o formulário deve continuar operando utilizando progressão aprimorada (Progressive Enhancement) nativa das Server Actions do Next.js.
* [ ] **CA04:** Navegação por `Tab` deve cobrir 100% dos botões e links visíveis.

## 30. MVP
O MVP se restringe à Homepage One-Page (Visão Geral, Serviços, Diagnóstico, Casos e Contato) focada em conversão e velocidade de carregamento extrema.

## 31. Roadmap Futuro
* Autenticação e dashboard privativo para clientes acompanharem as métricas de suas campanhas geridas pela VYRO.
* Integração nativa com CRMs (Hubspot / RD Station).
* Blog com CMS Headless estruturado.

## 32. Riscos
* **Risco de Performance:** Uso excessivo do `framer-motion` em mobile causando lag ou layout shifts. **Mitigação:** Animar somente opacidade (`opacity`) e transformação (`transform`), desativando animações pesadas em telas $< 768\text{px}$ se necessário.
* **Risco Comercial:** Qualidade baixa dos leads gerados. **Mitigação:** Diagnóstico interativo servindo como filtro inicial de qualificação.

## 33. Decisões Técnicas
* **DECISÃO:** Uso de Server Actions em vez de APIs REST Tradicionais.
  * **MOTIVO:** Maior segurança tipada e zero boilerplate para formulários.
* **DECISÃO:** Tailwind CSS v4.
  * **MOTIVO:** Tempo de build drástico reduzido pelo motor LightningCSS e compatibilidade total com Server Components.

## 34. Questões Pendentes
* Seleção exata das imagens / logotipos das clínicas que comporão a seção de Prova Social.
* Texto final da copy (Redação) caso o cliente queira customizar os jargões estéticos.

## 35. Fontes e Referências
* Next.js Documentation (React Server Components, App Router).
* OWASP Top 10 Security Risks (Rate limiting, CSRF).
* Google Web Vitals Guidelines (INP $\le 200\text{ms}$).
* WCAG 2.1 AA Contrast Ratios.
* Tailwind CSS Documentation (v4).
