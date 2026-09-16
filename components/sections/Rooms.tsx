import type { RoomsContent } from "@/content/site";
import { Carousel } from "@/components/ui/Carousel";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Rooms({ eyebrow, title, rooms }: RoomsContent) {
  return (
    <section id="quartos" className="bg-bg px-6 py-24 md:px-12">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">{title}</h2>
      <div className="mt-10">
        <Carousel>
          {rooms.map((room) => (
            <div key={room.name} className="w-72 shrink-0 rounded-2xl bg-surface p-6">
              <h3 className="font-display text-2xl text-ink">{room.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{room.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
