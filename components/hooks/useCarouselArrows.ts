"use client";

import type { EmblaCarouselType } from "embla-carousel";
import { useMemo, useRef, useSyncExternalStore } from "react";

interface ArrowState {
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

const INITIAL_STATE: ArrowState = { canScrollPrev: false, canScrollNext: false };

export function useCarouselArrows(emblaApi: EmblaCarouselType | undefined) {
  const lastState = useRef(INITIAL_STATE);

  const subscribe = useMemo(() => {
    return (callback: () => void) => {
      if (!emblaApi) return () => {};
      emblaApi.on("select", callback).on("reInit", callback);
      return () => {
        emblaApi.off("select", callback).off("reInit", callback);
      };
    };
  }, [emblaApi]);

  const getSnapshot = () => {
    if (!emblaApi) return INITIAL_STATE;
    const canScrollPrev = emblaApi.canScrollPrev();
    const canScrollNext = emblaApi.canScrollNext();
    if (
      lastState.current.canScrollPrev === canScrollPrev &&
      lastState.current.canScrollNext === canScrollNext
    ) {
      return lastState.current;
    }
    lastState.current = { canScrollPrev, canScrollNext };
    return lastState.current;
  };

  const { canScrollPrev, canScrollNext } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => INITIAL_STATE,
  );

  return {
    canScrollPrev,
    canScrollNext,
    scrollPrev: () => emblaApi?.scrollPrev(),
    scrollNext: () => emblaApi?.scrollNext(),
  };
}
