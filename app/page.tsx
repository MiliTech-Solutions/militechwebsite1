import { HeroSection } from "@/components/hero-section"
import dynamic from 'next/dynamic'

const ServicesSlider = dynamic(() => import('@/components/services-slider').then(m => m.ServicesSlider))
const IndustryExpertiseSection = dynamic(() => import('@/components/industry-expertise-section').then(m => m.IndustryExpertiseSection))
const ServicesGrid = dynamic(() => import('@/components/services-grid').then(m => m.ServicesGrid))
const ProductsSection = dynamic(() => import('@/components/products-section').then(m => m.ProductsSection))
const WhatSetsUsApartSection = dynamic(() => import('@/components/what-sets-us-apart-section').then(m => m.WhatSetsUsApartSection))
const SuccessStoriesSection = dynamic(() => import('@/components/success-stories-section').then(m => m.SuccessStoriesSection))
const TestimonialsSection = dynamic(() => import('@/components/testimonials-section').then(m => m.TestimonialsSection))
const WhyChooseUs = dynamic(() => import('@/components/why-choose-us').then(m => m.WhyChooseUs))
const StatsSection = dynamic(() => import('@/components/stats-section').then(m => m.StatsSection))
const AffiliationsSection = dynamic(() => import('@/components/affiliations-section').then(m => m.AffiliationsSection))
const EventsSection = dynamic(() => import('@/components/events-section').then(m => m.EventsSection))
const PartnersSection = dynamic(() => import('@/components/partners-section').then(m => m.PartnersSection))
const MapSection = dynamic(() => import('@/components/map-section').then(m => m.MapSection))
const ConsultationSection = dynamic(() => import('@/components/consultation-section').then(m => m.ConsultationSection))

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSlider />
      <IndustryExpertiseSection />
      <ServicesGrid limit={4} showViewAll={true} />
      <ProductsSection />
      <WhatSetsUsApartSection />
      <WhyChooseUs />
      <StatsSection />
      <AffiliationsSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <EventsSection />
      <PartnersSection />
      <MapSection />
      <ConsultationSection />
    </>
  )
}
