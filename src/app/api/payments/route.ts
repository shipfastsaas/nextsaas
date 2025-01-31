import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Récupérer les paiements depuis Stripe
    const charges = await stripe.charges.list({
      limit: 100,
    })

    return NextResponse.json({
      payments: charges.data.map(charge => ({
        id: charge.id,
        amount: charge.amount / 100,
        status: charge.status,
        created: new Date(charge.created * 1000).toISOString(),
        currency: charge.currency,
        email: charge.billing_details?.email || 'No email'
      }))
    })
  } catch (error) {
    console.error('Failed to fetch payments:', error)
    return NextResponse.json(
      { error: 'Failed to fetch payments' },
      { status: 500 }
    )
  }
}
