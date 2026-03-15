import { prisma } from '@/lib/prisma'
import { getAllPosts } from '@/lib/mdx'

export default async function AdminPage() {
  const [totalContacts, recentContacts] = await Promise.all([
    prisma.contact.count(),
    prisma.contact.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
  ])

  const posts = getAllPosts()

  const bySource = await prisma.contact.groupBy({
    by: ['source'],
    _count: { source: true },
    orderBy: { _count: { source: 'desc' } },
  })

  return (
    <>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: 6 }}>Dashboard</h1>
        <p style={{ color: 'rgba(255,255,255,.4)', fontSize: 14 }}>Visão geral da plataforma Housing PRO</p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16, marginBottom: 40 }}>
        {[
          { label: 'Total de Contatos', value: totalContacts, color: '#00ffff' },
          { label: 'Posts Publicados', value: posts.length, color: '#a78bfa' },
          { label: 'Origens distintas', value: bySource.length, color: '#34d399' },
        ].map(stat => (
          <div key={stat.label} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 14, padding: '20px 24px' }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: stat.color }}>{stat.value}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', marginTop: 4 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recent contacts */}
      <div style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 16, padding: '24px 28px', marginBottom: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>Contatos Recentes</h2>
          <a href="/admin/contacts" style={{ fontSize: 13, color: '#00ffff', textDecoration: 'none' }}>Ver todos →</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {recentContacts.length === 0 && (
            <p style={{ color: 'rgba(255,255,255,.3)', fontSize: 14 }}>Nenhum contato ainda.</p>
          )}
          {recentContacts.map(c => (
            <div key={c.id} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 16, padding: '12px 16px', background: 'rgba(255,255,255,.02)', borderRadius: 10, fontSize: 13 }}>
              <div>
                <div style={{ color: '#fff', fontWeight: 600 }}>{c.name}</div>
                <div style={{ color: 'rgba(255,255,255,.4)', fontSize: 12 }}>{c.email}</div>
              </div>
              <div style={{ color: 'rgba(255,255,255,.5)', alignSelf: 'center' }}>{c.interest ?? '—'}</div>
              <div style={{ color: 'rgba(255,255,255,.3)', fontSize: 11, alignSelf: 'center', whiteSpace: 'nowrap' }}>
                {new Date(c.createdAt).toLocaleDateString('pt-BR')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 16, padding: '24px 28px' }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Posts do Blog</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {posts.map(p => (
            <div key={p.slug} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 16, padding: '10px 14px', background: 'rgba(255,255,255,.02)', borderRadius: 8, fontSize: 13, alignItems: 'center' }}>
              <div style={{ color: '#fff' }}>{p.title}</div>
              <div style={{ color: 'rgba(255,255,255,.35)', fontSize: 11 }}>{p.category}</div>
              <div style={{ color: 'rgba(255,255,255,.3)', fontSize: 11 }}>{p.dateFormatted}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
