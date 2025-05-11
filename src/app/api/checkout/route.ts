import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { CANCEL_URL } from '@/lib/stripe'

export async function POST(request: Request) {
  try {
    // Vérifier les variables d'environnement nécessaires
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('Missing STRIPE_SECRET_KEY environment variable');
      return NextResponse.json(
        { error: 'Server configuration error: Missing Stripe key' },
        { status: 500 }
      );
    }

    if (!process.env.NEXT_PUBLIC_APP_URL) {
      console.error('Missing NEXT_PUBLIC_APP_URL environment variable');
      return NextResponse.json(
        { error: 'Server configuration error: Missing app URL' },
        { status: 500 }
      );
    }

    // Construire l'URL de succès avec l'ID de session
    const SUCCESS_URL = `${process.env.NEXT_PUBLIC_APP_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`;
    
    console.log(`🔄 Creating checkout session`);
    
    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: undefined, // Permet à Stripe de collecter l'email
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'NextReady SaaS Template',
              description: 'Complete Next.js SaaS starter kit with authentication, payments, and more.',
              images: ['https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'],
            },
            unit_amount: 14900, // $149.00
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
      // Collecter uniquement l'email du client, pas d'adresse de facturation
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    
    // Fournir des informations d'erreur plus détaillées
    const errorMessage = error.message || 'Unknown error';
    const errorType = error.type || 'unknown_type';
    const errorCode = error.statusCode || 500;
    
    return NextResponse.json(
      { 
        error: 'Stripe Error', 
        message: errorMessage,
        type: errorType 
      },
      { status: errorCode }
    )
  }
}
