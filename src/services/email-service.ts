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
  try {
    // Générer le HTML de l'email
    const html = await renderAsync(
      PurchaseConfirmationEmail({
        customerName,
        productName,
        githubLink,
        amount,
      })
    );

    // Déterminer l'adresse du destinataire
    // En production, envoyer à l'adresse email réelle du client
    // En développement, envoyer à l'adresse de test
    const isProduction = process.env.NODE_ENV === 'production';
    const recipientEmail = isProduction 
      ? customerEmail 
      : 'shipfaststartup@gmail.com';

    // Envoyer l'email via Resend
    const { data, error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: recipientEmail,
      subject: `Confirmation d'achat - ${productName || 'ShipFast Starter Kit'}`,
      html,
    });

    if (error) {
      console.error('Erreur lors de l\'envoi de l\'email de confirmation:', error);
      return { success: false, error };
    }

    console.log('Email de confirmation envoyé avec succès:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Exception lors de l\'envoi de l\'email de confirmation:', error);
    return { success: false, error };
  }
}
