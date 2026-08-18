export interface Project {
  cat: string;
  name: string;
  desc: string;
  demo: string;
  repo: string;
}

export const PROJECTS: Project[] = [
  { cat: "Featured", name: "VIRA AI", desc: "AI-powered cybersecurity platform for real-time threat detection, intelligent defense, and cloud-native protection.", demo: "https://www.linkedin.com/posts/rehan-azim-64602a224_cybersecurity-ai-python-ugcPost-7441099898978091008-thgZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADg-qRYBgzQ7naszArSq2LwNRtFlE864KT0", repo: "https://www.linkedin.com/posts/rehan-azim-64602a224_cybersecurity-ai-python-ugcPost-7441099898978091008-thgZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADg-qRYBgzQ7naszArSq2LwNRtFlE864KT0" },
  { cat: "Full Stack", name: "QuickMeal", desc: "Full-stack MERN grocery ordering platform with JWT auth, Cloudinary integration, an admin dashboard, and order management.", demo: "https://quick-meal-virid.vercel.app/", repo: "https://github.com/MIT-REHAN/QuickMeal" },
  { cat: "3D Animation", name: "Noor_E_Heena", desc: "3D scrolling site with immersive animation and visual storytelling.", demo: "https://nooreheena.vercel.app/", repo: "https://github.com/MIT-REHAN/Noor_E_Heena" },
  { cat: "Web Development", name: "GitHub Developer Explorer", desc: "Discovery tool for exploring GitHub profiles and repos.", demo: "https://mit-rehan.github.io/GitHub-Developer-Explorer/", repo: "https://github.com/MIT-REHAN/GitHub-Developer-Explorer" },
  { cat: "Web Development", name: "Live News Feed", desc: "Real-time headline aggregator pulling from multiple sources.", demo: "https://mit-rehan.github.io/Live-News-Feed-/", repo: "https://github.com/MIT-REHAN/Live-News-Feed" },
  { cat: "Game Development", name: "Body Explorer Game", desc: "Interactive game that teaches human anatomy through play.", demo: "https://mit-rehan.github.io/Body-Explorer-Game/", repo: "https://github.com/MIT-REHAN/Body-Explorer-Game" },
  { cat: "Game Development", name: "Laser Puff Clash", desc: "Multiplayer Python arcade game developed during Stanford Code in Place 2026.", demo: "https://lnkd.in/dH7AUBwq", repo: "https://github.com/MIT-REHAN/laser-puff-clash" },
  { cat: "Chrome Extensions", name: "Youtube Title Hide", desc: "Hides YouTube titles for distraction-free browsing.", demo: "https://lnkd.in/dH7AUBwq", repo: "https://github.com/MIT-REHAN/Youtube-Tittle_hide" },
  { cat: "Internship", name: "Gym / Club Membership Dashboard", desc: "Membership management for fitness centers and clubs.", demo: "https://leapx-pune.github.io/member-dashboard/", repo: "https://github.com/LeapX-Pune/member-dashboard" },
  { cat: "Internship", name: "Product Catalog + Cart", desc: "E-commerce catalog with cart and checkout flow.", demo: "https://leapx-pune.github.io/product-catalogue/", repo: "https://github.com/LeapX-Pune/product-catalogue" },
  { cat: "Internship", name: "Weather Dashboard", desc: "Weather forecasting and news aggregation dashboard.", demo: "https://leapx-pune.github.io/Weather-News-Aggregator-Dashboard/", repo: "https://github.com/LeapX-Pune/Weather-News-Aggregator-Dashboard" },
  { cat: "Internship", name: "ProjectFlow Kanban", desc: "Trello-style board with drag-and-drop project management.", demo: "https://leapx-pune.github.io/Trello-Style-Project-Management-Board/", repo: "https://github.com/LeapX-Pune/Trello-Style-Project-Management-Board" },
  { cat: "Internship", name: "Event Registration Platform", desc: "Online registration and ticketing management system.", demo: "https://leapx-pune.github.io/Event-Registration-Platform-2/", repo: "https://github.com/LeapX-Pune/Event-Registration-Platform-2" },
  { cat: "Internship", name: "Student Progress Tracker", desc: "Platform for monitoring student academic performance.", demo: "https://leapx-pune.github.io/student-progress-tracker/", repo: "https://github.com/LeapX-Pune/student-progress-tracker" },
  { cat: "Self Projects", name: "ShopCara", desc: "E-commerce shopping assistant and product management tool.", demo: "https://mit-rehan.github.io/ShopCara/", repo: "https://github.com/MIT-REHAN/ShopCara" },
  { cat: "Self Projects", name: "Mind My Studies", desc: "Study productivity extension for focus and time management.", demo: "https://mit-rehan.github.io/Mind-My-Studies/", repo: "https://github.com/MIT-REHAN/Mind-My-Studies" },
  { cat: "Self Projects", name: "Bitcoin Info", desc: "Real-time Bitcoin price tracking dashboard.", demo: "https://mit-rehan.github.io/Greatest-Invention-Bitcoin/", repo: "https://github.com/MIT-REHAN/Greatest-Invention-Bitcoin" },
  { cat: "Self Projects", name: "Covid-19 Info", desc: "COVID-19 statistics tracker with health updates.", demo: "https://mit-rehan.github.io/Healthcare-COVID-19/", repo: "https://github.com/MIT-REHAN/Healthcare-COVID-19" },
  { cat: "Vibe Coding", name: "BioSentinel", desc: "AI-powered biological data analysis and summary tool.", demo: "https://v0-json-summary-generation.vercel.app/", repo: "https://github.com/MIT-REHAN/BioSentinel" },
  { cat: "Vibe Coding", name: "Event Management", desc: "Event planning and management platform.", demo: "https://mit-rehan.github.io/Event-Management-Systems/", repo: "https://github.com/MIT-REHAN/Event-Management-Systems" },
  { cat: "Vibe Coding", name: "Mednow", desc: "Healthcare service management and appointment platform.", demo: "https://mit-rehan.github.io/mednow/", repo: "https://github.com/MIT-REHAN/mednow" },
];

