import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Housing PRO — Ecossistemas Digitais'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: 'linear-gradient(135deg, #000066 0%, #000033 60%, #001a40 100%)',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* Cyan glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,255,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Top label */}
        <div
          style={{
            position: 'absolute',
            top: 56,
            left: 80,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#00ffff',
            }}
          />
          <span style={{ color: '#00ffff', fontSize: 18, fontWeight: 600, letterSpacing: 4 }}>
            HOUSING PRO
          </span>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <span
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            Ecossistemas Digitais
          </span>
          <span
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#00ffff',
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            de Alta Performance
          </span>
        </div>

        {/* Description */}
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 24, maxWidth: 680 }}>
          MarTech · Data Engineering · AI Automation para empresas que querem crescer com tecnologia
        </span>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 56,
            right: 80,
            color: 'rgba(0,255,255,0.5)',
            fontSize: 18,
          }}
        >
          www.housingpro.com.br
        </div>
      </div>
    ),
    { ...size }
  )
}
