import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Filter, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export default function ProductsPage() {
  // Datos de ejemplo para productos
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Producto Ejemplo ${i + 1}`,
    category: `Categoría ${(i % 4) + 1}`,
    price: 99.99 - (i % 3) * 10,
    originalPrice: i % 3 === 0 ? 129.99 : null,
    isNew: i % 7 === 0,
    isOnSale: i % 5 === 0,
  }))

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Productos</h1>
              <p className="text-muted-foreground">Explora nuestra selección de productos</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-full md:w-auto">
                <Input placeholder="Buscar productos..." className="pr-8 md:w-[200px] lg:w-[300px]" />
                <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <span className="sr-only">Buscar</span>
                </Button>
              </div>
              <Select defaultValue="featured">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destacados</SelectItem>
                  <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
                  <SelectItem value="newest">Más recientes</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="md:hidden">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filtrar</span>
              </Button>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="hidden md:block">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Categorías</h3>
                  <div className="space-y-3">
                    {["Todas", "Electrónica", "Ropa", "Hogar", "Deportes"].map((category, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={`category-${i}`} defaultChecked={i === 0} />
                        <label
                          htmlFor={`category-${i}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Precio</h3>
                  <div className="space-y-4">
                    <Slider defaultValue={[0, 100]} max={100} step={1} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">$0</span>
                      <span className="text-sm">$1000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Estado</h3>
                  <div className="space-y-3">
                    {["En oferta", "Nuevos", "En stock"].map((status, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={`status-${i}`} />
                        <label
                          htmlFor={`status-${i}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {status}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="md:hidden">
                <Accordion type="single" collapsible className="w-full mb-6">
                  <AccordionItem value="filters">
                    <AccordionTrigger className="flex items-center">
                      <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        <span>Filtros</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-2">
                        <div>
                          <h3 className="mb-4 text-lg font-semibold">Categorías</h3>
                          <div className="space-y-3">
                            {["Todas", "Electrónica", "Ropa", "Hogar", "Deportes"].map((category, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <Checkbox id={`mobile-category-${i}`} defaultChecked={i === 0} />
                                <label
                                  htmlFor={`mobile-category-${i}`}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {category}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-4 text-lg font-semibold">Precio</h3>
                          <div className="space-y-4">
                            <Slider defaultValue={[0, 100]} max={100} step={1} />
                            <div className="flex items-center justify-between">
                              <span className="text-sm">$0</span>
                              <span className="text-sm">$1000</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-4 text-lg font-semibold">Estado</h3>
                          <div className="space-y-3">
                            {["En oferta", "Nuevos", "En stock"].map((status, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <Checkbox id={`mobile-status-${i}`} />
                                <label
                                  htmlFor={`mobile-status-${i}`}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {status}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <Link href={`/producto/${product.id}`} key={product.id} className="group">
                    <Card className="overflow-hidden transition-all hover:shadow-lg">
                      <div className="relative aspect-square">
                        <Image
                          src={`/placeholder.svg?height=400&width=400&text=Producto+${product.id}`}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {product.isNew && <Badge className="bg-blue-500 hover:bg-blue-600">Nuevo</Badge>}
                          {product.isOnSale && <Badge className="bg-red-500 hover:bg-red-600">Oferta</Badge>}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <div>
                          <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
                          {product.originalPrice && (
                            <p className="text-sm line-through text-muted-foreground">
                              ${product.originalPrice.toFixed(2)}
                            </p>
                          )}
                        </div>
                        <Button size="sm">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Añadir
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" disabled>
                    <ChevronDown className="h-4 w-4 rotate-90" />
                    <span className="sr-only">Página anterior</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronDown className="h-4 w-4 -rotate-90" />
                    <span className="sr-only">Página siguiente</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
