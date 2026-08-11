# VYRO — Technical Specifications Document (SPECS)

> **Status:** Aprovado  
> **Baseado no PRD:** Versão 2.0  

## 1. Visão Geral e Estado do Projeto
O projeto VYRO encontra-se em estágio fundacional (Greenfield). Não há base de código legada. Toda a implementação será criada a partir do zero, mantendo rigoroso alinhamento com os requisitos de performance, UX e estética (Dark Tech Luxury) estabelecidos no PRD. A especificação orienta a criação do front-end priorizando flexibilidade de conteúdo e segurança no tráfego de dados, enquanto estabelece uma arquitetura pronta para evolução de back-end.

## 2. Arquitetura e Stack Tecnológica
* **Framework Core:** Next.js 15 (App Router).
* **Linguagem:** TypeScript 5.x com checagem estrita.
* **Estilização:** Tailwind CSS v4 (Zero-config, configurado via diretivas no `globals.css`) integrado com CSS Variables para a composição do tema.
* **Animações:** Motion (Framer Motion) com restrições explícitas (modificando apenas `opacity` e `transform`). Para elementos *above the fold* (Hero), será dada preferência a carregamento otimizado (ou substituição por CSS puro) visando maximizar o LCP.
* **Comunicação Cliente-Servidor:** React 19 Server Actions atuando como controladores stateless. Rotas legadas da API (`/api/*`) foram dispensadas em prol da segurança e DX das Actions.
* **Validação:** Zod compartilhado nativamente entre a validação de cliente (React Hook Form) e servidor (Server Action).
* **Integração de Notificação:** Resend API configurado nativamente no serverless para envios imediatos das métricas do Diagnóstico/Lead.

## 3. Estratégia de Conteúdo (Desacoplamento e Placeholders)
O projeto utilizará uma abordagem *CMS-Ready* para garantir que a interface sobreviva a mudanças comerciais (Dados Mutáveis) sem exigir refatoração.
* **Padrão de Injeção:** Componentes visuais (`components/ui` e `components/sections`) não reterão blocos de texto, depoimentos ou listas pesadas misturadas ao JSX (Hardcoded).
* **Repositório Estático de Dados:** Todo o conteúdo estrutural que é passível de edição futura — Serviços, FAQ, Casos de Sucesso, Métricas de Prova Social, e informações de contato comercial (Links de WhatsApp, Instagram, E-mail) — será extraído e armazenado no diretório `lib/constants/`.
* **Substituição:** Essa metodologia permitirá no futuro plugar bancos de dados de leitura ou plataformas CMS sem alterar a estrutura da marcação React.

## 4. Banco de Dados e Evolução Futura
* **Estado Atual (MVP):** Ausente. A arquitetura atual exclui intencionalmente bancos relacionais para preservar escalabilidade barata e conformidade LGPD instântanea. A captação do Diagnóstico via formulário bate na Server Action que, em vez de salvar no banco, reencaminha instantaneamente os dados para a equipe VYRO (Resend) mantendo a aplicação "Stateless".
* **Gatilho de Evolução (Futuro):** Quando houver a necessidade tática de salvar Leads próprios (CRM próprio) ou gerenciar o portal do cliente, a adaptação não causará quebras no front-end. Bastará adicionar a cláusula de ORM (`db.insert()`) à Action de formulário existente no servidor, sem exposição ao cliente.

## 5. Segurança e Infraestrutura Enxuta
* **Variáveis de Ambiente:** Controle rigoroso sobre escopo. Chaves como `RESEND_API_KEY` viverão sob segredo total no arquivo `.env.local` e o uso de prefixos `NEXT_PUBLIC_` será proibido para dados não estritamente abertos.
* **Rate Limiting:** A defesa contra *DDoS* ou spam no formulário foi simplificada: em vez de construir dependência com banco Key-Value em código (KV Store), a proteção ocorrerá unicamente pela camada de Edge Network (Web Application Firewall providenciado pelo provedor, como Vercel Firewall ou Cloudflare).
* **Roteamento Resiliente (WhatsApp Fallback):** Caso o provedor do serviço transacional (Resend) sofra indisponibilidade durante o `await`, o formulário tratará a falha elegantemente roteando os dados parametrizados para a URL da API oficial do WhatsApp, preservando a conversão.
* **LGPD e Privacidade:** Consentimento granular. Os cookies de rastreio mercadológico (GTM / Pixel) carregados em `analytics.tsx` não dispararão sem permissão via `cookie-banner.tsx`.

