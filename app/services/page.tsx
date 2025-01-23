"use client"

import { motion } from "framer-motion"
import { Code2, Workflow, Braces, Bot, Rocket, Zap, Database, Lock, Building2, ShoppingCart, Briefcase, Users, Mail, Calendar, FileText, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const saasFeatures = [
  {
    icon: Braces,
    title: "Développement Sur Mesure",
    description: "Applications web modernes et performantes adaptées à vos besoins spécifiques."
  },
  {
    icon: Database,
    title: "Architecture Scalable",
    description: "Infrastructure cloud robuste permettant une croissance sans limites."
  },
  {
    icon: Lock,
    title: "Sécurité Renforcée",
    description: "Protection des données et conformité RGPD intégrées dès la conception."
  },
  {
    icon: Rocket,
    title: "Déploiement Rapide",
    description: "Mise en production en 4 semaines avec un accompagnement continu."
  }
]

const automationFeatures = [
  {
    icon: Workflow,
    title: "Workflows Automatisés",
    description: "Automatisation des tâches répétitives avec n8n pour gagner en productivité."
  },
  {
    icon: Bot,
    title: "Intégration IA",
    description: "Intelligence artificielle pour optimiser vos processus métier."
  },
  {
    icon: Zap,
    title: "Intégrations API",
    description: "Connexion transparente avec vos outils existants et APIs tierces."
  },
  {
    icon: Code2,
    title: "Solutions Personnalisées",
    description: "Développement de nodes n8n sur mesure pour vos besoins spécifiques."
  }
]

const saasExamples = [
  {
    icon: Building2,
    title: "Gestion Immobilière",
    description: "Plateforme complète pour gérer les biens, les locataires et les paiements",
    features: ["Suivi des loyers", "Gestion des contrats", "Maintenance préventive", "Tableau de bord analytique"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce B2B",
    description: "Solution de commerce en ligne pour les professionnels",
    features: ["Catalogue personnalisé", "Tarification dynamique", "Gestion des stocks", "Facturation automatisée"]
  },
  {
    icon: Briefcase,
    title: "CRM sur Mesure",
    description: "Gestion de la relation client adaptée à votre secteur",
    features: ["Pipeline de vente", "Suivi des interactions", "Rapports personnalisés", "Intégration email"]
  }
]

const automationExamples = [
  {
    icon: Users,
    title: "RH & Recrutement",
    description: "Automatisation du processus de recrutement",
    features: [
      "Publication multicanale des offres",
      "Tri automatique des CV",
      "Planification des entretiens",
      "Onboarding automatisé"
    ]
  },
  {
    icon: Mail,
    title: "Marketing Automation",
    description: "Automatisation des campagnes marketing",
    features: [
      "Segmentation intelligente",
      "Personnalisation des emails",
      "Scoring des leads",
      "Analytics avancés"
    ]
  },
  {
    icon: FileText,
    title: "Gestion Documentaire",
    description: "Traitement automatisé des documents",
    features: [
      "OCR intelligent",
      "Classification automatique",
      "Validation des données",
      "Archivage sécurisé"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight mb-6"
            >
              Solutions Innovantes pour votre Entreprise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              De la conception à la mise en production, nous vous accompagnons dans votre transformation numérique.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SaaS Development Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Développement SaaS
            </h2>
            <p className="text-xl text-muted-foreground">
              Applications web modernes et évolutives, livrées en 4 semaines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {saasFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Examples Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Exemples de Solutions SaaS
            </h2>
            <p className="text-xl text-muted-foreground">
              Découvrez comment nos solutions SaaS transforment différents secteurs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {saasExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col h-full bg-card rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <example.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                    <p className="text-muted-foreground mb-4">{example.description}</p>
                    <ul className="space-y-2">
                      {example.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <PieChart className="h-4 w-4 mr-2 text-primary" />
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

      {/* Automation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Automatisation IA avec n8n
            </h2>
            <p className="text-xl text-muted-foreground">
              Optimisez vos processus métier grâce à l'automatisation intelligente
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Examples Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Exemples d'Automatisation
            </h2>
            <p className="text-xl text-muted-foreground">
              Des cas concrets d'automatisation qui transforment les entreprises
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automationExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col h-full bg-card rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <example.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                    <p className="text-muted-foreground mb-4">{example.description}</p>
                    <ul className="space-y-2">
                      {example.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <PieChart className="h-4 w-4 mr-2 text-primary" />
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Réservez votre diagnostic gratuit et découvrez comment nous pouvons vous aider.
            </p>
            <Button size="lg" asChild>
              <Link href="https://cal.com/makni-ahmed-prvwia/30min">
                Réserver mon diagnostic gratuit
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}