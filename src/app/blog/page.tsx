import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllPosts, getCategories } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog — Housing PRO',
  description: 'Insights sobre Performance Marketing, Data Engineering, AI Automation e Growth. Conteúdo técnico e estratégico para empresas que querem crescer com dados.',
  alternates: { canonical: `${siteConfig.url}/blog` },
}

const categoryColors: Record<string, string> = {
  'Performance Marketing': '#f59e0b',
  'Data Engineering': '#3b82f6',
  'AI Automation': '#8b5cf6',
  'Growth Hacking': '#10b981',
  'MarTech': '#ef4444',
  'Estratégia': '#ec4899',
}

const categoryEmoji: Record<string, string> = {
  'Performance Marketing': '📈',
  'Data Engineering': '🗄️',
  'AI Automation': '🤖',
  'Growth Hacking': '🚀',
  'MarTech': '🔒',
  'Estratégia': '👥',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getCategories()
  const featured = posts[0]
  const rest = posts.slice(1)

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
            <span className="tag-pill" style={{ marginBottom: 20, display: 'inline-block' }}>Blog</span>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>
              Insights que <span style={{ color: '#00ffff' }}>geram resultados</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 16, lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
              Performance Marketing, Data Engineering, AI Automation e Growth. Conteúdo técnico e estratégico para quem quer crescer com dados.
            </p>
            <div style={{ width: 64, height: 2, background: 'linear-gradient(90deg, transparent, #00ffff, transparent)', margin: '28px auto 0' }} />
          </div>
        </section>

        {/* Content */}
        <section className="grid-bg" style={{ padding: '72px 0 96px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

            {/* Category pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 56, justifyContent: 'center' }}>
              {['Todos', ...categories].map((cat, i) => (
                <span key={cat} style={{
                  padding: '6px 16px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 500,
                  background: i === 0 ? 'rgba(0,255,255,.12)' : 'rgba(255,255,255,.04)',
                  border: `1px solid ${i === 0 ? 'rgba(0,255,255,.35)' : 'rgba(255,255,255,.1)'}`,
                  color: i === 0 ? '#00ffff' : 'rgba(255,255,255,.55)',
                }}>
                  {cat}
                </span>
              ))}
            </div>

            {/* Featured post */}
            <a href={`/blog/${featured.slug}`} className="blog-featured-link" style={{ display: 'block', textDecoration: 'none', marginBottom: 48 }}>
              <article className="blog-featured-card" style={{
                background: 'rgba(255,255,255,.03)',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: 20,
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(0,0,51,1) 0%, rgba(0,30,60,1) 100%)',
                  minHeight: 280,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(0,255,255,.08) 0%, transparent 60%)' }} />
                  <div style={{ textAlign: 'center', position: 'relative', padding: 32 }}>
                    <div style={{ fontSize: 56, marginBottom: 12 }}>{categoryEmoji[featured.category] ?? '📝'}</div>
                    <span style={{ display: 'inline-block', padding: '4px 14px', borderRadius: 999, fontSize: 12, fontWeight: 600, background: 'rgba(0,255,255,.12)', border: '1px solid rgba(0,255,255,.25)', color: '#00ffff' }}>
                      Destaque
                    </span>
                  </div>
                </div>
                <div style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <span style={{
                      padding: '3px 10px', borderRadius: 999, fontSize: 11, fontWeight: 600,
                      background: `${categoryColors[featured.category] ?? '#00ffff'}20`,
                      color: categoryColors[featured.category] ?? '#00ffff',
                      border: `1px solid ${categoryColors[featured.category] ?? '#00ffff'}40`,
                    }}>
                      {featured.category}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,.3)', fontSize: 12 }}>{featured.readTime} de leitura</span>
                  </div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: 14 }}>
                    {featured.title}
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.75, marginBottom: 24 }}>
                    {featured.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #00ffff, #0099cc)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#000033' }}>
                        {featured.author.initials}
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{featured.author.name}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)' }}>{featured.dateFormatted}</div>
                      </div>
                    </div>
                    <span style={{ color: '#00ffff', fontSize: 13, fontWeight: 600 }}>Ler artigo →</span>
                  </div>
                </div>
              </article>
            </a>

            {/* Post grid */}
            <div className="blog-grid">
              {rest.map(post => (
                <a key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="blog-post-card glass-card" style={{ borderRadius: 16, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                      height: 120,
                      background: 'linear-gradient(135deg, rgba(0,10,40,1) 0%, rgba(0,20,60,1) 100%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 50%, ${categoryColors[post.category] ?? '#00ffff'}10 0%, transparent 70%)` }} />
                      <span style={{ fontSize: 36, position: 'relative' }}>{categoryEmoji[post.category] ?? '📝'}</span>
                    </div>
                    <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                        <span style={{
                          padding: '2px 9px', borderRadius: 999, fontSize: 10, fontWeight: 600,
                          background: `${categoryColors[post.category] ?? '#00ffff'}15`,
                          color: categoryColors[post.category] ?? '#00ffff',
                          border: `1px solid ${categoryColors[post.category] ?? '#00ffff'}30`,
                        }}>
                          {post.category}
                        </span>
                        <span style={{ color: 'rgba(255,255,255,.3)', fontSize: 11 }}>{post.readTime}</span>
                      </div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', lineHeight: 1.4, marginBottom: 10, flex: 1 }}>
                        {post.title}
                      </h3>
                      <p style={{ color: 'rgba(255,255,255,.45)', fontSize: 13, lineHeight: 1.65, marginBottom: 16 }}>
                        {post.excerpt.slice(0, 110)}…
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid rgba(255,255,255,.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg, #00ffff, #0099cc)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: '#000033' }}>
                            {post.author.initials}
                          </div>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,.4)' }}>{post.dateFormatted}</span>
                        </div>
                        <span style={{ color: '#00ffff', fontSize: 12, fontWeight: 600 }}>Ler →</span>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div style={{ marginTop: 72, padding: '40px 48px', background: 'rgba(0,255,255,.04)', border: '1px solid rgba(0,255,255,.12)', borderRadius: 20, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>📬</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: 10 }}>Receba novos artigos em primeira mão</h3>
              <p style={{ color: 'rgba(255,255,255,.45)', fontSize: 14, marginBottom: 24, maxWidth: 400, margin: '0 auto 24px' }}>
                Conteúdo técnico e estratégico para líderes de marketing, dados e produto. Sem spam.
              </p>
              <a href="/contato" className="btn-cyan" style={{ padding: '12px 28px', borderRadius: 10, fontSize: 14, display: 'inline-block' }}>
                Entrar em contato
              </a>
            </div>

          </div>
        </section>

      </main>

      <footer className="grid-bg" style={{ paddingTop: 60, paddingBottom: 40, background: '#000022' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <Footer />
        </div>
      </footer>

      <style>{`
        .blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
        .blog-featured-card { transition: border-color .25s, transform .25s; }
        .blog-featured-link:hover .blog-featured-card { border-color: rgba(0,255,255,.3) !important; transform: translateY(-2px); }
        .blog-post-card { transition: border-color .25s, transform .25s; }
        a:hover .blog-post-card { border-color: rgba(0,255,255,.25) !important; transform: translateY(-3px); }
        @media (max-width: 768px) { .blog-featured-card { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
