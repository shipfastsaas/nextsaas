"use client"

import Image from 'next/image'
import { FaStar, FaPlay } from 'react-icons/fa'

interface Testimonial {
  content: string
  hasVideo?: boolean
  author: {
    name: string
    role: string
    company?: string
    image: string
  }
}

const testimonials: Testimonial[] = [
  {
    content: "I launched my SaaS in just 6 days instead of 3 months. The template saved me over $15,000 in development costs and helped me get my first 10 paying customers within 2 weeks of launch.",
    author: {
      name: "Mark Johnson",
      role: "Founder of TaskFlow.io",
      company: "TaskFlow",
      image: "/testimonials/cameron.jpg"
    }
  },
  {
    content: "As a non-technical founder, I was able to launch my MVP in a weekend. Within a month, we secured $50K in pre-seed funding based on the professional look and functionality of our platform.",
    author: {
      name: "Michael Chen",
      role: "CEO at ShopWave",
      company: "ShopWave",
      image: "/testimonials/video-thumbnail.jpg"
    }
  },
  {
    content: "I tried 3 other Next.js templates before finding this one. The multi-language support and Stripe integration saved me 120+ hours of coding. My client was impressed with how quickly I delivered their project.",
    author: {
      name: "Emma Rodriguez",
      role: "Senior Developer",
      company: "Freelance",
      image: "/testimonials/tobias.jpg"
    }
  },
  {
    content: "The SEO features helped us increase organic traffic by 43% in just one month. The built-in authentication system saved us from having to pay $29/month for a third-party service.",
    author: {
      name: "David Kim",
      role: "Marketing Director",
      company: "GrowthLabs",
      image: "/testimonials/prokop.jpg"
    }
  },
  {
    content: "We integrated payment processing in less than an hour. Our conversion rate increased by 28% thanks to the optimized checkout flow. The template paid for itself within the first week.",
    author: {
      name: "Aisha Patel",
      role: "Nonprofit Founder",
      image: "/testimonials/prageeth.jpg"
    }
  },
  {
    content: "As someone with basic coding skills, I appreciate how ShipFastSaaS gives me the flexibility to customize when I want to, but handles all the complex parts automatically.",
    author: {
      name: "Thomas Wilson",
      role: "Small Business Owner",
      image: "/testimonials/lee.jpg"
    }
  },
]

const StarRating = () => {
  return (
    <div className="flex space-x-1 text-amber-500 mb-3">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>
  )
}

const VideoButton = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <button className="rounded-full bg-gray-800/70 dark:bg-white/10 p-3 text-white backdrop-blur-sm hover:bg-gray-800/90 dark:hover:bg-white/20 transition-all">
        <FaPlay className="h-6 w-6" />
      </button>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 rounded-full text-sm font-medium mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Limited time offer - 50% off until April 20th</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-white">
            Real results from<br />real customers
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how developers and founders are saving time and money with our Next.js template.
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-900/10 dark:ring-gray-700 h-full"
            >
              <div>
                <div className="flex gap-x-3">
                  <img src={testimonial.author.image} alt="" className="h-12 w-12 rounded-full bg-gray-50" />
                  <div>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                      {testimonial.author.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.author.role}</p>
                  </div>
                </div>
                <blockquote className="mt-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {testimonial.content}
                </blockquote>
              </div>
              <div className="mt-8 flex items-center text-primary-purple">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA intermédiaire après les témoignages */}
        <div className="max-w-3xl mx-auto text-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 rounded-full text-sm font-medium mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Special offer ends in 7 days</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">50% OFF - Now only $99 (was $199)</h3>
          <div className="mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-4 max-w-md mx-auto">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-300">Regular price:</span>
              <span className="text-gray-600 dark:text-gray-300 line-through">$199</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-300">Discount:</span>
              <span className="text-red-600 dark:text-red-400">-$100</span>
            </div>
            <div className="flex justify-between font-bold border-t border-gray-300 dark:border-gray-600 pt-2 mt-2">
              <span className="text-gray-900 dark:text-white">Today's price:</span>
              <span className="text-primary-purple">$99</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="rounded-full bg-gradient-to-r from-primary-rose to-primary-purple px-6 py-3 text-base font-bold text-white shadow-md shadow-primary-purple/20 hover:shadow-lg transition-all duration-200 relative overflow-hidden group flex items-center gap-2 w-full sm:w-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
              <span className="relative z-10">Buy Now - Limited Time Offer</span>
              <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
            <a href="https://readynext.vercel.app" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 px-6 py-3 text-base font-bold text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 w-full sm:w-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>See Demo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
