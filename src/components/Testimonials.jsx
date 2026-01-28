import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    text: "Trained and supported 40+ agents on CRM and marketing tools, achieving 80% adoption and a 38% lift in qualified leads.",
    author: "Team Enablement",
    role: "Berkshire Hathaway HomeServices",
  },
  {
    text: "Rebuilt lead scoring, routing, and nurture flows. Improved MQL-to-SQL conversion by 21% and cut time to contact by 50%.",
    author: "RevOps Transformation",
    role: "RE/MAX Properties",
  },
  {
    text: "Helped rank the Becky Gloriod Partners team in the top 0.5% of realtors nationwide through integrated marketing strategy.",
    author: "National Recognition",
    role: "Berkshire Hathaway HomeServices",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-12 pb-12 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Results</span>
          <h2 className="section-title">
            Impact at <em className="italic">scale.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 md:p-10 flex flex-col rounded-3xl
                bg-white dark:bg-white/5
                ring-1 ring-black/10 dark:ring-white/10
                shadow-xl shadow-black/5 dark:shadow-black/40
                transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-text-secondary dark:text-text-light/60 leading-relaxed mb-6 md:text-lg">
                {item.text}
              </p>
              <div className="mt-auto">
                <div className="font-semibold">{item.author}</div>
                <div className="text-sm text-text-secondary dark:text-text-light/50">
                  {item.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Subtle section divider */}
      <div className="mt-24 flex justify-center">
        <div className="h-px w-48 sm:w-64 md:w-80 lg:w-[26rem] bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />
      </div>
    </section>
  );
}
