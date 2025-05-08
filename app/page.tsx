import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  // Datos de ejemplo para categorías
  const categories = [
    { name: "Anillos", slug: "anillos", image: "/placeholder.svg?height=600&width=400&text=Anillos" },
    { name: "Pulseras", slug: "pulseras", image: "/placeholder.svg?height=600&width=400&text=Pulseras" },
    { name: "Aretes", slug: "aretes", image: "/placeholder.svg?height=600&width=400&text=Aretes" },
    { name: "Collares", slug: "collares", image: "/placeholder.svg?height=600&width=400&text=Collares" },
  ]

  // Datos de ejemplo para productos destacados
  const featuredProducts = [
    {
      id: 1,
      name: "Anillo Celestial",
      category: "Anillos",
      price: 12500,
      image: "/placeholder.svg?height=400&width=400&text=Anillo+Celestial",
    },
    {
      id: 2,
      name: "Pulsera Estrella",
      category: "Pulseras",
      price: 8900,
      image: "/placeholder.svg?height=400&width=400&text=Pulsera+Estrella",
    },
    {
      id: 3,
      name: "Aretes Luna",
      category: "Aretes",
      price: 7500,
      image: "/placeholder.svg?height=400&width=400&text=Aretes+Luna",
    },
    {
      id: 4,
      name: "Collar Constelación",
      category: "Collares",
      price: 15900,
      image: "/placeholder.svg?height=400&width=400&text=Collar+Constelación",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-astrela-black text-astrela-pearl py-20 md:py-32">
        <div className="astrela-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Descubre el brillo ético de la <span className="text-astrela-gold">Moissanita</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-astrela-silver">
              Joyería elegante y sostenible para los momentos más especiales de tu vida
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/coleccion" className="btn-astrela">
                Ver colección
              </Link>
              <Link href="/moissanita" className="btn-astrela-outline text-astrela-pearl border-astrela-gold">
                Descubrir Moissanita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="astrela-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Categorías</h2>
            <div className="w-20 h-1 bg-astrela-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link href={`/coleccion/${category.slug}`} key={category.slug} className="category-card">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-astrela-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-astrela-pearl text-xl font-bold mb-2">{category.name}</h3>
                      <span className="text-astrela-gold flex items-center text-sm">
                        Ver colección <ArrowRight size={16} className="ml-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Moissanite Section */}
      <section className="bg-astrela-pearl py-20">
        <div className="astrela-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                La Moissanita: <br />
                Belleza Ética y Sostenible
              </h2>
              <p className="mb-6 text-astrela-black/80">
                La Moissanita es una gema creada en laboratorio que ofrece un brillo excepcional, comparable al de los
                diamantes, pero con un origen ético y sostenible. Cada pieza de Astrela está certificada y garantiza la
                más alta calidad.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-astrela-gold mr-2">✦</span>
                  <span>Brillo superior al diamante natural</span>
                </li>
                <li className="flex items-start">
                  <span className="text-astrela-gold mr-2">✦</span>
                  <span>Origen ético y sostenible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-astrela-gold mr-2">✦</span>
                  <span>Certificado de autenticidad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-astrela-gold mr-2">✦</span>
                  <span>Durabilidad excepcional (9.5 en la escala de Mohs)</span>
                </li>
              </ul>
              <Link href="/moissanita" className="btn-astrela inline-block">
                Conocer más
              </Link>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=600&width=600&text=Moissanita"
                alt="Moissanita"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="astrela-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Piezas Destacadas</h2>
            <div className="w-20 h-1 bg-astrela-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link href={`/producto/${product.id}`} key={product.id} className="product-card">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{product.name}</h3>
                  <p className="text-sm text-astrela-black/60 mb-2">{product.category}</p>
                  <p className="font-semibold">${product.price.toLocaleString("es-MX")}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/coleccion" className="btn-astrela inline-block">
              Ver toda la colección
            </Link>
          </div>
        </div>
      </section>

      {/* Ethical Promise */}
      <section className="bg-astrela-black text-astrela-pearl py-20">
        <div className="astrela-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Promesa Ética</h2>
            <p className="text-lg mb-8 text-astrela-silver">
              En Astrela, nos comprometemos a ofrecer joyas éticas y sostenibles. Cada pieza viene con un certificado de
              autenticidad que garantiza el origen responsable de nuestras gemas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 border border-astrela-gold/20">
                <div className="text-astrela-gold text-3xl mb-4">✦</div>
                <h3 className="font-bold mb-2">Origen Ético</h3>
                <p className="text-sm text-astrela-silver">
                  Todas nuestras gemas son creadas en laboratorio, libres de conflictos y con un impacto ambiental
                  mínimo.
                </p>
              </div>
              <div className="text-center p-6 border border-astrela-gold/20">
                <div className="text-astrela-gold text-3xl mb-4">✦</div>
                <h3 className="font-bold mb-2">Calidad Certificada</h3>
                <p className="text-sm text-astrela-silver">
                  Cada Moissanita viene con un certificado que garantiza su autenticidad y calidad excepcional.
                </p>
              </div>
              <div className="text-center p-6 border border-astrela-gold/20">
                <div className="text-astrela-gold text-3xl mb-4">✦</div>
                <h3 className="font-bold mb-2">Artesanía Cuidadosa</h3>
                <p className="text-sm text-astrela-silver">
                  Nuestras joyas son elaboradas por artesanos expertos, asegurando la más alta calidad en cada detalle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20">
        <div className="astrela-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Síguenos en Instagram</h2>
            <div className="w-20 h-1 bg-astrela-gold mx-auto mb-4"></div>
            <p className="text-astrela-black/60">@astrela_oficial</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <Link href="https://instagram.com" key={item} className="hover-scale">
                <div className="relative aspect-square">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Instagram+${item}`}
                    alt={`Instagram post ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-astrela-pearl py-20">
        <div className="astrela-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Únete a Nuestra Lista</h2>
            <p className="mb-8 text-astrela-black/70">
              Suscríbete para recibir noticias sobre nuevas colecciones, ofertas exclusivas y contenido inspirador.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 border border-astrela-gold/30 focus:border-astrela-gold focus:outline-none"
                required
              />
              <button type="submit" className="btn-astrela whitespace-nowrap">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
