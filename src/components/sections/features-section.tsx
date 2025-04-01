"use client"

import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface FeatureItem {
  icon: ReactNode
  text: string
}

interface FeatureCard {
  title: string
  description: string
  features: FeatureItem[]
  illustration: string | ReactNode
  learnMoreLink?: string
  accentColor?: string
}

interface AdditionalCard {
  title: string
  description: string
  illustration: string | ReactNode
  learnMoreLink?: string
}

function FeatureCard({ card }: { card: FeatureCard }) {
  const isMainFeature = card.title === "User Management";
  const isSecondaryFeature = card.title === "Payments" || card.title === "Communication";
  
  // Déterminer quelle image utiliser en fonction du titre de la carte
  const getFeatureImage = () => {
    switch(card.title) {
      case "Payments":
        return "/screenshots/payment-feature.png";
      case "Communication":
        return "/screenshots/communication-feature.png";
      case "User Management":
        return "/screenshots/user-managment.png";
      default:
        return "/screenshots/payment-feature.png"; // Image par défaut
    }
  };
  
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-3xl p-8 flex flex-col h-full relative overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 ${isMainFeature ? 'md:col-span-2 md:row-span-2' : ''}`}>
      {/* Accent color indicator */}
      {card.accentColor && (
        <div className={`absolute top-0 right-8 w-1 h-8 rounded-b-full ${card.accentColor}`}></div>
      )}
      
      {isSecondaryFeature ? (
        // Layout pour Payments et Communication (texte à gauche, image à droite)
        <div className="flex h-full">
          <div className="flex flex-col flex-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-text-primary mb-3">{card.title}</h3>
              <p className="text-text-secondary">{card.description}</p>
            </div>
            
            <div className="space-y-4 mb-8">
              {card.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary-purple flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-sm text-text-secondary font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {card.learnMoreLink && (
              <Link 
                href={card.learnMoreLink} 
                className="text-sm text-primary-purple hover:text-primary-purple/80 font-medium inline-flex items-center mt-auto z-10 relative"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            )}
          </div>
          
          <div className="ml-6 flex-1">
            <div className="bg-black rounded-2xl w-full h-full overflow-hidden flex items-center justify-center">
              <Image 
                src={getFeatureImage()}
                alt={card.title}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        // Layout original pour User Management
        <>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-text-primary mb-3">{card.title}</h3>
            <p className="text-text-secondary">{card.description}</p>
          </div>
          
          <div className="space-y-4 mb-8">
            {card.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 text-primary-purple flex-shrink-0">
                  {feature.icon}
                </div>
                <span className="text-sm text-text-secondary font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
          
          {card.learnMoreLink && (
            <Link 
              href={card.learnMoreLink} 
              className="text-sm text-primary-purple hover:text-primary-purple/80 font-medium inline-flex items-center mt-auto z-10 relative"
            >
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          )}
          
          <div className="mt-8 bg-black rounded-2xl w-full aspect-video overflow-hidden flex items-center justify-center">
            <Image 
              src={getFeatureImage()}
              alt={card.title}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </>
      )}
    </div>
  )
}

function AdditionalCard({ card }: { card: AdditionalCard }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 flex flex-col h-full shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col h-full">
        <div className="mb-2">
          <h3 className="text-lg font-bold text-text-primary">{card.title}</h3>
          <p className="text-sm text-text-secondary mt-2">{card.description}</p>
        </div>
        
        <div className="mt-auto flex justify-between items-end">
          {card.learnMoreLink && (
            <Link 
              href={card.learnMoreLink} 
              className="text-sm text-primary-purple hover:text-primary-purple/80 font-medium inline-flex items-center"
            >
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          )}
          
          <div className="w-16 h-16 flex-shrink-0">
            {typeof card.illustration === 'string' ? (
              <Image src={card.illustration} alt={card.title} width={64} height={64} />
            ) : (
              <div className="w-16 h-16 text-gray-400">
                {card.illustration}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeaturesSection() {
  const checkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );

  const featureCards: FeatureCard[] = [
    {
      title: "User Management",
      description: "Complete user authentication and management system.",
      features: [
        { icon: checkIcon, text: "Sign up & login flows" },
        { icon: checkIcon, text: "Profile management" },
        { icon: checkIcon, text: "Role-based access control" }
      ],
      illustration: "/illustrations/auth.svg",
      learnMoreLink: "#auth",
      accentColor: "bg-primary-purple"
    },
    {
      title: "Payments",
      description: "Accept payments with Stripe integration.",
      features: [
        { icon: checkIcon, text: "One-time payments" },
        { icon: checkIcon, text: "Subscription management" },
        { icon: checkIcon, text: "Invoicing system" }
      ],
      illustration: "/illustrations/payment.svg",
      learnMoreLink: "#payments",
      accentColor: "bg-primary-green"
    },
    {
      title: "Communication",
      description: "Connect with your users effectively.",
      features: [
        { icon: checkIcon, text: "Email notifications" },
        { icon: checkIcon, text: "Templating system" },
        { icon: checkIcon, text: "Delivery analytics" }
      ],
      illustration: "/illustrations/mail.svg",
      learnMoreLink: "#mail",
      accentColor: "bg-primary-rose"
    }
  ];

  const additionalCards: AdditionalCard[] = [
    {
      title: "Database",
      description: "Built-in database with Prisma ORM for easy data management.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
      learnMoreLink: "#database"
    },
    {
      title: "Analytics",
      description: "Track user behavior and gain insights with integrated analytics.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      learnMoreLink: "#analytics"
    },
    {
      title: "SEO",
      description: "Built-in SEO optimizations to help your site rank higher.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      learnMoreLink: "#seo"
    },
    {
      title: "Dark Mode",
      description: "Automatic dark mode support for better user experience.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ),
      learnMoreLink: "#darkmode"
    },
    {
      title: "SaaS Landing Page",
      description: "Ready-to-use landing page templates optimized for SaaS products.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      learnMoreLink: "#landing-page"
    }, 
    {
      title: "Deployment",
      description: "One-click deployment to Vercel, Netlify, or your preferred platform.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
      ),
      learnMoreLink: "#deployment"
    },
    {
      title: "Contact Form",
      description: "Customizable contact forms with spam protection and email notifications.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      learnMoreLink: "#contact-form"
    },
    {
      title: "SaaS Blog",
      description: "Complete blog system with categories, tags, and SEO optimization.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
      ),
      learnMoreLink: "#blog"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Everything you need to build a successful SaaS</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Our Next.js template includes all the essential features and components to help you launch faster.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Carte principale (User Management) - Occupe toute la largeur en mobile, 50% en desktop */}
          <div className="lg:col-span-1">
            <FeatureCard card={featureCards[0]} />
          </div>
          
          {/* Cartes secondaires (Payments et Communication) - Empilées verticalement */}
          <div className="lg:col-span-1 grid grid-cols-1 gap-6">
            <FeatureCard card={featureCards[1]} />
            <FeatureCard card={featureCards[2]} />
          </div>
        </div>
        
        {/* Cartes additionnelles - 2 par ligne en mobile, 3 par ligne en tablette, 4 par ligne en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {additionalCards.map((card, index) => (
            <AdditionalCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}