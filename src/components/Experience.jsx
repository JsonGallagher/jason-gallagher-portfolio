const experiences = [
  {
    period: "Aug 2024 – Present",
    summary: "Own full-funnel marketing for a top-producing real estate team, leading external agencies and vendor partners.",
    title: "Marketing Director",
    company: "RE/MAX Properties • Colorado Springs, CO",
  },
  {
    period: "Mar 2014 – Aug 2024",
    summary: "First marketing hire; built and scaled the function over a decade, earning two promotions.",
    title: "Marketing Manager",
    company: "Berkshire Hathaway HomeServices • Colorado Springs, CO",
  },
];

function TimelineItem({ experience }) {
  return (
    <div className="grid md:grid-cols-[160px_1fr] gap-3 md:gap-8 py-6 border-t divider">
      <p className="text-sm text-muted">{experience.period}</p>
      <div>
        <h3 className="item-title mb-1">{experience.title}</h3>
        <p className="text-muted mb-3">{experience.company}</p>
        <p className="text-muted leading-relaxed">{experience.summary}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section tabIndex={-1} id="experience" aria-labelledby="experience-title" className="section-spacing px-6 scroll-mt-24">
      <div className="content-width">
        <h2 id="experience-title" className="section-title">Recent experience</h2>
        {experiences.map((experience) => <TimelineItem key={experience.company} experience={experience} />)}
        <p className="mt-4 text-muted leading-relaxed">
          <a href="/resume" target="_blank" rel="noopener noreferrer" className="text-link">Full experience in my résumé</a>
        </p>
      </div>
    </section>
  );
}
