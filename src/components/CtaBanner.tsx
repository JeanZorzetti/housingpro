export default function CtaBanner() {
  return (
    <section className="cta-gradient" style={{ padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '50%', height: '200%', background: 'radial-gradient(ellipse, rgba(0,255,255,.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-5%', width: '40%', height: '150%', background: 'radial-gradient(ellipse, rgba(0,100,255,.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
        <div className="reveal">
          <span className="tag-pill" style={{ marginBottom: 20, display: 'inline-block' }}>Próximo Passo</span>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Pronto para construir seu<br />
            <span className="gradient-text glow-cyan">Ecossistema Digital?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 17, marginBottom: 40, maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Agende uma conversa gratuita com nossos arquitetos de ecossistemas e descubra o potencial real do seu negócio.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <a href="#contato" className="btn-cyan" style={{ padding: '16px 36px', borderRadius: 14, fontSize: 16 }}>
              Agendar Conversa Gratuita
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#servicos" className="btn-outline" style={{ padding: '16px 28px', borderRadius: 14, fontSize: 16 }}>
              Ver Serviços
            </a>
          </div>
          <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,.3)' }}>
            Sem compromisso · Resposta em até 24h
          </p>
        </div>
      </div>
    </section>
  )
}
