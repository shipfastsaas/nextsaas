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
    
    // Déterminer l'URL de base
    const host = req.headers.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;
    
    // ÉTAPE 1: Envoyer directement un email de test
    // Cette étape garantit qu'un email est envoyé, même si le webhook échoue
    console.log(`📧 Sending direct test email to ${email}...`);
    
    const emailTestUrl = `${baseUrl}/api/test-email?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`;
    const emailResponse = await fetch(emailTestUrl);
    const emailResult = await emailResponse.json();
    
    console.log(`✉️ Direct email test result:`, emailResult);
    
    // ÉTAPE 2: Tester également le webhook pour vérifier qu'il fonctionne
    console.log(`🔒 Testing webhook functionality...`);
    
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
    
    // URL du webhook
    const webhookUrl = `${baseUrl}/api/webhooks`;
    
    console.log(`🔄 Sending test event to webhook: ${webhookUrl}`);
    
    // Ajouter un marqueur pour indiquer que c'est un test et contourner la vérification de signature
    const testEventWithMarker = {
      ...testEvent,
      test_simulation: true,
      test_webhook: true,
      source: 'test-endpoint'
    };
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Stripe-Signature': 'test_signature_for_simulation'
      },
      body: JSON.stringify(testEventWithMarker)
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
