import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-12 pb-24 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="section-title">
          Let's <em className="italic">connect.</em>
        </h2>
        <p className="text-text-secondary dark:text-text-light/60 mb-8 max-w-lg mx-auto">
          Looking for a growth marketer who builds, not just advises? Open to
          full-time roles with teams that ship.
        </p>

        <a
          href="https://bit.ly/resume_26"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <FileText className="w-4 h-4 text-blue-500" />
          View Resume
        </a>
      </motion.div>
    </section>
  );
}
