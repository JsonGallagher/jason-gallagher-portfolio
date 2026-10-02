import { Link } from "react-router-dom";
import projects from "../data/projects";

const project = projects.find((item) => item.id === "market-data");

export default function FeaturedProjects() {
  return (
    <section tabIndex={-1} id="projects" aria-labelledby="featured-project-title" className="section-spacing px-6 scroll-mt-24">
      <div className="content-width">
        <div className="project-layout">
          <h2 id="featured-project-title" className="section-title project-title mb-0">{project.title}</h2>
          <figure className="project-image">
            <Link to="/projects#market-data" className="project-preview block aspect-video overflow-hidden" aria-label="Explore the Market Data Dashboard project">
              <img src={project.images[2]} alt="Market Data Dashboard charts comparing prices, active listings, and sales" loading="lazy" width="3988" height="2270" className="w-full h-full object-cover" />
            </Link>
            <figcaption className="text-sm text-muted leading-relaxed mt-3">Market trends and AI insights for client conversations.</figcaption>
          </figure>
          <div className="project-copy">
            <p className="text-lg text-muted leading-relaxed mb-4">
              A tool I built to help real estate agents turn scattered market
              data into clearer client conversations.
            </p>
            <p className="text-muted leading-relaxed">
              Interactive views of prices, inventory, and days on market bring
              trends into focus, with AI insights to help agents prepare.
            </p>
            <p className="text-sm text-muted leading-relaxed mt-5">{project.stack.join(" · ")}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2">
              <Link to="/projects#market-data" className="text-link">Explore the project</Link>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-link">Source</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t divider flex flex-col sm:flex-row sm:items-baseline gap-x-6 gap-y-1">
          <Link to="/projects" className="text-link shrink-0">View all projects</Link>
          <p className="text-sm text-muted leading-relaxed">Beat Canvas, 808Lab, AI workflows, and other creative experiments.</p>
        </div>
      </div>
    </section>
  );
}
