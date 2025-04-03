import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { PurchaseConfirmationEmail } from '@/emails/purchase-confirmation';
import { renderAsync } from '@react-email/components';

// Initialiser Resend directement avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = 'purchases@shipfastsaas.com';

export async function GET(req: Request) {
  console.log('🧪 Test email endpoint called');
  
  try {
    // Récupérer l'email du query parameter
    const url = new URL(req.url);
    const email = url.searchParams.get('email') || 'rmahieddine04@gmail.com';
    const name = url.searchParams.get('name') || 'Riadh Mahieddine';
    
    console.log(`📧 Sending test purchase email to: ${email}`);
    
    // Informations du produit
    const productName = 'NextReady SaaS Template';
    const amount = '$199';
    const githubLink = 'https://github.com/shipfastsaas/nextsaas';
    
    // Générer le HTML de l'email
    const html = await renderAsync(
      PurchaseConfirmationEmail({
        customerName: name,
        productName,
        githubLink,
        amount,
      })
    );
    
    // Envoyer l'email via Resend
    const { data, error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: email,
      subject: `Your Purchase Confirmation - ${productName}`,
      html,
    });

    if (error) {
      console.error('❌ Error sending email:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    console.log('✅ Test email sent successfully:', data);
    return NextResponse.json(
      { 
        success: true, 
        message: `Email sent to ${email}`,
        emailId: data.id 
      }
    );
  } catch (error: any) {
    console.error('💥 Exception in test email endpoint:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
