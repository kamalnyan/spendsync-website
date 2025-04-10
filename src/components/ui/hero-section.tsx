"use client"
import React from "react"
import { motion } from "framer-motion"
import AnimatedText from "./animated-text"
import SafeAnimationContainer from "../animations/SafeAnimationContainer"

interface HeroSectionProps {
  title: string
  subtitle: string
  children?: React.ReactNode
  className?: string
}

export default function HeroSection({ title, subtitle, children, className = "" }: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-b from-[#020F38] to-[#0A2472] text-white py-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedText text={title} className="text-4xl md:text-5xl font-bold mb-6" />
          <motion.p
            className="text-lg mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {subtitle}
          </motion.p>
          {children}
        </div>
      </div>
    </section>
  )
}

