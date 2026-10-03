export default function CTA() {
  return (
    <section tabIndex={-1} id="contact" aria-labelledby="contact-title" className="section-spacing px-6 scroll-mt-24">
      <div className="content-width closing-layout border-t divider pt-8">
        <h2 id="contact-title" className="section-title mb-0">Contact</h2>
        <div>
          <p className="text-muted mb-5 max-w-xl leading-relaxed">
            Open to senior growth marketing, demand generation, and marketing leadership roles.
          </p>
          <a href="mailto:jason@jasongallagher.co" className="text-link text-lg sm:text-xl break-all">jason@jasongallagher.co</a>
          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2">
            <a href="/resume" target="_blank" rel="noopener noreferrer" className="text-link">View résumé</a>
            <a href="https://linkedin.com/in/jsongallagher" target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn</a>
            <a href="https://github.com/JsonGallagher" target="_blank" rel="noopener noreferrer" className="text-link">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
