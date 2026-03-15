import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Housing PRO',
  description: 'Saiba como a Housing PRO coleta, usa, armazena e protege seus dados pessoais, em conformidade com a LGPD.',
}

const sections = [
  {
    title: '1. Quem Somos (Controlador dos Dados)',
    content: `A **Housing PRO Ecossistemas Digitais Ltda.** é a controladora dos dados pessoais coletados neste site e no contexto dos serviços prestados.

• **Razão Social:** Housing PRO Ecossistemas Digitais Ltda.
• **E-mail do DPO:** privacidade@housingpro.tech
• **Contato geral:** contato@housingpro.tech

Esta Política foi elaborada em conformidade com a **Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)** e demais normas aplicáveis.`,
  },
  {
    title: '2. Dados que Coletamos',
    content: `Coletamos os seguintes dados, conforme o contexto de interação:

**2.1 Dados fornecidos diretamente por você:**
• Nome completo e nome da empresa
• Endereço de e-mail corporativo
• Número de telefone/WhatsApp
• Cargo e área de atuação
• Mensagens enviadas via formulários de contato

**2.2 Dados coletados automaticamente:**
• Endereço IP e dados de geolocalização aproximada
• Tipo de dispositivo, navegador e sistema operacional
• Páginas visitadas, tempo de permanência e cliques
• Origem do acesso (UTM, referrer)

**2.3 Dados de clientes (contexto de serviços):**
• Credenciais de acesso a plataformas (Google Ads, Meta, CRMs etc.) — tratadas com sigilo absoluto
• Dados analíticos e de performance das campanhas gerenciadas
• Informações estratégicas compartilhadas durante a prestação de serviços`,
  },
  {
    title: '3. Como Usamos Seus Dados',
    content: `Utilizamos seus dados para as seguintes finalidades:

• **Contato e atendimento** — responder solicitações, agendar reuniões e prestar suporte;
• **Prestação de serviços** — executar, monitorar e otimizar os serviços contratados;
• **Comunicações comerciais** — enviar propostas, novidades e conteúdos relevantes (com seu consentimento);
• **Melhoria dos nossos serviços** — análise de uso do site e performance interna;
• **Cumprimento de obrigações legais** — emissão de notas fiscais, contratos e outros documentos exigidos por lei;
• **Segurança** — detecção de fraudes, acessos não autorizados e proteção dos sistemas.

Não utilizamos seus dados para tomadas de decisão exclusivamente automatizadas com efeitos jurídicos significativos sem supervisão humana.`,
  },
  {
    title: '4. Bases Legais (LGPD)',
    content: `O tratamento dos seus dados se baseia nas seguintes hipóteses legais previstas na LGPD:

• **Consentimento (Art. 7º, I)** — para envio de comunicações de marketing e uso de cookies não essenciais;
• **Execução de contrato (Art. 7º, V)** — para prestação dos serviços contratados;
• **Legítimo interesse (Art. 7º, IX)** — para análise de uso do site e melhoria dos serviços;
• **Cumprimento de obrigação legal (Art. 7º, II)** — para emissão de documentos fiscais e atendimento a requisições de autoridades.`,
  },
  {
    title: '5. Compartilhamento de Dados',
    content: `Compartilhamos seus dados apenas nas seguintes situações e com as devidas garantias:

• **Parceiros e ferramentas operacionais** — plataformas como Google Workspace, Notion, Slack e sistemas de gestão internos, que atuam como operadores de dados sob contratos de confidencialidade;
• **Plataformas de marketing** — Google, Meta, TikTok e similares, exclusivamente para execução dos serviços contratados;
• **Prestadores de serviços jurídicos e contábeis** — para cumprimento de obrigações legais e societárias;
• **Autoridades públicas** — quando exigido por lei, ordem judicial ou regulamentação aplicável.

**Jamais vendemos, alugamos ou cedemos seus dados a terceiros para fins comerciais próprios desses terceiros.**`,
  },
  {
    title: '6. Cookies e Tecnologias de Rastreamento',
    content: `Utilizamos cookies e tecnologias similares para:

• **Cookies essenciais** — necessários para o funcionamento básico do site (não requerem consentimento);
• **Cookies analíticos** — Google Analytics para entender como os visitantes usam o site (requerem consentimento);
• **Cookies de marketing** — rastreamento de campanhas e remarketing (requerem consentimento explícito).

Você pode gerenciar suas preferências de cookies a qualquer momento através das configurações do seu navegador. A desativação de cookies essenciais pode impactar a funcionalidade do site.`,
  },
  {
    title: '7. Armazenamento e Segurança',
    content: `7.1 Seus dados são armazenados em servidores seguros localizados no Brasil e/ou em países com nível adequado de proteção de dados, conforme reconhecido pela ANPD.

7.2 Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo: criptografia em trânsito (TLS/HTTPS), controle de acesso por perfil, autenticação de dois fatores para sistemas internos e monitoramento contínuo de segurança.

7.3 Em caso de incidente de segurança que possa causar dano aos titulares, notificaremos a ANPD e os afetados dentro dos prazos estabelecidos pela LGPD.`,
  },
  {
    title: '8. Retenção dos Dados',
    content: `Mantemos seus dados pelo tempo necessário para cumprir as finalidades para as quais foram coletados:

• **Leads e contatos:** até 2 anos após o último contato, salvo consentimento para retenção maior;
• **Dados de clientes ativos:** durante toda a vigência contratual;
• **Dados pós-contrato:** até 5 anos após o encerramento, para cumprimento de obrigações legais (tributárias, trabalhistas etc.);
• **Dados de navegação:** até 26 meses (padrão Google Analytics).

Após esses períodos, os dados são anonimizados ou excluídos de forma segura.`,
  },
  {
    title: '9. Seus Direitos como Titular',
    content: `Nos termos da LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:

• **Confirmação e acesso** — saber se tratamos seus dados e obter cópia deles;
• **Correção** — solicitar a correção de dados incompletos, inexatos ou desatualizados;
• **Anonimização ou exclusão** — solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;
• **Portabilidade** — receber seus dados em formato estruturado para transferência a outro fornecedor;
• **Revogação do consentimento** — retirar consentimento dado anteriormente, sem prejuízo da licitude dos tratamentos anteriores;
• **Oposição** — opor-se a tratamentos realizados com base em legítimo interesse;
• **Informação** — saber com quais entidades compartilhamos seus dados.

Para exercer seus direitos, envie solicitação para **privacidade@housingpro.tech** com identificação e descrição do pedido. Responderemos em até 15 dias úteis.`,
  },
  {
    title: '10. Transferências Internacionais',
    content: `Alguns de nossos fornecedores operam fora do Brasil (ex: Google, Meta, Anthropic). Nestes casos, garantimos que as transferências ocorrem com salvaguardas adequadas, como cláusulas contratuais padrão ou operação em países com nível de proteção reconhecido pela ANPD, conforme Art. 33 da LGPD.`,
  },
  {
    title: '11. Menores de Idade',
    content: `Nossos serviços são destinados exclusivamente a pessoas jurídicas e profissionais adultos. Não coletamos intencionalmente dados de menores de 18 anos. Caso identifiquemos tal situação, os dados serão excluídos imediatamente.`,
  },
  {
    title: '12. Alterações desta Política',
    content: `Esta Política pode ser atualizada periodicamente para refletir mudanças nos nossos serviços, na legislação ou nas nossas práticas. Notificaremos alterações relevantes por e-mail (para clientes cadastrados) ou mediante aviso destacado no site. A data da última atualização estará sempre indicada no cabeçalho deste documento.`,
  },
  {
    title: '13. Contato e DPO',
    content: `Para dúvidas, exercício de direitos ou qualquer questão relacionada a privacidade e proteção de dados:

• **E-mail do DPO:** privacidade@housingpro.tech
• **E-mail geral:** contato@housingpro.tech
• **Endereço:** São Paulo, SP — Brasil

Você também pode registrar reclamação diretamente na **Autoridade Nacional de Proteção de Dados (ANPD)** pelo site www.gov.br/anpd.`,
  },
]

