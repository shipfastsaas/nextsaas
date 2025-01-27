import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(req: Request) {
  const body = await req.text()
  const signature = req.headers.get('Stripe-Signature') as string

  let event

  try {
    event = await stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return new Response('Webhook signature verification failed', { status: 400 })
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object

      // Verify the payment and grant access
      if (session.payment_status === 'paid') {
        // TODO: Add your logic here
        // - Create user account if doesn't exist
        // - Grant access to the starter kit
        // - Send confirmation email
        // - etc.
      }
      break
    }

    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object
      // Utiliser paymentIntent ou le supprimer si non nécessaire
      console.log('Payment Intent:', paymentIntent);
      // TODO: Handle successful payment if needed
      break
    }

    case 'payment_intent.payment_failed': {
      const paymentIntent = event.data.object
      // Utiliser paymentIntent ou le supprimer si non nécessaire
      console.log('Payment Intent:', paymentIntent);
      // TODO: Handle failed payment if needed
      break
    }

    default: {
      console.log(`Unhandled event type ${event.type}`)
    }
  }

  return NextResponse.json({ received: true })
}
