import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import RevealObserver from '@/components/RevealObserver'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Serviços — Housing PRO',
  description: 'Performance Marketing, Data Engineering, AI Automation e Growth Hacking. Soluções end-to-end para escalar seu negócio com tecnologia e IA.',
  alternates: { canonical: `${siteConfig.url}/servicos` },
}

const services = [
  {
    icon: '📈',
    title: 'Performance Marketing',
    tagline: 'Mais resultado. Menos desperdício.',
    desc: 'Gerenciamos seu ecossistema completo de mídia paga — Google, Meta, TikTok, LinkedIn e Programático — com foco obsessivo em ROAS e CPA real.',
    features: [
      'Estratégia e planejamento de mídia integrado',
      'Configuração e auditoria de pixels e tags',
      'Criação e teste de audiências avançadas',
      'Gestão diária de campanhas com otimização por ML',
      'Creative strategy e briefing de criativos',
      'Relatórios semanais de performance e insights',
      'Reunião mensal de estratégia e planejamento',
      'Acesso ao gerente de conta dedicado',
    ],
    tags: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn Ads', 'Programático', 'CRO'],
    starting: 'A partir de R$ 3.500/mês',
    highlight: 'Mais popular',
  },
  {
    icon: '📊',
    title: 'Data Engineering',
    tagline: 'Seus dados. Em um lugar. Em tempo real.',
    desc: 'Construímos a infraestrutura de dados que unifica todas as fontes da sua empresa em um único ecossistema analítico — do raw data ao insight acionável.',
    features: [
      'Mapeamento e arquitetura do data stack',
      'Configuração de data warehouse (BigQuery / Snowflake)',
      'Pipelines ETL/ELT com dbt e Airflow',
      'Integração com CRM, plataformas de ads e e-commerce',
      'Dashboards executivos em Looker ou Metabase',
      'Data quality e monitoramento de pipelines',
      'Treinamento da equipe interna',
    ],
    tags: ['BigQuery', 'Snowflake', 'dbt', 'Airflow', 'Looker', 'Metabase'],
    starting: 'Sob consulta',
    highlight: null,
  },
  {
    icon: '🤖',
    title: 'AI Automation',
    tagline: 'Automatize o que não precisa de humano.',
    desc: 'Agentes de IA que substituem trabalho manual repetitivo: qualificação de leads, nutrição de jornadas, geração de conteúdo e atendimento inicial — em escala.',
    features: [
      'Mapeamento de processos automatizáveis',
      'Desenvolvimento de agentes de IA customizados',
      'Integração com WhatsApp, e-mail e CRM',
      'Lead scoring automático com aprendizado contínuo',
      'Geração e otimização de copy com LLMs',
      'Chatbots de qualificação e FAQ',
      'Automação de fluxos com n8n e Make',
      'Monitoramento e evolução contínua dos modelos',
    ],
    tags: ['LLMs', 'n8n', 'Make', 'OpenAI', 'Anthropic', 'WhatsApp API'],
    starting: 'A partir de R$ 5.000/mês',
    highlight: null,
  },
  {
    icon: '🚀',
    title: 'Growth Hacking',
    tagline: 'Experimentos rápidos. Crescimento exponencial.',
    desc: 'Ciclos de experimento acelerados para identificar alavancas de crescimento reais — CRO, funis otimizados, estratégias virais e testes A/B em todas as camadas.',
    features: [
      'Auditoria completa do funil de aquisição',
      'Definição de North Star Metric e métricas-chave',
      'Sprints semanais de experimentos',
      'A/B e multivariado em landing pages e e-mails',
      'Otimização de conversão em cada etapa do funil',
      'Estratégias de retenção e redução de churn',
      'Análise de coortes e LTV por segmento',
      'Relatório quinzenal de aprendizados e próximos testes',
    ],
    tags: ['CRO', 'A/B Testing', 'Hotjar', 'Mixpanel', 'Amplitude', 'Funnels'],
    starting: 'A partir de R$ 4.500/mês',
    highlight: null,
  },
]

