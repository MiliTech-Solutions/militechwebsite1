import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "MiliTech's expertise in cybersecurity helped us achieve SOC 2 compliance ahead of schedule.",
    name: "Sarah Johnson",
    role: "CISO, TechCorp",
  },
  {
    quote: "Their cloud migration strategy reduced our infrastructure costs by 35% while improving performance.",
    name: "Michael Chen",
    role: "CTO, InnovateLabs",
  },
  {
    quote: "The AI-powered analytics platform provided insights we never thought possible.",
    name: "Emily Rodriguez",
    role: "VP Analytics, DataFlow",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
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
            Trusted by Industry Leaders
          </h2>

          <div className="w-40 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 mx-auto mt-4 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
          <div className="w-32 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mt-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-gradient-to-bl from-[#0A0503] to-[#252525] text-gray-300 border-2 border-gray-600 p-6 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:border-red-400 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-red-500 to-red-600 group-hover:from-red-300 group-hover:via-red-400 group-hover:to-red-500 transition-colors" />
              <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-red-400/30 via-red-500/40 to-red-600/30 blur-sm" />

              <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-red-400 group-hover:border-red-500 transition-colors" />

              <div className="flex text-red-500 mb-3 pt-4" aria-label="rating 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current drop-shadow-[0_0_4px_rgba(239,68,68,0.3)]" />
                ))}
              </div>

              <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-400 mb-3 shadow-[0_0_6px_rgba(239,68,68,0.4)]" />

              <p className="text-sm text-gray-400 italic mb-5">{'"' + t.quote + '"'}</p>

              <div>
                <p className="font-semibold text-gray-200">{t.name}</p>
                <p className="text-xs text-red-400">{t.role}</p>
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400 shadow-[0_0_8px_rgba(239,68,68,0.3)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
