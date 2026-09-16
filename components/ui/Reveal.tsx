import type { ReactNode } from "react";

/** Passthrough for now; gains a GSAP viewport reveal in the microinteractions phase. */
export function Reveal({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
