import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Resend } from 'resend';
import { PurchaseConfirmationEmail } from '../emails/purchase-confirmation';
import { renderAsync } from '@react-email/components';

// Charger les variables d'environnement manuellement
const envPath = path.resolve(process.cwd(), '.env.local');
const envConfig = dotenv.parse(fs.readFileSync(envPath));
for (const k in envConfig) {
  process.env[k] = envConfig[k];
}

// Initialiser Resend directement avec la clé API
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SENDER_EMAIL = 'purchases@shipfastsaas.com';

console.log('🔑 Clé API Resend:', RESEND_API_KEY ? `${RESEND_API_KEY.substring(0, 5)}...` : 'NON DÉFINIE');

if (!RESEND_API_KEY) {
  console.error('❌ La clé API Resend n\'est pas définie dans .env.local');
  process.exit(1);
}

const resend = new Resend(RESEND_API_KEY);

/**
 * Simule l'envoi d'un email de confirmation d'achat
 */
async function testPurchaseEmail() {
  console.log('🧪 TEST D\'EMAIL DE CONFIRMATION D\'ACHAT');
  console.log('--------------------------------------');
  
  // Informations de l'acheteur simulé
  const customerEmail = 'rmahieddine04@gmail.com';
  const customerName = 'Riadh Mahieddine';
  const productName = 'NextReady SaaS Template';
  const amount = '$199';
  const githubLink = 'https://github.com/shipfastsaas/nextsaas';
  
  console.log('\n📧 Détails de l\'achat simulé:');
  console.log('- Email:', customerEmail);
  console.log('- Nom:', customerName);
  console.log('- Produit:', productName);
  console.log('- Montant:', amount);
  
  try {
    console.log('\n🔄 Génération du HTML de l\'email...');
    // Générer le HTML de l'email
    const html = await renderAsync(
      PurchaseConfirmationEmail({
        customerName,
        productName,
        githubLink,
        amount,
      })
    );
    
    console.log('📤 Envoi de l\'email via Resend API...');
    console.log('- De:', SENDER_EMAIL);
    console.log('- À:', customerEmail);
    
    // Envoyer l'email via Resend
    const { data, error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: customerEmail,
      subject: `Confirmation d'achat - ${productName}`,
      html,
    });

    if (error) {
      console.error('❌ ERREUR LORS DE L\'ENVOI:', error);
      return;
    }

    console.log('✅ EMAIL ENVOYÉ AVEC SUCCÈS!');
    console.log('📬 ID de l\'email:', data?.id);
    console.log('\n🔍 Vérifiez votre boîte de réception pour confirmer la réception.');
  } catch (error) {
    console.error('💥 EXCEPTION:', error);
  }
}

// Exécuter le test
testPurchaseEmail();
