"use client"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import Logo3D from "./Logo3D"

interface Scene3DProps {
  className?: string
  height?: string
  controlsEnabled?: boolean
}

export default function Scene3D({ className = "", height = "h-[300px]", controlsEnabled = false }: Scene3DProps) {
  return (
    <div className={`${height} w-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Logo3D position={[0, 0, 0]} scale={1.5} color="#FF0080" />
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          {controlsEnabled && <OrbitControls />}
        </Suspense>
      </Canvas>
    </div>
  )
}

