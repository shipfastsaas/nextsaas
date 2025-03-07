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
    content: "Superstarter was extremely easy to get set up and deployed. I had a working project in just a few minutes!",
    author: {
      name: "Lee Robinson",
      role: "VP of Developer Experience",
      company: "@vercel",
      image: "/testimonials/lee.jpg"
    }
  },
  {
    content: "I've stumbled upon the most cutting-edge SaaS starter I've ever encountered - it's not just about the polished visuals, but the entire technical foundation is built on modern best practices and tools, making it a true game-changer for developers.",
    author: {
      name: "Prokop PS Simek",
      role: "CEO at Heroes, the Developer Experience company",
      image: "/testimonials/prokop.jpg"
    }
  },
  {
    hasVideo: true,
    content: "",
    author: {
      name: "Cameron Blackwood",
      role: "Founder",
      image: "/testimonials/cameron.jpg"
    }
  },
  {
    content: "Superstarter helped a ton with getting my project off the ground. You get authentication, prisma db connections, migrations, marketing and sales funnels for your app, the damn complex payment subscription hooks setup...",
    author: {
      name: "Tobias Arweiler",
      role: "Indie Hacker & Freelance Software Engineer",
      image: "/testimonials/tobias.jpg"
    }
  },
  {
    content: "As an experienced developer and an indie hacker, I prioritize speed when shipping products. After trying out Superstarter, I was genuinely impressed! Its built-in features allowed me to launch my latest product in just a few days.",
    author: {
      name: "Prageeth Silva",
      role: "AI & Tech enthusiast | Indie Hacker",
      image: "/testimonials/prageeth.jpg"
    }
  },
  {
    content: "Superstarter has helped me launch a new product in record time - it gives you everything you need to get up and running quickly, and provides a solid foundation to build upon.",
    author: {
      name: "Cameron Blackwood",
      role: "Founder",
      image: "/testimonials/cameron.jpg"
    }
  }
]

const StarRating = () => {
  return (
    <div className="flex space-x-1 text-amber-400 mb-2">
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
      <button className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm hover:bg-white/20 transition-all">
        <FaPlay className="h-6 w-6" />
      </button>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Trusted by 600+ developers<br />around the globe
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Read what customers love about Superstarter and how it helped them to launch their product.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col rounded-xl bg-gray-900 p-6 ${testimonial.hasVideo ? 'overflow-hidden' : ''}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    className="h-full w-full object-cover"
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <div className="font-medium">
                    {testimonial.author.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.author.role}
                    {testimonial.author.company && (
                      <span className="text-gray-500"> {testimonial.author.company}</span>
                    )}
                  </div>
                </div>
              </div>

              <StarRating />

              {testimonial.hasVideo ? (
                <div className="relative aspect-video w-full rounded-lg bg-gray-800 overflow-hidden">
                  <Image 
                    src="/testimonials/video-thumbnail.jpg" 
                    alt="Video testimonial" 
                    fill 
                    className="object-cover" 
                  />
                  <VideoButton />
                </div>
              ) : (
                <blockquote className="flex-1 text-sm text-gray-300 leading-relaxed">
                  {testimonial.content}
                  {testimonial.content.length > 150 && (
                    <div className="mt-2">
                      <button className="text-xs font-medium text-blue-400 hover:text-blue-300">
                        Read more
                      </button>
                    </div>
                  )}
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
