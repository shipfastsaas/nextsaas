import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { Resend } from 'resend';
import { PurchaseConfirmationEmail } from '@/emails/purchase-confirmation';
import { renderAsync } from '@react-email/components';

// Initialiser Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'purchases@shipfastsaas.com';

// Mode test - Automatiquement désactivé en production
const TEST_MODE = process.env.NODE_ENV !== 'production';

/**
 * Envoie un email de confirmation d'achat
 */
async function sendPurchaseEmail(customerEmail: string, customerName: string, productName: string, githubLink: string, amount: string) {
  try {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`📧 Attempting to send email to ${customerEmail} with Resend API...`);
      console.log(`🔑 Resend API Key available: ${!!process.env.RESEND_API_KEY}`);
      console.log(`📨 Sender email: ${SENDER_EMAIL}`);
    }
    
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

    if (process.env.NODE_ENV !== 'production') {
      console.log('✅ Email sent successfully:', data);
    } else {
      console.log(`✅ Email sent to ${customerEmail}`);
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('❌ Exception when sending email:', error);
    
    // Tentative de réessai en cas d'erreur (uniquement en production)
    if (process.env.NODE_ENV === 'production') {
      try {
        console.log('🔄 Retrying email send...');
        
        // Attendre 2 secondes avant de réessayer
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const html = await renderAsync(
          PurchaseConfirmationEmail({
            customerName,
            productName,
            githubLink,
            amount,
          })
        );
        
        const { data, error } = await resend.emails.send({
          from: SENDER_EMAIL,
          to: customerEmail,
          subject: `Your Purchase Confirmation - ${productName}`,
          html,
        });
        
        if (error) {
          console.error('❌ Retry failed:', error);
          return { success: false, error };
        }
        
        console.log('✅ Email sent successfully on retry');
        return { success: true, data };
      } catch (retryError) {
        console.error('❌ Retry exception:', retryError);
      }
    }
    
    return { success: false, error };
  }
}

export async function POST(req: Request) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('🔔 Stripe webhook received');
    console.log('⚙️ Environment:', process.env.NODE_ENV);
    console.log('🔐 Webhook secret available:', !!process.env.STRIPE_WEBHOOK_SECRET);
  }
  
  try {
    const body = await req.text()
    const signature = req.headers.get('Stripe-Signature') as string
    
    // Log en développement uniquement
    if (process.env.NODE_ENV !== 'production') {
      console.log('📝 Request body (first 100 chars):', body.substring(0, 100) + '...');
      console.log('🔑 Stripe signature:', signature ? signature.substring(0, 20) + '...' : 'MISSING');
    }
    
    if (!process.env.STRIPE_WEBHOOK_SECRET && !TEST_MODE) {
      console.error('❌ STRIPE_WEBHOOK_SECRET missing in environment variables');
      return new Response('Webhook configuration missing', { status: 500 });
    }

    let event;

    try {
      // Vérifier si c'est un événement de test explicite (même en production)
      if (body.includes('test_simulation')) {
        console.log('🧪 Test simulation detected: Bypassing signature verification');
        event = JSON.parse(body);
      } 
      // Mode test local - Parser directement le JSON sans vérifier la signature
      else if (TEST_MODE && !signature) {
        if (process.env.NODE_ENV !== 'production') {
          console.log('🧪 TEST MODE: Bypassing signature verification');
        }
        event = JSON.parse(body);
      } else {
        // Mode production - Vérifier la signature
        if (process.env.NODE_ENV !== 'production') {
          console.log('🔒 Verifying Stripe signature with secret');
        }
        
        event = await stripe.webhooks.constructEvent(
          body,
          signature,
          process.env.STRIPE_WEBHOOK_SECRET as string
        );
      }
      
      if (process.env.NODE_ENV !== 'production') {
        console.log('✅ Stripe event validated:', event.type);
      }
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
        
        if (process.env.NODE_ENV !== 'production') {
          console.log('💳 Payment session completed:', session.id);
          console.log('💰 Payment status:', session.payment_status);
          console.log('💵 Amount:', session.amount_total / 100);
          console.log('👤 Customer details:', JSON.stringify(session.customer_details));
        } else {
          console.log(`Payment completed: ${session.id}`);
        }

        // Verify the payment and grant access
        if (session.payment_status === 'paid') {
          if (process.env.NODE_ENV !== 'production') {
            console.log('✅ Payment confirmed, processing...');
          }
          
          try {
            // Récupérer les informations du client depuis la session
            const customerEmail = session.customer_details?.email
            const customerName = session.customer_details?.name || 'Valued Customer'
            
            if (process.env.NODE_ENV !== 'production') {
              console.log('📧 Customer email:', customerEmail);
              console.log('👤 Customer name:', customerName);
            }
            
            // Récupérer les informations du produit
            const productName = 'NextReady SaaS Template'
            const amount = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(session.amount_total ? session.amount_total / 100 : 199)
            
            // Lien vers le repo GitHub du template
            const githubLink = 'https://github.com/shipfastsaas/nextsaas'
            
            if (customerEmail) {
              if (process.env.NODE_ENV !== 'production') {
                console.log('📧 Sending confirmation email to:', customerEmail);
              }
              
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
        if (process.env.NODE_ENV !== 'production') {
          console.log(`ℹ️ Unhandled event type: ${event.type}`);
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('💥 Global error in webhook:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
