const checks = ['MarTech Integrado', 'IA Aplicada', 'Data-Driven', 'Resultados Mensuráveis']

export default function About() {
  return (
    <section id="sobre" className="grid-bg" style={{ padding: '96px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

          {/* Text */}
          <div className="reveal">
            <span className="tag-pill" style={{ marginBottom: 20, display: 'inline-block' }}>Quem Somos</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 24 }}>
              Uma empresa de <span className="gradient-text">tecnologia</span><br />
              apaixonada por <span style={{ color: '#00ffff' }} className="glow-cyan-sm">resultados</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,.62)', fontSize: 16, lineHeight: 1.75, marginBottom: 18 }}>
              A Housing PRO nasceu com uma missão clara: <strong style={{ color: '#fff' }}>democratizar o acesso a ecossistemas digitais de alta performance</strong> para empresas que querem crescer de forma inteligente e sustentável.
            </p>
            <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 15, lineHeight: 1.75, marginBottom: 32 }}>
              Reunimos especialistas em marketing digital, engenharia de dados e inteligência artificial para criar soluções integradas que vão além de campanhas isoladas — construímos o sistema nervoso digital da sua empresa.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {checks.map(c => (
                <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,.7)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* Terminal card */}
          <div className="reveal reveal-d2">
            <div className="glass-card animate-glow-breathe" style={{ borderRadius: 20, padding: 36 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['rgba(248,113,113,.6)', 'rgba(250,204,21,.6)', 'rgba(74,222,128,.6)'].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <span style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: 'rgba(255,255,255,.25)' }}>housing_pro.system</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'Courier New, monospace', fontSize: 13 }}>
                <div style={{ color: '#4ade80' }}>$ system.init()</div>
                <div style={{ color: '#00ffff' }}>&gt; Loading MarTech Stack... <span style={{ color: '#4ade80' }}>OK</span></div>
                <div style={{ color: '#00ffff' }}>&gt; AI Engine online... <span style={{ color: '#4ade80' }}>READY</span></div>
                <div style={{ color: '#00ffff' }}>&gt; Data pipelines synced... <span style={{ color: '#4ade80' }}>100%</span></div>
                <div style={{ color: '#00ffff' }}>&gt; Performance monitoring... <span style={{ color: '#4ade80' }}>ACTIVE</span></div>
                <div style={{ color: 'rgba(255,255,255,.35)' }}>&gt; Awaiting growth commands...</div>
                <div style={{ color: 'rgba(255,255,255,.7)' }}>&gt; <span style={{ color: '#00ffff' }}>Housing PRO</span> v3.0 running<span className="animate-blink">_</span></div>
              </div>
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.06)', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, textAlign: 'center' }}>
                {[['24/7', 'Monitoramento'], ['<200ms', 'Response Time'], ['∞', 'Escalabilidade']].map(([val, label]) => (
                  <div key={label}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#00ffff' }}>{val}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,.38)', marginTop: 3 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
