'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { target: 200, suffix: '+', label: 'Clientes Ativos', sub: 'e crescendo' },
  { target: 380, suffix: '%', label: 'ROAS Médio', sub: 'retorno sobre investimento' },
  { target: 99, decimals: 1, suffix: '%', label: 'Uptime', sub: 'infraestrutura garantida' },
  { prefix: 'R$\u2009', target: 50, suffix: 'M+', label: 'Receita Gerenciada', sub: 'trafegados anualmente' },
]

function useCounter(target: number, decimals = 0, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1800
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, decimals])

  return count
}

function StatCard({ target, suffix, prefix = '', label, sub, decimals = 0, delay }: {
  target: number; suffix: string; prefix?: string; label: string; sub: string; decimals?: number; delay: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const count = useCounter(target, decimals, active)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`stat-card reveal ${delay}`} style={{ borderRadius: 20, padding: 32, textAlign: 'center' }}>
      <div style={{ fontSize: 'clamp(2.2rem,5vw,3rem)', fontWeight: 900, color: '#00ffff', marginBottom: 8, fontVariantNumeric: 'tabular-nums' }}>
        {prefix}{decimals ? count.toFixed(decimals) : Math.floor(count)}{suffix}
      </div>
      <div style={{ fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,.8)' }}>{label}</div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,.38)', marginTop: 4 }}>{sub}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section id="stats" style={{ padding: '80px 0', background: 'linear-gradient(180deg,#000033 0%,#00004d 50%,#000033 100%)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="tag-pill">Resultados Comprovados</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#fff', marginTop: 12 }}>
            Números que <span style={{ color: '#00ffff' }} className="glow-cyan-sm">Falam</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 16 }}>
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={`reveal-d${i + 1}` as string} />
          ))}
        </div>
      </div>
    </section>
  )
}
