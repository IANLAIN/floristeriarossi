import { Instagram, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import type { ContactProfile } from '../../types/catalog'

interface ContactProfileCardProps {
  profile: ContactProfile
}

function ContactProfileCard({ profile }: ContactProfileCardProps) {
  const [hasImageError, setHasImageError] = useState(false)

  return (
    <article className="flex w-full max-w-sm flex-col items-center rounded-2xl bg-white p-6 text-center shadow-soft">
      <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-secondary/20 ring-4 ring-secondary/30">
        {hasImageError ? (
          <span className="font-serif text-4xl text-primary" aria-hidden="true">
            {profile.name.charAt(0)}
          </span>
        ) : (
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-full w-full object-cover"
            onError={() => setHasImageError(true)}
          />
        )}
      </div>

      <h2 className="mt-5 font-serif text-2xl text-primary">{profile.name}</h2>
      {profile.role && <p className="mt-1 text-sm text-neutral-500">{profile.role}</p>}

      <div className="mt-5 flex items-center justify-center gap-3">
        <a
          href={`https://wa.me/${profile.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Contactar a ${profile.name} por WhatsApp`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-dark"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href={profile.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver Instagram de ${profile.name}`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-secondary-dark"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>

      <p className="mt-3 text-sm text-neutral-600">{profile.whatsappDisplay}</p>
      <p className="mt-1 text-sm text-neutral-600">@{profile.instagramHandle}</p>
    </article>
  )
}

export default ContactProfileCard
