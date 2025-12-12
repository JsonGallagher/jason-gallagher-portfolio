import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const stats = [
  { value: "$300M+", label: "Sales Volume Driven" },
  { value: "50%", label: "Lower Acquisition Cost" },
  { value: "+23%", label: "Conversion Rate Lift" },
  { value: "Top 0.5%", label: "National Ranking" },
];

const browserCards = [
  { title: "Growth Strategy", desc: "Full-funnel GTM planning & execution" },
  { title: "Marketing Automation", desc: "AI agents, workflows & RevOps" },
  {
    title: "Performance Marketing",
    desc: "Paid media, SEO & CRO optimization",
  },
  { title: "Data & Analytics", desc: "SQL, Python, attribution modeling" },
  { title: "Web Development", desc: "React, Webflow, custom builds" },
  { title: "Content & Brand", desc: "Scaled to 50K+ followers" },
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
        Open to opportunities
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tight max-w-4xl mb-6"
      >
        Marketing leader
        <br />
        who <em className="italic">codes.</em>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-text-secondary/90 dark:text-text-light/80 max-w-2xl mb-8 leading-relaxed"
      >
        Data-driven marketing leader spanning growth, lifecycle, and
        performance, with deep analytics and modern AI fluency.
        <span className="block mt-2 text-text-secondary/80 dark:text-text-light/70">
          I lead strategy, build measurement and experimentation systems, and
          partner closely with product, sales, and engineering.
        </span>
      </motion.p>
      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 mb-14"
      >
        <a href="mailto:jasong13@gmail.com" className="btn btn-primary">
          <Mail className="w-4 h-4" />
          Let's Connect
        </a>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
      >
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="font-serif text-3xl md:text-4xl tracking-tight">
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
            How can I help your business grow?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {browserCards.map((card, i) => (
              <div
                key={i}
                className="p-4 bg-primary dark:bg-white/5 rounded-lg hover:bg-primary-dark/5 dark:hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <h4 className="font-semibold text-sm mb-1 group-hover:text-text-primary dark:group-hover:text-text-light">
                  {card.title}
                </h4>
                <p className="text-xs text-text-secondary dark:text-text-light/50">
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
