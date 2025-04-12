"use client"

import { useEffect } from 'react'
import Script from 'next/script'

interface ConversionTrackingProps {
  conversionId?: string
  conversionLabel?: string
  conversionValue?: number
  currency?: string
}

export function ConversionTracking({
  conversionId = 'AW-XXXXXXXXXX', // Remplacez par votre ID de conversion Google Ads
  conversionLabel = 'XXXXXXXXXX', // Remplacez par votre label de conversion
  conversionValue = 99, // Valeur de votre template
  currency = 'EUR'
}: ConversionTrackingProps) {
  
  useEffect(() => {
    // S'assurer que la fonction gtag est disponible
    if (typeof window !== 'undefined' && (window as any).gtag) {
      // Envoyer l'événement de conversion à Google Ads
      (window as any).gtag('event', 'conversion', {
        'send_to': `${conversionId}/${conversionLabel}`,
        'value': conversionValue,
        'currency': currency,
        'transaction_id': `TEMPLATE-${Date.now()}`
      });

      // Envoyer également l'événement à Google Analytics 4 (si configuré)
      (window as any).gtag('event', 'purchase', {
        'currency': currency,
        'value': conversionValue,
        'items': [{
          'id': 'nextjs-template',
          'name': 'NextReady SaaS Template',
          'price': conversionValue
        }]
      });

      console.log('Conversion tracked successfully');
    }
  }, [conversionId, conversionLabel, conversionValue, currency]);

  return (
    <>
      {/* Script Google Ads Conversion Tracking */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': '${conversionId}/${conversionLabel}',
                'value': ${conversionValue},
                'currency': '${currency}',
                'transaction_id': 'TEMPLATE-${Date.now()}',
                'event_callback': callback
            });
            return false;
          }
        `}
      </Script>
    </>
  )
}
