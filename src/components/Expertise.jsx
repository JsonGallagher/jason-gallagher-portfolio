"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const features = [
  {
    label: "Demand Generation",
    title: "Drive pipeline with",
    titleAccent: "strategic precision.",
    description:
      "Full-funnel execution, not just strategy. 38% YoY pipeline growth, six-figure ad budgets with 32% ROAS improvement, 50% CAC reduction. I own the metrics and build the systems that hit them.",
    visual: "radial",
  },
  {
    label: "AI Strategy",
    title: "Scale with",
    titleAccent: "intelligent systems.",
    description:
      "Practical AI implementation, not hype. Deployed AI across campaign ops, reporting, and CRM, cutting manual work by 40%. Content personalization, predictive analytics, workflow automation.",
    visual: "circles",
    reverse: true,
  },
  {
    label: "Marketing Automation",
    title: "Build systems that",
    titleAccent: "compound.",
    description:
      "HubSpot, Salesforce, Klaviyo. Lifecycle, nurture, and lead scoring systems that turn leads into revenue. Trained 40+ people on CRM with 80% adoption. I don't advise on automation. I build it.",
    visual: "bars",
  },
];

function RadialVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px", amount: 0.4 });
  const lines = Array.from({ length: 24 }, (_, i) => i * 15);

  return (
    <motion.div
      ref={ref}
      className="relative w-60 h-60"
      animate={inView ? { rotate: 360 } : { rotate: 0 }}
      transition={{
        duration: 100,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-text-light rounded-full -translate-x-1/2 -translate-y-1/2" />
      {lines.map((deg) => (
        <div
          key={deg}
          className="radial-line text-text-light/80"
          style={{ transform: `rotate(${deg}deg)` }}
        />
      ))}
    </motion.div>
  );
}

function CirclesVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px", amount: 0.4 });

  const rings = [60, 120, 180, 240];

  return (
    <div ref={ref} className="relative w-60 h-60">
      {rings.map((size, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            className="rounded-full border-2 border-text-light/30"
            style={{ width: size, height: size }}
            initial={{ scale: 1, opacity: 0.35 }}
            animate={
              inView
                ? { scale: [1, 1.06, 1], opacity: [0.25, 0.55, 0.25] }
                : { scale: 1, opacity: 0.35 }
            }
            transition={
              inView
                ? {
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.18,
                  }
                : { duration: 0.2 }
            }
          />
        </div>
      ))}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-2 h-2 bg-text-light rounded-full"
          initial={{ scale: 1 }}
          animate={inView ? { scale: [1, 1.25, 1] } : { scale: 1 }}
          transition={
            inView
              ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.2 }
          }
        />
      </div>
    </div>
  );
}

function BarsVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px", amount: 0.4 });
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const heights = [40, 65, 85, 100, 75, 55, 90, 70];

  useEffect(() => {
    if (inView && !hasAnimatedIn) {
      const timer = setTimeout(() => {
        setHasAnimatedIn(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [inView, hasAnimatedIn]);

  return (
    <div ref={ref} className="flex items-end gap-3 h-48">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="w-2 bg-text-light/30 rounded"
          initial={{ height: 0 }}
          animate={
            hasAnimatedIn
              ? { height: [`${h}%`, `${h - 8}%`, `${h}%`] }
              : inView
                ? { height: `${h}%` }
                : { height: 0 }
          }
          transition={
            hasAnimatedIn
              ? {
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }
              : { duration: 0.6, delay: i * 0.1 }
          }
        />
      ))}
    </div>
  );
}

function FeatureCard({ feature }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Visual = {
    radial: RadialVisual,
    circles: CirclesVisual,
    bars: BarsVisual,
  }[feature.visual];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`overflow-hidden grid md:grid-cols-2 min-h-[400px] rounded-3xl
        bg-white dark:bg-white/5
        ring-1 ring-black/10 dark:ring-white/10
        shadow-xl shadow-black/5 dark:shadow-black/40
        divide-y md:divide-y-0 md:divide-x divide-black/10 dark:divide-white/10
        transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl
        ${feature.reverse ? "md:direction-rtl" : ""}`}
    >
      {/* Content */}
      <div
        className={`p-8 md:p-12 flex flex-col justify-center ${
          feature.reverse ? "md:direction-ltr" : ""
        }`}
      >
        <span className="expertise-label text-text-secondary dark:text-text-light/70">
          {feature.label}
        </span>
        <h3 className="section-title">
          {feature.title} <em className="italic">{feature.titleAccent}</em>
        </h3>
        <p className="text-text-secondary dark:text-text-light/60 leading-relaxed md:text-lg">
          {feature.description}
        </p>
      </div>

      {/* Visual */}
      <div
        className={`bg-primary-dark dark:bg-black/40 flex items-center justify-center p-8 order-first md:order-none ${
          feature.reverse ? "md:order-first md:direction-ltr" : ""
        }`}
      >
        <Visual />
      </div>
    </motion.div>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" className="pt-24 pb-12 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
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
