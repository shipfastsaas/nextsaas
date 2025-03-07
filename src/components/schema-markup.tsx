export const SchemaMarkup = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://shipfaststarter.com",
    "name": "ShipFastStarter",
    "description": "Build and ship faster with our modern Next.js SaaS starter kit. Complete React SaaS boilerplate with authentication, payments, and beautiful UI components.",
    "keywords": "next.js saas starter kit, react saas boilerplate, saas template, build and ship faster, nextjs boilerplate, react starter kit, saas starter",
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
    "description": "Build and ship faster with our modern Next.js SaaS starter kit. Complete React SaaS boilerplate with authentication, payments, and beautiful UI components.",
    "logo": "https://shipfaststarter.com/logo.png",
    "sameAs": [
      "https://twitter.com/shipfaststarter",
      "https://github.com/shipfaststarter"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ShipFastStarter - Next.js SaaS Starter Kit",
    "description": "Build and ship faster with our modern Next.js SaaS starter kit. Complete React SaaS boilerplate with authentication, payments, and beautiful UI components.",
    "category": "Software Development Tools",
    "brand": {
      "@type": "Brand",
      "name": "ShipFastStarter"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://shipfaststarter.com",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "keywords": "next.js saas starter kit, react saas boilerplate, saas template, build and ship faster"
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ShipFastStarter - Next.js SaaS Starter Kit",
    "applicationCategory": "DeveloperApplication",
    "description": "Build and ship faster with our modern Next.js SaaS starter kit. Complete React SaaS boilerplate with authentication, payments, and beautiful UI components.",
    "operatingSystem": "Any",
    "url": "https://shipfaststarter.com",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "applicationSubCategory": "Web Development Framework",
    "keywords": "next.js saas starter kit, react saas boilerplate, saas template, build and ship faster",
    "featureList": [
      "Next.js 14",
      "React SaaS Boilerplate",
      "Authentication",
      "Payment Integration",
      "Beautiful UI Components",
      "Marketing Pages",
      "TypeScript",
      "TailwindCSS",
      "SEO Optimized",
      "Fast Development"
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
