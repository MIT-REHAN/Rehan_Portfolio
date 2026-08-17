"use client";
import { useEffect, useState } from "react";

/**
 * Tracks viewport size and exposes simple responsive breakpoints.
 * mobile:  < 640px  (phones)
 * tablet:  640–1023px
 * desktop: >= 1024px
 */
export function useViewport() {
  const [size, setSize] = useState({ width: 1280, height: 800 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    setReady(true);
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const isMobile = size.width < 640;
  const isTablet = size.width >= 640 && size.width < 1024;
  const isDesktop = size.width >= 1024;
  const isTouch = isMobile || isTablet;

  return { ...size, isMobile, isTablet, isDesktop, isTouch, ready };
}
