const features = [
  { icon: '🔌', title: 'Conectado', desc: 'Todos os canais integrados em um único ecossistema coeso' },
  { icon: '⚡', title: 'Inteligente', desc: 'IA aprendendo e otimizando continuamente seus processos' },
  { icon: '🔄', title: 'Autonomável', desc: 'Opera com cada vez menos intervenção manual ao longo do tempo' },
]

export default function Differential() {
  return (
    <section style={{ padding: '96px 0', background: 'linear-gradient(180deg,#000033 0%,#000022 100%)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <div className="reveal">
          <span className="tag-pill" style={{ marginBottom: 20, display: 'inline-block' }}>Nosso Diferencial</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,5vw,3.2rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>
            O <span className="gradient-text glow-cyan">Sistema Nervoso</span><br />
            Digital da sua Empresa
          </h2>
          <p style={{ color: 'rgba(255,255,255,.52)', fontSize: 16, maxWidth: 580, margin: '0 auto 48px', lineHeight: 1.75 }}>
            Enquanto outros vendem ferramentas isoladas, a Housing PRO constrói a camada de inteligência que conecta cada ponto de contato, dado e decisão do seu negócio.
          </p>
        </div>

        <div className="glass-card reveal reveal-d2" style={{ borderRadius: 24, padding: 48, maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28, textAlign: 'center' }}>
            {features.map((f, i) => (
              <div key={f.title} className={`reveal reveal-d${i + 1}`}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
