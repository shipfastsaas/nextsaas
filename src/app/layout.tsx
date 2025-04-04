import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@/components/analytics/google-analytics'
import { GoogleTagManager, GoogleTagManagerNoScript } from '@/components/analytics/google-tag-manager'
import { GoogleAds } from '@/components/analytics/google-ads'
import { UserJourneyTracking } from '@/components/analytics/user-journey-tracking'
import { CookieConsent } from '@/components/cookie-consent'
import { SchemaMarkup } from '@/components/schema-markup'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://shipfaststarter.com'),
  title: 'Premium Next.js Template | Complete SaaS Starter Kit | Ready-to-Deploy Solution',
  description: 'Launch your SaaS project with our comprehensive Next.js template. Built with authentication, payments, and beautiful UI components. Save months of development time.',
  keywords: 'next.js template, saas starter kit, next.js 14, react saas template, nextjs boilerplate, app router, authentication template, payment integration, mongodb nextjs, typescript template, tailwind template',
  alternates: {
    canonical: 'https://shipfaststarter.com',
    
  },
  openGraph: {
    title: 'Premium Next.js Template | Complete SaaS Starter Kit | ShipFastStarter',
    description: 'Launch your SaaS project with our comprehensive Next.js template. Built with authentication, payments, and beautiful UI components. Save months of development time.',
    url: 'https://shipfaststarter.com',
    siteName: 'ShipFastStarter',
    images: [
      {
        url: 'https://shipfaststarter.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Best Next.js Boilerplate and SaaS Starter Kit Template',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Next.js Template | Complete SaaS Starter Kit',
    description: 'Launch your SaaS project with our comprehensive Next.js template. Built with authentication, payments, and beautiful UI components. Save months of development time.',
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
        <GoogleAds />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <GoogleTagManagerNoScript />
        <Providers>
          <GoogleTagManager />
          <UserJourneyTracking />
          <CookieConsent />
          <SchemaMarkup />
          {children}
        </Providers>
      </body>
    </html>
  )
}
