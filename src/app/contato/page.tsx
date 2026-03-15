'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import RevealObserver from '@/components/RevealObserver'
import Footer from '@/components/Footer'

type FormState = 'idle' | 'loading' | 'success'

const contactOptions = [
  { icon: '📧', label: 'E-mail', value: 'contato@housingpro.tech', href: 'mailto:contato@housingpro.tech' },
  { icon: '💬', label: 'WhatsApp', value: '+55 (11) 9 9999-9999', href: 'https://wa.me/5511999999999' },
  { icon: '📍', label: 'Localização', value: 'São Paulo, Brasil', href: '#' },
  { icon: '⏱️', label: 'Resposta em', value: 'Até 24 horas', href: '#' },
]

const interests = [
  'Performance Marketing',
  'Data Engineering',
  'AI Automation',
  'Growth Hacking',
  'Ecossistema Completo',
  'Outro',
]

export default function ContatoPage() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', interest: '', message: '' })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    setTimeout(() => setState('success'), 1800)
  }

  return (
    <>
      <RevealObserver />
      <Navbar />
      <main>

        <PageHero
          eyebrow="Fale Conosco"
          title="Vamos construir algo"
          titleHighlight="incrível juntos"
          subtitle="Preencha o formulário e um arquiteto de ecossistemas entrará em contato em até 24 horas. Sem compromisso, sem script de vendas."
          breadcrumb="Contato"
        />

        {/* Contact grid */}
        <section className="grid-bg" style={{ padding: '80px 0 96px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48, alignItems: 'start' }}>

              {/* Left — info */}
              <div className="reveal">
                {/* Contact cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
                  {contactOptions.map(o => (
                    <a key={o.label} href={o.href} target={o.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', background: 'rgba(0,0,77,.5)', border: '1px solid rgba(0,255,255,.15)', borderRadius: 14, textDecoration: 'none', transition: 'all .3s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,255,.4)'; (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,100,.65)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,255,.15)'; (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,77,.5)' }}
                    >
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(0,255,255,.08)', border: '1px solid rgba(0,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                        {o.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 2 }}>{o.label}</div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{o.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social */}
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 14 }}>Redes Sociais</div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    {[
                      { label: 'LinkedIn', icon: 'in', href: '#' },
                      { label: 'Instagram', icon: '◈', href: '#' },
                      { label: 'Twitter/X', icon: '𝕏', href: '#' },
                      { label: 'YouTube', icon: '▶', href: '#' },
                    ].map(s => (
                      <a key={s.label} href={s.href} aria-label={s.label} className="social-link">
                        <span style={{ fontSize: 13, fontWeight: 700 }}>{s.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Why us */}
                <div className="glass-card" style={{ borderRadius: 16, padding: 24, marginTop: 32 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 14 }}>Por que a Housing PRO?</div>
                  {[
                    'Diagnóstico inicial gratuito e sem compromisso',
                    'Equipe especialista em cada área, não generalistas',
                    'Relatórios transparentes com acesso total às plataformas',
                    'Contrato sem multa após os primeiros 3 meses',
                  ].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10, fontSize: 13, color: 'rgba(255,255,255,.6)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 1 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — form */}
              <div className="reveal reveal-d2">
                <div className="glass-card" style={{ borderRadius: 20, padding: 40 }}>

                  {state === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '48px 0' }}>
                      <div style={{ fontSize: '3.5rem', marginBottom: 20 }}>✅</div>
                      <h3 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Mensagem enviada!</h3>
                      <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
                        Obrigado, <strong style={{ color: '#00ffff' }}>{form.name}</strong>!<br />
                        Nossa equipe entrará em contato em até 24 horas no e-mail <strong style={{ color: '#fff' }}>{form.email}</strong>.
                      </p>
                      <button
                        onClick={() => { setState('idle'); setForm({ name: '', email: '', company: '', phone: '', interest: '', message: '' }) }}
                        className="btn-outline"
                        style={{ padding: '12px 24px', borderRadius: 10, fontSize: 14, cursor: 'pointer', border: '1.5px solid rgba(0,255,255,.5)' }}
                      >
                        Enviar nova mensagem
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: 6 }}>Envie sua mensagem</h2>
                      <p style={{ color: 'rgba(255,255,255,.4)', fontSize: 14, marginBottom: 28 }}>Todos os campos marcados com * são obrigatórios.</p>
                      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                          <div>
                            <label style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 6, display: 'block' }}>Nome completo *</label>
                            <input name="name" value={form.name} onChange={handle} required placeholder="Seu nome" className="form-input" style={{ borderRadius: 10, padding: '12px 14px', fontSize: 14 }} />
                          </div>
                          <div>
                            <label style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 6, display: 'block' }}>E-mail corporativo *</label>
                            <input name="email" type="email" value={form.email} onChange={handle} required placeholder="voce@empresa.com" className="form-input" style={{ borderRadius: 10, padding: '12px 14px', fontSize: 14 }} />
                          </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                          <div>
                            <label style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 6, display: 'block' }}>Empresa</label>
                            <input name="company" value={form.company} onChange={handle} placeholder="Nome da empresa" className="form-input" style={{ borderRadius: 10, padding: '12px 14px', fontSize: 14 }} />
                          </div>
                          <div>
                            <label style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 6, display: 'block' }}>WhatsApp</label>
                            <input name="phone" value={form.phone} onChange={handle} placeholder="(11) 9 9999-9999" className="form-input" style={{ borderRadius: 10, padding: '12px 14px', fontSize: 14 }} />
                          </div>
                        </div>
                        <div>
                          <label style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 6, display: 'block' }}>Principal interesse *</label>
                          <select name="interest" value={form.interest} onChange={handle} required className="form-input" style={{ borderRadius: 10, padding: '12px 14px', fontSize: 14, cursor: 'pointer' }}>
                            <option value="">Selecione um serviço</option>
                            {interests.map(i => <option key={i}>{i}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 6, display: 'block' }}>Mensagem *</label>
                          <textarea name="message" value={form.message} onChange={handle} required rows={5} placeholder="Conte sobre sua empresa, seus desafios atuais e o que espera alcançar..." className="form-input" style={{ borderRadius: 10, padding: '12px 14px', fontSize: 14, resize: 'vertical' }} />
                        </div>
                        <button type="submit" disabled={state === 'loading'} className="btn-cyan" style={{ padding: '16px', borderRadius: 12, fontSize: 15, border: 'none', cursor: state === 'loading' ? 'wait' : 'pointer' }}>
                          {state === 'loading' ? (
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                              <svg style={{ animation: 'spin 1s linear infinite' }} width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="rgba(0,0,0,.3)" strokeWidth="4" />
                                <path d="M12 2a10 10 0 0110 10" stroke="#000033" strokeWidth="4" strokeLinecap="round" />
                              </svg>
                              Enviando...
                            </span>
                          ) : (
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                              Enviar mensagem
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                            </span>
                          )}
                        </button>
                        <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,.25)' }}>
                          Seus dados estão seguros e não serão compartilhados.
                        </p>
                      </form>
                    </>
                  )}
                </div>
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

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </>
  )
}
