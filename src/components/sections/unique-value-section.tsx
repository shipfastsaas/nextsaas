"use client"

import Image from 'next/image'

interface ComparisonItem {
  feature: string
  shipFast: boolean
  competitors: boolean
}

export function UniqueValueSection() {
  const comparisonItems: ComparisonItem[] = [
    { feature: "Optimisé pour le déploiement global", shipFast: true, competitors: false },
    { feature: "Support multi-langues intégré", shipFast: true, competitors: false },
    { feature: "Paiements internationaux", shipFast: true, competitors: true },
    { feature: "Conformité RGPD/GDPR", shipFast: true, competitors: true },
    { feature: "Optimisation SEO internationale", shipFast: true, competitors: false },
    { feature: "Documentation en plusieurs langues", shipFast: true, competitors: false },
    { feature: "Support technique 24/7", shipFast: true, competitors: false },
    { feature: "Mise à jour régulière", shipFast: true, competitors: true },
  ]

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Pourquoi choisir <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-rose to-primary-purple">ShipFastStarter</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            Notre starter kit se distingue par sa conception orientée vers un déploiement global, permettant à votre SaaS de toucher un public international dès le premier jour.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column - Comparison table */}
          <div>
            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="grid grid-cols-3">
                {/* Header */}
                <div className="bg-gray-50 dark:bg-gray-900 p-4 text-center font-medium">
                  Fonctionnalité
                </div>
                <div className="bg-primary-purple/10 p-4 text-center font-medium text-primary-purple">
                  ShipFastStarter
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 text-center font-medium">
                  Concurrents
                </div>
                
                {/* Rows */}
                {comparisonItems.map((item, index) => (
                  <>
                    <div 
                      key={`feature-${index}`}
                      className={`p-4 border-t border-gray-200 dark:border-gray-800 ${index % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}`}
                    >
                      {item.feature}
                    </div>
                    <div 
                      key={`shipfast-${index}`}
                      className={`p-4 border-t border-gray-200 dark:border-gray-800 text-center ${index % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}`}
                    >
                      {item.shipFast ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500 mx-auto">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500 mx-auto">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div 
                      key={`competitors-${index}`}
                      className={`p-4 border-t border-gray-200 dark:border-gray-800 text-center ${index % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}`}
                    >
                      {item.competitors ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500 mx-auto">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500 mx-auto">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Global map illustration */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-rose to-primary-purple rounded-lg blur opacity-30"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden p-8">
                <h3 className="text-2xl font-bold mb-4">Présence Globale</h3>
                <p className="text-text-secondary mb-6">
                  ShipFastStarter est conçu pour vous aider à atteindre des clients dans le monde entier, avec des fonctionnalités spécifiquement adaptées pour un déploiement international.
                </p>
                
                <div className="relative h-64 w-full">
                  <Image
                    src="/world-map-dots.svg"
                    alt="Global presence map"
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-purple">150+</div>
                    <div className="text-sm text-text-secondary">Pays</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-purple">20+</div>
                    <div className="text-sm text-text-secondary">Langues</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-purple">50+</div>
                    <div className="text-sm text-text-secondary">Devises</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
