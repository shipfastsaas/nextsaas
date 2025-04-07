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
        sendEvent('conversion', 'conversion', 'purchase_completed', 199, false);
      }
    }

    // Fonction pour suivre les clics sur les CTA
    function trackCTAClicks() {
      // CTA du header
      document.querySelectorAll('header a[href="#pricing"]').forEach(cta => {
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

      // CTA Buy Next.js Template dans la hero section
      document.querySelectorAll('.hero-section a[href*="#pricing"]').forEach(cta => {
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

      // CTA See Demo dans la hero section
      document.querySelectorAll('.hero-section a[href*="/demo"]').forEach(cta => {
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

      // CTA Get ShipFast Now dans la section pricing
      document.querySelectorAll('.pricing-section a[href*="/checkout"]').forEach(cta => {
        cta.addEventListener('click', () => {
          sendEvent('click', 'engagement', 'pricing_cta_click', 3);
        });
      });
      
      // Recherche par texte pour les boutons qui n'ont pas les classes ou href exacts
      document.querySelectorAll('a, button').forEach(el => {
        const text = el.textContent?.toLowerCase() || '';
        
        if (text.includes('buy next.js template')) {
          el.addEventListener('click', () => {
            sendEvent('click', 'engagement', 'hero_buy_cta_text_match', 2);
          });
        } else if (text.includes('see demo')) {
          el.addEventListener('click', () => {
            sendEvent('click', 'engagement', 'hero_demo_cta_text_match', 1);
          });
        } else if (text.includes('get shipfast now')) {
          el.addEventListener('click', () => {
            sendEvent('click', 'engagement', 'pricing_cta_text_match', 3);
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
