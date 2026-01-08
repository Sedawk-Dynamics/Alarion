"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.error || "Failed to send message")
      return
    }

    alert("Message sent successfully!")

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  } catch (err) {
    console.error(err)
    alert("Something went wrong")
  }
}


  return (
    <section id="contact" className="py-24 lg:py-32 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mb-6">Get in Touch</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8" />
          <p className="text-ivory/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Let's discuss how Alarion can create exceptional experiences for your guests or explore partnership
            opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/10 border-gold/30 text-ivory placeholder:text-ivory/50 focus:border-gold"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/10 border-gold/30 text-ivory placeholder:text-ivory/50 focus:border-gold"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/10 border-gold/30 text-ivory placeholder:text-ivory/50 focus:border-gold"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="bg-white/10 border-gold/30 text-ivory placeholder:text-ivory/50 focus:border-gold resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold hover:bg-gold/90 text-navy px-8 py-6 text-base tracking-wider"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-3xl text-ivory mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-ivory/70 text-sm mb-1">Phone</p>
                    <a href="tel:+919818418914" className="text-ivory text-lg hover:text-gold transition-colors">
                      +91 98184 18914
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-ivory/70 text-sm mb-1">Email</p>
                    <div className="space-y-1">
                      <a
                        href="mailto:info@alarion.co.in"
                        className="text-ivory text-lg hover:text-gold transition-colors block"
                      >
                        info@alarion.co.in
                      </a>
                      <a
                        href="mailto:Roshan.das@alarion.co.in"
                        className="text-ivory text-base hover:text-gold transition-colors block"
                      >
                        Roshan.das@alarion.co.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-ivory/70 text-sm mb-1">Address</p>
                    <p className="text-ivory text-lg leading-relaxed">
                      Flat No - 102, Plot No - 24 & 25
                      <br />
                      Ratan Vihar - 4, Rajendra Park
                      <br />
                      Gurgaon - 122001, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gold/20">
              <h4 className="font-serif text-xl text-ivory mb-4">Business Hours</h4>
              <p className="text-ivory/80 leading-relaxed">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-24 pt-12 border-t border-gold/20"
        >
          <p className="text-ivory/60 text-sm">
            © {new Date().getFullYear()} Alarion Hospitality Pvt. Ltd. All rights reserved.
          </p>
        </motion.div> */}
      </div>
    </section>
  )
}
