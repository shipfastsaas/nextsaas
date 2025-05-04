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
  
  // Utiliser la fonction de suivi des conversions de Google Ads
  const result = googleAdsReportConversion(conversionLabel, url);
  
  // Si la fonction de suivi des conversions n'est pas disponible ou en cas d'erreur,
  // effectuer la redirection manuellement après un court délai
  if (result && url) {
    console.log(`Fallback redirection to: ${url}`);
    setTimeout(() => {
      window.location.href = url;
    }, 500); // Délai plus long pour s'assurer que l'événement est envoyé
  }
}

// Exporter les labels de conversion pour faciliter l'accès
export const CONVERSION_LABELS = GOOGLE_ADS_CONVERSION_LABELS;
