"use client"
import React from "react"
import { motion } from "framer-motion"

interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  gradientClassName?: string
  duration?: number
  borderWidth?: number
  speed?: number
}

export default function AnimatedGradientBorder({
  children,
  className = "",
  containerClassName = "",
  gradientClassName = "from-[#FF0080] via-[#7928CA] to-[#0070F3]",
  duration = 6,
  borderWidth = 2,
  speed = 6,
}: AnimatedGradientBorderProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${containerClassName}`} style={{ padding: `${borderWidth}px` }}>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${gradientClassName}`}
        style={{ backgroundSize: "200% 200%" }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: speed || duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <div className={`relative bg-gray-900 rounded-[10px] ${className}`}>{children}</div>
    </div>
  )
}

