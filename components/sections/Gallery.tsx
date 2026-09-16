import type { GalleryContent } from "@/content/site";
import { Carousel } from "@/components/ui/Carousel";

export function Gallery({ title, images }: GalleryContent) {
  return (
    <section id="galeria" className="bg-surface px-6 py-24 md:px-12">
      <h2 className="font-display text-4xl text-ink md:text-5xl">{title}</h2>
      <div className="mt-10">
        <Carousel>
          {images.map((image) => (
            <div key={image} className="h-64 w-80 shrink-0 rounded-2xl bg-bg" />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
