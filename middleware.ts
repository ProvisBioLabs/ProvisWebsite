import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || request.nextUrl.hostname;
  
  // Check if the hostname is a production custom domain (not vercel.app or localhost)
  const isVercelDomain = hostname.includes('vercel.app');
  const isLocalhost = hostname.includes('localhost') || hostname.includes('127.0.0.1');

  // If the request is not from Vercel and not from Localhost, we block access to /us
  if (!isVercelDomain && !isLocalhost) {
    // Rewrite the URL to a non-existent route so Next.js renders the 404 page
    request.nextUrl.pathname = '/404';
    return NextResponse.rewrite(request.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  // This middleware will only run on paths starting with /us
  matcher: '/us/:path*',
};
