import type { Metadata } from 'next'
import { Bebas_Neue, Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--app-font-display',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--app-font-sans',
  display: 'swap',
})

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--app-font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abasi Solo Contest — Santono Music',
  description:
    'Participa en el concurso de guitar solo organizado por Santono Music, distribuidor oficial de Abasi Concepts en Costa Rica.',
  openGraph: {
    title: 'Abasi Solo Contest — Santono Music',
    description:
      'Participa en el concurso de guitar solo organizado por Santono Music, distribuidor oficial de Abasi Concepts en Costa Rica.',
    images: ['/opengraph.jpg'],
    locale: 'es_CR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abasi Solo Contest — Santono Music',
    description:
      'Participa en el concurso de guitar solo organizado por Santono Music.',
    images: ['/opengraph.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
