# Hotel Brisa do Mar

Landing page de um hotel fictício à beira-mar, com uma sequência cinematográfica controlada pelo scroll.

Este é um **projeto de estudo** que desenvolvi para praticar técnicas de front-end que eu ainda não tinha usado em projetos reais. A principal é o _scroll sequence_: a "câmera" entra no prédio conforme a página rola. O hotel não existe. Nomes, depoimentos e contatos são fictícios e as imagens foram geradas por IA.

O projeto também serve de **modelo reaproveitável**. O conteúdo, as cores e as imagens ficam separados do código, então dá para adaptar o site a outro negócio (pousada, restaurante, clínica) sem reescrever os componentes.

## Conceitos estudados

### Scroll sequence em canvas

O efeito de "vídeo controlado pelo scroll", o mesmo das páginas de produto da Apple.

- Um vídeo foi convertido em **120 quadros WebP** para desktop e **60 quadros** recortados em 4:5 para celular.
- A seção fica **fixada na tela** (`pin` do GSAP ScrollTrigger). O progresso do scroll escolhe qual quadro é desenhado num `<canvas>`.
- Os quadros são pré-carregados e o canvas se ajusta à tela como um `object-fit: cover`.
- Textos sobrepostos aparecem e somem em trechos específicos do progresso.
- Quem ativa "reduzir movimento" no sistema vê imagens estáticas no lugar da animação.

Código: [`components/sections/ScrollSequence.tsx`](components/sections/ScrollSequence.tsx)

### Animações ligadas ao scroll

- **Smooth scroll** com [Lenis](https://lenis.darkroom.engineering/), sincronizado com o relógio (_ticker_) do GSAP para as animações não "tremerem".
- **Reveal**: os elementos surgem suavemente ao entrar na tela ([`Reveal.tsx`](components/ui/Reveal.tsx)).
- **Parallax**: o card da seção "Sobre" sobe conforme a página rola.
- **Contadores** que animam de 0 até o valor final ([`Counter.tsx`](components/ui/Counter.tsx)).

### Carrossel e marquee

- **Carrossel** com [Embla](https://www.embla-carousel.com/) na seção de quartos. Tem setas, arraste e navegação pelo teclado.
- **Marquee** infinito feito só com CSS na galeria e nos depoimentos. Pausa com o cursor em cima, e na galeria a foto sob o cursor aumenta ([`Marquee.tsx`](components/ui/Marquee.tsx)).

### Organização do projeto

- **Conteúdo centralizado**: todos os textos, links e imagens ficam em [`content/site.ts`](content/site.ts), com tipos TypeScript. Os componentes não têm texto fixo.
- **Tema por tokens**: cores, fontes e arredondamentos são variáveis CSS no `@theme` do Tailwind CSS v4 ([`app/globals.css`](app/globals.css)). Mudar a identidade visual é trocar esses valores.
- **Seções independentes**: cada seção em [`components/sections/`](components/sections/) pode ser removida sem quebrar as outras.

### Acessibilidade e desempenho

- Respeita `prefers-reduced-motion` em todas as animações.
- Contraste de cores no nível AA do WCAG e navegação por teclado com foco visível.
- Lighthouse mobile: **96** de desempenho e **100** em acessibilidade, boas práticas e SEO.

## Tecnologias

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) + ScrollTrigger + `@gsap/react`
- [Lenis](https://lenis.darkroom.engineering/)
- [Embla Carousel](https://www.embla-carousel.com/)

Não há backend. Os botões de reserva e contato abrem o WhatsApp com uma mensagem pronta.

## Como rodar

Requer Node.js 20.9 ou mais recente.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros comandos:

```bash
npm run build     # build de produção
npm run lint      # ESLint
npx tsc --noEmit  # checagem de tipos
```

## Estrutura

```
app/                  layout, página e tema (globals.css)
components/
  sections/           um arquivo por seção da página
  ui/                 peças reaproveitáveis (Button, Carousel, Marquee, Reveal...)
  hooks/              hooks (media query, setas do carrossel)
  providers/          smooth scroll (Lenis + GSAP)
content/site.ts       todo o conteúdo do site
public/images/        fotos das seções
public/sequence/      quadros do scroll sequence (desktop e mobile)
docs/                 especificação do projeto e referências visuais
```

## Créditos

Desenvolvido por **Wagner Sabor** como projeto de estudo.

As imagens e o vídeo usados na sequência foram gerados por IA. A inspiração visual veio de um vídeo de referência de landing page de hotel.
