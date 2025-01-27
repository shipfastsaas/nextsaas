export default function DocsPage() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Documentation</h1>
      
      <p className="lead">
        Welcome to the ShipFast documentation. Learn how to get started with our Next.js SaaS starter kit
        and ship your product faster.
      </p>

      <div className="my-8 flex flex-col gap-4">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="mt-0 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-rose/10">
              🚀
            </span>
            Quick Start
          </h3>
          <p>
            Get up and running with ShipFast in less than 5 minutes. Learn the basics and start building
            your SaaS application.
          </p>
          <a
            href="/docs/quick-start"
            className="inline-flex items-center text-primary-rose hover:text-primary-rose/90"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-1 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="mt-0 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-rose/10">
                🔐
              </span>
              Authentication
            </h3>
            <p>
              Learn how to implement authentication and protect your routes using Next-Auth.
            </p>
            <a
              href="/docs/authentication"
              className="inline-flex items-center text-primary-rose hover:text-primary-rose/90"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-1 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="mt-0 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-rose/10">
                💳
              </span>
              Payments
            </h3>
            <p>
              Set up Stripe payments and manage subscriptions in your SaaS application.
            </p>
            <a
              href="/docs/stripe"
              className="inline-flex items-center text-primary-rose hover:text-primary-rose/90"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-1 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <h2>Core Features</h2>
      <ul>
        <li>Next.js 14 with App Router</li>
        <li>Authentication with Next-Auth</li>
        <li>Database with Prisma ORM</li>
        <li>Payments with Stripe</li>
        <li>Beautiful UI with Tailwind CSS</li>
        <li>Dark Mode Support</li>
        <li>TypeScript Support</li>
        <li>API Routes</li>
      </ul>

      <div className="mt-8 rounded-xl bg-background-secondary p-6">
        <h2 className="mt-0">Need Help?</h2>
        <p>
          Can&apos;t find what you&apos;re looking for? Join our Discord community for help and discussions.
        </p>
        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-primary-rose px-4 py-2 text-sm font-semibold text-white hover:bg-primary-rose/90"
        >
          Join Discord Community
        </a>
      </div>
    </article>
  )
}
