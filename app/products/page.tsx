
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import Link from "next/link"
  import Image from "next/image"
  import { products } from "@/lib/products"
  
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
  