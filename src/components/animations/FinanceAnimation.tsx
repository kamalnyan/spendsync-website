"use client"
import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Float } from "@react-three/drei"
import { Vector3, Mesh } from "three"

interface FinanceAnimationProps {
  position?: [number, number, number]
  scale?: number
  speed?: number
  color?: string
}

export default function FinanceAnimation({ 
  position = [0, 0, 0], 
  scale = 1, 
  speed = 0.5,
  color = "#FF0080"
}: FinanceAnimationProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * speed) * 0.2
  })

  // Create a finance-themed animation (infinity shape like the new design)
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={new Vector3(...position)}>
      <mesh ref={meshRef} scale={scale}>
        <torusKnotGeometry args={[1, 0.4, 128, 32, 2, 3]} />
        <MeshDistortMaterial 
          color={color} 
          speed={2} 
          distort={0.2} 
          metalness={0.9} 
          roughness={0.1} 
        />
      </mesh>
    </Float>
  )
} 