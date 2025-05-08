import Image from "next/image"
import Link from "next/link"

export default function MoissanitaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-astrela-black text-astrela-pearl py-16">
        <div className="astrela-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Descubre la Moissanita</h1>
            <div className="w-20 h-1 bg-astrela-gold mx-auto mb-6"></div>
            <p className="text-astrela-silver">La alternativa ética y brillante a los diamantes tradicionales</p>
          </div>
        </div>
      </section>

      {/* What is Moissanite */}
      <section className="py-16">
        <div className="astrela-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">¿Qué es la Moissanita?</h2>
              <p className="mb-4">
                La Moissanita es una gema creada en laboratorio que fue descubierta originalmente en 1893 por el químico
                francés Henri Moissan en un cráter de meteorito en Arizona. Esta gema rara se compone de carburo de
                silicio y naturalmente es extremadamente escasa en la Tierra.
              </p>
              <p className="mb-4">
                Hoy en día, la Moissanita se crea en laboratorios especializados, lo que garantiza su origen ético y
                sostenible. A simple vista, es casi indistinguible de un diamante, pero ofrece un brillo y fuego
                superior, además de ser significativamente más accesible.
              </p>
              <p>
                En Astrela, utilizamos únicamente Moissanita de la más alta calidad, certificada y garantizada para
                asegurar su autenticidad y belleza duradera.
              </p>
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

      {/* Comparison */}
      <section className="bg-astrela-pearl py-16">
        <div className="astrela-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Moissanita vs. Diamante</h2>
            <div className="w-20 h-1 bg-astrela-gold mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-astrela-gold/20">
                  <th className="py-4 px-6 text-left">Característica</th>
                  <th className="py-4 px-6 text-left">Moissanita</th>
                  <th className="py-4 px-6 text-left">Diamante</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-astrela-gold/10">
                  <td className="py-4 px-6 font-medium">Brillo</td>
                  <td className="py-4 px-6">Superior (índice de refracción: 2.65-2.69)</td>
                  <td className="py-4 px-6">Alto (índice de refracción: 2.42)</td>
                </tr>
                <tr className="border-b border-astrela-gold/10">
                  <td className="py-4 px-6 font-medium">Dureza</td>
                  <td className="py-4 px-6">9.5 en la escala de Mohs</td>
                  <td className="py-4 px-6">10 en la escala de Mohs</td>
                </tr>
                <tr className="border-b border-astrela-gold/10">
                  <td className="py-4 px-6 font-medium">Origen</td>
                  <td className="py-4 px-6">Creada en laboratorio, ética</td>
                  <td className="py-4 px-6">Minado (con posibles conflictos) o laboratorio</td>
                </tr>
                <tr className="border-b border-astrela-gold/10">
                  <td className="py-4 px-6 font-medium">Impacto ambiental</td>
                  <td className="py-4 px-6">Mínimo</td>
                  <td className="py-4 px-6">Alto (minado) o moderado (laboratorio)</td>
                </tr>
                <tr className="border-b border-astrela-gold/10">
                  <td className="py-4 px-6 font-medium">Precio</td>
                  <td className="py-4 px-6">70-90% menos que un diamante comparable</td>
                  <td className="py-4 px-6">Significativamente más alto</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Longevidad</td>
                  <td className="py-4 px-6">Duradera para toda la vida</td>
                  <td className="py-4 px-6">Duradera para toda la vida</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ethical Benefits */}
      <section className="py-16">
        <div className="astrela-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Beneficios Éticos</h2>
            <div className="w-20 h-1 bg-astrela-gold mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-astrela-black/70">
              Al elegir Moissanita, estás tomando una decisión consciente que beneficia tanto a ti como al planeta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-astrela-gold/20">
              <div className="text-astrela-gold text-3xl mb-4">✦</div>
              <h3 className="font-bold mb-2">Sin Conflictos</h3>
              <p className="text-sm text-astrela-black/70">
                A diferencia de muchos diamantes minados, la Moissanita está libre de conflictos y explotación humana.
              </p>
            </div>
            <div className="text-center p-6 border border-astrela-gold/20">
              <div className="text-astrela-gold text-3xl mb-4">✦</div>
              <h3 className="font-bold mb-2">Sostenible</h3>
              <p className="text-sm text-astrela-black/70">
                Su creación en laboratorio elimina la necesidad de minería destructiva y reduce significativamente la
                huella de carbono.
              </p>
            </div>
            <div className="text-center p-6 border border-astrela-gold/20">
              <div className="text-astrela-gold text-3xl mb-4">✦</div>
              <h3 className="font-bold mb-2">Accesible</h3>
              <p className="text-sm text-astrela-black/70">
                Su precio más accesible permite invertir en una joya de mayor calidad o tamaño sin comprometer la ética.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-astrela-pearl py-16">
        <div className="astrela-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square order-2 md:order-1">
              <Image
                src="/placeholder.svg?height=600&width=600&text=Certificado"
                alt="Certificado de Moissanita"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Certificación de Autenticidad</h2>
              <p className="mb-4">
                Cada joya de Astrela viene con un certificado de autenticidad que garantiza la calidad y origen de la
                Moissanita utilizada. Este certificado incluye detalles sobre:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-astrela-gold mr-2">✦</span>
                  <span>Peso en quilates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-astrela-gold mr-2">✦</span>
                  <span>Color y claridad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-astrela-gold mr-2">✦</span>
                  <span>Corte y dimensiones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-astrela-gold mr-2">✦</span>
                  <span>Origen y método de creación</span>
                </li>
              </ul>
              <p>
                Este certificado no solo garantiza la autenticidad de tu joya, sino que también sirve como registro para
                seguros y valoraciones futuras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="astrela-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Descubre Nuestra Colección</h2>
            <div className="w-20 h-1 bg-astrela-gold mx-auto mb-6"></div>
            <p className="mb-8 text-astrela-black/70">
              Explora nuestra exclusiva colección de joyería con Moissanita y encuentra la pieza perfecta para cada
              ocasión.
            </p>
            <Link href="/coleccion" className="btn-astrela inline-block">
              Ver colección
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
