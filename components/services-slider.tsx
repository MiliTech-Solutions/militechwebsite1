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
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }

  // Get the services to display in a 3-card layout
  const getVisibleServices = () => {
    const visible = []
    // Center card
    visible.push({ ...services[currentIndex], position: 0, originalIndex: currentIndex })
    // Left card
    const prevIndex = (currentIndex - 1 + services.length) % services.length
    visible.push({ ...services[prevIndex], position: -1, originalIndex: prevIndex })
    // Right card
    const nextIndex = (currentIndex + 1) % services.length
    visible.push({ ...services[nextIndex], position: 1, originalIndex: nextIndex })

    return visible.sort((a, b) => a.position - b.position)
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Fancy orange separator lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-800/20 via-orange-500 to-orange-300/40" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300/40 via-orange-500 to-orange-800/20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What We Offer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mt-4" />
          <p className="text-gray-300 mt-3">Comprehensive technology solutions for modern enterprises</p>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[500px] flex items-center justify-center" style={{ perspective: "1000px" }}>
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full text-orange-400 hover:bg-white/10"
            aria-label="Previous service"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full text-orange-400 hover:bg-white/10"
            aria-label="Next service"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {getVisibleServices().map((service) => {
            const Icon = service.icon
            const isCenter = service.position === 0
            const isLeft = service.position === -1

            return (
              <Card
                key={service.originalIndex}
                className={`absolute transition-all duration-700 ease-in-out w-80 h-96 rounded-2xl overflow-hidden transform-gpu ${
                  isCenter
                    ? "z-10 scale-110 bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500 shadow-2xl shadow-orange-500/10"
                    : "z-0 scale-90 opacity-60 bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-gray-800"
                }`}
                style={{
                  transform: `
                    translateX(${service.position * 280}px) 
                    scale(${isCenter ? 1.1 : 0.9}) 
                    rotateY(${service.position * -15}deg)
                    translateZ(${isCenter ? 0 : -50}px)
                  `,
                }}
              >
                {/* Decorative corner elements */}
                <div className={`absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 transition-colors ${isCenter ? 'border-orange-400':'border-orange-400/30'}`} />
                <div className={`absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 transition-colors ${isCenter ? 'border-orange-600':'border-orange-600/30'}`} />
                
                <CardContent className="p-8 text-center relative h-full flex flex-col justify-center items-center">
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 transition-colors ${isCenter ? 'bg-gradient-to-r from-orange-400 to-orange-600':'bg-gradient-to-r from-orange-400/40 to-orange-600/40'}`} />
                  
                  <Icon className={`h-16 w-16 mx-auto mb-6 transition-colors duration-700 ${isCenter ? "text-orange-500" : "text-orange-500/60"}`} />
                  
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-700 ${isCenter ? 'text-white' : 'text-white/70'}`}>
                    {service.title}
                  </h3>
                  
                  <div className={`w-12 h-0.5 mx-auto mb-6 transition-colors ${isCenter ? 'bg-gradient-to-r from-orange-600 to-orange-400':'bg-gradient-to-r from-orange-600/40 to-orange-400/40'}`} />
                  
                  <p className={`transition-colors duration-700 ${isCenter ? "text-gray-300" : "text-gray-400/70"}`}>
                    {service.description}
                  </p>
                  
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-0.5 transition-colors ${isCenter ? 'bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300':'bg-gradient-to-r from-orange-700/30 via-orange-500/30 to-orange-300/30'}`} />
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        {/* Navigation Dots */}
        <div className="mt-12 flex justify-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              className={`h-3 w-3 rounded-full transition-all ${
                i === currentIndex ? "bg-orange-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