export const CATEGORIES = Array.from(new Set(PROJECTS.map((p) => p.cat)));

export interface Social {
  name: string;
  handle: string;
  url: string;
  icon: "linkedin" | "x" | "github" | "instagram";
}

export const SOCIALS: Social[] = [
  { name: "LinkedIn", handle: "rehan-azim", url: "https://www.linkedin.com/in/rehan-azim-64602a224/", icon: "linkedin" },
  { name: "X (Twitter)", handle: "@for_rehanazim", url: "https://x.com/for_rehanazim", icon: "x" },
  { name: "GitHub", handle: "MIT-REHAN", url: "https://github.com/MIT-REHAN/", icon: "github" },
  { name: "Instagram", handle: "@for_rehanazim", url: "https://www.instagram.com/for_rehanazim/", icon: "instagram" },
];

export interface WorkEntry {
  date: string;
  role: string;
  org: string;
  bullets: string[];
}

export const WORK: WorkEntry[] = [
  {
    date: "June 2026 – Present",
    role: "Technology & Operations Lead",
    org: "GAPRIO LABS PRIVATE LIMITED",
    bullets: [
      "Lead technology and operations by managing cross-functional teams, streamlining workflows, and ensuring efficient execution of business initiatives.",
      "Drive scalable web development and technology strategy while aligning product execution with company goals and improving operational efficiency.",
      "Monitor KPIs, optimize processes, and support strategic planning to improve team productivity and long-term business growth.",
      "Tech Stack: React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, REST APIs, Git/GitHub, Docker, AWS."
    ],
  },
  {
    date: "May 2026 – July 2026",
    role: "Backend Engineer",
    org: "LeapX",
    bullets: [
      "Developed backend services and server-side logic using JavaScript, focusing on scalable and reliable application functionality.",
      "Built and integrated backend features while collaborating with the development team on product requirements.",
      "Debugged and optimized backend workflows to improve performance and reliability.",
      "Tech Stack: JavaScript, Node.js, Express.js, Git/GitHub"
    ],
  },
  {
    date: "May 2026 – June 2026",
    role: "Web Developer Intern",
    org: "KP Smart IT Solutions Pvt. Ltd.",
    bullets: [
      "Developed responsive web applications and websites, contributing to features, UI improvements, and overall functionality.",
      "Debugged and tested applications while collaborating remotely with the team to complete assigned tasks efficiently.",
      "Gained hands-on experience in frontend development, WordPress-based development, and local server environments.",
      "Tech Stack: JavaScript, React.js, WordPress, XAMPP, Git/GitHub"
    ],
  },
  {
    date: "Feb 2023 – Sep 2024",
    role: "Chief Technology Officer (CTO)",
    org: "Deaf Link Innovations",
    bullets: [
      "Engineered a $99 neckband-style wearable using real-time speech-to-vibration conversion to support 18M+ completely deaf individuals worldwide.",
      "Developed the technology with a focus on accessible communication and improved employment opportunities."
    ],
  },
  {
    date: "Apr 2021 – Jan 2023",
    role: "Founder and CEO",
    org: "Firehouse Media",
    bullets: [
      "Assisted 20+ companies in achieving a 67% increase in sales through free website development, video editing, graphic design and social media management.",
    ],
  },
  {
    date: "Apr 2023 – Oct 2024",
    role: "Author and Writer",
    org: "Master of Web Development",
    bullets: [
      'Authored and published "Master of Web Development," practical guidance for readers entering web development.',
      "Distributed 11,000+ copies through Project Sarama and other NGOs, promoting education and skill development.",
    ],
  },
];

