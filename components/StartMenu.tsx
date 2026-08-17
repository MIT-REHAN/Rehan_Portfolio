"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/icons";
import { WIN_DEFS, WinId } from "@/lib/windowRegistry";

const LEFT: { id: WinId; label: string; bold?: boolean }[] = [
  { id: "mycomputer", label: "About Rehan", bold: true },
  { id: "resume", label: "Rehan_Resume", bold: true },
  { id: "projects", label: "My Projects" },
  { id: "skills", label: "Skills & Tools" },
  { id: "certificates", label: "Certificates" },
  { id: "video", label: "Founder Talk.mp4" },
];
const RIGHT: { id: WinId; label: string }[] = [
  { id: "contact", label: "Contact Me" },
  { id: "ie", label: "Social Links" },
  { id: "bin", label: "Recycle Bin" },
];

export default function StartMenu({
  open,
  isTouch,
  onOpenWindow,
  onLogOff,
  onDownloadResume,
}: {
  open: boolean;
  isTouch: boolean;
  onOpenWindow: (id: WinId) => void;
  onLogOff: () => void;
  onDownloadResume: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.15 }}
          className={
            isTouch
              ? "fixed left-0 right-0 bottom-11 bg-white border-t border-[#0a3faa] rounded-t-xl overflow-hidden shadow-2xl z-[99998] max-h-[75vh] flex flex-col"
              : "fixed left-0.5 bottom-8 w-[340px] bg-white border border-[#0a3faa] rounded-t-lg rounded-b overflow-hidden shadow-2xl z-[99998]"
          }
        >
          <div
            className="flex items-center gap-2.5 px-3 sm:px-2.5 h-16 sm:h-14 flex-none"
            style={{ background: "linear-gradient(90deg,#1958d6,#3a92ff 60%,#1958d6)" }}
          >
            <div className="relative w-11 h-11 sm:w-10 sm:h-10 rounded border-2 border-white overflow-hidden flex-none">
              <Image src="/assets/profile.jpg" alt="Rehan Azim" fill sizes="44px" className="object-cover" />
            </div>
            <div className="text-white text-base sm:text-sm font-bold" style={{ textShadow: "1px 1px 2px rgba(0,0,0,.4)" }}>
              Rehan Azim
            </div>
          </div>
          <div className={`flex ${isTouch ? "flex-col overflow-y-auto" : "min-h-[300px]"}`}>
            <div className="flex-1 bg-white py-1.5">
              {LEFT.map((i) => (
                <button
                  key={i.id}
                  onClick={() => onOpenWindow(i.id)}
                  className={`w-full flex items-center gap-2.5 px-3 sm:px-2.5 py-2.5 sm:py-1.5 text-[13px] sm:text-[11.5px] text-left hover:bg-[#3a92ff] hover:text-white ${
                    i.bold ? "font-bold" : ""
                  }`}
                >
                  <span className="w-7 h-7 sm:w-6 sm:h-6 flex-none">
                    <Icon name={WIN_DEFS[i.id].icon} size={26} />
                  </span>
                  {i.label}
                </button>
              ))}
              <div className="h-px bg-[#dfe3ee] my-1 mx-2.5" />
              <button
                onClick={onDownloadResume}
                className="w-full flex items-center gap-2.5 px-3 sm:px-2.5 py-2.5 sm:py-1.5 text-[13px] sm:text-[11.5px] text-left hover:bg-[#3a92ff] hover:text-white"
              >
                <span className="w-7 h-7 sm:w-6 sm:h-6 flex-none">
                  <Icon name="resume" size={26} />
                </span>
                Download Resume (PDF)
              </button>
              {isTouch && (
                <>
                  <div className="h-px bg-[#dfe3ee] my-1 mx-2.5" />
                  {RIGHT.map((i) => (
                    <button
                      key={i.id}
                      onClick={() => onOpenWindow(i.id)}
                      className="w-full flex items-center gap-2.5 px-3 py-2.5 text-[13px] text-left hover:bg-[#3a92ff] hover:text-white"
                    >
                      <span className="w-7 h-7 flex-none">
                        <Icon name={WIN_DEFS[i.id].icon} size={26} />
                      </span>
                      {i.label}
                    </button>
                  ))}
                </>
              )}
            </div>
            {!isTouch && (
              <div
                className="w-[120px] py-1.5"
                style={{ background: "linear-gradient(180deg,#d3e0f7,#c1d5f5)", borderLeft: "1px solid #9fb8e0" }}
              >
                {RIGHT.map((i) => (
                  <button
                    key={i.id}
                    onClick={() => onOpenWindow(i.id)}
                    className="w-full flex items-center gap-2.5 px-2.5 py-1.5 text-[11px] text-left hover:bg-[#3a92ff] hover:text-white"
                  >
                    <span className="w-6 h-6 flex-none">
                      <Icon name={WIN_DEFS[i.id].icon} size={24} />
                    </span>
                    {i.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-end px-3 sm:px-2.5 py-2 sm:py-1 flex-none" style={{ background: "linear-gradient(180deg,#1958d6,#0d3fb0)" }}>
            <button onClick={onLogOff} className="text-white text-[13px] sm:text-[11px] px-3 sm:px-2 py-1.5 sm:py-1 rounded hover:bg-white/20">
              Log Off ▸
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
