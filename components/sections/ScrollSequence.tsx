import type { ScrollSequenceContent } from "@/content/site";

/** Static placeholder; gains the pinned canvas frame sequence in Phase 3. */
export function ScrollSequence({ overlays }: ScrollSequenceContent) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-surface px-6 text-center">
      <p className="font-display text-3xl text-ink">{overlays[0]?.title}</p>
    </section>
  );
}
