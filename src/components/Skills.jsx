import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "AI & Automation",
    skills: ["ChatGPT", "Jasper", "Notion AI", "AI Agents", "Claude"],
  },
  {
    title: "Marketing & RevOps",
    skills: ["HubSpot", "Salesforce", "6sense", "Google Ads", "Meta Ads"],
  },
  {
    title: "Data & Analytics",
    skills: ["SQL", "Python", "GA4", "Amplitude", "GTM", "Klaviyo", "Tableau"],
  },
  {
    title: "Web Development",
    skills: ["HTML/CSS", "JavaScript", "React", "Webflow", "WordPress"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="pt-24 pb-12 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Toolkit</span>
          <h2 className="section-title">
            Technical & strategic <em className="italic">fluency.</em>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card p-6"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-text-light/50 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 bg-primary dark:bg-white/10 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Subtle section divider */}
      <div className="mt-36 flex justify-center">
        <div className="h-px w-48 sm:w-64 md:w-80 lg:w-[26rem] bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />
      </div>
    </section>
  );
}
