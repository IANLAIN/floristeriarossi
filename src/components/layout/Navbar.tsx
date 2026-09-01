import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/contacto', label: 'Contacto' },
]

function Navbar() {
  return (
    <header className="sticky top-3 z-50 px-3 sm:px-6">
      <nav className="container-page flex min-h-16 flex-wrap items-center justify-center gap-4 rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-soft backdrop-blur-md sm:gap-8">
        <Link
          to="/"
          className="font-serif text-2xl font-bold tracking-tight text-primary transition-colors hover:text-primary-light"
          aria-label="Ir al inicio"
        >
          Rossi
        </Link>

        <div className="flex items-center justify-center gap-2 sm:gap-5">
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
      </nav>
    </header>
  )
}

export default Navbar
