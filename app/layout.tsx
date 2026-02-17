import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InfraTech - Innovative Construction Solutions',
  description: 'Discover cutting-edge construction services with InfraTech. Specializing in building renovation, interior finishing, roofing solutions, and foundation repair with 30+ years of expertise.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
