import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  
  // Vercel automatically populates the 'x-vercel-ip-country' header in production
  const country = request.headers.get('x-vercel-ip-country');
  
  const isUsPath = url.pathname.startsWith('/us');

  // Check if it's a known bot
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = /bot|crawler|spider|crawling|googlebot|bingbot|yandexbot|duckduckbot|slurp|baiduspider/i.test(userAgent);

  // If the request is for the Provinase landing page subdomain
  const hostname = request.headers.get('host') || '';
  if (hostname === 'provinase.provisbiolabs.com' || hostname === 'www.provinase.provisbiolabs.com') {
    // Rewrite all requests on this subdomain to /provinase-site (keeping the path if they navigate, though it's a single page)
    if (!url.pathname.startsWith('/provinase-site')) {
      url.pathname = `/provinase-site${url.pathname === '/' ? '' : url.pathname}`;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // Skip geolocation logic for bots to allow them to crawl all versions of the site
  // Skip geolocation logic for local development to allow testing both sites
  const isLocalhost = url.hostname.includes('localhost') || url.hostname.includes('127.0.0.1');
  if (isLocalhost || isBot) return NextResponse.next();

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
