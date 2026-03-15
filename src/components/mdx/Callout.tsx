export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      margin: '28px 0',
      padding: '20px 24px',
      background: 'rgba(0,255,255,.05)',
      border: '1px solid rgba(0,255,255,.2)',
      borderLeft: '4px solid #00ffff',
      borderRadius: 12,
    }}>
      <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 15, lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>
        {children}
      </p>
    </div>
  )
}
