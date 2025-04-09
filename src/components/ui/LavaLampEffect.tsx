import React from "react";
import { motion } from "framer-motion";

interface LavaLampEffectProps {
  className?: string;
  color1?: string;
  color2?: string;
  children?: React.ReactNode;
}

const LavaLampEffect: React.FC<LavaLampEffectProps> = ({
  className = "",
  color1 = "#FF0080",
  color2 = "#7928CA",
  children
}) => {
  // Create more organic blob elements with varied shapes
  const blobCount = 7; // More blobs for a richer effect
  
  const blobs = Array.from({ length: blobCount }).map((_, i) => {
    // More varied size for organic feel
    const size = Math.random() * 70 + 80;
    return {
      size,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: i * 0.4,
      duration: Math.random() * 10 + 15,
      rotation: Math.random() * 360,
    };
  });

  // Small accent blobs for added texture
  const smallBlobs = Array.from({ length: 12 }).map((_, i) => ({
    size: Math.random() * 20 + 15,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.2,
    duration: Math.random() * 5 + 8,
    rotation: Math.random() * 360,
  }));

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient base for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-[#020F38] opacity-90" />
      
      {/* Large organic blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute opacity-50"
          initial={{
            x: `${blob.x}%`,
            y: `${blob.y}%`,
            scale: 0.7,
            rotate: blob.rotation,
            background: i % 2 === 0 ? color1 : color2,
            borderRadius: "60% 40% 70% 30% / 40% 50% 60% 50%",
          }}
          animate={{
            x: [`${blob.x}%`, `${(blob.x + 40) % 100}%`, `${(blob.x + 70) % 100}%`, `${blob.x}%`],
            y: [`${blob.y}%`, `${(blob.y + 50) % 100}%`, `${(blob.y + 30) % 100}%`, `${blob.y}%`],
            scale: [0.7, 1.3, 0.9, 0.7],
            rotate: [blob.rotation, blob.rotation + 80, blob.rotation + 200, blob.rotation + 360],
            borderRadius: [
              "60% 40% 70% 30% / 40% 50% 60% 50%",
              "30% 60% 40% 70% / 50% 60% 30% 40%",
              "40% 30% 60% 50% / 60% 30% 70% 40%",
              "60% 40% 70% 30% / 40% 50% 60% 50%"
            ]
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            filter: "blur(40px)",
            willChange: "transform, opacity, border-radius",
          }}
        />
      ))}
      
      {/* Small accent blobs */}
      {smallBlobs.map((blob, i) => (
        <motion.div
          key={`small-${i}`}
          className="absolute opacity-40"
          initial={{
            x: `${blob.x}%`,
            y: `${blob.y}%`,
            scale: 0.6,
            rotate: blob.rotation,
            background: i % 2 === 0 ? color1 : color2,
            borderRadius: "70% 30% 50% 50% / 30% 40% 70% 60%",
          }}
          animate={{
            x: [`${blob.x}%`, `${(blob.x + 30) % 100}%`, `${(blob.x + 60) % 100}%`, `${blob.x}%`],
            y: [`${blob.y}%`, `${(blob.y + 35) % 100}%`, `${(blob.y + 15) % 100}%`, `${blob.y}%`],
            scale: [0.6, 1.1, 0.8, 0.6],
            rotate: [blob.rotation, blob.rotation + 120, blob.rotation + 240, blob.rotation + 360],
            borderRadius: [
              "70% 30% 50% 50% / 30% 40% 70% 60%",
              "50% 50% 30% 70% / 60% 70% 30% 40%",
              "40% 60% 70% 30% / 50% 30% 40% 60%",
              "70% 30% 50% 50% / 30% 40% 70% 60%"
            ]
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            filter: "blur(15px)",
            willChange: "transform, opacity, border-radius"
          }}
        />
      ))}
      
      {/* Subtle floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-white"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
            scale: 0
          }}
          animate={{
            y: [null, `${Math.random() * -50 - 10}%`],
            opacity: [null, 0],
            scale: [0, Math.random() * 0.4 + 0.1]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 1
          }}
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            filter: "blur(0.5px)"
          }}
        />
      ))}
      
      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default LavaLampEffect; 