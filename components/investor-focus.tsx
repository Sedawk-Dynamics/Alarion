"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Building2, Users, Target } from "lucide-react"

export function InvestorFocus() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const metrics = [
    { icon: TrendingUp, label: "Growth Strategy", value: "Expanding" },
    { icon: Building2, label: "Portfolio", value: "Diversified" },
    { icon: Users, label: "Governance", value: "Transparent" },
    { icon: Target, label: "Value Creation", value: "Long-term" },
  ]

  return (
    <section id="investor" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src="/images/profile-logo-2048.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 text-balance">
              Shaping the Future of Indian Hospitality
            </h2>
            <div className="w-20 h-1 bg-gold mb-8" />
            <p className="text-ivory/90 text-lg leading-relaxed mb-6">
              Driven by purpose, Alarion is shaping the future of Indian hospitality. We continue to expand thoughtfully
              into new markets, champion responsible growth, and inspire our journey.
            </p>
            <p className="text-ivory/90 text-lg leading-relaxed mb-6">
              With a strong commitment to our guests, partners, employees, and communities, we focus on creating
              long-term value while setting new benchmarks through innovation, sustainability, and industry leadership.
            </p>
            <p className="text-ivory/90 text-lg leading-relaxed">
              Our disciplined approach to expansion, coupled with operational excellence and financial prudence,
              positions Alarion as a trusted partner for investors seeking sustainable returns in the luxury hospitality
              sector.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-gold/20"
                >
                  <Icon className="w-10 h-10 text-gold mb-4" strokeWidth={1.5} />
                  <p className="text-ivory/70 text-sm mb-2">{metric.label}</p>
                  <p className="font-serif text-2xl text-ivory">{metric.value}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
