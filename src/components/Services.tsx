const services = [
  {
    icon: '📈',
    title: 'Performance Marketing',
    desc: 'Google Ads, Meta, TikTok, Programático. Gerenciamos todo o ecossistema de mídia paga com foco em ROAS e CPA.',
    tagLabel: 'Plataformas',
    tags: ['Google Ads', 'Meta', 'TikTok'],
  },
  {
    icon: '📊',
    title: 'Data Engineering',
    desc: 'Pipelines de dados robustos, data warehouses e dashboards que transformam dados brutos em insights acionáveis.',
    tagLabel: 'Tecnologias',
    tags: ['BigQuery', 'dbt', 'Looker'],
  },
  {
    icon: '🤖',
    title: 'AI Automation',
    desc: 'Agentes de IA que automatizam tarefas repetitivas, qualificam leads e personalizam comunicação em escala.',
    tagLabel: 'Tecnologias',
    tags: ['LLMs', 'n8n', 'Chatbots'],
  },
  {
    icon: '🚀',
    title: 'Growth Hacking',
    desc: 'Experimentos rápidos, CRO, funis otimizados e estratégias que identificam alavancas de crescimento exponencial.',
    tagLabel: 'Métodos',
    tags: ['CRO', 'A/B Tests', 'Funnels'],
  },
]

export default function Services() {
  return (
    <section id="servicos" className="grid-bg" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="tag-pill">O Que Fazemos</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#fff', marginTop: 12 }}>
            Nossos <span style={{ color: '#00ffff' }} className="glow-cyan-sm">Serviços</span>
          </h2>
          <p style={{ marginTop: 14, color: 'rgba(255,255,255,.45)', maxWidth: 500, margin: '14px auto 0', fontSize: 15 }}>
            Soluções end-to-end que formam um ecossistema digital completo e operável.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
          {services.map((s, i) => (
            <div key={s.title} className={`glass-card reveal reveal-d${i + 1}`} style={{ borderRadius: 20, padding: 28 }}>
              <div className="service-icon" style={{ marginBottom: 20 }}>{s.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: 'rgba(255,255,255,.48)', fontSize: 13, lineHeight: 1.7, marginBottom: 18 }}>{s.desc}</p>
              <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.06)' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.25)', marginBottom: 8 }}>{s.tagLabel}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontSize: 11, padding: '3px 10px', borderRadius: 999, background: 'rgba(0,255,255,.07)', color: 'rgba(0,255,255,.65)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
