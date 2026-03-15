'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success'

export default function Contact() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', interest: '', message: '' })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    setTimeout(() => setState('success'), 1800)
  }

  return (
    <footer id="contato" className="grid-bg" style={{ paddingTop: 80, paddingBottom: 40, background: '#000022' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Top grid */}
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginBottom: 80 }}>

          {/* Left — info */}
          <div className="reveal">
            <span className="tag-pill" style={{ marginBottom: 20, display: 'inline-block' }}>Fale Conosco</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>
              Vamos construir<br />algo <span style={{ color: '#00ffff' }}>incrível</span> juntos
            </h2>
            <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 15, lineHeight: 1.75, marginBottom: 36 }}>
              Preencha o formulário e um arquiteto de ecossistemas entrará em contato em até 24 horas.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  ),
                  text: 'contato@housingpro.tech',
                  href: 'mailto:contato@housingpro.tech',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  ),
                  text: 'São Paulo, Brasil',
                  href: '#',
                },
              ].map((item, i) => (
                <a key={i} href={item.href} style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'rgba(255,255,255,.7)', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.7)')}
                >
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(0,255,255,.08)', border: '1px solid rgba(0,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: 14 }}>{item.text}</span>
                </a>
              ))}
            </div>

            {/* Social */}
            <div style={{ marginTop: 36 }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 12 }}>Redes Sociais</div>
              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  { label: 'LinkedIn', icon: 'in' },
                  { label: 'Instagram', icon: '◈' },
                  { label: 'Twitter/X', icon: '𝕏' },
                ].map(s => (
                  <a key={s.label} href="#" aria-label={s.label} className="social-link">
                    <span style={{ fontSize: 13, fontWeight: 700 }}>{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-d2">
            <div className="glass-card" style={{ borderRadius: 20, padding: 36 }}>

              {state === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Mensagem Enviada!</h3>
                  <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 15, lineHeight: 1.7 }}>
                    Obrigado, <strong style={{ color: '#00ffff' }}>{form.name}</strong>!<br />
                    Nossa equipe entrará em contato em até 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div>
                      <label style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 6, display: 'block' }}>Nome *</label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="Seu nome" className="form-input" style={{ borderRadius: 10, padding: '12px 14px', fontSize: 14 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 6, display: 'block' }}>E-mail *</label>
                      <input name="email" type="email" value={form.email} onChange={handle} required placeholder="voce@empresa.com" className="form-input" style={{ borderRadius: 10, padding: '12px 14px', fontSize: 14 }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 6, display: 'block' }}>Empresa</label>
                    <input name="company" value={form.company} onChange={handle} placeholder="Nome da empresa" className="form-input" style={{ borderRadius: 10, padding: '12px 14px', fontSize: 14 }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 6, display: 'block' }}>Interesse</label>
                    <select name="interest" value={form.interest} onChange={handle} className="form-input" style={{ borderRadius: 10, padding: '12px 14px', fontSize: 14, cursor: 'pointer' }}>
                      <option value="">Selecione um serviço</option>
                      <option>Performance Marketing</option>
                      <option>Data Engineering</option>
                      <option>AI Automation</option>
                      <option>Growth Hacking</option>
                      <option>Ecossistema Completo</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 6, display: 'block' }}>Mensagem</label>
                    <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Conte um pouco sobre seus desafios e objetivos..." className="form-input" style={{ borderRadius: 10, padding: '12px 14px', fontSize: 14, resize: 'vertical' }} />
                  </div>
                  <button type="submit" disabled={state === 'loading'} className="btn-cyan" style={{ padding: '14px', borderRadius: 12, fontSize: 15, border: 'none', cursor: state === 'loading' ? 'wait' : 'pointer', marginTop: 4 }}>
                    {state === 'loading' ? (
                      <>
                        <svg style={{ animation: 'spin 1s linear infinite' }} width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="rgba(0,0,0,.3)" strokeWidth="4" />
                          <path d="M12 2a10 10 0 0110 10" stroke="#000033" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                      </>
                    )}
                  </button>
                  <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,.25)', marginTop: 4 }}>
                    Seus dados estão seguros. Sem spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div style={{ paddingTop: 40, borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center', marginBottom: 32 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>
                Housing <span style={{ color: '#00ffff' }}>PRO</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,.35)', fontSize: 13, lineHeight: 1.6 }}>
                Ecossistemas Digitais de Alta Performance.<br />
                MarTech · Data Engineering · IA
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px', justifyContent: 'flex-end' }}>
              {[
                { href: '#sobre', label: 'Quem Somos' },
                { href: '#pilares', label: 'Pilares' },
                { href: '#servicos', label: 'Serviços' },
                { href: '#como-funciona', label: 'Como Funciona' },
              ].map(l => (
                <a key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,.4)', fontSize: 13, textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.4)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', color: 'rgba(255,255,255,.2)', fontSize: 12, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.04)' }}>
            © 2026 Housing PRO — Ecossistemas Digitais. Todos os direitos reservados.
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </footer>
  )
}
