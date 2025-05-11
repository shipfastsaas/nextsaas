'use client'

import Link from 'next/link'
import { CONVERSION_LABELS } from '@/utils/conversion-tracking'

export function BottomCTASection() {
  const trackConversion = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    // Prevent default behavior
    e.preventDefault()
    
    // Track conversion
    if (typeof window !== 'undefined' && window.gtag) {
      // @ts-ignore - Ignoring type error for gtag
      window.gtag('event', label, {
        'send_to': `AW-XXXXXXXXXX/${label}`,
        'transaction_id': ''
      })
    }
    
    // Navigate after a short delay
    setTimeout(() => {
      window.location.href = href
    }, 300)
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950/30 dark:to-purple-950/30 opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary-rose/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Limited time offer badge */}
              <div className="inline-flex mb-6 bg-red-100 dark:bg-red-900/30 px-4 py-2 rounded-full animate-pulse">
                <span className="flex items-center gap-2 text-sm font-bold text-red-600 dark:text-red-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Last Chance - <span className="font-bold">75% OFF</span> ends tomorrow!
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-rose to-primary-purple">Stop wasting time.</span>
                <br />
                <span className="text-text-primary dark:text-white">Start building now.</span>
              </h2>
              
              <p className="text-xl text-text-secondary mb-8 max-w-xl">
                Join <span className="font-bold">400+ successful developers</span> who launched their projects in days instead of months with our premium Next.js starter kit.
              </p>
              
              {/* Testimonial quote */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md mb-8 border border-gray-200 dark:border-gray-700 relative">
                <div className="absolute -top-3 -left-3 text-primary-purple text-5xl">"</div>
                <p className="text-text-secondary italic mb-4 relative z-10">
                  I launched my SaaS in just 6 days instead of 3 months. This template saved me over $15,000 in development costs and helped me get my first paying customers within 2 weeks.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-rose to-primary-purple flex items-center justify-center text-white font-bold">M</div>
                  <div>
                    <p className="font-medium text-text-primary">Mark Johnson</p>
                    <p className="text-sm text-text-secondary">Founder, TaskFlow</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - CTA Card */}
            <div className="lg:w-1/2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                {/* Discount badge */}
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-lg transform rotate-6">
                  75% OFF
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-primary-purple mb-1">400+</p>
                    <p className="text-xs text-text-secondary">Happy Developers</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-primary-purple mb-1">200+</p>
                    <p className="text-xs text-text-secondary">Hours Saved</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-primary-purple mb-1">24/7</p>
                    <p className="text-xs text-text-secondary">Support</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-primary-purple mb-1">30j</p>
                    <p className="text-xs text-text-secondary">Guarantee</p>
                  </div>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-rose to-primary-purple">$149</span>
                  <div className="text-left">
                    <span className="text-sm text-text-secondary">USD</span>
                    <span className="block text-sm text-red-500 line-through">$199</span>
                  </div>
                </div>
                
                {/* What's included */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">What's included:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500 flex-shrink-0">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Complete source code access</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500 flex-shrink-0">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Premium 24/7 support</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500 flex-shrink-0">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Lifetime updates</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500 flex-shrink-0">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">Commercial license</span>
                    </li>
                  </ul>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col gap-4">
                  <a
                    href="#pricing"
                    onClick={(e) => trackConversion(e, CONVERSION_LABELS.HERO_BUY_CTA, '#pricing')}
                    className="rounded-full bg-gradient-to-r from-primary-rose to-primary-purple px-6 py-4 text-base font-bold text-white shadow-md hover:shadow-lg transition-all duration-200 relative overflow-hidden group flex items-center justify-center gap-2"
                    data-conversion-tracking="true"
                    data-conversion-label={CONVERSION_LABELS.HERO_BUY_CTA}
                    data-conversion-value="1.0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                    <span className="relative z-10">Get Started for $149 - Save 25%</span>
                    <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </a>
                  
                  <Link 
                    href="https://readynext.vercel.app"
                    target="_blank"
                    className="rounded-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-6 py-4 text-base font-medium text-text-primary dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                    View Demo
                  </Link>
                </div>
                
                {/* Trust badges */}
                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Secure payment</span>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-500 ml-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Lifetime access</span>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-500 ml-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>30-day guarantee</span>
                </div>
                
                {/* Urgency */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-red-500 font-medium animate-pulse">
                    Only <span className="font-bold">7 copies</span> left at this price!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
