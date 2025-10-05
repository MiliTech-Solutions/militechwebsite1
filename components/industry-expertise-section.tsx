import { Landmark, Stethoscope, Truck, Building2 } from "lucide-react"

const items = [
  { icon: Stethoscope, title: "Healthcare & HealthTech" },
  { icon: Landmark, title: "Banking & Finance" },
  { icon: Truck, title: "Logistics & Supply Chain" },
  { icon: Building2, title: "Government & Military" },
]

export function IndustryExpertiseSection() {
  return (
    <section id="industries" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced orange separator and accent lines with full spectrum */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-900/30 via-orange-500 to-orange-300/50" />
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-900/15 via-orange-500/25 to-orange-300/20 blur-sm" />
      <div className="absolute top-10 left-0 w-28 h-1 bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
      <div className="absolute top-12 left-4 w-20 h-0.5 bg-gradient-to-r from-orange-400 to-orange-300" />
      <div className="absolute bottom-10 right-0 w-36 h-1 bg-gradient-to-l from-orange-500 to-orange-700 shadow-[0_0_12px_rgba(234,88,12,0.5)]" />
      <div className="absolute bottom-12 right-6 w-24 h-0.5 bg-gradient-to-l from-orange-300 to-orange-600" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.6)]" />
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-4 h-12 bg-gradient-to-b from-orange-400/20 to-orange-600/20 blur-sm" />

          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Industry Expertise
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 mx-auto mt-4 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mt-1" />
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent mx-auto mt-2" />

          <p className="text-gray-300 mt-4">{"Specialized solutions for complex industry challenges"}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => {
            const Icon = it.icon
            return (
              <div
                key={idx}
                className="group rounded-xl border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-black hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.2)] transition-all p-8 text-center relative overflow-hidden"
              >
                {/* Enhanced orange accent elements with full spectrum */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600/40 via-orange-400/60 to-orange-500/40 group-hover:from-orange-600 group-hover:via-orange-400 group-hover:to-orange-500 transition-colors" />
                <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-600/20 via-orange-400/30 to-orange-500/20 blur-sm" />

                <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-orange-400/50 group-hover:border-orange-400 transition-colors shadow-[0_0_10px_rgba(249,115,22,0.2)]" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l border-b border-orange-600/40 group-hover:border-orange-600 transition-colors" />

                <Icon className="h-8 w-8 text-gray-200 group-hover:text-orange-400 mx-auto mb-4 transition-all drop-shadow-[0_0_10px_rgba(249,115,22,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]" />

                <div className="w-10 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-3 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
                <div className="w-6 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mb-3" />

                <h3 className="font-semibold text-white group-hover:text-orange-50 transition-colors">{it.title}</h3>

                <a
                  href="#contact"
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm mt-4 border-b-2 border-orange-500/40 hover:border-orange-400 transition-all pb-1 group/link"
                >
                  {"Learn More"}
                  <span className="ml-1 group-hover/link:translate-x-1 transition-transform">{"→"}</span>
                </a>

                {/* Bottom accent elements */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-orange-700/30 via-orange-500/50 to-orange-300/30 group-hover:from-orange-700 group-hover:via-orange-500 group-hover:to-orange-300 transition-colors" />
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300/50 via-orange-500 to-orange-900/30" />
      <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-orange-300/20 via-orange-500/25 to-orange-900/15 blur-sm" />
    </section>
  )
}
