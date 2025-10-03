import Link from "next/link"
import { Mail, Phone, Clock } from "lucide-react"

export function Footer() {
  const services = [
    "Oracle EBS Implementation",
    "Cybersecurity Services",
    "Custom Software Development",
    "Business Intelligence",
    "Mobile App Development",
    "Project Management",
  ]

  return (
    <footer className="bg-black border-t-4 border-orange-500 relative overflow-hidden">
      {/* Enhanced orange accent elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600/50 via-orange-400/70 to-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-600/25 via-orange-400/35 to-orange-500/25 blur-sm" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Decorative corner elements */}
        <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-orange-400/50" />
        <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-orange-500/50" />
        <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-orange-600/40" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-orange-700/40" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="absolute -top-2 left-0 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.4)]" />

            <h3 className="text-xl font-bold text-orange-500 mb-4 pt-4 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]">
              MiliTech
            </h3>

            <div className="w-16 h-0.5 bg-gradient-to-r from-orange-600 to-orange-400 mb-4" />

            <p className="text-gray-300 mb-4 border-l-2 border-orange-500/30 pl-3">
              Professional team for your professional needs
            </p>

            <div className="space-y-2 text-gray-300">
              <div className="flex items-center group">
                <Mail className="h-4 w-4 text-orange-500 mr-2 group-hover:text-orange-400 transition-colors" />
                <span className="group-hover:text-orange-100 transition-colors">info@inotechsoln.com</span>
              </div>
              <div className="flex items-center group">
                <Phone className="h-4 w-4 text-orange-500 mr-2 group-hover:text-orange-400 transition-colors" />
                <span className="group-hover:text-orange-100 transition-colors">051-8778995</span>
              </div>
              <div className="flex items-center group">
                <Clock className="h-4 w-4 text-orange-500 mr-2 group-hover:text-orange-400 transition-colors" />
                <span className="group-hover:text-orange-100 transition-colors">Mon to Fri, 09:00 – 18:00</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-2 left-0 w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />

            <h3 className="text-xl font-bold text-white mb-4 pt-4">Services</h3>

            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 mb-4" />

            <ul className="space-y-2">
              {services.map((s, i) => (
                <li key={i}>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-400 transition-colors border-l-2 border-transparent hover:border-orange-500/50 pl-2 group"
                  >
                    <span className="group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">{s}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -top-2 left-0 w-18 h-1 bg-gradient-to-r from-orange-700 to-orange-500 shadow-[0_0_8px_rgba(234,88,12,0.4)]" />

            <h3 className="text-xl font-bold text-white mb-4 pt-4">Quick Links</h3>

            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-600 to-orange-300 mb-4" />

            <ul className="space-y-2">
              {[
                { label: "Industries", href: "#industries" },
                { label: "Products", href: "#products" },
                { label: "Success Stories", href: "#stories" },
                { label: "Contact", href: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors border-l-2 border-transparent hover:border-orange-500/50 pl-2 group"
                  >
                    <span className="group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-orange-500/30 mt-8 pt-8 text-center relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.4)]" />

          <p className="text-gray-400 pt-4">© 2025 MiliTech – Tassawar Kareem. All rights reserved.</p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-800/30 via-orange-500 to-orange-300/50" />
    </footer>
  )
}
