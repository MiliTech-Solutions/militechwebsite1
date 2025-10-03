import { Network, Brain, Zap, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Network,
    title: "Enterprise-Grade Security",
    description: "We integrate advanced AI technology with enterprise-level security protocols for maximum protection.",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "Harness the potential of AI through MiliTech's distinctive approach, delivering intelligent automation and insights.",
  },
  {
    icon: Zap,
    title: "Innovative Integration",
    description: "Cutting-edge cloud integrations and platform blends, MiliTech's scalability and advancement.",
  },
]

const journeySteps = [
  {
    number: 1,
    title: "Connected with Security Framework",
    description: "Establish secure AI platforms powered by MiliTech's advanced tech infrastructure.",
  },
  {
    number: 2,
    title: "Choose Your Desired AI Model",
    description: "Explore our library of revolutionary AI models and select the perfect fit.",
  },
  {
    number: 3,
    title: "System Integration Checked",
    description: "Our system verifies your requirements and ensures seamless integration.",
  },
  {
    number: 4,
    title: "AI Unleashed: Let's Dive In!",
    description: "Ready to explore endless possibilities? Let's dive in!",
  },
]

export function WhatSetsUsApartSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced orange separators */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-800/30 via-orange-500 to-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-800/15 via-orange-500/25 to-orange-300/20 blur-sm" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300/50 via-orange-500 to-orange-800/30 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-12 left-4 w-32 h-1 bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
        <div className="absolute bottom-12 right-4 w-40 h-1 bg-gradient-to-l from-orange-500 to-orange-700 shadow-[0_0_15px_rgba(234,88,12,0.5)]" />

        {/* What Sets Us Apart Section - Folder Container */}
        <div className="mb-20 relative">
          {/* Folder Border Container */}
          <div className="relative border-2 border-orange-500/30 rounded-2xl p-8 bg-gradient-to-br from-gray-900/20 to-black/20 backdrop-blur-sm hover:border-orange-500/50 transition-colors shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            {/* Corner accent elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-orange-400/60 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-orange-400/60 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-orange-600/50 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-orange-600/50 rounded-br-2xl" />

            {/* Title Section */}
            <div className="relative mb-12">
              {/* Orange accent line on left */}
              <div className="absolute left-0 top-0 w-1 h-16 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
              <div className="absolute left-0 top-0 w-3 h-16 bg-gradient-to-b from-orange-400/20 to-orange-600/20 blur-sm" />

              <div className="pl-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  What Sets Us Apart
                </h2>
                <p className="text-orange-400 text-lg">Revolutionizing Technology with MiliTech's Advanced Solutions</p>

                <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 mt-4 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
                <div className="w-24 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mt-1" />
              </div>
            </div>

            {/* Features Grid Inside Folder */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 hover:border-orange-500/50 rounded-lg p-6 transition-all hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] relative overflow-hidden backdrop-blur-sm"
                  >
                    {/* Card accent elements */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-600/30 via-orange-400/50 to-orange-500/30 group-hover:from-orange-600/60 group-hover:via-orange-400/80 group-hover:to-orange-500/60 transition-colors" />
                    <div className="absolute top-1 right-1 w-6 h-6 border-r border-t border-orange-400/30 group-hover:border-orange-400/60 transition-colors" />

                    <Icon className="h-12 w-12 text-orange-500 mb-4 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.8)] transition-all" />

                    <div className="w-12 h-0.5 bg-gradient-to-r from-orange-600 to-orange-400 mb-3 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />

                    <h3 className="text-xl font-bold text-white group-hover:text-orange-50 mb-3 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 text-sm transition-colors">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Embark on Your Journey Section - Folder Container */}
        <div className="relative">
          {/* Folder Border Container */}
          <div className="relative border-2 border-orange-500/30 rounded-2xl p-8 bg-gradient-to-br from-gray-900/20 to-black/20 backdrop-blur-sm hover:border-orange-500/50 transition-colors shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            {/* Corner accent elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-orange-500/60 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-orange-500/60 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-orange-700/50 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-orange-700/50 rounded-br-2xl" />

            {/* Title Section */}
            <div className="relative mb-12">
              {/* Orange accent line on left */}
              <div className="absolute left-0 top-0 w-1 h-16 bg-gradient-to-b from-orange-500 to-orange-700 shadow-[0_0_15px_rgba(234,88,12,0.5)]" />
              <div className="absolute left-0 top-0 w-3 h-16 bg-gradient-to-b from-orange-500/20 to-orange-700/20 blur-sm" />

              <div className="pl-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  Embark on Your Journey
                </h2>
                <p className="text-orange-400 text-lg">Revolutionizing Technology with MiliTech's Advanced Solutions</p>

                <div className="w-36 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 mt-4 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
                <div className="w-28 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mt-1" />
              </div>
            </div>

            {/* Journey Steps Inside Folder */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-orange-600/40 via-orange-400/60 to-orange-500/40 hidden md:block" />
              <div className="absolute top-8 left-8 right-8 h-1 bg-gradient-to-r from-orange-600/20 via-orange-400/30 to-orange-500/20 blur-sm hidden md:block" />

              {/* Dotted connection lines */}
              <div className="absolute top-8 left-16 right-16 hidden md:block">
                <div className="flex justify-between items-center h-0.5">
                  <div className="flex-1 border-t-2 border-dashed border-orange-400/40 mx-4" />
                  <div className="flex-1 border-t-2 border-dashed border-orange-400/40 mx-4" />
                  <div className="flex-1 border-t-2 border-dashed border-orange-400/40 mx-4" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {journeySteps.map((step, index) => (
                  <div key={index} className="relative group">
                    {/* Step Number Circle */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all relative z-10 border-2 border-orange-400/50">
                        {step.number}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-orange-700/30 rounded-full animate-pulse" />
                      </div>
                      {/* Vertical connection line for mobile */}
                      {index < journeySteps.length - 1 && (
                        <div className="md:hidden absolute top-16 left-8 w-0.5 h-12 bg-gradient-to-b from-orange-500/50 to-orange-600/50 border-l-2 border-dashed border-orange-400/30" />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="bg-gradient-to-br from-gray-900/40 to-black/40 border border-gray-700/40 group-hover:border-orange-500/40 rounded-lg p-4 transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] relative overflow-hidden backdrop-blur-sm">
                      {/* Card accents */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-600/20 via-orange-400/40 to-orange-500/20 group-hover:from-orange-600/50 group-hover:via-orange-400/70 group-hover:to-orange-500/50 transition-colors" />

                      <h3 className="text-lg font-bold text-white group-hover:text-orange-50 mb-2 transition-colors">
                        {step.title}
                      </h3>

                      <div className="w-10 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 mb-3" />

                      <p className="text-gray-300 group-hover:text-gray-200 text-sm transition-colors">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-12 flex justify-start">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-full px-8 py-4 text-lg font-semibold border-2 border-orange-400 hover:border-orange-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all group"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Let's Get Started!
                    <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
