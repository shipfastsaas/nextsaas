import { NextResponse } from 'next/server'
import { stripe, SUCCESS_URL, CANCEL_URL } from '@/lib/stripe'

export async function POST() {
  try {
    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'ShipFast Starter Kit',
              description: 'Complete Next.js SaaS starter kit with authentication, payments, and more.',
              images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.png`],
            },
            unit_amount: 19900, // $199.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: SUCCESS_URL,
      cancel_url: CANCEL_URL,
      metadata: {
        productType: 'starter_kit',
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
