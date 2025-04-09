"use client"
import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Float } from "@react-three/drei"
import { Vector3, Mesh } from "three"

interface FooterAnimationProps {
  position?: [number, number, number]
  scale?: number
  speed?: number
  color?: string
}

export default function FooterAnimation({ 
  position = [0, 0, 0], 
  scale = 1, 
  speed = 0.3,
  color = "#FF0080"
}: FooterAnimationProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * speed) * 0.1
  })

  // Create a subtle footer animation 
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2} position={new Vector3(...position)}>
      <mesh ref={meshRef} scale={scale}>
        <torusGeometry args={[0.8, 0.2, 16, 32]} />
        <MeshDistortMaterial 
          color={color} 
          speed={1} 
          distort={0.1} 
          metalness={0.6} 
          roughness={0.3}
          opacity={0.8}
          transparent
        />
      </mesh>
    </Float>
  )
} 