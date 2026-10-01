import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Moon, Sun, Mail, Terminal } from "lucide-react";
import { useTheme } from "../App";
import ProjectCard from "../components/projects/ProjectCard";
import projects from "../data/projects";

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

  return (
    <div className="relative min-h-screen bg-primary dark:bg-primary-dark transition-colors duration-300">
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
      <div className="relative z-10 overflow-hidden">
        <motion.div
          className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-text-secondary dark:text-text-light/70 mb-6"
          >
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
