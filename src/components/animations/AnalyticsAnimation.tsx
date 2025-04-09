"use client"
import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Float } from "@react-three/drei"
import { Vector3, Mesh } from "three"

interface AnalyticsAnimationProps {
  position?: [number, number, number]
  scale?: number
  speed?: number
  color?: string
}

export default function AnalyticsAnimation({ 
  position = [0, 0, 0], 
  scale = 1, 
  speed = 0.5,
  color = "#00BFFF" // Blue default for analytics
}: AnalyticsAnimationProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * speed) * 0.3
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * speed * 0.7) * 0.2
  })

  // Analytics-themed animation - a more complex shape representing data visualization
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.4} position={new Vector3(...position)}>
      <group ref={meshRef} scale={scale}>
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[0.7, 0.25, 128, 32, 3, 4]} />
          <MeshDistortMaterial 
            color={color}
            speed={3} 
            distort={0.3} 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  )
} 