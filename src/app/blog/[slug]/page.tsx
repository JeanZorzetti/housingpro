import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Callout from '@/components/mdx/Callout'
import { getAllSlugs, getPost } from '@/lib/mdx'

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Post não encontrado — Housing PRO' }
  const BASE_URL = 'https://housingpro-tau.vercel.app'
  return {
    title: `${post.title} — Housing PRO Blog`,
    description: post.description,
    robots: post.noindex ? 'noindex,nofollow' : 'index,follow',
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified ?? post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

const categoryColors: Record<string, string> = {
  'Performance Marketing': '#f59e0b',
  'Data Engineering': '#3b82f6',
  'AI Automation': '#8b5cf6',
  'Growth Hacking': '#10b981',
  'MarTech': '#ef4444',
  'Estratégia': '#ec4899',
}

const components = { Callout }

export default async function PostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const color = categoryColors[post.category] ?? '#00ffff'

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
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, fontSize: 13, color: 'rgba(255,255,255,.4)' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Início</a>
              <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
              <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a>
              <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
              <span style={{ color: '#00ffff' }}>{post.category}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
              <span style={{ padding: '4px 12px', borderRadius: 999, fontSize: 12, fontWeight: 600, background: `${color}18`, color, border: `1px solid ${color}40` }}>
                {post.category}
              </span>
              <span style={{ color: 'rgba(255,255,255,.35)', fontSize: 13 }}>{post.readTime} de leitura</span>
              <span style={{ color: 'rgba(255,255,255,.2)', fontSize: 13 }}>·</span>
              <span style={{ color: 'rgba(255,255,255,.35)', fontSize: 13 }}>{post.dateFormatted}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>
              {post.title}
            </h1>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
              {post.excerpt}
            </p>
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
            <div className="mdx-content">
              <MDXRemote source={post.content} components={components} />
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

            {/* Navigation */}
            <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <a href="/blog" className="post-back-link" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 20px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 12, textDecoration: 'none', color: 'rgba(255,255,255,.6)', fontSize: 14, fontWeight: 500 }}>
                ← Todos os artigos
              </a>
              <a href="/contato" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '16px 20px', background: `${color}10`, border: `1px solid ${color}30`, borderRadius: 12, textDecoration: 'none', color, fontSize: 14, fontWeight: 600 }}>
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
      `}</style>
    </>
  )
}
