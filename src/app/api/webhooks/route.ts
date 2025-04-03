import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { Resend } from 'resend';
import { PurchaseConfirmationEmail } from '@/emails/purchase-confirmation';
import { renderAsync } from '@react-email/components';

// Initialiser Resend directement avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = 'purchases@shipfastsaas.com';

// Mode test - À mettre à false en production
const TEST_MODE = true;

/**
 * Envoie un email de confirmation d'achat
 */
async function sendPurchaseEmail(customerEmail: string, customerName: string, productName: string, githubLink: string, amount: string) {
  try {
    console.log(`📧 Attempting to send email to ${customerEmail} with Resend API...`);
    console.log(`🔑 Resend API Key available: ${!!process.env.RESEND_API_KEY}`);
    console.log(`📨 Sender email: ${SENDER_EMAIL}`);
    
    // Générer le HTML de l'email
    const html = await renderAsync(
      PurchaseConfirmationEmail({
        customerName,
        productName,
        githubLink,
        amount,
      })
    );
    
    // Envoyer l'email via Resend
    const { data, error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: customerEmail,
      subject: `Your Purchase Confirmation - ${productName}`,
      html,
    });

    if (error) {
      console.error('❌ Error sending email:', error);
      return { success: false, error };
    }

    console.log('✅ Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('❌ Exception when sending email:', error);
    return { success: false, error };
  }
}

export async function POST(req: Request) {
  console.log('🔔 Stripe webhook received');
  console.log('⚙️ Environment:', process.env.NODE_ENV);
  console.log('🔐 Webhook secret available:', !!process.env.STRIPE_WEBHOOK_SECRET);
  
  try {
    const body = await req.text()
    const signature = req.headers.get('Stripe-Signature') as string
    
    // Log the request body for debugging
    console.log('📝 Request body (first 100 chars):', body.substring(0, 100) + '...');
    console.log('🔑 Stripe signature:', signature ? signature.substring(0, 20) + '...' : 'MISSING');
    
    if (!process.env.STRIPE_WEBHOOK_SECRET && !TEST_MODE) {
      console.error('❌ STRIPE_WEBHOOK_SECRET missing in environment variables');
      return new Response('Webhook configuration missing', { status: 500 });
    }

    let event;

    try {
      if (TEST_MODE && (body.includes('test_simulation') || !signature)) {
        // Mode test - Parser directement le JSON sans vérifier la signature
        console.log('🧪 TEST MODE: Bypassing signature verification');
        event = JSON.parse(body);
      } else {
        // Mode production - Vérifier la signature
        console.log('🔒 Verifying Stripe signature with secret:', 
                   process.env.STRIPE_WEBHOOK_SECRET ? process.env.STRIPE_WEBHOOK_SECRET.substring(0, 10) + '...' : 'MISSING');
        
        event = await stripe.webhooks.constructEvent(
          body,
          signature,
          process.env.STRIPE_WEBHOOK_SECRET as string
        );
      }
      
      console.log('✅ Stripe event validated:', event.type);
    } catch (err) {
      console.error('❌ Webhook signature verification failed:', err);
      
      // En mode test, si c'est une erreur de signature mais que le body contient checkout.session.completed,
      // on peut quand même traiter l'événement pour les tests
      if (TEST_MODE && body.includes('checkout.session.completed')) {
        console.log('🧪 TEST MODE: Processing event despite signature failure');
        try {
          event = JSON.parse(body);
        } catch (parseErr) {
          console.error('❌ Failed to parse body in test mode:', parseErr);
          return new Response('Invalid JSON payload', { status: 400 });
        }
      } else {
        return new Response('Webhook signature verification failed', { status: 400 });
      }
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        console.log('💳 Payment session completed:', session.id);
        console.log('💰 Payment status:', session.payment_status);
        console.log('💵 Amount:', session.amount_total / 100);
        console.log('👤 Customer details:', JSON.stringify(session.customer_details));

        // Verify the payment and grant access
        if (session.payment_status === 'paid') {
          console.log('✅ Payment confirmed, processing...');
          
          try {
            // Récupérer les informations du client depuis la session
            const customerEmail = session.customer_details?.email
            const customerName = session.customer_details?.name || 'Valued Customer'
            
            console.log('📧 Customer email:', customerEmail);
            console.log('👤 Customer name:', customerName);
            
            // Récupérer les informations du produit
            const productName = 'NextReady SaaS Template'
            const amount = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(session.amount_total ? session.amount_total / 100 : 199)
            
            // Lien vers le repo GitHub du template
            const githubLink = 'https://github.com/shipfastsaas/nextsaas'
            
            if (customerEmail) {
              console.log('📧 Sending confirmation email to:', customerEmail);
              
              // Envoyer l'email de confirmation d'achat
              const emailResult = await sendPurchaseEmail(
                customerEmail,
                customerName,
                productName,
                githubLink,
                amount
              );
              
              if (emailResult.success) {
                console.log(`✅ Confirmation email sent to ${customerEmail}`);
              } else {
                console.error(`❌ Failed to send email to ${customerEmail}:`, emailResult.error);
              }
            } else {
              console.error('❌ Customer email not available in Stripe session');
            }
          } catch (error) {
            console.error('❌ Error processing purchase confirmation:', error);
          }
        } else {
          console.log(`⚠️ Payment not confirmed. Status: ${session.payment_status}`);
        }
        break
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object
        console.log('💸 Payment Intent succeeded:', paymentIntent.id);
        break
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object
        console.log('❌ Payment Intent failed:', paymentIntent.id);
        break
      }

      default: {
        console.log(`ℹ️ Unhandled event type: ${event.type}`);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('💥 Global error in webhook:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
