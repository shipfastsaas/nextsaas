"use client"

import Image from 'next/image'

interface Testimonial {
  content: string
  metrics?: {
    value: string
    label: string
  }[]
  author: {
    name: string
    role: string
    company: string
    image: string
  }
}

const testimonials: Testimonial[] = [
  {
    content: "From idea to paying customers in just 2 weeks. The authentication, Stripe integration, and admin dashboard saved us months of development.",
    metrics: [
      { value: "2 weeks", label: "to launch" },
      { value: "$10K", label: "MRR" },
      { value: "150+", label: "customers" }
    ],
    author: {
      name: "Alex Rivera",
      role: "Founder",
      company: "ProductMetrics",
      image: "/testimonials/alex.jpg"
    }
  },
  {
    content: "As a solo founder, this starter kit was exactly what I needed. Launched my SaaS with all the premium features my customers expect.",
    metrics: [
      { value: "1 dev", label: "solo founder" },
      { value: "3 days", label: "to deploy" },
      { value: "5x", label: "faster dev" }
    ],
    author: {
      name: "Sarah Chen",
      role: "Solo Founder",
      company: "AnalyticsPro",
      image: "/testimonials/sarah.jpg"
    }
  },
  {
    content: "The TypeScript + Next.js combo with all SaaS features pre-built is incredible. Perfect for MVPs and production-ready apps.",
    metrics: [
      { value: "100%", label: "TypeScript" },
      { value: "$0", label: "infra cost" },
      { value: "A+", label: "performance" }
    ],
    author: {
      name: "Mike Johnson",
      role: "CTO",
      company: "TechStartup",
      image: "/testimonials/mike.jpg"
    }
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight gradient-text sm:text-4xl">
            Trusted by founders who move fast
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Join hundreds of entrepreneurs who launched their SaaS in record time
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white p-8 dark:from-gray-900 dark:to-gray-800 ring-1 ring-gray-900/10 dark:ring-gray-800"
              >
                <div className="flex items-center gap-4">
                  <Image
                    className="h-12 w-12 rounded-full ring-2 ring-primary-rose/10"
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="font-semibold text-text-primary">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {testimonial.author.role} @ {testimonial.author.company}
                    </div>
                  </div>
                </div>

                <blockquote className="text-base text-text-primary leading-7">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                {testimonial.metrics && (
                  <div className="grid grid-cols-3 gap-4 border-t border-gray-900/10 dark:border-gray-800 pt-6">
                    {testimonial.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-primary-rose">
                          {metric.value}
                        </div>
                        <div className="text-sm text-text-secondary mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="#pricing"
              className="rounded-full px-8 py-3 text-base font-semibold bg-primary-rose text-white shadow-sm hover:bg-primary-rose/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-rose"
            >
              Start building your SaaS →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
