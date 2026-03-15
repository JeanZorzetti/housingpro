import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import RevealObserver from '@/components/RevealObserver'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Nossos Pilares — Housing PRO',
  description: 'Três fundações estratégicas que sustentam todo ecossistema que construímos: Marketing de Precisão, Infraestrutura Tech e Inteligência Artificial.',
}

const pillars = [
  {
    num: '01',
    icon: '🎯',
    title: 'Marketing de Precisão',
    desc: 'Estratégias de performance calibradas por dados reais, com segmentação ultra-precisa e otimização contínua baseada em machine learning.',
    longDesc: 'Não trabalhamos com "boost de post" ou campanha genérica. Cada investimento em mídia é planejado com base em dados históricos, comportamento de audiência e modelagem preditiva. Nossos algoritmos ajustam bids, criativos e segmentações em tempo real — 24/7.',
    items: ['Campanhas multi-canal integradas (Google, Meta, TikTok, LinkedIn)', 'Otimização automática de bids com ML', 'Attribution modeling avançado (Data-Driven Attribution)', 'Creative testing em escala', 'Segmentação por lookalike e comportamento', 'Relatórios de ROAS por canal, produto e audiência'],
    metric: { val: '380%', label: 'ROAS médio do portfólio' },
    color: '#00ffff',
  },
  {
    num: '02',
    icon: '⚙️',
    title: 'Infraestrutura Tech',
    desc: 'Arquitetura digital robusta, escalável e segura. Desde CRMs personalizados até pipelines de dados em tempo real.',
    longDesc: 'A maioria das empresas opera com dados espalhados em dezenas de ferramentas desconectadas. Nós construímos a camada de integração que unifica tudo: CRM, plataformas de mídia, e-commerce, ERP, analytics — em um único ecossistema coeso e operável.',
    items: ['Data warehousing com BigQuery e Snowflake', 'Pipelines ETL/ELT robustos e monitorados', 'Integrações API customizadas entre plataformas', 'Infraestrutura cloud resiliente (AWS/GCP)', 'CRMs configurados e integrados (HubSpot, Salesforce)', 'Dashboards em tempo real com Looker e Metabase'],
    metric: { val: '99.9%', label: 'Uptime dos sistemas' },
    color: '#a78bfa',
  },
  {
    num: '03',
    icon: '🧠',
    title: 'Inteligência Artificial',
    desc: 'IA aplicada a cenários reais: automação de jornadas, predição de churn, scoring de leads e geração de conteúdo em escala.',
    longDesc: 'IA não é buzzword aqui — é ferramenta operacional. Usamos LLMs para geração e otimização de conteúdo, modelos preditivos para scoring de leads e churn, e agentes autônomos que operam fluxos inteiros sem intervenção humana.',
    items: ['Modelos preditivos de churn e LTV', 'Lead scoring automático com aprendizado contínuo', 'Agentes de IA para qualificação e nutrição de leads', 'Geração de copy e criativos em escala com LLMs', 'NLP para análise de sentimento e feedback', 'Automação de workflows com n8n e Make'],
    metric: { val: '40h', label: 'economia/mês por cliente em média' },
    color: '#34d399',
  },
]

export default function PilaresPage() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <main>

        <PageHero
          eyebrow="Nossa Fundação"
          title="Três pilares."
          titleHighlight="Uma estratégia integrada."
          subtitle="Cada pilar é uma especialidade profunda. Juntos, formam o ecossistema digital completo que leva sua empresa do caos à clareza operacional."
          breadcrumb="Pilares"
        />

        {/* Pillar cards */}
        <section className="grid-bg" style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 40 }}>
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`glass-card reveal`}
                style={{ borderRadius: 24, padding: '48px', borderLeft: `4px solid ${p.color}` }}
              >
                <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 48, alignItems: 'start' }}>
                  {/* Left */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                      <span style={{ fontFamily: 'Courier New, monospace', fontSize: 13, color: p.color, opacity: .5 }}>{p.num}</span>
                      <span style={{ fontSize: '2.5rem' }}>{p.icon}</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 900, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>{p.title}</h2>
                    <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>{p.longDesc}</p>
                    {/* Metric */}
                    <div style={{ background: 'rgba(0,255,255,.05)', border: '1px solid rgba(0,255,255,.15)', borderRadius: 12, padding: '16px 20px', display: 'inline-block' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 900, color: p.color }}>{p.metric.val}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginTop: 2 }}>{p.metric.label}</div>
                    </div>
                  </div>
                  {/* Right — items */}
                  <div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 16 }}>O que entregamos</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {p.items.map(item => (
                        <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,.06)' }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 1 }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span style={{ fontSize: 14, color: 'rgba(255,255,255,.7)', lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How they connect */}
        <section style={{ padding: '80px 0', background: 'linear-gradient(180deg,#000033 0%,#000022 100%)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <div className="reveal">
              <span className="tag-pill" style={{ marginBottom: 20, display: 'inline-block' }}>Integração Total</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
                Juntos formam um <span className="gradient-text">ecossistema vivo</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 15, lineHeight: 1.75 }}>
                Os dados de marketing alimentam a IA, que otimiza a infraestrutura, que entrega melhores dados de marketing. Um ciclo virtuoso que se auto-aprimora continuamente.
              </p>
            </div>
            <div className="reveal reveal-d2" style={{ marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              {pillars.map((p, i) => (
                <>
                  <div key={p.title} style={{ textAlign: 'center' }}>
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: `${p.color}15`, border: `2px solid ${p.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', margin: '0 auto 8px' }}>{p.icon}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)', fontWeight: 600 }}>{p.title.split(' ')[0]}</div>
                  </div>
                  {i < pillars.length - 1 && (
                    <div key={`arrow-${i}`} style={{ color: '#00ffff', fontSize: '1.2rem', opacity: .4 }}>→</div>
                  )}
                </>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-gradient" style={{ padding: '80px 0', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
            <div className="reveal">
              <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
                Qual pilar sua empresa <span style={{ color: '#00ffff' }}>mais precisa?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 15, marginBottom: 32 }}>
                Começamos por onde gera mais valor e expandimos de forma integrada.
              </p>
              <a href="/contato" className="btn-cyan" style={{ padding: '14px 36px', borderRadius: 12, fontSize: 16 }}>Conversar com especialista</a>
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
