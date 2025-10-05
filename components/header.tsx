"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const nav = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-gray-800 bg-black/95 backdrop-blur relative">
      {/* Orange accent line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-800/30 via-orange-500 to-orange-300/50" />
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-800/15 via-orange-500/25 to-orange-300/20 blur-sm" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/militech-logo.webp" alt="MiliTech Logo" className="h-8 w-auto object-contain" />
            <span className="text-lg font-semibold tracking-wider text-white group-hover:text-orange-100 transition-colors">
              Mili<span className="text-orange-500">Tech</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors relative group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-md border-2 border-orange-400 hover:border-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all"
            >
              <a href="#contact">Contact</a>
            </Button>
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-900 hover:text-orange-400 border border-gray-800 hover:border-orange-500 transition-all"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-orange-500/30 mt-2">
            <div className="flex flex-col gap-2 pt-4">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-orange-400 border-l-2 border-transparent hover:border-orange-500 transition-all"
                >
                  {item.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-md shadow-[0_0_15px_rgba(249,115,22,0.3)]"
              >
                <a href="#contact" onClick={() => setOpen(false)}>
                  Contact
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
    </header>
  )
}
