"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, Search, User } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-astrela-pearl border-b border-astrela-gold/20">
      <div className="astrela-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-astrela-black font-playfair">ASTRELA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/coleccion/anillos"
              className="text-sm font-medium text-astrela-black hover:text-astrela-gold transition-colors"
            >
              ANILLOS
            </Link>
            <Link
              href="/coleccion/pulseras"
              className="text-sm font-medium text-astrela-black hover:text-astrela-gold transition-colors"
            >
              PULSERAS
            </Link>
            <Link
              href="/coleccion/aretes"
              className="text-sm font-medium text-astrela-black hover:text-astrela-gold transition-colors"
            >
              ARETES
            </Link>
            <Link
              href="/coleccion/collares"
              className="text-sm font-medium text-astrela-black hover:text-astrela-gold transition-colors"
            >
              COLLARES
            </Link>
            <Link
              href="/moissanita"
              className="text-sm font-medium text-astrela-black hover:text-astrela-gold transition-colors"
            >
              MOISSANITA
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-astrela-black hover:text-astrela-gold transition-colors">
              <Search size={20} />
              <span className="sr-only">Buscar</span>
            </button>
            <button className="p-2 text-astrela-black hover:text-astrela-gold transition-colors">
              <User size={20} />
              <span className="sr-only">Mi cuenta</span>
            </button>
            <button className="p-2 text-astrela-black hover:text-astrela-gold transition-colors relative">
              <ShoppingBag size={20} />
              <span className="sr-only">Carrito</span>
              <span className="absolute -top-1 -right-1 bg-astrela-gold text-astrela-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
            <button
              className="p-2 text-astrela-black hover:text-astrela-gold transition-colors md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              <span className="sr-only">Menú</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-astrela-pearl border-t border-astrela-gold/20">
          <nav className="astrela-container py-4 flex flex-col space-y-4">
            <Link
              href="/coleccion/anillos"
              className="text-sm font-medium text-astrela-black hover:text-astrela-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ANILLOS
            </Link>
            <Link
              href="/coleccion/pulseras"
              className="text-sm font-medium text-astrela-black hover:text-astrela-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              PULSERAS
            </Link>
            <Link
              href="/coleccion/aretes"
              className="text-sm font-medium text-astrela-black hover:text-astrela-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ARETES
            </Link>
            <Link
              href="/coleccion/collares"
              className="text-sm font-medium text-astrela-black hover:text-astrela-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              COLLARES
            </Link>
            <Link
              href="/moissanita"
              className="text-sm font-medium text-astrela-black hover:text-astrela-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              MOISSANITA
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
