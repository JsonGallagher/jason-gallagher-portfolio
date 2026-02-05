import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const statusColors = {
  Shipped: "bg-green-500/10 text-green-600 dark:text-green-400",
  WIP: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Archived: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
};

export default function ProjectCard({ project, variant = "full", index = 0 }) {
  const isPreview = variant === "preview";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-3xl bg-white dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 shadow-xl shadow-black/5 dark:shadow-black/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden ${
        isPreview ? "flex flex-col" : ""
      }`}
    >
      {/* Image */}
      <div className="aspect-video bg-gray-100 dark:bg-white/5 overflow-hidden rounded-t-3xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      <div className={isPreview ? "p-5 flex flex-col flex-1" : "p-6 sm:p-8"}>
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3
              className={`font-serif font-medium ${
                isPreview ? "text-lg" : "text-xl sm:text-2xl"
              }`}
            >
              {project.title}
            </h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-text-light/50">
              {project.category} &middot; {project.year}
            </span>
          </div>
          <span
            className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-medium ${
              statusColors[project.status] || statusColors.Archived
            }`}
          >
            {project.status}
          </span>
        </div>

        {isPreview ? (
          /* Preview variant */
          <>
            <p className="text-sm text-text-secondary dark:text-text-light/60 mb-4 leading-relaxed">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="px-2.5 py-1 text-text-secondary dark:text-text-light/40 text-xs">
                  +{project.stack.length - 3}
                </span>
              )}
            </div>
          </>
        ) : (
          /* Full variant */
          <>
            {/* Problem → Approach → Result */}
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-text-light/50 mb-1">
                  Problem
                </h4>
                <p className="text-sm text-text-secondary dark:text-text-light/70 leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-text-light/50 mb-1">
                  Approach
                </h4>
                <p className="text-sm text-text-secondary dark:text-text-light/70 leading-relaxed">
                  {project.approach}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-text-light/50 mb-1">
                  Result
                </h4>
                <p className="text-sm text-text-secondary dark:text-text-light/70 leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-sm"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </a>
              )}
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </motion.article>
  );
}
