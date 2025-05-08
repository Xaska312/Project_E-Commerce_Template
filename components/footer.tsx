import Link from "next/link"
import { Instagram, Facebook, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-astrela-black text-astrela-pearl pt-16 pb-8">
      <div className="astrela-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-astrela-pearl font-playfair">ASTRELA</span>
            </Link>
            <p className="text-sm text-astrela-silver mb-4">
              Joyería ética con Moissanita, creando piezas elegantes y sostenibles para momentos especiales.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                className="text-astrela-pearl hover:text-astrela-gold transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com"
                className="text-astrela-pearl hover:text-astrela-gold transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="mailto:info@astrela.com"
                className="text-astrela-pearl hover:text-astrela-gold transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-astrela-gold font-playfair text-lg mb-4">Colecciones</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/coleccion/anillos" className="text-sm hover:text-astrela-gold transition-colors">
                  Anillos
                </Link>
              </li>
              <li>
                <Link href="/coleccion/pulseras" className="text-sm hover:text-astrela-gold transition-colors">
                  Pulseras
                </Link>
              </li>
              <li>
                <Link href="/coleccion/aretes" className="text-sm hover:text-astrela-gold transition-colors">
                  Aretes
                </Link>
              </li>
              <li>
                <Link href="/coleccion/collares" className="text-sm hover:text-astrela-gold transition-colors">
                  Collares
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-astrela-gold font-playfair text-lg mb-4">Información</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/moissanita" className="text-sm hover:text-astrela-gold transition-colors">
                  Sobre la Moissanita
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-sm hover:text-astrela-gold transition-colors">
                  Sobre Astrela
                </Link>
              </li>
              <li>
                <Link href="/cuidado-joyas" className="text-sm hover:text-astrela-gold transition-colors">
                  Cuidado de joyas
                </Link>
              </li>
              <li>
                <Link href="/certificados" className="text-sm hover:text-astrela-gold transition-colors">
                  Certificados
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-astrela-gold font-playfair text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <Phone size={16} className="mr-2 text-astrela-gold" />
                <span>+57 316 778 4193</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail size={16} className="mr-2 text-astrela-gold" />
                <span>astrela.oficial@gmail.com</span>
              </li>
              <li className="text-sm mt-4">
                <Link
                  href="/contacto"
                  className="btn-astrela-outline text-astrela-pearl border-astrela-gold text-sm py-2"
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-astrela-gold/20 pt-8 mt-8 text-center text-xs text-astrela-silver">
          <p>© {new Date().getFullYear()} Astrela. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/privacidad" className="hover:text-astrela-gold transition-colors">
              Política de privacidad
            </Link>
            <Link href="/terminos" className="hover:text-astrela-gold transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
