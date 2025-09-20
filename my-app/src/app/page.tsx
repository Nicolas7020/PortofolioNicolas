import Image from "next/image";
import SequentialType from "@/components/SequentialType";
import LogoLoop from "@/components/LogoLoop";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectSlider from "@/components/ProjectSlider";
import { projects } from "@/data/projects";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiGraphql, SiAmazon, SiDocker, SiGit, SiVercel, SiFigma, SiExpress, SiFlask, SiStreamlit, SiTensorflow, SiScikitlearn, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';

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
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimatedSection className="flex-1 text-center lg:text-left" animation="fade-in-left">
              <SequentialType className="block" />
              <div className="fade-in-up animate-delay-300">
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  5th Semester Computer Science - Software Engineering Student at BINUS University. Passionate Full Stack Developer & AI Enthusiast 
                  with hands-on experience in both frontend and backend technologies. Active member of HIMTI, campus event organizer, and Freshmen Partner. 
                  Always eager to learn new technologies and solve real-world problems through innovative solutions.
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
                My academic journey and organizational involvement
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Work Experience */}
              <AnimatedSection animation="fade-in-left" delay={200}>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Education & Organization</h3>
                  <div className="space-y-8">
                    <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300 hover-lift">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Bachelor in Computer Science</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">BINUS University • 2023 - Present</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Software Engineering student with strong technical foundations in full stack development. 
                        Currently in fifth semester with hands-on experience in academic and personal projects.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300 hover-lift">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Freshmen Partner</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">BINUS University • Sep 2024 - May 2025</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Provided guidance to first-year students, helping them navigate and adapt to university life over the course of one year. 
                        Focused on supporting their academic and personal development, ensuring a smooth transition into higher education.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300 hover-lift">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Activist</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">HIMTI • Jan 2024 - Present</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Developed digital infrastructure and maintained organization's web presence. 
                        Previously served as Coordinator of Fundraising and Publication Marketing Activist.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300 hover-lift">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">ICPC Escort</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">International Collegiate Programming Contest • 2024</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Guided 5+ international programming contest participants using bilingual English-Mandarin communication. 
                        Provided cross-cultural support across 2-day competition schedule.
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
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Next.js</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">React</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">HTML5</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">CSS3</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">JavaScript</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Tailwind CSS</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Backend & Database</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Express.js</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Node.js</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Flask</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">PostgreSQL</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">MinIO</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">AI/ML & Other Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Python</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">TensorFlow/Keras</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">CNN, LSTM</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Scikit-learn</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">OpenCV</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Java (OOP)</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer">Streamlit</span>
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
                  <a href="mailto:nicolasmaulanass@gmail.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    nicolasmaulanass@gmail.com
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
                  <a href="tel:+6281915020705" className="text-green-600 dark:text-green-400 font-semibold hover:underline">
                    +62 819 1502 0705
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
                  <p className="text-purple-600 dark:text-purple-400 font-semibold">Springlake Summarecon Bekasi</p>
                </div>
              </AnimatedSection>
            </div>

            {/* Social Media Links */}
            <AnimatedSection animation="fade-in-up" delay={800}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Follow My Journey</h3>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://www.linkedin.com/in/nicolas-maulana-ss-a76690285" 
                    target="_blank"
                    rel="noopener noreferrer"
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
                    href="mailto:nicolasmaulanass@gmail.com" 
                    className="group w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <span className="text-lg font-bold group-hover:scale-110 transition-transform">@</span>
                  </a>
                  <a 
                    href="tel:+6281915020705" 
                    className="group w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <span className="text-lg font-bold group-hover:scale-110 transition-transform">📱</span>
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
