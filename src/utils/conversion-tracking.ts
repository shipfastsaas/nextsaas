// Fonctions de suivi des conversions Google Ads

// Labels de conversion pour différentes actions
export const CONVERSION_LABELS = {
  HEADER_CTA: 'CvevCJnL_bMaEIrav_Q-',
  HERO_BUY_CTA: 'sbw4CI7qlbUaEIrav_Q-',
  HERO_DEMO_CTA: 'K1ykCNfqlrUaEIrav_Q-',
  PRICING_CTA: 'o7hRCIX-lrUaEIrav_Q-'
};

// ID de conversion Google Ads
export const GOOGLE_ADS_ID = 'AW-16887311626';

/**
 * Fonction de suivi des conversions Google Ads
 * @param conversionLabel - Label de conversion spécifique à l'action
 * @param url - URL optionnelle vers laquelle rediriger après la conversion
 * @param value - Valeur de la conversion (par défaut: 1.0)
 * @returns {boolean} - Retourne false pour empêcher le comportement par défaut si nécessaire
 */
export function gtag_report_conversion(conversionLabel: string, url?: string, value: number = 1.0): boolean {
  // Vérifier si gtag est disponible
  if (typeof window === 'undefined' || typeof (window as any).gtag !== 'function') {
    console.warn('Google Tag Manager not loaded, conversion not tracked');
    // Si gtag n'est pas disponible, permettre la navigation normale
    if (url) {
      window.location.href = url;
    }
    return true;
  }

  // Fonction de callback pour la redirection
  const callback = function() {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };

  // Envoyer l'événement de conversion à Google Ads
  try {
    (window as any).gtag('event', 'conversion', {
      'send_to': `${GOOGLE_ADS_ID}/${conversionLabel}`,
      'value': value,
      'currency': 'EUR',
      'event_callback': callback
    });
    console.log(`Google Ads conversion sent: ${conversionLabel}`);
    return url ? false : true; // Empêcher le comportement par défaut si une URL est fournie
  } catch (error) {
    console.error('Error sending conversion:', error);
    // En cas d'erreur, permettre la navigation normale
    if (url) {
      window.location.href = url;
    }
    return true;
  }
}

/**
 * Fonction utilitaire pour attacher un suivi de conversion à un événement onClick
 * @param event - Événement onClick
 * @param conversionLabel - Label de conversion
 * @param url - URL optionnelle
 * @param value - Valeur de la conversion
 */
export function trackConversion(
  event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  conversionLabel: string,
  url?: string,
  value: number = 1.0
): void {
  // Empêcher le comportement par défaut
  if (url) {
    event.preventDefault();
  }
  
  // Suivre la conversion
  gtag_report_conversion(conversionLabel, url, value);
}
