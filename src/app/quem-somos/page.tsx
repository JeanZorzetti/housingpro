import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import RevealObserver from '@/components/RevealObserver'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Quem Somos — Housing PRO',
  description: 'Conheça a Housing PRO: a empresa que une MarTech, Engenharia de Dados e IA para construir o sistema nervoso digital da sua empresa.',
  alternates: { canonical: `${siteConfig.url}/quem-somos` },
}

const checks = ['MarTech Integrado', 'IA Aplicada', 'Data-Driven', 'Resultados Mensuráveis', 'Escalabilidade', 'Suporte 24/7']

const values = [
  { icon: '🎯', title: 'Foco em Resultado', desc: 'Métricas de vaidade não nos interessam. Cada estratégia é orientada por KPIs reais que impactam o negócio.' },
  { icon: '🔬', title: 'Rigor Científico', desc: 'Decisões baseadas em dados, hipóteses testadas e aprendizados documentados — não em intuição.' },
  { icon: '🤝', title: 'Parceria Real', desc: 'Não somos fornecedores, somos parceiros. Seu crescimento é o nosso crescimento.' },
  { icon: '⚡', title: 'Velocidade', desc: 'Agilidade para testar, aprender e escalar o que funciona — antes da janela de oportunidade fechar.' },
  { icon: '🌐', title: 'Visão Sistêmica', desc: 'Cada ferramenta, campanha e dado fazem parte de um ecossistema integrado, não ações isoladas.' },
  { icon: '🔒', title: 'Confiança & Transparência', desc: 'Acesso total às plataformas, relatórios detalhados e comunicação proativa sobre resultados e desafios.' },
]

const team = [
  { initials: 'AM', name: 'André Martins', role: 'CEO & Co-Founder', bio: '12 anos em marketing digital. Ex-Google e Meta. Especialista em crescimento escalável para scale-ups.' },
  { initials: 'JF', name: 'Juliana Ferreira', role: 'CTO & Co-Founder', bio: 'Engenheira de dados com background em ML. Ex-iFood. Arquiteta dos nossos pipelines de dados em tempo real.' },
  { initials: 'RN', name: 'Ricardo Nunes', role: 'Head de IA', bio: 'PhD em Computação pela USP. Especialista em LLMs e automação inteligente aplicada a marketing.' },
]

export default function QuemSomosPage() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <main>

        <PageHero
          eyebrow="Nossa História"
          title="Uma empresa de tecnologia"
          titleHighlight="apaixonada por resultados"
          subtitle="Nascemos para democratizar o acesso a ecossistemas digitais de alta performance — onde cada dado vira decisão e cada decisão vira crescimento."
          breadcrumb="Quem Somos"
        />

        {/* Mission */}
        <section className="grid-bg" style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
              <div className="reveal">
                <span className="tag-pill" style={{ marginBottom: 20, display: 'inline-block' }}>Nossa Missão</span>
                <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 24 }}>
                  O <span style={{ color: '#00ffff' }} className="glow-cyan-sm">sistema nervoso</span><br />
                  digital da sua empresa
                </h2>
                <p style={{ color: 'rgba(255,255,255,.62)', fontSize: 16, lineHeight: 1.75, marginBottom: 18 }}>
                  A Housing PRO nasceu com uma missão clara: <strong style={{ color: '#fff' }}>democratizar o acesso a ecossistemas digitais de alta performance</strong> para empresas que querem crescer de forma inteligente e sustentável.
                </p>
                <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 15, lineHeight: 1.75, marginBottom: 32 }}>
                  Reunimos especialistas em marketing digital, engenharia de dados e inteligência artificial para criar soluções integradas que vão além de campanhas isoladas — construímos a infraestrutura que conecta cada ponto de contato, dado e decisão do seu negócio.
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

              {/* Terminal */}
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

        {/* Values */}
        <section style={{ padding: '96px 0', background: 'linear-gradient(180deg,#000033 0%,#00001a 100%)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="tag-pill">O Que Nos Move</span>
              <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#fff', marginTop: 12 }}>
                Nossos <span style={{ color: '#00ffff' }} className="glow-cyan-sm">Valores</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
              {values.map((v, i) => (
                <div key={v.title} className={`glass-card reveal reveal-d${(i % 3) + 1}`} style={{ borderRadius: 20, padding: 28, display: 'flex', gap: 20 }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0, lineHeight: 1 }}>{v.icon}</div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{v.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="grid-bg" style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="tag-pill">As Pessoas</span>
              <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#fff', marginTop: 12 }}>
                Quem está por <span style={{ color: '#00ffff' }} className="glow-cyan-sm">trás</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 24 }}>
              {team.map((t, i) => (
                <div key={t.name} className={`glass-card reveal reveal-d${i + 1}`} style={{ borderRadius: 20, padding: 32, textAlign: 'center' }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(0,255,255,.25),rgba(0,0,100,.5))', border: '2px solid rgba(0,255,255,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: '#00ffff', margin: '0 auto 20px' }}>
                    {t.initials}
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{t.name}</h3>
                  <div style={{ fontSize: 12, color: '#00ffff', fontWeight: 600, letterSpacing: '.05em', marginBottom: 14 }}>{t.role}</div>
                  <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, lineHeight: 1.7 }}>{t.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-gradient" style={{ padding: '80px 0', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
            <div className="reveal">
              <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
                Prontos para <span style={{ color: '#00ffff' }}>trabalhar juntos?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 15, marginBottom: 32 }}>
                Conheça nossos serviços ou agende uma conversa direta com a equipe.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/contato" className="btn-cyan" style={{ padding: '14px 28px', borderRadius: 12, fontSize: 15 }}>Agendar Conversa</a>
                <a href="/servicos" className="btn-outline" style={{ padding: '14px 24px', borderRadius: 12, fontSize: 15 }}>Ver Serviços</a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="grid-bg" style={{ paddingTop: 60, paddingBottom: 40, background: '#000022' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <Footer />
        </div>
      </footer>
    </>
  )
}
