import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const stats = [
  { value: "$300M+", label: "Revenue Driven" },
  { value: "50%", label: "Lower CAC" },
  { value: "+23%", label: "Lead-to-Close Lift" },
  { value: "12+", label: "Years Experience" },
];

const browserCards = [
  {
    title: "Demand Generation",
    desc: "Pipeline growth, paid media, ABM, funnel optimization",
  },
  {
    title: "Marketing Automation",
    desc: "HubSpot, Salesforce, Klaviyo. Lifecycle, nurture, lead scoring",
  },
  {
    title: "AI Strategy",
    desc: "AI for marketing ops, content workflows, personalization",
  },
  {
    title: "Analytics & Attribution",
    desc: "Dashboards, experimentation, marketing-to-revenue reporting",
  },
  {
    title: "GTM Strategy",
    desc: "Full-funnel strategy aligned to pipeline and revenue goals",
  },
  {
    title: "Team Leadership",
    desc: "Build, train, and scale marketing teams. Hands-on executor",
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-16">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/10 rounded-full text-sm mb-8"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Open to Opportunities
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tight max-w-4xl mb-6"
      >
        Growth marketer
        <br />
        who <em className="italic">builds.</em>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-text-secondary dark:text-text-light/80 max-w-2xl mb-8 leading-relaxed"
      >
        Demand gen, AI strategy, and marketing automation.
        <br />
        12+ years scaling pipeline and revenue for high-growth teams.
        <span className="block mt-4">
          Seeking a role with a team doing ambitious, innovative work.
        </span>
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 mb-14"
      >
        <a
          href="https://bit.ly/resume_26"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <FileText className="w-4 h-4 text-blue-500" />
          View Resume
        </a>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 md:gap-16 mb-16"
      >
        {stats.map((stat, i) => (
          <div key={i} className="text-center flex flex-col items-center">
            <div
              className={`font-serif text-3xl md:text-4xl tracking-tight ${
                stat.value.startsWith("+") ? "-translate-x-1.5" : ""
              }`}
            >
              {stat.value}
            </div>
            <div className="text-sm text-text-secondary dark:text-text-light/50 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Browser Window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full max-w-4xl bg-white dark:bg-white/5 rounded-xl shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden"
      >
        {/* Browser Header */}
        <div className="relative flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-white/5 border-b border-black/5 dark:border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />

          <span className="absolute left-1/2 -translate-x-1/2 text-xs text-text-secondary dark:text-text-light/40">
            jasongallagher.co
          </span>
        </div>

        {/* Browser Content */}
        <div className="p-6">
          <p className="text-text-secondary dark:text-text-light/60 mb-6">
            Core competencies
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {browserCards.map((card, i) => (
              <div
                key={i}
                className="p-4 bg-primary dark:bg-white/5 rounded-lg hover:bg-primary-dark/5 dark:hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="font-semibold text-sm mb-1 group-hover:text-text-primary dark:group-hover:text-text-light">
                  {card.title}
                </div>
                <p className="text-sm text-text-secondary dark:text-text-light/50 text-balance">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
