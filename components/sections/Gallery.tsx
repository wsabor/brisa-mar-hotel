import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import type { GalleryContent } from "@/content/site";

export function Gallery({ eyebrow, title, images }: GalleryContent) {
  return (
    <section id="galeria" className="bg-surface px-6 py-24 md:px-12">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">{title}</h2>
      </Reveal>
      <Reveal className="mt-6">
        {/* -mx cancels the section padding so the loop runs edge to edge;
            py leaves room for the hovered photo to grow without being clipped */}
        <Marquee aria-label="Galeria de imagens" duration={60} className="-mx-6 py-10 md:-mx-12">
          {images.map((image) => (
            <div
              key={image}
              className="relative h-56 w-80 shrink-0 overflow-hidden rounded-xl shadow-md transition-transform duration-500 ease-out hover:z-10 hover:scale-110 hover:shadow-xl md:h-72 md:w-md"
            >
              <Image
                src={image}
                alt="Ambiente do Hotel Brisa do Mar"
                fill
                sizes="(min-width: 768px) 448px, 320px"
                className="object-cover"
              />
            </div>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
