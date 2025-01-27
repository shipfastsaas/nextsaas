"use client"

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What&apos;s included in the starter kit?",
    answer: "Everything you need to build a modern SaaS: Authentication, Database, API Routes, Admin Dashboard, User Management, Stripe Integration, Email System, and more. All components are built with TypeScript and Next.js 13."
  },
  {
    question: "Can I use it for commercial projects?",
    answer: "Yes! Your purchase includes a commercial license. Use ShipFast for as many projects as you want, including client work and commercial projects."
  },
  {
    question: "Do I get free updates?",
    answer: "Absolutely! You get lifetime access to all future updates. We regularly add new features and improvements based on user feedback."
  },
  {
    question: "What if I need help?",
    answer: "You get access to our private Discord community where you can get help from the team and other developers. We also have comprehensive documentation and video tutorials."
  },
  {
    question: "Is it beginner-friendly?",
    answer: "While some experience with React and TypeScript is recommended, our starter kit comes with detailed documentation and video tutorials to help you get started."
  },
  {
    question: "What&apos;s your refund policy?",
    answer: "We offer a 30-day money-back guarantee. If you&apos;re not satisfied with ShipFast, just let us know and we&apos;ll refund your purchase."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-center gradient-text sm:text-4xl">
            Frequently asked questions
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
