import { Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Enhanced Background Pattern with orange variations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.15)_0%,rgba(234,88,12,0.08)_40%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,154,0,0.03)_0%,transparent_60%)]" />

      <div className="w-full h-screen flex">
        {/* Left Content - Exactly 50% */}
        <div className="w-1/2 flex items-center justify-center px-8 lg:px-16 relative">
          <div className="space-y-8 max-w-lg">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  MILI<span className="text-orange-500">TECH</span>
                </span>
                <span className="block text-gray-300 text-3xl sm:text-4xl lg:text-5xl font-light mt-2">SOLUTIONS</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                One of the most trusted cybersecurity & technology companies you could find on the web!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-full px-8 py-4 text-lg font-semibold group border border-orange-400 hover:border-orange-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all"
              >
                <a href="#about" className="flex items-center gap-2">
                  LEARN MORE
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center pt-[91px] gap-[76px]">
              {[
                { name: "FACEBOOK", href: "https://www.facebook.com/share/1DGwgmUirP/" },
                { name: "INSTAGRAM", href: "https://www.instagram.com/militechsoln?igsh=OTVzcWhnZGZ3Ymtw" },
                { name: "LINKEDIN", href: "https://www.linkedin.com/company/militechsolutions-technology-information-media/" },
                { name: "YOUTUBE", href: "https://youtube.com/@militech_solutions?si=iZs2MbZo_iI2B-dI" },
              ].map((social, idx) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-orange-400 transition-all text-xs font-medium tracking-wider"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Visual - Exactly 50% filling full height */}
        <div className="w-1/2 h-full relative">
          {/* Main Image Container - Full height and width */}
          <div
            className="w-full h-full border-l border-gray-800 hover:border-orange-500/50 transition-all hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] flex items-center justify-center relative overflow-hidden"
            style={{
              backgroundImage: "url('https://i.postimg.cc/xjNJs6tW/IMG-20251010-025340.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Orange glow effects */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-500/30 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-600/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-full blur-2xl" />

            {/* Cybersecurity themed visual elements */}
            <div className="absolute inset-8 border border-orange-500/20">
              <div className="absolute top-8 left-8 w-4 h-4 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.6)]" />
              <div className="absolute top-8 right-8 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-orange-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(251,146,60,0.6)]" />
              <div className="absolute bottom-8 right-8 w-4 h-4 bg-orange-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(234,88,12,0.6)]" />

              {/* Additional corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-orange-400/40" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-orange-500/40" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-orange-600/40" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-orange-700/40" />
            </div>

            {/* Floating particles */}
            <div
              className="absolute top-1/4 left-8 w-2 h-2 bg-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute top-1/2 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-1/4 left-12 w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-3/4 right-12 w-1 h-1 bg-orange-300 rounded-full animate-bounce"
              style={{ animationDelay: "1.5s" }}
            />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                  linear-gradient(rgba(249,115,22,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(249,115,22,0.1) 1px, transparent 1px)
                `,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-800/30 via-orange-500 to-orange-300/50" />
    </section>
  )
}
