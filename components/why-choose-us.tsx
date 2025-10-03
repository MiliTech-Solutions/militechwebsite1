import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, TrendingUp, Brain, DollarSign } from "lucide-react"

const features = [
  { icon: Clock, title: "24/7 Support", description: "Round‑the‑clock technical support and maintenance." },
  { icon: Shield, title: "Gov‑Grade Security", description: "Enterprise security protocols and compliance." },
  { icon: TrendingUp, title: "Scalable Solutions", description: "Systems that grow with your business." },
  { icon: Brain, title: "AI Integration", description: "Cutting‑edge artificial intelligence capabilities." },
  { icon: DollarSign, title: "Transparent Pricing", description: "Clear, upfront pricing with no hidden costs." },
]

export function WhyChooseUs() {
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

        <div className="text-center mb-12 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.6)]" />

          <h2 className="text-3xl md:text-4xl font-bold text-white pt-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Why Choose Us
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 mx-auto mt-4 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
          <div className="w-24 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mt-1" />

          <p className="text-gray-300 mt-4">{"The advantages that set us apart"}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)] transition-all relative overflow-hidden"
              >
                {/* Enhanced orange accents */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600/40 via-orange-400/60 to-orange-500/40 group-hover:from-orange-600 group-hover:via-orange-400 group-hover:to-orange-500 transition-colors" />
                <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-600/20 via-orange-400/30 to-orange-500/20 blur-sm" />

                <div className="absolute top-2 right-2 w-10 h-10 border-r-2 border-t-2 border-orange-400/50 group-hover:border-orange-400 transition-colors shadow-[0_0_12px_rgba(249,115,22,0.2)]" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-orange-600/40 group-hover:border-orange-600 transition-colors" />

                <CardContent className="p-6 text-center relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />

                  <Icon className="h-12 w-12 text-orange-500 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.8)] transition-all" />

                  <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-3 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
                  <div className="w-8 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mb-4" />

                  <h3 className="text-xl font-bold text-white group-hover:text-orange-50 mb-2 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{feature.description}</p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-orange-700/30 via-orange-500/50 to-orange-300/30 group-hover:from-orange-700 group-hover:via-orange-500 group-hover:to-orange-300 transition-colors" />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
