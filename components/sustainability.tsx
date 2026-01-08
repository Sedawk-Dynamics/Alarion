"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Sustainability() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    "Guest-Centric Excellence",
    "Integrity & Trust",
    "Timeless Indian Hospitality",
    "Luxury with Purpose",
    "Sustainability & Responsibility",
    "Innovation & Continuous Improvement",
    "People First",
    "Heritage Preservation",
    "Harmony & Balance",
    "Accountability & Excellence",
  ]

  return (
    <section id="sustainability" className="py-24 lg:py-32 bg-ivory">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <img
              src="/eco-friendly-luxury-resort-nature-sustainability.jpg"
              alt="Sustainability"
              className="w-full h-full object-cover rounded-sm"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy mb-6 text-balance">
              Our Values & Commitment
            </h2>
            <div className="w-20 h-1 bg-gold mb-8" />
            <p className="text-charcoal text-lg leading-relaxed mb-8">
              At Alarion, we are committed to responsible growth, sustainability, and cultural preservation. Our values
              guide every decision, ensuring that our expansion delivers world-class hospitality while contributing
              positively to local communities and the environment.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <p className="text-charcoal text-sm leading-relaxed">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
