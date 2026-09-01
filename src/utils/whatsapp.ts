import { CONTACT } from '../constants/data'

/**
 * Construye la URL de WhatsApp con el mensaje pre-cargado para un diseño.
 * Función pura y reutilizable.
 */
export function buildWhatsAppLink(designName: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=Hola,%20me%20interesa%20el%20diseño:%20${encodeURIComponent(designName)}`
}
