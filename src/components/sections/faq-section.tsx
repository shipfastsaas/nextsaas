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
    <section id="faq" className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            Find answers to common questions about ShipFastSaaS and how it can help you build your next web project.
          </p>
        </div>
        <div className="mx-auto max-w-3xl divide-y divide-gray-200 dark:divide-gray-800">
          <dl className="space-y-8 divide-y divide-gray-200 dark:divide-gray-800">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-text-primary lg:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base text-text-secondary">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
