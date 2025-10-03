import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    title: "Shikayat App",
    description:
      "AI-powered complaint resolution platform that streamlines customer service and automates issue tracking and resolution.",
    image: "/placeholder.svg?height=200&width=300",
    features: ["AI-powered categorization", "Automated routing", "Real-time tracking", "Analytics dashboard"],
  },
  {
    title: "AI Hotel Booking",
    description:
      "Intelligent reservation system for hotels with AI-driven pricing optimization and customer service automation.",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Dynamic pricing", "Smart recommendations", "Automated check-in", "Guest communication"],
  },
  {
    title: "Hospital Management System (HMIS)",
    description:
      "Comprehensive healthcare management solution covering patient records, appointments, billing, and medical inventory.",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Patient management", "Appointment scheduling", "Billing system", "Inventory tracking"],
  },
  {
    title: "Inventory Management",
    description:
      "Advanced inventory tracking and management system with real-time monitoring and automated reordering capabilities.",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Real-time tracking", "Automated alerts", "Supplier management", "Reporting tools"],
  },
  {
    title: "Financial Management System",
    description:
      "Complete financial management solution with accounting, budgeting, and financial reporting capabilities.",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Accounting automation", "Budget planning", "Financial reporting", "Audit trails"],
  },
  {
    title: "HRMS (Human Resource Management)",
    description:
      "Comprehensive HR management system covering employee lifecycle, payroll, performance, and compliance management.",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Employee records", "Payroll processing", "Performance tracking", "Leave management"],
  },
  {
    title: "CCTV Surveillance",
    description:
      "Advanced video surveillance system with AI-powered analytics, facial recognition, and intelligent monitoring.",
    image: "/placeholder.svg?height=200&width=300",
    features: ["AI analytics", "Facial recognition", "Motion detection", "Remote monitoring"],
  },
  {
    title: "Media Archiving",
    description:
      "Digital media archiving solution for long-term storage, organization, and retrieval of multimedia content.",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Automated indexing", "Search capabilities", "Format conversion", "Cloud integration"],
  },
  {
    title: "GIS Mapping",
    description:
      "Geographic Information System for spatial data analysis, mapping, and location-based decision making.",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Interactive maps", "Spatial analysis", "Data visualization", "GPS integration"],
  },
  {
    title: "Online Exam System",
    description:
      "Comprehensive e-learning and examination platform with secure testing, automated grading, and analytics.",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Secure testing", "Automated grading", "Question banks", "Performance analytics"],
  },
  {
    title: "Campus Management System",
    description:
      "Complete educational institution management system covering academics, administration, and student services.",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Student records", "Course management", "Fee collection", "Academic reporting"],
  },
  {
    title: "Access Control / Perimeter Security",
    description:
      "Advanced security system with biometric access control, perimeter monitoring, and intrusion detection.",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Biometric authentication", "Access logs", "Intrusion detection", "Mobile integration"],
  },
]

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Innovative software solutions designed to solve real-world business challenges. Each product is built with
              cutting-edge technology and user-centric design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 hover:border-orange-500 transition-colors group overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-orange-500 transition-colors">
                    {product.title}
                  </CardTitle>
                  <p className="text-gray-300 text-sm">{product.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600 text-white flex-1">
                      <Link href="/contact">Request Demo</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                    >
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
