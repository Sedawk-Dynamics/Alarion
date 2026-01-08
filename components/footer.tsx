"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#investor", label: "Investors" },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="bg-navy border-t border-gold/20">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Image
              src="/images/profile-logo-2048-removebg-preview.png"
              alt="Alarion"
              width={240}
              height={240}
              className="w-48 h-48 object-contain mb-4"
            />
            <p className="text-gold/90 text-sm leading-relaxed italic">Where Every Stay Tells a Story</p>
            <p className="text-ivory/70 text-sm mt-3 leading-relaxed">
              Redefining luxury hospitality with timeless elegance and exceptional experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-gold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ivory/80 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#careers" className="text-ivory/80 hover:text-gold transition-colors text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Corporate Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-gold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold/80 mt-1 flex-shrink-0" />
                <p className="text-ivory/80 text-sm leading-relaxed">
                  Alarion Hospitality Pvt. Ltd.
                  <br />
                  Flat No - 102, Plot No - 24 & 25
                  <br />
                  Ratan Vihar - 4, Rajendra Park
                  <br />
                  Gurgaon - 122001, India
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold/80 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:info@alarion.co.in"
                    className="text-ivory/80 hover:text-gold transition-colors text-sm"
                  >
                    info@alarion.co.in
                  </a>
                  <a
                    href="mailto:Roshan.das@alarion.co.in"
                    className="text-ivory/80 hover:text-gold transition-colors text-sm"
                  >
                    Roshan.das@alarion.co.in
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold/80 flex-shrink-0" />
                <a href="tel:+919818418914" className="text-ivory/80 hover:text-gold transition-colors text-sm">
                  +91 98184 18914
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-gold text-lg mb-6">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold/80 hover:bg-gold/10 hover:border-gold transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-ivory/70 text-xs mt-6 leading-relaxed">
              Follow us for the latest updates on our properties, exclusive offers, and luxury hospitality insights.
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ivory/60 text-xs">© {currentYear} Alarion Hospitality Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-ivory/60 hover:text-gold text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-ivory/60 hover:text-gold text-xs transition-colors">
                Terms of Service
              </a>
              <a href="#legal" className="text-ivory/60 hover:text-gold text-xs transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
