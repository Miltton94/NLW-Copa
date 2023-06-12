import { ReactNode } from 'react'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: 'Poll app',
  description: 'Bolão da Copa do Mundo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-gray-900 bg-hero bg-cover bg-center bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  )
}
