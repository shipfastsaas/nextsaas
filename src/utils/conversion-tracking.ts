/**
 * Utilitaires de suivi des conversions Google Ads
 * Implémentation STANDARD suivant exactement les recommandations de Google
 */
import { GOOGLE_ADS_CONVERSION_LABELS, gtag_report_conversion } from '@/components/analytics/google-ads';

/**
 * Fonction utilitaire pour attacher un suivi de conversion à un événement onClick
 * Utilise l'implémentation OFFICIELLE de Google Ads pour le suivi des conversions
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
  // Empêcher le comportement par défaut
  event.preventDefault();
  
  // Log pour débogage
  console.log(`[ConversionTracking] Suivi de conversion: ${conversionLabel} vers ${url || 'aucune URL'}`);
  
  // Utiliser UNIQUEMENT la fonction officielle de Google pour le suivi des conversions
  // Cette fonction gère automatiquement les cas où gtag n'est pas disponible
  gtag_report_conversion(conversionLabel, url);
}

// Exporter les labels de conversion pour faciliter l'accès
export const CONVERSION_LABELS = GOOGLE_ADS_CONVERSION_LABELS;
