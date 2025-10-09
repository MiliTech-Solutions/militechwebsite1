import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Shield, Database, Brain } from "lucide-react"
import { PartnersSection } from "@/components/partners-section"
import { TeamSection } from "@/components/team-section"
import { BonjourSection } from "@/components/bonjour-section"
import Image from "next/image"

const expertiseAreas = [
  {
    title: "CYBERSECURITY",
    icon: Shield,
    features: [
      "Incident Response",
      "Penetration Testing",
      "24/7 Security Monitoring",
      "Security Training Programs",
      "Security Audits & Compliance",
      "Threat Intelligence & Analysis",
    ],
  },
  {
    title: "DEVELOPMENT",
    icon: Code,
    features: [
      "DevOps Implementation",
      "Cloud-Native Solutions",
      "Mobile App Development",
      "Custom Web Applications",
      "Quality Assurance Testing",
      "API Development & Integration",
    ],
  },
  {
    title: "DATA SOLUTIONS",
    icon: Database,
    features: [
      "Data Warehousing",
      "Analytics & Reporting",
      "Database Optimization",
      "Data Migration Services",
      "Real-time Data Processing",
      "Business Intelligence Platforms",
    ],
  },
  {
    title: "AI INTEGRATION",
    icon: Brain,
    features: [
      "Predictive Analytics",
      "AI-Powered Automation",
      "Machine Learning Models",
      "Computer Vision Solutions",
      "Natural Language Processing",
      "Intelligent Decision Systems",
    ],
  },
]

