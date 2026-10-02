const caseStudies = [
  {
    id: "case-acquisition",
    company: "RE/MAX Properties",
    title: "Twice the leads.",
    titleAccent: "Half the acquisition cost.",
    problem: "The goal: grow lead volume while bringing acquisition costs down.",
    contribution: "I shifted Google and Meta spend to higher-converting audiences, then expanded lead generation with segmentation and lifecycle automation.",
    detail: "Paid media restructuring also reduced cost per acquisition by 34%.",
    results: [
      { value: "2×", label: "Lead volume" },
      { value: "50%", label: "Lower customer acquisition cost" },
    ],
  },
  {
    id: "case-hubspot",
    company: "RE/MAX Properties",
    title: "A clearer pipeline.",
    titleAccent: "Faster follow-up.",
    problem: "Leadership needed pipeline visibility; sales needed better-qualified leads and faster follow-up.",
    contribution: "I built the HubSpot foundation: lifecycle stages, scoring, routing, nurture, and attribution. The team could track leads from first touch to close.",
    results: [
      { value: "21%", label: "Better conversion from marketing-qualified to sales-qualified leads" },
      { value: "50%", label: "Less time to first contact" },
    ],
  },
  {
    id: "case-marketing-function",
    company: "Berkshire Hathaway HomeServices",
    title: "A marketing function",
    titleAccent: "built from scratch.",
    problem: "The team needed its first full-funnel marketing program. CRM adoption was near zero.",
    contribution: "I built demand generation, CRM automation, and lifecycle campaigns, then trained 40+ agents to use the tools in their daily work.",
    results: [
      { value: "80%", label: "CRM adoption, up from near zero" },
      { value: "38%", label: "Lift in qualified lead flow" },
    ],
  },
];

function SupportingCase({ study }) {
  return (
    <article id={study.id} tabIndex={-1} aria-labelledby={`${study.id}-title`} className="supporting-case flex flex-col scroll-mt-24">
      <header className="mb-5">
        <p className="text-sm font-medium text-muted">{study.company}</p>
        <h3 id={`${study.id}-title`} className="case-title mt-3">
          {study.title}<br /><em>{study.titleAccent}</em>
        </h3>
      </header>
      <p className="text-muted leading-relaxed mb-3">{study.problem}</p>
      <p className="text-muted leading-relaxed">{study.contribution}</p>
      <dl aria-label="Documented results" className="grid grid-cols-2 gap-5 pt-6 mt-auto">
        {study.results.map((result) => (
          <div key={result.label} className="flex flex-col">
            <dt className="order-2 text-sm text-muted leading-relaxed mt-2">{result.label}</dt>
            <dd className="order-1 metric text-accent">{result.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export default function Expertise() {
  const [featured, ...supporting] = caseStudies;

  return (
    <section tabIndex={-1} id="expertise" aria-labelledby="case-studies-title" className="pt-10 md:pt-12 pb-6 md:pb-8 scroll-mt-24">
      <div className="px-6">
        <h2 id="case-studies-title" className="content-width section-title">Marketing case studies</h2>
      </div>
      <article id={featured.id} tabIndex={-1} aria-labelledby={`${featured.id}-title`} className="case-feature px-6 py-10 md:py-14 scroll-mt-24">
        <div className="content-width grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-14 items-center">
          <div>
            <p className="text-sm font-medium mb-4">{featured.company}</p>
            <h3 id={`${featured.id}-title`} className="feature-title mb-6">
              {featured.title}<br /><em>{featured.titleAccent}</em>
            </h3>
            <p className="case-feature-secondary leading-relaxed mb-3">{featured.problem}</p>
            <p className="case-feature-secondary leading-relaxed">{featured.contribution}</p>
          </div>
          <div>
            <dl aria-label="Documented results" className="case-feature-results">
              {featured.results.map((result) => (
                <div key={result.label} className="grid grid-cols-[100px_1fr] sm:grid-cols-[132px_1fr] gap-5 items-center py-5 border-t first:border-t-0 first:pt-0 last:pb-0">
                  <dt className="order-2 case-feature-secondary text-sm sm:text-base leading-relaxed">{result.label}</dt>
                  <dd className="order-1 font-serif text-6xl sm:text-7xl leading-none tracking-tight">{result.value}</dd>
                </div>
              ))}
            </dl>
            <p className="case-feature-secondary text-sm leading-relaxed pt-5 mt-5 border-t border-white/20 dark:border-black/15">{featured.detail}</p>
          </div>
        </div>
      </article>
      <div className="px-6">
        <div className="supporting-cases content-width grid md:grid-cols-2 gap-8 md:gap-12 py-10 md:py-12">
          {supporting.map((study) => <SupportingCase key={study.id} study={study} />)}
        </div>
      </div>
    </section>
  );
}
