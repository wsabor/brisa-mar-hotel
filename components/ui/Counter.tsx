"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/components/hooks/useMediaQuery";
import type { Counter as CounterData } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

export function Counter({ value, label }: CounterData) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const match = value.match(/^(\d+)(.*)$/);

  useGSAP(
    () => {
      if (reducedMotion || !ref.current || !match) return;
      const target = parseInt(match[1], 10);
      const suffix = match[2];
      const counted = { n: 0 };

      gsap.to(counted, {
        n: target,
        duration: 1.5,
        ease: "power2.out",
        snap: { n: 1 },
        onUpdate: () => {
          if (ref.current) ref.current.textContent = `${counted.n}${suffix}`;
        },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [reducedMotion, value], revertOnUpdate: true },
  );

  return (
    <div>
      <p ref={ref} className="font-display text-4xl text-ink">
        {value}
      </p>
      <p className="text-sm text-ink-soft">{label}</p>
    </div>
  );
}
