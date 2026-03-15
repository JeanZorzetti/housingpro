'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = [
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/pilares', label: 'Pilares' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/como-funciona', label: 'Como Funciona' },
  { href: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        transition: 'box-shadow .3s',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,.10)' : '0 1px 4px rgba(0,0,0,.06)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <Image
              src="/logo.png"
              alt="Housing PRO"
              width={52}
              height={52}
              style={{ objectFit: 'contain', display: 'block' }}
              priority
            />
            <div>
              <div style={{ color: '#000033', fontWeight: 800, fontSize: 16, letterSpacing: '.02em', lineHeight: 1.2 }}>
                Housing <span style={{ color: '#00aacc' }}>PRO</span>
              </div>
              <div style={{ color: '#00aacc', fontSize: 9, letterSpacing: '.14em', textTransform: 'uppercase', opacity: .8 }}>
                Ecossistemas Digitais
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {links.map(l => (
              <a key={l.href} href={l.href}
                style={{ color: '#374151', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#000033')}
                onMouseLeave={e => (e.currentTarget.style.color = '#374151')}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="/contato" className="desktop-cta" style={{
              padding: '9px 22px', borderRadius: 10, fontSize: 13, fontWeight: 700,
              background: '#000033', color: '#fff', textDecoration: 'none',
              transition: 'background .2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#00004d')}
              onMouseLeave={e => (e.currentTarget.style.background = '#000033')}
            >
              Solicitar Demo
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}
              className="hamburger-btn"
            >
              <span style={{ display: 'block', width: 22, height: 2, background: '#000033', transition: 'all .3s ease', transform: open ? 'translateY(7px) rotate(45deg)' : 'none', transformOrigin: 'center' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: '#000033', transition: 'all .3s ease', opacity: open ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: '#000033', transition: 'all .3s ease', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none', transformOrigin: 'center' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={closeMenu}
                style={{ padding: '12px 0', color: '#374151', fontWeight: 500, textDecoration: 'none', fontSize: 15, borderBottom: '1px solid #f3f4f6' }}
              >
                {l.label}
              </a>
            ))}
            <a href="/contato" onClick={closeMenu} style={{ marginTop: 12, padding: '13px', borderRadius: 10, fontSize: 14, fontWeight: 700, background: '#000033', color: '#fff', textDecoration: 'none', textAlign: 'center' }}>
              Solicitar Demo
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
