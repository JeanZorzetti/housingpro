import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth()
  if (!userId) redirect('/sign-in')

  return (
    <div style={{ minHeight: '100vh', background: '#000022', color: '#fff', fontFamily: 'Inter, sans-serif' }}>

      {/* Topbar */}
      <header style={{ background: '#00001a', borderBottom: '1px solid rgba(0,255,255,.12)', padding: '0 32px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ fontWeight: 800, fontSize: 15 }}>
            Housing <span style={{ color: '#00ffff' }}>PRO</span>
            <span style={{ color: 'rgba(255,255,255,.3)', fontWeight: 400, marginLeft: 8 }}>Admin</span>
          </span>
          <nav style={{ display: 'flex', gap: 4 }}>
            {[
              { href: '/admin', label: 'Dashboard' },
              { href: '/admin/contacts', label: 'Contatos' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{ padding: '6px 14px', borderRadius: 8, fontSize: 13, color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <UserButton />
      </header>

      {/* Content */}
      <main style={{ padding: '40px 32px', maxWidth: 1100, margin: '0 auto' }}>
        {children}
      </main>
    </div>
  )
}
