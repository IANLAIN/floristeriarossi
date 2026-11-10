import { ArrowRight, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CONTACT, CONTACT_PROFILES } from '../constants/data'
import { assetUrl } from '../utils/assets'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import { getButtonClasses } from './ui/Button'

function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100dvh-5.5rem)] items-center justify-center overflow-hidden bg-background text-center">
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

      <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

      <div className="container-page relative flex max-w-3xl flex-col items-center py-10 sm:py-16">
        <div className="flex w-full flex-col items-center">
          <h1 className="text-3xl leading-tight text-primary sm:text-5xl lg:text-6xl">
            Arreglos florales para toda ocasión.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-700 sm:mt-5 sm:text-lg">
            Diseños florales para cumpleaños, bienvenida, matrimonios, funerales, arreglos con
            estilo y detalles que cuentan historias en Cartago, Valle del Cauca.
          </p>

          <div className="mx-auto mt-7 flex w-full max-w-xs flex-col items-center gap-3.5 sm:mt-8 sm:gap-4">
            <Link
              to="/catalogo"
              className={getButtonClasses({ size: 'lg', className: 'w-full shadow-soft' })}
            >
              Ver catálogo
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href={buildWhatsAppUrl(CONTACT.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-white/80 px-7 py-3.5 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
          </div>

          <div className="mt-8 flex w-full max-w-md flex-col items-center gap-2.5 rounded-2xl border border-primary/15 bg-white px-4 py-3.5 text-xs text-neutral-700 shadow-soft sm:mt-12 sm:px-6 sm:py-4 sm:text-sm">
            <p className="inline-flex flex-wrap items-center justify-center gap-1.5 font-medium text-primary-dark sm:gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{CONTACT.address}.</span>
            </p>
            <div className="h-px w-16 bg-primary/15" aria-hidden="true" />
            <p className="inline-flex flex-wrap items-center justify-center gap-1.5 font-medium text-neutral-700 sm:gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {CONTACT_PROFILES.map((profile) => profile.whatsappDisplay).join(' - ')}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
