'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaGoogle, FaGithub } from 'react-icons/fa'

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Add your registration logic here
    setTimeout(() => setIsLoading(false), 1000)
  }

  const handleGoogleSignUp = () => {
    // Add Google sign up logic here
  }

  const handleGithubSignUp = () => {
    // Add GitHub sign up logic here
  }

  return (
    <div className="space-y-6">
      {/* Social Sign Up Options */}
      <div className="space-y-4">
        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white/5 px-4 py-2 text-text-primary hover:bg-white/10 transition-colors duration-200"
        >
          <FaGoogle className="w-5 h-5" />
          Continue with Google
        </button>
        <button
          type="button"
          onClick={handleGithubSignUp}
          className="w-full flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white/5 px-4 py-2 text-text-primary hover:bg-white/10 transition-colors duration-200"
        >
          <FaGithub className="w-5 h-5" />
          Continue with GitHub
        </button>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300/30"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-background text-text-secondary">Or continue with</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-text-primary">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="mt-2 block w-full rounded-lg border border-gray-300 bg-white/5 px-4 py-2 text-text-primary shadow-sm focus:border-primary-rose focus:ring-primary-rose"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-text-primary">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="mt-2 block w-full rounded-lg border border-gray-300 bg-white/5 px-4 py-2 text-text-primary shadow-sm focus:border-primary-rose focus:ring-primary-rose"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 bg-white/5 px-4 py-2 text-text-primary shadow-sm focus:border-primary-rose focus:ring-primary-rose"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-text-primary">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 bg-white/5 px-4 py-2 text-text-primary shadow-sm focus:border-primary-rose focus:ring-primary-rose"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 bg-white/5 px-4 py-2 text-text-primary shadow-sm focus:border-primary-rose focus:ring-primary-rose"
          />
        </div>

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 rounded border-gray-300 text-primary-rose focus:ring-primary-rose"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-text-secondary">
            I agree to the{' '}
            <Link href="#" className="font-medium text-primary-rose hover:text-primary-rose/80">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="#" className="font-medium text-primary-rose hover:text-primary-rose/80">
              Privacy Policy
            </Link>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-full gradient-background px-8 py-3 text-white font-medium shadow-lg shadow-primary-rose/25 hover:shadow-xl transition-all duration-200 disabled:opacity-50"
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </button>

        <p className="text-center text-sm text-text-secondary">
          Already have an account?{' '}
          <Link href="/signin" className="font-medium text-primary-rose hover:text-primary-rose/80">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  )
}
