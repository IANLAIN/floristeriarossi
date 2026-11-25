import { Link } from 'react-router-dom'
import ContactProfileCard from '../components/contact/ContactProfileCard'
import SectionHeading from '../components/common/SectionHeading'
import { getButtonClasses } from '../components/ui/Button'
import { CONTACT_PROFILES } from '../constants/data'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function Contact() {
  useDocumentTitle('Floristería Rossi - Contacto')

  return (
    <section className="container-page flex flex-col items-center py-8 text-center sm:py-14 lg:py-16">
      <SectionHeading
        title="Contáctanos"
        subtitle="Estamos listos para ayudarte a elegir el arreglo ideal."
      />

      <div className="mt-7 grid w-full max-w-4xl grid-cols-1 justify-items-center gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
        {CONTACT_PROFILES.map((profile) => (
          <ContactProfileCard key={profile.name} profile={profile} />
        ))}
      </div>

      <Link
        to="/catalogo"
        className={getButtonClasses({
          variant: 'primary',
          size: 'md',
          className: 'mt-8 text-sm sm:mt-10 sm:text-base',
        })}
      >
        Ver catálogo
      </Link>
    </section>
  )
}

export default Contact
