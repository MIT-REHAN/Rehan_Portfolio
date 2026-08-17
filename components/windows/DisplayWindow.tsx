"use client";
import React from "react";
import Image from "next/image";
import { useSettings, WallpaperId } from "@/lib/SettingsContext";

export default function DisplayWindow() {
  const {
    wallpaper,
    setWallpaper,
    showWallpaper,
    setShowWallpaper,
    axisCursor,
    setAxisCursor,
    pointerColor,
    setPointerColor,
    fontSize,
    setFontSize,
    iconSize,
    setIconSize,
  } = useSettings();

  const wallpapers: { id: WallpaperId; name: string; src?: string }[] = [
    { id: "default", name: "(None) / Classic Hills CSS" },
    { id: "wall1", name: "Autumn Leaves", src: "/assets/wall1.jpg" },
    { id: "wall2", name: "Deep Lake & Mountains", src: "/assets/wall2.jpg" },
    { id: "wall3", name: "Red Canyon Sunset", src: "/assets/wall3.jpg" },
    { id: "wall4", name: "Green Aurora Sky", src: "/assets/wall4.jpg" },
  ];

  const currentWall = wallpapers.find((w) => w.id === wallpaper) || wallpapers[0];

  return (
    <div className="p-4 flex flex-col h-full bg-[#ece9d8] text-[11px] font-sans">
      <div className="flex gap-1.5 border-b border-[#a0a0a0] mb-3">
        <div className="px-3 py-1 bg-white border border-[#a0a0a0] border-b-transparent rounded-t font-semibold">
          Desktop & Cursor
        </div>
      </div>

      <div className="flex-1 flex flex-col sm:flex-row gap-4 min-h-0 overflow-auto">
        {/* Monitor Preview */}
        <div className="flex-none flex flex-col items-center justify-center p-3 border border-white shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)] bg-[#7c8ba8]/30 rounded">
          {/* Outer Monitor Frame */}
          <div className="relative w-44 h-28 bg-[#111] border-[5px] border-[#333] rounded shadow-lg flex flex-col overflow-hidden">
            {/* Screen */}
            <div
              className={`flex-1 relative overflow-hidden ${
                !showWallpaper || wallpaper === "default" ? "desktop-bg" : "bg-[#0a2f8f]"
              }`}
            >
              {showWallpaper && wallpaper !== "default" && currentWall.src && (
                <Image
                  src={currentWall.src}
                  alt="Preview"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              )}
              {/* Mini taskbar representation */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1958d6] to-[#0d3fb0]" />
              {/* Mini window representation */}
              <div className="absolute top-4 left-6 w-14 h-10 border border-white/70 bg-[#ece9d8] rounded-t-sm flex flex-col">
                <div className="h-1.5 bg-[#0a2f8f] flex items-center justify-between px-0.5">
                  <div className="w-1.5 h-0.5 bg-white/50" />
                  <div className="w-1 h-0.5 bg-[#ff5e5e]" />
                </div>
              </div>
            </div>
          </div>
          {/* Monitor Stand */}
          <div className="w-8 h-4 bg-[#444]" />
          <div className="w-14 h-1.5 bg-[#333] rounded-sm" />
        </div>

        {/* Settings Selectors */}
        <div className="flex-1 flex flex-col gap-3">
          <div>
            <label className="block font-semibold mb-1 text-[#222]">Background Wallpaper:</label>
            <div className="border border-[#7f9db9] bg-white h-28 overflow-y-auto rounded-sm">
              {wallpapers.map((w) => (
                <div
                  key={w.id}
                  onClick={() => setWallpaper(w.id)}
                  className={`px-3 py-1 cursor-pointer select-none hover:bg-[#316ac5] hover:text-white ${
                    wallpaper === w.id ? "bg-[#316ac5] text-white" : "text-black"
                  }`}
                >
                  {w.name}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5 p-2.5 border border-white shadow-[inset_1px_1px_1px_rgba(0,0,0,0.1)] rounded bg-black/5">
            <label className="flex items-center gap-2 cursor-pointer font-medium text-[#222] select-none">
              <input
                type="checkbox"
                checked={showWallpaper}
                onChange={(e) => setShowWallpaper(e.target.checked)}
                className="accent-[#3a7fd6] w-3.5 h-3.5"
              />
              Show Wallpaper Image
            </label>

            <label className="flex items-center gap-2 cursor-pointer font-medium text-[#222] select-none">
              <input
                type="checkbox"
                checked={axisCursor}
                onChange={(e) => setAxisCursor(e.target.checked)}
                className="accent-[#3a7fd6] w-3.5 h-3.5"
              />
              Enable Axis Cursor (Aim Line Effect)
            </label>

            {/* Pointer Color Selector */}
            <div className="mt-1">
              <span className="block font-semibold mb-1 text-[#222]">Pointer Color:</span>
              <div className="flex gap-2">
                {[
                  { name: "Green", value: "green", hex: "#19FA2F" },
                  { name: "Red", value: "red", hex: "#ff3b30" },
                  { name: "Blue", value: "blue", hex: "#007aff" },
                  { name: "Orange", value: "orange", hex: "#ff9500" },
                  { name: "Purple", value: "purple", hex: "#af52de" },
                ].map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setPointerColor(c.value)}
                    className={`w-5.5 h-5.5 rounded-full border transition-all ${
                      pointerColor === c.value ? "border-black scale-110 ring-1 ring-black/50" : "border-gray-400"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Font & Icon Sizes */}
            <div className="mt-1 border-t border-gray-300 pt-2 flex flex-col gap-2.5">
              <div>
                <div className="flex justify-between text-[#222] font-semibold mb-0.5">
                  <span>Font Size:</span>
                  <span>{fontSize}%</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="150"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full accent-[#3a7fd6] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[#222] font-semibold mb-0.5">
                  <span>Desktop Icon Size:</span>
                  <span>{iconSize}%</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="150"
                  value={iconSize}
                  onChange={(e) => setIconSize(Number(e.target.value))}
                  className="w-full accent-[#3a7fd6] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
