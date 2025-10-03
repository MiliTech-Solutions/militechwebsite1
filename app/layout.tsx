import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "MiliTech Solutions - Secure. Scale. Succeed.",
  description:
    "Pakistan's most trusted Cybersecurity & Managed Services Provider. Your technology partner in tomorrow's digital transformation.",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
