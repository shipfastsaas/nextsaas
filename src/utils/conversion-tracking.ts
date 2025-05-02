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
 * Fonction de suivi des conversions Google Ads - EXACTEMENT comme dans le code fourni par Google
 * @param url - URL optionnelle vers laquelle rediriger après la conversion
 * @param conversionId - ID de conversion complet (AW-XXXXXXXXX/YYYYYYYYYYY)
 * @returns {boolean} - Retourne false pour empêcher le comportement par défaut
 */
export function gtag_report_conversion(conversionLabel: string, url?: string): boolean {
  // Construire l'ID de conversion complet
  const conversionId = `${GOOGLE_ADS_ID}/${conversionLabel}`;
  
  // Vérifier si gtag est disponible
  if (typeof window === 'undefined' || typeof (window as any).gtag !== 'function') {
    console.warn('Google Tag Manager not loaded, conversion not tracked');
    // Si gtag n'est pas disponible, permettre la navigation normale
    if (url) {
      window.location.href = url;
    }
    return true;
  }

  // Définir la fonction de callback exactement comme dans le code fourni par Google
  const callback = function() {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };

  // Envoyer l'événement de conversion exactement comme dans le code fourni par Google
  try {
    // Format exact de l'événement de conversion fourni par Google
    (window as any).gtag('event', 'conversion', {
      'send_to': conversionId,
      'event_callback': callback
    });
    
    // Log pour le débogage
    console.log(`Google Ads conversion sent: ${conversionId}`);
    
    return false; // Empêcher le comportement par défaut pour laisser le callback gérer la redirection
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
  
  // Suivre la conversion avec le format exact recommandé par Google
  const result = gtag_report_conversion(conversionLabel, url);
  
  // Si gtag n'est pas disponible ou en cas d'erreur, effectuer la redirection manuellement
  if (result && url) {
    console.log(`Fallback redirection to: ${url}`);
    setTimeout(() => {
      window.location.href = url;
    }, 300); // Délai plus long pour s'assurer que l'événement est envoyé
  }
}
