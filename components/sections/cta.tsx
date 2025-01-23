"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10" />
          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-24">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Prêt à transformer votre vision en réalité ?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Obtenez un diagnostic gratuit et découvrez comment nous pouvons vous aider à lancer votre projet en quelques semaines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="https://cal.com/makni-ahmed-prvwia/30min" target="_blank" rel="noopener noreferrer">
                    Obtenir mon diagnostic gratuit
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/portfolio">Voir nos réalisations</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}