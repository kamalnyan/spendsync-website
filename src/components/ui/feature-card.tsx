"use client"
import type React from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
  className?: string
}

export default function FeatureCard({ icon, title, description, delay = 0, className = "" }: FeatureCardProps) {
  return (
    <motion.div
      className={`bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        borderColor: "rgba(255, 0, 128, 0.3)",
      }}
    >
      <div className="bg-gradient-to-br from-[#FF0080] to-[#7928CA] p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

