import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  
  // Vercel automatically populates the 'x-vercel-ip-country' header in production
  const country = request.headers.get('x-vercel-ip-country');
  
  const isUsPath = url.pathname.startsWith('/us');

  // Skip geolocation logic for local development to allow testing both sites
  const isLocalhost = url.hostname.includes('localhost') || url.hostname.includes('127.0.0.1');
  if (isLocalhost) return NextResponse.next();

  // If the user is from the US
  if (country === 'US') {
    // And they are trying to access a Global page (not starting with /us)
    if (!isUsPath) {
      // Redirect them to the /us equivalent
      url.pathname = `/us${url.pathname === '/' ? '' : url.pathname}`;
      return NextResponse.redirect(url);
    }
  } 
  // If the user is NOT from the US (Global)
  else if (country && country !== 'US') {
    // And they are trying to access a US page (starting with /us)
    if (isUsPath) {
      // Redirect them to the Global equivalent by stripping '/us'
      url.pathname = url.pathname.replace(/^\/us/, '') || '/';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Run on all paths except static files, api routes, and Next.js internals
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
