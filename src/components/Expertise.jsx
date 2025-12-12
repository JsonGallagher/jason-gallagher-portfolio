import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    label: 'Growth & GTM',
    title: 'Drive revenue with',
    titleAccent: 'strategic precision.',
    description: 'Led B2B and B2C segmentation and GTM planning that drove 38% YoY pipeline growth. Managed six-figure ad budgets with 32% ROAS improvement and 18% CAC reduction. I own P&L and set OKRs that teams actually hit.',
    visual: 'radial',
  },
  {
    label: 'AI & Automation',
    title: 'Scale with',
    titleAccent: 'intelligent systems.',
    description: 'Deployed AI agents across campaign ops, reporting, and CRM—cutting manual work by 40% and reducing execution time from days to hours. Applied generative AI to content workflows, reducing production time by 30% while scaling output.',
    visual: 'circles',
    reverse: true,
  },
  {
    label: 'Data & Analytics',
    title: 'Make decisions with',
    titleAccent: 'clarity.',
    description: "Built CAC and LTV models in SQL and Python. Ran cohort and attribution analysis that reallocated spend to drive a 22% lift in ROI. I don't just interpret dashboards—I build them.",
    visual: 'bars',
  },
]

function RadialVisual() {
  const lines = Array.from({ length: 24 }, (_, i) => i * 15)
  return (
    <div className="relative w-48 h-48">
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-text-light rounded-full -translate-x-1/2 -translate-y-1/2" />
      {lines.map((deg) => (
        <div
          key={deg}
          className="radial-line text-text-light/80"
          style={{ transform: `rotate(${deg}deg)` }}
        />
      ))}
    </div>
  )
}

function CirclesVisual() {
  return (
    <div className="relative w-60 h-60">
      {[60, 120, 180, 240].map((size, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-text-light/30"
          style={{ width: size, height: size }}
        />
      ))}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-text-light rounded-full -translate-x-1/2 -translate-y-1/2" />
    </div>
  )
}

function BarsVisual() {
  const heights = [40, 65, 85, 100, 75, 55, 90, 70]
  return (
    <div className="flex items-end gap-3 h-48">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="w-2 bg-text-light/30 rounded"
        />
      ))}
    </div>
  )
}

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const Visual = {
    radial: RadialVisual,
    circles: CirclesVisual,
    bars: BarsVisual,
  }[feature.visual]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`card overflow-hidden grid md:grid-cols-2 min-h-[400px] ${
        feature.reverse ? 'md:direction-rtl' : ''
      }`}
    >
      {/* Content */}
      <div className={`p-8 md:p-12 flex flex-col justify-center ${feature.reverse ? 'md:direction-ltr' : ''}`}>
        <span className="section-label">{feature.label}</span>
        <h3 className="section-title">
          {feature.title} <em className="italic">{feature.titleAccent}</em>
        </h3>
        <p className="text-text-secondary dark:text-text-light/60 leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Visual */}
      <div className={`bg-primary-dark flex items-center justify-center p-8 order-first md:order-none ${
        feature.reverse ? 'md:order-first md:direction-ltr' : ''
      }`}>
        <Visual />
      </div>
    </motion.div>
  )
}

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
