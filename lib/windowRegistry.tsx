import { ReactNode } from "react";
import { IconName } from "@/components/icons";
import AboutWindow from "@/components/windows/AboutWindow";
import ResumeWindow from "@/components/windows/ResumeWindow";
import SkillsWindow from "@/components/windows/SkillsWindow";
import ProjectsWindow from "@/components/windows/ProjectsWindow";
import ContactWindow from "@/components/windows/ContactWindow";
import IEWindow from "@/components/windows/IEWindow";
import VideoWindow from "@/components/windows/VideoWindow";
import BinWindow from "@/components/windows/BinWindow";
import DisplayWindow from "@/components/windows/DisplayWindow";
import CertificatesWindow from "@/components/windows/CertificatesWindow";
import { PROJECTS } from "@/lib/data";

export type WinId =
  | "mycomputer"
  | "resume"
  | "projects"
  | "skills"
  | "video"
  | "contact"
  | "ie"
  | "bin"
  | "certificates"
  | "display";

export interface WinDef {
  title: string;
  icon: IconName;
  w: number;
  h: number;
  status: string;
  render: () => ReactNode;
}

export const WIN_DEFS: Record<WinId, WinDef> = {
  mycomputer: {
    title: "About Rehan",
    icon: "mycomputer",
    w: 560,
    h: 440,
    status: "Rehan Azim — CTO, Founder, Author",
    render: () => <AboutWindow />,
  },
  resume: {
    title: "Rehan_Resume.doc - Rehan Azim",
    icon: "resume",
    w: 600,
    h: 500,
    status: "Work experience, honors, education",
    render: () => <ResumeWindow />,
  },
  skills: {
    title: "Skills & Tools",
    icon: "skills",
    w: 480,
    h: 380,
    status: "Technical, soft skills & tools",
    render: () => <SkillsWindow />,
  },
  projects: {
    title: "My Projects",
    icon: "projects",
    w: 680,
    h: 480,
    status: `${PROJECTS.length} objects`,
    render: () => <ProjectsWindow />,
  },
  contact: {
    title: "Contact Me",
    icon: "contact",
    w: 480,
    h: 340,
    status: "Ready to connect",
    render: () => <ContactWindow />,
  },
  ie: {
    title: "Social Links - Internet Explorer",
    icon: "ie",
    w: 480,
    h: 320,
    status: "Done",
    render: () => <IEWindow />,
  },
  video: {
    title: "Founder Talk.mp4",
    icon: "video",
    w: 540,
    h: 420,
    status: "Ready to play",
    render: () => <VideoWindow />,
  },
  bin: {
    title: "Recycle Bin",
    icon: "bin",
    w: 420,
    h: 280,
    status: "2 items",
    render: () => <BinWindow />,
  },
  certificates: {
    title: "Achievements & Certificates",
    icon: "certificates",
    w: 520,
    h: 420,
    status: "Honors, hackathons & certifications",
    render: () => <CertificatesWindow />,
  },
  display: {
    title: "Display Properties",
    icon: "display",
    w: 480,
    h: 360,
    status: "Change wallpaper and cursor properties",
    render: () => <DisplayWindow />,
  },
};

export const DESKTOP_ICONS: { id: WinId; label: string; icon: IconName }[] = [
  { id: "mycomputer", label: "About Rehan", icon: "mycomputer" },
  { id: "resume", label: "Rehan_Resume", icon: "resume" },
  { id: "projects", label: "My Projects", icon: "projects" },
  { id: "skills", label: "Skills & Tools", icon: "skills" },
  { id: "certificates", label: "Certificates", icon: "certificates" },
  { id: "video", label: "Founder Talk.mp4", icon: "video" },
  { id: "contact", label: "Contact Me", icon: "contact" },
  { id: "ie", label: "Social Links", icon: "ie" },
  { id: "display", label: "Display Settings", icon: "display" },
  { id: "bin", label: "Recycle Bin", icon: "bin" },
];
