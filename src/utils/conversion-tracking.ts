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
 * Fonction de suivi des conversions Google Ads pour les clics sur CTA (conversions secondaires)
 * @param conversionLabel - Label de conversion spécifique à l'action
 * @param url - URL optionnelle vers laquelle rediriger après la conversion
 * @param value - Valeur de la conversion (fixée à 1.0€ pour les conversions secondaires)
 * @returns {boolean} - Retourne false pour empêcher le comportement par défaut
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

  // Format exact de l'événement de conversion pour les clics sur CTA (conversions secondaires)
  try {
    // Construire l'identifiant complet de conversion
    const fullConversionId = `${GOOGLE_ADS_ID}/${conversionLabel}`;
    
    // Envoyer l'événement de conversion exactement comme recommandé par Google
    (window as any).gtag('event', 'conversion', {
      'send_to': fullConversionId,
      'value': 1.0, // Valeur fixe de 1€ pour les conversions secondaires (clics sur CTA)
      'currency': 'EUR',
      'event_callback': callback
    });
    
    // Log détaillé pour le débogage
    console.log(`CTA Click Conversion sent to Google Ads:`, {
      'conversion_id': fullConversionId,
      'value': 1.0,
      'currency': 'EUR',
      'timestamp': new Date().toISOString()
    });
    
    return false; // Toujours retourner false pour laisser le callback gérer la redirection
  } catch (error) {
    console.error('Error sending CTA click conversion:', error);
    // En cas d'erreur, permettre la navigation normale
    if (url) {
      window.location.href = url;
    }
    return true;
  }
}

/**
 * Fonction utilitaire pour attacher un suivi de conversion à un événement onClick (spécifique aux clics sur CTA)
 * @param event - Événement onClick
 * @param conversionLabel - Label de conversion spécifique au CTA
 * @param url - URL optionnelle vers laquelle rediriger après la conversion
 * @param value - Valeur de la conversion (fixée à 1.0€ pour les conversions secondaires)
 */
export function trackConversion(
  event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  conversionLabel: string,
  url?: string,
  value: number = 1.0
): void {
  // Empêcher le comportement par défaut pour permettre à Google de gérer la conversion
  event.preventDefault();
  
  // Ajouter des attributs de débogage pour vérifier que l'événement est bien déclenché
  console.log(`Tracking CTA click conversion: ${conversionLabel}`, {
    'url': url,
    'element': event.currentTarget.tagName,
    'text': event.currentTarget.textContent,
    'timestamp': new Date().toISOString()
  });
  
  // Suivre la conversion avec une valeur fixe de 1€ pour les clics sur CTA
  const result = gtag_report_conversion(conversionLabel, url, 1.0);
  
  // Si gtag n'est pas disponible ou en cas d'erreur, effectuer la redirection manuellement
  if (result && url) {
    console.log(`Fallback redirection to: ${url}`);
    setTimeout(() => {
      window.location.href = url;
    }, 200); // Délai légèrement plus long pour s'assurer que l'événement est envoyé
  }
}
