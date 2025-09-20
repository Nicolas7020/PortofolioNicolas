export interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, featuring payment integration and admin dashboard.",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    icon: "🚀",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "bg-gradient-to-br from-blue-400 to-purple-600"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Socket.io", "Node.js"],
    icon: "📱",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "bg-gradient-to-br from-green-400 to-blue-600"
  },
  {
    title: "Design System",
    description: "A comprehensive design system and component library for consistent UI development across projects.",
    technologies: ["Storybook", "TypeScript", "Tailwind"],
    icon: "🎨",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "bg-gradient-to-br from-purple-400 to-pink-600"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization for business insights.",
    technologies: ["React", "D3.js", "Express"],
    icon: "📊",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "bg-gradient-to-br from-orange-400 to-red-600"
  },
  {
    title: "AI Chat Application",
    description: "Intelligent chat application powered by machine learning with natural language processing capabilities.",
    technologies: ["Python", "TensorFlow", "FastAPI"],
    icon: "🤖",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "bg-gradient-to-br from-cyan-400 to-blue-600"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with Next.js, featuring dark mode, animations, and responsive design.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    icon: "🌟",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "bg-gradient-to-br from-indigo-400 to-purple-600"
  }
];