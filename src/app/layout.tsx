import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@/components/analytics/google-analytics'
import { GoogleTagManager, GoogleTagManagerNoScript } from '@/components/analytics/google-tag-manager'
import { CookieConsent } from '@/components/cookie-consent'
import { SchemaMarkup } from '@/components/schema-markup'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ShipFastStarter - Next.js SaaS Starter Kit | React SaaS Boilerplate',
  description: 'Build and ship faster with our modern Next.js SaaS starter kit. Complete React SaaS boilerplate with authentication, payments, and beautiful UI components.',
  keywords: 'next.js saas starter kit, react saas boilerplate, saas template, build and ship faster, nextjs boilerplate, react starter kit, saas starter',
  openGraph: {
    title: 'ShipFastStarter - Next.js SaaS Starter Kit | React SaaS Boilerplate',
    description: 'Build and ship faster with our modern Next.js SaaS starter kit. Complete React SaaS boilerplate with authentication, payments, and beautiful UI components.',
    url: 'https://shipfaststarter.com',
    siteName: 'ShipFastStarter',
    images: [
      {
        url: 'https://shipfaststarter.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ShipFastStarter - Next.js SaaS Starter Kit',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShipFastStarter - Next.js SaaS Starter Kit | React SaaS Boilerplate',
    description: 'Build and ship faster with our modern Next.js SaaS starter kit. Complete React SaaS boilerplate with authentication, payments, and beautiful UI components.',
    images: ['https://shipfaststarter.com/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <GoogleTagManagerNoScript />
        <Providers>
          <GoogleTagManager />
          <CookieConsent />
          <SchemaMarkup />
          {children}
        </Providers>
      </body>
    </html>
  )
}
