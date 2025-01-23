"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Line, Float } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useMemo } from "react"
import * as THREE from "three"

function Node({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[0.1, 16, 16]} position={position}>
        <meshStandardMaterial color="#000000" opacity={0.9} transparent />
      </Sphere>
    </Float>
  )
}

function Scene() {
  const points = useMemo(() => [
    new THREE.Vector3(-2, 0, 0),
    new THREE.Vector3(0, 2, 0),
    new THREE.Vector3(2, 0, 0),
    new THREE.Vector3(0, -2, 0),
    new THREE.Vector3(-2, 0, 0),
  ], [])

  const linePoints = useMemo(() => [
    [-2, 0, 0],
    [0, 2, 0],
    [2, 0, 0],
    [0, -2, 0],
    [-2, 0, 0],
  ] as [number, number, number][], [])

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} />
      
      {/* Sphère centrale représentant l'IA */}
      <Sphere args={[0.8, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#000000"
          wireframe
          transparent
          opacity={0.85}
        />
      </Sphere>

      {/* Nodes représentant les points de connexion */}
      {linePoints.map((position, index) => (
        <Node key={index} position={position} />
      ))}

      {/* Lignes connectant les nodes */}
      <Line
        points={points}
        color="#000000"
        lineWidth={2.5}
        transparent
        opacity={0.85}
      />

      {/* Sphère extérieure représentant l'écosystème */}
      <Sphere args={[2.5, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#000000"
          wireframe
          transparent
          opacity={0.7}
        />
      </Sphere>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
      />
    </>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 opacity-100">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl backdrop-blur-sm bg-background/40 p-8 rounded-lg"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Lancez votre SaaS en moins de 4 semaines
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Boostez votre entreprise avec l'IA et bénéficiez d'une interface incroyablement immersive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg" asChild>
              <a href="https://cal.com/makni-ahmed-prvwia/30min" target="_blank" rel="noopener noreferrer">
                Obtenez votre diagnostic gratuit
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <a href="/services">Découvrir nos services</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}