export default function PrivacidadePage() {
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
              <span style={{ color: '#00ffff' }}>Política de Privacidade</span>
            </div>
            <span className="tag-pill" style={{ marginBottom: 20, display: 'inline-block' }}>LGPD</span>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>
              Política de Privacidade
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
                A Housing PRO respeita e valoriza a privacidade de todos os seus clientes, parceiros e visitantes. Este documento descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a <strong style={{ color: '#fff' }}>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>.
              </p>
            </div>

            {/* Quick summary cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 56 }}>
              {[
                { icon: '🔒', label: 'Não vendemos dados', desc: 'Jamais comercializamos seus dados com terceiros' },
                { icon: '✅', label: 'LGPD compliant', desc: 'Em conformidade com a lei brasileira de proteção de dados' },
                { icon: '✉️', label: 'Seus direitos', desc: 'Acesso, correção e exclusão mediante solicitação' },
                { icon: '🛡️', label: 'Dados seguros', desc: 'Criptografia e controle de acesso em todos os sistemas' },
              ].map(c => (
                <div key={c.label} style={{ background: 'rgba(0,255,255,.04)', border: '1px solid rgba(0,255,255,.12)', borderRadius: 12, padding: '16px 18px' }}>
                  <div style={{ fontSize: '1.4rem', marginBottom: 8 }}>{c.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{c.label}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', lineHeight: 1.5 }}>{c.desc}</div>
                </div>
              ))}
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
                Dúvidas sobre privacidade?{' '}
                <a href="mailto:privacidade@housingpro.tech" style={{ color: '#00ffff', textDecoration: 'none', fontWeight: 600 }}>privacidade@housingpro.tech</a>
                {' '}· Veja também nossos{' '}
                <a href="/termos-de-servico" style={{ color: '#00ffff', textDecoration: 'none', fontWeight: 600 }}>Termos de Serviço</a>.
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
