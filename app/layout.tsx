import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AdminProvider } from './admin-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'FINE CARPENTER - Premium Handmade Furniture',
  description: 'Luxury handmade furniture and custom carpentry by Fine Carpenter. Explore our collection of premium woodwork and bespoke designs.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --font-heading: ${_playfairDisplay.style.fontFamily};
            --font-body: ${_geist.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="font-sans antialiased">
        <AdminProvider>
          {children}
        </AdminProvider>
        <Analytics />
      </body>
    </html>
  )
}
