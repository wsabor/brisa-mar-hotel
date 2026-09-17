"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import type { ScrollSequenceContent } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

const MOBILE_QUERY = "(max-width: 767px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const LOAD_BATCH_SIZE = 8;

function frameSrc(path: string, index: number) {
  return `${path}/${String(index + 1).padStart(4, "0")}.webp`;
}

/** Draws `image` into `ctx` scaled to cover `width`x`height`, centered. */
function drawCover(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  width: number,
  height: number,
) {
  const imageRatio = image.naturalWidth / image.naturalHeight;
  const boxRatio = width / height;
  let drawWidth: number;
  let drawHeight: number;

  if (imageRatio > boxRatio) {
    drawHeight = height;
    drawWidth = height * imageRatio;
  } else {
    drawWidth = width;
    drawHeight = width / imageRatio;
  }

  ctx.drawImage(image, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
}

function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    [query],
  );
  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function ScrollSequence({
  framesPath,
  frameCount,
  mobileFramesPath,
  mobileFrameCount,
  scrollLength,
  reducedMotionImages,
  overlays,
}: ScrollSequenceContent) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const isMobile = useMediaQuery(MOBILE_QUERY);
  const reducedMotion = useMediaQuery(REDUCED_MOTION_QUERY);

  const path = isMobile ? mobileFramesPath : framesPath;
  const count = isMobile ? mobileFrameCount : frameCount;

  useGSAP(
    () => {
      if (reducedMotion) return;

      const section = sectionRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!section || !canvas || !ctx) return;

      let cancelled = false;
      const images: HTMLImageElement[] = [];
      const state = { frame: 0 };

      function sizeCanvas() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = section!.getBoundingClientRect();
        canvas!.width = Math.round(rect.width * dpr);
        canvas!.height = Math.round(rect.height * dpr);
        canvas!.style.width = `${rect.width}px`;
        canvas!.style.height = `${rect.height}px`;
        ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
        return { width: rect.width, height: rect.height };
      }

      let canvasSize = sizeCanvas();

      function draw(index: number) {
        // While the exact frame isn't loaded yet, fall back to the nearest loaded one.
        let drawIndex = index;
        while (drawIndex >= 0 && !images[drawIndex]?.complete) drawIndex--;
        if (drawIndex < 0) {
          drawIndex = index;
          while (drawIndex < count && !images[drawIndex]?.complete) drawIndex++;
        }
        const image = images[drawIndex];
        if (!image || !image.complete) return;

        ctx!.clearRect(0, 0, canvasSize.width, canvasSize.height);
        drawCover(ctx!, image, canvasSize.width, canvasSize.height);
      }

      const first = new window.Image();
      first.src = frameSrc(path, 0);
      first.setAttribute("fetchpriority", "high");
      images[0] = first;
      first.onload = () => !cancelled && draw(0);

      function loadRemaining() {
        let next = 1;
        function loadBatch() {
          if (cancelled) return;
          const end = Math.min(next + LOAD_BATCH_SIZE, count);
          for (; next < end; next++) {
            const image = new window.Image();
            const index = next;
            image.src = frameSrc(path, index);
            image.onload = () => !cancelled && draw(Math.round(state.frame));
            images[index] = image;
          }
          if (next < count) requestAnimationFrame(loadBatch);
        }
        loadBatch();
      }

      if (document.readyState === "complete") {
        loadRemaining();
      } else {
        window.addEventListener("load", loadRemaining, { once: true });
      }

      const tween = gsap.to(state, {
        frame: count - 1,
        ease: "none",
        snap: "frame",
        onUpdate: () => draw(Math.round(state.frame)),
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: scrollLength,
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const index = overlays.findIndex(
              (overlay) => self.progress >= overlay.from && self.progress < overlay.to,
            );
            setActiveOverlay(index === -1 ? null : index);
          },
        },
      });

      let resizeTimeout: ReturnType<typeof setTimeout>;
      function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          canvasSize = sizeCanvas();
          draw(Math.round(state.frame));
          ScrollTrigger.refresh();
        }, 150);
      }
      window.addEventListener("resize", handleResize);

      return () => {
        cancelled = true;
        clearTimeout(resizeTimeout);
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("load", loadRemaining);
        tween.scrollTrigger?.kill(true);
        tween.kill();
      };
    },
    {
      scope: sectionRef,
      dependencies: [path, count, reducedMotion, scrollLength],
      revertOnUpdate: true,
    },
  );

  if (reducedMotion) {
    return (
      <section className="grid grid-cols-2 gap-1 bg-ink md:grid-cols-4">
        {reducedMotionImages.map((src) => (
          <div key={src} className="relative aspect-[3/4]">
            <Image src={src} alt="" fill sizes="25vw" className="object-cover" />
          </div>
        ))}
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-ink">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {overlays.map((overlay, index) => (
        <p
          key={overlay.title}
          className={`absolute inset-x-6 top-1/2 -translate-y-1/2 text-center font-display text-3xl text-surface transition-opacity duration-500 md:text-5xl ${
            activeOverlay === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {overlay.title}
        </p>
      ))}
    </section>
  );
}
