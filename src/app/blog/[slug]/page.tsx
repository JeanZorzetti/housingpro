import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { posts, getPostBySlug } from '@/data/posts'

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post não encontrado — Housing PRO' }
  return {
    title: `${post.title} — Housing PRO Blog`,
    description: post.excerpt,
  }
}

const categoryColors: Record<string, string> = {
  'Performance Marketing': '#f59e0b',
  'Data Engineering': '#3b82f6',
  'AI Automation': '#8b5cf6',
  'Growth Hacking': '#10b981',
  'Privacidade & Compliance': '#ef4444',
  'Cultura & Times': '#ec4899',
}

export default async function PostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const color = categoryColors[post.category] || '#00ffff'

  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section
          className="grid-bg hero-gradient"
          style={{ paddingTop: 128, paddingBottom: 56, position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, background: `radial-gradient(ellipse, ${color}08 0%, transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, fontSize: 13, color: 'rgba(255,255,255,.4)' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Início</a>
              <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
              <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a>
              <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
              <span style={{ color: '#00ffff' }}>{post.category}</span>
            </div>

            {/* Category + meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
              <span style={{
                padding: '4px 12px',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                background: `${color}18`,
                color,
                border: `1px solid ${color}40`,
              }}>
                {post.category}
              </span>
              <span style={{ color: 'rgba(255,255,255,.35)', fontSize: 13 }}>{post.readTime} de leitura</span>
              <span style={{ color: 'rgba(255,255,255,.2)', fontSize: 13 }}>·</span>
              <span style={{ color: 'rgba(255,255,255,.35)', fontSize: 13 }}>{post.date}</span>
            </div>

            <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>
              {post.title}
            </h1>

            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
              {post.excerpt}
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.08)' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #00ffff, #0099cc)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#000033', flexShrink: 0 }}>
                {post.author.initials}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{post.author.name}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}>{post.author.role}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="grid-bg" style={{ padding: '64px 0 96px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {post.content.map((block, i) => {
                if (block.type === 'h2') return (
                  <h2 key={i} style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginTop: 40, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 4, height: 20, background: color, borderRadius: 2, flexShrink: 0, display: 'inline-block' }} />
                    {block.text}
                  </h2>
                )
                if (block.type === 'h3') return (
                  <h3 key={i} style={{ fontSize: '1.05rem', fontWeight: 700, color: 'rgba(255,255,255,.9)', marginTop: 28, marginBottom: 10, paddingLeft: 14 }}>
                    {block.text}
                  </h3>
                )
                if (block.type === 'p') return (
                  <p key={i} style={{ color: 'rgba(255,255,255,.65)', fontSize: 16, lineHeight: 1.85, marginBottom: 16 }}>
                    {block.text}
                  </p>
                )
                if (block.type === 'ul') return (
                  <ul key={i} style={{ listStyle: 'none', padding: 0, margin: '8px 0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {block.items?.map((item, j) => (
                      <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span style={{ color, flexShrink: 0, marginTop: 4, fontSize: 14 }}>▸</span>
                        <span style={{ color: 'rgba(255,255,255,.65)', fontSize: 15, lineHeight: 1.75 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                )
                if (block.type === 'callout') return (
                  <div key={i} style={{ margin: '28px 0', padding: '20px 24px', background: `${color}08`, border: `1px solid ${color}25`, borderLeft: `4px solid ${color}`, borderRadius: 12 }}>
                    <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 15, lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>
                      {block.text}
                    </p>
                  </div>
                )
                return null
              })}
            </div>

            {/* Tags */}
            <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,.08)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {post.tags.map(tag => (
                  <span key={tag} style={{ padding: '4px 12px', borderRadius: 999, fontSize: 12, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', color: 'rgba(255,255,255,.5)' }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related / back */}
            <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <a href="/blog" className="post-back-link" style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '16px 20px',
                background: 'rgba(255,255,255,.03)',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: 12,
                textDecoration: 'none',
                color: 'rgba(255,255,255,.6)',
                fontSize: 14,
                fontWeight: 500,
              }}>
                ← Todos os artigos
              </a>
              <a href="/contato" className="post-cta-link" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                padding: '16px 20px',
                background: `${color}10`,
                border: `1px solid ${color}30`,
                borderRadius: 12,
                textDecoration: 'none',
                color,
                fontSize: 14,
                fontWeight: 600,
              }}>
                Falar com especialista →
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
        .post-back-link { transition: border-color .2s, color .2s; }
        .post-back-link:hover { border-color: rgba(0,255,255,.25) !important; color: #fff !important; }
        .post-cta-link { transition: opacity .2s; }
        .post-cta-link:hover { opacity: .85; }
      `}</style>
    </>
  )
}
