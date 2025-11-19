import { createServerClient } from '@supabase/ssr'
import { NextResponse, NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  try {
    // Check if environment variables are set
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Missing Supabase environment variables')
      // If Supabase is not configured, allow the request to proceed
      // This prevents the middleware from breaking the app
      return NextResponse.next({ request })
    }

    let supabaseResponse = NextResponse.next({
      request,
    })

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value }) => {
              request.cookies.set(name, value)
            })
            supabaseResponse = NextResponse.next({
              request,
            })
            cookiesToSet.forEach(({ name, value, options }) => {
              supabaseResponse.cookies.set(name, value, options)
            })
          } catch (cookieError) {
            console.error('Cookie setting error:', cookieError)
            // Continue even if cookie setting fails
          }
        },
      },
    })

    // Try to get user, but don't fail if there's an error
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      // Only redirect if user is not authenticated and trying to access protected routes
      if (
        !user &&
        !request.nextUrl.pathname.startsWith('/sign-in') &&
        !request.nextUrl.pathname.startsWith('/sign-up')
      ) {
        const url = request.nextUrl.clone()
        url.pathname = '/sign-in'
        return NextResponse.redirect(url)
      }
    } catch (authError) {
      // If auth check fails, log but don't break the request
      console.error('Auth check failed in middleware:', authError)
      // Allow the request to proceed - let the page handle auth
    }

    return supabaseResponse
  } catch (error) {
    // Catch any other errors and log them
    console.error('Middleware error:', error)
    // Return a response to prevent the middleware from crashing
    return NextResponse.next({ request })
  }
}
