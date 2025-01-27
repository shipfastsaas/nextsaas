export const SchemaMarkup = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.shipfastsaas.com",
    "name": "ShipFastSaaS",
    "description": "The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.",
    "keywords": "nextjs boilerplate, saas starter, ai tool builder, web app template, online business",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.shipfastsaas.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://www.shipfastsaas.com",
    "name": "ShipFastSaaS",
    "description": "The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.",
    "logo": "https://www.shipfastsaas.com/logo.png",
    "sameAs": [
      "https://twitter.com/shipfast",
      "https://github.com/shipfast"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ShipFastSaaS Boilerplate",
    "description": "The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.",
    "category": "Software Development Tools",
    "brand": {
      "@type": "Brand",
      "name": "ShipFastSaaS"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.shipfastsaas.com",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ShipFastSaaS",
    "applicationCategory": "DeveloperApplication",
    "description": "The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.",
    "operatingSystem": "Any",
    "url": "https://www.shipfastsaas.com",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "applicationSubCategory": "Web Development Framework",
    "featureList": [
      "NextJS 14",
      "Authentication",
      "Payment Integration",
      "AI Tools Support",
      "Marketing Pages",
      "TypeScript",
      "TailwindCSS"
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
