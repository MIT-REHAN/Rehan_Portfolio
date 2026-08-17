export function repoOgImage(repoUrl: string): string | null {
  try {
    const u = new URL(repoUrl);
    if (!u.hostname.includes("github.com")) return null;
    const parts = u.pathname.split("/").filter(Boolean);
    if (parts.length < 2) return null;
    const [owner, repo] = parts;
    return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
  } catch {
    return null;
  }
}

export function getProjectImage(demoUrl: string): string | null {
  try {
    const u = new URL(demoUrl);
    
    // Serve high quality local static screenshots/mockups for QuickMeal and VIRA AI
    if (u.hostname.includes("quick-meal")) {
      return "/assets/quickmeal.jpg";
    }
    if (demoUrl.includes("7441099898978091008") || demoUrl.toLowerCase().includes("vira")) {
      return "/assets/vira_ai.jpg";
    }

    // Only fetch screenshot for direct live website demos (github.io, vercel, etc)
    if (
      !u.hostname.includes("linkedin.com") &&
      !u.hostname.includes("lnkd.in") &&
      (u.hostname.includes("github.io") || u.hostname.includes("vercel.app") || u.hostname.includes("github"))
    ) {
      return `https://api.microlink.io/?url=${encodeURIComponent(demoUrl)}&screenshot=true&embed=screenshot.url`;
    }
  } catch {}
  return null;
}
