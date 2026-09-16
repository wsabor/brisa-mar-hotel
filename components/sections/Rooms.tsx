import type { RoomsContent } from "@/content/site";
import { Carousel } from "@/components/ui/Carousel";
import { CircleArrow } from "@/components/ui/CircleArrow";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Rooms({ eyebrow, title, rooms }: RoomsContent) {
  return (
    <section id="quartos" className="bg-bg px-6 py-24 md:px-12">
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
      <div className="mt-10">
        <Carousel>
          {rooms.map((room) => (
            <div key={room.name} className="w-72 shrink-0 snap-start md:w-96">
              <PlaceholderImage tone="warm" className="h-64 rounded-xl md:h-80" />
              <h3 className="mt-4 font-display text-2xl text-ink">{room.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{room.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
