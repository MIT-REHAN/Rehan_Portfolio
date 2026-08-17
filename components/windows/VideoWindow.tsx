"use client";
import { useState } from "react";
import Image from "next/image";
import { YOUTUBE_ID } from "@/lib/data";

export default function VideoWindow() {
  const [playing, setPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  return (
    <div className="p-4">
      <div className="xp-h1">Founder Talk</div>
      <p className="xp-p">A conversation worth sharing on building and leading as a young founder.</p>
      <div className="mt-3 border-2 border-[#0a3faa] rounded overflow-hidden bg-black relative aspect-video">
        {playing ? (
          <iframe
            className="w-full h-full block"
            src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1`}
            title="Founder talk"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            className="w-full h-full relative group"
            onClick={() => setPlaying(true)}
            aria-label="Play video"
          >
            {!thumbError ? (
              <Image
                src={`https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg`}
                alt="Video thumbnail"
                fill
                sizes="520px"
                className="object-cover"
                onError={() => setThumbError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1958d6] to-[#0a2f8f]" />
            )}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 rounded-full bg-black/60 group-hover:bg-black/75 flex items-center justify-center transition-colors">
                <span
                  className="ml-1"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "12px solid transparent",
                    borderBottom: "12px solid transparent",
                    borderLeft: "20px solid #fff",
                  }}
                />
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
