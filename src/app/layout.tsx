import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

import Header from '@/components/header/page'
import Script from 'next/script'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'B2D - Binário para decimal e vice-versa',
  description: 'Conversor binário para decimal e vice-versa',
  openGraph:{
    type: "website",
    locale: "pt_BR",
    url: "https://b2d.vercel.app",
    siteName: "B2D",
    images: "/b2d-logo.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="google-site-verification" content="wcPcsAGOMJLtvdcd0pk_o8SLBIX3kpuEiHbiiHjaaQo" />
        <Script id='breadcrumb-list' type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Sobre a aplicação",
              "item": "https://b2d.vercel.app/how-it-works"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Sobre o desenvolvedor",
              "item": "https://b2d.vercel.app/about-the-developer"
            }]
          }`}
        </Script>
      </head>
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
