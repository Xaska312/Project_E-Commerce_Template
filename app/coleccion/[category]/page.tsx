import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Datos de ejemplo para categorías
const categories = [
  {
    name: "Anillos",
    slug: "anillos",
    description:
      "Descubre nuestra colección de anillos con Moissanita, diseñados para momentos especiales y uso diario.",
    products: [
      {
        id: 1,
        name: "Anillo Celestial",
        price: 12500,
        image: "/placeholder.svg?height=400&width=400&text=Anillo+Celestial",
      },
      { id: 2, name: "Anillo Aurora", price: 15900, image: "/placeholder.svg?height=400&width=400&text=Anillo+Aurora" },
      {
        id: 3,
        name: "Anillo Estrella",
        price: 9800,
        image: "/placeholder.svg?height=400&width=400&text=Anillo+Estrella",
      },
      { id: 4, name: "Anillo Lunar", price: 11200, image: "/placeholder.svg?height=400&width=400&text=Anillo+Lunar" },
      { id: 5, name: "Anillo Cosmos", price: 18500, image: "/placeholder.svg?height=400&width=400&text=Anillo+Cosmos" },
      {
        id: 6,
        name: "Anillo Nebulosa",
        price: 14300,
        image: "/placeholder.svg?height=400&width=400&text=Anillo+Nebulosa",
      },
    ],
  },
  {
    name: "Pulseras",
    slug: "pulseras",
    description: "Elegantes pulseras con Moissanita que añaden un toque de brillo a cualquier ocasión.",
    products: [
      {
        id: 7,
        name: "Pulsera Estrella",
        price: 8900,
        image: "/placeholder.svg?height=400&width=400&text=Pulsera+Estrella",
      },
      {
        id: 8,
        name: "Pulsera Constelación",
        price: 10500,
        image: "/placeholder.svg?height=400&width=400&text=Pulsera+Constelación",
      },
      {
        id: 9,
        name: "Pulsera Galaxia",
        price: 12800,
        image: "/placeholder.svg?height=400&width=400&text=Pulsera+Galaxia",
      },
      {
        id: 10,
        name: "Pulsera Cometa",
        price: 9200,
        image: "/placeholder.svg?height=400&width=400&text=Pulsera+Cometa",
      },
    ],
  },
  {
    name: "Aretes",
    slug: "aretes",
    description: "Aretes con Moissanita que capturan la luz y realzan tu belleza natural.",
    products: [
      { id: 11, name: "Aretes Luna", price: 7500, image: "/placeholder.svg?height=400&width=400&text=Aretes+Luna" },
      {
        id: 12,
        name: "Aretes Estrellas",
        price: 8200,
        image: "/placeholder.svg?height=400&width=400&text=Aretes+Estrellas",
      },
      { id: 13, name: "Aretes Cosmos", price: 9500, image: "/placeholder.svg?height=400&width=400&text=Aretes+Cosmos" },
      {
        id: 14,
        name: "Aretes Aurora",
        price: 11200,
        image: "/placeholder.svg?height=400&width=400&text=Aretes+Aurora",
      },
    ],
  },
  {
    name: "Collares",
    slug: "collares",
    description: "Collares con Moissanita que se convierten en el centro de atención de cualquier conjunto.",
    products: [
      {
        id: 15,
        name: "Collar Constelación",
        price: 15900,
        image: "/placeholder.svg?height=400&width=400&text=Collar+Constelación",
      },
      {
        id: 16,
        name: "Collar Estrella",
        price: 13500,
        image: "/placeholder.svg?height=400&width=400&text=Collar+Estrella",
      },
      { id: 17, name: "Collar Luna", price: 14800, image: "/placeholder.svg?height=400&width=400&text=Collar+Luna" },
      {
        id: 18,
        name: "Collar Galaxia",
        price: 17200,
        image: "/placeholder.svg?height=400&width=400&text=Collar+Galaxia",
      },
    ],
  },
]

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categories.find((cat) => cat.slug === params.category)

  if (!category) {
    notFound()
  }

  return (
    <>
      {/* Category Header */}
      <section className="bg-astrela-black text-astrela-pearl py-16">
        <div className="astrela-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{category.name}</h1>
            <div className="w-20 h-1 bg-astrela-gold mx-auto mb-6"></div>
            <p className="text-astrela-silver">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="astrela-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.products.map((product) => (
              <Link href={`/producto/${product.id}`} key={product.id} className="product-card">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <p className="font-semibold">${product.price.toLocaleString("es-MX")}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
