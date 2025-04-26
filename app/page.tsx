import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Search, Menu, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menú</span>
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="Logo" />
              <span className="text-xl font-bold">TiendaFácil</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="/productos" className="font-medium transition-colors hover:text-primary">
              Productos
            </Link>
            <Link href="/categorias" className="font-medium transition-colors hover:text-primary">
              Categorías
            </Link>
            <Link href="/ofertas" className="font-medium transition-colors hover:text-primary">
              Ofertas
            </Link>
            <Link href="/contacto" className="font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <form className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar productos..." className="pl-8 w-[200px] lg:w-[300px]" />
              </div>
            </form>
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">3</Badge>
              <span className="sr-only">Carrito</span>
            </Button>
            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Cuenta</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Tu tienda en línea, sin complicaciones
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Productos de calidad con envío rápido y seguro. Compra ahora y recibe en la comodidad de tu hogar.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Ver productos</Button>
                <Button variant="outline" size="lg">
                  Ofertas especiales
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero Image"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Productos Destacados</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Descubre nuestra selección de productos más populares y mejor valorados.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {[1, 2, 3, 4].map((i) => (
              <Link href={`/producto/${i}`} key={i} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative aspect-square">
                    <Image
                      src={`/placeholder.svg?height=400&width=400&text=Producto+${i}`}
                      alt={`Producto ${i}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    {i === 1 && <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">Oferta</Badge>}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">Producto Ejemplo {i}</h3>
                    <p className="text-sm text-muted-foreground">Categoría {i}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-lg">$99.99</p>
                      {i === 1 && <p className="text-sm line-through text-muted-foreground">$129.99</p>}
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
          <div className="flex justify-center mt-10">
            <Button variant="outline" size="lg">
              Ver todos los productos
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Categorías</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explora nuestras categorías y encuentra exactamente lo que estás buscando.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {["Electrónica", "Ropa", "Hogar", "Deportes"].map((category, i) => (
              <Link href={`/categoria/${i + 1}`} key={i} className="group">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${category}`}
                    alt={category}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white font-bold text-xl">{category}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Lo que dicen nuestros clientes</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Opiniones de clientes satisfechos que han comprado en nuestra tienda.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                name: "María García",
                text: "Excelente servicio y productos de calidad. El envío fue rápido y todo llegó en perfectas condiciones.",
              },
              {
                name: "Juan Pérez",
                text: "Me encanta la variedad de productos que ofrecen. Siempre encuentro lo que busco y a buen precio.",
              },
              {
                name: "Ana Rodríguez",
                text: "La atención al cliente es excepcional. Tuve un problema con mi pedido y lo resolvieron de inmediato.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="gold"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mx-0.5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic mb-4">{testimonial.text}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Suscríbete a nuestro boletín</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Recibe las últimas novedades, ofertas exclusivas y descuentos especiales directamente en tu correo.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="tu@email.com" className="flex-1" />
                <Button type="submit">Suscribirse</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="Logo" />
                <span className="text-xl font-bold">TiendaFácil</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Tu solución completa para ventas en línea. Fácil, rápido y seguro.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="text-muted-foreground hover:text-foreground">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/categorias" className="text-muted-foreground hover:text-foreground">
                    Categorías
                  </Link>
                </li>
                <li>
                  <Link href="/ofertas" className="text-muted-foreground hover:text-foreground">
                    Ofertas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Información</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/sobre-nosotros" className="text-muted-foreground hover:text-foreground">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/politica-privacidad" className="text-muted-foreground hover:text-foreground">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos-condiciones" className="text-muted-foreground hover:text-foreground">
                    Términos y condiciones
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">
                  <span className="font-medium">Email:</span> info@tiendafacil.com
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium">Teléfono:</span> +1 234 567 890
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium">Dirección:</span> Calle Ejemplo 123, Ciudad
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2023 TiendaFácil. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