const portfolioProjects = [
  {
    title: "ENTERPRISE ERP",
    subtitle: "Complete Business Solution",
    description: "End-to-end ERP implementation for large-scale operations",
    size: "large",
  },
  {
    title: "CYBERSECURITY PLATFORM",
    subtitle: "Advanced Threat Detection",
    description: "AI-powered security monitoring and response system",
    size: "medium",
  },
  {
    title: "MOBILE BANKING",
    subtitle: "Secure Financial App",
    description: "Cross-platform banking solution with biometric security",
    size: "medium",
    id: "mobile-banking"
  },
  {
    title: "HEALTHCARE SYSTEM",
    subtitle: "Patient Management",
    description: "Comprehensive HMIS with real-time monitoring",
    size: "small",
  },
  {
    title: "AI ANALYTICS",
    subtitle: "Business Intelligence",
    description: "Machine learning-powered analytics dashboard",
    size: "small",
  },
  {
    title: "CLOUD MIGRATION",
    subtitle: "Infrastructure Modernization",
    description: "Complete cloud transformation project",
    size: "medium",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20 bg-black relative overflow-hidden">
      {/* Enhanced orange separators */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-800/30 via-orange-500 to-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative py-20">
        {/* Hero Section */}
        <BonjourSection 
          title="Bonjour!" 
          subtitle="WE ARE A TECHNOLOGY COMPANY" 
          description={<>
              BRINGING INNOVATION TO BUSINESSES
              <br />
              THROUGH THE LENS
            </>
          }
          imageUrl="https://i.postimg.cc/zBSJBp2H/Corporate-Team-Meeting-1.jpg"
          imageAlt="Team Photo"
        />

        {/* About Us Section */}
        <div className="mb-20">
          <div className="relative mb-12">
            <div className="absolute left-0 top-0 w-1 h-16 bg-gradient-to-b from-orange-500 to-orange-700 shadow-[0_0_15px_rgba(234,88,12,0.5)]" />

            <div className="pl-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                ABOUT US
              </h2>
              <div className="w-28 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Large Image Placeholder */}
                <Image src="https://i.postimg.cc/dVyDFRF0/Corporate-Team-Meeting.jpg" alt="Company Image" width={500} height={432} className="w-full h-[432px] object-cover rounded-lg border-2 border-orange-500/30" />

                {/* Company Description */}
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-justify text-sm">
                    MiliTech Solutions stands as a premier technology company, delivering cutting-edge solutions that
                    transform businesses across industries. Our expertise spans cybersecurity, software development, and
                    AI integration.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-justify text-sm">
                    With over a decade of experience, we've successfully completed 240+ projects, serving government,
                    defense, and private sectors with innovative technology solutions that drive digital transformation.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-justify text-sm">
                    Our commitment to excellence and innovation has established us as a trusted partner for
                    organizations seeking reliable, scalable, and secure technology implementations.
                  </p>

                  <Button
                    asChild
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-md px-6 py-2 font-semibold border border-orange-400 hover:border-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all mt-6"
                  >
                    <a href="#mobile-banking">ABOUT & EXPERIENCE</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Team Info Image Placeholder */}
            <Image src="https://i.postimg.cc/mrfz11Dw/Team-Meeting-Discussion.jpg" alt="Team Photo" width={500} height={256} className="w-full h-64 object-cover rounded-lg border-2 border-orange-500/30" />
          </div>
        </div>

        {/* Portfolio/Success Stories Section */}
        <div id="success-stories" className="mb-20">
          <div className="relative mb-12">
            <div className="absolute left-0 top-0 w-1 h-16 bg-gradient-to-b from-orange-600 to-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />

            <div className="pl-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                SUCCESS STORIES
              </h2>
              <div className="w-36 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((project, index) => (
              <Card
                key={index}
                id={project.id}
                className={`group bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-orange-500/50 transition-all hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] relative overflow-hidden ${
                  project.size === "large"
                    ? "md:col-span-2 h-64"
                    : project.size === "medium"
                    ? "h-52"
                    : "h-52"
                }`}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-orange-400/30 group-hover:border-orange-400/60 transition-colors" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-orange-600/30 group-hover:border-orange-600/60 transition-colors" />

                <CardContent className="p-6 h-full flex flex-col justify-between relative">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-600/20 via-orange-400/40 to-orange-500/20 group-hover:from-orange-600/50 group-hover:via-orange-400/70 group-hover:to-orange-500/50 transition-colors" />

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-50 mb-2 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-orange-400 text-sm mb-2">{project.subtitle}</p>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 mb-3" />
                  </div>

                  <div>
                    <p className="text-gray-300 group-hover:text-gray-200 text-sm transition-colors">
                      {project.description}
                    </p>
                    <div className="mt-4 text-orange-400 text-xs font-semibold">VIEW PROJECT →</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expertise Section (replacing Pricing) */}
        <div>
          <div className="relative mb-12">
            <div className="absolute left-0 top-0 w-1 h-16 bg-gradient-to-b from-orange-700 to-orange-500 shadow-[0_0_15px_rgba(194,65,12,0.5)]" />

            <div className="pl-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-.shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                EXPERTISE AREAS
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-700 via-orange-500 to-orange-400 shadow-[0_0_12px_rgba(194,65,12,0.5)]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <Card
                  key={index}
                  className="group bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-orange-500 transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] relative overflow-hidden flex flex-col"
                >
                  {/* Enhanced orange accents */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600/40 via-orange-400/60 to-orange-500/40 group-hover:from-orange-600 group-hover:via-orange-400 group-hover:to-orange-500 transition-colors" />
                  <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-orange-400/50 group-hover:border-orange-400 transition-colors" />

                  <CardContent className="p-6 text-center relative flex flex-col flex-grow">
                    <Icon className="h-12 w-12 text-orange-500 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.8)] transition-all" />

                    <h3 className="text-xl font-bold text-white group-hover:text-orange-50 mb-4 transition-colors">
                      {area.title}
                    </h3>

                    <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-6 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />

                    <ul className="space-y-2 mb-8 text-left flex-grow">
                      {area.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-gray-300 group-hover:text-gray-200 text-sm flex items-center transition-colors"
                        >
                          <div className="w-1 h-1 bg-orange-400 rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-md font-semibold border border-orange-400 hover:border-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all mt-auto"
                    >
                      <a href="#contact">GET STARTED</a>
                    </Button>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-orange-700/30 via-orange-500/50 to-orange-300/30 group-hover:from-orange-700 group-hover:via-orange-500 group-hover:to-orange-300 transition-colors" />
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <TeamSection />

      {/* Partners Section */}
      <PartnersSection />
    </div>
  )
}
