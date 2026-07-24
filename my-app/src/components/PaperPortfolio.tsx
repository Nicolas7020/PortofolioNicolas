"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { profile, journey, education, skillGroups } from "@/data/profile";

function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.getAttribute("data-reveal")) || 0;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "none";
          }, delay * 110);
          io.unobserve(el);
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.88) {
        el.style.opacity = "0";
        el.style.transform = "translateY(26px)";
        el.style.transition = "opacity .6s ease, transform .65s cubic-bezier(.2,.7,.3,1)";
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, []);
}

function Tape({ style }: { style: React.CSSProperties }) {
  return <div aria-hidden="true" className="tape" style={style} />;
}

function HandLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-hand w-max font-semibold text-2xl"
      style={{ color: "var(--accent)", transform: "rotate(-1deg)" }}
    >
      {children}
    </div>
  );
}

export default function PaperPortfolio() {
  const [idx, setIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const touchX = useRef<number | null>(null);
  const reducedMotion = useRef(false);

  useScrollReveal();

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const go = useCallback((i: number) => {
    const n = projects.length;
    setIdx(((i % n) + n) % n);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % projects.length);
      else if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + projects.length) % projects.length);
      else if (e.key === "Escape") setCvOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const copyEmail = () => {
    const done = () => {
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(profile.email).then(done).catch(done);
    } else done();
  };

  const counter = `${String(idx + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;

  return (
    <>
      {/* Paper grain overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 120,
          opacity: 0.05,
          mixBlendMode: "multiply",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Nav */}
      <nav
        className="sticky top-0 anim-rise-in"
        style={{
          zIndex: 60,
          background: "rgba(253,252,248,.92)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #ddd5c2",
        }}
      >
        <div className="max-w-[1120px] mx-auto px-5 sm:px-7 py-3.5 flex items-center justify-between gap-5">
          <a href="#top" className="font-display font-extrabold text-xl no-underline" style={{ color: "var(--ink)" }}>
            {profile.initials}
          </a>
          <div className="flex items-center gap-4 sm:gap-6">
            {[
              ["#journey", "Journey"],
              ["#skills", "Skills"],
              ["#work", "Work"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="hidden md:inline no-underline font-semibold text-sm hover:!text-[var(--accent)]"
                style={{ color: "var(--ink)" }}
              >
                {label}
              </a>
            ))}
            <button onClick={() => setCvOpen(true)} className="btn-dark text-[13px] px-4 py-2 !rounded-[7px]">
              CV
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-[1120px] mx-auto px-5 sm:px-7 pt-14 pb-20 flex flex-col gap-16 lg:gap-[72px]">
        {/* ---------- HERO ---------- */}
        <section
          id="top"
          aria-label="Intro"
          className="sheet anim-sheet-in px-6 py-10 sm:px-10 lg:px-[60px] lg:pt-16 lg:pb-[60px]"
          style={{ rotate: "-0.3deg", ["--sheet-shift" as string]: "translate(12px,14px) rotate(.7deg)" }}
        >
          <Tape style={{ top: -13, left: 52, width: 118, transform: "rotate(-4deg)", height: 30 }} />
          <Tape style={{ top: -11, right: 80, width: 96, transform: "rotate(3deg)" }} />
          <div className="grid lg:grid-cols-[1.25fr_.9fr] gap-11 items-center">
            <div>
              <div
                className="font-hand w-max font-semibold text-[26px] anim-rise-in"
                style={{ color: "var(--accent)", transform: "rotate(-1.5deg)", animationDelay: ".15s" }}
              >
                hi! I&apos;m
              </div>
              <h1
                className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[78px] leading-[.98] anim-rise-in"
                style={{ letterSpacing: "-2.5px", margin: "6px 0 14px", animationDelay: ".25s" }}
              >
                {profile.name}
              </h1>
              <p
                className="font-display font-semibold text-xl sm:text-2xl anim-rise-in"
                style={{ margin: "0 0 12px", animationDelay: ".35s" }}
              >
                {profile.role}
              </p>
              <p
                className="text-lg anim-rise-in"
                style={{ color: "var(--muted)", margin: "0 0 32px", maxWidth: "46ch", textWrap: "pretty", animationDelay: ".45s" }}
              >
                CS student at BINUS University and Software Engineer at MidHub, building{" "}
                <span className="hl" style={{ boxShadow: "inset 0 -0.45em var(--hl)" }}>
                  Indonesia&apos;s heavy equipment marketplace
                </span>{" "}
                frontend from the ground up.
              </p>
              <div className="flex flex-nowrap gap-3 sm:gap-4 anim-rise-in" style={{ animationDelay: ".55s" }}>
                <a href="#work" className="btn-dark whitespace-nowrap text-sm sm:text-base px-4 sm:px-7 py-3.5 sm:py-4 inline-flex items-center gap-2">
                  See my work <span aria-hidden="true">↓</span>
                </a>
                <button onClick={() => setCvOpen(true)} className="btn-outline whitespace-nowrap text-sm sm:text-base px-4 sm:px-[26px] py-3 sm:py-3.5">
                  Download CV
                </button>
              </div>
            </div>
            <div className="relative justify-self-center mt-6 lg:mt-0">
              <div
                className="anim-swing-in w-[280px] sm:w-[330px] bg-white pt-[13px] px-[13px] pb-14"
                style={{ boxShadow: "0 3px 6px rgba(38,34,27,.1), 0 16px 34px rgba(38,34,27,.18)", transform: "rotate(2deg)" }}
              >
                <Tape style={{ top: -13, left: "33%", width: 110, transform: "rotate(-2deg)" }} />
                <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden" style={{ background: "#f1ecdf" }}>
                  <Image
                    src="/prof1.jpg"
                    alt="Portrait of Nicolas Maulana"
                    fill
                    sizes="330px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="font-hand text-[22px] text-center mt-3.5" style={{ color: "var(--muted)" }}>
                  me, probably debugging
                </div>
              </div>
              <div
                className="anim-pop-in absolute -bottom-6 -left-4 sm:-left-9 w-[180px] pt-[34px] px-4 pb-4"
                style={{ background: "var(--note-bg)", transform: "rotate(-3deg)", boxShadow: "0 8px 18px rgba(38,34,27,.18)" }}
              >
                <span
                  className="absolute top-2.5 left-1/2 -ml-[7px] w-3.5 h-3.5 rounded-full"
                  style={{ background: "var(--pin-red)", boxShadow: "0 2px 3px rgba(38,34,27,.3)" }}
                />
                <div className="font-hand font-semibold text-xl leading-[1.25]" style={{ color: "#453e2e" }}>
                  currently: creating SiapTPB - edtech for ITB students
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- JOURNEY ---------- */}
        <section
          id="journey"
          className="sheet px-6 py-10 sm:px-10 lg:px-[60px] lg:py-14"
          style={{ rotate: "0.35deg", ["--sheet-shift" as string]: "translate(-11px,13px) rotate(-.6deg)" }}
        >
          <Tape style={{ top: -12, right: 60, width: 108, transform: "rotate(4deg)" }} />
          <HandLabel>the story so far</HandLabel>
          <h2 className="font-display font-bold text-3xl sm:text-[40px]" style={{ letterSpacing: "-1px", margin: "4px 0 40px" }}>
            Education &amp; <span className="hl">Experience</span>
          </h2>
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-9 items-start">
            <div className="flex flex-col gap-[26px]">
              {journey.map((item, i) => (
                <article key={item.title + item.period} data-reveal={i} className="paper-card paper-card-hover px-6 pt-[26px] pb-[22px]">
                  <span
                    className="font-mono-ui absolute -top-[13px] left-[18px] text-xs font-semibold rounded-full px-3 py-1"
                    style={
                      item.current
                        ? { background: "var(--ink)", color: "var(--sheet)" }
                        : { background: "#efe8d4", color: "#453e2e" }
                    }
                  >
                    {item.period}
                  </span>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4">
                    <div>
                      <h3 className="font-display font-bold text-[21px]" style={{ margin: "0 0 2px" }}>
                        {item.title}
                      </h3>
                      <div className="font-semibold text-sm mb-2.5" style={{ color: "var(--accent)" }}>
                        {item.org}
                      </div>
                      <p className="text-[15px] m-0" style={{ color: "var(--muted)", maxWidth: "52ch", textWrap: "pretty" }}>
                        {item.description}
                      </p>
                    </div>
                    <span className="badge-dash flex-none">{item.stat}</span>
                  </div>
                </article>
              ))}
            </div>
            <aside
              data-reveal={journey.length}
              aria-label="Education"
              className="lg:sticky lg:top-[92px] rounded-xl text-center px-[26px] py-[30px]"
              style={{ border: "3px double #4d4636", background: "var(--panel)" }}
            >
              <div className="relative w-[168px] h-[104px] mx-auto mb-4">
                <Image
                  src={education.logo}
                  alt={education.school}
                  fill
                  sizes="168px"
                  className="object-contain"
                />
              </div>
              <h3 className="font-display font-bold text-xl" style={{ margin: "0 0 4px" }}>
                {education.degree}
              </h3>
              <div className="font-semibold text-sm mb-1">{education.stream}</div>
              <div className="font-mono-ui text-xs mb-4" style={{ color: "var(--muted)" }}>
                {education.period}
              </div>
              <div className="pt-3.5 text-sm" style={{ borderTop: "1px dashed var(--dash)", color: "var(--muted)" }}>
                {education.detail}
              </div>
              <div className="font-hand text-[19px] mt-3" style={{ color: "var(--accent)", transform: "rotate(-1.5deg)" }}>
                the diploma in progress
              </div>
            </aside>
          </div>
        </section>

        {/* ---------- SKILLS ---------- */}
        <section
          id="skills"
          className="sheet px-6 py-10 sm:px-10 lg:px-[60px] lg:py-14"
          style={{ rotate: "-0.3deg", ["--sheet-shift" as string]: "translate(10px,12px) rotate(.5deg)" }}
        >
          <Tape style={{ top: -12, left: 70, width: 100, transform: "rotate(-3deg)" }} />
          <HandLabel>tools of choice</HandLabel>
          <h2 className="font-display font-bold text-3xl sm:text-[40px]" style={{ letterSpacing: "-1px", margin: "4px 0 12px" }}>
            Technical <span className="hl">Skills</span>
          </h2>
          <p className="font-hand text-[21px] max-w-full sm:w-max" style={{ color: "var(--muted)", margin: "0 0 38px", transform: "rotate(-.5deg)" }}>
            grouped by how I actually work - not everything I&apos;ve ever installed
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[22px] items-start">
            {skillGroups.map((group, i) => (
              <div
                key={group.title}
                data-reveal={i}
                className="paper-card px-5 pt-[30px] pb-[22px]"
                style={{ rotate: group.tilt, boxShadow: "0 4px 12px rgba(38,34,27,.08)" }}
              >
                <span className="pin -top-2 left-1/2 -ml-2" style={{ background: group.pinColor }} />
                <h3 className="font-display font-bold text-lg" style={{ margin: "0 0 14px" }}>
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- PROJECTS ---------- */}
        <section
          id="work"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          className="sheet px-6 py-10 sm:px-10 lg:px-[60px] lg:pt-14 lg:pb-12"
          style={{ rotate: "0.3deg", ["--sheet-shift" as string]: "translate(-12px,12px) rotate(-.55deg)" }}
        >
          <Tape style={{ top: -12, right: 90, width: 112, transform: "rotate(2.5deg)" }} />
          <div data-reveal={0}>
            <div className="flex justify-between items-end gap-5 mb-8">
              <div>
                <HandLabel>the good stuff</HandLabel>
                <h2 className="font-display font-bold text-3xl sm:text-[40px]" style={{ letterSpacing: "-1px", margin: "4px 0 0" }}>
                  Featured <span className="hl">Projects</span>
                </h2>
              </div>
              <div aria-live="polite" className="badge-dash flex-none whitespace-nowrap text-sm px-3.5 py-1.5">
                {counter}
              </div>
            </div>
            <div className="relative">
              <div
                className="overflow-hidden rounded-xl"
                onTouchStart={(e) => {
                  touchX.current = e.touches[0].clientX;
                }}
                onTouchEnd={(e) => {
                  if (touchX.current == null) return;
                  const dx = e.changedTouches[0].clientX - touchX.current;
                  if (Math.abs(dx) > 48) go(idx + (dx < 0 ? 1 : -1));
                  touchX.current = null;
                }}
              >
                <div
                  className="flex"
                  style={{
                    transform: `translateX(-${idx * 100}%)`,
                    transition: reducedMotion.current ? "none" : "transform .5s cubic-bezier(.3,.7,.25,1)",
                  }}
                >
                  {projects.map((p, i) => (
                    <div
                      key={p.title}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${i + 1} of ${projects.length}: ${p.title}`}
                      className="flex-none w-full p-1"
                    >
                      <div className="grid md:grid-cols-[1.05fr_1fr] gap-6 lg:gap-8 items-center paper-card p-4 sm:p-6" style={{ boxShadow: "0 4px 14px rgba(38,34,27,.07)" }}>
                        <div className="relative min-w-0 h-[220px] sm:h-[320px] rounded-[10px] overflow-hidden" style={{ background: "#f1ecdf" }}>
                          <Image
                            src={`/${p.imageUrl}`}
                            alt={`Screenshot of ${p.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 520px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 py-2 md:pr-3">
                          <h3 className="font-display font-bold text-2xl sm:text-3xl" style={{ letterSpacing: "-.5px", margin: "0 0 8px" }}>
                            {p.title}
                          </h3>
                          <p className="text-base" style={{ color: "var(--muted)", margin: "0 0 8px", maxWidth: "44ch", textWrap: "pretty" }}>
                            {p.pitch ?? p.description}
                          </p>
                          {p.note && (
                            <div className="font-hand text-xl max-w-full mb-4" style={{ color: "var(--accent)", transform: "rotate(-.6deg)" }}>
                              {p.note}
                            </div>
                          )}
                          <div className="flex flex-wrap gap-2 mb-[22px]">
                            {p.technologies.map((tech) => (
                              <span key={tech} className="chip">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-3">
                            {p.liveUrl && (
                              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-dark text-sm px-5 py-3 !rounded-lg">
                                Live site ↗
                              </a>
                            )}
                            {p.githubUrl && (
                              <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm px-[18px] py-2.5 !rounded-lg">
                                Repo ↗
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => go(idx - 1)}
                aria-label="Previous project"
                className="carousel-arrow hidden lg:block"
                style={{ left: -46 }}
              >
                ‹
              </button>
              <button
                onClick={() => go(idx + 1)}
                aria-label="Next project"
                className="carousel-arrow hidden lg:block"
                style={{ right: -46 }}
              >
                ›
              </button>
            </div>
            <div className="flex justify-center gap-[9px] mt-6">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => go(i)}
                  aria-label={`Go to project ${i + 1}: ${p.title}`}
                  className="rounded-full border-none cursor-pointer p-0"
                  style={{
                    width: i === idx ? 28 : 10,
                    height: 10,
                    background: i === idx ? "var(--ink)" : "#cfc7b2",
                    transition: "width .3s ease, background .3s ease",
                  }}
                />
              ))}
            </div>
            <p className="font-hand text-lg text-center" style={{ color: "var(--muted-2)", margin: "14px 0 0" }}>
              arrow keys and swipe work too - no auto-advance, promise
            </p>
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <section
          id="contact"
          className="sheet px-6 py-10 sm:px-10 lg:px-[60px] lg:py-14"
          style={{ rotate: "-0.25deg", ["--sheet-shift" as string]: "translate(11px,13px) rotate(.6deg)" }}
        >
          <Tape style={{ top: -12, left: "52%", width: 104, transform: "rotate(-2deg)" }} />
          <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-11 items-start">
            <div data-reveal={0}>
              <HandLabel>the inbox is open</HandLabel>
              <h2 className="font-display font-bold text-3xl sm:text-[40px]" style={{ letterSpacing: "-1px", margin: "4px 0 10px" }}>
                Say <span className="hl">hi</span>
              </h2>
              <p className="text-base" style={{ color: "var(--muted)", margin: "0 0 28px", maxWidth: "44ch", textWrap: "pretty" }}>
                Freelance work, full-time opportunities, or just trading notes on web and mobile - I reply fast.
              </p>
              <div className="relative flex flex-col sm:flex-row gap-3 mb-4">
                <div
                  className="font-mono-ui flex-1 text-[15px] rounded-[9px] px-4 py-3.5 break-all"
                  style={{ color: "#453e2e", border: "1.5px dashed var(--dash)", background: "var(--panel)" }}
                >
                  {profile.email}
                </div>
                <button onClick={copyEmail} className="btn-dark text-sm px-[22px] py-3 sm:py-0 !rounded-[9px]">
                  Copy
                </button>
                {copied && (
                  <div
                    role="status"
                    className="font-hand absolute -right-2 -top-10 font-semibold text-[22px] rounded-lg px-3.5 py-1"
                    style={{ color: "var(--sheet)", background: "var(--ink)", transform: "rotate(-2deg)", boxShadow: "0 6px 14px rgba(38,34,27,.3)" }}
                  >
                    copied! ✓
                  </div>
                )}
              </div>
              <div className="flex gap-3 mb-[22px]">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 text-center text-sm py-[13px]">
                  GitHub ↗
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 text-center text-sm py-[13px]">
                  LinkedIn ↗
                </a>
              </div>
              <div className="font-mono-ui text-[13px]" style={{ color: "var(--muted)" }}>
                ◎ {profile.location}
              </div>
              <div className="font-mono-ui text-[13px] mt-1" style={{ color: "var(--muted)" }}>
                ✆ {profile.phone}
              </div>
            </div>
            <div data-reveal={1} className="rounded-xl p-[22px]" style={{ border: "3px double #4d4636", background: "var(--panel)" }}>
              <div className="font-mono-ui text-xs mb-3" style={{ color: "var(--muted)" }}>
                {profile.cvFileName}
              </div>
              <div className="paper-card rounded-lg px-6 py-[26px] mb-4" style={{ boxShadow: "0 3px 8px rgba(38,34,27,.06)" }}>
                <div className="font-display font-extrabold text-[17px] mb-0.5">{profile.fullName}</div>
                <div className="text-[11px] mb-3.5" style={{ color: "var(--muted)" }}>
                  {profile.role}
                </div>
                {[92, 84, 88].map((w, i) => (
                  <div key={i} className="h-[7px] rounded mb-[7px]" style={{ background: "#eee8d8", width: `${w}%` }} />
                ))}
                <div className="h-[7px] rounded mb-[7px] mt-[7px]" style={{ background: "#f5f0e2", width: "70%" }} />
                <div className="h-[7px] rounded" style={{ background: "#f5f0e2", width: "78%" }} />
              </div>
              <div className="flex gap-2.5">
                <button onClick={() => setCvOpen(true)} className="btn-outline flex-1 text-sm py-[11px] !rounded-lg">
                  Preview
                </button>
                <a
                  href={profile.cvDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark flex-1 text-center text-sm py-[13px] !rounded-lg"
                >
                  Download ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="font-mono-ui text-center text-xs -mt-4" style={{ color: "#8d8470" }}>
          © 2026 {profile.fullName} · made with coffee, code, and good vibes ✨
        </footer>
      </main>

      {/* ---------- CV MODAL ---------- */}
      {cvOpen && (
        <div
          onClick={() => setCvOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="CV preview"
          className="fixed inset-0 flex items-center justify-center p-4 sm:p-8"
          style={{ zIndex: 100, background: "rgba(38,34,27,.5)" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[720px] max-w-[94vw] max-h-[88vh] overflow-auto rounded-[10px] px-5 sm:px-7 py-[26px]"
            style={{ background: "var(--sheet)", boxShadow: "0 30px 70px rgba(20,17,10,.45)" }}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="font-mono-ui text-[13px]" style={{ color: "var(--muted)" }}>
                {profile.cvFileName}
              </div>
              <button
                onClick={() => setCvOpen(false)}
                aria-label="Close preview"
                className="w-[34px] h-[34px] rounded-full text-[15px] cursor-pointer transition-colors hover:!bg-[var(--ink)] hover:!text-[var(--sheet)]"
                style={{ border: "2px solid var(--ink)", background: "transparent", color: "var(--ink)" }}
              >
                ✕
              </button>
            </div>
            <div className="rounded-md overflow-hidden mb-4" style={{ border: "1px solid var(--line)" }}>
              <iframe
                src={profile.cvPreviewUrl}
                title="CV preview"
                className="w-full h-[60vh] border-none block"
                allow="autoplay"
              />
            </div>
            <a
              href={profile.cvDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark block text-center text-[15px] py-3.5"
            >
              Download PDF ↓
            </a>
          </div>
        </div>
      )}
    </>
  );
}
