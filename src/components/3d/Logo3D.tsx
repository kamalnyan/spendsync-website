"use client"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Float } from "@react-three/drei"
import { Vector3 } from "three"

interface InfinityProps {
  position?: [number, number, number]
  scale?: number
  color?: string
  speed?: number
}

export default function Logo3D({ position = [0, 0, 0], scale = 1, color = "#7928CA", speed = 0.5 }: InfinityProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * speed) * 0.2
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={new Vector3(...position)}>
      <mesh ref={meshRef} scale={scale}>
        <torusKnotGeometry args={[1, 0.3, 128, 32, 2, 3]} />
        <MeshDistortMaterial color={color} speed={3} distort={0.3} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  )
}

