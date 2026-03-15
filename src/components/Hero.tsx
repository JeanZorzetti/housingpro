export default function Hero() {
  return (
    <section
      id="home"
      className="grid-bg hero-gradient"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 72, overflow: 'hidden' }}
    >
      {/* Background orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="animate-float" style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,255,.06) 0%, transparent 70%)', top: '15%', left: '6%' }} />
        <div className="animate-float-slow" style={{ position: 'absolute', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,80,200,.07) 0%, transparent 70%)', top: '50%', right: '4%', animationDelay: '2s' }} />
        <div className="animate-float" style={{ position: 'absolute', width: 130, height: 130, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,255,.07) 0%, transparent 70%)', bottom: '18%', left: '18%', animationDelay: '4s' }} />
        {/* Dot grid decoration */}
        <div style={{ position: 'absolute', top: '22%', right: '22%', opacity: .15, width: 180, height: 180, backgroundImage: 'radial-gradient(rgba(0,255,255,.7) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
        <div style={{ position: 'absolute', bottom: '22%', left: '22%', opacity: .08, width: 140, height: 140, backgroundImage: 'radial-gradient(rgba(0,255,255,.7) 1px, transparent 1px)', backgroundSize: '14px 14px' }} />
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="two-col">

          {/* Left content */}
          <div>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,255,255,.06)', border: '1px solid rgba(0,255,255,.2)', borderRadius: 999, padding: '6px 14px', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 8px rgba(74,222,128,.8)' }} />
              <span style={{ color: '#4ade80', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>Sistemas Ativos</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
              O <span className="gradient-text glow-cyan">Ecossistema Digital</span><br />
              que Escala com<br />
              <span style={{ color: '#00ffff' }}>Inteligência</span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 16, lineHeight: 1.75, marginBottom: 36, maxWidth: 460 }}>
              Unimos MarTech, Engenharia de Dados e IA para construir o sistema nervoso digital da sua empresa — donde cada dado vira decisão e cada decisão vira crescimento.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <a href="#contato" className="btn-cyan" style={{ padding: '14px 28px', borderRadius: 12, fontSize: 15 }}>
                Solicitar Demo Gratuita
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              <a href="#sobre" className="btn-outline" style={{ padding: '14px 24px', borderRadius: 12, fontSize: 15 }}>
                Conhecer Mais
              </a>
            </div>

            {/* Mini stats */}
            <div style={{ display: 'flex', gap: 32, marginTop: 44, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,.07)' }}>
              {[
                { val: '200+', label: 'Clientes' },
                { val: '380%', label: 'ROAS Médio' },
                { val: '99.9%', label: 'Uptime' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#00ffff' }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — terminal card */}
          <div className="reveal reveal-d2" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="glass-card animate-glow-breathe" style={{ borderRadius: 20, padding: 36, width: '100%', maxWidth: 440 }}>
              {/* Terminal header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(248,113,113,.6)' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(250,204,21,.6)' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(74,222,128,.6)' }} />
                </div>
                <span style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: 'rgba(255,255,255,.25)' }}>housing_pro.system</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'Courier New, monospace', fontSize: 13 }}>
                <div style={{ color: '#4ade80' }}>$ system.boot()</div>
                <div style={{ color: '#00ffff' }}>&gt; MarTech Stack... <span style={{ color: '#4ade80' }}>ONLINE</span></div>
                <div style={{ color: '#00ffff' }}>&gt; AI Engine... <span style={{ color: '#4ade80' }}>READY</span></div>
                <div style={{ color: '#00ffff' }}>&gt; Data Pipelines... <span style={{ color: '#4ade80' }}>SYNC 100%</span></div>
                <div style={{ color: '#00ffff' }}>&gt; Performance monitoring... <span style={{ color: '#4ade80' }}>ACTIVE</span></div>
                <div style={{ color: 'rgba(255,255,255,.35)' }}>&gt; Awaiting growth commands...</div>
                <div style={{ color: 'rgba(255,255,255,.7)' }}>&gt; <span style={{ color: '#00ffff' }}>Housing PRO</span> v3.0 running<span className="animate-blink">_</span></div>
              </div>

              {/* Mini metrics */}
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.06)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, textAlign: 'center' }}>
                {[
                  { val: '24/7', label: 'Monitoramento' },
                  { val: '<200ms', label: 'Response' },
                  { val: '∞', label: 'Escalável' },
                ].map(m => (
                  <div key={m.label}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#00ffff' }}>{m.val}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,.38)', marginTop: 3 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: .4 }}>
          <div style={{ fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>Scroll</div>
          <div style={{ width: 1, height: 32, background: 'linear-gradient(180deg, rgba(0,255,255,.6) 0%, transparent 100%)' }} />
        </div>
      </div>
    </section>
  )
}
