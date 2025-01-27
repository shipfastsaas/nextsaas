'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaGoogle, FaGithub } from 'react-icons/fa'

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Add your authentication logic here
    setTimeout(() => setIsLoading(false), 1000)
  }

  const handleGoogleSignIn = () => {
    // Add Google sign in logic here
  }

  const handleGithubSignIn = () => {
    // Add GitHub sign in logic here
  }

  return (
    <div className="space-y-6">
      {/* Social Sign In Options */}
      <div className="space-y-4">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white/5 px-4 py-2 text-text-primary hover:bg-white/10 transition-colors duration-200"
        >
          <FaGoogle className="w-5 h-5" />
          Continue with Google
        </button>
        <button
          type="button"
          onClick={handleGithubSignIn}
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

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary-rose focus:ring-primary-rose"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-text-secondary">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link href="#" className="font-medium text-primary-rose hover:text-primary-rose/80">
              Forgot password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-full gradient-background px-8 py-3 text-white font-medium shadow-lg shadow-primary-rose/25 hover:shadow-xl transition-all duration-200 disabled:opacity-50"
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </button>

        <p className="text-center text-sm text-text-secondary">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-medium text-primary-rose hover:text-primary-rose/80">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}
