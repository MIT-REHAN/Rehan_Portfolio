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
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [wallpaper, setWallpaper] = useState<WallpaperId>("wall1");
  const [showWallpaper, setShowWallpaper] = useState<boolean>(true);
  const [axisCursor, setAxisCursor] = useState<boolean>(true);

  // Load from localStorage if client side
  useEffect(() => {
    const savedWall = localStorage.getItem("xp_wallpaper") as WallpaperId;
    const savedShow = localStorage.getItem("xp_show_wallpaper");
    const savedCursor = localStorage.getItem("xp_axis_cursor");

    if (savedWall) setWallpaper(savedWall);
    if (savedShow !== null) setShowWallpaper(savedShow === "true");
    if (savedCursor !== null) setAxisCursor(savedCursor === "true");
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

  return (
    <SettingsContext.Provider
      value={{
        wallpaper,
        setWallpaper: updateWallpaper,
        showWallpaper,
        setShowWallpaper: updateShowWallpaper,
        axisCursor,
        setAxisCursor: updateAxisCursor,
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
