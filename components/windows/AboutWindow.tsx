import Image from "next/image";
import { ABOUT_BULLETS } from "@/lib/data";

export default function AboutWindow() {
  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-none w-28 mx-auto sm:mx-0 text-center">
          <div className="relative w-28 h-28 rounded-md border-[3px] border-[#0a3faa] shadow-md overflow-hidden mx-auto">
            <Image src="/assets/profile.jpg" alt="Rehan Azim" fill sizes="112px" className="object-cover" priority />
          </div>
        </div>
        <div className="flex-1">
          <div className="xp-h1">Rehan Azim</div>
          <p className="xp-p">
            Innovative problem-solver and tech leader passionate about impactful projects,
            entrepreneurship, AI solutions, and creating positive change in communities.
          </p>
          <p className="xp-p">
            <b>Location:</b> Pune, Maharashtra, India
            <br />
            <b>Email:</b> rehan5.azim@gmail.com
            <br />
            <b>Phone:</b> +91 8600175623
          </p>
        </div>
      </div>

      <div className="xp-h2">🚀 About Me</div>
      <ul className="pl-1 list-none">
        {ABOUT_BULLETS.map((b) => (
          <li className="xp-p" key={b}>{b}</li>
        ))}
      </ul>

      <div className="xp-h2">Highlights</div>
      <ul className="list-disc pl-5">
        <li className="xp-p">Engineered a $99 wearable that converts speech to vibration for 18M+ deaf individuals worldwide.</li>
        <li className="xp-p">Founded Firehouse Media, helping 20+ companies grow sales by 67% through free creative & dev services.</li>
        <li className="xp-p">Authored &ldquo;Master of Web Development&rdquo; — 11,000+ copies distributed through NGOs.</li>
        <li className="xp-p">2nd place at HackAura 1.0 (2026) with an explainable-trust marketplace platform.</li>
        <li className="xp-p">Finalist, HP Enterprise AI India Hackathon.</li>
      </ul>
    </div>
  );
}
