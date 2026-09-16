import type { GalleryContent } from "@/content/site";
import { CircleArrow } from "@/components/ui/CircleArrow";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Gallery({ eyebrow, title, images }: GalleryContent) {
  return (
    <section id="galeria" className="bg-surface px-6 py-24 md:px-12">
      <div className="flex items-end justify-between gap-6">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">{title}</h2>
        </div>
        <div className="hidden gap-3 md:flex">
          <CircleArrow direction="left" />
          <CircleArrow direction="right" />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-4 overflow-x-auto pb-4">
        {images.map((image, index) => {
          const isCenter = index === Math.floor(images.length / 2);
          return (
            <PlaceholderImage
              key={image}
              tone={isCenter ? "warm" : "light"}
              className={
                isCenter
                  ? "h-96 w-72 shrink-0 rounded-xl md:h-[28rem] md:w-96"
                  : "h-64 w-52 shrink-0 rounded-xl md:h-72 md:w-64"
              }
            />
          );
        })}
      </div>
    </section>
  );
}
