"use client";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { WIN_DEFS, WinId } from "@/lib/windowRegistry";
import { WinState } from "@/lib/useWindowManager";

function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      let h = d.getHours();
      const m = d.getMinutes();
      const ampm = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      setTime(`${h}:${m.toString().padStart(2, "0")} ${ampm}`);
    };
    tick();
    const t = setInterval(tick, 10000);
    return () => clearInterval(t);
  }, []);
  return time;
}

export default function Taskbar({
  order,
  windows,
  isTouch,
  onStartClick,
  onTaskClick,
}: {
  order: WinId[];
  windows: Record<string, WinState>;
  isTouch: boolean;
  onStartClick: () => void;
  onTaskClick: (id: WinId) => void;
}) {
  const time = useClock();
  const topZ = Math.max(0, ...order.map((k) => windows[k]?.z ?? 0));

  return (
    <div
      className="fixed left-0 right-0 bottom-0 h-11 sm:h-8 taskbar-bg border-t border-[#6fa8ff] flex items-center z-[99999] shadow-[0_-1px_4px_rgba(0,0,0,.3)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <button
        onClick={onStartClick}
        id="startbtn"
        className="h-9 sm:h-[26px] mx-1 px-3 sm:px-3.5 sm:pl-2 rounded-md start-btn-bg border border-[#2c7d10] flex items-center gap-1.5 shadow flex-none"
      >
        <div className="grid grid-cols-2 grid-rows-2 gap-[1px]">
          <span className="w-1.5 h-1.5 rounded-[1px] bg-[#ff8a1e]" />
          <span className="w-1.5 h-1.5 rounded-[1px] bg-[#3fce4a]" />
          <span className="w-1.5 h-1.5 rounded-[1px] bg-[#1e8fff]" />
          <span className="w-1.5 h-1.5 rounded-[1px] bg-[#ffe11e]" />
        </div>
        <span className="text-white font-extrabold italic text-sm" style={{ textShadow: "1px 1px 1px rgba(0,0,0,.5)" }}>
          start
        </span>
      </button>
      <div className="w-px h-6 sm:h-5.5 bg-white/30 mx-1 flex-none" />
      <div className="flex-1 flex gap-1 sm:gap-0.5 overflow-x-auto overflow-y-hidden h-full items-center pl-0.5 no-scrollbar">
        {order.map((id) => {
          const w = windows[id];
          if (!w) return null;
          const def = WIN_DEFS[id];
          const active = !w.minimized && w.z === topZ;
          return (
            <button
              key={id}
              onClick={() => onTaskClick(id)}
              className={`h-9 sm:h-6 flex-none w-9 sm:w-auto sm:min-w-[140px] sm:max-w-[180px] rounded border border-[#0a3faa] text-white text-[11px] flex items-center justify-center sm:justify-start gap-1.5 px-0 sm:px-2 truncate ${
                active ? "shadow-[inset_1px_1px_3px_rgba(0,0,0,.5)]" : "shadow-[inset_0_1px_0_rgba(255,255,255,.3)]"
              }`}
              style={{
                background: active
                  ? "linear-gradient(180deg,#0d3fb0,#0a2f8f)"
                  : "linear-gradient(180deg,#3a7fe0,#1958d6)",
              }}
            >
              <span className="w-4 h-4 sm:w-3.5 sm:h-3.5 flex-none">
                <Icon name={def.icon} size={16} />
              </span>
              <span className="truncate hidden sm:inline">{def.title}</span>
            </button>
          );
        })}
      </div>
      <div
        className="ml-auto h-9 sm:h-[26px] flex items-center gap-2 px-2.5 text-white text-[11px] rounded-l flex-none"
        style={{ background: "linear-gradient(180deg,#1247b8,#0d3fb0)" }}
      >
        <span>{time}</span>
      </div>
    </div>
  );
}
