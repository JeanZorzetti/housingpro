'use client'

interface PageHeroProps {
  eyebrow: string
  title: string
  titleHighlight?: string
  subtitle: string
  breadcrumb: string
}

export default function PageHero({ eyebrow, title, titleHighlight, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section
      className="grid-bg hero-gradient"
      style={{ paddingTop: 128, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}
    >
      {/* Bg orb */}
      <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(0,255,255,.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 24, fontSize: 13, color: 'rgba(255,255,255,.4)' }}>
          <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none', transition: 'color .2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#00ffff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.4)')}>
            Início
          </a>
          <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
          <span style={{ color: '#00ffff' }}>{breadcrumb}</span>
        </div>

        <span className="tag-pill" style={{ marginBottom: 20, display: 'inline-block' }}>{eyebrow}</span>

        <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
          {title}{' '}
          {titleHighlight && <span className="gradient-text glow-cyan">{titleHighlight}</span>}
        </h1>

        <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 17, lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
          {subtitle}
        </p>

        {/* Divider */}
        <div style={{ width: 64, height: 2, background: 'linear-gradient(90deg, transparent, #00ffff, transparent)', margin: '32px auto 0' }} />
      </div>
    </section>
  )
}
