"use client"
import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Float } from "@react-three/drei"
import { Vector3, Mesh } from "three"

interface FeaturesAnimationProps {
  position?: [number, number, number]
  scale?: number
  speed?: number
  color?: string
}

export default function FeaturesAnimation({ 
  position = [0, 0, 0], 
  scale = 1, 
  speed = 0.5,
  color = "#7928CA"
}: FeaturesAnimationProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * speed) * 0.2
    meshRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * speed) * 0.1
  })

  // Create a features-themed animation (cube grid to represent features)
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4} position={new Vector3(...position)}>
      <group ref={meshRef} scale={scale}>
        {/* Central element */}
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[0.8, 0.35, 100, 32, 2, 3]} />
          <MeshDistortMaterial 
            color={color} 
            speed={3} 
            distort={0.2} 
            metalness={0.8} 
            roughness={0.1} 
          />
        </mesh>
      </group>
    </Float>
  )
} 