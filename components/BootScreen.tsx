"use client";
import { motion } from "framer-motion";
import { TAGLINE } from "@/lib/data";

function Flag() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-[2px] sm:gap-[3px] flagwave">
      <span className="w-5 h-5 sm:w-7 sm:h-7 rounded-sm bg-[#ff8a1e]" />
      <span className="w-5 h-5 sm:w-7 sm:h-7 rounded-sm bg-[#3fce4a]" />
      <span className="w-5 h-5 sm:w-7 sm:h-7 rounded-sm bg-[#1e8fff]" />
      <span className="w-5 h-5 sm:w-7 sm:h-7 rounded-sm bg-[#ffe11e]" />
    </div>
  );
}

export default function BootScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center text-white px-4">
        <div className="text-xs sm:text-sm tracking-wide text-[#cfd8ea] mb-2">{TAGLINE}</div>
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-7 sm:mb-9">
          <Flag />
          <div className="text-3xl sm:text-5xl tracking-wide">
            <b className="font-bold">Rehan</b>
            <i className="not-italic text-[#ff8a1e] font-normal text-base sm:text-2xl align-super">XP</i>
          </div>
        </div>
        <div className="w-44 sm:w-56 h-3 sm:h-3.5 mx-auto border border-[#4a4a4a] rounded-sm overflow-hidden bg-[#111]">
          <div className="w-2/5 h-full bg-gradient-to-r from-[#0a3fae] via-[#2f7dff] to-[#0a3fae] shadow-[0_0_6px_#3f8dff] bootbar" />
        </div>
        <div className="mt-4 text-[10px] sm:text-[11px] text-[#9ab6e8] tracking-wide">Starting up&hellip;</div>
      </div>
    </motion.div>
  );
}
