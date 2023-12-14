import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

import Header from '@/components/header/page'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'B2D - Binário para decimal e vice-versa',
  description: 'Conversor binário para decimal e vice-versa',
  openGraph:{
    type: "website",
    locale: "pt_BR",
    url: "https://b2d.vercel.app",
    siteName: "B2D"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
