"use client"

import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { useCheckout } from '@/hooks/use-checkout'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { CONVERSION_LABELS, gtag_report_conversion } from '@/utils/conversion-tracking'

const starterFeatures = [
  {
    name: 'NextJS boilerplate',
    description: 'Modern Next.js 14 with App Router'
  },
  {
    name: 'SEO & Blog',
    description: 'Built-in blog system with SEO optimization'
  },
  {
    name: 'Resend emails',
    description: 'Email notification system integration'
  },
  {
    name: 'Stripe Payment',
    description: 'Payment processing integrations'
  },
  {
    name: 'MongoDB Database',
    description: 'Database options for your application'
  },
  {
    name: 'Google Oauth & Magic Links',
    description: 'Multiple authentication methods'
  },
  {
    name: 'Components & animations',
    description: 'Pre-built UI components with animations'
  },

]

const proFeatures = [
  {
    name: 'Everything in Starter',
    description: 'All features from the Starter plan'
  },
  {
    name: 'Discord community',
    description: 'Access to exclusive developer community'
  },
  {
    name: 'Leaderboard',
    description: 'Built-in leaderboard functionality'
  },
  {
    name: '$1,210 worth of discounts',
    description: 'Special offers on developer tools and services'
  },
  {
    name: 'Lifetime updates',
    description: 'Get all future updates for free'
  }
]

export function PricingSection() {
  const { checkout, isLoading, error } = useCheckout()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [errorState, setError] = useState<string>("");

  // Cette fonction a été remplacée par l'utilisation directe de gtag_report_conversion

  const handleCheckout = async (plan: 'starter'|'pro') => {
    try {
      setSelectedPlan(plan);
      // Suivre la conversion secondaire avant de rediriger vers le checkout
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        // Suivre l'événement comme un événement GA4 personnalisé
        (window as any).gtag('event', 'pricing_button_click', {
          'button_type': 'checkout_initiated',
          'section': 'pricing',
          'plan': plan
        });
        
        // Suivre la conversion Google Ads
        gtag_report_conversion(CONVERSION_LABELS.PRICING_CTA);
      }
      
      // Idéalement, nous passerions le plan à l'API
      // Pour l'instant, nous utilisons la même fonction
      await checkout();
    } catch (err: any) {
      setError(err?.message || 'Une erreur s\'est produite');
    }
  };

  return (
    <section id="pricing" className="relative isolate bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
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

          {/* Starter Plan */}
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-b from-gray-50 to-white p-8 dark:from-gray-800 dark:to-gray-900 shadow-xl ring-1 ring-gray-900/10 dark:ring-gray-800 h-full relative overflow-hidden">
              
              {/* Bannière diagonale */}
              <div className="absolute top-6 right-0 -mr-16 w-56 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-extrabold py-2 text-center transform rotate-45 shadow-lg border-t-2 border-b-2 border-white dark:border-gray-800 z-10">
                Limited Time Offer
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-semibold text-text-primary dark:text-white">
                  Next.js SaaS Kit
                </h3>
                <span className="bg-red-600 px-2 py-1 rounded-md text-xs font-bold text-white shadow-md flex items-center gap-1 border border-white dark:border-gray-800 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                  <span>50% OFF</span>
                </span>
              </div>
              <p className="text-text-secondary mb-4">Complete solution for developers</p>

              <div className="flex items-baseline gap-x-2 mb-2">
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-rose to-primary-purple">$99</span>
                <span className="text-base text-text-secondary">USD</span>
                <span className="text-sm text-red-500 line-through ml-1">$199</span>
              </div>
              
              <div className="bg-gradient-to-r from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-orange-900/50 rounded-lg p-3 mb-4 flex items-center gap-2 border-l-4 border-amber-500 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-amber-800 dark:text-amber-300">Offer ends in <span className="font-extrabold">7 days</span> - <span className="font-extrabold text-red-600 dark:text-red-400">50% OFF</span></span>
              </div>

              <ul role="list" className="space-y-3 mb-8">
                {starterFeatures.map((feature) => (
                  <li key={feature.name} className="flex gap-x-3 items-start">
                    <CheckCircleIcon className="h-6 w-5 flex-none text-primary-purple" aria-hidden="true" />
                    <div>
                      <span className="font-medium text-text-primary dark:text-white">{feature.name}</span>
                      <span className="block text-xs text-text-secondary"> {feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleCheckout('starter')}
                disabled={isLoading}
                className="w-full rounded-full bg-gradient-to-r from-primary-rose to-primary-purple border border-primary-purple px-6 py-4 text-base font-bold text-white shadow-md hover:shadow-lg transition-all duration-200 relative overflow-hidden group flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mb-2"
                data-conversion-tracking="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
                <span className="relative z-10">{isLoading && selectedPlan === 'starter' ? 'Processing...' : 'Buy Now - 50% OFF'}</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>
              
              <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 mt-3 bg-gray-100 dark:bg-gray-800 py-2 rounded-md">Only <span className="font-extrabold text-red-600 dark:text-red-400">7 copies</span> left at this price!</p>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  )
}
