"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  personalization: boolean
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
  personalization: true,
}

const cookieDescriptions = {
  necessary: {
    title: "Cookies nécessaires",
    description: "Indispensables au fonctionnement du site. Ils permettent les fonctionnalités de base comme la navigation et l'accès aux zones sécurisées.",
    examples: ["Session utilisateur", "Sécurité", "Préférences essentielles"]
  },
  analytics: {
    title: "Cookies d'analyse",
    description: "Nous aident à comprendre comment les visiteurs interagissent avec le site via la collecte de données détaillées.",
    examples: ["Comportement utilisateur", "Données démographiques", "Performance des pages"]
  },
  marketing: {
    title: "Cookies marketing",
    description: "Permettent de vous proposer des contenus et offres pertinents sur notre site et les réseaux sociaux.",
    examples: ["Publicités personnalisées", "Réseaux sociaux", "Remarketing"]
  },
  personalization: {
    title: "Cookies de personnalisation",
    description: "Permettent d'adapter le contenu et l'interface à vos préférences pour améliorer votre expérience.",
    examples: ["Langue préférée", "Thème", "Préférences d'affichage"]
  }
}

export function CookieConsent() {
  const [accepted, setAccepted] = React.useState(true)
  const [preferences, setPreferences] = React.useState<CookiePreferences>(defaultPreferences)

  React.useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (consent) {
      setPreferences(JSON.parse(consent))
      setAccepted(true)
    } else {
      setAccepted(false)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(defaultPreferences))
    setPreferences(defaultPreferences)
    setAccepted(true)
    window.location.reload()
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setAccepted(true)
    window.location.reload()
  }

  if (accepted) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl"
      >
        <Card>
          <Tabs defaultValue="resume">
            <CardHeader>
              <CardTitle>🍪 Paramètres des cookies</CardTitle>
              <CardDescription>
                Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic du site.
              </CardDescription>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="resume">Résumé</TabsTrigger>
                <TabsTrigger value="details">Paramètres détaillés</TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent>
              <TabsContent value="resume">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Nous utilisons différents types de cookies pour optimiser votre expérience :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    {Object.entries(cookieDescriptions).map(([key, value]) => (
                      <li key={key}>{value.title} - {value.description}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="details">
                <div className="space-y-6">
                  {Object.entries(cookieDescriptions).map(([key, value]) => (
                    <div key={key} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>{value.title}</Label>
                          <p className="text-sm text-muted-foreground">
                            {value.description}
                          </p>
                        </div>
                        <Switch
                          checked={preferences[key as keyof CookiePreferences]}
                          disabled={key === 'necessary'}
                          onCheckedChange={(checked) => 
                            setPreferences(prev => ({ ...prev, [key]: checked }))
                          }
                        />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {value.examples.map((example) => (
                          <span
                            key={example}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button onClick={handleSavePreferences}>
                Enregistrer mes choix
              </Button>
              <Button onClick={handleAcceptAll}>
                Tout accepter
              </Button>
            </CardFooter>
          </Tabs>
        </Card>
      </motion.div>
    </AnimatePresence>
  )
}