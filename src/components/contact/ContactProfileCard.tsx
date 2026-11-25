import { Instagram, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import type { ContactProfile } from '../../types/catalog'
import { assetUrl } from '../../utils/assets'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

interface ContactProfileCardProps {
  profile: ContactProfile
}

function ContactProfileCard({ profile }: ContactProfileCardProps) {
  const [hasImageError, setHasImageError] = useState(false)

  return (
    <article className="flex w-full max-w-sm flex-col items-center rounded-2xl bg-white p-5 text-center shadow-soft sm:p-6">
      <div className="relative flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full bg-secondary/20 ring-4 ring-secondary/30 sm:h-36 sm:w-36">
        {hasImageError ? (
          <span className="font-serif text-3xl text-primary sm:text-4xl" aria-hidden="true">
            {profile.name.charAt(0)}
          </span>
        ) : (
          <img
            src={assetUrl(profile.photo)}
            alt={profile.name}
            loading="lazy"
            decoding="async"
            width="320"
            height="320"
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setHasImageError(true)}
          />
        )}
      </div>

      <h2 className="mt-4 font-serif text-xl text-primary sm:mt-5 sm:text-2xl">{profile.name}</h2>
      {profile.role && <p className="mt-1 text-xs text-neutral-500 sm:text-sm">{profile.role}</p>}

      <div className="mt-4 flex items-center justify-center gap-3 sm:mt-5">
        <a
          href={buildWhatsAppUrl(profile.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Contactar a ${profile.name} por WhatsApp`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href={profile.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver Instagram de ${profile.name}`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-secondary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
