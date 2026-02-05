import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./projects/ProjectCard";
import projects from "../data/projects";

const featuredProjects = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="pt-16 pb-12 px-6 scroll-mt-16">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Things I've <em className="italic">built.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="preview"
              index={i}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:opacity-70 transition-opacity"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Subtle section divider */}
      <div className="mt-24 flex justify-center">
        <div className="h-px w-48 sm:w-64 md:w-80 lg:w-[26rem] bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />
      </div>
    </section>
  );
}
