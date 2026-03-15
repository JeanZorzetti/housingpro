import { Resend } from 'resend'

// Lazy init — prevents build-time error when RESEND_API_KEY is not set
let _resend: Resend | null = null

export function getResend(): Resend {
  if (!_resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set')
    }
    _resend = new Resend(process.env.RESEND_API_KEY)
  }
  return _resend
}

export const FROM_ADDRESS = 'Housing PRO <noreply@housingpro.tech>'
export const NOTIFY_ADDRESS = 'contato@housingpro.tech'
