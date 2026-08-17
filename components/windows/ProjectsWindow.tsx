"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { PROJECTS, CATEGORIES } from "@/lib/data";
import { Icon } from "@/components/icons";
import { getProjectImage } from "@/lib/ogImage";

function ProjectThumb({ name, demo }: { name: string; demo: string }) {
  const [failed, setFailed] = useState(false);
  const src = getProjectImage(demo);

  if (!src || failed) {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();
    return (
      <div className="w-full aspect-video rounded bg-gradient-to-tr from-[#1d62f0] via-[#3a92ff] to-[#124dbf] p-3 flex flex-col justify-between text-white border border-[#0a2f8f] shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
        <div className="flex justify-between items-start">
          <div className="bg-white/20 p-1 rounded backdrop-blur-sm">
            <Icon name="projects" size={18} />
          </div>
          <span className="text-[9px] uppercase font-bold tracking-wider text-[#cfe0ff]/80">Project Web</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-wide text-white drop-shadow">{initials}</span>
          <span className="text-[9.5px] text-[#b0d0ff] truncate">{name}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full aspect-video rounded overflow-hidden border border-[#c7d4ee] bg-[#0a2f8f]">
      <Image
        src={src}
        alt={`${name} preview`}
        fill
        sizes="220px"
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function ProjectsWindow() {
  const [cat, setCat] = useState<string>("__all");
  const containerRef = useRef<HTMLDivElement>(null);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0;
      setNarrow(w < 460);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const list = useMemo(
    () => (cat === "__all" ? PROJECTS : PROJECTS.filter((p) => p.cat === cat)),
    [cat]
  );

  const categoryButtons = (
    <>
      <button
        onClick={() => setCat("__all")}
        className={`flex items-center gap-1.5 text-[11.3px] text-left flex-none ${
          narrow
            ? `px-3 py-1.5 rounded-full border ${cat === "__all" ? "bg-[#0a3faa] text-white border-[#0a3faa]" : "bg-white border-[#a9bcd8]"}`
            : `w-full px-2.5 py-1.5 ${cat === "__all" ? "bg-[#a9c8f5] font-bold" : "hover:bg-[#c3d7f5]"}`
        }`}
      >
        {!narrow && <Icon name="projects" size={14} />}
        All Projects
      </button>
      {CATEGORIES.map((c) => (
        <button
          key={c}
          onClick={() => setCat(c)}
          className={`flex items-center gap-1.5 text-[11.3px] text-left flex-none ${
            narrow
              ? `px-3 py-1.5 rounded-full border whitespace-nowrap ${cat === c ? "bg-[#0a3faa] text-white border-[#0a3faa]" : "bg-white border-[#a9bcd8]"}`
              : `w-full px-2.5 py-1.5 ${cat === c ? "bg-[#a9c8f5] font-bold" : "hover:bg-[#c3d7f5]"}`
          }`}
        >
          {!narrow && <Icon name="projects" size={14} />}
          {c}
        </button>
      ))}
    </>
  );

  return (
    <div ref={containerRef} className={`h-full ${narrow ? "flex flex-col" : "flex"}`}>
      {narrow ? (
        <div className="flex-none bg-[#dce6f7] border-b border-[#a9bcd8] p-2 flex gap-1.5 overflow-x-auto no-scrollbar">
          {categoryButtons}
        </div>
      ) : (
        <div className="w-[170px] flex-none bg-[#dce6f7] border-r border-[#a9bcd8] py-2 overflow-y-auto">
          <div className="text-[10px] text-[#5476ad] font-bold px-2.5 py-1 uppercase tracking-wide">
            Categories
          </div>
          {categoryButtons}
        </div>
      )}
      <div className="flex-1 p-2.5 overflow-y-auto bg-[#fdfdfb]">
        <div className="text-[10.5px] text-[#666] mb-2">
          {list.length} {list.length === 1 ? "object" : "objects"}
        </div>
        <div
          className="grid gap-2.5"
          style={{ gridTemplateColumns: narrow ? "repeat(auto-fill,minmax(150px,1fr))" : "repeat(auto-fill,minmax(190px,1fr))" }}
        >
          {list.map((p) => (
            <div
              key={p.name}
              className="p-2 rounded border border-transparent hover:bg-[#dbe8fc] hover:border-[#a9c8f5]"
            >
              <ProjectThumb name={p.name} demo={p.demo} />
              <div className="flex items-center gap-1.5 mt-1.5 mb-1">
                <span className="text-[11.5px] font-bold text-[#0a3faa]">{p.name}</span>
              </div>
              <div className="text-[10.3px] text-[#444] leading-snug">{p.desc}</div>
              <div className="flex gap-1.5 mt-1.5">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9.8px] text-white bg-[#3a7fd6] hover:brightness-110 px-2 py-0.5 rounded-full no-underline"
                >
                  Live Demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9.8px] text-white bg-[#555] hover:brightness-110 px-2 py-0.5 rounded-full no-underline"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
