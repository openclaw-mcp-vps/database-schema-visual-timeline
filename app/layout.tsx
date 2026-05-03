import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Schema Timeline — Visual Database Schema Evolution',
  description: 'Interactive timeline showing database schema changes, breaking changes, and migration impact analysis for DBAs and backend developers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="91edf697-b589-4318-bc35-60be807a8fe8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
