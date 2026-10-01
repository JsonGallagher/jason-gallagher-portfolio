const caseStudies = [
  {
    id: "case-acquisition",
    company: "RE/MAX Properties",
    title: "Acquisition efficiency",
    problem: "Improve the efficiency of paid acquisition while growing lead volume.",
    contribution: "I restructured Google and Meta paid media, reallocating spend to the highest-converting audience segments. I also used AI-driven segmentation and lifecycle automation to expand lead generation.",
    results: [
      { value: "34%", label: "Lower cost per acquisition from paid media restructuring" },
      { value: "2×", label: "Lead volume with segmentation and lifecycle automation" },
      { value: "50%", label: "Lower customer acquisition cost alongside that lead growth" },
    ],
  },
  {
    id: "case-hubspot",
    company: "RE/MAX Properties",
    title: "HubSpot lifecycle infrastructure",
    problem: "Leadership lacked a view of the pipeline from first touch to close. Lead qualification and follow-up needed improvement.",
    contribution: "I built the full-funnel HubSpot infrastructure: lifecycle stages, lead scoring, routing, nurture workflows, and multi-touch attribution. Leadership could track the pipeline from first touch to close for the first time.",
    results: [
      { value: "21%", label: "Improvement in marketing-qualified to sales-qualified lead conversion" },
      { value: "50%", label: "Reduction in time to first contact" },
    ],
  },
  {
    id: "case-marketing-function",
    company: "Berkshire Hathaway HomeServices",
    title: "Building the marketing function",
    problem: "The team needed its first full-funnel marketing program, with CRM adoption starting near zero.",
    contribution: "As the first marketing hire, I built the function from scratch: demand generation, CRM automation, lifecycle campaigns, and nurture sequences. I trained and supported 40+ agents on CRM and marketing tools.",
    results: [
      { value: "80%", label: "CRM adoption, up from near zero" },
      { value: "38%", label: "Lift in qualified lead flow" },
    ],
  },
];

function SupportingCase({ study }) {
  return (
    <article id={study.id} tabIndex={-1} aria-labelledby={`${study.id}-title`} className="flex flex-col scroll-mt-24">
      <header className="mb-5">
        <h3 id={`${study.id}-title`} className="font-serif text-3xl sm:text-4xl leading-tight mb-3">{study.title}</h3>
        <p className="text-sm font-medium text-text-secondary dark:text-text-light/75">{study.company}</p>
      </header>
      <p className="text-text-secondary dark:text-text-light/75 leading-relaxed mb-3">{study.problem}</p>
      <p className="text-text-secondary dark:text-text-light/75 leading-relaxed">{study.contribution}</p>
      <dl aria-label="Documented results" className="grid grid-cols-2 gap-5 pt-6 mt-auto">
        {study.results.map((result) => (
          <div key={result.label} className="flex flex-col">
            <dt className="order-2 text-sm text-text-secondary dark:text-text-light/75 leading-relaxed mt-2">{result.label}</dt>
            <dd className="order-1 font-serif text-5xl text-blue-700 dark:text-blue-300">{result.value}</dd>
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
            <h3 id={`${featured.id}-title`} className="font-serif text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-4">Acquisition <em>efficiency</em></h3>
            <p className="text-sm font-medium mb-6">{featured.company}</p>
            <p className="case-feature-secondary text-lg leading-relaxed mb-4">{featured.problem}</p>
            <p className="case-feature-secondary leading-relaxed">{featured.contribution}</p>
          </div>
          <dl aria-label="Documented results" className="case-feature-results">
            {featured.results.map((result) => (
              <div key={result.label} className="grid grid-cols-[100px_1fr] sm:grid-cols-[132px_1fr] gap-5 items-center py-5 border-t first:border-t-0 first:pt-0 last:pb-0">
                <dt className="order-2 case-feature-secondary text-sm sm:text-base leading-relaxed">{result.label}</dt>
                <dd className="order-1 font-serif text-6xl sm:text-7xl leading-none tracking-tight">{result.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
      <div className="px-6">
        <div className="content-width grid md:grid-cols-2 gap-8 md:gap-12 py-10 md:py-12">
          {supporting.map((study) => <SupportingCase key={study.id} study={study} />)}
        </div>
      </div>
    </section>
  );
}
