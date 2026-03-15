'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = [
  { href: '#sobre', label: 'Quem Somos' },
  { href: '#pilares', label: 'Pilares' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#contato', label: 'Contato' },
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
      className="nav-glass"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all .3s',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,.3)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(0,255,255,.15)', flexShrink: 0 }}>
              <Image src="/logo.jpeg" alt="Housing PRO" width={36} height={36} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, letterSpacing: '.02em' }}>
                Housing <span style={{ color: '#00ffff' }}>PRO</span>
              </div>
              <div style={{ color: 'rgba(0,255,255,.4)', fontSize: 9, letterSpacing: '.12em', textTransform: 'uppercase' }}>
                Ecossistemas Digitais
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {links.map(l => (
              <a key={l.href} href={l.href}
                style={{ color: 'rgba(255,255,255,.65)', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.65)')}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="#contato" className="btn-cyan desktop-cta" style={{ padding: '8px 20px', borderRadius: 10, fontSize: 13 }}>
              Solicitar Demo
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}
              className="hamburger-btn"
            >
              <span style={{ display: 'block', width: 22, height: 2, background: '#00ffff', transition: 'all .3s ease', transform: open ? 'translateY(7px) rotate(45deg)' : 'none', transformOrigin: 'center' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: '#00ffff', transition: 'all .3s ease', opacity: open ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: '#00ffff', transition: 'all .3s ease', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none', transformOrigin: 'center' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-glass" style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
          <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={closeMenu}
                style={{ padding: '10px 0', color: 'rgba(255,255,255,.8)', fontWeight: 500, textDecoration: 'none', fontSize: 15, borderBottom: '1px solid rgba(255,255,255,.05)' }}
              >
                {l.label}
              </a>
            ))}
            <a href="#contato" onClick={closeMenu} className="btn-cyan" style={{ padding: 12, borderRadius: 10, fontSize: 14, marginTop: 8 }}>
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
