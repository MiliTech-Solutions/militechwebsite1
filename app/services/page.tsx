import { ServicesGrid } from "@/components/services-grid"
import { BonjourSection } from "@/components/bonjour-section"

export default function ServicesPage() {
  return (
    <div className="pt-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-800/30 via-orange-500 to-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative py-20">
        <BonjourSection 
          title="Our Services" 
          subtitle="WHAT WE OFFER" 
          description={<>
              Comprehensive technology solutions to meet your business needs, from cybersecurity to AI integration.
            </>}
          imageUrl="https://i.postimg.cc/xjNJs6tW/IMG-20251010-025340.jpg"
          imageAlt="Our Services"
        />
        <ServicesGrid />
      </div>
    </div>
  )
}
