export type IconName =
  | "mycomputer"
  | "resume"
  | "projects"
  | "contact"
  | "bin"
  | "ie"
  | "skills"
  | "video"
  | "notepad"
  | "linkedin"
  | "x"
  | "github"
  | "instagram"
  | "display";

export function Icon({ name, size = 16 }: { name: IconName; size?: number }) {
  const s = { width: size, height: size, display: "block" } as const;
  switch (name) {
    case "display":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <rect x="2" y="8" width="44" height="28" rx="3" fill="#3a7fd6" stroke="#0a2f8f" strokeWidth="1.5" />
          <rect x="6" y="12" width="36" height="20" fill="#fff" />
          <rect x="8" y="14" width="32" height="16" fill="#7c8ba8" />
          <rect x="18" y="36" width="12" height="6" fill="#7c8ba8" stroke="#0a2f8f" strokeWidth="1" />
          <ellipse cx="24" cy="43" rx="10" ry="2" fill="#5a6b88" />
        </svg>
      );
    case "mycomputer":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <rect x="4" y="10" width="40" height="26" rx="2" fill="#c9d7f0" stroke="#5a7ab8" strokeWidth="1.5" />
          <rect x="8" y="14" width="32" height="16" fill="#1958d6" />
          <rect x="16" y="38" width="16" height="4" fill="#9fb0c9" />
          <rect x="12" y="41" width="24" height="3" rx="1" fill="#7c8ba8" />
        </svg>
      );
    case "resume":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <path d="M10 4h20l8 8v32H10z" fill="#fff" stroke="#3a7fd6" strokeWidth="1.5" />
          <path d="M30 4v8h8z" fill="#a9c8f5" />
          <rect x="14" y="20" width="20" height="2.2" fill="#3a7fd6" />
          <rect x="14" y="25" width="20" height="2.2" fill="#a9c8f5" />
          <rect x="14" y="30" width="14" height="2.2" fill="#a9c8f5" />
          <rect x="14" y="35" width="16" height="2.2" fill="#a9c8f5" />
        </svg>
      );
    case "projects":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <path d="M4 14a2 2 0 0 1 2-2h12l4 4h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" fill="#ffd35c" stroke="#c99a1f" strokeWidth="1" />
          <path d="M4 18h40v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" fill="#ffe089" />
        </svg>
      );
    case "contact":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <rect x="4" y="10" width="40" height="28" rx="3" fill="#fff" stroke="#3a7fd6" strokeWidth="1.5" />
          <path d="M4 13l20 15 20-15" fill="none" stroke="#3a7fd6" strokeWidth="1.5" />
        </svg>
      );
    case "bin":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <path d="M14 16h20l-2 24a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2z" fill="#dfe6f0" stroke="#7c8ba8" strokeWidth="1.3" />
          <rect x="10" y="11" width="28" height="4" rx="1" fill="#b9c3d6" stroke="#7c8ba8" strokeWidth="1" />
          <rect x="19" y="7" width="10" height="4" rx="1" fill="#b9c3d6" stroke="#7c8ba8" strokeWidth="1" />
        </svg>
      );
    case "ie":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <circle cx="24" cy="24" r="19" fill="#2f6fd6" />
          <path d="M8 24a16 16 0 0 1 27-11" stroke="#ffb020" strokeWidth="4" fill="none" />
          <circle cx="24" cy="24" r="19" fill="none" stroke="#1a4fae" strokeWidth="1.5" />
        </svg>
      );
    case "skills":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <rect x="6" y="8" width="36" height="26" rx="2" fill="#e9eef7" stroke="#5a7ab8" strokeWidth="1.5" />
          <rect x="10" y="12" width="12" height="8" fill="#3a7fd6" />
          <rect x="24" y="12" width="14" height="4" fill="#a9c8f5" />
          <rect x="24" y="18" width="14" height="4" fill="#a9c8f5" />
          <rect x="10" y="24" width="28" height="3" fill="#c9d7f0" />
          <rect x="16" y="34" width="16" height="4" fill="#9fb0c9" />
          <rect x="12" y="38" width="24" height="3" rx="1" fill="#7c8ba8" />
        </svg>
      );
    case "video":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <rect x="4" y="10" width="40" height="28" rx="3" fill="#111" stroke="#3a7fd6" strokeWidth="1.5" />
          <path d="M19 17l14 7-14 7z" fill="#ffd35c" />
        </svg>
      );
    case "notepad":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <path d="M10 4h22l6 6v34H10z" fill="#fff" stroke="#8a8a8a" strokeWidth="1.3" />
          <path d="M32 4v6h6z" fill="#e6e6e6" />
          <rect x="14" y="18" width="18" height="1.6" fill="#3a7fd6" />
          <rect x="14" y="23" width="18" height="1.6" fill="#3a7fd6" />
          <rect x="14" y="28" width="12" height="1.6" fill="#3a7fd6" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <rect x="4" y="4" width="40" height="40" rx="6" fill="#0a66c2" />
          <rect x="12" y="19" width="6" height="18" fill="#fff" />
          <circle cx="15" cy="13" r="3.4" fill="#fff" />
          <path d="M23 19h6v3s2-3.4 6.5-3.4c5 0 6.5 3 6.5 8.4V37h-6V27.6c0-2.4-.9-4-3-4-2.2 0-3.5 1.6-3.5 4V37h-6.5z" fill="#fff" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <rect x="4" y="4" width="40" height="40" rx="6" fill="#111" />
          <path d="M13 13l22 22M35 13L13 35" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <rect x="4" y="4" width="40" height="40" rx="6" fill="#171515" />
          <path
            fill="#fff"
            d="M24 10c-7.7 0-14 6.3-14 14 0 6.2 4 11.4 9.6 13.3.7.1 1-.3 1-.7v-2.6c-3.9.8-4.7-1.7-4.7-1.7-.6-1.6-1.5-2-1.5-2-1.3-.9.1-.9.1-.9 1.4.1 2.1 1.4 2.1 1.4 1.3 2.1 3.3 1.5 4.1 1.2.1-.9.5-1.5.9-1.9-3.1-.4-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.4-.6-1.8.1-3.7 0 0 1.2-.4 3.9 1.4a13.4 13.4 0 0 1 7.1 0c2.7-1.8 3.9-1.4 3.9-1.4.7 1.9.3 3.3.1 3.7.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.4 7 .5.5 1 1.3 1 2.7v4c0 .4.3.8 1 .7 5.6-1.9 9.6-7.1 9.6-13.3 0-7.7-6.3-14-14-14z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <defs>
            <linearGradient id="igGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f9ce34" />
              <stop offset="35%" stopColor="#ee2a7b" />
              <stop offset="100%" stopColor="#6228d7" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="40" height="40" rx="10" fill="url(#igGrad)" />
          <rect x="13" y="13" width="22" height="22" rx="6" fill="none" stroke="#fff" strokeWidth="2.4" />
          <circle cx="24" cy="24" r="6" fill="none" stroke="#fff" strokeWidth="2.4" />
          <circle cx="32.5" cy="15.5" r="1.6" fill="#fff" />
        </svg>
      );
  }
}