## 6. Mapa de Arquivos para Implementação
A árvore e os módulos a seguir compõem o escopo fechado de implementação da fase inicial:

| Arquivo / Pasta | Responsabilidade Técnica |
|---|---|
| `package.json` | Orquestração de dependências (Next 15, React 19, Tailwind v4, Zod, Hook Form, Resend, Motion). |
| `tsconfig.json` | Tipagem forte e caminhos de compilação. |
| `next.config.ts` | Diretivas de otimização nativa de imagens e compilação do Next.js. |
| `app/layout.tsx` | Entrypoint, metadados Open Graph para SEO estático, montagem do body e injeção do `next/font`. |
| `app/page.tsx` | Server Component raiz, construtor principal da experiência One-Page da VYRO. |
| `app/globals.css` | Core estilístico. Contém as diretivas `@import "tailwindcss";` e mapeamento `@theme` do Tailwind v4. |
| `components/ui/` | Componentes agnósticos da arquitetura atômica (*Button*, *Input*, *Card*, *CookieBanner*). |
| `components/sections/` | Orquestradores semânticos de blocos: `hero`, `services`, `diagnostic`, `social-proof`, `faq`, `footer`. |
| `components/scripts/analytics.tsx`| Componente invisível segregado para injeção e gerência dos scripts do Google e Meta. |
| `components/layout/header.tsx`| Navegação principal *sticky* e transições *mobile-friendly*. |
| `app/actions/submit-lead.ts`| Regra de negócio Serverless para orquestração da captação e sanitização (Zod) antes do Resend. |
| `lib/schemas.ts` | Fonte Única de Verdade (Single Source of Truth) contendo o *Zod Schema* validado por Cliente/Servidor. |
| `lib/resend.ts` | Wrapper utilitário que instância e parametriza o envio de e-mails da Resend API. |
| `lib/constants/` | Diretório de armazenamento de placeholders e dados mutáveis (`services.ts`, `faq.ts`, `social.ts`, etc). |
| `public/robots.txt` | Arquivo estático orientador para motores de busca simplificado (One-Page). |
| `public/sitemap.xml` | Indexação estática e referencial para SEO rápido e leve. |
| `.env.local` | Oculto no repositório final. Repositório de *secrets* no ambiente do desenvolvedor. |

## 7. Critérios de Implementação e Aceitação Final
1. **Performance:** Auditoria automatizada do Lighthouse deve apresentar valores próximos de $\ge 98$, com foco brutal nos Web Vitals (INP $\le 50\text{ms}$ e LCP $\le 1.2\text{s}$).
2. **Robustez de Fluxo (Progressive Enhancement):** O fluxo da submissão deve processar dados validados garantindo blindagem CSRF nativa, com UI intuitiva sinalizando ao usuário cada estado em tela (Loading/Error/Success).
3. **Identidade Dark Tech Luxury:** Transcrição perfeita dos acentos visuais do conceito, implementando fundos escuros complexos (*Obsidian/Magenta/Indigo*), toques *glassmorphism*, contraste acima de $4.5:1$ (WCAG 2.1 AA) para acessibilidade e `next/font` para tipografia imaculada.
4. **Acoplamento Limpo:** Todas as variáveis de texto mercadológico dispostas puramente em arquivos localizados na pasta `/lib/constants/`, sem lógicas injetadas no meio.

---
**Fim das Especificações.** O mapa consolidado encontra-se selado. Implementações que extrapolem esta estrutura demandarão nova fase de refinamento.
