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

// Static animation placeholder to use instead of Three.js in production
function StaticAnimationPlaceholder({ type, color }: { type: AnimationType, color: string }) {
  // Add animation keyframes to the document if they don't exist yet
  useEffect(() => {
    if (!document.getElementById('animation-keyframes')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'animation-keyframes';
      styleEl.textContent = `
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.7; transform: scale(1.05); }
          100% { opacity: 0.3; transform: scale(0.95); }
        }
      `;
      document.head.appendChild(styleEl);
    }
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden rounded-lg">
      {/* Gradient background based on animation type */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: `linear-gradient(135deg, ${color}88, ${color}44)`,
          opacity: 0.8
        }}
      ></div>
      
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}66, transparent 70%)`,
          animation: 'pulse 3s infinite ease-in-out'
        }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full" style={{ background: `${color}66` }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full" style={{ background: `${color}88` }}></div>
    </div>
  );
}

export default function AnimationContainer({ 
  type = "finance", 
  className = "", 
  height = "h-[300px]", 
  controlsEnabled = false,
  customColor
}: AnimationContainerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isProduction, setIsProduction] = useState(true);
  
  // Only render on client-side
  useEffect(() => {
    setIsMounted(true);
    
    // Check if we're in development mode
    // This is safer than trying to load Three.js in production environments
    if (process.env.NODE_ENV === 'development') {
      setIsProduction(false);
    }
  }, []);
  
  // Use custom color if provided, otherwise use the predefined color for the type
  const color = customColor || colorSchemes[type]
  
  // Fallback content when not mounted
  if (!isMounted) {
    return <div className={`${height} w-full ${className} bg-gray-800 bg-opacity-50 rounded-lg`}></div>;
  }
  
  // Use static placeholder in production to avoid Three.js issues
  if (isProduction) {
    return (
      <div className={`${height} w-full ${className}`}>
        <StaticAnimationPlaceholder type={type} color={color} />
      </div>
    );
  }
  
  // Only use Three.js in development
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