import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Moon, Sun, Mail, Terminal } from "lucide-react";
import { useTheme } from "../App";
import ProjectCard from "../components/projects/ProjectCard";
import projects from "../data/projects";

function NetworkBg() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          <radialGradient id="grid-fade" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#grid-fade)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          mask="url(#grid-mask)"
          className="text-black dark:text-white"
        />
      </svg>

      {/* Floating nodes */}
      {[
        { cx: "15%", cy: "20%", delay: 0, size: 2 },
        { cx: "85%", cy: "15%", delay: 1.5, size: 1.5 },
        { cx: "70%", cy: "45%", delay: 0.8, size: 2.5 },
        { cx: "25%", cy: "65%", delay: 2, size: 1.5 },
        { cx: "90%", cy: "75%", delay: 0.5, size: 2 },
        { cx: "50%", cy: "35%", delay: 1.2, size: 1.5 },
      ].map((node, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/30 dark:bg-blue-400/15"
          style={{
            left: node.cx,
            top: node.cy,
            width: node.size * 4,
            height: node.size * 4,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: node.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glow orbs */}
      <div className="absolute top-[10%] left-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-blue-500/[0.07] dark:bg-blue-500/[0.05] blur-[100px]" />
      <div className="absolute bottom-[20%] right-[10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-cyan-500/[0.06] dark:bg-cyan-400/[0.04] blur-[100px]" />
    </div>
  );
}

function ProjectIndex({ projects: items }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="hidden lg:block fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-30"
    >
      <div className="flex flex-col gap-3">
        {items.map((p, i) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="group flex items-center gap-2.5 text-xs text-text-secondary/60 dark:text-text-light/30 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <span className="w-5 h-px bg-current transition-all group-hover:w-8" />
            <span className="font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {String(i + 1).padStart(2, "0")}
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { darkMode, toggleDarkMode } = useTheme();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-primary dark:bg-primary-dark transition-colors duration-300">
      <NetworkBg />

      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-primary/80 dark:bg-primary-dark/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-text-secondary dark:text-text-light/70 hover:text-text-primary dark:hover:text-text-light transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </Link>

            <div className="flex items-center gap-2 text-text-secondary dark:text-text-light/50">
              <Terminal className="w-3.5 h-3.5" />
              <span className="text-xs font-mono tracking-wider uppercase">
                Projects
              </span>
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-text-light" />
              ) : (
                <Moon className="w-5 h-5 text-text-primary" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <ProjectIndex projects={projects} />

      {/* Hero */}
      <div ref={heroRef} className="relative z-10 overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {projects.length} projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-4"
          >
            The <em className="italic">lab.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary dark:text-text-light/50 text-lg max-w-md mx-auto"
          >
            Recent tools and experiments I built in my free time. AI workflows,
            analytics, and creative code.
          </motion.p>
        </motion.div>
      </div>

      {/* Project Cards */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 pb-8">
        <div className="space-y-10">
          {projects.map((project, i) => (
            <div key={project.id} id={project.id} className="scroll-mt-24">
              <ProjectCard project={project} variant="full" index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 mb-12"
        >
          <div className="inline-block">
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-blue-500/50 mx-auto mb-6" />
            <p className="font-serif text-3xl sm:text-4xl mb-3">
              Want to collab?
            </p>
            <p className="text-text-secondary dark:text-text-light/50 text-base mb-8">
              Let's let's build.
            </p>
            <a
              href="mailto:jason@jasongallagher.co"
              className="btn btn-primary inline-flex"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
