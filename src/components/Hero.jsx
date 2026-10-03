import { ArrowDown, ArrowUp } from "lucide-react";

const stats = [
  {
    value: "$300M+",
    label: "Team sales volume supported",
    context: "Over 10 years at Berkshire Hathaway HomeServices",
  },
  {
    value: "50%",
    label: "Lower customer acquisition cost",
    context: "Alongside 2× lead volume at RE/MAX Properties",
    arrow: "down",
  },
  {
    value: "23%",
    label: "Improvement in lead-to-close rate",
    context: "At Berkshire Hathaway HomeServices",
    arrow: "up",
  },
];

export default function Hero() {
  return (
    <section className="hero-section px-6">
      <div className="content-width hero-layout">
      <div className="hero-intro">
      <h1
        className="hero-heading display-title max-w-4xl mb-6"
      >
        Growth marketer
        <br />
        who <em className="italic text-accent">builds.</em>
      </h1>

      <p
        className="lead max-w-2xl mb-8"
      >
        Marketing leader with 12+ years in demand generation and sales. I’ve built
        teams, managed six-figure budgets, and connected acquisition, lifecycle
        automation, and measurement to revenue growth.
      </p>

      <div
        className="flex flex-wrap items-center gap-6"
      >
        <a href="mailto:jason@jasongallagher.co" className="btn btn-primary">
          Get in touch
        </a>
        <a href="/resume" target="_blank" rel="noopener noreferrer" className="text-link">
          View résumé
        </a>
      </div>

      </div>
      <dl
        className="hero-stats"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="hero-stat">
            <dt className="stat-label text-sm font-medium">{stat.label}</dt>
            <dd className="stat-value metric flex items-center gap-1">
              {stat.arrow === "down" && <ArrowDown className="w-5 h-5 text-green-700 dark:text-green-400" aria-hidden="true" />}
              {stat.arrow === "up" && <ArrowUp className="w-5 h-5 text-green-700 dark:text-green-400" aria-hidden="true" />}
              {stat.value}
            </dd>
            <dd className="stat-context text-sm text-muted leading-relaxed">
              {stat.context}
            </dd>
          </div>
        ))}
      </dl>
      </div>
    </section>
  );
}
