"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/icons";
import { WinDef, WinId } from "@/lib/windowRegistry";
import { WinState } from "@/lib/useWindowManager";

interface Props {
  id: WinId;
  def: WinDef;
  state: WinState;
  active: boolean;
  isTouch: boolean;
  viewportW: number;
  viewportH: number;
  onClose: () => void;
  onMinimize: () => void;
  onToggleMax: () => void;
  onFocus: () => void;
  onDragEnd: (x: number, y: number) => void;
}

export default function WindowFrame({
  id,
  def,
  state,
  active,
  isTouch,
  viewportW,
  viewportH,
  onClose,
  onMinimize,
  onToggleMax,
  onFocus,
  onDragEnd,
}: Props) {
  if (state.minimized) return null;

  const dragInfo = useRef<{ sx: number; sy: number; ox: number; oy: number; dragging: boolean }>({
    sx: 0,
    sy: 0,
    ox: 0,
    oy: 0,
    dragging: false,
  });

  const draggable = !state.maximized && !isTouch;

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!draggable) return;
    const target = e.target as HTMLElement;
    if (target.closest("button")) return;
    dragInfo.current = { sx: e.clientX, sy: e.clientY, ox: state.x, oy: state.y, dragging: true };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    onFocus();
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragInfo.current.dragging) return;
    const maxX = Math.max(0, viewportW - def.w);
    const maxY = Math.max(0, viewportH - 32 - 30);
    const nx = Math.min(maxX, Math.max(0, dragInfo.current.ox + (e.clientX - dragInfo.current.sx)));
    const ny = Math.min(maxY, Math.max(0, dragInfo.current.oy + (e.clientY - dragInfo.current.sy)));
    onDragEnd(nx, ny);
  };
  const handlePointerUp = () => {
    dragInfo.current.dragging = false;
  };

  // Clamp width/height so the window never exceeds the viewport, even on tablets/small laptops.
  const maxW = Math.max(280, viewportW - 16);
  const maxH = Math.max(220, viewportH - 32 - 16);
  const w = Math.min(def.w, maxW);
  const h = Math.min(def.h, maxH);

  const fullScreen = state.maximized || isTouch;

  const style = fullScreen
    ? { left: 0, top: 0, width: "100vw", height: isTouch ? "calc(100dvh - 44px)" : "calc(100dvh - 32px)", borderRadius: 0 }
    : { left: Math.min(state.x, Math.max(0, viewportW - w)), top: Math.min(state.y, Math.max(0, viewportH - 32 - h)), width: w, height: h };

  return (
    <motion.div
      className="absolute bg-[#ece9d8] border border-[#0a3faa] rounded-t-lg rounded-b overflow-hidden flex flex-col shadow-xpwin max-w-full"
      style={{ ...style, zIndex: state.z, position: "absolute" }}
      onMouseDown={onFocus}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.16 }}
    >
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`titlebar ${active ? "" : "inactive"} h-9 sm:h-[30px] flex-none flex items-center gap-1.5 px-2 sm:px-1.5 touch-none ${
          draggable ? "cursor-grab active:cursor-grabbing" : ""
        }`}
      >
        <span className="w-4 h-4 flex-none">
          <Icon name={def.icon} size={16} />
        </span>
        <span
          className="text-white text-[12px] font-bold flex-1 truncate"
          style={{ textShadow: "1px 1px 1px rgba(0,0,0,.4)" }}
        >
          {def.title}
        </span>
        <div className="flex gap-1 sm:gap-0.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className="w-7 h-7 sm:w-[21px] sm:h-5 rounded border border-white/50 flex items-center justify-center text-[11px] font-black text-[#0a246a]"
            style={{ background: "linear-gradient(180deg,#fefefe,#c9d7f0 55%,#9fb8e0)" }}
            aria-label="Minimize"
          >
            _
          </button>
          {!isTouch && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleMax();
              }}
              className="w-7 h-7 sm:w-[21px] sm:h-5 rounded border border-white/50 flex items-center justify-center text-[11px] font-black text-[#0a246a]"
              style={{ background: "linear-gradient(180deg,#fefefe,#c9d7f0 55%,#9fb8e0)" }}
              aria-label="Maximize"
            >
              ▢
            </button>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-7 h-7 sm:w-[21px] sm:h-5 rounded border border-white/50 flex items-center justify-center text-[11px] font-black text-white"
            style={{ background: "linear-gradient(180deg,#ff8a7a,#e8483a 55%,#c22415)" }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-white overscroll-contain">{def.render()}</div>
      <div className="h-5 flex-none bg-[#ece9d8] border-t border-white shadow-[inset_0_1px_0_#b8b5a2] text-[10.5px] text-[#333] hidden sm:flex items-center px-2">
        {def.status}
      </div>
    </motion.div>
  );
}
