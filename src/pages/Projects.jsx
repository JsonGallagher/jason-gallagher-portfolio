import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Moon, Sun, Mail } from "lucide-react";
import { useTheme } from "../App";
import ProjectCard from "../components/projects/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-primary dark:bg-primary-dark transition-colors duration-300">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-primary/90 dark:bg-primary-dark/90 backdrop-blur-xl border-b border-black/5 dark:border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-text-secondary dark:text-text-light/70 hover:text-text-primary dark:hover:text-text-light transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Portfolio</span>
            </Link>

            <h1 className="font-serif text-2xl sm:text-3xl font-medium">
              Projects
            </h1>

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

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="border-l-4 border-blue-500/70 pl-6 py-2 mb-10"
        >
          <p className="font-serif text-2xl text-text-primary dark:text-text-light/90 leading-relaxed">
            Side projects and tools I've built.
          </p>
          <p className="text-text-secondary dark:text-text-light/50 mt-1">
            From AI automations to creative experiments.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="full"
              index={i}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 mb-8"
        >
          <p className="font-serif text-xl text-text-primary dark:text-text-light/90 mb-4">
            Want this workflow? Let's talk.
          </p>
          <a
            href="mailto:jason@jasongallagher.co"
            className="btn btn-primary inline-flex"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
        </motion.div>
      </main>
    </div>
  );
}
