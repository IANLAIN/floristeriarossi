import { ArrowRight, Instagram, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'

function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-background text-center">
      <div className="absolute inset-0">
        <img
          src="/assets/images/banner.jpg"
          alt="Arreglos florales"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

      <div className="container-page relative flex max-w-3xl flex-col items-center py-16">
        <div>
          <h1 className="text-4xl leading-tight text-primary sm:text-5xl lg:text-6xl">
            Arreglos florales para toda ocasión.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-700 sm:text-lg">
            Diseños florales artesanales para celebraciones, arreglos con estilo y detalles que
            cuentan historias en Cartago, Valle del Cauca.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-xs flex-col items-center gap-4">
            <Link to="/catalogo">
              <Button size="lg" className="w-full shadow-soft">
                Ver catálogo
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>

            <a
              href="https://wa.me/573205851765"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-accent-dark"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/floristeriarossi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-white/80 px-7 py-3.5 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
