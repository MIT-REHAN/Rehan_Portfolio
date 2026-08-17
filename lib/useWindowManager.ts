"use client";
import { useCallback, useRef, useState } from "react";
import { WinId } from "@/lib/windowRegistry";

export interface WinState {
  id: WinId;
  x: number;
  y: number;
  z: number;
  minimized: boolean;
  maximized: boolean;
  prev?: { x: number; y: number };
}

export function useWindowManager() {
  const [windows, setWindows] = useState<Record<string, WinState>>({});
  const [order, setOrder] = useState<WinId[]>([]);
  const zCounter = useRef(10);
  const offsetCounter = useRef(0);

  const open = useCallback((id: WinId, forceMaximized = false) => {
    setWindows((prev) => {
      if (prev[id]) {
        zCounter.current += 1;
        return {
          ...prev,
          [id]: { ...prev[id], minimized: false, z: zCounter.current },
        };
      }
      offsetCounter.current = (offsetCounter.current + 1) % 8;
      const off = offsetCounter.current;
      zCounter.current += 1;
      return {
        ...prev,
        [id]: {
          id,
          x: forceMaximized ? 0 : 60 + off * 26,
          y: forceMaximized ? 0 : 40 + off * 22,
          z: zCounter.current,
          minimized: false,
          maximized: forceMaximized,
        },
      };
    });
    setOrder((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const close = useCallback((id: WinId) => {
    setWindows((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setOrder((prev) => prev.filter((x) => x !== id));
  }, []);

  const minimize = useCallback((id: WinId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], minimized: true },
    }));
  }, []);

  const focus = useCallback((id: WinId) => {
    zCounter.current += 1;
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], minimized: false, z: zCounter.current },
    }));
  }, []);

  const toggleMaximize = useCallback((id: WinId) => {
    setWindows((prev) => {
      const w = prev[id];
      if (!w) return prev;
      if (!w.maximized) {
        return { ...prev, [id]: { ...w, maximized: true, prev: { x: w.x, y: w.y } } };
      }
      return {
        ...prev,
        [id]: { ...w, maximized: false, x: w.prev?.x ?? w.x, y: w.prev?.y ?? w.y },
      };
    });
  }, []);

  const setPosition = useCallback((id: WinId, x: number, y: number) => {
    setWindows((prev) => (prev[id] ? { ...prev, [id]: { ...prev[id], x, y } } : prev));
  }, []);

  const isTop = useCallback(
    (id: WinId) => {
      const w = windows[id];
      if (!w) return false;
      return w.z === Math.max(...order.map((k) => windows[k]?.z ?? 0));
    },
    [windows, order]
  );

  return { windows, order, open, close, minimize, focus, toggleMaximize, setPosition, isTop };
}
