import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tailwind Spotify',
  description: 'Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-900 text-zinc-50'>{children}</body>
    </html>
  )
}
