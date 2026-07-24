export const profile = {
  name: "Nicolas Maulana",
  fullName: "Nicolas Maulana SS",
  initials: "NM.",
  role: "Frontend Developer & Mobile Dev",
  email: "nicolasmaulanass@gmail.com",
  phone: "+62 819 1502 0705",
  location: "Jabodetabek, Indonesia · UTC+7",
  github: "https://github.com/Nicolas7020",
  linkedin: "https://www.linkedin.com/in/nicolas-maulana-ss-a76690285",
  cvFileName: "nicolas-maulana-cv.pdf",
  cvPreviewUrl: "https://drive.google.com/file/d/1eKlbiAwvMxuB0uZaFeRq_pP0QtiOYOq2/preview",
  cvDownloadUrl: "https://drive.google.com/file/d/1eKlbiAwvMxuB0uZaFeRq_pP0QtiOYOq2/view?usp=sharing",
};

export interface JourneyItem {
  period: string;
  current?: boolean;
  title: string;
  org: string;
  description: string;
  stat: string;
}

export const journey: JourneyItem[] = [
  {
    period: "Nov 2025 - now",
    current: true,
    title: "Software Engineer",
    org: "MIDHUB - Jakarta, hybrid",
    description:
      "Built MidHub.ID's web frontend from the ground up - Indonesia's heavy equipment marketplace. Shipped 15+ feature modules: auth, listings, real-time chat, advanced search, Midtrans payments, and full EN/ID bilingual support.",
    stat: "15+ modules",
  },
  {
    period: "Jun - Nov 2025",
    title: "Software Engineer, freelance",
    org: "PT. Uniteda Arkato - remote",
    description:
      "UI/UX design and development for a heavy equipment marketplace platform, working across Next.js on the web and Flutter on mobile.",
    stat: "Next.js + Flutter",
  },
  {
    period: "Mar 2025 - Feb 2026",
    title: "Web Developer Activist",
    org: "HIMTI BINUS University",
    description:
      "Developed and maintained the organization's web presence and digital infrastructure. Previously served across the Events, Publication & Marketing, and Fundraising divisions.",
    stat: "2+ yrs in HIMTI",
  },
  {
    period: "Apr - Oct 2025",
    title: "Competition Coordinator, BurnCup 2025",
    org: "BINUS University",
    description:
      "Led 4 core members and 20 liaison officers to design and run ~16 competitions over 5 days at the annual campus sports and creative festival.",
    stat: "16 comps · 5 days",
  },
];

export const education = {
  school: "BINUS University",
  logo: "/binus-logo.png",
  degree: "Bachelor in Computer Science",
  stream: "Software Engineering stream",
  period: "2023 - present",
  detail: "building real products alongside coursework",
};

export interface SkillGroup {
  title: string;
  pinColor: string;
  tilt: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    pinColor: "var(--pin-red)",
    tilt: "-0.7deg",
    skills: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "JavaScript", "Zustand"],
  },
  {
    title: "Backend & Real-time",
    pinColor: "var(--accent)",
    tilt: "0.6deg",
    skills: ["Node.js", "Express.js", "Flask", "PostgreSQL", "Socket.IO", "MinIO"],
  },
  {
    title: "Mobile & Tools",
    pinColor: "oklch(80% 0.13 95)",
    tilt: "-0.5deg",
    skills: ["Flutter", "Midtrans", "next-intl", "Git", "Figma", "Vercel"],
  },
  {
    title: "AI / ML",
    pinColor: "var(--ink)",
    tilt: "0.7deg",
    skills: ["Python", "TensorFlow/Keras", "Scikit-learn", "OpenCV", "CNN", "LSTM", "Streamlit"],
  },
];
