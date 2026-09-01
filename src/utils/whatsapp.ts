import { CONTACT } from '../constants/data'

const MESSAGE_PREFIX = 'Hola, me interesa obtener información sobre el diseño: '

/**
 * Construye la URL de WhatsApp con el mensaje pre-cargado para un diseño.
 * Función pura y reutilizable.
 */
export function buildWhatsAppLink(designName: string): string {
  const text = encodeURIComponent(`${MESSAGE_PREFIX}${designName}`)
  return `https://wa.me/${CONTACT.whatsapp}?text=${text}`
}
