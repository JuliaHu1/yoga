import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === '/coming-soon') return NextResponse.next();
  return NextResponse.redirect(new URL('/coming-soon', request.url));
}

export const config = {
  matcher: ['/((?!_next|favicon|icon|.*\\..*).*)'],
};
