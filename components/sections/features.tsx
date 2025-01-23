"use client"

import { motion } from "framer-motion"
import { Code2, Cpu, Layers } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    title: "SaaS Rapide",
    description: "Développement accéléré de votre SaaS avec une mise en production en 4 semaines seulement.",
    icon: Code2,
  },
  {
    title: "Automatisation IA",
    description: "Optimisez vos workflows et gagnez en productivité grâce à l'intelligence artificielle.",
    icon: Cpu,
  },
  {
    title: "UX 3D Immersive",
    description: "Démarquez-vous avec une interface utilisateur moderne et immersive en 3D.",
    icon: Layers,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Solutions Innovantes pour votre Entreprise
          </h2>
          <p className="text-lg text-muted-foreground">
            Combinez rapidité de développement, puissance de l'IA et design immersif pour transformer votre vision en réalité.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-full" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}