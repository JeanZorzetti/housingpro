const steps = [
  {
    num: '01', icon: '🔍', title: 'Diagnóstico',
    desc: 'Auditoria completa do ecossistema digital atual. Identificamos gaps, oportunidades e priorizamos as alavancas de maior impacto.',
    meta: '2-5 dias ▶ workshops + entrevistas',
  },
  {
    num: '02', icon: '⚙️', title: 'Implementação',
    desc: 'Montamos o ecossistema em sprints ágeis: configuração de ferramentas, integrações, pipelines e primeiras campanhas ao ar.',
    meta: '4-8 semanas ▶ entrega incremental',
  },
  {
    num: '03', icon: '📡', title: 'Escala',
    desc: 'Monitoramento contínuo, otimização baseada em dados e expansão gradual do ecossistema conforme os resultados evoluem.',
    meta: 'contínuo ▶ crescimento sustentável',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="grid-bg" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="tag-pill">Nosso Processo</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#fff', marginTop: 12 }}>
            Como <span style={{ color: '#00ffff' }} className="glow-cyan-sm">Funciona</span>
          </h2>
          <p style={{ marginTop: 14, color: 'rgba(255,255,255,.45)', maxWidth: 460, margin: '14px auto 0', fontSize: 15 }}>
            Do diagnóstico até a escala, um processo comprovado que garante resultados consistentes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
          {steps.map((s, i) => (
            <div key={s.title} className={`process-step glass-card reveal reveal-d${i + 1}`} style={{ borderRadius: 20, padding: 40, textAlign: 'center' }}>
              <div className="step-num">{s.num}</div>
              <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{s.icon}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{s.title}</h3>
              <p style={{ color: 'rgba(255,255,255,.48)', fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>{s.desc}</p>
              <div style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: 'rgba(0,255,255,.5)' }}>{s.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
