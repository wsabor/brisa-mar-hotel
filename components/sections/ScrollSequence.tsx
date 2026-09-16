import type { ScrollSequenceContent } from "@/content/site";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

/** Static placeholder; gains the pinned canvas frame sequence in Phase 3. */
export function ScrollSequence({ overlays }: ScrollSequenceContent) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      <PlaceholderImage tone="dark" className="absolute inset-0" />
      <p className="relative z-10 font-display text-3xl text-surface md:text-5xl">
        {overlays[0]?.title}
      </p>
    </section>
  );
}
