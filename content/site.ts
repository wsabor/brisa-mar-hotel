export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  logoLine1: string;
  logoLine2: string;
  navLinks: NavLink[];
  ctaLabel: string;
  ctaHref: string;
  eyebrow: string;
  title: string;
  image: string;
}

export interface ScrollSequenceOverlay {
  /** Progress range within the pinned scroll, from 0 to 1. */
  from: number;
  to: number;
  title: string;
  subtitle?: string;
}

export interface ReducedMotionImage {
  src: string;
  alt: string;
}

export interface ScrollSequenceContent {
  framesPath: string;
  frameCount: number;
  mobileFramesPath: string;
  mobileFrameCount: number;
  scrollLength: string;
  /** Static images shown when prefers-reduced-motion is set, in order. */
  reducedMotionImages: ReducedMotionImage[];
  overlays: ScrollSequenceOverlay[];
}

export interface Counter {
  value: string;
  label: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraph: string;
  image: string;
  counters: Counter[];
}

export interface Room {
  name: string;
  description: string;
  image: string;
}

export interface RoomsContent {
  eyebrow: string;
  title: string;
  rooms: Room[];
}

export interface ExperienceContent {
  eyebrow: string;
  title: string;
  paragraph: string;
  linkLabel: string;
  linkHref: string;
  image: string;
}

