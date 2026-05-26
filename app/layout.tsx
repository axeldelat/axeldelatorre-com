import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const workSans = Work_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"]
});

export const metadata: Metadata = {
  title: 'Hosting Estático Premium',
  description: 'Soluciones de hosting estático de alta calidad para tu presencia digital',
  generator: 'v0.app',
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
    <html lang="es">
      <body className={`${workSans.className} bg-[#393E46] text-white antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
