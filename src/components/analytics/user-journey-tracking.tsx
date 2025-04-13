'use client'

import { useEffect, useRef } from 'react'

export function UserJourneyTracking() {
  const tracked = useRef({
    scroll25: false,
    scroll50: false,
    scroll75: false,
    scroll100: false
  });

  useEffect(() => {
    // S'assurer que la fenêtre est disponible (côté client)
    if (typeof window === 'undefined') return;
    
    // Fonction pour envoyer un événement à Google Analytics
    const sendEvent = (eventName: string, eventCategory: string, eventLabel: string, value?: number, nonInteraction?: boolean) => {
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        try {
          (window as any).gtag('event', eventName, {
            'event_category': eventCategory,
            'event_label': eventLabel,
            'value': value,
            'non_interaction': nonInteraction
          });
          console.log(`Event sent: ${eventName} - ${eventLabel}`);
        } catch (error) {
          console.error('Error sending GA event:', error);
        }
      }
    };
    
    // Attendre que Google Tag Manager soit chargé
    let attempts = 0;
    const maxAttempts = 10;
    
    const checkGtag = setInterval(() => {
      attempts++;
      if (typeof (window as any).gtag === 'function') {
        console.log('GTM loaded, initializing tracking');
        clearInterval(checkGtag);
        initializeTracking();
      } else if (attempts >= maxAttempts) {
        console.warn('GTM not loaded after maximum attempts, aborting');
        clearInterval(checkGtag);
      }
    }, 1000);
    
    // Nettoyer l'intervalle si le composant est démonté
    return () => clearInterval(checkGtag);
    
    function initializeTracking() {
      // Suivre les clics sur les CTA
      trackCTAClicks();
      
      // Suivre le défilement
      trackScroll();
      
      // Suivre les conversions (page thank-you)
      if (window.location.pathname.includes('/thank-you')) {
        console.log('Thank you page visited - conversion tracked');
        sendEvent('conversion', 'conversion', 'purchase_completed', 99, false);
      }
    }

    // Fonction pour suivre les clics sur les CTA
    function trackCTAClicks() {
      // Créer un Set pour suivre les éléments déjà traités et éviter les doublons
      const trackedElements = new Set();
      
      // CTA du header - "Buy Next.js Template"
      document.querySelectorAll('header a[href="#pricing"]').forEach(cta => {
        if (trackedElements.has(cta)) return;
        trackedElements.add(cta);
        
        cta.addEventListener('click', () => {
          // Envoyer l'événement à Google Analytics
          sendEvent('click', 'engagement', 'header_cta_click', 1);
           
          // Envoyer l'événement de conversion à Google Ads
          if (typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', 'conversion', {
              'send_to': 'AW-16887311626/CvevCJnL_bMaEIrav_Q-',
              'value': 1.0,
              'currency': 'EUR'
            });
            console.log('Google Ads conversion sent: CTA Header Click');
          }
        });
      });

      // CTA "Get Started for $99" dans la hero section
      const heroBuyCTAs = Array.from(document.querySelectorAll('.hero-section a[href="#pricing"]'));
      // Fallback pour trouver le CTA si la classe a changé
      if (heroBuyCTAs.length === 0) {
        const heroSection = document.querySelector('section:nth-of-type(1)');
        if (heroSection) {
          const potentialCTAs = Array.from(heroSection.querySelectorAll('a[href="#pricing"]'));
          potentialCTAs.forEach(cta => {
            if (cta.textContent?.includes('Get Started for $99')) {
              heroBuyCTAs.push(cta);
            }
          });
        }
      }
      
      heroBuyCTAs.forEach(cta => {
        if (trackedElements.has(cta)) return;
        trackedElements.add(cta);
        
        cta.addEventListener('click', () => {
          // Envoyer l'événement à Google Analytics
          sendEvent('click', 'engagement', 'hero_buy_cta_click', 2);
          
          // Envoyer l'événement de conversion à Google Ads
          if (typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', 'conversion', {
              'send_to': 'AW-16887311626/sbw4CI7qlbUaEIrav_Q-',
              'value': 2.0,
              'currency': 'EUR'
            });
            console.log('Google Ads conversion sent: Hero Buy CTA Click');
          }
        });
      });

      // CTA "See Demo" dans la hero section
      const heroDemoCTAs = Array.from(document.querySelectorAll('.hero-section a[href*="demo"], .hero-section a[target="_blank"]'));
      // Fallback pour trouver le CTA si la classe a changé
      if (heroDemoCTAs.length === 0) {
        const heroSection = document.querySelector('section:nth-of-type(1)');
        if (heroSection) {
          const potentialCTAs = Array.from(heroSection.querySelectorAll('a[target="_blank"]'));
          potentialCTAs.forEach(cta => {
            if (cta.textContent?.includes('See Demo')) {
              heroDemoCTAs.push(cta);
            }
          });
        }
      }
      
      heroDemoCTAs.forEach(cta => {
        if (trackedElements.has(cta)) return;
        trackedElements.add(cta);
        
        cta.addEventListener('click', () => {
          // Envoyer l'événement à Google Analytics
          sendEvent('click', 'engagement', 'hero_demo_cta_click', 1);
          
          // Envoyer l'événement de conversion à Google Ads
          if (typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', 'conversion', {
              'send_to': 'AW-16887311626/K1ykCNfqlrUaEIrav_Q-',
              'value': 1.0,
              'currency': 'EUR'
            });
            console.log('Google Ads conversion sent: Hero Demo CTA Click');
          }
        });
      });

      // CTA "Buy Now - 50% OFF" dans la section pricing
      const pricingCTAs = Array.from(document.querySelectorAll('.pricing-section button'));
      // Fallback pour trouver le CTA si la classe a changé
      if (pricingCTAs.length === 0) {
        const pricingSection = document.querySelector('section[id="pricing"]') || document.querySelector('section:nth-of-type(6)');
        if (pricingSection) {
          const potentialCTAs = Array.from(pricingSection.querySelectorAll('button'));
          potentialCTAs.forEach(cta => {
            if (cta.textContent?.includes('Buy Now') || cta.textContent?.includes('50% OFF')) {
              pricingCTAs.push(cta);
            }
          });
        }
      }
      
      pricingCTAs.forEach(cta => {
        if (trackedElements.has(cta)) return;
        trackedElements.add(cta);
        
        cta.addEventListener('click', () => {
          // Envoyer l'événement à Google Analytics
          sendEvent('click', 'engagement', 'pricing_cta_click', 3);
          
          // Envoyer l'événement de conversion à Google Ads
          if (typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', 'conversion', {
              'send_to': 'AW-16887311626/o7hRCIX-lrUaEIrav_Q-',
              'value': 3.0,
              'currency': 'EUR'
            });
            console.log('Google Ads conversion sent: Pricing CTA Click');
          }
        });
      });
      
      // Recherche par texte pour les boutons qui n'ont pas été trouvés par les sélecteurs précédents
      document.querySelectorAll('a, button').forEach(el => {
        if (trackedElements.has(el)) return; // Ignorer les éléments déjà traités
        
        const text = el.textContent?.toLowerCase() || '';
        
        // Ne pas utiliser "Buy Next.js Template" car il pourrait correspondre au CTA du header
        if (text.includes('get started for $99')) {
          trackedElements.add(el);
          el.addEventListener('click', () => {
            sendEvent('click', 'engagement', 'hero_buy_cta_text_match', 2);
            
            // Envoyer l'événement de conversion à Google Ads
            if (typeof (window as any).gtag === 'function') {
              (window as any).gtag('event', 'conversion', {
                'send_to': 'AW-16887311626/sbw4CI7qlbUaEIrav_Q-',
                'value': 2.0,
                'currency': 'EUR'
              });
              console.log('Google Ads conversion sent: Hero Buy CTA Click');
            }
          });
        } else if (text.includes('see demo')) {
          trackedElements.add(el);
          el.addEventListener('click', () => {
            sendEvent('click', 'engagement', 'hero_demo_cta_text_match', 1);
            
            // Envoyer l'événement de conversion à Google Ads
            if (typeof (window as any).gtag === 'function') {
              (window as any).gtag('event', 'conversion', {
                'send_to': 'AW-16887311626/K1ykCNfqlrUaEIrav_Q-',
                'value': 1.0,
                'currency': 'EUR'
              });
              console.log('Google Ads conversion sent: Hero Demo CTA Click');
            }
          });
        } else if (text.includes('buy now') && text.includes('50% off')) {
          trackedElements.add(el);
          el.addEventListener('click', () => {
            sendEvent('click', 'engagement', 'pricing_cta_text_match', 3);
            
            // Envoyer l'événement de conversion à Google Ads
            if (typeof (window as any).gtag === 'function') {
              (window as any).gtag('event', 'conversion', {
                'send_to': 'AW-16887311626/o7hRCIX-lrUaEIrav_Q-',
                'value': 3.0,
                'currency': 'EUR'
              });
              console.log('Google Ads conversion sent: Pricing CTA Click');
            }
          });
        }
      });
    }

    // Fonction pour suivre le défilement
    function trackScroll() {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollTop / (docHeight - winHeight) * 100;

        if (scrollPercent >= 25 && !tracked.current.scroll25) {
          tracked.current.scroll25 = true;
          sendEvent('scroll_depth', 'engagement', 'scroll_25_percent', 25, true);
        }
        
        if (scrollPercent >= 50 && !tracked.current.scroll50) {
          tracked.current.scroll50 = true;
          sendEvent('scroll_depth', 'engagement', 'scroll_50_percent', 50, true);
        }
        
        if (scrollPercent >= 75 && !tracked.current.scroll75) {
          tracked.current.scroll75 = true;
          sendEvent('scroll_depth', 'engagement', 'scroll_75_percent', 75, true);
        }
        
        if (scrollPercent >= 99 && !tracked.current.scroll100) {
          tracked.current.scroll100 = true;
          sendEvent('scroll_depth', 'engagement', 'scroll_100_percent', 100, true);
        }
      };

      window.addEventListener('scroll', handleScroll);
      
      // Nettoyage
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }

  }, []);

  return null; // Ce composant ne rend rien visuellement
}
