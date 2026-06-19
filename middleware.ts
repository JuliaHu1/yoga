import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PREVIEW_PASSWORD = 'lotus2025';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow the coming-soon page
  if (pathname === '/coming-soon') return NextResponse.next();

  // Allow if preview cookie is set
  const previewCookie = request.cookies.get('preview')?.value;
  if (previewCookie === PREVIEW_PASSWORD) return NextResponse.next();

  // Set preview cookie if ?preview=lotus2025 is in the URL
  const previewParam = request.nextUrl.searchParams.get('preview');
  if (previewParam === PREVIEW_PASSWORD) {
    const response = NextResponse.redirect(new URL(pathname, request.url));
    response.cookies.set('preview', PREVIEW_PASSWORD, { path: '/', maxAge: 60 * 60 * 24 * 7 });
    return response;
  }

  return NextResponse.redirect(new URL('/coming-soon', request.url));
}

export const config = {
  matcher: ['/((?!_next|favicon|icon|.*\\..*).*)'],
};
