"use client";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { DESKTOP_ICONS, WinId } from "@/lib/windowRegistry";
import { useSettings } from "@/lib/SettingsContext";

export default function Desktop({
  onOpen,
  isTouch,
}: {
  onOpen: (id: WinId) => void;
  isTouch: boolean;
}) {
  const [selected, setSelected] = useState<WinId | null>(null);
  const { wallpaper, showWallpaper, axisCursor } = useSettings();

  const handleActivate = (id: WinId) => {
    if (isTouch) {
      onOpen(id);
    } else {
      onOpen(id);
    }
  };

  return (
    <div
      className={`fixed inset-0 overflow-hidden ${
        !showWallpaper || wallpaper === "default" ? "desktop-bg" : "bg-[#0a2f8f]"
      }`}
      onClick={() => setSelected(null)}
    >
      {showWallpaper && wallpaper !== "default" && (
        <div className="absolute inset-0 select-none pointer-events-none z-0">
          <Image
            src={`/assets/${wallpaper}.jpg`}
            alt="Wallpaper"
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <div
        className="absolute top-2 left-2 right-2 sm:top-3.5 sm:left-3.5 sm:right-auto grid gap-1 sm:gap-0.5 justify-items-center sm:justify-items-stretch z-10"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))",
          gridAutoFlow: "row",
          cursor: "default",
        }}
      >
        {DESKTOP_ICONS.map((d) => (
          <div
            key={d.id}
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              if (isTouch) {
                handleActivate(d.id);
              } else {
                setSelected(d.id);
              }
            }}
            onDoubleClick={() => {
              if (!isTouch) onOpen(d.id);
            }}
            className={`w-[72px] sm:w-[82px] h-[80px] sm:h-[88px] flex flex-col items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 border border-dotted cursor-pointer rounded ${
              selected === d.id ? "border-[#dfe9fb] bg-[#3264c8]/35" : "border-transparent"
            }`}
          >
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center"
              style={{ filter: "drop-shadow(1px 2px 1px rgba(0,0,0,.5))" }}
            >
              <Icon name={d.icon} size={36} />
            </div>
            <span
              className={`text-white text-[10px] sm:text-[11px] text-center leading-tight max-w-[70px] sm:max-w-[80px] ${
                selected === d.id ? "bg-[#2f5fbf] px-0.5" : ""
              }`}
              style={{ textShadow: "1px 1px 2px #000, 0 0 3px #000" }}
            >
              {d.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
