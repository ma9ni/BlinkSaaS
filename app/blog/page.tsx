"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag, ChevronRight } from "lucide-react"

const featuredPost = {
  title: "Comment l'IA révolutionne l'automatisation des processus métier",
  description: "Découvrez comment l'intelligence artificielle transforme l'automatisation des workflows et augmente la productivité des entreprises.",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  date: "20 Mars 2024",
  readTime: "8 min",
  category: "Automatisation",
  tags: ["IA", "n8n", "Automatisation", "Productivité"]
}

const posts = [
  {
    title: "Guide complet du développement SaaS rapide avec Next.js",
    description: "Apprenez à développer une application SaaS performante en 4 semaines avec Next.js, Supabase et Stripe.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=400&fit=crop",
    date: "18 Mars 2024",
    readTime: "12 min",
    category: "Développement",
    tags: ["Next.js", "SaaS", "Supabase", "Stripe"]
  },
  {
    title: "10 workflows n8n essentiels pour votre entreprise",
    description: "Une sélection des automatisations les plus utiles pour optimiser vos processus métier avec n8n.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    date: "15 Mars 2024",
    readTime: "10 min",
    category: "Automatisation",
    tags: ["n8n", "Workflow", "Productivité"]
  },
  {
    title: "Intégrer ChatGPT dans vos automatisations n8n",
    description: "Guide pratique pour utiliser l'API OpenAI dans vos workflows n8n et créer des automatisations intelligentes.",
    image: "https://images.unsplash.com/photo-1676299081847-c0326ea81886?w=800&h=400&fit=crop",
    date: "12 Mars 2024",
    readTime: "15 min",
    category: "IA",
    tags: ["ChatGPT", "OpenAI", "n8n", "IA"]
  },
  {
    title: "Les meilleures pratiques de sécurité pour votre SaaS",
    description: "Découvrez comment sécuriser votre application SaaS et protéger les données de vos utilisateurs.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    date: "10 Mars 2024",
    readTime: "8 min",
    category: "Sécurité",
    tags: ["Sécurité", "SaaS", "RGPD"]
  },
  {
    title: "Optimiser les performances de votre application Next.js",
    description: "Guide complet pour améliorer les performances et l'expérience utilisateur de votre application Next.js.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    date: "8 Mars 2024",
    readTime: "10 min",
    category: "Performance",
    tags: ["Next.js", "Performance", "SEO"]
  }
]

const categories = [
  { name: "Tous", count: 12 },
  { name: "Développement", count: 5 },
  { name: "Automatisation", count: 4 },
  { name: "IA", count: 3 },
  { name: "Sécurité", count: 2 },
  { name: "Performance", count: 2 }
]

export default function BlogPage() {
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
                Blog NeuraX
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Découvrez nos articles sur le développement SaaS, l'automatisation et l'IA
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <div key={tag} className="flex items-center text-sm text-muted-foreground">
                        <Tag className="h-4 w-4 mr-1" />
                        {tag}
                      </div>
                    ))}
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.title.toLowerCase().replace(/ /g, '-')}`}>
                      Lire l'article
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  variant={index === 0 ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category.name}
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({category.count})
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-lg h-full">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm text-muted-foreground flex items-center"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 inline mr-2" />
                        {post.date}
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary" asChild>
                        <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>
                          Lire plus
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Restez informé
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles et conseils.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 rounded-lg border bg-background px-4 py-2"
              />
              <Button>S'abonner</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}