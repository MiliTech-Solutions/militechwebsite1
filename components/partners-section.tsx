import Image from "next/image"

export function PartnersSection() {
  const partners = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Partner ${i + 1}`,
    logo: `/placeholder.svg?height=80&width=120&query=company brand logo ${i + 1}`,
  }))

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced orange separators */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-900/30 via-orange-500 to-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-900/15 via-orange-500/25 to-orange-300/20 blur-sm" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300/50 via-orange-500 to-orange-900/30 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-6 w-28 h-1 bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
        <div className="absolute bottom-10 right-6 w-36 h-1 bg-gradient-to-l from-orange-500 to-orange-700 shadow-[0_0_12px_rgba(234,88,12,0.5)]" />

        <div className="text-center mb-12 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.6)]" />

          <h2 className="text-3xl md:text-4xl font-bold text-white pt-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Our Partners
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 mx-auto mt-4 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
          <div className="w-20 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mt-1" />

          <p className="text-gray-300 mt-4">{"Trusted by leading organizations"}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {partners.map((p) => (
            <div
              key={p.id}
              className="flex justify-center items-center rounded-lg border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-black p-4 hover:border-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.2)] transition-all relative overflow-hidden group"
            >
              {/* Enhanced orange accents */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600/40 via-orange-400/60 to-orange-500/40 group-hover:from-orange-600 group-hover:via-orange-400 group-hover:to-orange-500 transition-colors" />
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600/20 via-orange-400/30 to-orange-500/20 blur-sm" />

              <div className="absolute top-1 right-1 w-6 h-6 border-r border-t border-orange-400/50 group-hover:border-orange-400 transition-colors" />
              <div className="absolute bottom-1 left-1 w-4 h-4 border-l border-b border-orange-600/40 group-hover:border-orange-600 transition-colors" />

              <Image
                src={p.logo || "/placeholder.svg"}
                alt={p.name}
                width={120}
                height={80}
                className="opacity-80 hover:opacity-100 transition-opacity filter group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]"
              />

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-orange-700/30 via-orange-500/50 to-orange-300/30 group-hover:from-orange-700 group-hover:via-orange-500 group-hover:to-orange-300 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
