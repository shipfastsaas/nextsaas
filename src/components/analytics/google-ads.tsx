'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// Configuration des paramètres de conversion
interface ConversionParams {
  conversionId?: string;
  conversionLabel?: string;
  value?: number;
  currency?: string;
}

// Fonction pour suivre les conversions de pages vues
export function useGoogleAdsPageViewConversion(params?: ConversionParams) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  useEffect(() => {
    // Vérifier si nous sommes sur la page thank-you
    const isThankYouPage = pathname === '/thank-you' || pathname === '/merci'
    
    if (!isThankYouPage) return
    
    // Paramètres de conversion par défaut
    const conversionId = params?.conversionId || 'AW-16887311626';
    const conversionLabel = params?.conversionLabel || 'iAZHCJXv7bMaEIrav_Q-';
    const value = params?.value || 99; // Valeur par défaut du template
    const currency = params?.currency || 'EUR';
    const transactionId = `TEMPLATE-${Date.now()}`;
    
    // Attendre que gtag soit disponible
    const checkGtagAndSendConversion = () => {
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        // Envoyer l'événement de conversion avec tous les détails
        (window as any).gtag('event', 'conversion', {
          'send_to': `${conversionId}/${conversionLabel}`,
          'value': value,
          'currency': currency,
          'transaction_id': transactionId
        });
        
        // Envoyer également l'événement à Google Analytics 4 (si configuré)
        (window as any).gtag('event', 'purchase', {
          'transaction_id': transactionId,
          'value': value,
          'currency': currency,
          'items': [{
            'id': 'nextjs-template',
            'name': 'NextReady SaaS Template',
            'price': value
          }]
        });
        
        console.log('Google Ads conversion tracked for page:', pathname, 'with value:', value, currency);
      } else {
        // Réessayer dans 1 seconde
        setTimeout(checkGtagAndSendConversion, 1000);
      }
    }
    
    // Démarrer la vérification
    checkGtagAndSendConversion()
  }, [pathname, searchParams])
}

export function GoogleAds() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16887311626"
        strategy="beforeInteractive"
      />
      <Script id="google-ads" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Configuration par défaut - AUTORISER le suivi des conversions
          gtag('consent', 'default', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted'
          });
          
          gtag('config', 'AW-16887311626');
        `}
      </Script>
    </>
  )
}
