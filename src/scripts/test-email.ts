import { resend, SENDER_EMAIL } from '../lib/resend';
import { PurchaseConfirmationEmail } from '../emails/purchase-confirmation';
import { renderAsync } from '@react-email/components';

async function testEmail() {
  console.log('🧪 TEST D\'ENVOI D\'EMAIL');
  console.log('------------------------');
  
  // Vérifier la configuration
  console.log('📋 Configuration:');
  console.log('- RESEND_API_KEY présente:', !!process.env.RESEND_API_KEY);
  console.log('- SENDER_EMAIL:', SENDER_EMAIL);
  
  try {
    // Email de test
    const testEmail = 'rmahieddine04@gmail.com'; // Remplacez par votre email
    
    console.log('📝 Génération du HTML de l\'email');
    // Générer le HTML de l'email
    const html = await renderAsync(
      PurchaseConfirmationEmail({
        customerName: 'Test User',
        productName: 'ShipFast Starter Kit (TEST)',
        githubLink: 'https://github.com/shipfaststarter/template',
        amount: '$199',
      })
    );
    
    console.log('📤 Tentative d\'envoi via Resend API');
    console.log('- De:', SENDER_EMAIL);
    console.log('- À:', testEmail);
    
    // Envoyer l'email via Resend
    const { data, error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: testEmail,
      subject: 'TEST - Confirmation d\'achat',
      html,
    });

    if (error) {
      console.error('❌ ERREUR:', error);
      return;
    }

    console.log('✅ Email envoyé avec succès!');
    console.log('📬 Détails:', data);
  } catch (error) {
    console.error('💥 Exception:', error);
  }
}

// Exécuter le test
testEmail();
