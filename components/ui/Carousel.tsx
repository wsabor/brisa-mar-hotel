import type { ReactNode } from "react";

/** Native scroll-snap row for now; gains Embla wiring in the microinteractions phase. */
export function Carousel({ children }: { children: ReactNode }) {
  return (
    <div className="flex snap-x snap-proximity gap-6 overflow-x-auto pb-4">
      {children}
    </div>
  );
}
