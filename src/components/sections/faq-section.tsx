"use client"

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export function FaqSection() {
  const faqs = [
    {
      question: "What is ShipFastSaaS?",
      answer: "ShipFastSaaS is a comprehensive Next.js starter kit that helps you build any type of web project quickly. Whether you're creating a personal portfolio, e-commerce site, blog, online course platform, or SaaS application, our template provides all the essential components and features you need."
    },
    {
      question: "Do I need to be a developer to use ShipFastSaaS?",
      answer: "While having some development knowledge is helpful, ShipFastSaaS is designed to be accessible to users with various technical backgrounds. The template includes detailed documentation and is built with modern, user-friendly technologies. Non-technical users can still customize many aspects through configuration files."
    },
    {
      question: "What types of projects can I build with ShipFastSaaS?",
      answer: "ShipFastSaaS is versatile and can be used for virtually any web project: personal websites, portfolios, blogs, e-commerce stores, membership sites, online courses, booking systems, and full-featured SaaS applications. The modular architecture allows you to use only what you need for your specific project."
    },
    {
      question: "What features are included?",
      answer: "ShipFastSaaS comes with user management, payment processing, email communication, content management, responsive design, SEO optimization, analytics integration, contact forms, and much more. All components are built with modern best practices and are fully customizable."
    },
    {
      question: "How is ShipFastSaaS different from other templates?",
      answer: "Unlike specialized templates that focus on a single use case, ShipFastSaaS provides a flexible foundation for any web project. It combines the best of modern web development (Next.js, TypeScript, Tailwind CSS) with practical features that every website needs, saving you weeks or months of development time."
    },
    {
      question: "Do you offer support?",
      answer: "Yes, we provide comprehensive documentation and support through our community forum. For specific implementation questions or custom development needs, we also offer premium support options."
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-purple/10 text-primary-purple text-sm font-medium mb-5">
            FAQ
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl mb-6">
            Frequently asked questions
          </h2>
          <p className="text-lg text-text-secondary">
            Find answers to common questions about ShipFastSaaS and how it can help you build your next web project.
          </p>
        </div>
        
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure as="div" key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center px-6 py-5 text-left">
                    <span className="text-lg font-semibold text-text-primary">
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-primary-purple transition-transform duration-200`}
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-200 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-150 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-6 pb-5 pt-2">
                      <p className="text-text-secondary">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-primary-rose/10 to-primary-purple/10 dark:from-primary-rose/5 dark:to-primary-purple/5 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-text-primary dark:text-white mb-2">Ready to start building?</h3>
              <p className="text-text-secondary mb-4">
                Get your Next.js SaaS template now and save weeks of development time.
              </p>
              <div className="flex items-center gap-2 text-text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>One-time payment of $99</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Lifetime updates included</span>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#pricing" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-rose to-primary-purple text-white font-bold shadow-md hover:shadow-lg transition-all duration-200 relative overflow-hidden group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                  <span className="relative z-10">Buy Now</span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-primary dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                  <span>Still have questions?</span>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transform rotate-3 border border-gray-200 dark:border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-primary-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
