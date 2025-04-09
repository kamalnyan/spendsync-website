import React from "react";
import { motion } from "framer-motion";

interface GlassmorphismCardProps {
  icon?: React.ReactNode;
  gradient?: string;
  glowColor?: string;
  className?: string;
  children?: React.ReactNode;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  icon,
  gradient = "from-[#FF0080] to-[#7928CA]",
  glowColor = "rgba(255, 0, 128, 0.5)",
  className = "",
  children
}) => {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`}></div>
      
      {/* Glass effect */}
      <div 
        className="absolute inset-0 backdrop-blur-md bg-gray-900/40"
        style={{ 
          borderRadius: 'inherit',
        }}
      ></div>
      
      {/* Animated glow effect */}
      <motion.div
        className="absolute -inset-1 opacity-30"
        style={{ 
          background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
          borderRadius: 'inherit',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{ 
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              opacity: Math.random() * 0.3,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 30],
              opacity: [Math.random() * 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Border */}
      <div 
        className="absolute inset-0 border border-white/10"
        style={{ 
          borderRadius: 'inherit',
        }}
      ></div>
      
      {/* Icon (if provided) */}
      {icon && (
        <div className="absolute top-4 right-4 text-white/80">
          {icon}
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassmorphismCard; 