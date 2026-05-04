import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Payment Behavior Tracker — Predict Which Clients Will Pay Late',
  description: 'Analyzes client payment history, communication patterns, and external signals to predict late payments and suggest collection strategies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="44200e57-7cd6-4b93-8073-36ec9398b8b0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
