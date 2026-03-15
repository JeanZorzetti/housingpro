const pillars = [
  {
    icon: '🎯',
    title: 'Marketing de Precisão',
    desc: 'Estratégias de performance calibradas por dados reais, com segmentação ultra-precisa e otimização contínua baseada em machine learning.',
    items: ['Campanhas multi-canal integradas', 'Otimização automática de bids', 'Attribution modeling avançado'],
  },
  {
    icon: '⚙️',
    title: 'Infraestrutura Tech',
    desc: 'Arquitetura digital robusta, escalável e segura. Desde CRMs personalizados até pipelines de dados em tempo real.',
    items: ['Data warehousing e ETL', 'Integrações API customizadas', 'Infraestrutura cloud resiliente'],
  },
  {
    icon: '🧠',
    title: 'Inteligência Artificial',
    desc: 'IA aplicada a cenários reais: automação de jornadas, predição de churn, scoring de leads e geração de conteúdo em escala.',
    items: ['Modelos preditivos customizados', 'Automação de workflows', 'NLP e geração de conteúdo'],
  },
]

export default function Pillars() {
  return (
    <section id="pilares" style={{ padding: '96px 0', background: 'linear-gradient(180deg,#000033 0%,#00001a 100%)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="tag-pill">Nossa Fundação</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#fff', marginTop: 12 }}>
            Nossos <span style={{ color: '#00ffff' }} className="glow-cyan-sm">Pilares</span>
          </h2>
          <p style={{ marginTop: 14, color: 'rgba(255,255,255,.45)', maxWidth: 480, margin: '14px auto 0', fontSize: 15 }}>
            Três focos estratégicos que sustentam todo ecossistema que construímos.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
          {pillars.map((p, i) => (
            <div key={p.title} className={`glass-card reveal reveal-d${i + 1}`} style={{ borderRadius: 20, padding: 36 }}>
              <div className="pilar-icon-wrap">{p.icon}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{p.title}</h3>
              <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {p.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(255,255,255,.45)' }}>
                    <span style={{ color: '#00ffff', fontSize: 10 }}>▶</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
