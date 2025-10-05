import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const events = [
  {
    title: "Digital Pakistan",
    date: "August 15, 2024",
    description: "Showcased AI solutions and cybersecurity innovations at Pakistan's premier defense exhibition.",
    image: "https://i.postimg.cc/YCPw1634/7ea29b0361e270535864a61d06fb4f43.jpg",
  },
  {
    title: "Tech Summit Islamabad",
    date: "January 20, 2024",
    description: "Presented ERP solutions and digital transformation strategies to public and private leaders.",
    image: "https://i.postimg.cc/gkRR9sxN/073547e1e29702e6242fe14072c18497.jpg",
  },
  {
    title: "Cybersecurity Workshop",
    date: "November 10, 2023",
    description: "Training on modern cyber threats and our PhishNet simulation toolkit.",
    image: "https://i.postimg.cc/B6YbDLXj/6a92c2c53f7df542f804f1e8324f5e64.jpg",
  },
]

export function EventsSection() {
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

        <div className="text-center mb-12 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.6)]" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-12 bg-gradient-to-b from-orange-400/20 to-orange-600/20 blur-sm" />

          <h2 className="text-3xl md:text-4xl font-bold text-white pt-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Recent Events
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 mx-auto mt-4 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
          <div className="w-24 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mt-1" />

          <p className="text-gray-300 mt-4">{"Our participation in industry events and exhibitions"}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <Card
              key={i}
              className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)] transition-all overflow-hidden relative group"
            >
              {/* Enhanced orange accents */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600/40 via-orange-400/60 to-orange-500/40 group-hover:from-orange-600 group-hover:via-orange-400 group-hover:to-orange-500 transition-colors z-10" />
              <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-600/20 via-orange-400/30 to-orange-500/20 blur-sm z-10" />

              <div className="absolute top-2 right-2 w-10 h-10 border-r-2 border-t-2 border-orange-400/50 group-hover:border-orange-400 transition-colors shadow-[0_0_12px_rgba(249,115,22,0.2)] z-10" />

              <div className="relative h-40 overflow-hidden">
                <Image
                  src={e.image || "/placeholder.svg"}
                  alt={e.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Orange overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <CardHeader className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />

                <CardTitle className="text-white group-hover:text-orange-50 transition-colors pt-4">
                  {e.title}
                </CardTitle>

                <p className="text-orange-500 text-sm drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]">{e.date}</p>
                <div className="w-12 h-0.5 bg-gradient-to-r from-orange-600 to-orange-400 mt-2" />
              </CardHeader>

              <CardContent className="relative">
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{e.description}</p>

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