const faqs = [
  { q: 'Posso contratar apenas um serviço?', a: 'Sim. Cada serviço funciona de forma independente. Mas clientes que combinam dois ou mais serviços obtêm resultados significativamente maiores pela integração dos dados e estratégias.' },
  { q: 'Qual o prazo mínimo de contrato?', a: 'Contratos de serviços recorrentes têm duração mínima de 3 meses. Projetos pontuais (como data stack inicial) são fechados por escopo com prazo definido.' },
  { q: 'Vocês trabalham com qualquer segmento?', a: 'Temos expertise em B2B tech, e-commerce, imobiliárias, educação e serviços financeiros. Para outros segmentos, avaliamos caso a caso.' },
]

export default function ServicosPage() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <main>

        <PageHero
          eyebrow="O Que Fazemos"
          title="Soluções end-to-end para"
          titleHighlight="escalar com inteligência"
          subtitle="Quatro serviços especializados que, juntos, formam o ecossistema digital completo da sua empresa. Contrate um ou todos — a integração é nossa responsabilidade."
          breadcrumb="Serviços"
        />

        {/* Services */}
        <section className="grid-bg" style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 32 }}>
            {services.map((s, i) => (
              <div key={s.title} className={`glass-card reveal`} style={{ borderRadius: 24, padding: 40, position: 'relative' }}>
                {s.highlight && (
                  <div style={{ position: 'absolute', top: -12, right: 24, background: 'linear-gradient(135deg,#00ffff,#00cccc)', color: '#000033', fontSize: 11, fontWeight: 700, padding: '4px 16px', borderRadius: 999, letterSpacing: '.08em' }}>
                    {s.highlight}
                  </div>
                )}
                <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 40, alignItems: 'start' }}>
                  {/* Left */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                      <div className="service-icon">{s.icon}</div>
                      <div>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fff', lineHeight: 1.2 }}>{s.title}</h2>
                        <div style={{ fontSize: 13, color: '#00ffff', marginTop: 4 }}>{s.tagline}</div>
                      </div>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>{s.desc}</p>
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 8 }}>Tecnologias</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {s.tags.map(t => (
                          <span key={t} style={{ fontSize: 11, padding: '3px 10px', borderRadius: 999, background: 'rgba(0,255,255,.07)', color: 'rgba(0,255,255,.65)', border: '1px solid rgba(0,255,255,.15)' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.06)' }}>
                      <div style={{ fontSize: 18, fontWeight: 700, color: '#00ffff' }}>{s.starting}</div>
                      <a href="/contato" className="btn-cyan" style={{ marginTop: 12, padding: '10px 24px', borderRadius: 10, fontSize: 13, display: 'inline-flex' }}>
                        Solicitar Proposta
                      </a>
                    </div>
                  </div>
                  {/* Right — features */}
                  <div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 14 }}>Incluso no serviço</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {s.features.map(f => (
                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'rgba(255,255,255,.02)', borderRadius: 8, border: '1px solid rgba(255,255,255,.05)' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span style={{ fontSize: 13, color: 'rgba(255,255,255,.65)' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '80px 0', background: 'linear-gradient(180deg,#000033 0%,#00001a 100%)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="tag-pill">FAQ</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 900, color: '#fff', marginTop: 12 }}>Dúvidas frequentes</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {faqs.map((f, i) => (
                <div key={f.q} className={`glass-card reveal reveal-d${i + 1}`} style={{ borderRadius: 16, padding: 24 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{f.q}</div>
                  <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 14, lineHeight: 1.7 }}>{f.a}</p>
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
                Pronto para <span style={{ color: '#00ffff' }}>começar?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 15, marginBottom: 32 }}>
                Agende uma conversa gratuita e descubra quais serviços fazem mais sentido para seu momento.
              </p>
              <a href="/contato" className="btn-cyan" style={{ padding: '14px 36px', borderRadius: 12, fontSize: 16 }}>Solicitar proposta gratuita</a>
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
