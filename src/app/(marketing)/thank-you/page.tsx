'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CheckCircleIcon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useGoogleAdsPageViewConversion } from '@/components/analytics/google-ads'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

export default function ThankYouPage() {
  // État pour suivre l'envoi de l'email
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [emailMessage, setEmailMessage] = useState<string>('');
  
  // Récupérer les paramètres d'URL (si disponibles)
  const searchParams = useSearchParams();
  
  // Activer le suivi de conversion Google Ads pour la page thank-you
  useGoogleAdsPageViewConversion()
  
  // Script de conversion spécifique pour la page thank-you
  useEffect(() => {
    // Attendre que gtag soit défini
    const checkGtagAndSendConversion = () => {
      if (typeof window === 'undefined') return;
      
      // Vérifier si gtag est disponible
      if (typeof (window as any).gtag === 'function') {
        // Valeurs de conversion
        const value = 49.0;
        const currency = 'USD';
        const transactionId = `TEMPLATE-${Date.now()}`;
        
        // Envoyer la conversion avec le format exact de Google
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-16887311626/aaFxCKCerqkaEIrav_Q-',
          'value': value,
          'currency': currency,
          'transaction_id': transactionId
        });
        
        console.log('Conversion principale (achat) envoyée à Google Ads avec ID: AW-16887311626/aaFxCKCerqkaEIrav_Q-');
        
        // Ajouter un marqueur pour éviter les envois multiples
        (window as any).purchaseConversionSent = true;
      } else {
        // Si gtag n'est pas encore disponible, réessayer après un délai
        console.log('gtag non disponible, nouvelle tentative dans 500ms...');
        setTimeout(checkGtagAndSendConversion, 500);
      }
    };
    
    // Ne pas envoyer la conversion si elle a déjà été envoyée
    if ((window as any).purchaseConversionSent) {
      console.log('Conversion déjà envoyée, pas de nouvel envoi');
      return;
    }
    
    // Démarrer la vérification une fois que la page est complètement chargée
    if (document.readyState === 'complete') {
      checkGtagAndSendConversion();
    } else {
      window.addEventListener('load', checkGtagAndSendConversion);
      return () => window.removeEventListener('load', checkGtagAndSendConversion);
    }
  }, []);
  
  // Envoyer les données de conversion à Google Tag Manager
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // S'assurer que dataLayer existe
      window.dataLayer = window.dataLayer || [];
      
      // Envoyer l'événement de conversion avec la valeur mise à jour
      window.dataLayer.push({
        'event': 'purchase',
        'ecommerce': {
          'purchase': {
            'actionField': {
              'id': `TEMPLATE-${Date.now()}`,
              'revenue': '49.00'
            },
            'products': [{
              'name': 'NextReady SaaS Template',
              'id': 'nextjs-template',
              'price': '49.00',
              'quantity': 1
            }]
          }
        }
      });
      
      console.log('Conversion data sent to GTM');
    }
  }, [])
  
  // Envoyer l'email de confirmation directement depuis la page thank-you
  useEffect(() => {
    // Ne pas renvoyer l'email si déjà envoyé
    if (emailStatus !== 'idle') return;
    
    // Utiliser un flag dans sessionStorage pour éviter les doubles appels
    const sessionId = searchParams?.get('session_id');
    if (!sessionId) {
      console.error('Aucun ID de session Stripe trouvé dans l\'URL');
      setEmailStatus('error');
      setEmailMessage('Impossible d\'envoyer l\'email de confirmation. ID de session manquant.');
      return;
    }
    
    // Vérifier si cet email a déjà été envoyé pour cette session
    const emailSentKey = `email_sent_${sessionId}`;
    if (sessionStorage.getItem(emailSentKey)) {
      console.log('Email déjà envoyé pour cette session, pas de nouvel envoi');
      setEmailStatus('success');
      setEmailMessage('Email de confirmation déjà envoyé!');
      return;
    }
    
    const sendConfirmationEmail = async () => {
      try {
        setEmailStatus('sending');
        setEmailMessage('Envoi de l\'email de confirmation en cours...');
        
        // Marquer l'email comme en cours d'envoi
        sessionStorage.setItem(emailSentKey, 'sending');
        
        // Appeler notre API pour récupérer les détails de la session et envoyer l'email
        const response = await fetch(`/api/payment-success?session_id=${encodeURIComponent(sessionId)}`);
        const data = await response.json();
        
        if (data.success) {
          setEmailStatus('success');
          setEmailMessage('Email de confirmation envoyé avec succès!');
          console.log('Email envoyé avec succès:', data);
          // Marquer l'email comme envoyé avec succès
          sessionStorage.setItem(emailSentKey, 'sent');
        } else {
          setEmailStatus('error');
          setEmailMessage('Échec de l\'envoi de l\'email de confirmation. Veuillez contacter le support.');
          console.error('Échec de l\'envoi de l\'email:', data.error);
          // Supprimer le flag pour permettre une nouvelle tentative
          sessionStorage.removeItem(emailSentKey);
        }
      } catch (error) {
        setEmailStatus('error');
        setEmailMessage('Une erreur s\'est produite lors de l\'envoi de l\'email de confirmation.');
        console.error('Erreur lors de l\'envoi de l\'email de confirmation:', error);
        // Supprimer le flag pour permettre une nouvelle tentative
        sessionStorage.removeItem(emailSentKey);
      }
    };
    
    // Envoyer l'email immédiatement
    sendConfirmationEmail();
  }, [searchParams, emailStatus]);
  
  return (
    <div className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Éléments de décoration en arrière-plan */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-rose/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-purple/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-3xl mx-auto px-6 py-12 text-center relative z-10 bg-background-surface/60 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
        <div className="flex justify-center mb-8">
          <div className="rounded-full bg-gradient-to-r from-primary-rose to-primary-purple p-4 shadow-lg">
            <CheckCircleIcon className="h-14 w-14 text-white" />
          </div>
        </div>
        
        <div className="mb-8">
          <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary-rose to-primary-purple bg-clip-text text-transparent">
            Thank you for your purchase! 🎉
          </h1>
          <p className="text-xl text-text-secondary mb-6">
            You will receive an email shortly with instructions to access your purchase.
          </p>
          
          {/* Statut de l'email */}
          {emailStatus === 'sending' && (
            <div className="text-primary-purple mb-4 flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending confirmation email...
            </div>
          )}
          
          {emailStatus === 'success' && (
            <div className="text-green-600 mb-4 flex items-center justify-center">
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              {emailMessage}
            </div>
          )}
          
          {emailStatus === 'error' && (
            <div className="text-red-600 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {emailMessage}
            </div>
          )}
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary-rose to-primary-purple mx-auto rounded-full"></div>
        </div>
        
        {/* Cartes d'information */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-xl bg-background-surface border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary-purple/10 p-3">
                <DocumentTextIcon className="h-8 w-8 text-primary-purple" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Documentation</h3>
            <p className="text-text-secondary mb-4">Access comprehensive guides to help you get started with your new template.</p>
          </div>
          
          <div className="p-6 rounded-xl bg-background-surface border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary-rose/10 p-3">
                <EnvelopeIcon className="h-8 w-8 text-primary-rose" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Support</h3>
            <p className="text-text-secondary mb-4">Need help? Our team is ready to assist you with any questions you may have.</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/docs"
            className="rounded-xl bg-gradient-to-r from-primary-rose to-primary-purple px-8 py-4 text-white font-medium shadow-lg shadow-primary-rose/25 hover:shadow-xl hover:opacity-90 transition-all duration-200 flex items-center justify-center"
          >
            <DocumentTextIcon className="h-5 w-5 mr-2" />
            View Documentation
          </Link>
          <Link
            href="mailto:support@shipfaststarter.com"
            className="rounded-xl bg-background-surface px-8 py-4 text-text-primary font-medium shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 flex items-center justify-center"
          >
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
