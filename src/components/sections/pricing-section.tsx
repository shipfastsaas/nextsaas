"use client"

import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { useCheckout } from '@/hooks/use-checkout'
import Image from 'next/image'
import { useState } from 'react'

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
    description: 'Priority email support and assistance'
  },
  {
    name: 'Save 80+ hours',
    description: 'Start building your SaaS right away'
  }
]

export function PricingSection() {
  const { checkout, isLoading, error } = useCheckout()
  const [errorState, setError] = useState("");

  const handleCheckout = async () => {
    try {
      await checkout();
    } catch (err: any) {
      setError(err?.message || 'Une erreur s\'est produite');
    }
  };

  return (
    <section id="pricing" className="relative isolate bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-rose to-primary-purple">One-time purchase.</span>
              <br />
              <span className="text-text-primary dark:text-white">Unlimited projects.</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              ShipFast is a one-time purchase with no recurring fees. You get access to the repository and can use it for as many projects as you want.
            </p>
            
            {/* Testimonials Section */}
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <div className="flex -space-x-2 mr-4">
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/testimonials/cameron.jpg" alt="User" width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/testimonials/lee.jpg" alt="User" width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/testimonials/prageeth.jpg" alt="User" width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/testimonials/tobias.jpg" alt="User" width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/testimonials/prokop.jpg" alt="User" width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center text-yellow-400 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 text-2xl font-semibold text-gray-800 dark:text-white">5.0</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">trusted by 100+ developers & founders</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary-purple/10 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <div className="bg-primary-purple/10 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <div className="bg-primary-purple/10 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-purple">
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
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-rose to-primary-purple">$99</span>
                <span className="text-base text-text-secondary">USD</span>
              </div>

              <ul role="list" className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li key={feature.name} className="flex gap-x-3 items-start">
                    <CheckCircleIcon className="h-6 w-5 flex-none text-primary-purple" aria-hidden="true" />
                    <div>
                      <span className="font-medium text-text-primary dark:text-white">{feature.name}</span>
                      <span className="block text-sm text-text-secondary"> {feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <button 
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full rounded-full bg-gradient-to-r from-primary-rose to-primary-purple px-6 py-4 text-base font-bold text-white shadow-md shadow-primary-purple/20 hover:shadow-lg transition-all duration-200 relative overflow-hidden group flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
                <span className="relative z-10">{isLoading ? 'Processing...' : 'Get ShipFast Now'}</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>

              {error && (
                <p className="text-center text-sm text-red-500 mb-4">
                  {error}
                </p>
              )}

              <p className="text-center text-sm text-text-secondary">
                Questions? <a href="#" className="text-primary-purple hover:text-primary-purple/90">Contact support</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
