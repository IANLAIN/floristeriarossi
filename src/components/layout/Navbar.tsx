import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import HummingbirdLogo from '../ui/HummingbirdLogo'

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#contacto', label: 'Contacto' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/90 backdrop-blur-md">
      <nav className="container-page flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Floristería Rossi">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/95 p-2 text-secondary shadow-soft">
            <HummingbirdLogo className="h-9 w-9" title="Floristería Rossi" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-primary sm:text-2xl">
            Floristería Rossi
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/573205851765"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-dark"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-white/80 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 text-primary" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-primary/10 bg-background md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/573205851765"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
