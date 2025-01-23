"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sophie Martin",
    role: "CEO, TechStart",
    content: "Grâce à leur expertise en développement rapide, nous avons pu lancer notre SaaS en seulement 4 semaines. L'interface 3D a vraiment impressionné nos utilisateurs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Thomas Dubois",
    role: "CTO, InnovAI",
    content: "L'intégration de l'IA dans nos processus a considérablement amélioré notre productivité. Une expertise remarquable en automatisation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Marie Lambert",
    role: "Product Manager, DigitalFlow",
    content: "Le design 3D de notre interface utilisateur nous démarque vraiment de la concurrence. Une expérience utilisateur exceptionnelle.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez comment nous aidons les entreprises à transformer leurs idées en solutions innovantes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}