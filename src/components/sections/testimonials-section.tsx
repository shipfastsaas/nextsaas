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
    content: "ShipFastSaaS helped me launch my online coaching business in just a week. The built-in payment system and content management tools saved me months of development time.",
    author: {
      name: "Mark Johnson",
      role: "Life Coach & Entrepreneur",
      image: "/testimonials/cameron.jpg"
    }
  },
  {
    content: "As a non-technical founder, I was amazed at how quickly I could set up my e-commerce site with ShipFastSaaS. The responsive design looks great on all devices and the SEO features are helping me rank higher.",
    author: {
      name: "Michael Chen",
      role: "E-commerce Store Owner",
      image: "/testimonials/video-thumbnail.jpg"
    }
  },
  {
    content: "The flexibility of ShipFastSaaS is incredible. I've used it to build both my portfolio website and client management system. The customization options let me create exactly what I needed.",
    author: {
      name: "Emma Rodriguez",
      role: "Freelance Designer",
      image: "/testimonials/tobias.jpg"
    }
  },
  {
    content: "We needed a website that could handle our content marketing strategy while also providing user authentication for our members. ShipFastSaaS delivered both beautifully.",
    author: {
      name: "David Kim",
      role: "Marketing Director",
      image: "/testimonials/prokop.jpg"
    }
  },
  {
    content: "The analytics features in ShipFastSaaS have been invaluable for understanding our audience. Setting up our nonprofit's donation system was also surprisingly easy.",
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
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-white">
            Trusted by 100+ creators<br />around the globe
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how people from various industries are using ShipFastSaaS to build their online presence and grow their businesses.
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
      </div>
    </section>
  )
}
