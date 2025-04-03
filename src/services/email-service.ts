import { resend, SENDER_EMAIL } from '@/lib/resend';
import { PurchaseConfirmationEmail } from '@/emails/purchase-confirmation';
import { renderAsync } from '@react-email/components';

interface SendPurchaseConfirmationEmailParams {
  customerEmail: string;
  customerName?: string;
  productName?: string;
  githubLink?: string;
  amount?: string;
}

/**
 * Envoie un email de confirmation d'achat à un client
 */
export async function sendPurchaseConfirmationEmail({
  customerEmail,
  customerName,
  productName,
  githubLink,
  amount,
}: SendPurchaseConfirmationEmailParams) {
  console.log('🚀 Début de l\'envoi d\'email de confirmation d\'achat');
  console.log('📧 Détails de l\'email:');
  console.log('- Destinataire:', customerEmail);
  console.log('- Nom du client:', customerName);
  console.log('- Produit:', productName);
  console.log('- Montant:', amount);
  
  try {
    console.log('🔄 Vérification de la configuration Resend');
    if (!SENDER_EMAIL) {
      console.error('❌ SENDER_EMAIL non configuré dans lib/resend');
      return { success: false, error: 'SENDER_EMAIL non configuré' };
    }
    
    console.log('📝 Génération du HTML de l\'email');
    // Générer le HTML de l'email
    const html = await renderAsync(
      PurchaseConfirmationEmail({
        customerName,
        productName,
        githubLink,
        amount,
      })
    );
    console.log('✅ HTML généré avec succès');

    // Toujours envoyer à l'adresse email du client
    // Resend permet maintenant d'envoyer à n'importe quelle adresse avec un domaine vérifié
    const recipientEmail = customerEmail;
    console.log('📤 Préparation de l\'envoi à:', recipientEmail);
    console.log('📤 Expéditeur:', SENDER_EMAIL);

    console.log('🔄 Tentative d\'envoi via Resend API');
    // Envoyer l'email via Resend
    const { data, error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: recipientEmail,
      subject: `Confirmation d'achat - ${productName || 'ShipFast Starter Kit'}`,
      html,
    });

    if (error) {
      console.error('❌ Erreur lors de l\'envoi de l\'email de confirmation:', error);
      return { success: false, error };
    }

    console.log('✅ Email de confirmation envoyé avec succès:', data);
    return { success: true, data };
  } catch (error) {
    console.error('💥 Exception lors de l\'envoi de l\'email:', error);
    return { success: false, error };
  }
}
