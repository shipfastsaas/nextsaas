'use client'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = Cookies.get('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 })
    setShowBanner(false)
    // Activer Google Analytics et GTM après acceptation
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      })
    }
  }

  const declineCookies = () => {
    Cookies.set('cookie-consent', 'declined', { expires: 365 })
    setShowBanner(false)
    // Désactiver Google Analytics et GTM après refus
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      })
    }
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre utilisation des cookies.
            <a href="/privacy" className="underline ml-1">
              En savoir plus
            </a>
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm font-medium text-white gradient-background rounded-md transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
