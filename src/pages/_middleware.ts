import { NextResponse, NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  if (url.pathname === '/') {
    url.pathname = '/news';
    return NextResponse.redirect(url);
  }
}
