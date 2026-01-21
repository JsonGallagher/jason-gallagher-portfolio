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
          Ready to <em className="italic">scale?</em>
        </h2>
        <p className="text-text-secondary dark:text-text-light/60 mb-8 max-w-lg mx-auto">
          Whether you're launching, scaling, or transforming, let's talk about
          where you're headed and how I can help get you there.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://calendly.com/jasongallagher/30min-chat"
            className="btn btn-primary"
          >
            <Mail className="w-4 h-4 text-blue-500" />
            Book a Call
          </a>
        </div>
      </motion.div>
    </section>
  );
}
