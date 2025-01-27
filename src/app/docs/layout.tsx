"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  {
    title: 'Getting Started',
    links: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Quick Start', href: '/docs/quick-start' },
    ],
  },
  {
    title: 'Core Features',
    links: [
      { title: 'Authentication', href: '/docs/authentication' },
      { title: 'Database', href: '/docs/database' },
      { title: 'API Routes', href: '/docs/api-routes' },
      { title: 'Stripe Integration', href: '/docs/stripe' },
    ],
  },
  {
    title: 'Components',
    links: [
      { title: 'UI Components', href: '/docs/ui-components' },
      { title: 'Forms', href: '/docs/forms' },
      { title: 'Layouts', href: '/docs/layouts' },
    ],
  },
  {
    title: 'Deployment',
    links: [
      { title: 'Deploy to Vercel', href: '/docs/deploy-vercel' },
      { title: 'Environment Variables', href: '/docs/env-variables' },
      { title: 'Production Checklist', href: '/docs/production' },
    ],
  },
]

function ClientSideNav() {
  const pathname = usePathname()
  
  return (
    <nav className="px-4 py-8 overflow-y-auto h-[calc(100vh-4rem)]">
      {navigation.map((section, i) => (
        <div key={i} className="mb-8">
          <h5 className="mb-3 text-sm font-semibold text-text-secondary uppercase tracking-wide">
            {section.title}
          </h5>
          <ul className="space-y-2">
            {section.links.map((link, j) => (
              <li key={j}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2 text-sm rounded-lg hover:bg-background-secondary ${
                    pathname === link.href
                      ? 'text-primary-rose bg-primary-rose/10'
                      : 'text-text-primary hover:text-primary-rose'
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

function DocsSidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 ${
          isOpen ? 'block' : 'hidden'
        } lg:hidden`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 bottom-0 left-0 z-40 w-72 bg-background border-r border-gray-200 dark:border-gray-800 ${
          isOpen ? 'block' : 'hidden'
        } lg:block`}
      >
        <div className="sticky top-0 z-50">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800 bg-background">
            <Link href="/" className="text-xl font-bold gradient-text">
              ShipFast
            </Link>
            <button
              type="button"
              className="lg:hidden text-text-secondary hover:text-text-primary"
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        <ClientSideNav />
      </div>
    </>
  )
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Mobile header */}
      <div className="sticky top-0 z-40 lg:hidden">
        <div className="flex items-center h-16 px-4 bg-background border-b border-gray-200 dark:border-gray-800">
          <button
            type="button"
            className="text-text-secondary hover:text-text-primary"
            onClick={() => setSidebarOpen(true)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          <Link href="/" className="ml-4 text-xl font-bold gradient-text">
            ShipFast
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <DocsSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="lg:pl-72">
        <div className="mx-auto max-w-3xl px-4 py-8 lg:px-8 lg:py-12">
          {children}
        </div>
      </div>
    </div>
  )
}
