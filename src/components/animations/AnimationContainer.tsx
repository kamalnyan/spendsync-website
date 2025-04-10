"use client"
import React, { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
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

// Error boundary for 3D content
class ThreeJSErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Three.js error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 rounded-lg">
        <div className="text-white text-opacity-70">Animation unavailable</div>
      </div>;
    }

    return this.props.children;
  }
}

export default function AnimationContainer({ 
  type = "finance", 
  className = "", 
  height = "h-[300px]", 
  controlsEnabled = false,
  customColor
}: AnimationContainerProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  // Only render on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Use custom color if provided, otherwise use the predefined color for the type
  const color = customColor || colorSchemes[type]
  
  // Fallback content when not mounted or if there's an error
  if (!isMounted) {
    return <div className={`${height} w-full ${className} bg-gray-800 bg-opacity-50 rounded-lg`}></div>;
  }
  
  return (
    <div className={`${height} w-full ${className}`}>
      <ThreeJSErrorBoundary>
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
      </ThreeJSErrorBoundary>
    </div>
  )
} 