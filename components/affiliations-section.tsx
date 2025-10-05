import { Card, CardContent } from "@/components/ui/card"

const affiliations = [
  { name: "SECP", description: "Regulatory compliance and corporate transparency." },
  { name: "FBR", description: "Tax compliance registration." },
  { name: "PSEB", description: "Pakistan Software Export Board certification." },
  { name: "PRA", description: "Punjab Revenue Authority registration." },
  { name: "P@SHA", description: "Software Houses Association membership." },
]

export function AffiliationsSection() {
  return (
    <section id="affiliations" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced orange separators - FIXED from cyan to orange */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-900/30 via-orange-500 to-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-900/15 via-orange-500/25 to-orange-300/20 blur-sm" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300/50 via-orange-500 to-orange-900/30 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Decorative orange elements */}
        <div className="absolute top-10 left-6 w-28 h-1 bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
        <div className="absolute bottom-10 right-6 w-36 h-1 bg-gradient-to-l from-orange-500 to-orange-700 shadow-[0_0_12px_rgba(234,88,12,0.5)]" />

        <div className="text-center mb-12 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.6)]" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-12 bg-gradient-to-b from-orange-400/20 to-orange-600/20 blur-sm" />

          <h2 className="text-3xl md:text-4xl font-bold text-white pt-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Professional Affiliations
          </h2>

          <div className="w-40 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 mx-auto mt-4 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
          <div className="w-32 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mt-1" />

          <p className="text-gray-300 mt-4">{"Certified and registered with leading authorities"}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {affiliations.map((a, i) => (
            <Card
              key={i}
              className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)] transition-all relative overflow-hidden group"
            >
              {/* FIXED: Changed from cyan to orange theme */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600/40 via-orange-400/60 to-orange-500/40 group-hover:from-orange-600 group-hover:via-orange-400 group-hover:to-orange-500 transition-colors" />
              <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-600/20 via-orange-400/30 to-orange-500/20 blur-sm" />

              <div className="absolute top-2 right-2 w-10 h-10 border-r-2 border-t-2 border-orange-400/50 group-hover:border-orange-400 transition-colors shadow-[0_0_12px_rgba(249,115,22,0.2)]" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-orange-600/40 group-hover:border-orange-600 transition-colors" />

              <CardContent className="p-6 text-center relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />

                <h3 className="text-2xl font-bold text-orange-500 mb-2 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.8)] transition-all">
                  {a.name}
                </h3>

                <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-3 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
                <div className="w-8 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mb-4" />

                <p className="text-gray-300 group-hover:text-gray-200 text-sm transition-colors">{a.description}</p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-orange-700/30 via-orange-500/50 to-orange-300/30 group-hover:from-orange-700 group-hover:via-orange-500 group-hover:to-orange-300 transition-colors" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
