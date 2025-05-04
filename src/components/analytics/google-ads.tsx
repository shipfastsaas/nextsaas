'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

// ID et labels de conversion Google Ads
export const GOOGLE_ADS_ID = 'AW-16887311626';
export const GOOGLE_ADS_CONVERSION_LABELS = {
  PURCHASE: 'aaFxCKCerqkaElrav_Q-', // Conversion principale (achat)
  HERO_BUY_CTA: 'sbw4CI7qlbUaEIrav_Q-', // Clic sur CTA principal
  HERO_DEMO_CTA: 'K1ykCNfqlrUaEIrav_Q-', // Clic sur CTA de démo
  PRICING_CTA: 'o7hRCIX-lrUaEIrav_Q-', // Clic sur CTA de pricing
  HEADER_CTA: 'CvevCJnL_bMaEIrav_Q-' // Clic sur CTA de header
};

// Fonction pour suivre les conversions de pages vues (conversion principale)
export function useGoogleAdsPageViewConversion() {
  const pathname = usePathname()
  
  useEffect(() => {
    // Vérifier si nous sommes sur la page thank-you
    const isThankYouPage = pathname === '/thank-you' || pathname === '/merci'
    
    if (!isThankYouPage) return
    
    // Valeurs de conversion pour la page thank-you
    const value = 49; // Prix actuel du template
    const currency = 'USD';
    const transactionId = `TEMPLATE-${Date.now()}`;
    
    // Fonction pour envoyer la conversion principale
    const sendPurchaseConversion = () => {
      if (typeof window === 'undefined' || typeof (window as any).gtag !== 'function') return;
      
      // Utiliser exactement le code de conversion fourni par Google
      (window as any).gtag('event', 'conversion', {
        'send_to': `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABELS.PURCHASE}`,
        'value': value,
        'currency': currency,
        'transaction_id': transactionId
      });
      
      console.log(`Conversion d'achat envoyée à Google Ads: ${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABELS.PURCHASE}`);
    };
    
    // Attendre que la page soit complètement chargée avant d'envoyer la conversion
    if (document.readyState === 'complete') {
      sendPurchaseConversion();
    } else {
      window.addEventListener('load', sendPurchaseConversion);
      return () => window.removeEventListener('load', sendPurchaseConversion);
    }
  }, [pathname]);
}

// Fonction pour suivre les conversions de clics sur CTA (conversions secondaires)
export function gtag_report_conversion(conversionLabel: string, url?: string) {
  if (typeof window === 'undefined' || typeof (window as any).gtag !== 'function') {
    if (url) window.location.href = url;
    return true;
  }
  
  // Fonction de callback pour la redirection
  const callback = function() {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };
  
  // Utiliser exactement le format recommandé par Google
  (window as any).gtag('event', 'conversion', {
    'send_to': `${GOOGLE_ADS_ID}/${conversionLabel}`,
    'event_callback': callback
  });
  
  console.log(`Conversion de clic CTA envoyée à Google Ads: ${GOOGLE_ADS_ID}/${conversionLabel}`);
  
  // Retourner false pour empêcher le comportement par défaut
  return false;
}

// Composant principal Google Ads - Utilise exactement le script recommandé par Google
export function GoogleAds() {
  return (
    <>
      {/* Script Google tag (gtag.js) exactement comme fourni par Google */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="beforeInteractive"
      />
      
      {/* Configuration Google Ads exactement comme fournie par Google */}
      <Script id="google-ads-config" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  )
}
