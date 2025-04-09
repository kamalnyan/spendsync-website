"use client"
import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Float } from "@react-three/drei"
import { Vector3, Mesh } from "three"

interface BudgetAnimationProps {
  position?: [number, number, number]
  scale?: number
  speed?: number
  color?: string
}

export default function BudgetAnimation({ 
  position = [0, 0, 0], 
  scale = 1, 
  speed = 0.5,
  color = "#8A2BE2" // Purple default for budget
}: BudgetAnimationProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * speed) * 0.2
    meshRef.current.rotation.z = Math.cos(state.clock.getElapsedTime() * speed * 0.5) * 0.1
  })

  // Budget-themed animation - a torus knot with purple coloring
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.5} position={new Vector3(...position)}>
      <mesh ref={meshRef} scale={scale}>
        <torusKnotGeometry args={[1, 0.3, 100, 24, 2, 3]} />
        <MeshDistortMaterial 
          color={color}
          speed={2.5} 
          distort={0.25} 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
} 