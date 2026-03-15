'use client'

import { useState, useRef } from 'react'

interface SearchResult {
  slug: string
  title: string
  summary: string | null
  similarity: number
}

export default function BlogSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const search = async (q: string) => {
    if (!q.trim()) { setResults(null); return }

    setLoading(true)
    setError(false)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q, limit: 5 }),
      })
      if (!res.ok) throw new Error()
      const data = await res.json() as { results: SearchResult[] }
      setResults(data.results)
    } catch {
      setError(true)
      setResults(null)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setQuery(val)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => search(val), 500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (debounceRef.current) clearTimeout(debounceRef.current)
    search(query)
  }

  return (
    <div style={{ marginBottom: 40 }}>
      <form onSubmit={handleSubmit} style={{ position: 'relative', maxWidth: 520, margin: '0 auto' }}>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="2"
          style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
        >
          <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
        </svg>
        <input
          value={query}
          onChange={handleChange}
          placeholder="Busca semântica — ex: automação com IA"
          className="form-input"
          style={{ paddingLeft: 44, paddingRight: 16, borderRadius: 12, padding: '12px 16px 12px 44px', fontSize: 14, width: '100%', boxSizing: 'border-box' }}
        />
        {loading && (
          <svg
            style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', animation: 'spin 1s linear infinite' }}
            width="16" height="16" viewBox="0 0 24 24" fill="none"
          >
            <circle cx="12" cy="12" r="10" stroke="rgba(0,255,255,.2)" strokeWidth="3" />
            <path d="M12 2a10 10 0 0110 10" stroke="#00ffff" strokeWidth="3" strokeLinecap="round" />
          </svg>
        )}
      </form>

      {/* Results */}
      {results !== null && (
        <div style={{ maxWidth: 520, margin: '12px auto 0', background: 'rgba(0,0,40,.95)', border: '1px solid rgba(0,255,255,.15)', borderRadius: 12, overflow: 'hidden' }}>
          {results.length === 0 ? (
            <div style={{ padding: '16px 20px', color: 'rgba(255,255,255,.4)', fontSize: 14, textAlign: 'center' }}>
              Nenhum resultado encontrado.
            </div>
          ) : (
            results.map((r, i) => (
              <a
                key={r.slug}
                href={`/blog/${r.slug}`}
                style={{
                  display: 'block', padding: '14px 20px', textDecoration: 'none',
                  borderBottom: i < results.length - 1 ? '1px solid rgba(255,255,255,.05)' : 'none',
                  transition: 'background .15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,255,255,.06)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{r.title}</span>
                  <span style={{ fontSize: 11, color: '#00ffff', fontWeight: 600, flexShrink: 0, marginLeft: 12 }}>
                    {Math.round(r.similarity * 100)}%
                  </span>
                </div>
                {r.summary && (
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', margin: 0, lineHeight: 1.5 }}>
                    {r.summary.slice(0, 100)}…
                  </p>
                )}
              </a>
            ))
          )}
        </div>
      )}

      {error && (
        <p style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,.3)', marginTop: 8 }}>
          Busca semântica indisponível no momento.
        </p>
      )}

      <style>{`@keyframes spin { from { transform: translateY(-50%) rotate(0deg); } to { transform: translateY(-50%) rotate(360deg); } }`}</style>
    </div>
  )
}
