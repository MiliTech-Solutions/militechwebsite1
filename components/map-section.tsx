export function MapSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced orange separators */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-800/30 via-orange-500 to-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-800/15 via-orange-500/25 to-orange-300/20 blur-sm" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300/50 via-orange-500 to-orange-800/30 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-12 left-4 w-32 h-1 bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
        <div className="absolute bottom-12 right-4 w-40 h-1 bg-gradient-to-l from-orange-500 to-orange-700 shadow-[0_0_15px_rgba(234,88,12,0.5)]" />

        <div className="text-center mb-10 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.6)]" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-12 bg-gradient-to-b from-orange-400/20 to-orange-600/20 blur-sm" />

          <h2 className="text-3xl md:text-4xl font-bold text-white pt-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Find Us
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 mx-auto mt-4 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mt-1" />

          <p className="text-gray-300 mt-4">{"Visit our office in Islamabad"}</p>
        </div>

        <div className="rounded-lg overflow-hidden border-4 border-gray-800 hover:border-orange-500/50 transition-colors relative">
          {/* Enhanced orange frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/30 via-orange-400/40 to-orange-500/30 rounded-lg blur-sm" />
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600" />
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-orange-400 to-orange-600" />
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-orange-600 to-orange-400" />

          {/* Corner accents */}
          <div className="absolute top-2 left-2 w-12 h-12 border-l-2 border-t-2 border-orange-300" />
          <div className="absolute top-2 right-2 w-12 h-12 border-r-2 border-t-2 border-orange-300" />
          <div className="absolute bottom-2 left-2 w-12 h-12 border-l-2 border-b-2 border-orange-700" />
          <div className="absolute bottom-2 right-2 w-12 h-12 border-r-2 border-b-2 border-orange-700" />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.0123456789!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzA0LjAiTiA3M8KwMDInNTIuNCJF!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full relative z-10"
          />
        </div>
      </div>
    </section>
  )
}
