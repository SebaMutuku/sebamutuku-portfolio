import React, { useCallback, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Briefcase,
  Check,
  Copy,
  DownloadCloud,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Package,
  Phone,
  Terminal,
  Users,
  X,
} from "lucide-react";
import { getExperienceYears } from "./utils/utils";
import { useCountUp, useReveal, useScrollProgress, useScrollSpy, useTypewriter } from "./hooks";
import { FILTERS, MARQUEE, NAV, ROLES, experience, projects, techStack } from "./data";

const EMAIL = "sebastian.muthiani@gmail.com";
const PHONE = "+254 727 538 818";
const RESUME = `${process.env.PUBLIC_URL}/resume.pdf`;

/* ---------- small building blocks ---------- */

function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ "--delay": `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

function SpotlightCard({ className = "", children, ...rest }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div onMouseMove={onMove} className={`spotlight ${className}`} {...rest}>
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-14 text-center">
      <p className="font-mono text-sm tracking-widest text-emerald-400 uppercase mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">{subtitle}</p>}
    </Reveal>
  );
}

function Stat({ end, suffix = "", label }) {
  const [ref, value] = useCountUp(end);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
        {value.toLocaleString()}
        <span className="text-emerald-400">{suffix}</span>
      </div>
      <div className="mt-1 text-xs sm:text-sm text-gray-400">{label}</div>
    </div>
  );
}

const btnPrimary =
  "group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-gray-950 bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-400/40 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400";
const btnGhost =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-gray-100 bg-white/5 border border-white/10 backdrop-blur transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400";

/* ---------- page ---------- */

export default function DeveloperPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [copied, setCopied] = useState(false);

  const years = getExperienceYears(2018, 4);
  const role = useTypewriter(ROLES);
  const active = useScrollSpy(NAV);
  const progress = useScrollProgress();

  const visibleProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter]
  );

  const go = useCallback((id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07090f] text-gray-200">
      {/* scroll progress */}
      <div
        className="fixed top-0 left-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      {/* ---------- Navigation ---------- */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#07090f]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => go("home")} className="flex items-center gap-2 text-lg font-bold" aria-label="Home">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-400/10 ring-1 ring-emerald-400/30">
              <Terminal className="h-4 w-4 text-emerald-400" />
            </span>
            <span className="font-mono text-sm tracking-wide text-gradient">sebastian.dev</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {NAV.map((id) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`relative rounded-lg px-3.5 py-2 text-sm capitalize transition-colors ${
                  active === id ? "text-white" : "text-gray-400 hover:text-white"
                }`}>
                {id}
                <span
                  className={`absolute inset-x-3.5 -bottom-px h-px bg-gradient-to-r from-emerald-400 to-cyan-400 transition-opacity ${
                    active === id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            ))}
            <a href={RESUME} download className="ml-3 rounded-lg border border-emerald-400/40 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400/10">
              Résumé
            </a>
          </div>

          <button
            className="rounded-lg p-2 text-gray-300 hover:bg-white/5 md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/5 bg-[#07090f]/95 px-4 py-3 backdrop-blur-xl md:hidden">
            {NAV.map((id) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`block w-full rounded-lg px-3 py-3 text-left capitalize ${
                  active === id ? "bg-white/5 text-emerald-300" : "text-gray-300 hover:bg-white/5"
                }`}>
                {id}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ---------- Hero ---------- */}
      <header id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="aurora aurora-1" />
          <div className="aurora aurora-2" />
          <div className="aurora aurora-3" />
          <div className="bg-grid absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-1.5 text-sm text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to new opportunities
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              Hi, I'm <span className="text-gradient-animated">Sebastian Mutuku</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-6 flex h-10 items-center justify-center font-mono text-lg text-gray-300 sm:text-2xl" aria-live="polite">
              <span className="text-gray-500 mr-3">&gt;</span>
              <span className="text-emerald-300">{role}</span>
              <span className="caret" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
              Senior Backend Engineer with <b className="text-white">{years}+ years</b> building high-volume banking,
              payment and enterprise systems. Expert in <b className="text-white">Java, Spring Boot, Temenos T24</b> and{" "}
              <b className="text-white">Kubernetes</b> — shipping production-grade software in regulated environments.
            </p>
          </Reveal>

          <Reveal delay={400} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => go("projects")} className={btnPrimary}>
              View my work
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={() => go("contact")} className={btnGhost}>
              Get in touch
            </button>
            <a href={RESUME} download className={btnGhost}>
              <DownloadCloud className="h-5 w-5" />
              Download CV
            </a>
          </Reveal>

          <Reveal delay={500} className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:grid-cols-4">
            <Stat end={years} suffix="+" label="Years experience" />
            <Stat end={120000} suffix="+" label="Health workers reached" />
            <Stat end={30} suffix="%" label="Faster transactions" />
            <Stat end={projects.length} suffix="" label="Flagship projects" />
          </Reveal>
        </div>

        <button
          onClick={() => go("about")}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-gray-500 transition hover:text-gray-300 sm:flex"
          aria-label="Scroll to About">
          <span className="relative h-9 w-5 rounded-full border border-gray-600">
            <span className="absolute left-1/2 top-2 h-1.5 w-1 -translate-x-1/2 animate-bounce rounded-full bg-emerald-400" />
          </span>
        </button>
      </header>

      {/* ---------- Tech marquee ---------- */}
      <div className="marquee relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-5" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i} className="mx-6 flex items-center gap-12 whitespace-nowrap font-mono text-sm text-gray-500">
              {t}
              <span className="h-1 w-1 rounded-full bg-emerald-400/60" />
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#07090f] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#07090f] to-transparent" />
      </div>

      {/* ---------- About ---------- */}
      <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="About" title="Engineering that moves money and saves lives" />
          <div className="grid items-start gap-12 md:grid-cols-5">
            <Reveal className="space-y-5 text-lg leading-relaxed text-gray-400 md:col-span-3">
              <p>
                I'm a <span className="text-white font-medium">software developer and solutions provider</span> with{" "}
                {years}+ years of experience building high-volume banking, payment and enterprise backend systems. I
                specialise in modernising legacy platforms and deploying scalable services in regulated environments.
              </p>
              <p>
                My work spans architecting scalable APIs, building Android applications, and delivering financial and
                health solutions — from card processing at a major regional bank to a FHIR-based app used by over
                120,000 healthcare workers.
              </p>
              <p>
                I've also published a Java artifact to <span className="text-white font-medium">Maven Central</span> and
                contribute to open source.
              </p>
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <GraduationCap className="mt-0.5 h-6 w-6 shrink-0 text-emerald-400" />
                <div>
                  <div className="font-semibold text-white">B.Sc. Electronics — Computer Engineering</div>
                  <div className="text-sm text-gray-500">Bachelor of Science degree holder</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} className="md:col-span-2">
              <SpotlightCard className="p-6">
                <h3 className="mb-5 font-mono text-sm uppercase tracking-widest text-emerald-400">Quick facts</h3>
                <ul className="space-y-3.5 text-gray-300">
                  {[
                    [Briefcase, `${years}+ years in software development`],
                    [Terminal, "Android & backend developer"],
                    [Terminal, "Networking developer with C++"],
                    [Terminal, "Deployment & DevOps enthusiast"],
                    [Users, "Team lead & technical mentor"],
                    [Terminal, "HAPI FHIR SDK developer"],
                    [Briefcase, "Core banking developer (Temenos T24)"],
                    [Package, "Published to Maven Central & Sonatype"],
                  ].map(([Icon, text], i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span className="text-sm leading-snug">{text}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Projects ---------- */}
      <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Projects"
            title="Strategic projects delivered"
            subtitle="Financial and health platforms built for scale, security and real-world impact."
          />

          <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${
                  filter === f
                    ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-300"
                    : "border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                }`}>
                {f}
              </button>
            ))}
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.name} delay={(i % 3) * 100}>
                  <SpotlightCard className="group flex h-full flex-col p-6 hover:-translate-y-1.5">
                    <div className="mb-5 flex items-start justify-between">
                      <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-400 ring-1 ring-emerald-400/20 transition group-hover:scale-110 group-hover:bg-emerald-400/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex flex-wrap justify-end gap-1.5">
                        {p.tags.map((t) => (
                          <span key={t} className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] text-gray-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-emerald-300">
                      {p.name}
                    </h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Skills" title="Technical toolbox" subtitle="From the JVM to the network stack, and from mobile to cloud." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(techStack).map(([category, { icon: Icon, items }], i) => (
              <Reveal key={category} delay={(i % 3) * 100}>
                <SpotlightCard className="h-full p-6">
                  <h3 className="mb-4 flex items-center gap-2.5 text-lg font-bold capitalize text-white">
                    <span className="rounded-lg bg-emerald-400/10 p-2 text-emerald-400">
                      <Icon className="h-4 w-4" />
                    </span>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="cursor-default rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-sm text-gray-300 transition hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <section id="experience" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Experience" title="Where I've worked" />
          <div className="relative">
            <div className="timeline-line absolute bottom-0 left-[11px] top-2 w-px md:left-[15px]" aria-hidden="true" />
            <div className="space-y-10">
              {experience.map((job) => (
                <Reveal key={job.title + job.period} className="relative pl-10 md:pl-14">
                  <span
                    className={`absolute left-0 top-2 grid h-6 w-6 place-items-center rounded-full bg-[#07090f] ring-2 md:left-1 ${
                      job.current ? "pulse-dot ring-emerald-400" : "ring-gray-600"
                    }`}>
                    <span className={`h-2 w-2 rounded-full ${job.current ? "bg-emerald-400" : "bg-gray-500"}`} />
                  </span>
                  <SpotlightCard className="p-6">
                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                        <p className="font-medium text-emerald-300">{job.company}</p>
                      </div>
                      <span className="w-fit whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-gray-300">
                        {job.period}
                      </span>
                    </div>
                    <p className="mb-4 text-sm italic text-gray-500">{job.description}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((a) => (
                        <li key={a} className="flex gap-3 text-sm leading-relaxed text-gray-300">
                          <span className="mt-1 text-emerald-400">▹</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="aurora aurora-1 !top-auto !bottom-[-14rem] !left-[-6rem] opacity-20" />
          <div className="aurora aurora-2 !top-auto !bottom-[-12rem] !right-[-6rem] opacity-20" />
        </div>
        <Reveal className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur sm:p-14">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-emerald-400">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Let's build something <span className="text-gradient-animated">great</span> together
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400">
            Looking for quality software engineering? Reach out to discuss your project and how I can help bring it to life.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${EMAIL}`} className={btnPrimary}>
              <Mail className="h-5 w-5" />
              Email me
            </a>
            <button onClick={copyEmail} className={btnGhost} aria-live="polite">
              {copied ? <Check className="h-5 w-5 text-emerald-400" /> : <Copy className="h-5 w-5" />}
              {copied ? "Copied!" : EMAIL}
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-400 transition hover:bg-white/5 hover:text-white">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <a
              href="https://github.com/SebaMutuku"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-400 transition hover:bg-white/5 hover:text-white">
              <Github className="h-4 w-4" /> SebaMutuku
            </a>
            <span className="flex items-center gap-2 px-3 py-2 text-gray-400">
              <MapPin className="h-4 w-4" /> Nairobi, Kenya
            </span>
          </div>
        </Reveal>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-white/5 px-4 py-8 text-center text-sm text-gray-500">
        <p>Designed & built by Sebastian Mutuku</p>
        <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
      </footer>

      {/* back to top */}
      <button
        onClick={() => go("home")}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-gray-900/80 text-emerald-300 shadow-lg backdrop-blur transition-all hover:-translate-y-1 hover:border-emerald-400/40 ${
          progress > 0.08 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}>
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
