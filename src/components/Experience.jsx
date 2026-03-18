import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "Aug 2024 – Present",
    summary: "In-house marketing leader for a top-producing real estate team ranked top 0.5% nationally, managing external agencies and vendor partners across all channels. Owns full-funnel strategy and revenue marketing.",
    title: "Marketing Director",
    company: "RE/MAX Properties • Colorado Springs, CO",
    highlights: [
      "Restructured paid media strategy across Google and Meta, reducing CPA 34% by reallocating spend to highest-converting audience segments.",
      "Increased lead volume 2x through AI-driven segmentation and lifecycle automation while cutting CAC by 50%.",
      "Redesigned lead scoring, routing, and nurture workflows, improving MQL-to-SQL conversion 21% and reducing time to first contact by 50%.",
      "Built full-funnel HubSpot RevOps infrastructure including lead scoring, lifecycle stages, and multi-touch attribution, enabling leadership to track pipeline from first touch to close for the first time.",
    ],
  },
  {
    period: "Mar 2014 – Aug 2024",
    summary: "First marketing hire for a high-growth real estate team. Built the function from scratch and scaled it over a decade, earning two promotions.",
    title: "Marketing Manager",
    company: "Berkshire Hathaway HomeServices • Colorado Springs, CO",
    highlights: [
      "Improved lead-to-close rate 23% by launching SEO-driven content, landing page CRO, and a structured sales-marketing feedback loop.",
      "Built the team's first full-funnel demand gen program from scratch, including CRM automation, lifecycle campaigns, and nurture sequences, establishing the foundation for a decade of pipeline growth.",
      "Drove CRM adoption from near-zero to 80% across 40+ agents through hands-on training and enablement, lifting qualified lead flow 38%.",
      "Architected digital campaigns, paid media, and performance analytics programs that directly supported $300M+ in team sales volume over 10 years.",
    ],
  },
  {
    period: "Jun 2013 – Mar 2014",
    duration: "10 months",
    title: "Sales Representative",
    company: "Verizon Wireless • Colorado Springs, CO",
    highlights: [
      "23% quarterly sales increase through segmentation-based positioning.",
      "Rolled out training initiatives that boosted NPS by 18%.",
    ],
  },
  {
    period: "Sep 2011 – Jun 2013",
    duration: "1 year 10 months",
    title: "Business Account Executive",
    company: "AT&T Mobility B2B • Rochester, NY",
    highlights: [
      "Managed 150+ SMB accounts; improved conversion by 32%.",
      "Added 450+ new service lines in under 12 months.",
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
        <div className="text-sm md:text-base">{experience.period}</div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
        <div className="text-text-secondary dark:text-text-light/50 mb-3 md:text-lg">
          {experience.company}
        </div>
        {experience.summary && (
          <p className="border-l-2 border-black/20 dark:border-white/20 pl-3 text-text-secondary dark:text-text-light/60 text-base leading-relaxed mb-4">
            {experience.summary}
          </p>
        )}
        <ul className="space-y-2">
          {experience.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex gap-3 text-text-secondary dark:text-text-light/70 text-base md:text-lg leading-relaxed"
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
    <section id="experience" className="pt-12 pb-12 px-6 scroll-mt-16">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Career</span>
          <h2 className="section-title">
            12+ years <em className="italic">building</em> full-funnel growth.
          </h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <TimelineItem key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
      {/* Subtle section divider */}
      <div className="mt-16 flex justify-center">
        <div className="h-px w-48 sm:w-64 md:w-80 lg:w-[26rem] bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />
      </div>
    </section>
  );
}
