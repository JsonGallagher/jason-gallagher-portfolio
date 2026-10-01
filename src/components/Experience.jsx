const experiences = [
  {
    period: "Aug 2024 – Present",
    summary: "Lead full-funnel marketing for a top-producing real estate team, managing external agencies and vendor partners across channels.",
    title: "Marketing Director",
    company: "RE/MAX Properties • Colorado Springs, CO",
    highlights: [
      "Reallocated Google and Meta spend toward the highest-converting audience segments.",
      "Doubled lead volume through AI-driven segmentation and lifecycle automation while reducing customer acquisition cost.",
      "Built HubSpot infrastructure that gave leadership visibility from first touch to close.",
    ],
  },
  {
    period: "Mar 2014 – Aug 2024",
    summary: "First marketing hire for a growing real estate team. Built the function from scratch and scaled it over a decade, earning two promotions.",
    title: "Marketing Manager",
    company: "Berkshire Hathaway HomeServices • Colorado Springs, CO",
    highlights: [
      "Improved lead-to-close rate 23% through SEO content, landing page optimization, and a sales-marketing feedback loop.",
      "Established the team's first demand generation program with CRM automation, lifecycle campaigns, and nurture sequences.",
      "Built digital campaigns, paid media, and analytics that supported $300M+ in team sales volume over 10 years.",
    ],
  },
];

function TimelineItem({ experience }) {
  return (
    <div className="grid md:grid-cols-[160px_1fr] gap-3 md:gap-8 py-6 border-t border-black/15 dark:border-white/20">
      <p className="text-sm text-text-secondary dark:text-text-light/75">{experience.period}</p>
      <div>
        <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
        <p className="text-text-secondary dark:text-text-light/75 mb-3">{experience.company}</p>
        <p className="text-text-secondary dark:text-text-light/75 leading-relaxed mb-4">{experience.summary}</p>
        <ul className="list-disc pl-5 space-y-2 text-text-secondary dark:text-text-light/75 leading-relaxed">
          {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section tabIndex={-1} id="experience" aria-labelledby="experience-title" className="section-spacing px-6 scroll-mt-24">
      <div className="content-width">
        <h2 id="experience-title" className="font-serif text-3xl md:text-4xl leading-tight tracking-tight mb-6">Recent experience</h2>
        {experiences.map((experience) => <TimelineItem key={experience.company} experience={experience} />)}
        <p className="mt-4 text-text-secondary dark:text-text-light/75 leading-relaxed">
          Earlier roles in telecom sales, SMB account management, and retail
          operations shaped my approach to sales alignment and team enablement.{" "}
          <a href="/resume" target="_blank" rel="noopener noreferrer" className="social-link">Full experience in my résumé</a>
        </p>
      </div>
    </section>
  );
}
