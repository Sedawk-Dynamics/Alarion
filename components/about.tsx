"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 lg:py-32 bg-ivory">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy mb-6 text-balance">
              Your destination for refined hospitality
            </h2>
            <div className="w-20 h-1 bg-gold mb-8" />
            <p className="text-charcoal text-lg leading-relaxed mb-6">
             Alarion Hospitality Pvt. Ltd. is a premier hospitality company dedicated to redefining luxury experiences in India. We seamlessly blend India’s rich cultural heritage, vastu-aligned design principles, and modern luxury standards to create spaces that are elegant, harmonious, and truly memorable.
            </p>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              We specialize in developing, acquiring, and operating hotels, resorts, boutique properties, and service
              apartments. Each property is thoughtfully designed to offer unique experiences—ranging from romantic
              escapes and family retreats to adventure-driven stays and signature indulgences.
            </p>
            <p className="text-charcoal text-lg leading-relaxed">
              At Alarion, we are committed to responsible growth, sustainability, and cultural preservation, ensuring
              that our expansion not only delivers world-class hospitality but also contributes positively to local
              communities and the environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <img
                src="/luxury-hotel-room-interior-elegant.jpg"
                alt="Luxury Interior"
                className="w-full h-64 object-cover rounded-sm"
              />
              <img
                src="/hotel-spa-wellness-luxury.jpg"
                alt="Spa & Wellness"
                className="w-full h-48 object-cover rounded-sm"
              />
            </div>
            <div className="space-y-6 pt-12">
              <img src="/fine-dining-restaurant-luxury-hotel.jpg" alt="Fine Dining" className="w-full h-48 object-cover rounded-sm" />
              <img
                src="/hotel-rooftop-sunset-view-luxury.jpg"
                alt="Rooftop View"
                className="w-full h-64 object-cover rounded-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-10 rounded-sm shadow-sm"
          >
            <h3 className="font-serif text-3xl text-navy mb-4">Our Mission</h3>
            <div className="w-12 h-1 bg-gold mb-6" />
            <p className="text-charcoal leading-relaxed">
              To deliver exceptional hospitality through thoughtful design, heartfelt service, and responsible
              practices—creating memorable experiences that reflect our commitment to luxury, cultural richness, and
              long-term value for our guests, partners, employees, and communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-10 rounded-sm shadow-sm"
          >
            <h3 className="font-serif text-3xl text-navy mb-4">Our Vision</h3>
            <div className="w-12 h-1 bg-gold mb-6" />
            <p className="text-charcoal leading-relaxed">
              To become a distinguished leader in luxury hospitality by creating meaningful experiences, fostering
              responsible growth, and preserving the rich heritage of Indian culture while delivering timeless comfort,
              elegance, and value to every guest.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
