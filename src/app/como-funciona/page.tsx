import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import RevealObserver from '@/components/RevealObserver'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Como Funciona — Housing PRO',
  description: 'Do diagnóstico à escala em 3 etapas. Conheça o processo comprovado da Housing PRO para construir e otimizar ecossistemas digitais de alta performance.',
  alternates: { canonical: `${siteConfig.url}/como-funciona` },
}

const steps = [
  {
    num: '01',
    icon: '🔍',
    title: 'Diagnóstico',
    subtitle: '2–5 dias úteis',
    desc: 'Antes de propor qualquer solução, entendemos profundamente onde você está e para onde quer ir. Auditamos todo o ecossistema digital atual — ferramentas, dados, campanhas, processos — e identificamos os gaps e oportunidades de maior impacto.',
    activities: [
      'Workshop de discovery com stakeholders-chave (2h)',
      'Auditoria completa de campanhas e contas de mídia',
      'Análise do stack tecnológico atual',
      'Revisão de relatórios e métricas existentes',
      'Mapeamento de fluxos de dados e integrações',
      'Entrevistas com time de marketing e vendas',
    ],
    deliverable: 'Relatório de diagnóstico com gaps, oportunidades priorizadas e plano de implementação detalhado.',
  },
  {
    num: '02',
    icon: '⚙️',
    title: 'Implementação',
    subtitle: '4–8 semanas',
    desc: 'Com o diagnóstico em mãos, construímos o ecossistema em sprints ágeis. Cada sprint entrega valor incremental — você começa a ver resultados antes de termos terminado a implementação completa.',
    activities: [
      'Kickoff de projeto com plano de sprints',
      'Configuração de plataformas e integrações',
      'Construção dos pipelines de dados',
      'Setup e ativação das primeiras campanhas',
      'Desenvolvimento de dashboards e relatórios',
      'Treinamento da equipe interna',
      'QA e validação de cada entrega',
    ],
    deliverable: 'Ecossistema completo operacional com documentação técnica e acesso total às plataformas.',
  },
  {
    num: '03',
    icon: '📡',
    title: 'Escala',
    subtitle: 'Contínuo',
    desc: 'A implementação é só o começo. Nossa operação contínua monitora, otimiza e expande o ecossistema baseado nos dados reais do seu negócio — aprendendo e melhorando a cada ciclo.',
    activities: [
      'Monitoramento diário de campanhas e sistemas',
      'Otimização semanal baseada em dados',
      'Experimentos e testes A/B contínuos',
      'Relatórios semanais de performance',
      'Reunião mensal de estratégia e planejamento',
      'Expansão gradual para novos canais e mercados',
      'Evolução dos modelos de IA ao longo do tempo',
    ],
    deliverable: 'Crescimento mensurável e consistente, com visibilidade total sobre cada KPI do negócio.',
  },
]

const timeline = [
  { week: 'Sem 1', label: 'Discovery & Diagnóstico', color: '#00ffff' },
  { week: 'Sem 2-3', label: 'Setup de infraestrutura', color: '#a78bfa' },
  { week: 'Sem 3-4', label: 'Primeiras campanhas live', color: '#34d399' },
  { week: 'Sem 5-6', label: 'Dashboards operacionais', color: '#fbbf24' },
  { week: 'Sem 7-8', label: 'Otimização e expansão', color: '#00ffff' },
  { week: 'Ongoing', label: 'Escala contínua', color: '#34d399' },
]

export default function ComoFuncionaPage() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <main>

        <PageHero
          eyebrow="Nosso Processo"
          title="Do diagnóstico à escala"
          titleHighlight="em 3 etapas"
          subtitle="Um processo comprovado que garante resultados consistentes — sem caixas-pretas, sem promessas vazias. Você sabe exatamente o que acontece em cada fase."
          breadcrumb="Como Funciona"
        />

        {/* Steps */}
        <section className="grid-bg" style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {steps.map((s, i) => (
              <div key={s.title}>
                <div className={`glass-card reveal`} style={{ borderRadius: 24, padding: 48 }}>
                  <div className="two-col" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 48, alignItems: 'start' }}>
                    {/* Step indicator */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, paddingTop: 8 }}>
                      <div className="step-num" style={{ margin: 0 }}>{s.num}</div>
                      <div style={{ fontSize: '2rem' }}>{s.icon}</div>
                      {i < steps.length - 1 && (
                        <div style={{ width: 2, height: 40, background: 'linear-gradient(180deg,rgba(0,255,255,.3),transparent)' }} />
                      )}
                    </div>
                    {/* Content */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff' }}>{s.title}</h2>
                        <span style={{ fontSize: 12, color: 'rgba(0,255,255,.7)', fontFamily: 'Courier New, monospace', background: 'rgba(0,255,255,.08)', padding: '3px 10px', borderRadius: 999 }}>{s.subtitle}</span>
                      </div>
                      <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>{s.desc}</p>
                      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                        <div>
                          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 12 }}>Atividades</div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {s.activities.map(a => (
                              <div key={a} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'rgba(255,255,255,.6)' }}>
                                <span style={{ color: '#00ffff', flexShrink: 0, fontSize: 10, marginTop: 3 }}>▶</span>
                                {a}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 12 }}>Entregável</div>
                          <div style={{ background: 'rgba(0,255,255,.05)', border: '1px solid rgba(0,255,255,.2)', borderRadius: 12, padding: 16 }}>
                            <div style={{ fontSize: 10, color: '#00ffff', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 8 }}>Você recebe</div>
                            <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 13, lineHeight: 1.6 }}>{s.deliverable}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && <div style={{ height: 8 }} />}
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: '80px 0', background: 'linear-gradient(180deg,#000033 0%,#00001a 100%)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="tag-pill">Linha do Tempo</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 900, color: '#fff', marginTop: 12 }}>
                Da conversa ao <span style={{ color: '#00ffff' }}>resultado</span>
              </h2>
            </div>
            <div className="reveal reveal-d2" style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {timeline.map((t, i) => (
                <div key={t.week} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 20px', background: i % 2 === 0 ? 'rgba(255,255,255,.02)' : 'transparent', borderRadius: 12 }}>
                  <div style={{ width: 80, flexShrink: 0, fontSize: 12, fontFamily: 'Courier New, monospace', color: t.color, fontWeight: 700 }}>{t.week}</div>
                  <div style={{ flex: 1, height: 2, background: `linear-gradient(90deg, ${t.color}60, transparent)`, borderRadius: 1 }} />
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,.7)', fontWeight: 500 }}>{t.label}</div>
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
                Pronto para o <span style={{ color: '#00ffff' }}>Diagnóstico?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 15, marginBottom: 32 }}>
                A primeira etapa é gratuita. Entendemos seu negócio antes de propor qualquer solução.
              </p>
              <a href="/contato" className="btn-cyan" style={{ padding: '14px 36px', borderRadius: 12, fontSize: 16 }}>Agendar diagnóstico gratuito</a>
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
