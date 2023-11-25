import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ToasterContext from "@/app/context/ToasterContext";
import AuthContext from "@/app/context/AuthContext";
import ActiveStatus from "@/app/components/ActiveStatus";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meow Chat',
  description: 'Messenger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthContext>
      <ToasterContext/>
          <ActiveStatus/>
      {children}
      </AuthContext>
      </body>
    </html>
  )
}
