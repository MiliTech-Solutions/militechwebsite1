"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Code, Database, Brain, Smartphone, BarChart, ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  { icon: Shield, title: "Cybersecurity", description: "Protect your digital assets with end‑to‑end security." },
  { icon: Code, title: "Software Development", description: "Custom software tailored to your business." },
  { icon: Database, title: "ERP Solutions", description: "Streamline operations with enterprise systems." },
  { icon: Brain, title: "AI Integration", description: "Automate and optimize with AI." },
  { icon: Smartphone, title: "Mobile Development", description: "Native and cross‑platform apps." },
  { icon: BarChart, title: "Business Intelligence", description: "Data‑driven insights for decisions." },
]

export function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex((i) => (i + 1) % services.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const goToNext = () => {
    setCurrentIndex((i) => (i + 1) % services.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((i) => (i - 1 + services.length) % services.length)
  }

  const getVisibleServices = () => {
    const visible = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + services.length) % services.length
      visible.push({ ...services[index], position: i, originalIndex: index })
    }
    return visible
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced orange separator lines with gradients and glows */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-800/20 via-orange-500 to-orange-300/40" />
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-800/10 via-orange-500/20 to-orange-300/15 blur-sm" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300/40 via-orange-500 to-orange-800/20" />
      <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-orange-300/15 via-orange-500/20 to-orange-800/10 blur-sm" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Enhanced orange accent lines with variations */}
        <div className="absolute top-10 left-4 w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.4)]" />
        <div className="absolute top-12 left-6 w-16 h-0.5 bg-gradient-to-r from-orange-400 to-orange-300" />
        <div className="absolute bottom-10 right-4 w-32 h-1 bg-gradient-to-l from-orange-500 to-orange-700 shadow-[0_0_10px_rgba(234,88,12,0.4)]" />
        <div className="absolute bottom-12 right-8 w-20 h-0.5 bg-gradient-to-l from-orange-300 to-orange-600" />

        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-10 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
          <h2 className="text-3xl md:text-4xl font-bold text-white pt-12 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            What We Offer
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 mx-auto mt-4 shadow-[0_0_10px_rgba(249,115,22,0.4)]" />
          <div className="w-20 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mt-1" />
          <p className="text-gray-300 mt-3">{"Comprehensive technology solutions for modern enterprises"}</p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-[500px] flex items-center justify-center perspective-1000">
          {/* Navigation Areas */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-0 w-1/3 h-full z-20 flex items-center justify-start pl-8 group"
            aria-label="Previous service"
          >
            <ChevronLeft className="h-8 w-8 text-orange-400/50 group-hover:text-orange-400 transition-colors opacity-0 group-hover:opacity-100" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-0 w-1/3 h-full z-20 flex items-center justify-end pr-8 group"
            aria-label="Next service"
          >
            <ChevronRight className="h-8 w-8 text-orange-400/50 group-hover:text-orange-400 transition-colors opacity-0 group-hover:opacity-100" />
          </button>

          {/* Cards Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {getVisibleServices().map((service, index) => {
              const Icon = service.icon
              const isCenter = service.position === 0
              const isLeft = service.position === -1
              const isRight = service.position === 1

              return (
                <Card
                  key={service.originalIndex}
                  className={`absolute transition-all duration-700 ease-out transform-gpu ${
                    isCenter
                      ? "z-10 scale-110 translate-x-0 opacity-100 bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.3)]"
                      : isLeft
                        ? "z-5 scale-90 -translate-x-80 opacity-60 blur-sm bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-gray-800"
                        : "z-5 scale-90 translate-x-80 opacity-60 blur-sm bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-gray-800"
                  } w-80 h-96 rounded-2xl overflow-hidden`}
                  style={{
                    transform: `
                      translateX(${service.position * 280}px) 
                      scale(${isCenter ? 1.1 : 0.9}) 
                      rotateY(${service.position * -15}deg)
                      translateZ(${isCenter ? 50 : -50}px)
                    `,
                  }}
                >
                  {/* Enhanced orange accent corners with gradients */}
                  <div
                    className={`absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 transition-colors ${
                      isCenter ? "border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]" : "border-orange-400/30"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 transition-colors ${
                      isCenter ? "border-orange-600 shadow-[0_0_15px_rgba(234,88,12,0.2)]" : "border-orange-600/30"
                    }`}
                  />
                  <div
                    className={`absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 transition-colors ${
                      isCenter ? "border-orange-300" : "border-orange-300/30"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 transition-colors ${
                      isCenter ? "border-orange-700" : "border-orange-700/30"
                    }`}
                  />

                  <CardContent className="p-8 text-center relative h-full flex flex-col justify-center">
                    <div
                      className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 transition-colors ${
                        isCenter
                          ? "bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"
                          : "bg-gradient-to-r from-orange-400/40 via-orange-500/40 to-orange-600/40"
                      }`}
                    />
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gradient-to-r from-orange-400/20 via-orange-500/30 to-orange-600/20 blur-sm" />

                    <Icon
                      className={`h-16 w-16 mx-auto mb-6 transition-all duration-700 ${
                        isCenter
                          ? "text-orange-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.8)]"
                          : "text-orange-500/60 drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]"
                      }`}
                    />

                    <h3
                      className={`text-2xl font-bold mb-4 transition-all duration-700 ${
                        isCenter ? "text-white" : "text-white/70"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <div
                      className={`w-16 h-1 mx-auto mb-6 transition-colors ${
                        isCenter
                          ? "bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.4)]"
                          : "bg-gradient-to-r from-orange-600/40 to-orange-400/40"
                      }`}
                    />
                    <div
                      className={`w-12 h-0.5 mx-auto mb-6 transition-colors ${
                        isCenter
                          ? "bg-gradient-to-r from-orange-300 to-orange-700"
                          : "bg-gradient-to-r from-orange-300/40 to-orange-700/40"
                      }`}
                    />

                    <p className={`transition-all duration-700 ${isCenter ? "text-gray-300" : "text-gray-400/70"}`}>
                      {service.description}
                    </p>

                    {/* Bottom accent line */}
                    <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 transition-colors ${
                        isCenter
                          ? "bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300"
                          : "bg-gradient-to-r from-orange-700/30 via-orange-500/30 to-orange-300/30"
                      }`}
                    />
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Enhanced Navigation Dots */}
        <div className="mt-12 flex justify-center gap-3">
          {services.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-3 w-10 rounded-full transition-all border-2 relative overflow-hidden ${
                i === currentIndex
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                  : "bg-transparent border-orange-500/50 hover:border-orange-500 hover:shadow-[0_0_10px_rgba(249,115,22,0.3)]"
              }`}
              onClick={() => setCurrentIndex(i)}
            >
              {i === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300/30 to-orange-700/30 animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}
