import { IndustryExpertiseSection } from "@/components/industry-expertise-section"
import { BonjourSection } from "@/components/bonjour-section"
import { ProductsSection } from "@/components/products-section"
import { ServicesGrid } from "@/components/services-grid"
import { WhatSetsUsApartSection } from "@/components/what-sets-us-apart-section"
import { ServicesSlider } from "@/components/services-slider"

export default function IndustriesPage() {
  return (
    <div className="pt-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-800/30 via-orange-500 to-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative py-20">
        <BonjourSection 
          title="Industries" 
          subtitle="OUR EXPERTISE ACROSS SECTORS" 
          description={<>
              We provide tailored solutions for a wide range of industries, driving innovation and growth.
            </>
          }
          imageUrl="https://i.postimg.cc/T2H5V3Yq/charles-forerunner-3fPXt37X6UQ-unsplash_(1).jpg"
          imageAlt="Industries we serve"
        />
        <IndustryExpertiseSection />
        <ServicesSlider />
        <ServicesGrid limit={4} showViewAll={true} />
        <ProductsSection />
        <WhatSetsUsApartSection />
      </div>
    </div>
  )
}
