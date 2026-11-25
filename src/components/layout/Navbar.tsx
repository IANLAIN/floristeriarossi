import { Link, NavLink } from 'react-router-dom'
import { assetUrl } from '../../utils/assets'

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/contacto', label: 'Contacto' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/15 bg-white shadow-soft sm:top-3 sm:border-b-0 sm:bg-transparent sm:px-6 sm:shadow-none">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-3 py-2.5 max-[310px]:flex-col max-[310px]:justify-center sm:min-h-16 sm:justify-center sm:gap-8 sm:rounded-2xl sm:border sm:border-primary/15 sm:bg-white sm:px-6 sm:py-3 sm:shadow-soft"
      >
        <Link
          to="/"
          className="inline-flex shrink-0 items-center gap-1.5 font-serif text-lg font-bold tracking-tight text-primary transition-colors hover:text-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-[380px]:text-xl sm:gap-2 sm:text-2xl"
          aria-label="Ir al inicio"
        >
          <img
            src={assetUrl('/assets/images/hummingbird.png')}
            alt=""
            width="28"
            height="28"
            decoding="async"
            className="h-5 w-5 shrink-0 object-contain min-[380px]:h-6 min-[380px]:w-6 sm:h-7 sm:w-7"
          />
          <span>Rossi</span>
        </Link>

        <div className="flex shrink-0 items-center justify-center gap-1 min-[380px]:gap-1.5 sm:gap-3">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 min-[380px]:px-3.5 sm:px-4 sm:py-1.5 sm:text-sm ${
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
