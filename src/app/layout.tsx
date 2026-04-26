import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700','800'] })

export const metadata: Metadata = {
  title: 'Jorge Polanco Rodríguez — Boreman28',
  description: 'Portafolio profesional — Tecnología y Educación en Acción',
  icons: {
    icon: '/icoJp.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js" defer />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}