"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export type WallpaperId = "wall1" | "wall2" | "wall3" | "wall4" | "default";

interface SettingsContextType {
  wallpaper: WallpaperId;
  setWallpaper: (w: WallpaperId) => void;
  showWallpaper: boolean;
  setShowWallpaper: (s: boolean) => void;
  axisCursor: boolean;
  setAxisCursor: (c: boolean) => void;
  pointerColor: string;
  setPointerColor: (c: string) => void;
  fontSize: number;
  setFontSize: (s: number) => void;
  iconSize: number;
  setIconSize: (s: number) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [wallpaper, setWallpaper] = useState<WallpaperId>("wall1");
  const [showWallpaper, setShowWallpaper] = useState<boolean>(true);
  const [axisCursor, setAxisCursor] = useState<boolean>(true);
  const [pointerColor, setPointerColor] = useState<string>("green");
  const [fontSize, setFontSize] = useState<number>(100);
  const [iconSize, setIconSize] = useState<number>(100);

  // Load from localStorage if client side
  useEffect(() => {
    const savedWall = localStorage.getItem("xp_wallpaper") as WallpaperId;
    const savedShow = localStorage.getItem("xp_show_wallpaper");
    const savedCursor = localStorage.getItem("xp_axis_cursor");
    const savedPointerColor = localStorage.getItem("xp_pointer_color");
    const savedFontSize = localStorage.getItem("xp_font_size");
    const savedIconSize = localStorage.getItem("xp_icon_size");

    if (savedWall) setWallpaper(savedWall);
    if (savedShow !== null) setShowWallpaper(savedShow === "true");
    if (savedCursor !== null) setAxisCursor(savedCursor === "true");
    if (savedPointerColor !== null) setPointerColor(savedPointerColor);
    if (savedFontSize !== null) setFontSize(Number(savedFontSize));
    if (savedIconSize !== null) setIconSize(Number(savedIconSize));
  }, []);

  const updateWallpaper = (w: WallpaperId) => {
    setWallpaper(w);
    localStorage.setItem("xp_wallpaper", w);
  };

  const updateShowWallpaper = (s: boolean) => {
    setShowWallpaper(s);
    localStorage.setItem("xp_show_wallpaper", String(s));
  };

  const updateAxisCursor = (c: boolean) => {
    setAxisCursor(c);
    localStorage.setItem("xp_axis_cursor", String(c));
  };

  const updatePointerColor = (c: string) => {
    setPointerColor(c);
    localStorage.setItem("xp_pointer_color", c);
  };

  const updateFontSize = (s: number) => {
    setFontSize(s);
    localStorage.setItem("xp_font_size", String(s));
  };

  const updateIconSize = (s: number) => {
    setIconSize(s);
    localStorage.setItem("xp_icon_size", String(s));
  };

  return (
    <SettingsContext.Provider
      value={{
        wallpaper,
        setWallpaper: updateWallpaper,
        showWallpaper,
        setShowWallpaper: updateShowWallpaper,
        axisCursor,
        setAxisCursor: updateAxisCursor,
        pointerColor,
        setPointerColor: updatePointerColor,
        fontSize,
        setFontSize: updateFontSize,
        iconSize,
        setIconSize: updateIconSize,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
