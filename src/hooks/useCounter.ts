"use client";

import { useEffect, useState, useRef, useCallback } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function useCounter(end: number, active: boolean, duration = 2200): number {
  const [val, setVal] = useState(0);
  const raf = useRef(0);

  const run = useCallback(() => {
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setVal(Math.round(easeOutCubic(p) * end));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }, [end, duration]);

  useEffect(() => {
    if (active) run();
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [active, run]);

  return val;
}
