"use client"
import React, { useEffect, useState } from "react"

// Animation types
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

export default function SafeAnimationContainer({ 
  type = "finance", 
  className = "", 
  height = "h-[300px]", 
  customColor
}: AnimationContainerProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  // Only render on client-side
  useEffect(() => {
    setIsMounted(true);
    
    // Add animation keyframes to the document if they don't exist yet
    if (!document.getElementById('animation-keyframes')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'animation-keyframes';
      styleEl.textContent = `
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.7; transform: scale(1.05); }
          100% { opacity: 0.3; transform: scale(0.95); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(styleEl);
    }
  }, []);
  
  // Use custom color if provided, otherwise use the predefined color for the type
  const color = customColor || colorSchemes[type]
  
  // Fallback content when not mounted
  if (!isMounted) {
    return <div className={`${height} w-full ${className} bg-gray-800 bg-opacity-50 rounded-lg`}></div>;
  }
  
  return (
    <div className={`${height} w-full ${className}`}>
      <div className="w-full h-full relative overflow-hidden rounded-lg">
        {/* Background gradient based on animation type */}
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
        
        {/* Animated elements specific to type */}
        {type === "finance" && (
          <>
            <div 
              className="absolute top-1/3 left-1/2 w-16 h-16 rounded-full -translate-x-1/2 -translate-y-1/2" 
              style={{ 
                background: `${color}99`,
                animation: 'float 4s infinite ease-in-out'
              }}
            ></div>
            <div 
              className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full -translate-x-1/2 -translate-y-1/2" 
              style={{ 
                border: `2px solid ${color}66`,
                animation: 'spin 8s infinite linear'
              }}
            ></div>
          </>
        )}
        
        {type === "budget" && (
          <>
            <div 
              className="absolute top-1/4 left-1/4 w-12 h-28 rounded-lg" 
              style={{ background: `${color}66` }}
            ></div>
            <div 
              className="absolute top-1/3 left-1/2 w-12 h-20 rounded-lg" 
              style={{ background: `${color}88` }}
            ></div>
            <div 
              className="absolute top-1/4 right-1/4 w-12 h-32 rounded-lg" 
              style={{ background: `${color}66` }}
            ></div>
          </>
        )}
        
        {type === "analytics" && (
          <>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                d="M0,50 L20,30 L40,45 L60,20 L80,35 L100,10" 
                fill="none" 
                stroke={`${color}88`} 
                strokeWidth="2"
              />
              <circle cx="20" cy="30" r="3" fill={`${color}88`} />
              <circle cx="40" cy="45" r="3" fill={`${color}88`} />
              <circle cx="60" cy="20" r="3" fill={`${color}88`} />
              <circle cx="80" cy="35" r="3" fill={`${color}88`} />
            </svg>
          </>
        )}
        
        {type === "expenses" && (
          <>
            <div 
              className="absolute top-1/3 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2" 
              style={{ 
                border: `2px solid ${color}88`,
                borderRadius: '50%',
                animation: 'pulse 4s infinite ease-in-out'
              }}
            ></div>
            <div 
              className="absolute top-1/3 left-1/2 w-2 h-10 -translate-x-1/2 -translate-y-1/2" 
              style={{ 
                background: `${color}88`,
                transformOrigin: 'bottom center',
                animation: 'spin 8s infinite linear'
              }}
            ></div>
          </>
        )}
        
        {/* Default circles for other types */}
        {(['reminders', 'security', 'features', 'footer'].includes(type)) && (
          <>
            <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full" style={{ 
              background: `${color}66`,
              animation: 'float 3s infinite ease-in-out'
            }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full" style={{ 
              background: `${color}88`,
              animation: 'float 4s infinite ease-in-out reverse'
            }}></div>
          </>
        )}
      </div>
    </div>
  )
} 