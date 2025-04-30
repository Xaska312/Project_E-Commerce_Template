import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProductPage({ params }: { params: { id: string } }) {
  // En una aplicación real, aquí obtendrías los datos del producto desde una API o base de datos
  const product = {
    id: params.id,
    name: `Producto Ejemplo ${params.id}`,
    description:
      "Este es un producto de ejemplo con una descripción detallada. Incluye características de alta calidad y está diseñado para durar. Perfecto para uso diario y disponible en varios colores.",
    price: 99.99,
    originalPrice: 129.99,
    discount: 23,
    rating: 4.5,
    reviews: 128,
    stock: 15,
    images: [
      `/placeholder.svg?height=600&width=600&text=Producto+${params.id}`,
      `/placeholder.svg?height=600&width=600&text=Imagen+2`,
      `/placeholder.svg?height=600&width=600&text=Imagen+3`,
      `/placeholder.svg?height=600&width=600&text=Imagen+4`,
    ],
    features: [
      "Característica 1: Descripción detallada de esta característica",
      "Característica 2: Otra característica importante del producto",
      "Característica 3: Una característica más que hace único a este producto",
      "Característica 4: Última característica destacable",
    ],
    specifications: {
      Dimensiones: "10 x 20 x 5 cm",
      Peso: "500g",
      Material: "Aluminio",
      Color: "Negro",
      Garantía: "2 años",
    },
    relatedProducts: [1, 2, 3, 4].map((i) => ({
      id: i,
      name: `Producto Relacionado ${i}`,
      price: 89.99,
      image: `/placeholder.svg?height=300&width=300&text=Relacionado+${i}`,
    })),
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/productos" className="text-muted-foreground hover:text-foreground">
          Productos
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Imágenes del producto */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">{product.discount}% OFF</Badge>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-md border">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Imagen ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : i < product.rating
                          ? "fill-yellow-400 text-yellow-400" // Para medias estrellas, simplificado
                          : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reseñas)
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            <p className="text-sm text-green-600">¡En stock! Disponible: {product.stock} unidades</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" className="rounded-none">
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Disminuir cantidad</span>
                </Button>
                <span className="w-12 text-center">1</span>
                <Button variant="ghost" size="icon" className="rounded-none">
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Aumentar cantidad</span>
                </Button>
              </div>
              <Button className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Añadir al carrito
              </Button>
            </div>
            <Button variant="outline" className="w-full">
              Comprar ahora
            </Button>
          </div>

          <div className="space-y-2 border-t pt-4">
            <div className="flex items-center gap-2 text-sm">
              <Truck className="h-5 w-5 text-green-600" />
              <span>Envío gratis en pedidos superiores a $50</span>
            </div>
            <p className="text-sm text-muted-foreground">Entrega estimada: 3-5 días hábiles</p>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Descripción</h3>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Características principales</h3>
            <ul className="space-y-1">
              {product.features.map((feature, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tabs de información adicional */}
      <div className="mt-12">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start border-b rounded-none">
            <TabsTrigger value="details">Detalles</TabsTrigger>
            <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
            <TabsTrigger value="reviews">Reseñas</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="py-4">
            <div className="space-y-4">
              <p>
                {product.description} Este producto ha sido diseñado pensando en la durabilidad y la funcionalidad.
                Fabricado con materiales de alta calidad, es resistente al desgaste diario y mantiene su aspecto como
                nuevo durante más tiempo.
              </p>
              <p>
                Ideal para uso en el hogar o la oficina, este producto combina estilo y practicidad. Su diseño
                ergonómico lo hace cómodo de usar, mientras que su estética moderna se adapta a cualquier entorno.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-2">
                  <span className="font-medium">{key}</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="py-4">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-5xl font-bold">{product.rating}</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : i < product.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{product.reviews} reseñas</div>
                </div>
                <div className="flex-1 space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const percentage = star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2
                    return (
                      <div key={star} className="flex items-center gap-2">
                        <div className="flex items-center text-sm">
                          {star} <Star className="h-3 w-3 ml-1 fill-current" />
                        </div>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-400" style={{ width: `${percentage}%` }} />
                        </div>
                        <div className="text-sm text-muted-foreground w-10">{percentage}%</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "María García",
                    date: "Hace 2 semanas",
                    rating: 5,
                    comment:
                      "Excelente producto, cumple con todas mis expectativas. La calidad es muy buena y el envío fue rápido.",
                  },
                  {
                    name: "Juan Pérez",
                    date: "Hace 1 mes",
                    rating: 4,
                    comment:
                      "Buen producto, relación calidad-precio adecuada. Le quito una estrella porque tardó un poco más de lo esperado en llegar.",
                  },
                  {
                    name: "Ana Rodríguez",
                    date: "Hace 2 meses",
                    rating: 5,
                    comment: "¡Me encanta! Es exactamente lo que estaba buscando. Muy recomendable.",
                  },
                ].map((review, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-2 text-sm">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button variant="outline" className="w-full">
                Ver todas las reseñas
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Productos relacionados */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Productos relacionados</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {product.relatedProducts.map((relatedProduct) => (
            <Link href={`/producto/${relatedProduct.id}`} key={relatedProduct.id} className="group">
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative aspect-square">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-3">
                  <h3 className="font-medium text-sm">{relatedProduct.name}</h3>
                  <p className="font-bold mt-1">${relatedProduct.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
