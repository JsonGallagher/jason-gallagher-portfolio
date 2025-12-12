import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Layers, Palette, Lock } from "lucide-react";

const values = [
  {
    icon: CheckCircle,
    title: "Strategic",
    description: "Full-funnel strategy tied to measurable outcomes.",
  },
  {
    icon: Layers,
    title: "Technical",
    description:
      "JavaScript + React. Websites and growth systems. SQL/Python to measure and learn.",
  },
  {
    icon: Palette,
    title: "Creative",
    description: "Content and brand strategies that scaled to 50K+ followers.",
  },
  {
    icon: Lock,
    title: "Results-Driven",
    description:
      "$300M+ in sales volume, 50% lower acquisition costs, 23% higher conversion.",
  },
];

export default function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-primary dark:bg-primary-dark">
      <div ref={ref} className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title mb-16"
        >
          Strategic, Technical, Creative & Results-Driven
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <value.icon className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-sm text-text-secondary dark:text-text-light/60 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
