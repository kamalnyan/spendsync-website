import React from "react"
import { motion } from "framer-motion"

// Define illustration types based on feature categories
export type IllustrationType = 
  | "finance" 
  | "budget" 
  | "analytics" 
  | "expenses" 
  | "reminders" 
  | "security" 
  | "features" 
  | "footer"

// Modern gradient color schemes for each illustration type
const colorSchemes = {
  finance: {
    primary: "from-pink-500 to-indigo-600",
    accent: "bg-pink-500"
  },
  budget: {
    primary: "from-purple-600 to-indigo-700",
    accent: "bg-purple-600"
  },
  analytics: {
    primary: "from-blue-500 to-cyan-600",
    accent: "bg-blue-500"
  },
  expenses: {
    primary: "from-emerald-500 to-teal-600",
    accent: "bg-emerald-500"
  },
  reminders: {
    primary: "from-amber-500 to-orange-600",
    accent: "bg-amber-500"
  },
  security: {
    primary: "from-sky-500 to-indigo-600",
    accent: "bg-sky-500"
  },
  features: {
    primary: "from-violet-600 to-purple-700",
    accent: "bg-violet-600"
  },
  footer: {
    primary: "from-pink-500 to-rose-600",
    accent: "bg-pink-500"
  }
}

// SVG pattern elements for different illustration types
const patternElements = {
  finance: (
    <>
      <circle cx="80" cy="60" r="32" className="fill-white/10" />
      <path d="M65 60h30M80 45v30" className="stroke-white/20 stroke-2" />
      <rect x="20" y="70" width="30" height="20" rx="4" className="fill-white/10" />
      <rect x="110" y="70" width="30" height="20" rx="4" className="fill-white/10" />
      <path d="M10 100L150 100" className="stroke-white/10 stroke-2 stroke-dasharray-4" />
    </>
  ),
  budget: (
    <>
      <rect x="20" y="40" width="30" height="60" rx="4" className="fill-white/10" />
      <rect x="60" y="60" width="30" height="40" rx="4" className="fill-white/15" />
      <rect x="100" y="30" width="30" height="70" rx="4" className="fill-white/10" />
      <circle cx="80" cy="40" r="15" className="fill-white/10" />
      <path d="M10 110L150 110" className="stroke-white/10 stroke-2 stroke-dasharray-4" />
    </>
  ),
  analytics: (
    <>
      <path d="M30,110 L30,70 L70,40 L110,60 L150,30" className="stroke-white/30 stroke-2 fill-none" />
      <circle cx="30" cy="70" r="5" className="fill-white/20" />
      <circle cx="70" cy="40" r="5" className="fill-white/20" />
      <circle cx="110" cy="60" r="5" className="fill-white/20" />
      <circle cx="150" cy="30" r="5" className="fill-white/20" />
      <path d="M10 120L150 120" className="stroke-white/10 stroke-2 stroke-dasharray-4" />
    </>
  ),
  expenses: (
    <>
      <path d="M40,40 L120,40 L120,80 L40,80 Z" className="stroke-white/20 stroke-2 fill-white/5" />
      <path d="M80 30L80 90" className="stroke-white/10 stroke-2" />
      <path d="M50 60L110 60" className="stroke-white/10 stroke-2" />
      <circle cx="80" cy="60" r="20" className="fill-white/10" />
      <path d="M10 100L150 100" className="stroke-white/10 stroke-2 stroke-dasharray-4" />
    </>
  ),
  reminders: (
    <>
      <circle cx="80" cy="60" r="30" className="fill-white/5 stroke-white/20 stroke-2" />
      <path d="M80 40L80 60L95 70" className="stroke-white/30 stroke-2 fill-none" />
      <circle cx="80" cy="60" r="3" className="fill-white/30" />
      <path d="M80 15L80 25M30 60L40 60M120 60L130 60M80 95L80 105" className="stroke-white/15 stroke-2" />
      <path d="M10 120L150 120" className="stroke-white/10 stroke-2 stroke-dasharray-4" />
    </>
  ),
  security: (
    <>
      <path d="M80,40 L120,60 L80,80 L40,60 Z" className="stroke-white/20 stroke-2 fill-white/5" />
      <circle cx="80" cy="60" r="15" className="fill-white/10" />
      <path d="M75 60L80 65L90 55" className="stroke-white/30 stroke-2 fill-none" />
      <path d="M10 100L150 100" className="stroke-white/10 stroke-2 stroke-dasharray-4" />
    </>
  ),
  features: (
    <>
      <circle cx="50" cy="50" r="15" className="fill-white/10" />
      <circle cx="110" cy="50" r="15" className="fill-white/10" />
      <circle cx="50" cy="90" r="15" className="fill-white/10" />
      <circle cx="110" cy="90" r="15" className="fill-white/10" />
      <path d="M50 50L110 50M50 50L50 90M50 90L110 90M110 90L110 50" className="stroke-white/20 stroke-1" />
      <path d="M10 120L150 120" className="stroke-white/10 stroke-2 stroke-dasharray-4" />
    </>
  ),
  footer: (
    <>
      <rect x="40" y="50" width="80" height="40" rx="4" className="fill-white/10" />
      <path d="M50 60L110 60M50 70L110 70M50 80L80 80" className="stroke-white/20 stroke-2" />
      <path d="M10 100L150 100" className="stroke-white/10 stroke-2 stroke-dasharray-4" />
    </>
  )
}

interface FeatureIllustrationProps {
  type: IllustrationType
  className?: string
}

export default function FeatureIllustration({ 
  type = "finance", 
  className = ""
}: FeatureIllustrationProps) {
  const colors = colorSchemes[type]
  
  return (
    <div className={`w-full h-full ${className}`}>
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.primary}`}></div>
        
        {/* Animated dots pattern */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ backgroundPositionX: "0%" }}
          animate={{ backgroundPositionX: "100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            {patternElements[type]}
          </svg>
        </div>
        
        {/* Animated accent circles */}
        <motion.div
          className={`absolute w-20 h-20 rounded-full ${colors.accent} blur-xl opacity-30`}
          animate={{
            x: ["-10%", "60%", "-10%"],
            y: ["10%", "40%", "10%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div
          className={`absolute w-12 h-12 rounded-full ${colors.accent} blur-xl opacity-20`}
          animate={{
            x: ["60%", "20%", "60%"],
            y: ["40%", "60%", "40%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </div>
  )
} 