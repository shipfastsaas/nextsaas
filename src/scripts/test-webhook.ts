import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

// Charger les variables d'environnement manuellement
const envPath = path.resolve(process.cwd(), '.env.local');
const envConfig = dotenv.parse(fs.readFileSync(envPath));
for (const k in envConfig) {
  process.env[k] = envConfig[k];
}

/**
 * Simule un événement Stripe checkout.session.completed
 */
async function simulateStripeWebhook() {
  console.log('🔄 Simulation d\'un événement Stripe checkout.session.completed');
  
  // Créer un événement factice similaire à celui de Stripe
  const mockEvent = {
    id: 'evt_test_' + Date.now(),
    type: 'checkout.session.completed',
    data: {
      object: {
        id: 'cs_test_' + Date.now(),
        payment_status: 'paid',
        amount_total: 9900, // $99.00
        customer_details: {
          email: 'rmahieddine04@gmail.com', // Remplacez par votre email
          name: 'Test User'
        }
      }
    }
  };
  
  try {
    // Vérifier que le webhook secret est configuré
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      console.error('❌ STRIPE_WEBHOOK_SECRET n\'est pas configuré dans .env.local');
      return;
    }
    
    console.log('📤 Envoi de la requête au webhook...');
    
    // Envoyer la requête au webhook
    const response = await fetch('http://localhost:3000/api/webhooks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Normalement, Stripe signe la requête, mais nous ne pouvons pas le faire ici
        // Le webhook va échouer à la vérification de signature
        'Stripe-Signature': 'test_signature'
      },
      body: JSON.stringify(mockEvent)
    });
    
    console.log('📥 Réponse reçue:', response.status);
    console.log('Message:', await response.text());
    
    console.log('\n⚠️ IMPORTANT: Ce test échouera probablement à cause de la vérification de signature.');
    console.log('Pour un test complet, utilisez Stripe CLI:');
    console.log('1. Installez Stripe CLI: https://stripe.com/docs/stripe-cli');
    console.log('2. Exécutez: stripe listen --forward-to localhost:3000/api/webhooks');
    console.log('3. Dans un autre terminal: stripe trigger checkout.session.completed');
  } catch (error) {
    console.error('❌ Erreur lors de la simulation:', error);
  }
}

// Exécuter le test
simulateStripeWebhook();
