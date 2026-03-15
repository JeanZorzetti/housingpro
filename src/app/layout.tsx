import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Housing PRO — Ecossistemas Digitais',
  description: 'MarTech e IA para escalar resultados. Ecossistemas Digitais de alta performance.',
  openGraph: {
    title: 'Housing PRO — Ecossistemas Digitais',
    description: 'MarTech e IA para escalar resultados.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
