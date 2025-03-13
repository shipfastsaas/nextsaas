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
        
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-6">
            Still have questions? We're here to help.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-purple hover:bg-primary-purple/90 transition-colors duration-200"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
