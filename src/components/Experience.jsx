import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "Mar 2014 – Present",
    duration: "11 years",
    title: "Marketing Director",
    company: "RE/MAX Properties • Colorado Springs, CO",
    highlights: [
      "Promoted from Coordinator (2014) → Manager (2018) → Director (2020)",
      "Led $300M+ in sales; team ranked top 0.5% nationally",
      "Reduced CPA by 34% and increased retention by 15%",
      "Boosted lead-to-close rates 23% via SEO, CRO, and ROAS optimization",
      "Overhauled CRM and automation to reduce CAC by 50%",
      "Trained 40+ agents on CRM and marketing tools; drove 80% adoption and a 38% lift in qualified leads.",
    ],
  },
  {
    period: "Jun 2013 – Mar 2014",
    duration: "10 months",
    title: "Sales Representative",
    company: "Verizon Wireless • Colorado Springs, CO",
    highlights: [
      "23% quarterly sales increase through segmentation-based positioning",
      "Rolled out training initiatives that boosted NPS by 18%",
    ],
  },
  {
    period: "Sep 2011 – Jun 2013",
    duration: "1 year 10 months",
    title: "Business Account Executive",
    company: "AT&T Mobility B2B • Rochester, NY",
    highlights: [
      "Managed 150+ SMB accounts; improved conversion by 32%",
      "Added 450+ new service lines in under 12 months",
    ],
  },
  {
    period: "Jun 2011 – Aug 2011",
    duration: "3 months",
    title: "Marketing & Social Media Manager - Internship",
    company: "SUNY Geneseo • Geneseo, NY",
    highlights: [
      "Led targeted Facebook, Twitter (X), and Instagram campaigns; +17% alumni event participation.",
      "Co-developed strategy and content with the alumni team; strengthened alumni-university ties.",
      "Optimized campaigns using analytics; +12% reach and engagement.",
    ],
  },
  {
    period: "Apr 2009 – May 2011",
    duration: "2 years 2 months",
    title: "Manager - Campus Auxiliary Services",
    company: "SUNY Geneseo • Geneseo, NY",
    highlights: ["Led hiring and ops for food services across campus."],
  },
  {
    period: "Mar 2006 – Mar 2009",
    duration: "3 years",
    title: "Retail Store Manager",
    company: "Zuimez Inc. • Rochester, NY",
    highlights: [
      "Directed daily operations; hit sales milestones and earned the $100K Sales Award twice.",
      "Trained and mentored the team, building a high-performance culture that exceeded targets.",
      "Managed scheduling and inventory; drove a 12% annual profitability increase during tenure.",
      "Launched local marketing initiatives that increased foot traffic and strengthened loyalty.",
    ],
  },
];

function TimelineItem({ experience, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-t border-black/10 dark:border-white/10"
    >
      <div className="text-text-secondary dark:text-text-light/50">
        <div className="text-sm">{experience.period}</div>
        {experience.duration && (
          <div className="font-semibold mt-1 text-text-primary dark:text-text-light">
            {experience.duration}
          </div>
        )}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
        <div className="text-text-secondary dark:text-text-light/50 mb-4">
          {experience.company}
        </div>
        <ul className="space-y-2">
          {experience.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex gap-3 text-text-secondary dark:text-text-light/70 text-sm leading-relaxed"
            >
              <span className="text-text-primary dark:text-text-light shrink-0">
                →
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Career</span>
          <h2 className="section-title">
            11+ years <em className="italic">building</em> full-funnel growth.
          </h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <TimelineItem key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
