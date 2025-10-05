import Image from "next/image"

const cases = [
  { tag: "New", title: "Digital Banking Transformation", quote: "24x faster transactions, 99.99% uptime.", image: "https://i.postimg.cc/ryZkYnYQ/85b679a0729026156824436514a49574.jpg" },
  { tag: "Modernization", title: "Healthcare Data Analytics Platform", quote: "60% improvement in outcomes.", image: "https://i.postimg.cc/Jh7R9ZXX/dd7b9965920110d32585eee96176c3b9.jpg" },
  { tag: "Update", title: "Supply Chain Optimization", quote: "28% reduction in operational costs.", image: "https://i.postimg.cc/0yB9GvN4/377a2c062fdbd41feab898787cee409c.jpg" },
  { tag: "Update", title: "SaaS Platform", quote: "UI/UX Overhaul", image: "https://i.postimg.cc/hvLwD3W9/wizard-banner-1-1.jpg" },
]

export function SuccessStoriesSection() {
  return (
    <section id="stories" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced orange separators */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-900/30 via-orange-500 to-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-900/15 via-orange-500/25 to-orange-300/20 blur-sm" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300/50 via-orange-500 to-orange-900/30 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-6 w-28 h-1 bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
        <div className="absolute bottom-10 right-6 w-36 h-1 bg-gradient-to-l from-orange-500 to-orange-700 shadow-[0_0_12px_rgba(234,88,12,0.5)]" />

        <div className="text-center mb-10 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.6)]" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-12 bg-gradient-to-b from-orange-400/20 to-orange-600/20 blur-sm" />

          <h2 className="text-3xl md:text-4xl font-bold text-white pt-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Success Stories
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 mx-auto mt-4 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
          <div className="w-24 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mt-1" />

          <p className="text-gray-300 mt-4">{"Real results from real partnerships"}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <article
              key={i}
              className="rounded-xl border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.15)] transition-all relative overflow-hidden group"
            >
              {/* Enhanced orange accents */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600/40 via-orange-400/60 to-orange-500/40 group-hover:from-orange-600 group-hover:via-orange-400 group-hover:to-orange-500 transition-colors" />
              <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-600/20 via-orange-400/30 to-orange-500/20 blur-sm" />

              <div className="absolute top-2 right-2 w-10 h-10 border-r-2 border-t-2 border-orange-400/50 group-hover:border-orange-400 transition-colors shadow-[0_0_12px_rgba(249,115,22,0.2)]" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-orange-600/40 group-hover:border-orange-600 transition-colors" />

              <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-gradient-to-r from-orange-900/50 to-orange-800/50 ring-2 ring-orange-500/30 text-orange-300 shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                {c.tag}
              </span>

              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mt-4 mb-3 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />

              <h3 className="text-lg font-semibold text-white group-hover:text-orange-50 transition-colors mb-2">
                {c.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 text-sm mb-5 transition-colors">{c.quote}</p>

              <div className="h-36 w-full rounded-lg bg-black border-2 border-gray-800 group-hover:border-orange-500/50 overflow-hidden transition-colors relative">
                <Image
                  src={c.image || "/placeholder.svg?height=160&width=640&query=case study image"}
                  alt={`${c.title} placeholder`}
                  width={640}
                  height={160}
                  className="h-full w-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                />
                {/* Orange overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-orange-700/30 via-orange-500/50 to-orange-300/30 group-hover:from-orange-700 group-hover:via-orange-500 group-hover:to-orange-300 transition-colors" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
