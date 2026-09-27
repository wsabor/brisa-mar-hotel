"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/components/hooks/useMediaQuery";
import { Counter } from "@/components/ui/Counter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { AboutContent } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

export function About({
  eyebrow,
  title,
  paragraph,
  counters,
  image,
}: AboutContent) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !cardRef.current) return;

      gsap.fromTo(
        cardRef.current,
        { y: 120 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 45%",
            scrub: true,
          },
        },
      );
    },
    { scope: sectionRef, dependencies: [reducedMotion], revertOnUpdate: true },
  );

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative z-10 bg-surface px-6 py-24 md:px-12"
    >
      <div
        ref={cardRef}
        className="mx-auto grid max-w-5xl gap-10 rounded-2xl bg-bg p-8 shadow-xl  md:grid-cols-2 md:p-14"
      >
        <div className="flex flex-col justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-ink-soft">{paragraph}</p>
          <div className="mt-10 flex gap-10">
            {counters.map((counter) => (
              <Counter key={counter.label} {...counter} />
            ))}
          </div>
        </div>
        <div className="relative min-h-64 overflow-hidden rounded-xl md:min-h-full">
          <Image
            src={image}
            alt="Fachada do Hotel Brisa do Mar"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
