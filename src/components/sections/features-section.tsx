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
}

interface AdditionalCard {
  title: string
  description: string
  illustration: string | ReactNode
  learnMoreLink?: string
}

function FeatureCard({ card }: { card: FeatureCard }) {
  const isOrganization = card.title === "Organizations";
  
  return (
    <div className={`bg-background-secondary rounded-xl p-6 flex flex-col h-full relative overflow-hidden ${isOrganization ? 'min-h-[580px]' : ''}`}>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">{card.title}</h3>
        <p className="text-text-secondary text-sm">{card.description}</p>
      </div>
      
      <div className="space-y-3 mb-6">
        {card.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 text-primary-purple flex-shrink-0">
              {feature.icon}
            </div>
            <span className="text-sm text-text-secondary">{feature.text}</span>
          </div>
        ))}
      </div>
      
      {card.learnMoreLink && (
        <Link 
          href={card.learnMoreLink} 
          className="text-sm text-text-secondary hover:text-primary-purple inline-flex items-center mt-auto z-10 relative"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      )}
      
      {isOrganization ? (
        <div className="absolute bottom-10 left-0 right-0 w-full h-[300px] px-6 opacity-100 z-0">
          <Image 
            src={card.illustration as string} 
            alt={card.title} 
            width={600} 
            height={300} 
            className="object-contain mx-auto"
          />
        </div>
      ) : (
        <div className="absolute bottom-4 right-4 opacity-50 w-20 h-20 flex items-center justify-center">
          {typeof card.illustration === 'string' ? (
            <Image 
              src={card.illustration} 
              alt={card.title} 
              width={80} 
              height={80} 
              className="object-contain"
            />
          ) : (
            <div className="w-20 h-20 text-primary-purple/30">
              {card.illustration}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function AdditionalCard({ card }: { card: AdditionalCard }) {
  return (
    <div className="bg-background-secondary rounded-xl p-6 flex flex-col h-full relative overflow-hidden">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">{card.title}</h3>
        <p className="text-text-secondary text-sm">{card.description}</p>
      </div>
      
      {card.learnMoreLink && (
        <Link 
          href={card.learnMoreLink} 
          className="text-sm text-text-secondary hover:text-primary-purple inline-flex items-center mt-auto"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      )}
      
      <div className="absolute bottom-4 right-4 opacity-50 w-20 h-20 flex items-center justify-center">
        {typeof card.illustration === 'string' ? (
          <Image 
            src={card.illustration} 
            alt={card.title} 
            width={80} 
            height={80} 
            className="object-contain"
          />
        ) : (
          <div className="w-20 h-20 text-primary-purple/30">
            {card.illustration}
          </div>
        )}
      </div>
    </div>
  )
}

export function FeaturesSection() {
  // SVG Icons
  const databaseIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  )
  
  const checkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
  
  const mailIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
  
  const organizationIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  )
  
  const styleIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  )
  
  const aiIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  )
  
  const databaseIllustration = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  )
  
  const mailIllustration = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
  
  const styleIllustration = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  )
  
  const aiIllustration = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  )

  // Feature cards data
  const featureCards: FeatureCard[] = [
    {
      title: "Database",
      description: "Access your data with ease.",
      features: [
        { icon: checkIcon, text: "Choose your database" },
        { icon: checkIcon, text: "Easy migrations" }
      ],
      illustration: databaseIllustration,
      learnMoreLink: "#database"
    },
    {
      title: "Organizations",
      description: "Let your customers create organizations, add members and share resources.",
      features: [
        { icon: checkIcon, text: "Seat-based billing" },
        { icon: checkIcon, text: "Require / hide / disable organizations" },
        { icon: checkIcon, text: "Member roles" },
        { icon: checkIcon, text: "Easily removable" }
      ],
      illustration: "/screenshots/auth-preview.png",
      learnMoreLink: "#organizations"
    },
    {
      title: "Mails",
      description: "Send transactional emails to your customers.",
      features: [
        { icon: checkIcon, text: "Customizable mail templates" },
        { icon: checkIcon, text: "Choose your mail provider" }
      ],
      illustration: mailIllustration,
      learnMoreLink: "#mails"
    },
    {
      title: "Style",
      description: "Modern, beautiful UI. Fully customizable.",
      features: [
        { icon: checkIcon, text: "Fully customizable" },
        { icon: checkIcon, text: "Dark mode" },
        { icon: checkIcon, text: "Mobile-first" },
        { icon: checkIcon, text: "shadow/ui compatible" }
      ],
      illustration: styleIllustration,
      learnMoreLink: "#style"
    },
    {
      title: "AI",
      description: "Add artificial intelligence to your app and give your customers superpowers.",
      features: [
        { icon: checkIcon, text: "Fully working AI chatbot" },
        { icon: checkIcon, text: "Multiple AI adapters" },
        { icon: checkIcon, text: "Ready to use" }
      ],
      illustration: aiIllustration,
      learnMoreLink: "#ai"
    }
  ];

  // Additional cards data (for the second row)
  const additionalCards: AdditionalCard[] = [
    {
      title: "Analytics",
      description: "Track your users and their behavior.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      learnMoreLink: "#analytics"
    },
    {
      title: "SaaS Landing Page",
      description: "A beautiful landing page with features, pricing and newsletter signup is included.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      learnMoreLink: "#landing"
    },
    {
      title: "SaaS Blog",
      description: "Multi-language, MDX-based blog to keep your customers up to date with the latest news.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
      ),
      learnMoreLink: "#blog"
    },
    {
      title: "SaaS Documentation",
      description: "Multi-language, MDX-based documentation to help your customers get started with your app.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      learnMoreLink: "#documentation"
    },
    {
      title: "Contact form",
      description: "Let your customers contact you.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ),
      learnMoreLink: "#contact"
    },
    {
      title: "SaaS Legal Pages",
      description: "Multi-language placeholder pages for privacy policy and terms of service are included.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      learnMoreLink: "#legal"
    },
    {
      title: "Fully typed codebase",
      description: "From backend to frontend, we are using TypeScript for full type safety.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      learnMoreLink: "#typescript"
    },
    {
      title: "Deployment",
      description: "Serverless, Node.js, Docker, etc. You can deploy anywhere.",
      illustration: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>
      ),
      learnMoreLink: "#deployment"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="relative px-6 mx-auto max-w-7xl lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            All the features you need
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-rose to-primary-purple">.</span>
          </h2>
          <p className="text-lg text-text-secondary">
            NextSaaS comes with all the features you need to build a successful SaaS application.
          </p>
        </div>
        
        <div className="grid grid-cols-4 grid-rows-2 gap-6 h-[600px]">
          {/* Database card (top left) */}
          <div className="col-span-1 row-span-1 h-[280px]">
            <FeatureCard card={featureCards[0]} />
          </div>
          
          {/* Style card (bottom left) */}
          <div className="col-span-1 row-span-1 h-[280px]">
            <FeatureCard card={featureCards[3]} />
          </div>
          
          {/* Organizations card (center, spanning 2x2) */}
          <div className="col-span-2 row-span-2 col-start-2 row-start-1">
            <FeatureCard card={featureCards[1]} />
          </div>
          
          {/* Mails card (top right) */}
          <div className="col-span-1 row-span-1 h-[280px]">
            <FeatureCard card={featureCards[2]} />
          </div>
          
          {/* AI card (bottom right) */}
          <div className="col-span-1 row-span-1 h-[280px]">
            <FeatureCard card={featureCards[4]} />
          </div>
        </div>
        
        {/* Additional cards row */}
        <div className="mt-16 grid grid-cols-4 gap-6">
          {additionalCards.map((card, index) => (
            <div key={index} className="col-span-1">
              <AdditionalCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}