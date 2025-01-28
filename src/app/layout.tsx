import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Providers } from './providers'
import { GoogleAnalytics } from '@/components/analytics/google-analytics'
import { GoogleTagManager, GoogleTagManagerNoScript } from '@/components/analytics/google-tag-manager'
import { CookieConsent } from '@/components/cookie-consent'
import { SchemaMarkup } from '@/components/schema-markup'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | ShipFast',
    default: 'ShipFast - Ship your SaaS faster',
  },
  description: 'Ship your SaaS project faster with our Next.js 14 boilerplate. Includes authentication, database, payments, and beautiful UI components.',
  metadataBase: new URL('https://shipfa.st'),
  openGraph: {
    title: 'ShipFast - Ship your SaaS faster',
    description: 'Ship your SaaS project faster with our Next.js 14 boilerplate. Includes authentication, database, payments, and beautiful UI components.',
    url: 'https://shipfa.st',
    siteName: 'ShipFast',
    images: '/og.png',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@shipfast',
    creator: '@shipfast',
  },
  icons: {
    icon: './favicon.ico',
  },
  verification: {
    google: 'Hkriyba_PuUuOE7hQpLEIovnsPyfxTBfA73G1xvHs3U',
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
        <GoogleTagManager />
        <GoogleAnalytics />
        <SchemaMarkup />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <GoogleTagManagerNoScript />
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <CookieConsent />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
