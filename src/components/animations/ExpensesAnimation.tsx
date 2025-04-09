"use client"
import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Float } from "@react-three/drei"
import { Vector3, Mesh } from "three"

interface ExpensesAnimationProps {
  position?: [number, number, number]
  scale?: number
  speed?: number
  color?: string
}

export default function ExpensesAnimation({ 
  position = [0, 0, 0], 
  scale = 1, 
  speed = 0.4,
  color = "#32CD32" // Green default for expenses
}: ExpensesAnimationProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * speed) * 0.2
    meshRef.current.rotation.z = Math.cos(state.clock.getElapsedTime() * speed * 0.3) * 0.1
  })

  // Expenses-themed animation - a flowing shape representing money/transactions
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4} position={new Vector3(...position)}>
      <mesh ref={meshRef} scale={scale}>
        <torusKnotGeometry args={[0.8, 0.3, 64, 32, 2, 5]} />
        <MeshDistortMaterial 
          color={color}
          speed={2} 
          distort={0.2} 
          metalness={0.7} 
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
} 