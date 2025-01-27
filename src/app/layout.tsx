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
  title: 'ShipFastSaaS - Build Your SaaS & AI Tools Fast',
  description: 'The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.',
  keywords: 'nextjs boilerplate, saas starter, ai tool builder, web app template, online business, nextjs template, saas development, ai development, make money online, startup builder, nextjs 14, typescript, tailwind css',
  openGraph: {
    title: 'ShipFastSaaS - Build Your SaaS & AI Tools Fast',
    description: 'The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.',
    url: 'https://www.shipfastsaas.com',
    siteName: 'ShipFastSaaS',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShipFastSaaS - Build Your SaaS & AI Tools Fast',
    description: 'The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.',
    creator: '@shipfast',
  },
  icons: {
    icon: '/favicone.png',
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
