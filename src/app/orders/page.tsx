import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import OrdersPage from '@/components/OrdersPage'

export default async function OrdersPageRoute() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/sign-in')
  }

  return <OrdersPage />
}

