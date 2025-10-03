"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { number: 240, label: "Projects Launched", suffix: "+" },
  { number: 500, label: "Happy Clients", suffix: "+" },
  { number: 80, label: "In Progress", suffix: "" },
  { number: 211, label: "Websites Created", suffix: "" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), {
      threshold: 0.15,
    })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    stats.forEach((stat, index) => {
      let current = 0
      const end = stat.number
      const duration = 1800
      const increment = end / (duration / 16)
      const t = setInterval(() => {
        current += increment
        setCounts((prev) => {
          const copy = [...prev]
          copy[index] = Math.min(end, Math.floor(current))
          return copy
        })
        if (current >= end) clearInterval(t)
      }, 16)
    })
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced orange accent frame with full spectrum and glows */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-800/30 via-orange-500 to-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-orange-800/15 via-orange-500/25 to-orange-300/20 blur-sm" />

      <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-orange-300/50 via-orange-500 to-orange-800/30 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-orange-300/20 via-orange-500/25 to-orange-800/15 blur-sm" />

      <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-orange-600/40 via-orange-500/60 to-orange-400/40 shadow-[0_0_15px_rgba(249,115,22,0.3)]" />
      <div className="absolute top-0 left-0 w-6 h-full bg-gradient-to-b from-orange-600/20 via-orange-500/30 to-orange-400/20 blur-sm" />

      <div className="absolute top-0 right-0 w-3 h-full bg-gradient-to-b from-orange-400/40 via-orange-500/60 to-orange-600/40 shadow-[0_0_15px_rgba(234,88,12,0.4)]" />
      <div className="absolute top-0 right-0 w-6 h-full bg-gradient-to-b from-orange-400/20 via-orange-500/30 to-orange-600/20 blur-sm" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Thin corner accent lines */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative group">
              <div className="text-4xl md:text-6xl font-extrabold mb-2 relative">
                <span className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                  {counts[index]}
                  {stat.suffix}
                </span>
              </div>

              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
