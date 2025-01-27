import { useState } from 'react'

// Utiliser stripePromise ou le supprimer si non nécessaire
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export function useCheckout() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const checkout = async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Create Checkout Session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const { url } = await response.json()

      // Redirect to Checkout
      if (!url) throw new Error('No checkout URL received')

      // Redirect to the Stripe Checkout page
      window.location.href = url
    } catch (err) {
      console.error('Error in checkout:', err)
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    checkout,
    isLoading,
    error,
  }
}
