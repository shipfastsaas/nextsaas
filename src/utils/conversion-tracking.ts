// Fonctions de suivi des conversions Google Ads
import { GOOGLE_ADS_CONVERSION_LABELS, gtag_report_conversion as googleAdsReportConversion } from '@/components/analytics/google-ads';

/**
 * Fonction utilitaire pour attacher un suivi de conversion à un événement onClick
 * Utilise l'implémentation officielle de Google Ads pour le suivi des conversions
 * 
 * @param event - Événement onClick
 * @param conversionLabel - Label de conversion spécifique au CTA
 * @param url - URL optionnelle vers laquelle rediriger après la conversion
 */
export function trackConversion(
  event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  conversionLabel: string,
  url?: string
): void {
  // Empêcher le comportement par défaut pour permettre à Google de gérer la conversion
  event.preventDefault();
  
  // Log pour débogage
  console.log(`Tracking conversion click: ${conversionLabel} to ${url || 'no URL'}`);
  
  // Utiliser la fonction globale gtag_report_conversion si disponible
  if (typeof window !== 'undefined' && typeof (window as any).gtag_report_conversion === 'function') {
    // Appeler la fonction globale définie dans google-ads.tsx
    (window as any).gtag_report_conversion(conversionLabel, url);
    return;
  }
  
  // Solution de secours si gtag_report_conversion n'est pas disponible
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    // Envoyer directement l'événement de conversion
    (window as any).gtag('event', 'conversion', {
      'send_to': `AW-16887311626/${conversionLabel}`,
      'event_callback': function() {
        if (url) {
          window.location.href = url;
        }
      }
    });
    
    console.log(`Conversion de secours envoyée via gtag: AW-16887311626/${conversionLabel}`);
  } else {
    // Utiliser la fonction de secours si aucune méthode n'est disponible
    const result = googleAdsReportConversion(conversionLabel, url);
    
    // Si la fonction de suivi des conversions n'est pas disponible, rediriger manuellement
    if (url) {
      setTimeout(() => {
        window.location.href = url;
      }, 500);
    }
  }
}

// Exporter les labels de conversion pour faciliter l'accès
export const CONVERSION_LABELS = GOOGLE_ADS_CONVERSION_LABELS;
