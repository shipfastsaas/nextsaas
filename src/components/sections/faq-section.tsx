"use client"

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What technologies does ShipFastStarter use?",
    answer: "ShipFastStarter is built with Next.js 14, TypeScript, Tailwind CSS, MongoDB, and Stripe for payments. It uses the App Router architecture and includes authentication with NextAuth.js, responsive UI components, and a complete user management system."
  },
  {
    question: "How does ShipFastStarter handle authentication?",
    answer: "ShipFastStarter includes a complete authentication system powered by NextAuth.js with multiple providers (email/password, Google, GitHub), secure session management, role-based access control, and protected routes. Everything is pre-configured and ready to use out of the box."
  },
  {
    question: "Is ShipFastStarter SEO optimized?",
    answer: "Yes! ShipFastStarter comes with built-in SEO optimization including dynamic metadata, structured data, automatic sitemap generation, robots.txt configuration, and integration with Google Search Console and Google Analytics. It's designed for global reach and optimal search engine visibility."
  },
  {
    question: "How does the payment system work?",
    answer: "ShipFastStarter integrates Stripe for payment processing with support for one-time payments and subscriptions. It includes pre-built components for checkout, customer portal, subscription management, and webhooks for handling events like payment success, failure, and subscription status changes."
  },
  {
    question: "Can I deploy ShipFastStarter on Vercel?",
    answer: "Absolutely! ShipFastStarter is optimized for Vercel deployment with zero configuration. We've resolved common deployment issues like dependency conflicts between next-auth, @auth/core, and @auth/mongodb-adapter. Just connect your GitHub repo to Vercel and you're ready to go."
  },
  {
    question: "Does ShipFastStarter include a blog system?",
    answer: "Yes, ShipFastStarter includes a complete blog system with markdown support, categories, tags, search functionality, and SEO optimization. You can easily create, edit, and publish blog posts to attract your target audience of developers and entrepreneurs."
  },
  {
    question: "How customizable is ShipFastStarter?",
    answer: "ShipFastStarter is built to be highly customizable. All components are modular and built with Tailwind CSS, making it easy to adapt the design to your brand. The codebase follows best practices with clean architecture, making it easy to extend or modify functionality."
  },
  {
    question: "What kind of support do I get with ShipFastStarter?",
    answer: "Your purchase includes access to comprehensive documentation, video tutorials, and our private Discord community where you can get help from our team and other developers. We also offer priority email support for any technical issues you might encounter."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently asked questions
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-rose to-primary-purple">.</span>
          </h2>
          <p className="mt-4 text-center text-lg text-text-secondary">
            Can&apos;t find what you&apos;re looking for? {' '}
            <a href="#" className="text-primary-rose hover:text-primary-rose/90 font-medium">
              Contact our support
            </a>
          </p>

          <div className="mt-16 space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={index} className="rounded-2xl bg-gray-50 dark:bg-gray-800">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-2xl px-4 py-5 text-left">
                      <span className="font-medium text-text-primary dark:text-white">
                        {faq.question}
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-primary-rose transition-transform duration-200`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pb-5 text-base text-text-secondary">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>

          {/* Additional Support Section */}
          <div className="mt-20">
            <div className="rounded-2xl bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-900 p-8 shadow-lg ring-1 ring-gray-900/10 dark:ring-gray-800">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary dark:text-white">
                    Still have questions?
                  </h3>
                  <p className="mt-2 text-text-secondary">
                    Join our Discord community for instant help and tips from other developers.
                  </p>
                </div>
                <button className="flex-none rounded-xl bg-primary-rose px-8 py-4 text-white shadow-sm hover:bg-primary-rose/90 transition-colors">
                  Join Discord
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
