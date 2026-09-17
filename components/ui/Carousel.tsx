"use client";

import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, type KeyboardEvent, type ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  options?: EmblaOptionsType;
  onApiChange?: (api: EmblaCarouselType | undefined) => void;
  "aria-label"?: string;
}

export function Carousel({ children, options, onApiChange, ...props }: CarouselProps) {
  const [viewportRef, emblaApi] = useEmblaCarousel({ align: "start", ...options });

  useEffect(() => {
    onApiChange?.(emblaApi);
  }, [emblaApi, onApiChange]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      emblaApi?.scrollPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      emblaApi?.scrollNext();
    }
  }

  return (
    <div
      ref={viewportRef}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={props["aria-label"]}
      onKeyDown={handleKeyDown}
      className="overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-2"
    >
      <div className="flex items-center gap-6">{children}</div>
    </div>
  );
}
