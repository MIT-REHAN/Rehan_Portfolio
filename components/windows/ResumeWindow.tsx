import { WORK, HONORS, CERTIFICATIONS } from "@/lib/data";

export default function ResumeWindow() {
  return (
    <div className="p-4">
      <div className="xp-h1">
        Resume{" "}
        <span className="inline-block bg-[#ffefa0] border border-[#e0c04a] text-[#5a4400] text-[10px] px-2 py-[1px] rounded-full ml-1">
          Feb 2023 – Present
        </span>
      </div>
      <p className="xp-p">rehan5.azim@gmail.com · Pune · +91 8600175623</p>

      <div className="xp-h2">Work Experience</div>
      {WORK.map((w) => (
        <div className="entry" key={w.role}>
          <span className="date">{w.date}</span>
          <div className="role">{w.role}</div>
          <div className="org">{w.org}</div>
          <ul>
            {w.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="xp-h2">Honors & Awards</div>
      {HONORS.map((h) => (
        <div className="entry" key={h.role}>
          <span className="date">{h.date}</span>
          <div className="role">{h.role}</div>
          <div className="org">{h.org}</div>
          <ul>
            {h.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="xp-h2">Project</div>
      <div className="entry">
        <span className="date">Feb 2022</span>
        <div className="role">Nexus Journal — Developer</div>
        <ul>
          <li>Free research-paper submission website used by 20 students to upload and share academic work.</li>
        </ul>
      </div>

      <div className="xp-h2">Education</div>
      <div className="entry">
        <span className="date">2025 – 2029</span>
        <div className="role">B.Tech in Computer Science & Engineering</div>
        <div className="org">Physics Wallah Institute of Innovation, Pune, Maharashtra</div>
      </div>

      <div className="xp-h2">Certifications</div>
      {CERTIFICATIONS.map((c) => (
        <div className="entry" key={c.name}>
          <span className="date">{c.date}</span>
          <div className="role">{c.name}</div>
          <div className="org">{c.org}</div>
          {c.bullets && (
            <ul>
              {c.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="mt-4">
        <a
          href="/assets/Rehan-Azim-Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded text-[#0a246a] text-[11.5px] no-underline"
          style={{
            background: "linear-gradient(180deg,#fefefe,#c9d7f0 55%,#9fb8e0)",
            border: "1px solid rgba(255,255,255,.5)",
          }}
        >
          ⬇ Download Full Resume (PDF)
        </a>
      </div>
    </div>
  );
}
