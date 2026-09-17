"use client";

import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, type ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  options?: EmblaOptionsType;
  onApiChange?: (api: EmblaCarouselType | undefined) => void;
}

export function Carousel({ children, options, onApiChange }: CarouselProps) {
  const [viewportRef, emblaApi] = useEmblaCarousel({ align: "start", ...options });

  useEffect(() => {
    onApiChange?.(emblaApi);
  }, [emblaApi, onApiChange]);

  return (
    <div ref={viewportRef} className="overflow-hidden">
      <div className="flex items-center gap-6">{children}</div>
    </div>
  );
}
