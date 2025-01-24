# BlinkSaaS - Plateforme de Développement SaaS & Automatisation IA

Une plateforme moderne pour le développement rapide de SaaS et l'automatisation avec IA, construite avec Next.js 13, React, et Tailwind CSS.

![BlinkSaaS Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop)

## 🚀 Fonctionnalités

- ✨ Interface utilisateur moderne et responsive
- 🎨 Design immersif avec animations 3D
- 🌙 Mode sombre/clair
- 📱 Adaptation mobile complète
- 📊 Analytics avancé avec Google Analytics 4
- 🔒 Gestion des cookies RGPD
- 📝 Blog intégré
- 📬 Formulaire de contact avec reCAPTCHA
- 🎯 SEO optimisé

## 🛠️ Technologies Utilisées

- **Framework**: Next.js 13
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **3D Graphics**: Three.js avec React Three Fiber
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4
- **Form Handling**: React Hook Form avec Zod
- **Email**: EmailJS
- **Security**: Google reCAPTCHA v3

## 📦 Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/blinksaas.git
cd blinksaas
```

2. Installez les dépendances :
```bash
npm install
```

3. Créez un fichier `.env.local` et ajoutez vos variables d'environnement :
```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
NEXT_PUBLIC_CONTACT_EMAIL=votre_email

# Google reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=votre_cle_recaptcha
RECAPTCHA_SECRET_KEY=votre_cle_secrete_recaptcha

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=votre_id_ga4
```

4. Lancez le serveur de développement :
```bash
npm run dev
```

5. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Structure du Projet

```
blinksaas/
├── app/                    # Pages de l'application
├── components/            # Composants React réutilisables
│   ├── sections/         # Sections de page
│   └── ui/              # Composants UI de base
├── hooks/                # Custom React hooks
├── lib/                  # Utilitaires et configurations
├── public/              # Assets statiques
└── styles/              # Styles globaux
```

## 📊 Analytics & Tracking

Le projet utilise Google Analytics 4 pour un tracking avancé des utilisateurs :

### Événements Trackés

- 📍 Navigation entre les pages
- 👆 Interactions utilisateur (clics, scrolls)
- ⏱️ Temps passé sur chaque page
- 📱 Informations sur l'appareil
- 🌍 Données géographiques
- 🔍 Sources de trafic
- 🎯 Conversions et objectifs

### Configuration Analytics

Le tracking est configuré pour collecter :

- Données démographiques
- Intérêts des utilisateurs
- Comportement de navigation
- Performance des pages
- Engagement utilisateur
- Parcours de conversion

### Gestion des Cookies

La gestion des cookies est conforme au RGPD tout en maximisant la collecte de données :

- Cookies nécessaires (toujours actifs)
- Cookies analytiques (Google Analytics)
- Cookies marketing
- Cookies de personnalisation

## 🔒 Sécurité

- Protection reCAPTCHA v3
- Validation des formulaires
- Sécurisation des emails avec EmailJS
- Headers de sécurité configurés

## 🚀 Déploiement

Pour déployer l'application :

1. Construisez l'application :
```bash
npm run build
```

2. Le dossier `out` contient les fichiers statiques prêts à être déployés
3. Déployez sur votre plateforme d'hébergement préférée

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Support

Pour toute question ou support :
- Ouvrez une issue sur GitHub
- Contactez-nous via le formulaire sur [blinksaas.fr/contact](https://blinksaas.fr/contact)