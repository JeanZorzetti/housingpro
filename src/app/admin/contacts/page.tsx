import { prisma } from '@/lib/prisma'

export default async function ContactsPage() {
  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: 6 }}>Contatos</h1>
        <p style={{ color: 'rgba(255,255,255,.4)', fontSize: 14 }}>{contacts.length} registro{contacts.length !== 1 ? 's' : ''} no banco</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {contacts.length === 0 && (
          <div style={{ padding: '40px 24px', textAlign: 'center', color: 'rgba(255,255,255,.3)', fontSize: 14, background: 'rgba(255,255,255,.02)', borderRadius: 16, border: '1px solid rgba(255,255,255,.07)' }}>
            Nenhum contato registrado ainda.
          </div>
        )}

        {contacts.map(c => (
          <div
            key={c.id}
            style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 14, padding: '20px 24px' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: 16, marginBottom: c.message ? 14 : 0 }}>

              {/* Nome + email */}
              <div>
                <div style={{ color: '#fff', fontWeight: 600, marginBottom: 3 }}>{c.name}</div>
                <div style={{ color: 'rgba(0,255,255,.7)', fontSize: 12 }}>{c.email}</div>
              </div>

              {/* Empresa + tel */}
              <div>
                <div style={{ color: 'rgba(255,255,255,.65)', fontSize: 13 }}>{c.company ?? '—'}</div>
                <div style={{ color: 'rgba(255,255,255,.35)', fontSize: 12 }}>{c.phone ?? '—'}</div>
              </div>

              {/* Interesse + origem */}
              <div>
                <div style={{ color: 'rgba(255,255,255,.7)', fontSize: 13 }}>{c.interest ?? '—'}</div>
                <div style={{ color: 'rgba(255,255,255,.3)', fontSize: 11, marginTop: 3 }}>{c.source ?? 'home'}</div>
              </div>

              {/* Data + ID */}
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: 'rgba(255,255,255,.4)', fontSize: 12 }}>
                  {new Date(c.createdAt).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </div>
                <div style={{ color: 'rgba(255,255,255,.2)', fontSize: 11, marginTop: 3 }}>#{c.id}</div>
              </div>
            </div>

            {/* Mensagem */}
            {c.message && (
              <div style={{ padding: '10px 14px', background: 'rgba(255,255,255,.03)', borderRadius: 8, fontSize: 13, color: 'rgba(255,255,255,.5)', fontStyle: 'italic', borderLeft: '3px solid rgba(0,255,255,.2)' }}>
                {c.message.slice(0, 200)}{c.message.length > 200 ? '…' : ''}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
