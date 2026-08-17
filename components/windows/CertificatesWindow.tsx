import React from "react";
import { HONORS } from "@/lib/data";

export default function CertificatesWindow() {
  return (
    <div className="p-4">
      <div className="xp-h1">Achievements & Certificates</div>
      <p className="xp-p">
        A list of key recognitions, hackathons, and certifications completed.
      </p>

      <div className="xp-h2">Hackathons & Honors</div>
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

      <div className="xp-h2">Certifications & Coursework</div>
      <div className="entry">
        <span className="date">2026</span>
        <div className="role">Stanford Code in Place 2026</div>
        <div className="org">Stanford University (Online)</div>
        <ul>
          <li>Completed hands-on Python programming, software design, and final project.</li>
        </ul>
      </div>

      <div className="entry">
        <span className="date">2024</span>
        <div className="role">AI Breast Cancer Predictor</div>
        <div className="org">The New York Academy of Sciences</div>
        <ul>
          <li>Developed machine learning predictor models using clinical datasets.</li>
        </ul>
      </div>
    </div>
  );
}
