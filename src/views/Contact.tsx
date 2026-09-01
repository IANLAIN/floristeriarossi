import { Link } from 'react-router-dom'
import ContactProfileCard from '../components/contact/ContactProfileCard'
import SectionHeading from '../components/common/SectionHeading'
import { CONTACT_PROFILES } from '../constants/data'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function Contact() {
  useDocumentTitle('Floristería Rossi - Contacto')

  return (
    <section className="container-page flex flex-col items-center py-16 text-center sm:py-20">
      <SectionHeading
        title="Contáctanos"
        subtitle="Estamos listos para ayudarte a elegir el arreglo ideal."
      />

      <div className="mt-10 grid w-full max-w-4xl grid-cols-1 justify-items-center gap-6 md:grid-cols-2">
        {CONTACT_PROFILES.map((profile) => (
          <ContactProfileCard key={profile.name} profile={profile} />
        ))}
      </div>

      <Link
        to="/catalogo"
        className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        Ver catálogo
      </Link>
    </section>
  )
}

export default Contact
