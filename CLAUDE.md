# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Site de demonstração "Hotel Brisa do Mar": landing page de hotel com uma sequência
cinematográfica controlada pelo scroll. É um **template reaproveitável** (não é para
um cliente real) para vender sites a pequenos negócios locais trocando conteúdo, tema
e assets.

A especificação completa (objetivo, anatomia das seções, stack, arquitetura, spec do
ScrollSequence, plano de assets e fases de entrega) está em [docs/HANDOFF.md](docs/HANDOFF.md).
Prints de referência visual (não usar as imagens em si) estão em `docs/referencias/`.
Leia o HANDOFF antes de propor mudanças estruturais — ele é a fonte da verdade do projeto,
não este arquivo.

## Commands

```bash
npm run dev       # dev server (Turbopack)
npm run build     # production build
npm run lint      # eslint
npx tsc --noEmit  # type check
```

Não há suíte de testes configurada.

## Architecture

- Next.js App Router + TypeScript + Tailwind CSS v4.
- `gsap` + `@gsap/react` para animações; `lenis` para smooth scroll, com o `raf` do Lenis
  rodando no ticker do GSAP (`components/providers/SmoothScroll.tsx`, montado no
  `app/layout.tsx`). `embla-carousel-react` para carrosséis.
- Sem backend. CTAs de reserva/contato abrem WhatsApp com mensagem pré-preenchida.

**Conteúdo centralizado**: todo o texto, links, imagens e dados das seções vive em
`content/site.ts`, tipado por seção (`HeroContent`, `AboutContent`, etc.). Componentes de
seção não têm texto hard-coded — recebem os dados como props a partir desse arquivo.
`app/page.tsx` só compõe as seções passando `siteContent.<secao>`.

**Seções independentes**: cada seção em `components/sections/` é autocontida e removível
sem afetar as demais — a página é a soma delas, não um layout acoplado.

**Tema via tokens**: cores, fontes e raios ficam como variáveis CSS no bloco `@theme` de
`app/globals.css` (`--color-bg`, `--color-ink`, `--color-accent`, `--font-display`,
`--font-sans`, `--radius-lg/xl/2xl`, etc.), que o Tailwind v4 transforma automaticamente em
utilities (`bg-accent`, `text-ink`, `rounded-xl`...). Trocar o tema de um cliente para outro
é trocar esses tokens, não reescrever componentes.

- `components/ui/`: primitivos reaproveitáveis entre seções (`Button`, `Eyebrow`, `Carousel`,
  `Counter`, `Reveal`).
- `public/sequence/desktop/` e `public/sequence/mobile/`: quadros da sequência de scroll
  (ver spec técnica completa no HANDOFF, seção 5 — a implementação em canvas ainda não
  existe, é trabalho da Fase 3).

## Fases de entrega

O HANDOFF define 5 fases (Scaffold → Seções estáticas → ScrollSequence → Microinterações →
Polimento), cada uma com critério de aceite próprio. Trabalhar uma fase por vez e mostrar o
resultado antes de avançar para a próxima.
