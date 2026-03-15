import { ImageResponse } from 'next/og'
import { getAllSlugs, getPost } from '@/lib/mdx'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

const categoryColors: Record<string, string> = {
  'Performance Marketing': '#f59e0b',
  'Data Engineering': '#3b82f6',
  'AI Automation': '#8b5cf6',
  'Growth Hacking': '#10b981',
  'MarTech': '#ef4444',
  'Estratégia': '#ec4899',
}

async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    // Satori requires WOFF or TTF — not WOFF2
    const res = await fetch(
      'https://fonts.bunny.net/inter/files/inter-latin-800-normal.woff'
    )
    return res.ok ? res.arrayBuffer() : null
  } catch {
    return null
  }
}

export default async function Image(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    return new Response('Not found', { status: 404 })
  }

  const fontData = await loadFont()
  const color = categoryColors[post.category] ?? '#00ffff'
  const titleSize = post.title.length > 70 ? 44 : post.title.length > 50 ? 50 : 56

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 1200,
          height: 630,
          background: '#000033',
          padding: '56px 72px 48px',
          position: 'relative',
          fontFamily: fontData ? 'Inter' : 'sans-serif',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 600,
            height: 400,
            background: `radial-gradient(ellipse at 80% 20%, ${color}14 0%, transparent 65%)`,
            display: 'flex',
          }}
        />

        {/* Grid dots overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            display: 'flex',
          }}
        />

        {/* Category + meta row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36, position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              padding: '6px 18px',
              borderRadius: 999,
              background: `${color}22`,
              border: `1.5px solid ${color}55`,
              color,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            {post.category}
          </div>
          <div style={{ display: 'flex', color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>
            {post.readTime} de leitura
          </div>
          <div style={{ display: 'flex', color: 'rgba(255,255,255,0.2)', fontSize: 14 }}>·</div>
          <div style={{ display: 'flex', color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>
            {post.dateFormatted}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'flex-start',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: titleSize,
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.18,
              maxWidth: 960,
              letterSpacing: '-0.02em',
            }}
          >
            {post.title}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            height: 1,
            background: 'rgba(255,255,255,0.1)',
            marginBottom: 28,
            position: 'relative',
          }}
        />

        {/* Footer row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>

          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                display: 'flex',
                width: 46,
                height: 46,
                borderRadius: 23,
                background: 'linear-gradient(135deg, #00ffff, #0088aa)',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                fontWeight: 800,
                color: '#000033',
              }}
            >
              {post.author.initials}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <div style={{ display: 'flex', color: '#ffffff', fontSize: 16, fontWeight: 700 }}>
                {post.author.name}
              </div>
              <div style={{ display: 'flex', color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>
                {post.author.role}
              </div>
            </div>
          </div>

          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                display: 'flex',
                width: 44,
                height: 44,
                background: 'rgba(0,255,255,0.08)',
                border: '1.5px solid rgba(0,255,255,0.3)',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
              }}
            >
              ⌂
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ display: 'flex', color: '#ffffff', fontWeight: 800, fontSize: 20, gap: 5 }}>
                <span>Housing</span>
                <span style={{ color: '#00ffff' }}>PRO</span>
              </div>
              <div style={{ display: 'flex', color: 'rgba(0,255,255,0.5)', fontSize: 11, letterSpacing: '0.14em' }}>
                ECOSSISTEMAS DIGITAIS
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: `linear-gradient(90deg, transparent 0%, ${color} 40%, ${color} 60%, transparent 100%)`,
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: 'Inter', data: fontData, weight: 800, style: 'normal' }]
        : [],
    }
  )
}
