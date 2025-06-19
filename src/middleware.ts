import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the preferred language from the Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')?.split(',')[0] || 'en'
  
  // Simple language detection
  let lang = 'en' // default to English
  if (acceptLanguage.startsWith('pt')) {
    lang = 'pt'
  } else if (acceptLanguage.startsWith('es')) {
    lang = 'es'
  }

  // Get the current language from cookies if it exists
  const currentLang = request.cookies.get('marcel-quest-language')?.value

  // If there's no language cookie, set it based on the detected language
  if (!currentLang) {
    const response = NextResponse.next()
    response.cookies.set('marcel-quest-language', lang)
    return response
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
} 