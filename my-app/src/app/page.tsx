import Image from "next/image";
import SequentialType from "@/components/SequentialType";
import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiGraphql, SiAmazon, SiDocker, SiGit, SiVercel, SiFigma } from 'react-icons/si';

// Tech logos for the animation
const techLogos = [
  { node: <SiReact className="text-blue-500" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-black dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-cyan-500" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-green-600" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython className="text-yellow-500" />, title: "Python", href: "https://python.org" },
  { node: <SiPostgresql className="text-blue-700" />, title: "PostgreSQL", href: "https://postgresql.org" },
  { node: <SiMongodb className="text-green-500" />, title: "MongoDB", href: "https://mongodb.com" },
  { node: <SiGraphql className="text-pink-600" />, title: "GraphQL", href: "https://graphql.org" },
  { node: <SiAmazon className="text-orange-500" />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiDocker className="text-blue-500" />, title: "Docker", href: "https://docker.com" },
  { node: <SiGit className="text-red-500" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiVercel className="text-black dark:text-white" />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiFigma className="text-purple-500" />, title: "Figma", href: "https://figma.com" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              Nicolas Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              <a href="#cv" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">CV</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero/Introduction Section */}
      <section id="about" className="pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <SequentialType className="block" />
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                I'm passionate about creating innovative solutions and building scalable applications. 
                With expertise in modern web technologies, I enjoy turning complex problems into 
                simple, beautiful designs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center"
                >
                  View My Work
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-2">
                  <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Experience & Skills
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              My professional journey and technical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Work Experience</h3>
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Senior Software Engineer</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Tech Company • 2022 - Present</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">
                    Led development of scalable web applications using React, Node.js, and cloud technologies. 
                    Mentored junior developers and improved team productivity by 30%.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Full Stack Developer</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Startup Inc • 2020 - 2022</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">
                    Built and maintained multiple client applications using modern JavaScript frameworks. 
                    Collaborated with design teams to create user-friendly interfaces.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Junior Developer</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Web Agency • 2019 - 2020</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">
                    Developed responsive websites and learned modern development practices. 
                    Gained experience in agile methodologies and client communication.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Technical Skills</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Vue.js</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">PostgreSQL</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">MongoDB</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">GraphQL</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Tools & Cloud</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">AWS</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Docker</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Git</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Vercel</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Figma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-24 overflow-hidden mt-20">
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={48}
              gap={48}
              pauseOnHover
              scaleOnHover
              ariaLabel="Technology stack"
            />
          </div>
        </div>
        
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Some of my recent work and personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-4xl">🚀</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">E-Commerce Platform</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  A full-stack e-commerce solution built with Next.js, featuring payment integration and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Next.js</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Stripe</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">PostgreSQL</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Live Demo</a>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-4xl">📱</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Task Management App</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  A collaborative task management application with real-time updates and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Socket.io</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Node.js</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Live Demo</a>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                <div className="text-white text-4xl">🎨</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Design System</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  A comprehensive design system and component library for consistent UI development across projects.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">Storybook</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">TypeScript</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">Tailwind</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Live Demo</a>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Let's discuss your next project or opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Email</p>
                    <p className="text-slate-600 dark:text-slate-400">nicolas@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-xl">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Phone</p>
                    <p className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Location</p>
                    <p className="text-slate-600 dark:text-slate-400">New York, NY</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-sm">in</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-900 text-white rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-sm">gh</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-sm">tw</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Curriculum Vitae
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Download my complete resume
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">My Resume</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Get a comprehensive overview of my experience, education, and skills in a downloadable PDF format. 
                  My resume includes detailed information about my professional journey, technical expertise, and achievements.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>5+ years of professional experience</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Full-stack development expertise</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Education and certifications</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <a 
                  href="/nicolas-cv.pdf" 
                  download
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium flex items-center space-x-2"
                >
                  <span>📄</span>
                  <span>Download PDF</span>
                </a>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium flex items-center space-x-2">
                  <span>👁️</span>
                  <span>Preview Online</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-800 py-12 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-slate-600 dark:text-slate-400">
                © 2025 Nicolas Portfolio. Built with Next.js and Tailwind CSS.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
