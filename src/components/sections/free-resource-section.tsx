"use client"

import { useState } from 'react'
import Image from 'next/image'

export function FreeResourceSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) return
    
    setStatus('loading')
    
    // Simulate API call - replace with your actual API endpoint
    try {
      // Mock successful API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setStatus('success')
      setMessage('Your guide is on its way to your inbox!')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
        <div className="absolute -z-10 inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary-rose/10 to-primary-purple/10 shadow-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image 
                    src="/ebook-cover-placeholder.png" 
                    alt="Global SaaS Development Guide" 
                    width={300}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-rose/30 rounded-full filter blur-xl opacity-70" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-purple/30 rounded-full filter blur-xl opacity-70" />
            </div>
          </div>
          
          {/* Right column - Content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-purple/10 text-primary-purple mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
              Free Resource
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl mb-4">
              Global SaaS Development Guide
            </h2>
            
            <p className="text-lg text-text-secondary mb-6">
              Learn how to build, launch, and scale your SaaS product for a global audience with our comprehensive guide.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                'International payment processing strategies',
                'Multi-language implementation best practices',
                'Global compliance and legal considerations',
                'Cultural adaptation for different markets',
                'Case studies of successful global SaaS products'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary-purple flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div>
                <label htmlFor="resource-email" className="sr-only">Email address</label>
                <input
                  id="resource-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-lg border-0 px-4 py-3 text-text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-purple"
                  placeholder="Enter your email to get the guide"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading' || status === 'success'}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full rounded-lg bg-gradient-to-r from-primary-rose to-primary-purple px-4 py-3 text-white font-medium shadow-lg shadow-primary-purple/25 hover:shadow-xl transition-all duration-200 disabled:opacity-70"
              >
                {status === 'loading' ? 'Sending...' : 'Get Free Guide'}
              </button>
              
              {status === 'success' && (
                <div className="text-sm text-green-600 dark:text-green-400">
                  {message}
                </div>
              )}
              
              {status === 'error' && (
                <div className="text-sm text-red-600 dark:text-red-400">
                  {message}
                </div>
              )}
              
              <p className="text-xs text-text-secondary">
                By downloading this guide, you agree to our Privacy Policy. We'll also send you occasional updates about our products and services.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
