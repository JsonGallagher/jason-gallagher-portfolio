import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin } from "lucide-react";

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
          Let's build something <em className="italic">remarkable</em> together.
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:jasong13@gmail.com" className="btn btn-primary">
            <Mail className="w-4 h-4 text-blue-500" />
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/jsongallagher"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Linkedin className="w-4 h-4 -translate-y-px" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
