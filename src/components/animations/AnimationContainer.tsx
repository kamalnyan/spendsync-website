"use client"
import React from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { Suspense } from "react"
import FinanceAnimation from "./FinanceAnimation"
import FeaturesAnimation from "./FeaturesAnimation"
import FooterAnimation from "./FooterAnimation"
import BudgetAnimation from "./BudgetAnimation"
import AnalyticsAnimation from "./AnalyticsAnimation"
import ExpensesAnimation from "./ExpensesAnimation"

// Animation types and their default colors
export type AnimationType = 
  | "finance" 
  | "budget" 
  | "analytics" 
  | "expenses" 
  | "reminders" 
  | "security" 
  | "features" 
  | "footer"

// Color scheme matching each section's theme
const colorSchemes = {
  finance: "#FF0080",     // Pink - for general finance
  budget: "#8A2BE2",      // Purple - for budget management
  analytics: "#00BFFF",   // Blue - for analytics/insights
  expenses: "#32CD32",    // Green - for expense tracking
  reminders: "#FF8C00",   // Orange - for reminders
  security: "#4682B4",    // Steel Blue - for security features
  features: "#7928CA",    // Indigo - for features page
  footer: "#FF0080"       // Pink - for footer
}

interface AnimationContainerProps {
  type: AnimationType
  className?: string
  height?: string
  controlsEnabled?: boolean
  customColor?: string
}

export default function AnimationContainer({ 
  type = "finance", 
  className = "", 
  height = "h-[300px]", 
  controlsEnabled = false,
  customColor
}: AnimationContainerProps) {
  
  // Use custom color if provided, otherwise use the predefined color for the type
  const color = customColor || colorSchemes[type]
  
  return (
    <div className={`${height} w-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          {/* Render the appropriate animation based on type */}
          {(type === "finance") && <FinanceAnimation position={[0, 0, 0]} scale={1.5} color={color} />}
          {(type === "budget") && <BudgetAnimation position={[0, 0, 0]} scale={1.5} color={color} />}
          {(type === "analytics") && <AnalyticsAnimation position={[0, 0, 0]} scale={1.5} color={color} />}
          {(type === "expenses") && <ExpensesAnimation position={[0, 0, 0]} scale={1.5} color={color} />}
          {(type === "reminders") && <FinanceAnimation position={[0, 0, 0]} scale={1.5} color={color} />}
          {(type === "security") && <FinanceAnimation position={[0, 0, 0]} scale={1.5} color={color} />}
          {(type === "features") && <FeaturesAnimation position={[0, 0, 0]} scale={1.5} color={color} />}
          {(type === "footer") && <FooterAnimation position={[0, 0, 0]} scale={1.5} color={color} />}
          
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
        </Suspense>
      </Canvas>
    </div>
  )
} 