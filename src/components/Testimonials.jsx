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
    role: "Marketing Automation",
  },
  {
    text: "Helped rank the Becky Gloriod Partners team in the top 0.5% of realtors nationwide through integrated marketing strategy.",
    author: "National Recognition",
    role: "RE/MAX Properties",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6">
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
              className="card p-8"
            >
              <div className="text-4xl text-text-secondary/30 dark:text-text-light/20 mb-4 font-serif">
                "
              </div>
              <p className="font-serif text-lg leading-relaxed mb-6">
                {item.text}
              </p>
              <div>
                <div className="font-semibold">{item.author}</div>
                <div className="text-sm text-text-secondary dark:text-text-light/50">
                  {item.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
