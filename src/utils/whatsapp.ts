import { CONTACT } from '../constants/data'

/**
 * Construye una URL segura hacia WhatsApp sanitizando el número telefónico.
 */
export function buildWhatsAppUrl(phone: string = CONTACT.whatsapp, message?: string): string {
  const cleanPhone = phone.replace(/\D/g, '')
  const baseUrl = `https://wa.me/${cleanPhone}`
  if (!message) return baseUrl
  return `${baseUrl}?text=${encodeURIComponent(message)}`
}

/**
 * Construye la URL de WhatsApp con el mensaje pre-cargado para un diseño.
 * Función pura y reutilizable.
 */
export function buildWhatsAppLink(designName: string): string {
  return buildWhatsAppUrl(CONTACT.whatsapp, `Hola, me interesa el diseño: ${designName}`)
}
