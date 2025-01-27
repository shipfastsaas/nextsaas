import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute top-0 -left-4 w-72 h-72 gradient-background-30 rounded-full filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-primary-orange/30 rounded-full filter blur-3xl opacity-70 animate-pulse delay-75" />
        <div className="absolute -z-10 inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative px-6 py-24 mx-auto max-w-7xl lg:px-8 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <span className="px-3 py-1 text-sm text-primary-rose gradient-background-10 rounded-full">
                Next.js 14 Starter Kit
              </span>
              <span className="flex items-center text-sm text-text-secondary">
                <span className="w-2 h-2 mr-2 rounded-full bg-green-500 animate-pulse" />
                Ready to Ship
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              <span className="gradient-text">Ship Faster.</span>
              <br />
              <span className="text-text-primary">Focus on Product.</span>
            </h1>

            <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0">
              Launch your SaaS in days, not months. Our Next.js starter kit includes everything you need: Authentication, Database, Payments, and beautiful UI components.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="w-full sm:w-auto rounded-full gradient-background px-8 py-4 text-white font-medium shadow-lg shadow-primary-rose/25 hover:shadow-xl transition-all duration-200 text-center"
              >
                Get Started Now
              </a>
              <a
                href="#"
                className="w-full sm:w-auto rounded-full bg-background-surface px-8 py-4 text-text-primary font-medium shadow hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
                </svg>
                Watch Demo
              </a>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 pt-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/50 p-6 backdrop-blur-sm ring-1 ring-gray-900/5 dark:ring-white/5 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-rose/10 to-primary-orange/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="h-12 w-12 rounded-full gradient-background-10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-rose">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-3xl font-bold gradient-text">200+</div>
                        <div className="text-sm text-text-secondary">Active Developers</div>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-gradient-to-r from-primary-rose to-primary-orange rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/50 p-6 backdrop-blur-sm ring-1 ring-gray-900/5 dark:ring-white/5 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-rose/10 to-primary-orange/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="h-12 w-12 rounded-full gradient-background-10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-rose">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-3xl font-bold gradient-text">4.9/5</div>
                        <div className="text-sm text-text-secondary">Average Rating</div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/50 p-6 backdrop-blur-sm ring-1 ring-gray-900/5 dark:ring-white/5 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-rose/10 to-primary-orange/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="h-12 w-12 rounded-full gradient-background-10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-rose">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-3xl font-bold gradient-text">24/7</div>
                        <div className="text-sm text-text-secondary">Discord Support</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-green-500">Online now</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <p className="text-sm leading-6 text-gray-900">
                  Don&apos;t waste time building everything from scratch. We&apos;ve already done the heavy lifting
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="relative lg:block">
            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
              {/* Code Preview */}
              <div className="relative rounded-2xl bg-gray-900 p-4 ring-1 ring-gray-800/10 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex flex-col gap-2 font-mono text-sm text-gray-300">
                  <div>
                    <span className="text-purple-400">import</span> <span className="text-blue-400">&#123; useEffect &#125;</span> <span className="text-purple-400">from</span> <span className="text-green-400">&apos;react&apos;</span>
                  </div>
                  <div>
                    <span className="text-purple-400">import</span> <span className="text-blue-400">&#123; useState &#125;</span> <span className="text-purple-400">from</span> <span className="text-green-400">&apos;react&apos;</span>
                  </div>
                </div>
              </div>

              {/* Illustration */}
              <div className="mt-8 relative">
                <Image
                  src="/Illustration-SFS.png"
                  alt="ShipFast Illustration"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>

          
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
