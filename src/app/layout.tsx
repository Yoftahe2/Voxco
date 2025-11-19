import { AuthProvider } from '@/components/AuthContext'
import Header from '@/components/Header'
import './globals.css'
import { createClient } from '@/lib/supabase/server'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Voxco Number Ordering Portal',
  description: 'Order phone numbers and manage your communications',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {user && <Header />}
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

