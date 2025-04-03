import { ClockIcon } from '@heroicons/react/24/outline'
import { SparklesIcon } from '@heroicons/react/24/solid'

export function TimeSavingSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-rose/5 to-primary-purple/5" />
        <div className="absolute -z-10 inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary-rose/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-rose to-primary-purple">
              Stop Wasting Time on Setup
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Building a SaaS from scratch takes countless hours. Our template eliminates the headaches so you can focus on what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Time Breakdown */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105 duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <ClockIcon className="w-6 h-6 mr-2 text-primary-rose" />
              <span>The Traditional Way: 22+ Hours of Setup</span>
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Email setup</span>
                <span className="font-semibold">4 hours</span>
              </div>
              <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                <div className="h-1 bg-primary-rose rounded-full" style={{ width: '18%' }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Landing page design</span>
                <span className="font-semibold">6 hours</span>
              </div>
              <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                <div className="h-1 bg-primary-rose rounded-full" style={{ width: '27%' }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Stripe webhooks</span>
                <span className="font-semibold">4 hours</span>
              </div>
              <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                <div className="h-1 bg-primary-rose rounded-full" style={{ width: '18%' }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-text-secondary">SEO optimization</span>
                <span className="font-semibold">2 hours</span>
              </div>
              <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                <div className="h-1 bg-primary-rose rounded-full" style={{ width: '9%' }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Google OAuth setup</span>
                <span className="font-semibold">1 hour</span>
              </div>
              <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                <div className="h-1 bg-primary-rose rounded-full" style={{ width: '5%' }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-text-secondary">DNS configuration</span>
                <span className="font-semibold">3 hours</span>
              </div>
              <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                <div className="h-1 bg-primary-rose rounded-full" style={{ width: '14%' }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-text-secondary">API route protection</span>
                <span className="font-semibold">2 hours</span>
              </div>
              <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                <div className="h-1 bg-primary-rose rounded-full" style={{ width: '9%' }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-text-secondary italic">Overthinking...</span>
                <span className="font-semibold">∞ hours</span>
              </div>
              <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                <div className="h-1 bg-primary-rose rounded-full animate-pulse" style={{ width: '100%' }}></div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary-rose">22+ hours of headaches</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Our Solution */}
          <div className="bg-gradient-to-br from-primary-purple/10 to-primary-rose/10 backdrop-blur-sm rounded-2xl shadow-xl p-8 dark:bg-gray-800/50">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <SparklesIcon className="w-6 h-6 mr-2 text-primary-purple" />
              <span>The Next.js Template Way</span>
            </h3>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-lg mb-2 text-primary-purple">Ready in Minutes</h4>
                <p className="text-text-secondary">
                  Clone the repo, configure your environment variables, and you're ready to go. No complex setup required.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-lg mb-2 text-primary-purple">Everything Included</h4>
                <p className="text-text-secondary">
                  Authentication, payments, emails, SEO, analytics, and more — all preconfigured and ready to use.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-lg mb-2 text-primary-purple">Focus on Your Product</h4>
                <p className="text-text-secondary">
                  Stop reinventing the wheel and focus on building your unique features and growing your business.
                </p>
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center justify-center bg-gradient-to-r from-primary-rose to-primary-purple text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform transition-all hover:scale-105 duration-300">
                  <span className="mr-2">Save 20+ hours</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