export interface GalleryContent {
  eyebrow: string;
  title: string;
  images: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface TestimonialsContent {
  eyebrow: string;
  title: string;
  testimonials: Testimonial[];
}

export interface BookingContent {
  title: string;
  ctaLabel: string;
  whatsappNumber: string;
  whatsappMessage: string;
}

export interface ContactCard {
  label: string;
  value: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  cards: ContactCard[];
}

export interface FooterContent {
  logoLine1: string;
  logoLine2: string;
  year: number;
}

export interface SiteContent {
  hero: HeroContent;
  scrollSequence: ScrollSequenceContent;
  about: AboutContent;
  rooms: RoomsContent;
  experience: ExperienceContent;
  gallery: GalleryContent;
  testimonials: TestimonialsContent;
  booking: BookingContent;
  contact: ContactContent;
  footer: FooterContent;
}

export const siteContent: SiteContent = {
  hero: {
    logoLine1: "Hotel",
    logoLine2: "Brisa do Mar",
    navLinks: [
      { label: "Sobre", href: "#sobre" },
      { label: "Quartos", href: "#quartos" },
      { label: "Galeria", href: "#galeria" },
      { label: "Experiência", href: "#experiencia" },
      { label: "Contato", href: "#contato" },
    ],
    ctaLabel: "Consultar disponibilidade",
    ctaHref: "#reserva",
    eyebrow: "Entre. Respire. Fique.",
    title: "Seu próximo destino é desacelerar.",
    image: "/images/hero-fachada.jpg",
  },
  scrollSequence: {
    framesPath: "/sequence/desktop",
    frameCount: 120,
    mobileFramesPath: "/sequence/mobile",
    mobileFrameCount: 60,
    scrollLength: "+=300%",
    reducedMotionImages: [
      { src: "/images/sequence-fachada.jpg", alt: "Fachada do Hotel Brisa do Mar ao pôr do sol" },
      { src: "/images/sequence-lobby.jpg", alt: "Lobby do hotel" },
      { src: "/images/sequence-suite.jpg", alt: "Suíte do hotel" },
      { src: "/images/sequence-varanda.jpg", alt: "Varanda com vista para o mar" },
    ],
    overlays: [
      { from: 0.08, to: 0.22, title: "Uma fachada que já anuncia o que vem depois." },
      { from: 0.58, to: 0.72, title: "Da suíte à varanda, sempre de frente para o mar." },
    ],
  },
  about: {
    eyebrow: "Sobre o hotel",
    title: "Um refúgio desenhado para sentir o presente.",
    paragraph:
      "O Hotel Brisa do Mar nasce do encontro entre arquitetura contemporânea e natureza. Curvas suaves, vidro e madeira abrem cada ambiente para a paisagem — com privacidade, conforto e serviço próximo.",
    image: "/images/about-fachada.jpg",
    counters: [
      { value: "24", label: "suítes exclusivas" },
      { value: "100%", label: "de frente para o mar" },
      { value: "24h", label: "concierge à disposição" },
    ],
  },
  rooms: {
    eyebrow: "Escolha seu espaço",
    title: "Quartos para desacelerar.",
    rooms: [
      {
        name: "Suíte Brisa",
        description: "Varanda privativa, cama king e vista frontal para o mar.",
        image: "/images/room-brisa.jpg",
      },
      {
        name: "Suíte Horizonte",
        description: "Iluminação natural e ambientação pensada para descanso.",
        image: "/images/room-horizonte.jpg",
      },
      {
        name: "Villa Oceano",
        description: "Espaço amplo com terraço e piscina privativa.",
        image: "/images/room-villa.jpg",
      },
      {
        name: "Suíte Maré",
        description: "Parede ripada em madeira, cortinas leves e o pôr do sol dentro do quarto.",
        image: "/images/sequence-suite.jpg",
      },
    ],
  },
  experience: {
    eyebrow: "A experiência",
    title: "Dias leves. Conforto em cada detalhe.",
    paragraph:
      "Acorde com a luz entrando pela janela, aproveite a vista da sua varanda e deixe espaço no dia para simplesmente descansar.",
    linkLabel: "Veja os ambientes",
    linkHref: "#galeria",
    image: "/images/experience-quarto.jpg",
  },
  gallery: {
    eyebrow: "Galeria",
    title: "Um hotel. Muitas perspectivas.",
    images: [
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg",
      "/images/gallery-5.jpg",
      "/images/gallery-6.jpg",
      "/images/gallery-7.jpg",
      "/images/gallery-8.jpg",
      "/images/gallery-9.jpg",
    ],
  },
  testimonials: {
    eyebrow: "Fale com quem já ficou",
    title: "Histórias de quem já viveu essa pausa.",
    testimonials: [
      {
        quote:
          "A vista é incrível, mas foi a leveza do serviço que fez a gente ficar na memória.",
        author: "Marina Costa",
        role: "Hóspede",
      },
      {
        quote: "Arquitetura linda, gastronomia precisa e a melhor noite de sono em muito tempo.",
        author: "Lucas Mendonça",
        role: "Hóspede",
      },
      {
        quote: "Cada ambiente parece enquadrado no mar. Uma experiência bonita sem ser cansativa.",
        author: "Joana Alves",
        role: "Hóspede",
      },
      {
        quote: "Fomos para comemorar dez anos de casados e cada detalhe parecia pensado para nós.",
        author: "Renata e Paulo Siqueira",
        role: "Aniversário de casamento",
      },
      {
        quote: "O café da manhã na varanda, com o mar ali na frente, já valeu a viagem inteira.",
        author: "Felipe Andrade",
        role: "Hóspede",
      },
      {
        quote: "Viajei a trabalho e voltei descansado. Wi-Fi rápido, silêncio e uma equipe atenciosa.",
        author: "Carlos Nogueira",
        role: "Viagem de negócios",
      },
      {
        quote: "As crianças amaram a piscina e nós amamos o pôr do sol. Já estamos planejando a volta.",
        author: "Beatriz Lima",
        role: "Viagem em família",
      },
      {
        quote: "Hotel bonito existe em todo lugar. Aqui o diferencial é o cuidado com cada hóspede.",
        author: "Sofia Martins",
        role: "Hóspede",
      },
    ],
  },
  booking: {
    title: "O mar está esperando.",
    ctaLabel: "Verificar disponibilidade",
    whatsappNumber: "5500000000000",
    whatsappMessage: "Olá! Gostaria de consultar disponibilidade no Hotel Brisa do Mar.",
  },
  contact: {
    eyebrow: "Fale com o hotel",
    title: "Podemos cuidar da sua próxima pausa.",
    cards: [
      { label: "E-mail", value: "reservas@hotelbrisadomar.com" },
      { label: "Telefone", value: "+55 (00) 0000-0000" },
      { label: "Localização", value: "Beira-mar, Brasil" },
    ],
  },
  footer: {
    logoLine1: "Hotel",
    logoLine2: "Brisa do Mar",
    year: new Date().getFullYear(),
  },
};
