import { motion } from "framer-motion";
import { FileText, ArrowDown, ArrowUp, X, Minus, Maximize2 } from "lucide-react";

const stats = [
  { value: "$300M+", label: "Revenue Driven", nudge: "translate-x-0.5" },
  { value: "50%", label: "Acquisition Cost", arrow: "down", nudge: "-translate-x-1" },
  { value: "23%", label: "Lead-to-Close Lift", arrow: "up" },
  { value: "12+", label: "Years Experience", nudge: "translate-x-1.5" },
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
        className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 dark:bg-green-500/20 rounded-full text-sm mb-10 ring-1 ring-green-500/20"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-green-700 dark:text-green-400">Available Now</span>
        <span className="text-green-700/50 dark:text-green-400/50">·</span>
        <span className="text-green-700/80 dark:text-green-400/80">Open to Full-Time Roles</span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tight max-w-4xl mb-8"
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
        className="text-lg md:text-xl text-text-secondary dark:text-text-light/80 max-w-2xl mb-10 leading-relaxed"
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
        className="flex flex-wrap justify-center gap-4 mb-16"
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
        className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 md:gap-16 mb-20 overflow-hidden"
      >
        {stats.map((stat, i) => (
          <div key={i} className="text-center flex flex-col items-center">
            <div className={`font-serif text-3xl md:text-4xl tracking-normal relative flex items-center justify-center gap-1 ${stat.arrow === "up" ? "translate-x-1" : ""} ${stat.nudge || ""}`}>
              {stat.arrow === "down" && <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-green-500" />}
              {stat.arrow === "up" && <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-green-500 absolute -left-6 md:-left-7 top-1/2 -translate-y-1/2" />}
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
        className="w-full max-w-5xl bg-white dark:bg-white/5 rounded-xl shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden"
      >
        {/* Browser Header */}
        <div className="relative flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-white/5 border-b border-black/5 dark:border-white/10 group/header">
          <div className="w-3 h-3 rounded-full bg-red-400 flex items-center justify-center">
            <X className="w-2 h-2 text-red-900 opacity-0 group-hover/header:opacity-100 transition-opacity" strokeWidth={3} />
          </div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 flex items-center justify-center">
            <Minus className="w-2 h-2 text-yellow-900 opacity-0 group-hover/header:opacity-100 transition-opacity" strokeWidth={3} />
          </div>
          <div className="w-3 h-3 rounded-full bg-green-400 flex items-center justify-center">
            <Maximize2 className="w-2 h-2 text-green-900 opacity-0 group-hover/header:opacity-100 transition-opacity rotate-90" strokeWidth={3} />
          </div>

          <span className="absolute left-1/2 -translate-x-1/2 text-xs text-text-secondary dark:text-text-light/40">
            jasongallagher.co
          </span>
        </div>

        {/* Browser Content */}
        <div className="p-8 md:p-10">
          <p className="text-text-secondary dark:text-text-light/60 mb-6 md:text-lg">
            Core competencies
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {browserCards.map((card, i) => (
              <div
                key={i}
                className="p-5 bg-primary dark:bg-white/5 rounded-lg hover:bg-primary-dark/5 dark:hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="font-semibold text-sm md:text-base mb-1 group-hover:text-text-primary dark:group-hover:text-text-light">
                  {card.title}
                </div>
                <p className="text-sm md:text-base text-text-secondary dark:text-text-light/50 text-balance">
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
