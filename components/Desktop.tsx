"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  const { wallpaper, showWallpaper, axisCursor, iconSize } = useSettings();
  const desktopRef = useRef<HTMLDivElement>(null);

  const handleActivate = (id: WinId) => {
    if (isTouch) {
      onOpen(id);
    } else {
      onOpen(id);
    }
  };

  const scale = iconSize / 100;

  return (
    <div
      ref={desktopRef}
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
        className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 z-10 flex flex-col flex-wrap content-start gap-1.5 sm:gap-2"
        style={{
          height: isTouch ? "calc(100% - 56px)" : "calc(100% - 42px)",
          cursor: "default",
          width: "auto",
        }}
      >
        {DESKTOP_ICONS.map((d) => (
          <motion.div
            drag
            dragConstraints={desktopRef}
            dragMomentum={false}
            dragElastic={0}
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
            className={`flex flex-col items-center gap-1 p-1 sm:p-1.5 border border-dotted cursor-pointer rounded select-none touch-none ${
              selected === d.id ? "border-[#dfe9fb] bg-[#3264c8]/35" : "border-transparent"
            }`}
            style={{
              width: `${82 * scale}px`,
              height: `${88 * scale}px`,
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: `${40 * scale}px`,
                height: `${40 * scale}px`,
                filter: "drop-shadow(1px 2px 1px rgba(0,0,0,.5))",
              }}
            >
              <Icon name={d.icon} size={36 * scale} />
            </div>
            <span
              className={`text-white text-center leading-tight ${
                selected === d.id ? "bg-[#2f5fbf] px-0.5" : ""
              }`}
              style={{
                textShadow: "1px 1px 2px #000, 0 0 3px #000",
                fontSize: `${11 * scale}px`,
                maxWidth: `${80 * scale}px`,
              }}
            >
              {d.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
