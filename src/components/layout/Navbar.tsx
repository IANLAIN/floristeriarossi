import { Link, NavLink } from 'react-router-dom'
import { assetUrl } from '../../utils/assets'

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/contacto', label: 'Contacto' },
]

function Navbar() {
  return (
    <header className="sticky top-3 z-50 px-3 sm:px-6">
      <nav
        aria-label="Navegación principal"
        className="container-page flex min-h-14 flex-wrap items-center justify-between gap-2 rounded-2xl border border-primary/15 bg-white px-3.5 py-2.5 shadow-soft sm:min-h-16 sm:justify-center sm:gap-8 sm:px-4 sm:py-3"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-serif text-xl font-bold tracking-tight text-primary transition-colors hover:text-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-2xl"
          aria-label="Ir al inicio"
        >
          <img
            src={assetUrl('/assets/images/hummingbird.png')}
            alt=""
            width="28"
            height="28"
            decoding="async"
            className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"
          />
          <span>Rossi</span>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-4 sm:text-sm ${
                  isActive
                    ? 'bg-primary text-white shadow-soft'
                    : 'text-neutral-700 hover:bg-primary-soft hover:text-primary'
                }`
              }
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
