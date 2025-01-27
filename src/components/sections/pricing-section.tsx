"use client"

import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { useCheckout } from '@/hooks/use-checkout'

const features = [
  {
    name: 'All features included',
    description: 'Authentication, billing, user management, and more'
  },
  {
    name: 'Lifetime updates',
    description: 'Get all future updates and improvements for free'
  },
  {
    name: 'Premium support',
    description: 'Access to private Discord community'
  },
  {
    name: 'Save 80+ hours',
    description: 'Start building your SaaS right away'
  }
]

export function PricingSection() {
  const { checkout, isLoading, error } = useCheckout()

  return (
    <section id="pricing" className="relative isolate bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">One-time purchase.</span>
              <br />
              <span className="text-text-primary dark:text-white">Unlimited projects.</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              ShipFast is a one-time purchase with no recurring fees. You get access to the repository and can use it for as many projects as you want.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary-rose/10 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-rose">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <div className="bg-primary-rose/10 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-rose">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <div className="bg-primary-rose/10 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-rose">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-b from-gray-50 to-white p-8 dark:from-gray-800 dark:to-gray-900 shadow-xl ring-1 ring-gray-900/10 dark:ring-gray-800">
              <h3 className="text-2xl font-semibold text-text-primary dark:text-white mb-2">
                Lifetime access
              </h3>
              <p className="text-text-secondary mb-6">for one developer</p>

              <div className="flex items-baseline gap-x-2 mb-6">
                <span className="text-5xl font-bold text-text-primary dark:text-white">$199</span>
                <span className="text-base text-text-secondary">USD</span>
              </div>

              <ul role="list" className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li key={feature.name} className="flex gap-x-3 items-start">
                    <CheckCircleIcon className="h-6 w-5 flex-none text-primary-rose" aria-hidden="true" />
                    <div>
                      <span className="font-medium text-text-primary dark:text-white">{feature.name}</span>
                      <span className="block text-sm text-text-secondary"> {feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <button 
                onClick={checkout}
                disabled={isLoading}
                className="w-full bg-primary-rose text-white rounded-xl py-4 px-6 font-semibold hover:bg-primary-rose/90 transition-colors mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Processing...' : 'Get ShipFast Now'}
              </button>

              {error && (
                <p className="text-center text-sm text-red-500 mb-4">
                  {error}
                </p>
              )}

              <p className="text-center text-sm text-text-secondary">
                Questions? <a href="#" className="text-primary-rose hover:text-primary-rose/90">Contact support</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
