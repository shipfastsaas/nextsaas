import { Resend } from 'resend';

// Initialiser Resend avec la clé API
export const resend = new Resend(process.env.RESEND_API_KEY);

// Adresse email d'expéditeur
export const SENDER_EMAIL = process.env.SENDER_EMAIL || 'noreply@shipfaststarter.com';
