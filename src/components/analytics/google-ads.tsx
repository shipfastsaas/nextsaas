'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// Fonction pour suivre les conversions de pages vues
export function useGoogleAdsPageViewConversion() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  useEffect(() => {
    // Assurez-vous que window et gtag sont définis
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      // Déclencher la conversion pour les pages spécifiques
      if (pathname === '/thank-you' || pathname === '/merci') {
        // Envoyer un événement de conversion avec l'ID spécifique
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-16887311626/aaFxCKCerqkaElrav_Q-',
        })
        console.log('Google Ads conversion tracked for page:', pathname)
      }
    }
  }, [pathname, searchParams])
}

export function GoogleAds() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16887311626"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Configuration par défaut - consentement requis
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
          });
          
          gtag('config', 'AW-16887311626');
        `}
      </Script>
    </>
  )
}
