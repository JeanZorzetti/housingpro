import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, interest, message, source } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Nome e e-mail são obrigatórios.' }, { status: 400 })
    }

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

    return NextResponse.json({ success: true, id: contact.id }, { status: 201 })
  } catch (err) {
    console.error('[contact] DB error:', err)
    return NextResponse.json({ error: 'Erro interno. Tente novamente.' }, { status: 500 })
  }
}
