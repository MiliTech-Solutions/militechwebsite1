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
      {/* Enhanced wine-red separators */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-800/30 via-red-900 to-red-950/50 shadow-[0_0_20px_rgba(127,29,29,0.3)]" />
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-red-800/15 via-red-900/25 to-red-950/20 blur-sm" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-950/50 via-red-900 to-red-800/30 shadow-[0_0_20px_rgba(127,29,29,0.3)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-12 left-4 w-32 h-1 bg-gradient-to-r from-red-900 to-red-700 shadow-[0_0_15px_rgba(127,29,29,0.5)]" />
        <div className="absolute bottom-12 right-4 w-40 h-1 bg-gradient-to-l from-red-800 to-red-950 shadow-[0_0_15px_rgba(127,29,29,0.5)]" />

        <div className="text-center mb-12 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-gradient-to-b from-red-700 to-red-900 shadow-[0_0_20px_rgba(127,29,29,0.6)]" />

          <h2 className="text-3xl md:text-4xl font-bold text-white pt-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Trusted by Industry Leaders
          </h2>

          <div className="w-40 h-1 bg-gradient-to-r from-red-900 via-red-700 to-red-800 mx-auto mt-4 shadow-[0_0_12px_rgba(127,29,29,0.5)]" />
          <div className="w-32 h-0.5 bg-gradient-to-r from-red-600 to-red-950 mx-auto mt-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-gradient-to-bl from-[#0A0503] to-[#252525] text-gray-300 border-2 border-gray-600 p-6 hover:shadow-[0_0_30px_rgba(127,29,29,0.2)] hover:border-red-800 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-700 via-red-800 to-red-900 group-hover:from-red-600 group-hover:via-red-700 group-hover:to-red-800 transition-colors" />
              <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-red-700/30 via-red-800/40 to-red-900/30 blur-sm" />

              <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-red-700 group-hover:border-red-800 transition-colors" />

              <div className="flex text-red-800 mb-3 pt-4" aria-label="rating 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current drop-shadow-[0_0_4px_rgba(127,29,29,0.3)]" />
                ))}
              </div>

              <div className="w-12 h-1 bg-gradient-to-r from-red-800 to-red-700 mb-3 shadow-[0_0_6px_rgba(127,29,29,0.4)]" />

              <p className="text-sm text-gray-400 italic mb-5">{'"' + t.quote + '"'}</p>

              <div>
                <p className="font-semibold text-gray-200">{t.name}</p>
                <p className="text-xs text-red-700">{t.role}</p>
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-red-900 via-red-800 to-red-700 shadow-[0_0_8px_rgba(127,29,29,0.3)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
