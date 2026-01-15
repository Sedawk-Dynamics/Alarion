"use client"

import { motion } from "framer-motion"

export function UpcomingProjects() {
  return (
    <section id="upcoming-projects" className="py-24 lg:py-32 bg-ivory">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-6 text-balance">Upcoming Projects</h2>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed text-pretty">
            Driven by purpose, Alarion is shaping the future of Indian hospitality. We continue to expand thoughtfully
            into new markets, champion responsible growth, and inspire our journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center py-16"
        >
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border border-gold/20 rounded-sm p-12">
            <p className="text-charcoal/70 text-lg leading-relaxed text-pretty">
              We have exciting upcoming projects in the pipeline. Stay tuned for announcements about our new ventures
              across India's most sought-after destinations.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-charcoal/70 leading-relaxed max-w-3xl mx-auto mb-8 text-pretty">
            With a strong commitment to our guests, partners, employees, and communities, we focus on creating long-term
            value while setting new benchmarks through innovation, sustainability, and industry leadership.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-medium rounded-sm hover:bg-gold/90 hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
