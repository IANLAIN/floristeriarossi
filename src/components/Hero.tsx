import { ArrowRight, Flower2, MessageCircle } from 'lucide-react'
import { buildWhatsAppLink } from '../utils/whatsapp'
import Button from './ui/Button'

function Hero() {
  const scrollToCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const whatsappLink = buildWhatsAppLink('Cotización general')

  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img
          src="/assets/images/banner.jpg"
          alt="Banner de Floristería Rossi"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/65" />
      </div>

      <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

      <div className="container-page relative grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-2xl">
          <span className="brand-badge">
            <Flower2 className="h-3.5 w-3.5 text-secondary-dark" />
            Bouquet · Engalanados · Fruteros
          </span>

          <h1 className="mt-6 text-4xl leading-tight text-primary sm:text-5xl lg:text-6xl">
            Flores hechas para el momento perfecto.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-700 sm:text-lg">
            Diseños florales artesanales para celebraciones, arreglos con estilo y detalles que
            cuentan historias en Cartago, Valle del Cauca.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={scrollToCatalog} size="lg" className="shadow-soft">
              Ver catálogo
              <ArrowRight className="h-5 w-5" />
            </Button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-white/70 px-7 py-3.5 text-base font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            >
              <MessageCircle className="h-5 w-5" />
              Hablemos
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md rounded-[2rem] border border-white/60 bg-white/75 p-5 shadow-soft backdrop-blur-sm">
          <div className="rounded-[1.5rem] bg-background-alt p-4 shadow-card">
            <div className="flex items-center justify-between gap-3 border-b border-primary/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                  Especialidades
                </p>
                <h2 className="mt-1 font-serif text-2xl text-primary">Rossi</h2>
              </div>
              <div className="rounded-full bg-secondary/20 p-2 text-secondary-dark">
                <Flower2 className="h-6 w-6" />
              </div>
            </div>

            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              {['Bouquets', 'Engalanados', 'Fruteros', 'Fúnebres', 'Toda Ocasión'].map((item) => (
                <li key={item} className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                  <span>{item}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
