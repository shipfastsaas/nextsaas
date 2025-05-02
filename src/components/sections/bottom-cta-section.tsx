import Link from 'next/link'

export function BottomCTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-80"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary-rose/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Limited time offer badge */}
          <div className="inline-block mb-6 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full">
            <span className="flex items-center gap-2 text-sm font-medium text-amber-800 dark:text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Limited Time Offer - <span className="font-bold">50% OFF</span> for 7 days only
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-rose to-primary-purple">Launch Your SaaS</span>
            <br />
            <span className="text-text-primary dark:text-white">in days, not months</span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-10 max-w-3xl mx-auto">
            Join over 500 developers who have saved hundreds of development hours with our all-in-one Next.js SaaS kit.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <p className="text-3xl font-bold text-primary-purple mb-1">500+</p>
              <p className="text-sm text-text-secondary">Happy Customers</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <p className="text-3xl font-bold text-primary-purple mb-1">200h</p>
              <p className="text-sm text-text-secondary">Dev Hours Saved</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <p className="text-3xl font-bold text-primary-purple mb-1">30j</p>
              <p className="text-sm text-text-secondary">Money-back Guarantee</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <p className="text-3xl font-bold text-primary-purple mb-1">24/7</p>
              <p className="text-sm text-text-secondary">Technical Support</p>
            </div>
          </div>
          
          {/* Price and CTA */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-rose to-primary-purple">$49</span>
              <div className="text-left">
                <span className="text-sm text-text-secondary">USD</span>
                <span className="block text-sm text-red-500 line-through">$99</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link 
                href="#pricing" 
                className="flex-1 rounded-full bg-gradient-to-r from-primary-rose to-primary-purple border border-primary-purple px-6 py-4 text-base font-bold text-white shadow-md hover:shadow-lg transition-all duration-200 relative overflow-hidden group flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
                <span className="relative z-10">Buy Now - 50% OFF</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
              
              <Link 
                href="https://demo.shipfaststarter.com" 
                target="_blank"
                className="flex-1 rounded-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-6 py-4 text-base font-medium text-text-primary dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
                View Demo
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lifetime access - no subscription</span>
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 ml-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>30-day guarantee</span>
            </div>
          </div>
          
          <p className="mt-6 text-sm text-text-secondary">
            Only <span className="font-bold text-primary-purple">7 copies</span> left at this price!
          </p>
        </div>
      </div>
    </section>
  )
}
