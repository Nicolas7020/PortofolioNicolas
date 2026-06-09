import Image from "next/image";
import SequentialType from "@/components/SequentialType";
import LogoLoop from "@/components/LogoLoop";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectSlider from "@/components/ProjectSlider";
import { projects } from "@/data/projects";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiGraphql, SiAmazon, SiDocker, SiGit, SiVercel, SiFigma, SiExpress, SiFlask, SiStreamlit, SiTensorflow, SiScikitlearn, SiHtml5, SiCss3, SiJavascript, SiGithub, SiLinkedin, SiFlutter, SiSocketdotio } from 'react-icons/si';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

// Tech logos for the animation
const techLogos = [
  { node: <SiReact className="text-blue-500" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-black dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript className="text-yellow-500" />, title: "JavaScript", href: "https://javascript.info" },
  { node: <SiHtml5 className="text-orange-600" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 className="text-blue-500" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiTailwindcss className="text-cyan-500" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-green-600" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress className="text-gray-700 dark:text-gray-300" />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiSocketdotio className="text-black dark:text-white" />, title: "Socket.IO", href: "https://socket.io" },
  { node: <SiFlutter className="text-sky-400" />, title: "Flutter", href: "https://flutter.dev" },
  { node: <SiPython className="text-yellow-500" />, title: "Python", href: "https://python.org" },
  { node: <SiFlask className="text-black dark:text-white" />, title: "Flask", href: "https://flask.palletsprojects.com" },
  { node: <SiStreamlit className="text-red-500" />, title: "Streamlit", href: "https://streamlit.io" },
  { node: <SiPostgresql className="text-blue-700" />, title: "PostgreSQL", href: "https://postgresql.org" },
  { node: <SiMongodb className="text-green-500" />, title: "MongoDB", href: "https://mongodb.com" },
  { node: <SiTensorflow className="text-orange-500" />, title: "TensorFlow", href: "https://tensorflow.org" },
  { node: <SiScikitlearn className="text-orange-600" />, title: "Scikit-learn", href: "https://scikit-learn.org" },
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
              Nicolas Maulana SS
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
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <AnimatedSection className="flex-1 text-center lg:text-left" animation="fade-in-left">
              <SequentialType className="block" />
              <div className="fade-in-up animate-delay-300">
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Computer Science - Software Engineering student at BINUS University and Software Engineer at MidHub.ID, 
                  where I built Indonesia's heavy equipment marketplace frontend from the ground up. Passionate Full Stack Developer 
                  & AI Enthusiast with hands-on experience across frontend, backend, and mobile technologies. Active in HIMTI as a Web Developer 
                  and campus event organizer. Always eager to learn new technologies and solve real-world problems through innovative solutions.
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
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/prof1.jpg"
                      alt="Nicolas Profile Picture"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-300"
                      priority
                    />
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
                Education & Experience
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                My professional journey, academic background, and organizational involvement
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Professional Experience */}
              <AnimatedSection animation="fade-in-left" delay={200}>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Professional Experience</h3>
                  <div className="space-y-8">
                    <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300 hover-lift">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Software Engineer</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">MIDHUB · Full-time • Nov 2025 - Present</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Jakarta, Indonesia · Hybrid</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Built MidHub.ID's web frontend from the ground up — Indonesia's heavy equipment marketplace connecting buyers and sellers across the construction and industrial sectors.
                      </p>
                      <ul className="list-disc list-outside ml-5 mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                        <li>Architected and delivered the entire Next.js (React 19, TypeScript, Tailwind CSS) application from scratch, shipping 15+ feature modules including authentication, equipment listings, real-time chat (Socket.IO), advanced search & filtering, and Midtrans payment integration.</li>
                        <li>Designed the platform's initial UI/UX and the core equipment card system used across the marketplace.</li>
                        <li>Built a reusable component library from scratch and implemented full EN/ID bilingual support with next-intl.</li>
                        <li>Configured staging & production deployments and contributed to the companion Flutter mobile app.</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300 hover-lift">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Software Engineer</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">PT. Uniteda Arkato · Freelance • Jun 2025 - Nov 2025</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Jakarta Metropolitan Area · Remote</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Worked on a heavy equipment marketplace platform as a UI/UX designer and developer using Next.js and Flutter.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Education & Organization */}
              <AnimatedSection animation="fade-in-right" delay={400}>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Education & Organization</h3>
                  <div className="space-y-8">
                    <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300 hover-lift">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Bachelor in Computer Science</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">BINUS University • 2023 - Present</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Software Engineering student with strong technical foundations in full stack development, building real-world products alongside academic and personal projects.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300 hover-lift">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Web Developer Activist</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">HIMTI BINUS University • Mar 2025 - Feb 2026</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Developed and maintained the organization's web presence and digital infrastructure. Previously served across the Events, Publication & Marketing, and Fundraising divisions over 2+ years as a HIMTI activist.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300 hover-lift">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">BurnCup 2025 Competition Coordinator</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">BINUS University • Apr 2025 - Oct 2025</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Led a team of 4 core members and 20 liaison officers to design and execute ~16 competitions over 5 days at BurnCup, an annual campus sports and creative festival — managing tournament structures, logistics, referees, and on-site operations.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300 hover-lift">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Freshmen Partner</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">BINUS University • Sep 2024 - May 2025</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Provided guidance to first-year students, supporting their academic and personal development for a smooth transition into university life.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Technical Skills */}
            <AnimatedSection animation="fade-in-up" delay={200}>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Next.js</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">React 19</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">TypeScript</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Tailwind CSS</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">JavaScript</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Zustand</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">HTML5</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">CSS3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Backend & Real-time</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Node.js</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Express.js</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Flask</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">PostgreSQL</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Socket.IO</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">MinIO</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Mobile & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Flutter</span>
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Midtrans</span>
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">next-intl</span>
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Git</span>
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Figma</span>
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Vercel</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">AI/ML & More</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Python</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">TensorFlow/Keras</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Scikit-learn</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">OpenCV</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">CNN</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">LSTM</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Streamlit</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Java (OOP)</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
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

            <AnimatedSection animation="fade-in-up" delay={200}>
              <ProjectSlider 
                projects={projects} 
                autoPlayInterval={5000}
                className="max-w-4xl mx-auto"
              />
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section id="contact" className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Main Contact Card */}
            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="max-w-4xl mx-auto mb-16">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-3xl p-8 lg:p-12 shadow-xl border border-blue-100 dark:border-slate-600">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left side - Text content */}
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Ready to Start a Project?
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                        Drop me a message and let's discuss.
                      </p>
        
                    </div>

                    {/* Right side - Contact info */}
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                            <HiMail className="text-blue-600 dark:text-blue-400 text-xl" />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                            <p className="font-semibold text-slate-900 dark:text-white">nicolasmaulanass@gmail.com</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-slate-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                            <HiPhone className="text-blue-600 dark:text-blue-400 text-xl" />
                          </div>
                          <div>
                            <p className="text-smtext-blue-600 dark:text-blue-400">Phone</p>
                            <p className="font-semibold text-slate-900 dark:text-white">+62 819 1502 0705</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-slate-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                            <HiLocationMarker className="text-blue-600 dark:text-blue-400 text-xl" />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                            <p className="font-semibold text-slate-900 dark:text-white">Jabodetabek</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Social Media & Additional Info */}
            <AnimatedSection animation="fade-in-up" delay={400}>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Connect with me on social media
                </h3>
                <div className="flex justify-center items-center space-x-6 mb-8">
                  <a 
                    href="https://www.linkedin.com/in/nicolas-maulana-ss-a76690285" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25">
                      <SiLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-600 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      LinkedIn
                    </span>
                  </a>
                  <a 
                    href="https://github.com/Nicolas7020" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="w-16 h-16 bg-gray-800 hover:bg-gray-900 text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-800/25">
                      <SiGithub className="text-2xl group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-600 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      GitHub
                    </span>
                  </a>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Available for freelance work and full-time opportunities
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* CV Section */}
      <AnimatedSection>
        <section id="cv" className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="scale-in" delay={300}>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">My Resume</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      Get a overview of my experience, education, and skills in a downloadable PDF format. 
                      My resume includes detailed information about my professional journey, technical expertise, and achievements.
                    </p>
              
                  </div>
                  <div className="flex flex-col space-y-4">
                    <a 
                      href="https://drive.google.com/file/d/1eKlbiAwvMxuB0uZaFeRq_pP0QtiOYOq2/view?usp=sharing" 
                      download
                      className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium flex items-center space-x-2 hover:scale-105 hover:shadow-lg hover-glow"
                    >
                      <span>Download & Preview PDF</span>
                    </a>
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
                  © 2025 Nicolas Maulana SS. Built with Next.js and Tailwind CSS.
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
