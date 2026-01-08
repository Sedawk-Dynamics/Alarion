"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#investor", label: "Investor Relations" },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md py-2" : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between min-h-[64px]">
          <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="flex items-center gap-3">
            <Image
              src="/images/profile-logo-2048-removebg-preview.png"
              alt="Alarion"
              width={120}
              height={120}
              className="w-24 h-24 lg:w-28 lg:h-28 object-contain"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base text-ivory/90 hover:text-gold transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-ivory p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-navy/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base text-ivory/90 hover:text-gold transition-colors tracking-wide py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
