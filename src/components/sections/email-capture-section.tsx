"use client"

import EmailCaptureForm from "../email-capture/email-capture-form"
import { EnvelopeIcon, SparklesIcon } from "@heroicons/react/24/outline"

export default function EmailCaptureSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-rose/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-2 bg-primary-rose/10 rounded-full mb-4">
              <EnvelopeIcon className="h-6 w-6 text-primary-rose" />
            </div>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Restez informé des dernières mises à jour
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Recevez notre guide gratuit sur la création d'une SaaS rentable et soyez le premier à connaître nos offres exclusives.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative">
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-rose to-primary-purple text-white text-sm font-bold py-1 px-3 rounded-full shadow-lg">
              <div className="flex items-center gap-1">
                <SparklesIcon className="h-4 w-4" />
                <span>Bonus exclusif</span>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/ebook-cover.jpg" 
                    alt="Guide SaaS" 
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
              </div>
              
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  Guide gratuit : Comment créer une SaaS rentable en 30 jours
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-secondary">Stratégies de développement accéléré</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-secondary">Techniques d'acquisition client éprouvées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-secondary">Modèles de tarification optimaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-secondary">Bonus : 10% de réduction sur notre template</span>
                  </li>
                </ul>
                
                <EmailCaptureForm 
                  title="Recevez votre guide gratuit"
                  subtitle="Plus une réduction exclusive de 10% sur notre template"
                  buttonText="Obtenir mon guide"
                  variant="default"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
