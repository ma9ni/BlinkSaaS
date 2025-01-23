# BlinkSaaS - Plateforme de Développement SaaS & Automatisation IA

Une plateforme moderne pour le développement rapide de SaaS et l'automatisation avec IA, construite avec Next.js 13, React, et Tailwind CSS.

![BlinkSaaS Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop)

## 🚀 Fonctionnalités

- ✨ Interface utilisateur moderne et responsive
- 🎨 Design immersif avec animations 3D
- 🌙 Mode sombre/clair
- 📱 Adaptation mobile complète
- 📊 Analytics intégré (Google Analytics & Vercel)
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
- **Analytics**: Google Analytics & Vercel Analytics
- **Form Handling**: React Hook Form avec Zod
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
# Google reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=votre_cle_recaptcha

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=votre_id_google_analytics

# Contact Form
NEXT_PUBLIC_CONTACT_EMAIL=blinksaas@gmail.com
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

## 📄 Pages Principales

- `/` - Page d'accueil
- `/services` - Services offerts
- `/portfolio` - Portfolio des projets
- `/blog` - Articles et actualités
- `/contact` - Formulaire de contact

## 🚀 Déploiement

Le projet est configuré pour un déploiement sur Netlify. Pour déployer :

1. Connectez votre repository à Netlify
2. Configurez les variables d'environnement dans les paramètres du projet :
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
3. Déployez avec la commande :
```bash
npm run build
```

## 📊 Analytics

Le projet utilise Google Analytics et Vercel Analytics pour le suivi des performances :

- Configuration de Google Analytics dans `lib/analytics.tsx`
- Tracking des pages avec `hooks/use-page-tracking.tsx`
- Gestion du consentement des cookies intégrée

## 🔒 Sécurité

- Protection reCAPTCHA v3 sur le formulaire de contact
- Gestion RGPD des cookies
- Headers de sécurité configurés

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Push sur la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Support

Pour toute question ou support :
- Ouvrez une issue sur GitHub
- Contactez-nous via le formulaire sur [blinksaas.fr/contact](https://blinksaas.fr/contact)