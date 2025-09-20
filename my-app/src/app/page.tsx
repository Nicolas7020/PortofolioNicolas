import Image from "next/image";
import SequentialType from "@/components/SequentialType";
import LogoLoop from "@/components/LogoLoop";
import AnimatedSection from "@/components/AnimatedSection";
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
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
              Nicolas Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">About</a>
              <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Experience</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Projects</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
              <a href="#cv" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">CV</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero/Introduction Section */}
      <section id="about" className="pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimatedSection className="flex-1 text-center lg:text-left" animation="fade-in-left">
              <SequentialType className="block" />
              <div className="fade-in-up animate-delay-300">
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  I'm passionate about creating innovative solutions and building scalable applications. 
                  With expertise in modern web technologies, I enjoy turning complex problems into 
                  simple, beautiful designs.
                </p>
              </div>
              <div className="fade-in-up animate-delay-500">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="#contact" 
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-center hover:scale-105 hover:shadow-lg hover-glow pulse-slow"
                  >
                    Get In Touch
                  </a>
                  <a 
                    href="#projects" 
                    className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-center hover:scale-105 hover:shadow-lg"
                  >
                    View My Work
                  </a>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="flex-1 flex justify-center" animation="fade-in-right" delay={200}>
              <div className="relative hover:scale-105 transition-transform duration-500">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-2 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-300">
                    <div className="text-6xl hover:scale-110 transition-transform duration-300">👨‍💻</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <AnimatedSection>
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
              <AnimatedSection animation="fade-in-left" delay={200}>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Work Experience</h3>
                  <div className="space-y-8">
                    <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300 hover-lift">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Senior Software Engineer</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Tech Company • 2022 - Present</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Led development of scalable web applications using React, Node.js, and cloud technologies. 
                        Mentored junior developers and improved team productivity by 30%.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300 hover-lift">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Full Stack Developer</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Startup Inc • 2020 - 2022</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Built and maintained multiple client applications using modern JavaScript frameworks. 
                        Collaborated with design teams to create user-friendly interfaces.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300 hover-lift">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Junior Developer</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Web Agency • 2019 - 2020</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Developed responsive websites and learned modern development practices. 
                        Gained experience in agile methodologies and client communication.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Skills */}
              <AnimatedSection animation="fade-in-right" delay={400}>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Technical Skills</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">React</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Next.js</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">TypeScript</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Tailwind CSS</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Vue.js</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Node.js</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Python</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">PostgreSQL</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">MongoDB</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">GraphQL</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Tools & Cloud</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">AWS</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Docker</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Git</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Vercel</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Figma</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={600}>
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
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>
      {/* Projects Section */}
      <AnimatedSection>
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
              <AnimatedSection animation="fade-in-up" delay={200}>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 hover-lift">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center relative overflow-hidden">
                    <div className="text-white text-4xl hover:scale-110 transition-transform duration-300">🚀</div>
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">E-Commerce Platform</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      A full-stack e-commerce solution built with Next.js, featuring payment integration and admin dashboard.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs hover:scale-105 transition-transform">Next.js</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs hover:scale-105 transition-transform">Stripe</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs hover:scale-105 transition-transform">PostgreSQL</span>
                    </div>
                    <div className="flex space-x-4">
                      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline hover:scale-105 transition-all duration-200">Live Demo</a>
                      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline hover:scale-105 transition-all duration-200">GitHub</a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Project 2 */}
              <AnimatedSection animation="fade-in-up" delay={400}>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 hover-lift">
                  <div className="h-48 bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
                    <div className="text-white text-4xl hover:scale-110 transition-transform duration-300">📱</div>
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Task Management App</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      A collaborative task management application with real-time updates and team collaboration features.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs hover:scale-105 transition-transform">React</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs hover:scale-105 transition-transform">Socket.io</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs hover:scale-105 transition-transform">Node.js</span>
                    </div>
                    <div className="flex space-x-4">
                      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline hover:scale-105 transition-all duration-200">Live Demo</a>
                      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline hover:scale-105 transition-all duration-200">GitHub</a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Project 3 */}
              <AnimatedSection animation="fade-in-up" delay={600}>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 hover-lift">
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center relative overflow-hidden">
                    <div className="text-white text-4xl hover:scale-110 transition-transform duration-300">🎨</div>
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Design System</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      A comprehensive design system and component library for consistent UI development across projects.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs hover:scale-105 transition-transform">Storybook</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs hover:scale-105 transition-transform">TypeScript</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs hover:scale-105 transition-transform">Tailwind</span>
                    </div>
                    <div className="flex space-x-4">
                      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline hover:scale-105 transition-all duration-200">Live Demo</a>
                      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline hover:scale-105 transition-all duration-200">GitHub</a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section id="contact" className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Let's connect and discuss opportunities together
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Email Contact */}
              <AnimatedSection animation="fade-in-up" delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📧</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email Me</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">Drop me a line anytime</p>
                  <a href="mailto:nicolas@example.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    nicolas@example.com
                  </a>
                </div>
              </AnimatedSection>

              {/* Phone Contact */}
              <AnimatedSection animation="fade-in-up" delay={400}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Call Me</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">Let's have a conversation</p>
                  <a href="tel:+15551234567" className="text-green-600 dark:text-green-400 font-semibold hover:underline">
                    +1 (555) 123-4567
                  </a>
                </div>
              </AnimatedSection>

              {/* Location */}
              <AnimatedSection animation="fade-in-up" delay={600}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📍</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Visit Me</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">Based in</p>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold">New York, NY</p>
                </div>
              </AnimatedSection>
            </div>

            {/* Social Media Links */}
            <AnimatedSection animation="fade-in-up" delay={800}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Follow My Journey</h3>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="#" 
                    className="group w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <span className="text-lg font-bold group-hover:scale-110 transition-transform">in</span>
                  </a>
                  <a 
                    href="#" 
                    className="group w-14 h-14 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <span className="text-lg font-bold group-hover:scale-110 transition-transform">gh</span>
                  </a>
                  <a 
                    href="#" 
                    className="group w-14 h-14 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <span className="text-lg font-bold group-hover:scale-110 transition-transform">tw</span>
                  </a>
                  <a 
                    href="#" 
                    className="group w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <span className="text-lg font-bold group-hover:scale-110 transition-transform">yt</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* CV Section */}
      <AnimatedSection>
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

            <AnimatedSection animation="scale-in" delay={300}>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">My Resume</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      Get a comprehensive overview of my experience, education, and skills in a downloadable PDF format. 
                      My resume includes detailed information about my professional journey, technical expertise, and achievements.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                        <span>5+ years of professional experience</span>
                      </div>
                      <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                        <span>Full-stack development expertise</span>
                      </div>
                      <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                        <span>Education and certifications</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <a 
                      href="/nicolas-cv.pdf" 
                      download
                      className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium flex items-center space-x-2 hover:scale-105 hover:shadow-lg hover-glow"
                    >
                      <span>📄</span>
                      <span>Download PDF</span>
                    </a>
                    <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 font-medium flex items-center space-x-2 hover:scale-105 hover:shadow-lg">
                      <span>👁️</span>
                      <span>Preview Online</span>
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection>
        <footer className="bg-white dark:bg-slate-800 py-12 border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                  © 2025 Nicolas Portfolio. Built with Next.js and Tailwind CSS.
                </p>
              </div>
              <div className="flex space-x-6">
                <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105">About</a>
                <a href="#experience" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105">Experience</a>
                <a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105">Projects</a>
                <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  );
}
