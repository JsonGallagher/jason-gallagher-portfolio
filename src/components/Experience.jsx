const experiences = [
  {
    period: "Aug 2024 – Present",
    summary: "Own full-funnel marketing and six-figure budgets for a top-producing real estate team. Build and lead sales and marketing teams, manage agencies and vendors, and refine strategy with executive leadership.",
    title: "Marketing Director",
    company: "RE/MAX Properties • Colorado Springs, CO",
  },
  {
    period: "Mar 2014 – Aug 2024",
    summary: "First marketing hire; built and scaled the function over a decade, earning two promotions. Built teams and led sales and marketing, managed six-figure budgets and external partners, and worked closely with executive leadership on marketing strategy.",
    title: "Marketing Manager",
    company: "Berkshire Hathaway HomeServices • Colorado Springs, CO",
  },
];

function TimelineItem({ experience }) {
  return (
    <div className="closing-layout py-6 border-t divider">
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
