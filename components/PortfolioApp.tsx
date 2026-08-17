"use client";
import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import BootScreen from "@/components/BootScreen";
import LoginScreen from "@/components/LoginScreen";
import Desktop from "@/components/Desktop";
import Taskbar from "@/components/Taskbar";
import StartMenu from "@/components/StartMenu";
import WindowFrame from "@/components/WindowFrame";
import CrosshairCursor from "@/components/CrosshairCursor";
import { WIN_DEFS, WinId } from "@/lib/windowRegistry";
import { useWindowManager } from "@/lib/useWindowManager";
import { useViewport } from "@/lib/useViewport";
import { useSettings } from "@/lib/SettingsContext";

type Stage = "boot" | "login" | "desktop";

export default function PortfolioApp() {
  const [stage, setStage] = useState<Stage>("boot");
  const [startOpen, setStartOpen] = useState(false);
  const wm = useWindowManager();
  const { isTouch, width: viewportW, height: viewportH } = useViewport();
  const { axisCursor } = useSettings();
  const mainRef = useRef<HTMLDivElement>(null);

  const handleLogin = useCallback(() => {
    setStage("desktop");
    wm.open("mycomputer");
  }, [wm]);

  const handleLogOff = useCallback(() => {
    setStartOpen(false);
    setStage("boot");
    setTimeout(() => setStage("login"), 2200);
  }, []);

  const downloadResume = useCallback(() => {
    const a = document.createElement("a");
    a.href = "/assets/Rehan-Azim-Resume.pdf";
    a.download = "Rehan-Azim-Resume.pdf";
    a.click();
  }, []);

  const topZ = Math.max(0, ...wm.order.map((id) => wm.windows[id]?.z ?? 0));

  return (
    <main ref={mainRef} className="fixed inset-0">
      {axisCursor && stage === "desktop" && (
        <style dangerouslySetInnerHTML={{ __html: `* { cursor: none !important; }` }} />
      )}

      <AnimatePresence>
        {stage === "boot" && <BootScreenTimer key="boot" onDone={() => setStage("login")} />}
      </AnimatePresence>
      <AnimatePresence>
        {stage === "login" && <LoginScreen key="login" onLogin={handleLogin} />}
      </AnimatePresence>

      {stage === "desktop" && (
        <>
          <Desktop onOpen={wm.open} isTouch={isTouch} />

          <div className="fixed inset-0 pointer-events-none">
            <div className="relative w-full h-full pointer-events-none">
              <AnimatePresence>
                {wm.order.map((id) => {
                  const state = wm.windows[id];
                  if (!state || state.minimized) return null;
                  const def = WIN_DEFS[id];
                  return (
                    <div key={id} className="pointer-events-auto">
                      <WindowFrame
                        id={id}
                        def={def}
                        state={state}
                        active={state.z === topZ}
                        isTouch={isTouch}
                        viewportW={viewportW}
                        viewportH={viewportH}
                        onClose={() => wm.close(id)}
                        onMinimize={() => wm.minimize(id)}
                        onToggleMax={() => wm.toggleMaximize(id)}
                        onFocus={() => wm.focus(id)}
                        onDragEnd={(x, y) => wm.setPosition(id, x, y)}
                      />
                    </div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          <StartMenu
            open={startOpen}
            isTouch={isTouch}
            onOpenWindow={(id: WinId) => {
              wm.open(id);
              setStartOpen(false);
            }}
            onLogOff={handleLogOff}
            onDownloadResume={() => {
              downloadResume();
              setStartOpen(false);
            }}
          />

          <Taskbar
            order={wm.order}
            windows={wm.windows}
            isTouch={isTouch}
            onStartClick={() => setStartOpen((v) => !v)}
            onTaskClick={(id) => {
              const w = wm.windows[id];
              if (!w) return;
              if (w.minimized) wm.focus(id);
              else if (w.z === topZ) wm.minimize(id);
              else wm.focus(id);
            }}
          />

          {axisCursor && <CrosshairCursor containerRef={mainRef} />}
        </>
      )}
    </main>
  );
}

function BootScreenTimer({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <BootScreen />;
}
