'use client'

import Image from 'next/image'

const navLinks = [
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/pilares', label: 'Pilares' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/como-funciona', label: 'Como Funciona' },
  { href: '/contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <div style={{ paddingTop: 40, borderTop: '1px solid rgba(255,255,255,.06)' }}>
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center', marginBottom: 32 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <Image src="/logo.png" alt="Housing PRO" width={40} height={40} style={{ objectFit: 'contain' }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 16 }}>
              Housing <span style={{ color: '#00ffff' }}>PRO</span>
            </div>
            <div style={{ color: 'rgba(0,255,255,.4)', fontSize: 9, letterSpacing: '.12em', textTransform: 'uppercase' }}>
              Ecossistemas Digitais
            </div>
          </div>
        </a>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px', justifyContent: 'flex-end' }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              style={{ color: 'rgba(255,255,255,.4)', fontSize: 13, textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.4)')}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'center', color: 'rgba(255,255,255,.2)', fontSize: 12, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.04)' }}>
        © 2026 Housing PRO — Ecossistemas Digitais. Todos os direitos reservados.
      </div>
    </div>
  )
}
