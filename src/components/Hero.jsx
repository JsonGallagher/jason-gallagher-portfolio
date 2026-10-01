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
    <section className="flex flex-col items-center text-center px-6 pt-32 md:pt-40 pb-12 md:pb-16">
      <h1
        className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tight max-w-4xl mb-6"
      >
        Growth marketer
        <br />
        who <em className="italic">builds.</em>
      </h1>

      <p
        className="text-lg md:text-xl text-text-secondary dark:text-text-light/80 max-w-2xl mb-8 leading-relaxed text-pretty"
      >
        Marketing leader with 12+ years building demand generation programs,
        enabling sales teams, and managing agencies and partners. I connect
        acquisition, lifecycle automation, and measurement to revenue growth.
      </p>

      <div
        className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16"
      >
        <a href="mailto:jason@jasongallagher.co" className="btn btn-primary">
          Get in touch
        </a>
        <a href="/resume" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          View résumé
        </a>
      </div>

      <dl
        className="grid sm:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl border-t border-black/10 dark:border-white/10 pt-8"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <dt className="order-2 text-sm font-medium mt-2">{stat.label}</dt>
            <dd className="order-1 font-serif text-4xl flex items-center gap-1">
              {stat.arrow === "down" && <ArrowDown className="w-5 h-5 text-green-700 dark:text-green-400" aria-hidden="true" />}
              {stat.arrow === "up" && <ArrowUp className="w-5 h-5 text-green-700 dark:text-green-400" aria-hidden="true" />}
              {stat.value}
            </dd>
            <dd className="order-3 text-sm text-text-secondary dark:text-text-light/70 mt-2 max-w-[240px] leading-relaxed">
              {stat.context}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
