"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    title: "Diagnostic Initial",
    description: "Analyse approfondie de vos besoins et objectifs pour définir la meilleure approche.",
  },
  {
    title: "Conception & Prototypage",
    description: "Création de maquettes interactives et validation du design 3D.",
  },
  {
    title: "Développement Agile",
    description: "Cycles de développement courts avec feedback continu.",
  },
  {
    title: "Mise en Production",
    description: "Déploiement et configuration de votre solution en environnement de production.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Notre Processus de Développement
          </h2>
          <p className="text-lg text-muted-foreground">
            Une méthodologie éprouvée pour transformer votre projet en réalité en seulement 4 semaines.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border" />
              )}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}