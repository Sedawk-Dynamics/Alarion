"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Crown, MapPin, Leaf, Award } from "lucide-react"

const strengths = [
  {
    icon: Crown,
    title: "Luxury Experiences",
    description: "World-class amenities and personalized service that exceed expectations",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Strategic properties across India's most sought-after destinations",
  },
  {
    icon: Leaf,
    title: "Sustainable Growth",
    description: "Responsible expansion that respects communities and the environment",
  },
  {
    icon: Award,
    title: "Global Standards",
    description: "International quality benchmarks with authentic Indian hospitality",
  },
]

export function KeyStrengths() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy mb-6">Why Choose Alarion</h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon
            return (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-ivory mb-6 group-hover:bg-gold transition-colors duration-300">
                  <Icon className="w-10 h-10 text-navy" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-navy mb-4">{strength.title}</h3>
                <p className="text-charcoal leading-relaxed">{strength.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
