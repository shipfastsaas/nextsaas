'use client'

import Link from 'next/link'
import { CheckCircleIcon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useGoogleAdsPageViewConversion } from '@/components/analytics/google-ads'
import Image from 'next/image'

export default function ThankYouPage() {
  // Activer le suivi de conversion Google Ads
  useGoogleAdsPageViewConversion()
  
  return (
    <div className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Éléments de décoration en arrière-plan */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-rose/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-purple/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-3xl mx-auto px-6 py-12 text-center relative z-10 bg-background-surface/60 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
        <div className="flex justify-center mb-8">
          <div className="rounded-full bg-gradient-to-r from-primary-rose to-primary-purple p-4 shadow-lg">
            <CheckCircleIcon className="h-14 w-14 text-white" />
          </div>
        </div>
        
        <div className="mb-8">
          <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary-rose to-primary-purple bg-clip-text text-transparent">
            Thank you for your purchase! 🎉
          </h1>
          <p className="text-xl text-text-secondary mb-6">
            You will receive an email shortly with instructions to access your purchase.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-rose to-primary-purple mx-auto rounded-full"></div>
        </div>
        
        {/* Cartes d'information */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-xl bg-background-surface border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary-purple/10 p-3">
                <DocumentTextIcon className="h-8 w-8 text-primary-purple" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Documentation</h3>
            <p className="text-text-secondary mb-4">Access comprehensive guides to help you get started with your new template.</p>
          </div>
          
          <div className="p-6 rounded-xl bg-background-surface border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary-rose/10 p-3">
                <EnvelopeIcon className="h-8 w-8 text-primary-rose" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Support</h3>
            <p className="text-text-secondary mb-4">Need help? Our team is ready to assist you with any questions you may have.</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/docs"
            className="rounded-xl bg-gradient-to-r from-primary-rose to-primary-purple px-8 py-4 text-white font-medium shadow-lg shadow-primary-rose/25 hover:shadow-xl hover:opacity-90 transition-all duration-200 flex items-center justify-center"
          >
            <DocumentTextIcon className="h-5 w-5 mr-2" />
            View Documentation
          </Link>
          <Link
            href="mailto:support@shipfaststarter.com"
            className="rounded-xl bg-background-surface px-8 py-4 text-text-primary font-medium shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 flex items-center justify-center"
          >
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
