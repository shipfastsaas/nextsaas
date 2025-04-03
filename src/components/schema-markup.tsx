export const SchemaMarkup = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://shipfaststarter.com",
    "name": "ShipFastStarter - Premium Next.js Template",
    "description": "Launch your SaaS project with our comprehensive Next.js template. Built with authentication, payments, and beautiful UI components. Save months of development time.",
    "keywords": "next.js template, saas starter kit, next.js 14, react saas template, nextjs boilerplate, app router, authentication template, payment integration, mongodb nextjs, typescript template",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://shipfaststarter.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://shipfaststarter.com",
    "name": "ShipFastStarter",
    "description": "Launch your SaaS project with our comprehensive Next.js template. Built with authentication, payments, and beautiful UI components. Save months of development time.",
    "logo": "https://shipfaststarter.com/logo.png",
    "sameAs": [
      "https://twitter.com/shipfaststarter",
      "https://github.com/shipfaststarter"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Premium Next.js Template | Complete SaaS Starter Kit",
    "description": "Launch your SaaS project with our comprehensive Next.js template. Built with authentication, payments, and beautiful UI components. Save months of development time.",
    "image": "https://shipfaststarter.com/logo.png",
    "category": "Software Development Tools",
    "brand": {
      "@type": "Brand",
      "name": "ShipFastStarter"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://shipfaststarter.com",
      "price": "199",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "David Chen"
        },
        "datePublished": "2025-03-15",
        "reviewBody": "This Next.js template saved me weeks of development time. The authentication and payment systems work flawlessly out of the box."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "datePublished": "2025-02-20",
        "reviewBody": "Excellent template with clean code and great documentation. The multi-language support was exactly what I needed for my international SaaS project."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "keywords": "next.js template, saas starter kit, next.js 14, react saas template, nextjs boilerplate, app router, authentication template, payment integration, mongodb nextjs, typescript template"
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Premium Next.js Template | Complete SaaS Starter Kit",
    "applicationCategory": "DeveloperApplication",
    "description": "Launch your SaaS project with our comprehensive Next.js template. Built with authentication, payments, and beautiful UI components. Save months of development time.",
    "operatingSystem": "Any",
    "url": "https://shipfaststarter.com",
    "image": "https://shipfaststarter.com/logo.png",
    "offers": {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Thomas Weber"
      },
      "datePublished": "2025-01-10",
      "reviewBody": "This is the most complete Next.js template I've used. The MongoDB integration and Stripe setup saved me countless hours of development time."
    },
    "applicationSubCategory": "Web Development Framework",
    "keywords": "next.js template, saas starter kit, next.js 14, react saas template, nextjs boilerplate, app router, authentication template, payment integration, mongodb nextjs",
    "featureList": [
      "Next.js 14 with App Router",
      "Complete SaaS Template",
      "Authentication with Next-Auth",
      "Stripe Payment Integration",
      "MongoDB Database Integration",
      "Responsive UI with TailwindCSS",
      "Multi-language Support (EN, FR, ES, DE)",
      "TypeScript Implementation",
      "SEO Optimized Structure",
      "Dark Mode Support",
      "Blog System Included",
      "Admin Dashboard"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
};
