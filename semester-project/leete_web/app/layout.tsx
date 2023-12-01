import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LEETE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-center p-14">
        <ul className="flex gap-8">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/components/showcase">Work</Link></li>
          <li><Link href="/components/about">About</Link></li>
          <li><Link href="/components/bookings">Bookings</Link></li>
          <li><Link href="/components/signup">Sign Up</Link></li>
        </ul>
      </nav>{children}
     
      </body>
    </html>
  )
}