export const HONORS: WorkEntry[] = [
  {
    date: "Jan 2026",
    role: "2nd Position — HackAura 1.0",
    org: "Hackathon",
    bullets: ["Built a Trust Marketplace platform with explainable trust scoring and fake-review detection to improve reliability in online services."],
  },
  {
    date: "Feb 2022",
    role: "Finalist — HP Enterprise AI India Hackathon",
    org: "Hewlett Packard Enterprise",
    bullets: ["Built a COVID-19 information website used by 700+ doctors to access safety guidelines and precautions; placed 19th nationally."],
  },
];

export interface CertificationEntry {
  date: string;
  name: string;
  org: string;
  bullets?: string[];
}

export const CERTIFICATIONS: CertificationEntry[] = [
  {
    date: "2026",
    name: "Stanford Code in Place 2026",
    org: "Stanford University (Online)",
    bullets: ["Completed hands-on Python programming, software design, and final project."]
  },
  {
    date: "Dec 15–19, 2025",
    name: "Cyber Security Bootcamp",
    org: "COEP Technological University",
    bullets: [
      "5-day hands-on bootcamp covering Ethical Hacking, OSINT, Nmap, Vulnerability Analysis, Web Security (OWASP, SQLi, XSS), and real-world cyber attack case studies.",
      "Organized by COEP Cybercell in collaboration with MeitY."
    ]
  },
  {
    date: "Aug 2024",
    name: "Research Skills",
    org: "The New York Academy of Sciences",
    bullets: [
      "Research Skills",
      "Issued Aug 2024 · Expired Jan 2025"
    ]
  },
  {
    date: "2024",
    name: "AI Breast Cancer Predictor",
    org: "The New York Academy of Sciences",
    bullets: ["Developed machine learning predictor models using clinical datasets."]
  },
  {
    date: "Dec 27, 2023",
    name: "Author & Book Publisher — Notion Press",
    org: "Notion Press",
    bullets: [
      "Certificate of Book Publishing",
      "Book: Master of Web Development"
    ]
  },
  {
    date: "June 7, 2022",
    name: "Breast Cancer Prediction Model",
    org: "OpenWeaver",
    bullets: [
      "Developed an SVM-based machine learning model to predict breast cancer."
    ]
  }
];

export const SKILLS = {
  languages: ["JavaScript", "Java", "C++", "Python", "Kotlin"],
  frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB"],
  cloudDevOps: ["AWS", "Google Cloud", "Docker", "GitHub Actions"],
  tools: ["Git", "GitHub", "Postman", "Vercel", "Figma", "Claude", "Stanford Code in Place 2026"],
  exploring: ["DevSecOps", "Cloud Security", "Kubernetes", "Ethical Hacking", "Blockchain", "Computer Organization & Architecture (COA)"],
  learning: ["Rust", "Spring Boot", "Solidity", "Python (AI/ML)", "Advanced Computer Networking", "Operating Systems"],
  soft: ["Analytical Thinking", "Team Management", "Product Design", "Public Speaking & Technical Presentation"],
  spoken: ["English", "Hindi"],
};

export const YOUTUBE_ID = "Y0wDTIZ0Xrs";

export const ABOUT_BULLETS = [
  "🔭 Currently working on VIRA AI — an AI-powered cyber defense platform for modern businesses.",
  "🌱 Currently learning DevSecOps, Cloud Engineering, Cybersecurity, Kotlin, and Secure System Design.",
  "👯 Looking to collaborate on open-source projects, hackathons, and innovative tech products.",
  "🤝 Looking for help with cloud infrastructure, DevOps, and advanced cybersecurity.",
  "💬 Ask me about the MERN stack, AI, blockchain, hackathons, cars, and startups.",
  "⚡ Fun fact: I collect random stories from strangers and somehow remember them for years.",
];

export const TAGLINE = "Builder & Developer";
