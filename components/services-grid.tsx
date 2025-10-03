import { Shield, Lock, Eye, Database, Users, BadgeCheck } from "lucide-react"

const services = [
  { icon: Shield, title: "Threat Intelligence", desc: "Advanced detection and analysis for emerging risks." },
  { icon: Lock, title: "Security Consulting", desc: "Strategic guidance from certified experts." },
  { icon: Eye, title: "Incident Response", desc: "Rapid remediation to restore operations." },
  { icon: Database, title: "Risk Assessment", desc: "Comprehensive evaluations of your infrastructure." },
  { icon: Users, title: "Security Training", desc: "Executive briefings and staff programs." },
  { icon: BadgeCheck, title: "Compliance Management", desc: "Adherence to standards and regulations." },
]

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced orange separators and accent lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-800/30 via-orange-500 to-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-800/15 via-orange-500/25 to-orange-300/20 blur-sm" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300/50 via-orange-500 to-orange-800/30 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-orange-300/20 via-orange-500/25 to-orange-800/15 blur-sm" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Enhanced decorative orange lines */}
        <div className="absolute top-12 left-4 w-32 h-1 bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
        <div className="absolute top-14 left-8 w-20 h-0.5 bg-gradient-to-r from-orange-400 to-orange-300" />
        <div className="absolute bottom-12 right-4 w-40 h-1 bg-gradient-to-l from-orange-500 to-orange-700 shadow-[0_0_15px_rgba(234,88,12,0.5)]" />
        <div className="absolute bottom-14 right-10 w-24 h-0.5 bg-gradient-to-l from-orange-300 to-orange-600" />

        <div className="text-center mb-12 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-16 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_25px_rgba(249,115,22,0.6)]" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-16 bg-gradient-to-b from-orange-400/20 to-orange-600/20 blur-sm" />

          <h2 className="text-3xl md:text-4xl font-bold text-white pt-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Our Services
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 mx-auto mt-4 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
          <div className="w-24 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mt-1" />
          <div className="w-40 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent mx-auto mt-2" />

          <p className="text-gray-300 mt-4">{"Comprehensive cybersecurity solutions tailored to your requirements."}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className="group rounded-lg border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-black hover:bg-gradient-to-br hover:from-orange-950/20 hover:to-orange-900/10 hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)] transition-all p-8 relative overflow-hidden"
              >
                {/* Enhanced orange accent elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600/40 via-orange-400/60 to-orange-500/40 group-hover:from-orange-600 group-hover:via-orange-400 group-hover:to-orange-500 transition-colors" />
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-600/20 via-orange-400/30 to-orange-500/20 blur-sm" />

                <div className="absolute top-2 right-2 w-10 h-10 border-r-2 border-t-2 border-orange-400/50 group-hover:border-orange-400 transition-colors shadow-[0_0_12px_rgba(249,115,22,0.2)]" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-orange-600/40 group-hover:border-orange-600 transition-colors" />

                <Icon className="h-6 w-6 text-gray-200 group-hover:text-orange-400 mb-4 transition-all drop-shadow-[0_0_10px_rgba(249,115,22,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]" />

                <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mb-3 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
                <div className="w-8 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mb-4" />

                <h3 className="text-lg font-semibold text-white group-hover:text-orange-50 transition-colors mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 text-sm mb-6 transition-colors">{s.desc}</p>

                <a
                  href="#contact"
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm border-b-2 border-orange-500/40 hover:border-orange-400 transition-all pb-1 group/link"
                >
                  {"Learn More"}
                  <span className="ml-1 group-hover/link:translate-x-1 transition-transform">{"→"}</span>
                </a>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-orange-700/30 via-orange-500/50 to-orange-300/30 group-hover:from-orange-700 group-hover:via-orange-500 group-hover:to-orange-300 transition-colors" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
