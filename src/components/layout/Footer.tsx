import { Clock, Instagram, MapPin, MessageCircle } from 'lucide-react'
import { CONTACT } from '../../constants/data'
import HummingbirdLogo from '../ui/HummingbirdLogo'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-primary text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 p-2 text-secondary">
              <HummingbirdLogo className="h-8 w-8" title="Floristería Rossi" />
            </div>
            <span className="font-serif text-xl font-bold">Floristería Rossi</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Arreglos florales artesanales para cada celebración y detalle importante en Cartago.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-secondary"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                {CONTACT.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-secondary"
              >
                <Instagram className="h-4 w-4 shrink-0" />
                {CONTACT.instagramHandle}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {CONTACT.address}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Horarios</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {CONTACT.hours.map((hour) => (
              <li key={hour} className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                {hour}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {year} Floristería Rossi. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
