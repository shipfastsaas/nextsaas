import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function GET(req: Request) {
  console.log('🧪 Test webhook endpoint called');
  
  try {
    // Récupérer l'email du query parameter
    const url = new URL(req.url);
    const email = url.searchParams.get('email') || 'rmahieddine04@gmail.com';
    const name = url.searchParams.get('name') || 'Riadh Mahieddine';
    
    console.log(`📧 Creating test checkout session for: ${email}`);
    
    // Créer un événement de test qui simule un checkout.session.completed
    const testEvent = {
      id: `evt_test_${Date.now()}`,
      type: 'checkout.session.completed',
      data: {
        object: {
          id: `cs_test_${Date.now()}`,
          payment_status: 'paid',
          amount_total: 19900,
          customer_details: {
            email: email,
            name: name
          }
        }
      }
    };
    
    // Envoyer une requête POST au webhook
    const webhookUrl = process.env.NEXT_PUBLIC_APP_URL 
      ? `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks` 
      : 'http://localhost:3000/api/webhooks';
    
    console.log(`🔄 Sending test event to webhook: ${webhookUrl}`);
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Stripe-Signature': 'test_signature'
      },
      body: JSON.stringify(testEvent)
    });
    
    const responseText = await response.text();
    
    console.log(`✅ Webhook response status: ${response.status}`);
    console.log(`📄 Webhook response: ${responseText}`);
    
    return NextResponse.json({
      success: true,
      message: 'Test webhook event sent',
      webhookResponse: {
        status: response.status,
        body: responseText
      }
    });
  } catch (error: any) {
    console.error('💥 Exception in test webhook endpoint:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
