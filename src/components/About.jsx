import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Github } from "lucide-react";

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import headshot from "../assets/headshot.webp";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-white/5 scroll-mt-16"
    >
      <div
        ref={ref}
        className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-center"
      >
        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative mx-auto md:mx-0"
        >
          <div className="relative w-56 h-56 md:w-full md:h-auto md:aspect-square">
            <img
              src={headshot}
              alt="Jason Gallagher"
              loading="lazy"
              decoding="async"
              width="280"
              height="280"
              className="w-full h-full object-cover object-top rounded-full"
            />
            {/* Ring accent */}
            <div className="absolute -inset-2 border border-black/10 dark:border-white/20 rounded-full pointer-events-none" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <span className="section-label">About</span>
          <h2 className="section-title">Jason Gallagher</h2>
          <p className="text-text-secondary dark:text-text-light/60 text-lg mb-6">
            Growth Marketer • Colorado
          </p>

          <p className="text-text-secondary dark:text-text-light/70 leading-relaxed mb-4">
            12+ years building marketing systems for B2B and B2C brands. $300M+
            in revenue driven, 50% lower CAC, 23% lift in lead-to-close rates.
          </p>

          <p className="text-text-secondary dark:text-text-light/70 leading-relaxed mb-8">
            I build demand gen engines, marketing automation, and AI-powered
            workflows. Not a strategist who hands off decks. I get in the CRM,
            the data, the workflows. Looking for a full-time role with a team
            that ships.
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href="https://linkedin.com/in/jsongallagher"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors font-medium"
            >
              <Linkedin className="w-4 h-4 -translate-y-px" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://x.com/heyjson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors font-medium"
            >
              <XIcon className="w-4 h-4" />
              <span>X (Twitter)</span>
            </a>
            <a
              href="https://github.com/JsonGallagher"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors font-medium"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:jason@jasongallagher.co"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
