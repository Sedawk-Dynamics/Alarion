"use client"

import { motion } from "framer-motion"
import { MapPin, Building2, Calendar, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Himalayan Heritage Resort",
    location: "Shimla, Himachal Pradesh",
    type: "Luxury Resort",
    timeline: "Q4 2026",
    description:
      "A 150-room heritage-inspired luxury resort offering panoramic mountain views, spa facilities, and adventure experiences.",
    status: "Under Development",
  },
  {
    title: "Urban Business Hotel",
    location: "Bengaluru, Karnataka",
    type: "Business Hotel",
    timeline: "Q2 2027",
    description:
      "Modern 200-room business hotel in the heart of the tech capital, featuring conference facilities and co-working spaces.",
    status: "Planning Phase",
  },
  {
    title: "Coastal Boutique Retreat",
    location: "Goa",
    type: "Boutique Resort",
    timeline: "Q1 2027",
    description:
      "Exclusive 80-room beachfront boutique property combining Portuguese architecture with contemporary luxury.",
    status: "Site Acquisition",
  },
  {
    title: "Service Apartments Complex",
    location: "Pune, Maharashtra",
    type: "Service Apartments",
    timeline: "Q3 2026",
    description: "120-unit premium service apartments catering to long-stay corporate guests and families.",
    status: "Under Construction",
  },
]

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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-gold/20 hover:border-gold/40 transition-colors duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-navy mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2 text-charcoal/70 mb-1">
                        <MapPin size={16} className="text-gold" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-charcoal/70">
                        <Building2 size={16} className="text-gold" />
                        <span className="text-sm">{project.type}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-medium">
                        <TrendingUp size={12} />
                        {project.status}
                      </span>
                      <div className="flex items-center gap-1.5 text-charcoal/60 text-xs">
                        <Calendar size={12} />
                        {project.timeline}
                      </div>
                    </div>
                  </div>

                  <p className="text-charcoal/70 leading-relaxed mt-4 text-pretty">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-medium rounded-sm hover:bg-gold/90 transition-colors"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
