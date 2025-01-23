import { HeroSection } from '@/components/sections/hero'
import { FeaturesSection } from '@/components/sections/features'
import { ProcessSection } from '@/components/sections/process'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { CTASection } from '@/components/sections/cta'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}