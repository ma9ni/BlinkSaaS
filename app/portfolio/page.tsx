"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code2, Bot, Rocket, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Plateforme E-learning",
    description: "Application SaaS complète pour la formation en ligne avec système de paiement intégré et tableau de bord analytique.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    tags: ["Next.js", "Supabase", "Stripe", "TypeScript"],
    features: [
      "Système de cours en direct et enregistrés",
      "Paiements et abonnements",
      "Analytics avancés",
      "Interface responsive"
    ]
  },
  {
    title: "CRM Immobilier",
    description: "Solution de gestion immobilière avec automatisation des tâches et intégration IA pour l'analyse des biens.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
    tags: ["React", "n8n", "PostgreSQL", "Docker"],
    features: [
      "Gestion des biens et clients",
      "Automatisation des suivis",
      "Estimation IA des prix",
      "Rapports personnalisés"
    ]
  },
  {
    title: "Plateforme Marketing",
    description: "Suite d'outils marketing avec automatisation des campagnes et analyse prédictive des performances.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    tags: ["Vue.js", "n8n", "OpenAI", "AWS"],
    features: [
      "Automation marketing",
      "Analyse prédictive",
      "Segmentation IA",
      "Multi-canal"
    ]
  }
]

const skills = [
  {
    category: "Développement SaaS",
    items: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "AWS", "Docker"]
  },
  {
    category: "Automatisation & IA",
    items: ["n8n", "OpenAI API", "Python", "TensorFlow", "Langchain", "Webhook", "API REST"]
  },
  {
    category: "DevOps & Outils",
    items: ["Git", "CI/CD", "Docker", "Kubernetes", "AWS", "Monitoring", "Testing"]
  }
]

const testimonials = [
  {
    name: "Marie Dubois",
    role: "CEO, EduTech Plus",
    content: "Ahmed a transformé notre vision en réalité avec une plateforme e-learning performante et intuitive.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Thomas Martin",
    role: "CTO, ImmoSmart",
    content: "L'automatisation mise en place a révolutionné notre gestion immobilière. Un vrai game-changer !",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                Expert en Développement SaaS & Automatisation IA
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Je transforme des idées complexes en solutions innovantes, alliant technologie de pointe et expérience utilisateur exceptionnelle.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="https://cal.com/makni-ahmed-prvwia/30min">
                    Discuter de votre projet
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#projects">
                    Voir mes réalisations
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Code2, label: "Projets SaaS", value: "15+" },
              { icon: Bot, label: "Automations", value: "50+" },
              { icon: Rocket, label: "Déploiements", value: "30+" },
              { icon: Star, label: "Clients Satisfaits", value: "25+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Projets Récents
            </h2>
            <p className="text-xl text-muted-foreground">
              Découvrez comment j'aide les entreprises à se transformer numériquement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Compétences Techniques
            </h2>
            <p className="text-xl text-muted-foreground">
              Un ensemble complet de compétences pour réaliser vos projets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ce que disent mes clients
            </h2>
            <p className="text-xl text-muted-foreground">
              Des retours d'expérience qui témoignent de la qualité de mon travail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Réservez une consultation gratuite pour discuter de vos besoins et objectifs.
            </p>
            <Button size="lg" asChild>
              <Link href="https://cal.com/makni-ahmed-prvwia/30min">
                Réserver ma consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}