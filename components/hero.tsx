"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/luxury-5-star-hotel-lobby-with-elegant-design-and-.jpg" alt="Luxury Hotel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory mb-6 tracking-tight text-balance"
        >
          Where Every Stay <br />
          <span className="text-gold">Tells a Story</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-ivory/90 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-pretty leading-relaxed"
        >
          Redefining luxury hospitality with timeless elegance, cultural richness, and exceptional experiences across
          India's finest destinations
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy px-8 py-6 text-base tracking-wider">
            Explore Our Portfolio
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-ivory text-ivory hover:bg-ivory hover:text-navy px-8 py-6 text-base tracking-wider bg-transparent"
          >
            Contact Us
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ChevronDown className="text-gold w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  )
}
