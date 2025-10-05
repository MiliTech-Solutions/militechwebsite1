import { HeroSection } from "@/components/hero-section"
import { ServicesSlider } from "@/components/services-slider"
import { IndustryExpertiseSection } from "@/components/industry-expertise-section"
import { ServicesGrid } from "@/components/services-grid"
import { ProductsSection } from "@/components/products-section"
import { WhatSetsUsApartSection } from "@/components/what-sets-us-apart-section"
import { SuccessStoriesSection } from "@/components/success-stories-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { StatsSection } from "@/components/stats-section"
import { AffiliationsSection } from "@/components/affiliations-section"
import { EventsSection } from "@/components/events-section"
import { PartnersSection } from "@/components/partners-section"
import { MapSection } from "@/components/map-section"
import { ConsultationSection } from "@/components/consultation-section"

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
