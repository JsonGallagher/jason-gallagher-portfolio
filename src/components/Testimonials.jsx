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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-12"
        >
          Impact at Scale
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card p-10 flex flex-col"
            >
              <p className="text-text-secondary text-lg leading-7 tracking-wide mb-6 dark:text-text-light/60">
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
