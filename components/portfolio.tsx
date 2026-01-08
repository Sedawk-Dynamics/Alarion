"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const properties = [
  {
    title: "Romantic Escapes",
    description: "Intimate properties designed for couples seeking unforgettable moments",
    image: "/romantic-luxury-resort-couples-retreat.jpg",
  },
  {
    title: "Family Retreats",
    description: "Spacious resorts with activities and amenities for all ages",
    image: "/family-luxury-resort-with-pool.jpg",
  },
  {
    title: "Adventure Stays",
    description: "Bold destinations for explorers and thrill-seekers",
    image: "/luxury-mountain-resort-adventure.jpg",
  },
  {
    title: "Signature Indulgences",
    description: "Ultra-luxury properties with bespoke experiences",
    image: "/ultra-luxury-hotel-presidential-suite.jpg",
  },
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mb-6">Our Portfolio</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8" />
          <p className="text-ivory/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover an exquisite collection of experiences—romantic escapes, family adventures, bold explorations, and
            signature indulgences. Each moment at Alarion is thoughtfully crafted to immerse you in warmth, charm, and
            timeless elegance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-3">{property.title}</h3>
                <p className="text-ivory/90 text-sm md:text-base leading-relaxed">{property.description}</p>
                <div className="mt-4 w-12 h-0.5 bg-gold transform origin-left transition-all duration-500 group-hover:w-24" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy px-8 py-6 text-base tracking-wider">
            View All Properties
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
