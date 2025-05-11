'use client'

import Image from 'next/image'
import { ShoppingCartIcon, PlayCircleIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { CONVERSION_LABELS, trackConversion } from '@/utils/conversion-tracking'
import { useEffect } from 'react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-rose/5 to-primary-purple/5" />
        
        {/* Simple grid pattern */}
        <div className="absolute -z-10 inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Elegant accent elements */}
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary-rose/10 rounded-full blur-3xl" />
      </div>

      <div className="relative px-6 py-24 mx-auto max-w-7xl lg:px-8 lg:py-32">
        {/* Top Badge Section */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <div className="flex -space-x-3">
              <Image 
                src="/avatars/avatar-1.png" 
                alt="User Avatar" 
                width={36} 
                height={36} 
                className="rounded-full border-4 border-primary-rose shadow-lg hover:scale-110 transition-transform z-40"
              />
              <Image 
                src="/avatars/avatar-2.png" 
                alt="User Avatar" 
                width={36} 
                height={36} 
                className="rounded-full border-4 border-primary-purple shadow-lg hover:scale-110 transition-transform z-30"
              />
              <Image 
                src="/avatars/avatar-3.png" 
                alt="User Avatar" 
                width={36} 
                height={36} 
                className="rounded-full border-4 border-blue-400 shadow-lg hover:scale-110 transition-transform z-20"
              />
              <Image 
                src="/avatars/avatar-4.png" 
                alt="User Avatar" 
                width={36} 
                height={36} 
                className="rounded-full border-4 border-green-400 shadow-lg hover:scale-110 transition-transform z-10"
              />
            </div>
            <span className="text-sm font-medium text-text-secondary">Trusted by 400+ developers</span>
          </div>
        </div>
        
        {/* Main Content - Centered Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-purple/10 rounded-full text-primary-purple text-sm font-medium mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            <span>Save 200+ hours of development time</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-rose to-primary-purple">Next.js Starter Kit: Build in Days, Not Months</span>
          </h1>

          <p className="text-xl text-text-secondary mb-4 max-w-2xl mx-auto">
            Unlike other templates, our Next.js 14 kit starter includes <strong>everything you need</strong> in one package: authentication, payments, and beautiful UI. <strong>Save 200+ hours of development time for just $149.</strong>
          </p>
      

          {/* CTA Buttons - Moved up for visibility on first screen */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {/* CTA Button with Urgency Badge */}
            <div className="relative">
              
              <a
                href="#pricing"
                onClick={(e) => trackConversion(e, CONVERSION_LABELS.HERO_BUY_CTA, '#pricing')}
                className="rounded-full bg-gradient-to-r from-primary-rose to-primary-purple px-8 py-4 text-lg font-bold text-white shadow-md shadow-primary-purple/20 hover:shadow-lg transition-all duration-200 relative overflow-hidden group flex items-center gap-3"
                data-conversion-tracking="true"
                data-conversion-label={CONVERSION_LABELS.HERO_BUY_CTA}
                data-conversion-value="1.0"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="relative z-10">Get Started for $149 - Save 25%</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </div>
            
            {/* Demo Button */}
            <a
              href="https://readynext.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => trackConversion(e, CONVERSION_LABELS.HERO_DEMO_CTA, 'https://readynext.vercel.app')}
              className="rounded-full bg-white border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700 px-8 py-4 text-lg font-bold text-text-primary hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-3"
              data-conversion-tracking="true"
              data-conversion-label={CONVERSION_LABELS.HERO_DEMO_CTA}
              data-conversion-value="1.0"
            >
              <span>See Demo</span>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-500" />
            </a>
          </div>

          {/* Social Proof Section - Testimonial and MRR Stats */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-3xl mx-auto">
            {/* Testimonial Quote - Plus compact */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-sm border-l-4 border-primary-purple md:w-1/2">
              <p className="text-sm text-text-secondary italic mb-1">
                "I launched my SaaS in just 6 days instead of 3 months. This template saved me over $15,000 in development costs."
              </p>
              <div className="flex items-center gap-2">
                <img src="/testimonials/cameron.jpg" alt="Mark Johnson" className="w-6 h-6 rounded-full" />
                <div>
                  <p className="text-xs font-semibold text-text-primary">Mark Johnson</p>
                  <p className="text-xs text-text-secondary">TaskFlow.io</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-yellow-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            {/* MRR Stats Card - Plus compact */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-sm border-l-4 border-green-500 md:w-1/2">
              <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-1 text-center">
                Customer Results
              </p>
              <div className="flex justify-center">
                <img 
                  src="/stripe-sold.png" 
                  alt="MRR Growth" 
                  className="h-16 object-contain rounded" 
                />
              </div>
              <p className="text-xs text-center mt-1 text-gray-500 dark:text-gray-400">
                +48.9% MRR growth with our template
              </p>
            </div>
          </div>

          {/* What's Included Section - Technical Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 max-w-3xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary-purple mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
              <h3 className="text-sm font-semibold text-text-primary">Authentication</h3>
              <p className="text-xs text-text-secondary">Google OAuth & Magic Links</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary-rose mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              <h3 className="text-sm font-semibold text-text-primary">Payments</h3>
              <p className="text-xs text-text-secondary">Stripe Integration</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500 mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <h3 className="text-sm font-semibold text-text-primary">Email System</h3>
              <p className="text-xs text-text-secondary">Mailgun Integration</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-500 mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>
              <h3 className="text-sm font-semibold text-text-primary">SEO Ready</h3>
              <p className="text-xs text-text-secondary">Optimized for Search</p>
            </div>
          </div>

          {/* What You Get Section - Purchase Details */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-md mb-8 max-w-3xl mx-auto border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-text-primary mb-4 text-center">What You Get With Your Purchase</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-text-primary">Complete Source Code</p>
                  <p className="text-sm text-text-secondary">Full access to all source files and assets</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-text-primary">Lifetime Updates</p>
                  <p className="text-sm text-text-secondary">All future updates and improvements included</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-text-primary">Premium Support</p>
                  <p className="text-sm text-text-secondary">24/7 community support & priority email help</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-text-primary">Comprehensive Documentation</p>
                  <p className="text-sm text-text-secondary">Detailed setup and customization guides</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-text-primary">Commercial License</p>
                  <p className="text-sm text-text-secondary">Use for unlimited personal & client projects</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-text-primary">30-Day Money-Back Guarantee</p>
                  <p className="text-sm text-text-secondary">No questions asked refund policy</p>
                </div>
              </div>
            </div>
          </div>



      
        </div>
        {/* Technology Logos Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider">BUILT WITH THE TOOLS YOU LOVE</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8">
            <div className="group relative">
              <div className="h-10 w-auto flex items-center justify-center">
                <Image 
                  src="/logo/nextjs-icon.svg" 
                  alt="Next.js" 
                  width={40} 
                  height={40} 
                  className="object-contain h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Next.js</span>
            </div>
            
            <div className="group relative">
              <div className="h-10 w-auto flex items-center justify-center">
                <Image 
                  src="/logo/mongodb-logo.svg" 
                  alt="MongoDB" 
                  width={100} 
                  height={40} 
                  className="object-contain h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">MongoDB</span>
            </div>
            
            <div className="group relative">
              <div className="h-10 w-auto flex items-center justify-center">
                <Image 
                  src="/logo/resend-logo.webp" 
                  alt="Resend" 
                  width={100} 
                  height={40} 
                  className="object-contain h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Resend</span>
            </div>

            <div className="group relative">
              <div className="h-10 w-auto flex items-center justify-center">
                <Image 
                  src="/logo/Logo_Google_Analytics.svg.png" 
                  alt="Resend" 
                  width={100} 
                  height={40} 
                  className="object-contain h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Resend</span>
            </div>

            <div className="group relative">
              <div className="h-10 w-auto flex items-center justify-center">
                <Image 
                  src="/logo/Google_Ads_logo.svg.png" 
                  alt="Resend" 
                  width={100} 
                  height={40} 
                  className="object-contain h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Resend</span>
            </div>

            <div className="group relative">
              <div className="h-10 w-auto flex items-center justify-center">
                <Image 
                  src="/logo/Google-Tag-Manager.jpg" 
                  alt="Resend" 
                  width={100} 
                  height={40} 
                  className="object-contain h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Resend</span>
            </div>
            
            <div className="group relative">
              <div className="h-10 w-auto flex items-center justify-center">
                <Image 
                  src="/logo/tailwind-css-logo.png" 
                  alt="Tailwind CSS" 
                  width={100} 
                  height={40} 
                  className="object-contain h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Tailwind CSS</span>
            </div>
            
            <div className="group relative">
              <div className="h-10 w-auto flex items-center justify-center">
                <Image 
                  src="/logo/stripe-logo.gif" 
                  alt="Stripe" 
                  width={80} 
                  height={40} 
                  className="object-contain h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Stripe</span>
            </div>
            
            <div className="group relative">
              <div className="h-10 w-auto flex items-center justify-center">
                <Image 
                  src="/logo/Vercel-Logo.jpg" 
                  alt="Vercel" 
                  width={80} 
                  height={40} 
                  className="object-contain h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Vercel</span>
            </div>
          </div>
        </div>

        {/* Bottom Image Section */}
        <div className="relative mt-16 mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Illustration-SFS.png"
              alt="ShipFast Starter Kit"
              width={1200}
              height={600}
              className="w-full h-auto object-cover rounded-2xl"
            />
            
            {/* Feature Badges */}
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary-purple mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              <span className="text-xs font-medium">Next.js 14</span>
            </div>
            
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary-rose mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                </svg>
                <span className="text-xs font-medium">Authentication</span>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary-purple mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
                <span className="text-xs font-medium">Payments</span>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary-rose mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="text-xs font-medium">Email</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
