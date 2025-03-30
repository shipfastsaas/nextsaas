"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null // Prevent flash of incorrect theme
  }

  return (
    <header className="fixed w-full z-50 px-4 py-3 flex justify-center">
      <div className={`max-w-5xl w-full rounded-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-gray-900/95 dark:bg-gray-800/95 shadow-md'
      } px-3 py-2 flex items-center justify-between`}>
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="ShipFast"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                isScrolled 
                  ? 'text-text-primary hover:text-primary-rose dark:text-white dark:hover:text-primary-rose' 
                  : 'text-gray-200 hover:text-primary-rose'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-2 rounded-full ${
              isScrolled 
                ? 'hover:bg-gray-100 dark:hover:bg-gray-700/50' 
                : 'hover:bg-white/10'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5 text-gray-200" />
            ) : (
              <MoonIcon className={`h-5 w-5 ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`} />
            )}
          </button>

          {/* CTA Button */}
          <a
            href="#pricing"
            className="rounded-full bg-gradient-to-r from-primary-rose to-primary-purple px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-primary-purple/20 hover:shadow-lg transition-all duration-200 relative overflow-hidden group flex items-center gap-1.5"
          >
            <ShoppingCartIcon className="h-4 w-4" />
            <span className="relative z-10">Buy Next.js Template</span>
            <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </a>
        </div>
      </div>
    </header>
  )
}
