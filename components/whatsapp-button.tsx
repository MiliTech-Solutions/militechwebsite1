"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923001234567", "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg z-50"
      size="icon"
      aria-label="Open WhatsApp chat"
    >
      <>
        <span className="sr-only">Open WhatsApp chat</span>
        <MessageCircle className="h-7 w-7 text-white" aria-hidden="true" />
      </>
    </Button>
  )
}
