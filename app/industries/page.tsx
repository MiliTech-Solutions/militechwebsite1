import dynamic from 'next/dynamic'

const BonjourSection = dynamic(() => import('@/components/bonjour-section').then(mod => mod.BonjourSection), { 
  ssr: false,
  loading: () => <div className="h-96 bg-black animate-pulse" />
})
const IndustryExpertiseSection = dynamic(() => import('@/components/industry-expertise-section').then(mod => mod.IndustryExpertiseSection), { 
  ssr: false,
  loading: () => <div className="h-96 bg-black animate-pulse" />
})
const ProductsSection = dynamic(() => import('@/components/products-section').then(mod => mod.ProductsSection), { 
  ssr: false,
  loading: () => <div className="h-96 bg-black animate-pulse" />
})
const ServicesSlider = dynamic(() => import('@/components/services-slider').then(mod => mod.ServicesSlider), { 
  ssr: false,
  loading: () => <div className="h-96 bg-black animate-pulse" />
})
const WhatSetsUsApartSection = dynamic(() => import('@/components/what-sets-us-apart-section').then(mod => mod.WhatSetsUsApartSection), {
  ssr: false,
  loading: () => <div className="h-96 bg-black animate-pulse" />
})
const ServicesGrid = dynamic(() => import('@/components/services-grid').then(mod => mod.ServicesGrid), { 
  ssr: false,
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

export default function IndustriesPage() {
  return (
    <div className="pt-20 bg-black relative overflow-hidden">
      {/* Fancy orange gradient line */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-800/30 via-orange-500 to-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative py-20">
        <BonjourSection 
          title="Industries" 
          subtitle="OUR EXPERTISE ACROSS SECTORS" 
          description={<>
            We provide tailored solutions for a wide range of industries, driving innovation and growth.
          </>}
          imageUrl="https://i.postimg.cc/T2H5V3Yq/charles-forerunner-3fPXt37X6UQ-unsplash_(1).jpg"
          imageAlt="Industries we serve"
        />
        <IndustryExpertiseSection />
        <ServicesSlider />
        <ServicesGrid limit={6} showViewAll={true} />
        <ProductsSection />
        <WhatSetsUsApartSection />
      </div>
    </div>
  )
}
