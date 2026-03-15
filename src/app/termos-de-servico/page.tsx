import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Termos de Serviço — Housing PRO',
  description: 'Leia os Termos de Serviço da Housing PRO. Condições de uso, responsabilidades e direitos das partes.',
}

const sections = [
  {
    title: '1. Aceitação dos Termos',
    content: `Ao contratar os serviços da Housing PRO Ecossistemas Digitais Ltda. ("Housing PRO", "nós" ou "nossos"), você ("Cliente") concorda com estes Termos de Serviço na íntegra. Caso não concorde com qualquer disposição, não utilize nossos serviços.

Estes Termos constituem um contrato vinculante entre o Cliente e a Housing PRO, regendo todas as relações comerciais, entregas e responsabilidades entre as partes.`,
  },
  {
    title: '2. Descrição dos Serviços',
    content: `A Housing PRO oferece serviços de:

• **Performance Marketing** — gestão de campanhas pagas em plataformas digitais (Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads e outras);
• **Data Engineering** — construção e manutenção de pipelines de dados, data warehouses e dashboards analíticos;
• **AI Automation** — desenvolvimento de agentes de inteligência artificial, automação de fluxos e integração de sistemas via API;
• **Growth Hacking** — experimentação de crescimento, CRO, análise de funil e otimização de conversão.

O escopo específico de cada projeto é definido em Proposta Comercial e/ou Contrato de Prestação de Serviços assinado pelas partes.`,
  },
  {
    title: '3. Contratação e Vigência',
    content: `3.1 A relação contratual se inicia na data de assinatura do contrato ou da emissão do primeiro boleto/NF, o que ocorrer primeiro.

3.2 Contratos de serviços recorrentes têm duração mínima de 3 (três) meses, renováveis automaticamente por períodos iguais e sucessivos, salvo comunicação contrária com antecedência mínima de 30 (trinta) dias.

3.3 Projetos pontuais têm vigência determinada pelo escopo acordado na Proposta Comercial.

3.4 O encerramento antecipado, fora do período mínimo, sujeita o Cliente ao pagamento dos meses remanescentes do período mínimo contratado.`,
  },
  {
    title: '4. Obrigações da Housing PRO',
    content: `A Housing PRO se compromete a:

• Executar os serviços contratados com profissionalismo, diligência e dentro dos prazos acordados;
• Designar profissionais qualificados para cada projeto;
• Manter comunicação proativa sobre o andamento, resultados e eventuais impedimentos;
• Fornecer relatórios periódicos conforme definido em contrato;
• Tratar as informações do Cliente com confidencialidade, nos termos da cláusula 8;
• Cumprir a legislação aplicável, incluindo a Lei Geral de Proteção de Dados (LGPD).`,
  },
  {
    title: '5. Obrigações do Cliente',
    content: `O Cliente se compromete a:

• Fornecer, em tempo hábil, todos os acessos, informações e materiais necessários para a execução dos serviços;
• Efetuar os pagamentos nas datas acordadas;
• Designar um ponto focal (interlocutor) para comunicação com a Housing PRO;
• Não realizar alterações diretas em plataformas, contas ou configurações gerenciadas pela Housing PRO sem prévia comunicação;
• Informar mudanças estratégicas ou operacionais que possam impactar os serviços prestados;
• Utilizar os entregáveis exclusivamente para fins lícitos e em conformidade com as políticas das plataformas utilizadas.`,
  },
  {
    title: '6. Pagamentos e Reajustes',
    content: `6.1 Os valores são os definidos na Proposta Comercial vigente.

6.2 O pagamento deverá ser realizado até a data de vencimento indicada na fatura. Atrasos incorrem em multa de 2% e juros moratórios de 1% ao mês, além de correção pelo IPCA.

6.3 A Housing PRO reserva-se o direito de suspender os serviços após 15 (quinze) dias de inadimplência, sem prejuízo da cobrança dos valores devidos.

6.4 Os valores serão reajustados anualmente pelo IPCA acumulado do período, mediante comunicação prévia de 30 dias.

6.5 Investimentos em mídia paga (Google Ads, Meta Ads etc.) são de responsabilidade exclusiva do Cliente e não estão inclusos nos honorários de gestão, salvo disposição expressa em contrário.`,
  },
  {
    title: '7. Propriedade Intelectual',
    content: `7.1 Todos os materiais, metodologias, frameworks, scripts e códigos desenvolvidos pela Housing PRO que não sejam criados especificamente e exclusivamente para o Cliente permanecem de propriedade da Housing PRO.

7.2 Os entregáveis criados exclusivamente para o Cliente (relatórios, dashboards, criativos, automações customizadas) passam a ser de propriedade do Cliente após a quitação integral dos serviços relacionados.

7.3 A Housing PRO poderá referenciar o Cliente como case de sucesso em materiais de marketing, salvo objeção expressa por escrito.

7.4 O Cliente não poderá sublicenciar, revender ou ceder a terceiros os serviços contratados sem autorização prévia e por escrito da Housing PRO.`,
  },
  {
    title: '8. Confidencialidade',
    content: `8.1 Ambas as partes se comprometem a manter sigilo absoluto sobre todas as informações confidenciais trocadas no contexto da prestação de serviços, incluindo dados estratégicos, financeiros, tecnológicos e de clientes.

8.2 A obrigação de confidencialidade persiste por 2 (dois) anos após o término do contrato.

8.3 Não são consideradas confidenciais as informações que sejam de domínio público, que já fossem de conhecimento da parte receptora antes da contratação, ou cuja divulgação seja exigida por lei ou ordem judicial.`,
  },
  {
    title: '9. Limitação de Responsabilidade',
    content: `9.1 A Housing PRO não garante resultados específicos de marketing (como ROAS mínimo, volume de leads ou crescimento de receita), uma vez que tais resultados dependem de fatores externos, como comportamento do mercado, sazonalidade e decisões do Cliente.

9.2 A Housing PRO não se responsabiliza por perdas indiretas, lucros cessantes ou danos consequentes decorrentes do uso ou impossibilidade de uso dos serviços.

9.3 Em qualquer caso, a responsabilidade total da Housing PRO fica limitada ao valor pago pelo Cliente nos últimos 3 (três) meses de serviço.

9.4 A Housing PRO não se responsabiliza por interrupções, alterações de políticas ou suspensões promovidas pelas plataformas de terceiros (Google, Meta, etc.).`,
  },
  {
    title: '10. Rescisão',
    content: `10.1 Qualquer parte poderá rescindir o contrato mediante aviso prévio de 30 dias, respeitado o período mínimo de vigência.

10.2 A Housing PRO poderá rescindir imediatamente o contrato, sem ônus, em caso de: inadimplência superior a 30 dias; uso dos serviços para fins ilícitos; descumprimento grave das obrigações do Cliente; ou conduta que prejudique a reputação da Housing PRO.

10.3 Em caso de rescisão pelo Cliente dentro do período mínimo, são devidos os honorários dos meses remanescentes.`,
  },
  {
    title: '11. Alterações dos Termos',
    content: `A Housing PRO reserva-se o direito de atualizar estes Termos de Serviço a qualquer momento, mediante comunicação ao Cliente com antecedência mínima de 15 dias. O uso continuado dos serviços após essa data implica aceitação das novas condições.`,
  },
  {
    title: '12. Lei Aplicável e Foro',
    content: `Estes Termos são regidos pelas leis da República Federativa do Brasil. As partes elegem o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias, com renúncia expressa a qualquer outro, por mais privilegiado que seja.`,
  },
]

