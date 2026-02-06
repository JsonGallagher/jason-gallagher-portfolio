import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const statusConfig = {
  Shipped: {
    classes: "bg-green-500/10 text-green-600 dark:text-green-400",
    dot: "bg-green-500",
  },
  WIP: {
    classes: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    dot: "bg-blue-500",
  },
  Archived: {
    classes: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
    dot: "bg-gray-500",
  },
};

function SectionLabel({ children }) {
  return (
    <h4 className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-text-secondary/70 dark:text-text-light/40 mb-1.5">
      <span className="w-3 h-px bg-current" />
      {children}
    </h4>
  );
}

export default function ProjectCard({ project, variant = "full", index = 0 }) {
  const isPreview = variant === "preview";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const status = statusConfig[project.status] || statusConfig.Archived;

  if (isPreview) {
    return (
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.12 }}
        className="group relative flex flex-col rounded-2xl bg-white dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 shadow-xl shadow-black/5 dark:shadow-black/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="relative aspect-video bg-gray-100 dark:bg-white/5 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif text-lg font-medium leading-snug">
              {project.title}
            </h3>
            <span
              className={`shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${status.classes}`}
            >
              <span className={`w-1 h-1 rounded-full ${status.dot}`} />
              {project.status}
            </span>
          </div>

          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-secondary/60 dark:text-text-light/40 mb-2">
            {project.category}
          </span>

          <p className="text-sm text-text-secondary dark:text-text-light/60 leading-relaxed mb-4">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-blue-500/[0.07] text-blue-600/80 dark:text-blue-400/70 rounded text-[11px] font-medium"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="px-2 py-0.5 text-text-secondary/50 dark:text-text-light/30 text-[11px]">
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        </div>
      </motion.article>
    );
  }

  // Full variant
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative rounded-3xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 shadow-xl shadow-black/5 dark:shadow-black/40 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Glow border effect */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-blue-500/20 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-blue-400/25 dark:to-cyan-400/15" />

      <div className="relative bg-white dark:bg-[#232323] rounded-3xl overflow-hidden">
        {/* Image with overlay */}
        <div className="relative aspect-video bg-gray-100 dark:bg-white/5 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Floating badges over image */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2">
            <span
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-md bg-white/80 dark:bg-black/50 ${status.classes}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
              />
              {project.status}
            </span>
          </div>
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.15em] backdrop-blur-md bg-white/80 dark:bg-black/50 text-text-secondary dark:text-text-light/70">
              {project.category} &middot; {project.year}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {/* Title */}
          <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight mb-6">
            {project.title}
          </h3>

          {/* Problem → Approach → Result */}
          <div className="space-y-5 mb-8">
            {[
              { label: "Problem", text: project.problem },
              { label: "Approach", text: project.approach },
              { label: "Result", text: project.result },
            ].map((section) => (
              <div key={section.label}>
                <SectionLabel>{section.label}</SectionLabel>
                <p className="text-base text-text-secondary dark:text-text-light/60 leading-relaxed pl-0 sm:pl-5">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent dark:via-white/[0.06] mb-6" />

          {/* Stack + Links row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-blue-500/[0.07] text-blue-600/80 dark:text-blue-400/70 rounded text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2 shrink-0">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source
                </a>
              )}
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-primary-dark text-text-light dark:bg-text-light dark:text-primary-dark hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
