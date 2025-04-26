import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, ShoppingCart, Trash2, TruckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CartPage() {
  // Datos de ejemplo para el carrito
  const cartItems = [
    {
      id: 1,
      name: "Producto Ejemplo 1",
      price: 99.99,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100&text=Producto+1",
    },
    {
      id: 2,
      name: "Producto Ejemplo 2",
      price: 49.99,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100&text=Producto+2",
    },
    {
      id: 3,
      name: "Producto Ejemplo 3",
      price: 29.99,
      quantity: 3,
      image: "/placeholder.svg?height=100&width=100&text=Producto+3",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0 // Envío gratis
  const total = subtotal + shipping

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Carrito de compras</h1>
          <p className="text-muted-foreground">Revisa y actualiza tus productos</p>
        </div>
        <Button asChild>
          <Link href="/productos">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Continuar comprando
          </Link>
        </Button>
      </div>

      {cartItems.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Productos ({cartItems.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Producto</TableHead>
                      <TableHead className="text-right">Precio</TableHead>
                      <TableHead className="text-center">Cantidad</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="relative h-16 w-16 overflow-hidden rounded">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <Link href={`/producto/${item.id}`} className="font-medium hover:underline">
                                {item.name}
                              </Link>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                        <TableCell>
                          <div className="flex items-center justify-center">
                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-none">
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Disminuir cantidad</span>
                            </Button>
                            <div className="flex h-8 w-12 items-center justify-center border-y">{item.quantity}</div>
                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-none">
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Aumentar cantidad</span>
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Eliminar</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Resumen del pedido</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Envío</span>
                  <span className="text-green-600">Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Input placeholder="Código de descuento" />
                  <Button variant="outline">Aplicar</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <TruckIcon className="mr-2 h-4 w-4 text-green-600" />
                  <span>Envío gratis en todos los pedidos</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  Proceder al pago
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <div className="mb-4 rounded-full bg-muted p-6">
            <ShoppingCart className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold">Tu carrito está vacío</h2>
          <p className="mt-2 text-muted-foreground">Parece que aún no has añadido ningún producto a tu carrito.</p>
          <Button className="mt-6" asChild>
            <Link href="/productos">Explorar productos</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
