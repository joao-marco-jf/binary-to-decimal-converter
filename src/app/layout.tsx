import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bin2Dec - Binário para decimal e vice-versa',
  description: 'Conversor de binário para decimal e vice-versa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
