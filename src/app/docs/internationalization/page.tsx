export default function InternationalizationPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Internationalization</h1>
      
      <p className="lead">
        NextReady includes a complete internationalization (i18n) system powered by next-intl, supporting multiple languages out of the box.
      </p>

      <div className="my-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
        <h2 className="mt-0">On this page</h2>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#supported-languages">Supported Languages</a></li>
          <li><a href="#routing">Internationalized Routing</a></li>
          <li><a href="#translations">Managing Translations</a></li>
          <li><a href="#components">Translation Components</a></li>
          <li><a href="#date-number">Date and Number Formatting</a></li>
          <li><a href="#language-switcher">Language Switcher</a></li>
          <li><a href="#seo">SEO Considerations</a></li>
        </ul>
      </div>

      <section id="overview">
        <h2>Overview</h2>
        <p>
          NextReady uses next-intl to provide a comprehensive internationalization solution for your SaaS application. 
          The system is built to support multiple languages with minimal configuration, allowing you to reach a global audience.
        </p>
        
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg my-4">
          <h4 className="text-blue-800 dark:text-blue-200 mt-0 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Key Features
          </h4>
          <ul className="mb-0">
            <li>Support for English, French, Spanish, and German out of the box</li>
            <li>Locale-based routing with subpaths (/en, /fr, etc.)</li>
            <li>Type-safe translations with TypeScript</li>
            <li>Server and client components support</li>
            <li>Date, time, and number formatting based on locale</li>
            <li>Easy-to-use language switcher</li>
            <li>SEO-friendly with proper language metadata</li>
          </ul>
        </div>
      </section>

      <section id="supported-languages">
        <h2>Supported Languages</h2>
        <p>
          NextReady supports the following languages out of the box:
        </p>
        
        <table className="w-full">
          <thead>
            <tr>
              <th>Language</th>
              <th>Locale Code</th>
              <th>URL Path</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>English</td>
              <td><code>en</code></td>
              <td><code>/en/...</code></td>
            </tr>
            <tr>
              <td>French</td>
              <td><code>fr</code></td>
              <td><code>/fr/...</code></td>
            </tr>
            <tr>
              <td>Spanish</td>
              <td><code>es</code></td>
              <td><code>/es/...</code></td>
            </tr>
            <tr>
              <td>German</td>
              <td><code>de</code></td>
              <td><code>/de/...</code></td>
            </tr>
          </tbody>
        </table>
        
        <h3>Adding More Languages</h3>
        <p>
          You can easily add more languages by updating the configuration files in <code>src/i18n.ts</code> and adding translation files for the new language.
        </p>
      </section>

      <section id="routing">
        <h2>Internationalized Routing</h2>
        <p>
          NextReady uses Next.js App Router with internationalized routing based on URL subpaths.
        </p>
        
        <h3>Routing Configuration</h3>
        <p>
          The routing configuration is set up in the middleware.ts file to handle locale detection and routing.
        </p>
        
        <h3>App Directory Structure</h3>
        <p>
          The app directory structure follows the Next.js App Router conventions with the locale parameter:
        </p>
        
        <h3>Locale Parameter</h3>
        <p>
          Each page component receives the locale parameter from the URL structure.
        </p>
      </section>

      <section id="translations">
        <h2>Managing Translations</h2>
        <p>
          Translations are stored in JSON files organized by language and namespace.
        </p>
        
        <h3>Translation Files</h3>
        <p>
          Translation files are located in the <code>messages</code> directory, with one file per supported language.
        </p>
        
        <h3>Translation Structure</h3>
        <p>
          Each translation file contains namespaced translations for different parts of your application.
        </p>
      </section>

      <section id="components">
        <h2>Translation Components</h2>
        <p>
          NextReady provides components and hooks to use translations in your application.
        </p>
        
        <h3>Server Components</h3>
        <p>
          For server components, use the <code>getTranslations</code> function from next-intl/server.
        </p>
        
        <h3>Client Components</h3>
        <p>
          For client components, use the <code>useTranslations</code> hook from next-intl.
        </p>
      </section>

      <section id="date-number">
        <h2>Date and Number Formatting</h2>
        <p>
          NextReady provides utilities for formatting dates, times, and numbers according to the user's locale.
        </p>
        
        <h3>Date Formatting</h3>
        <p>
          Use the <code>useFormatter</code> hook to format dates and times according to the current locale.
        </p>
        
        <h3>Number Formatting</h3>
        <p>
          Use the <code>useFormatter</code> hook to format numbers, currencies, and percentages according to the current locale.
        </p>
      </section>

      <section id="language-switcher">
        <h2>Language Switcher</h2>
        <p>
          NextReady includes a language switcher component that allows users to change the language of the application.
        </p>
        
        <h3>Language Switcher Component</h3>
        <p>
          The language switcher component is implemented in <code>src/components/LanguageSwitcher.tsx</code>.
        </p>
        
        <h3>Using the Language Switcher</h3>
        <p>
          Add the language switcher to your layout or navigation component for easy language switching.
        </p>
      </section>

      <section id="seo">
        <h2>SEO Considerations</h2>
        <p>
          NextReady is configured for optimal SEO with internationalized content.
        </p>
        
        <h3>HTML Lang Attribute</h3>
        <p>
          The <code>html</code> element's <code>lang</code> attribute is automatically set based on the current locale.
        </p>
        
        <h3>Alternate Language Links</h3>
        <p>
          Alternate language links are added in the document head for better SEO.
        </p>
        
        <h3>Translated Metadata</h3>
        <p>
          Metadata for each page is translated based on the current locale.
        </p>
      </section>

      <div className="mt-8 rounded-xl bg-gray-50 dark:bg-gray-900 p-6">
        <h2 className="mt-0">Next Steps</h2>
        <p>
          Now that you understand how internationalization works in NextReady, you might want to explore:
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/docs/blog"
            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Blog System
          </a>
          <a
            href="/docs/seo"
            className="inline-flex items-center rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            SEO
          </a>
        </div>
      </div>
    </div>
  )
}
