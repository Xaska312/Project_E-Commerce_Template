import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ShoppingBag, Heart, Share2, Check } from "lucide-react"

// Datos de ejemplo para productos
const products = [
  {
    id: 1,
    name: "Anillo Celestial",
    category: "Anillos",
    categorySlug: "anillos",
    price: 12500,
    description:
      "El Anillo Celestial está inspirado en la belleza del cosmos. Presenta una Moissanita central de 1 quilate con un corte brillante, rodeada de pequeñas Moissanitas que evocan estrellas distantes. Montado en oro de 18k, este anillo es perfecto para ocasiones especiales o como un anillo de compromiso único.",
    details: [
      "Moissanita central de 1 quilate, corte brillante",
      "Moissanitas laterales de 0.05 quilates cada una",
      "Oro de 18k",
      "Certificado de autenticidad incluido",
      "Disponible en tallas 5-9",
    ],
    images: [
      "/placeholder.svg?height=600&width=600&text=Anillo+Celestial+1",
      "/placeholder.svg?height=600&width=600&text=Anillo+Celestial+2",
      "/placeholder.svg?height=600&width=600&text=Anillo+Celestial+3",
      "/placeholder.svg?height=600&width=600&text=Anillo+Celestial+4",
    ],
    relatedProducts: [2, 3, 4],
  },
  {
    id: 2,
    name: "Anillo Aurora",
    category: "Anillos",
    categorySlug: "anillos",
    price: 15900,
    description:
      "El Anillo Aurora captura la magia de las auroras boreales con su diseño único. Presenta una Moissanita central de 1.5 quilates con un corte ovalado, complementada por pequeñas Moissanitas en un patrón ondulado. Montado en oro blanco de 18k, este anillo es una declaración de elegancia y originalidad.",
    details: [
      "Moissanita central de 1.5 quilates, corte ovalado",
      "Moissanitas laterales de 0.03 quilates cada una",
      "Oro blanco de 18k",
      "Certificado de autenticidad incluido",
      "Disponible en tallas 5-9",
    ],
    images: [
      "/placeholder.svg?height=600&width=600&text=Anillo+Aurora+1",
      "/placeholder.svg?height=600&width=600&text=Anillo+Aurora+2",
      "/placeholder.svg?height=600&width=600&text=Anillo+Aurora+3",
      "/placeholder.svg?height=600&width=600&text=Anillo+Aurora+4",
    ],
    relatedProducts: [1, 3, 4],
  },
  // Más productos...
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  // Productos relacionados
  const relatedProducts = product.relatedProducts
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products

  return (
    <>
      <div className="astrela-container py-12">
        {/* Breadcrumbs */}
        <div className="text-sm mb-8">
          <Link href="/" className="text-astrela-black/60 hover:text-astrela-gold">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/coleccion/${product.categorySlug}`} className="text-astrela-black/60 hover:text-astrela-gold">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-astrela-black">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square">
              <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square border border-astrela-gold/20 hover:border-astrela-gold cursor-pointer"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - Imagen ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-astrela-black/60 mb-4">{product.category}</p>
            <p className="text-2xl font-semibold mb-6">${product.price.toLocaleString("es-MX")}</p>

            <div className="border-t border-b border-astrela-gold/20 py-6 my-6">
              <p className="mb-6">{product.description}</p>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={16} className="text-astrela-gold mr-2 mt-1" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="border border-astrela-gold/20">
                  <select className="py-3 px-4 pr-8 focus:outline-none bg-transparent">
                    <option>Seleccionar talla</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                  </select>
                </div>
                <div className="border border-astrela-gold/20 flex items-center">
                  <button className="px-4 py-3">-</button>
                  <span className="px-4">1</span>
                  <button className="px-4 py-3">+</button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-astrela flex-1 flex items-center justify-center">
                  <ShoppingBag size={18} className="mr-2" />
                  Añadir al carrito
                </button>
                <button className="border border-astrela-gold/20 p-3">
                  <Heart size={20} />
                  <span className="sr-only">Añadir a favoritos</span>
                </button>
                <button className="border border-astrela-gold/20 p-3">
                  <Share2 size={20} />
                  <span className="sr-only">Compartir</span>
                </button>
              </div>
            </div>

            {/* Certificate */}
            <div className="mt-8 p-4 bg-astrela-pearl border border-astrela-gold/20">
              <p className="flex items-center text-sm">
                <Check size={16} className="text-astrela-gold mr-2" />
                <span>Incluye certificado de autenticidad de Moissanita</span>
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8">También te puede gustar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link href={`/producto/${relatedProduct.id}`} key={relatedProduct.id} className="product-card">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={relatedProduct.images[0] || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{relatedProduct.name}</h3>
                  <p className="text-sm text-astrela-black/60 mb-2">{relatedProduct.category}</p>
                  <p className="font-semibold">${relatedProduct.price.toLocaleString("es-MX")}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
