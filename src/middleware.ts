import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // Define public paths
  const isPublicPath = path === '/'

  // Get auth status from cookie/token
  // For now, we'll use a dummy check
  const isAuthenticated = request.cookies.get('auth')?.value

  // Redirect authenticated users away from public paths
  if (isPublicPath && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Redirect unauthenticated users to login from protected paths
  if (!isPublicPath && !isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// Add paths that should be protected
export const config = {
  matcher: ['/', '/dashboard/:path*', '/chat/:path*', '/calendar/:path*']
} 