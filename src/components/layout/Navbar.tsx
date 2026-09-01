import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/#contacto', label: 'Contacto' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/90 backdrop-blur-md">
      <nav className="container-page flex h-20 items-center justify-center">
        <div className="hidden items-center justify-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-neutral-600 transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </NavLink>
          ))}
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
              <Link
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
