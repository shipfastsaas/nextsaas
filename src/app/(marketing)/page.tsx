import { HeroSection } from '@/components/sections/hero-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { FaqSection } from '@/components/sections/faq-section'
import { BottomCTASection } from '@/components/sections/bottom-cta-section'

import { UniqueValueSection } from '@/components/sections/unique-value-section'
import { TimeSavingSection } from '@/components/sections/time-saving-section'
import EmailCaptureSection from '@/components/sections/email-capture-section'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TimeSavingSection />
      <FeaturesSection />
      

      
      <UniqueValueSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <BottomCTASection />
     
    </main>
  )
}