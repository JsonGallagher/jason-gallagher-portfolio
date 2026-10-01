import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Lifecycle & RevOps",
    skills: [
      "HubSpot",
      "Salesforce",
      "Klaviyo",
      "Marketo",
      "6sense",
      "Lifecycle Journeys",
      "Lead Scoring",
      "Deliverability",
    ],
  },
  {
    title: "Measurement & Analytics",
    skills: [
      "GA4",
      "GTM",
      "Looker",
      "SQL",
      "Python",
      "Attribution",
      "Dashboards",
      "Julius",
    ],
  },
  {
    title: "Performance Media",
    skills: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "Microsoft Ads",
      "Creative Testing",
      "Conversion Tracking",
      "Budget Management",
      "Forecasting",
      "Reporting",
    ],
  },
  {
    title: "AI & Creative Workflows",
    skills: [
      "Claude Code",
      "Codex",
      "OpenAI API",
      "Zapier",
      "Custom Agents",
      "Nano Banana",
      "Kling",
      "Runway",
      "Canva AI",
      "Jasper",
      "Descript",
      "Replicate",
      "ElevenLabs",
    ],
  },
  {
    title: "SEO & Site Health",
    skills: [
      "Google Search Console",
      "Semrush",
      "Ahrefs",
      "Technical SEO",
      "Core Web Vitals",
      "Schema Markup",
    ],
  },
  {
    title: "Web Dev & Graphic Design",
    skills: [
      "JavaScript",
      "React",
      "HTML/CSS",
      "WordPress",
      "Shopify",
      "Figma",
      "Adobe CC",
      "A/B Testing",
      "Hotjar",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="pt-16 pb-12 px-6 scroll-mt-16">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Technical & strategic <em className="italic">fluency.</em>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="pt-5 border-t border-black/15 dark:border-white/20"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-text-light/70 mb-3">
                {category.title}
              </h3>
              <ul className="plain-text-list text-base text-text-secondary dark:text-text-light/70 leading-relaxed">
                {category.skills.map((skill, j) => (
                  <li
                    key={j}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
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
