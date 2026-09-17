"use client";

import type { EmblaCarouselType } from "embla-carousel";
import { useState } from "react";
import { useCarouselArrows } from "@/components/hooks/useCarouselArrows";
import { Carousel } from "@/components/ui/Carousel";
import { CircleArrow } from "@/components/ui/CircleArrow";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import type { GalleryContent } from "@/content/site";

export function Gallery({ eyebrow, title, images }: GalleryContent) {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType>();
  const { canScrollPrev, canScrollNext, scrollPrev, scrollNext } = useCarouselArrows(emblaApi);

  return (
    <section id="galeria" className="bg-surface px-6 py-24 md:px-12">
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
        <Carousel aria-label="Galeria de imagens" options={{ align: "center" }} onApiChange={setEmblaApi}>
          {images.map((image, index) => {
            const isCenter = index === Math.floor(images.length / 2);
            return (
              <Reveal key={image} delay={index * 0.06} className="shrink-0">
                <PlaceholderImage
                  tone={isCenter ? "warm" : "light"}
                  className={`rounded-xl transition-transform duration-500 hover:scale-[1.02] ${
                    isCenter
                      ? "h-96 w-72 md:h-[28rem] md:w-96"
                      : "h-64 w-52 md:h-72 md:w-64"
                  }`}
                />
              </Reveal>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