export default function TermosPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section
          className="grid-bg hero-gradient"
          style={{ paddingTop: 128, paddingBottom: 64, position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(0,255,255,.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 24, fontSize: 13, color: 'rgba(255,255,255,.4)' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Início</a>
              <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
              <span style={{ color: '#00ffff' }}>Termos de Serviço</span>
            </div>
            <span className="tag-pill" style={{ marginBottom: 20, display: 'inline-block' }}>Jurídico</span>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>
              Termos de Serviço
            </h1>
            <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 15 }}>
              Última atualização: março de 2026
            </p>
            <div style={{ width: 64, height: 2, background: 'linear-gradient(90deg, transparent, #00ffff, transparent)', margin: '28px auto 0' }} />
          </div>
        </section>

        {/* Content */}
        <section className="grid-bg" style={{ padding: '80px 0 96px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>

            {/* Intro box */}
            <div className="glass-card" style={{ borderRadius: 16, padding: '24px 28px', marginBottom: 48, borderLeft: '4px solid #00ffff' }}>
              <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 15, lineHeight: 1.75 }}>
                Este documento rege a relação entre a <strong style={{ color: '#fff' }}>Housing PRO Ecossistemas Digitais Ltda.</strong> e seus clientes. Leia com atenção antes de contratar nossos serviços. Em caso de dúvidas, entre em contato pelo e-mail <a href="mailto:contato@housingpro.tech" style={{ color: '#00ffff' }}>contato@housingpro.tech</a>.
              </p>
            </div>

            {/* Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {sections.map(s => (
                <div key={s.title}>
                  <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 4, height: 20, background: '#00ffff', borderRadius: 2, flexShrink: 0, display: 'inline-block' }} />
                    {s.title}
                  </h2>
                  <div style={{ paddingLeft: 14 }}>
                    {s.content.split('\n').map((line, i) => {
                      if (!line.trim()) return <div key={i} style={{ height: 10 }} />
                      if (line.startsWith('•')) {
                        return (
                          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                            <span style={{ color: '#00ffff', flexShrink: 0, marginTop: 2 }}>•</span>
                            <span style={{ color: 'rgba(255,255,255,.65)', fontSize: 15, lineHeight: 1.75 }}
                              dangerouslySetInnerHTML={{ __html: line.slice(1).trim().replace(/\*\*(.+?)\*\*/g, '<strong style="color:#fff">$1</strong>') }}
                            />
                          </div>
                        )
                      }
                      return (
                        <p key={i} style={{ color: 'rgba(255,255,255,.65)', fontSize: 15, lineHeight: 1.8, marginBottom: 8 }}
                          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#fff">$1</strong>') }}
                        />
                      )
                    })}
                  </div>
                  <div style={{ height: 1, background: 'rgba(255,255,255,.06)', marginTop: 28 }} />
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div style={{ marginTop: 48, padding: '20px 24px', background: 'rgba(0,255,255,.04)', border: '1px solid rgba(0,255,255,.12)', borderRadius: 12, textAlign: 'center' }}>
              <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 14, lineHeight: 1.7 }}>
                Dúvidas sobre estes termos?{' '}
                <a href="/contato" style={{ color: '#00ffff', textDecoration: 'none', fontWeight: 600 }}>Entre em contato</a>
                {' '}ou acesse nossa{' '}
                <a href="/politica-de-privacidade" style={{ color: '#00ffff', textDecoration: 'none', fontWeight: 600 }}>Política de Privacidade</a>.
              </p>
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
