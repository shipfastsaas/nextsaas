'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

// ID et labels de conversion Google Ads - NE PAS MODIFIER
export const GOOGLE_ADS_ID = 'AW-16887311626';
export const GOOGLE_ADS_CONVERSION_LABELS = {
  PURCHASE: 'aaFxCKCerqkaEIrav_Q-', // Conversion principale (achat)
  HERO_BUY_CTA: 'sbw4CI7qlbUaEIrav_Q-', // Clic sur CTA principal
  HERO_DEMO_CTA: 'K1ykCNfqlrUaEIrav_Q-', // Clic sur CTA de démo
  PRICING_CTA: 'o7hRCIX-lrUaEIrav_Q-', // Clic sur CTA de pricing
  HEADER_CTA: 'CvevCJnL_bMaEIrav_Q-' // Clic sur CTA de header
};

/**
 * Implémentation OFFICIELLE de Google pour le suivi des conversions
 * NE PAS MODIFIER cette fonction car elle suit exactement le format recommandé par Google
 */
export function gtag_report_conversion(conversionLabel: string, url?: string) {
  if (typeof window === 'undefined') {
    return false;
  }
  
  // Fonction de callback pour la redirection
  function callback() {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  }
  
  // Vérifier si gtag est disponible
  if (typeof (window as any).gtag === 'function') {
    // Format EXACT recommandé par Google
    (window as any).gtag('event', 'conversion', {
      'send_to': `${GOOGLE_ADS_ID}/${conversionLabel}`,
      'event_callback': callback
    });
    
    console.log(`[GoogleAds] Conversion envoyée: ${GOOGLE_ADS_ID}/${conversionLabel}`);
    return false; // Empêcher le comportement par défaut
  } else {
    console.error('[GoogleAds] gtag non disponible pour la conversion');
    if (url) {
      window.location.href = url;
    }
    return true;
  }
}

/**
 * Hook pour suivre les conversions d'achat sur la page thank-you
 * Utilise l'implémentation officielle de Google
 */
export function useGoogleAdsPageViewConversion() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Vérifier si nous sommes sur la page thank-you
    const isThankYouPage = pathname === '/thank-you' || pathname === '/merci';
    if (!isThankYouPage) return;
    
    // Fonction pour envoyer la conversion d'achat
    const sendPurchaseConversion = () => {
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        // Valeurs de conversion
        const value = 149;
        const currency = 'USD';
        const transactionId = `TEMPLATE-${Date.now()}`;
        
        // Format EXACT recommandé par Google
        (window as any).gtag('event', 'conversion', {
          'send_to': `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABELS.PURCHASE}`,
          'value': value,
          'currency': currency,
          'transaction_id': transactionId
        });
        
        console.log(`[GoogleAds] Conversion d'achat envoyée: ${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABELS.PURCHASE}`);
        // Marquer la conversion comme envoyée pour éviter les doublons
        (window as any).__purchaseConversionSent = true;
      } else {
        console.error('[GoogleAds] gtag non disponible pour la conversion d\'achat');
      }
    };
    
    // Vérifier si la conversion a déjà été envoyée
    if ((window as any).__purchaseConversionSent) {
      console.log('[GoogleAds] Conversion d\'achat déjà envoyée, pas de nouvel envoi');
      return;
    }
    
    // Mécanisme de vérification et réessai pour s'assurer que gtag est disponible
    const maxRetries = 5;
    let retryCount = 0;
    
    function checkGtagAndSendConversion() {
      if (typeof (window as any).gtag === 'function') {
        sendPurchaseConversion();
      } else if (retryCount < maxRetries) {
        retryCount++;
        console.log(`[GoogleAds] gtag non disponible, tentative ${retryCount}/${maxRetries} dans 1000ms...`);
        setTimeout(checkGtagAndSendConversion, 1000);
      } else {
        console.error('[GoogleAds] Impossible d\'envoyer la conversion après plusieurs tentatives');
      }
    }
    
    // Démarrer la vérification après un court délai pour laisser le temps au script de se charger
    setTimeout(checkGtagAndSendConversion, 1000);
    
    // Également essayer lors de l'événement load pour plus de sécurité
    if (document.readyState !== 'complete') {
      window.addEventListener('load', checkGtagAndSendConversion);
      return () => window.removeEventListener('load', checkGtagAndSendConversion);
    }
  }, [pathname]);
}

/**
 * Composant principal Google Ads
 * Implémentation STANDARD suivant exactement les recommandations de Google
 */
export function GoogleAds() {
  return (
    <>
      {/* Script Google tag (gtag.js) - TOUJOURS en premier */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="beforeInteractive"
        onLoad={() => {
          console.log('[GoogleAds] Script Google tag chargé avec succès');
        }}
        onError={(e) => {
          console.error('[GoogleAds] Erreur lors du chargement du script Google tag:', e);
        }}
      />
      
      {/* Configuration Google Ads - Implémentation STANDARD */}
      <Script id="google-ads-config" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Configuration explicite du consentement
          gtag('consent', 'default', {
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'analytics_storage': 'granted'
          });
          
          // Configuration Google Ads
          gtag('config', '${GOOGLE_ADS_ID}', {
            'send_page_view': true,
            'allow_ad_personalization_signals': true
          });
          
          // Fonction globale de suivi des conversions (format EXACT recommandé par Google)
          window.gtag_report_conversion = function(conversionLabel, url) {
            var callback = function() {
              if (typeof url !== 'undefined') {
                window.location.href = url;
              }
            };
            
            gtag('event', 'conversion', {
              'send_to': '${GOOGLE_ADS_ID}/' + conversionLabel,
              'event_callback': callback
            });
            
            console.log('[GoogleAds] Conversion envoyée via gtag_report_conversion: ${GOOGLE_ADS_ID}/' + conversionLabel);
            return false;
          };
          
          console.log('[GoogleAds] Script initialisé avec ID: ${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  )
}
