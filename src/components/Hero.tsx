import { ArrowRight, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CONTACT, CONTACT_PROFILES } from '../constants/data'
import { assetUrl } from '../utils/assets'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import { getButtonClasses } from './ui/Button'

function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100dvh-3.5rem)] w-full items-center justify-center overflow-hidden bg-background text-center sm:min-h-[calc(100dvh-5.5rem)]">
      <div className="absolute inset-0">
        <img
          src={assetUrl('/assets/images/banner.jpg')}
          alt="Arreglos florales"
          width="1024"
          height="1024"
          fetchPriority="high"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="pointer-events-none absolute -left-16 top-10 h-44 w-44 rounded-full bg-secondary/20 blur-3xl sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl sm:h-64 sm:w-64" />

      <div className="container-page relative flex max-w-3xl flex-col items-center py-8 sm:py-14 lg:py-16">
        <div className="flex w-full flex-col items-center">
          <h1 className="max-w-[18ch] text-3xl leading-tight text-primary sm:max-w-none sm:text-5xl lg:text-6xl">
            Arreglos florales para toda ocasión.
          </h1>

          <p className="mx-auto mt-3.5 max-w-md text-sm leading-relaxed text-neutral-700 sm:mt-5 sm:max-w-xl sm:text-lg">
            Diseños florales para cumpleaños, bienvenida, matrimonios, funerales, arreglos con
            estilo y detalles que cuentan historias en Cartago, Valle del Cauca.
          </p>

          <div className="mx-auto mt-6 flex w-full max-w-[17.5rem] flex-col items-center gap-3 sm:mt-8 sm:max-w-xs sm:gap-3.5">
            <Link
              to="/catalogo"
              className={getButtonClasses({
                size: 'md',
                className:
                  'min-h-11 w-full px-6 py-2.5 text-sm shadow-soft sm:min-h-12 sm:px-7 sm:py-3.5 sm:text-base',
              })}
            >
              Ver catálogo
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>

            <a
              href={buildWhatsAppUrl(CONTACT.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:min-h-12 sm:px-7 sm:py-3.5 sm:text-base"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              WhatsApp
            </a>

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-white/85 px-6 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-12 sm:px-7 sm:py-3.5 sm:text-base"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              Instagram
            </a>
          </div>

          <div className="mt-7 flex w-full max-w-sm flex-col items-center gap-2 rounded-2xl border border-primary/15 bg-white px-4 py-3 text-xs text-neutral-700 shadow-soft sm:mt-10 sm:max-w-md sm:gap-2.5 sm:px-6 sm:py-4 sm:text-sm">
            <div className="flex items-center justify-center gap-2 font-medium text-primary-dark">
              <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{CONTACT.address}.</span>
            </div>
            <div className="h-px w-16 bg-primary/15" aria-hidden="true" />
            <div className="flex items-center justify-center gap-2 font-medium text-neutral-700">
              <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {CONTACT_PROFILES.map((profile) => profile.whatsappDisplay).join(' - ')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
