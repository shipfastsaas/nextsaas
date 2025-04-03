/**
 * Script pour vérifier les variables d'environnement
 * Exécuter avec: npx tsx src/scripts/check-env.ts
 */

console.log('🔍 VÉRIFICATION DES VARIABLES D\'ENVIRONNEMENT');
console.log('--------------------------------------------');

// Variables importantes pour les webhooks et emails
const criticalVars = [
  'RESEND_API_KEY',
  'SENDER_EMAIL',
  'STRIPE_SECRET_KEY',
  'STRIPE_WEBHOOK_SECRET'
];

// Vérifier chaque variable
criticalVars.forEach(varName => {
  const value = process.env[varName];
  const isPresent = !!value;
  const maskedValue = value ? `${value.substring(0, 5)}...${value.substring(value.length - 3)}` : 'non définie';
  
  console.log(`${isPresent ? '✅' : '❌'} ${varName}: ${isPresent ? maskedValue : 'NON DÉFINIE'}`);
});

// Vérifier spécifiquement pour Next.js
console.log('\n📋 Informations sur l\'environnement:');
console.log('- NODE_ENV:', process.env.NODE_ENV);
console.log('- NEXT_PUBLIC_APP_URL:', process.env.NEXT_PUBLIC_APP_URL);

// Conseils en fonction des résultats
console.log('\n💡 CONSEILS:');
console.log('1. Les variables d\'environnement dans Next.js ne sont chargées automatiquement que pendant le build ou au démarrage du serveur.');
console.log('2. Pour les scripts autonomes, vous devez charger manuellement le fichier .env.local.');
console.log('3. Pour tester les webhooks, utilisez Stripe CLI avec: stripe listen --forward-to localhost:3000/api/webhooks');
