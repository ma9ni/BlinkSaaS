import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'
import { CookieConsent } from '@/components/cookie-consent'
import { Analytics } from '@/lib/analytics'
import { PageTracking } from '@/components/page-tracking'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://blinksaas.netlify.app'),
  title: {
    default: 'BlinkSaaS | Développement SaaS Rapide & Automatisation IA',
    template: '%s | BlinkSaaS'
  },
  description: 'Expert en développement SaaS rapide, automatisation IA et expérience utilisateur 3D immersive. Lancez votre projet en quelques semaines avec une interface innovante.',
  keywords: [
    'SaaS',
    'développement rapide',
    'automatisation',
    'intelligence artificielle',
    'IA',
    'workflow automation',
    'n8n',
    'développement web',
    'application web',
    'startup',
    'innovation',
    'transformation digitale',
    'productivité',
    'entreprise',
    'technologie',
    'cloud computing',
    'logiciel',
    'solution métier',
    'digitalisation'
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://blinksaas.netlify.app',
    title: 'BlinkSaaS | Développement SaaS Rapide & Automatisation IA',
    description: 'Expert en développement SaaS rapide, automatisation IA et expérience utilisateur 3D immersive.',
    siteName: 'BlinkSaaS',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'BlinkSaaS Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlinkSaaS | Développement SaaS Rapide & Automatisation IA',
    description: 'Expert en développement SaaS rapide, automatisation IA et expérience utilisateur 3D immersive.',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification-google',
  },
  alternates: {
    canonical: 'https://blinksaas.netlify.app',
  },
  authors: [{ name: 'BlinkSaaS' }],
  creator: 'BlinkSaaS',
  publisher: 'BlinkSaaS',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      }
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
          <CookieConsent />
          <Analytics />
          <PageTracking />
        </ThemeProvider>
      </body>
    </html>
  )
}