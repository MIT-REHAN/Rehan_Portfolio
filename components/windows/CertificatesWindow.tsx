import React from "react";
import { HONORS, CERTIFICATIONS } from "@/lib/data";

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
    </div>
  );
}
