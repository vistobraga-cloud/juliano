export const WHATSAPP_NUMBER = '15088167813';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), '_blank');
}
