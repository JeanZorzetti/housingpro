const testimonials = [
  {
    quote: 'A Housing PRO transformou completamente nossa operação de marketing. O ROAS triplicou em 4 meses e agora temos visibilidade total sobre cada real investido.',
    name: 'Rodrigo Almeida',
    role: 'CMO — TechVentures BR',
    initials: 'RA',
  },
  {
    quote: 'O ecossistema que eles construíram para nós é impressionante. Dados de 12 plataformas diferentes em um único dashboard, atualizado em tempo real. Mudou como tomamos decisões.',
    name: 'Fernanda Costa',
    role: 'CEO — Growth Digital',
    initials: 'FC',
  },
  {
    quote: 'Em 90 dias já víamos resultados. A equipe é tecnicamente muito forte e, o mais importante, foca nos resultados de negócio, não só nas métricas de vaidade.',
    name: 'Marcus Oliveira',
    role: 'Head de Marketing — Conecta S/A',
    initials: 'MO',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" style={{ padding: '96px 0', background: 'linear-gradient(180deg,#000033 0%,#00001a 100%)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="tag-pill">Depoimentos</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#fff', marginTop: 12 }}>
            O que nossos <span style={{ color: '#00ffff' }} className="glow-cyan-sm">clientes dizem</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
          {testimonials.map((t, i) => (
            <div key={t.name} className={`glass-card testimonial-card reveal reveal-d${i + 1}`} style={{ borderRadius: 20, padding: '36px 28px 28px' }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 20, paddingTop: 8 }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#00ffff">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.07)' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(0,255,255,.25),rgba(0,0,100,.5))', border: '1px solid rgba(0,255,255,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#00ffff', flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
