import type { ReactNode } from "react";

/** Lays items out in a scrollable row for now; gains Embla wiring in Phase 2. */
export function Carousel({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {children}
    </div>
  );
}
