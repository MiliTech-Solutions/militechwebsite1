import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  { title: "PhishNet", description: "Detect phishing threats in real‑time with immersive simulations." },
  { title: "CyberIQ", description: "Awareness training and progress tracking platform." },
  { title: "NetGuard", description: "Advanced network monitoring suite for complete visibility." },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced orange separators */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-900/30 via-orange-500 to-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-900/15 via-orange-500/25 to-orange-300/20 blur-sm" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300/50 via-orange-500 to-orange-900/30 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Decorative orange elements */}
        <div className="absolute top-10 left-6 w-28 h-1 bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
        <div className="absolute bottom-10 right-6 w-36 h-1 bg-gradient-to-l from-orange-500 to-orange-700 shadow-[0_0_12px_rgba(234,88,12,0.5)]" />

        <div className="text-center mb-12 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.6)]" />

          <h2 className="text-3xl md:text-4xl font-bold text-white pt-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Our Products
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 mx-auto mt-4 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
          <div className="w-20 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mt-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Card
              key={i}
              className="group bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-2xl hover:border-orange-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] transition-all relative overflow-hidden"
            >
              {/* Enhanced orange accent elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600/40 via-orange-400/60 to-orange-500/40 group-hover:from-orange-600 group-hover:via-orange-400 group-hover:to-orange-500 transition-colors" />
              <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-600/20 via-orange-400/30 to-orange-500/20 blur-sm" />

              <div className="absolute top-2 right-2 w-12 h-12 border-r-2 border-t-2 border-orange-400/50 group-hover:border-orange-400 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.2)]" />
              <div className="absolute bottom-2 left-2 w-10 h-10 border-l-2 border-b-2 border-orange-600/40 group-hover:border-orange-600 transition-colors" />

              <CardHeader className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />

                <CardTitle className="text-xl text-white group-hover:text-orange-50 transition-colors pt-4">
                  {p.title}
                </CardTitle>

                <div className="w-12 h-0.5 bg-gradient-to-r from-orange-600 to-orange-400 mt-2" />
              </CardHeader>

              <CardContent className="relative">
                <p className="text-gray-300 group-hover:text-gray-200 mb-6 transition-colors">{p.description}</p>

                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white bg-transparent hover:border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all"
                >
                  <a href="#contact">Learn More</a>
                </Button>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-orange-700/30 via-orange-500/50 to-orange-300/30 group-hover:from-orange-700 group-hover:via-orange-500 group-hover:to-orange-300 transition-colors" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
