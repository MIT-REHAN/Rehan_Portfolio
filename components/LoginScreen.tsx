"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TAGLINE } from "@/lib/data";

export default function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex flex-col text-white"
      style={{
        background:
          "radial-gradient(ellipse at center, #2a63d6 0%, #0a2f8f 65%, #04174d 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-10 sm:h-16 bg-gradient-to-r from-[#1958d6] via-[#3a92ff] to-[#1958d6] flex-none" />
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 sm:px-6 overflow-y-auto py-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
            <div className="grid grid-cols-2 grid-rows-2 gap-[2px] flagwave">
              <span className="w-4 h-4 sm:w-6 sm:h-6 rounded-sm bg-[#ff8a1e]" />
              <span className="w-4 h-4 sm:w-6 sm:h-6 rounded-sm bg-[#3fce4a]" />
              <span className="w-4 h-4 sm:w-6 sm:h-6 rounded-sm bg-[#1e8fff]" />
              <span className="w-4 h-4 sm:w-6 sm:h-6 rounded-sm bg-[#ffe11e]" />
            </div>
            <div className="text-2xl sm:text-4xl">
              <b className="font-bold">Rehan</b>
              <i className="not-italic text-[#8fb8ff] font-normal">XP</i>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-[#cfe0ff]">Portfolio Edition</div>
          <div className="mt-5 sm:mt-8 text-sm sm:text-base px-2">To begin, tap on Rehan Azim to log in</div>
        </div>

        <motion.button
          onClick={onLogin}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3 sm:gap-4 bg-transparent"
        >
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-md border-2 border-white shadow-lg overflow-hidden relative bg-white/10 flex-none">
            <Image
              src="/assets/profile.jpg"
              alt="Rehan Azim"
              fill
              sizes="80px"
              className="object-cover"
              priority
            />
          </div>
          <div className="text-left">
            <div className="text-base sm:text-xl font-semibold">Rehan Azim</div>
            <div className="text-[11px] sm:text-xs text-[#bcd4ff]">{TAGLINE}</div>
          </div>
        </motion.button>
      </div>
      <div className="h-auto sm:h-12 bg-gradient-to-r from-[#1958d6] to-[#0d3fb0] flex flex-col sm:flex-row items-center sm:justify-between gap-0.5 sm:gap-0 px-4 sm:px-6 py-2 sm:py-0 text-[10px] sm:text-xs text-[#cfe0ff] text-center sm:text-left flex-none">
        <span>After you log on, the desktop will load your work</span>
        <span>Every detail has been designed</span>
      </div>
    </motion.div>
  );
}
