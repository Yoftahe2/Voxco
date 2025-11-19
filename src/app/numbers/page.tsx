import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Numbers from '@/components/Numbers'

export default async function NumbersPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/sign-in')
  }

  return <Numbers />
}

