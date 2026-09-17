"use client";

import type { EmblaCarouselType } from "embla-carousel";
import { useState } from "react";
import { useCarouselArrows } from "@/components/hooks/useCarouselArrows";
import { Carousel } from "@/components/ui/Carousel";
import { CircleArrow } from "@/components/ui/CircleArrow";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import type { RoomsContent } from "@/content/site";

export function Rooms({ eyebrow, title, rooms }: RoomsContent) {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType>();
  const { canScrollPrev, canScrollNext, scrollPrev, scrollNext } = useCarouselArrows(emblaApi);

  return (
    <section id="quartos" className="bg-bg px-6 py-24 md:px-12">
      <Reveal className="flex items-end justify-between gap-6">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">{title}</h2>
        </div>
        <div className="hidden gap-3 md:flex">
          <CircleArrow direction="left" onClick={scrollPrev} disabled={!canScrollPrev} />
          <CircleArrow direction="right" onClick={scrollNext} disabled={!canScrollNext} />
        </div>
      </Reveal>
      <div className="mt-10">
        <Carousel aria-label="Quartos" onApiChange={setEmblaApi}>
          {rooms.map((room, index) => (
            <Reveal key={room.name} delay={index * 0.08} className="w-72 shrink-0 md:w-96">
              <div className="group overflow-hidden rounded-xl">
                <PlaceholderImage
                  tone="warm"
                  className="h-64 transition-transform duration-500 group-hover:scale-105 md:h-80"
                />
              </div>
              <h3 className="mt-4 font-display text-2xl text-ink">{room.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{room.description}</p>
            </Reveal>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
