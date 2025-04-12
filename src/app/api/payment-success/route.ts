import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { PurchaseConfirmationEmail } from '@/emails/purchase-confirmation';
import { renderAsync } from '@react-email/components';
import { stripe } from '@/lib/stripe';

// Initialiser Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'purchases@shipfastsaas.com';

/**
 * Envoie un email de confirmation d'achat directement après un paiement réussi
 */
export async function GET(request: Request) {
  try {
    // Récupérer l'ID de session Stripe des paramètres de requête
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');
    
    // Vérifier que l'ID de session est fourni
    if (!sessionId) {
      return NextResponse.json(
        { success: false, error: 'Session ID is required' },
        { status: 400 }
      );
    }
    
    console.log(`🔍 Récupération des détails de la session Stripe: ${sessionId}`);
    
    // Récupérer les détails de la session Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    // Récupérer l'email et le nom du client depuis la session Stripe
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name || 'Valued Customer';
    
    // Vérifier que l'email est disponible
    if (!customerEmail) {
      return NextResponse.json(
        { success: false, error: 'Customer email not found in Stripe session' },
        { status: 400 }
      );
    }
    
    console.log(`📧 Envoi de l'email de confirmation à: ${customerEmail}`);
    
    // Informations du produit
    const productName = 'NextReady SaaS Template';
    const amount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(session.amount_total ? session.amount_total / 100 : 99);
    const githubLink = 'https://github.com/shipfastsaas/nextsaas';
    
    // Générer le HTML de l'email
    const html = await renderAsync(
      PurchaseConfirmationEmail({
        customerName,
        productName,
        githubLink,
        amount,
      })
    );
    
    // Envoyer l'email au client via Resend
    const { data, error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: customerEmail,
      subject: `Your Purchase Confirmation - ${productName}`,
      html,
    });

    if (error) {
      console.error('❌ Error sending email to customer:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }
    
    // Envoyer un email d'alerte à l'administrateur
    const adminEmail = 'rmahieddine04@gmail.com';
    console.log(`📧 Envoi d'une alerte d'achat à: ${adminEmail}`);
    
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: adminEmail,
      subject: `💰 Nouvel achat - ${productName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6366F1; margin-bottom: 20px;">Nouvel achat !</h1>
          <p><strong>Produit :</strong> ${productName}</p>
          <p><strong>Montant :</strong> ${amount}</p>
          <p><strong>Client :</strong> ${customerName}</p>
          <p><strong>Email :</strong> ${customerEmail}</p>
          <p><strong>Date :</strong> ${new Date().toLocaleString()}</p>
          <p><strong>ID de session :</strong> ${sessionId}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #E5E7EB;" />
          <p style="color: #6B7280; font-size: 14px;">Cet email est envoyé automatiquement après chaque achat.</p>
        </div>
      `,
    });
    
    if (adminError) {
      console.error('❌ Error sending alert email to admin:', adminError);
      // On continue même si l'email d'alerte échoue
    } else {
      console.log(`✅ Email d'alerte envoyé avec succès à ${adminEmail}`);
    }

    console.log(`✅ Email de confirmation envoyé avec succès à ${customerEmail}`);
    return NextResponse.json({
      success: true,
      message: `Email sent to ${customerEmail}`,
      emailId: data?.id
    });
  } catch (error: any) {
    console.error('💥 Exception in payment success endpoint:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
