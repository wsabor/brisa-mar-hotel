# Handoff — Site demo "Hotel Brisa do Mar" (scroll cinematográfico)

Documento de contexto vindo de uma conversa de planejamento no claude.ai.
Leia inteiro antes de propor qualquer código.

## 1. Objetivo

Construir um **site de demonstração/modelo** (não é para cliente) inspirado num vídeo de referência:
landing page de hotel à beira-mar com uma sequência cinematográfica controlada pelo scroll.
O projeto deve servir de **template reaproveitável** para vender sites a pequenos negócios locais
(clínicas, restaurantes, lojas, pousadas), trocando apenas conteúdo, tema e assets.

Prints do vídeo de referência em `docs/referencias/`:
- `01-visao-geral-1fps.png` — o vídeo inteiro, 1 quadro por segundo
- `02-sequencia-scroll.png` — detalhe da sequência cinematográfica
- `03-secoes-conteudo.png` — seções de conteúdo em maior resolução

Os prints são **só referência visual**. Não usar as imagens deles no site.

## 2. Anatomia da referência (ordem das seções)

1. **Hero**: foto full-bleed da fachada ao pôr do sol, título serifado grande
   ("Seu próximo destino é desacelerar."), eyebrow pequeno em caixa alta, menu transparente
   (logo "Hotel / Brisa do Mar" à esquerda, links + botão outline à direita).
2. **ScrollSequence (efeito principal)**: seção pinada; o scroll avança uma "câmera" que entra
   no prédio — fachada → lobby → suíte → varanda com vista para o mar. Dissolves entre ambientes.
3. **Sobre** ("Um refúgio desenhado para sentir o presente."): card claro com cantos grandes
   que sobe por cima da seção anterior; texto + foto da fachada; 3 contadores animados (24 / 100% / 24h).
4. **Quartos** ("Quartos para desacelerar."): carrossel horizontal de cards (foto, nome da suíte,
   descrição curta), setas circulares nas laterais.
5. **Experiência** ("Dias leves. Conforto em cada detalhe."): foto full-bleed com card escuro
   translúcido (glass) contendo título, texto e link com seta em laranja.
6. **Galeria** ("Um hotel. Muitas perspectivas."): carrossel de imagens com a central maior.
7. **Depoimentos** ("Histórias de quem já viveu essa pausa."): cards de citação rolando horizontalmente.
8. **Reserva (CTA)**: bloco escuro com título, seletor de datas e botão laranja
   "Verificar disponibilidade".
9. **Contato** ("Podemos cuidar da sua próxima pausa."): título à esquerda, cards de e-mail,
   telefone e localização à direita.
10. **Rodapé** com logo.

Estética: fundo off-white/azulado claro, serifa display elegante em peso leve, sans pequena para
corpo, acento laranja/coral, cantos bem arredondados, muito respiro.

## 3. Stack (decidida)

- Next.js (App Router, versão estável mais recente) + TypeScript + Tailwind CSS
- `gsap` + ScrollTrigger + `@gsap/react` (`useGSAP` para cleanup)
- `lenis` para smooth scroll (sincronizado com o ticker do GSAP; sem syncTouch no mobile)
- `embla-carousel-react` para carrosséis
- `next/font`: serifa display (ex.: Cormorant Garamond ou Fraunces) + sans (ex.: Inter ou Manrope)
- Deploy: Vercel
- Sem backend no protótipo. CTA de reserva/contato abre WhatsApp com mensagem pré-preenchida.

## 4. Arquitetura

```
app/
  layout.tsx          # fontes, SmoothScrollProvider
  page.tsx            # compõe as seções a partir de content
components/
  providers/SmoothScroll.tsx
  sections/Hero.tsx
  sections/ScrollSequence.tsx
  sections/About.tsx       # inclui contadores
  sections/Rooms.tsx
  sections/Experience.tsx
  sections/Gallery.tsx
  sections/Testimonials.tsx
  sections/Booking.tsx
  sections/Contact.tsx
  sections/Footer.tsx
  ui/                     # Button, Eyebrow, Carousel, Counter, Reveal
content/
  site.ts                 # TODO o texto, links, imagens e dados das seções (tipado)
public/
  sequence/desktop/0001.webp ...
  sequence/mobile/0001.webp ...
```

Regras:
- Nenhum texto "hard-coded" nos componentes: tudo vem de `content/site.ts`.
- Cores e fontes como variáveis CSS mapeadas no Tailwind (trocar tema = trocar tokens).
- Cada seção independente e removível.

## 5. Especificação do ScrollSequence

Técnica: **sequência de imagens desenhada em `<canvas>`** (não usar `<video>` com currentTime).

- Props: `framesPath`, `frameCount`, `mobileFramesPath`, `mobileFrameCount`, `scrollLength` (ex.: "+=300%"),
  e overlays de texto opcionais por faixa de progresso.
- ScrollTrigger com `pin: true`, `scrub` ~0.5; tween de um objeto `{ frame }` com `snap: "frame"`.
- Canvas com cálculo de "cover" (preencher mantendo proporção) e suporte a devicePixelRatio (limitar a 2).
- Redesenhar no resize.
- **Carregamento**: primeiro quadro como imagem com prioridade (LCP); demais quadros carregados
  após o load, em lotes; enquanto um quadro não carregou, desenhar o mais próximo disponível.
- **Mobile** (breakpoint ~768px): sequência própria em 4:5 ou 9:16, com cerca de metade dos quadros.
- **`prefers-reduced-motion`**: sem pin/scrub; mostrar 4 imagens estáticas (os ambientes-chave).
- Orçamento de peso: desktop < ~8 MB total da sequência; mobile < ~4 MB.

## 6. Assets

Os assets finais serão gerados com IA (fora deste repositório):
1. 4 imagens-chave consistentes: fachada, lobby, suíte, varanda.
2. Vídeo IA com primeiro/último quadro entre cada par (movimento de câmera).
3. Edição com dissolves → extração dos quadros:

```bash
ffmpeg -i walkthrough.mp4 -vf "fps=24,scale=1920:-1" -c:v libwebp -quality 72 public/sequence/desktop/%04d.webp
```

**Enquanto os assets não existem**: gere uma sequência placeholder com ffmpeg (ex.: gradiente
animado com o número do quadro desenhado) para validar a mecânica. Demais imagens: placeholders locais.

## 7. Fases e critérios de aceite

1. **Scaffold** — projeto criado, Tailwind, fontes, tokens, `content/site.ts` tipado, Lenis funcionando.
2. **Seções estáticas** — todas as seções da lista, responsivas, sem animação.
3. **ScrollSequence** — com placeholder; liso nos dois sentidos, pin correto, mobile e reduced-motion ok.
4. **Microinterações** — reveals ao entrar na viewport, contadores, card "About" subindo sobre a sequência,
   carrosséis, estados de hover.
5. **Polimento** — Lighthouse mobile (meta: Performance ≥ 85), sem layout shift, acessibilidade básica
   (contraste, foco visível, alt nas imagens, carrossel navegável por teclado).

Trabalhar uma fase por vez e mostrar o resultado antes de seguir.
