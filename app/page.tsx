"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { UpcomingProjects } from "@/components/upcoming-projects"
import { KeyStrengths } from "@/components/key-strengths"
import { InvestorFocus } from "@/components/investor-focus"
import { Sustainability } from "@/components/sustainability"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <UpcomingProjects />
      <KeyStrengths />
      <InvestorFocus />
      <Sustainability />
      <Contact />
      <Footer />
    </main>
  )
}
