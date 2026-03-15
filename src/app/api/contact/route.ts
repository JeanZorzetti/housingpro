import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getResend, FROM_ADDRESS, NOTIFY_ADDRESS } from '@/lib/resend'
import { getContactRatelimit } from '@/lib/ratelimit'
import ContactNotification from '@/emails/ContactNotification'
import ContactConfirmation from '@/emails/ContactConfirmation'
import { createElement } from 'react'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting (only when Upstash is configured)
    if (process.env.UPSTASH_REDIS_REST_URL) {
      const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'anonymous'
      const { success, limit, remaining } = await getContactRatelimit().limit(ip)

      if (!success) {
        return NextResponse.json(
          { error: 'Muitas tentativas. Tente novamente em alguns minutos.' },
          {
            status: 429,
            headers: {
              'X-RateLimit-Limit': String(limit),
              'X-RateLimit-Remaining': String(remaining),
            },
          }
        )
      }
    }

    const body = await request.json()
    const { name, email, company, phone, interest, message, source } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Nome e e-mail são obrigatórios.' }, { status: 400 })
    }

    // Save to DB
    const contact = await prisma.contact.create({
      data: {
        name: String(name).slice(0, 200),
        email: String(email).slice(0, 200),
        company: company ? String(company).slice(0, 200) : null,
        phone: phone ? String(phone).slice(0, 50) : null,
        interest: interest ? String(interest).slice(0, 100) : null,
        message: message ? String(message).slice(0, 5000) : null,
        source: source ? String(source).slice(0, 50) : 'home',
      },
    })

    // Send emails via Resend (only when API key is configured)
    if (process.env.RESEND_API_KEY) {
      const resend = getResend()

      await Promise.allSettled([
        // Admin notification
        resend.emails.send({
          from: FROM_ADDRESS,
          to: NOTIFY_ADDRESS,
          subject: `Novo contato: ${name}${interest ? ` — ${interest}` : ''}`,
          react: createElement(ContactNotification, { name, email, company, phone, interest, message, source }),
        }),
        // User confirmation
        resend.emails.send({
          from: FROM_ADDRESS,
          to: email,
          subject: 'Recebemos sua mensagem — Housing PRO',
          react: createElement(ContactConfirmation, { name, interest }),
        }),
      ])
    }

    return NextResponse.json({ success: true, id: contact.id }, { status: 201 })
  } catch (err) {
    console.error('[contact] error:', err)
    return NextResponse.json({ error: 'Erro interno. Tente novamente.' }, { status: 500 })
  }
}
